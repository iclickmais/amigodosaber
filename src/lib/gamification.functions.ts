import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSector, type TrackKind } from "@/lib/study-tracks";

const LeaderboardSchema = z.object({ limit: z.number().int().min(1).max(50).default(10) });

export interface LeaderboardRow {
  rank: number;
  studentId: string;
  surname: string;
  points: number;
  quizzesPassed: number;
  lessonsCompleted: number;
}

export const getLeaderboard = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LeaderboardSchema.parse(input))
  .handler(async ({ data }): Promise<LeaderboardRow[]> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const [{ data: attempts }, { data: progress }, { data: students }] = await Promise.all([
      supabaseAdmin.from("attempts").select("student_id, score, total").limit(10000),
      supabaseAdmin.from("progress").select("student_id, lesson_id").limit(10000),
      supabaseAdmin.from("students").select("id, surname").limit(10000),
    ]);

    const studentsMap = new Map((students ?? []).map((s) => [s.id, s.surname]));
    const stats = new Map<string, { points: number; quizzesPassed: number; lessonsCompleted: number }>();
    const ensure = (id: string) => {
      const current = stats.get(id) ?? { points: 0, quizzesPassed: 0, lessonsCompleted: 0 };
      stats.set(id, current);
      return current;
    };

    for (const attempt of attempts ?? []) {
      const current = ensure(attempt.student_id);
      const passed = attempt.total > 0 && attempt.score / attempt.total >= 0.6;
      current.points += passed ? 50 : 15;
      if (passed) current.quizzesPassed += 1;
    }
    const uniqueProgress = new Set<string>();
    for (const item of progress ?? []) {
      const key = `${item.student_id}:${item.lesson_id}`;
      if (uniqueProgress.has(key)) continue;
      uniqueProgress.add(key);
      const current = ensure(item.student_id);
      current.points += 25;
      current.lessonsCompleted += 1;
    }

    return Array.from(stats.entries())
      .filter(([studentId]) => studentsMap.has(studentId))
      .map(([studentId, value]) => ({
        rank: 0,
        studentId,
        surname: studentsMap.get(studentId) ?? "Aluno",
        ...value,
      }))
      .sort((a, b) => b.points - a.points || b.lessonsCompleted - a.lessonsCompleted)
      .slice(0, data.limit)
      .map((row, index) => ({ ...row, rank: index + 1 }));
  });

const CertificateInputSchema = z.object({
  studentId: z.string().uuid(),
  kind: z.enum(["concurso", "preparatorio"]),
  trackSlug: z.string(),
  sectorSlug: z.string(),
});

export interface CertificateRecord {
  id: string;
  certificate_code: string;
  issued_at: string;
  studentName: string;
  kind: string;
  trackSlug: string;
  sectorSlug: string;
  sectorName: string;
  trackName: string;
}

export const issueCertificate = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => CertificateInputSchema.parse(input))
  .handler(async ({ data }): Promise<CertificateRecord> => {
    const found = getSector(data.kind as TrackKind, data.trackSlug, data.sectorSlug);
    if (!found) throw new Error("Curso não encontrado");
    const totalLessons = found.sector.modules.reduce((total, module) => total + module.lessons.length, 0);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: completed } = await supabaseAdmin
      .from("progress")
      .select("lesson_id, lessons(track_kind, track_slug, sector_slug)")
      .eq("student_id", data.studentId);
    const completedCount = (completed ?? []).filter((row: any) => {
      const lesson = row.lessons;
      return lesson?.track_kind === data.kind && lesson?.track_slug === data.trackSlug && lesson?.sector_slug === data.sectorSlug;
    }).length;
    if (completedCount < totalLessons) {
      throw new Error(`Conclua todas as aulas para emitir o certificado (${completedCount}/${totalLessons}).`);
    }

    let { data: certificate } = await supabaseAdmin
      .from("certificates")
      .select("id, certificate_code, issued_at")
      .eq("student_id", data.studentId)
      .eq("kind", data.kind)
      .eq("track_slug", data.trackSlug)
      .eq("sector_slug", data.sectorSlug)
      .maybeSingle();
    if (!certificate) {
      const code = `ADS-${data.kind.slice(0, 3).toUpperCase()}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
      const inserted = await supabaseAdmin
        .from("certificates")
        .insert({
          student_id: data.studentId,
          kind: data.kind,
          track_slug: data.trackSlug,
          sector_slug: data.sectorSlug,
          certificate_code: code,
        })
        .select("id, certificate_code, issued_at")
        .single();
      if (inserted.error) throw new Error(`Não foi possível emitir o certificado: ${inserted.error.message}`);
      certificate = inserted.data;
    }

    const { data: student } = await supabaseAdmin.from("students").select("surname").eq("id", data.studentId).single();
    return {
      id: certificate.id,
      certificate_code: certificate.certificate_code,
      issued_at: certificate.issued_at,
      studentName: student?.surname ?? "Aluno",
      kind: data.kind,
      trackSlug: data.trackSlug,
      sectorSlug: data.sectorSlug,
      sectorName: found.sector.name,
      trackName: found.track.name,
    };
  });

const CertificateLookupSchema = z.object({ certificateId: z.string().uuid(), studentId: z.string().uuid() });

export const getCertificate = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => CertificateLookupSchema.parse(input))
  .handler(async ({ data }): Promise<CertificateRecord> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: certificate, error } = await supabaseAdmin
      .from("certificates")
      .select("id, certificate_code, issued_at, student_id, kind, track_slug, sector_slug, students(surname)")
      .eq("id", data.certificateId)
      .eq("student_id", data.studentId)
      .single();
    if (error || !certificate) throw new Error("Certificado não encontrado");
    const found = getSector(certificate.kind as TrackKind, certificate.track_slug, certificate.sector_slug);
    if (!found) throw new Error("Curso do certificado não encontrado");
    return {
      id: certificate.id,
      certificate_code: certificate.certificate_code,
      issued_at: certificate.issued_at,
      studentName: (certificate.students as any)?.surname ?? "Aluno",
      kind: certificate.kind,
      trackSlug: certificate.track_slug,
      sectorSlug: certificate.sector_slug,
      sectorName: found.sector.name,
      trackName: found.track.name,
    };
  });
