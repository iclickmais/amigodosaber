import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSector, type TrackKind } from "@/lib/study-tracks";

const StudentIdSchema = z.object({ studentId: z.string().uuid() });

export interface AttemptSummary {
  id: string;
  quiz_id: string;
  score: number;
  total: number;
  taken_at: string;
  lesson: {
    id: string;
    title: string;
    track_kind: string;
    track_slug: string;
    sector_slug: string;
    module_slug: string;
    lesson_slug: string;
  } | null;
}

export interface AccessGrantRow {
  id: string;
  kind: string;
  track_slug: string;
  sector_slug: string;
  expires_at: string | null;
  created_at: string;
}

export interface ApprovalNotice {
  id: string;
  kind: string;
  track_name: string;
  sector_name: string;
  status: "approved" | "rejected" | "pending";
  amount_kz: number;
  created_at: string;
}

export interface LearningLibraryItem {
  id: string;
  kind: string;
  track_slug: string;
  sector_slug: string;
  track_name: string;
  sector_name: string;
  expires_at: string | null;
  totalLessons: number;
  completedLessons: number;
  progressPct: number;
}

export interface StudentNotification {
  id: string;
  notification_type: string;
  title: string;
  body: string;
  status: string;
  channel: string;
  delivery_url: string | null;
  created_at: string;
}

export const getStudentPanel = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => StudentIdSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: student } = await supabaseAdmin
      .from("students")
      .select("id, phone, surname, created_at")
      .eq("id", data.studentId)
      .maybeSingle();
    if (!student) throw new Error("Aluno não encontrado");

    const [attemptsRes, progressRes, grantsRes, requestsRes, notificationsRes] = await Promise.all([
      supabaseAdmin
        .from("attempts")
        .select(
          "id, quiz_id, score, total, taken_at, quizzes(lesson_id, lessons(id, title, track_kind, track_slug, sector_slug, module_slug, lesson_slug))",
        )
        .eq("student_id", data.studentId)
        .order("taken_at", { ascending: false })
        .limit(50),
      supabaseAdmin
        .from("progress")
        .select("lesson_id, completed_at, lessons(title, track_kind, track_slug, sector_slug, module_slug, lesson_slug)")
        .eq("student_id", data.studentId)
        .order("completed_at", { ascending: false }),
      supabaseAdmin
        .from("access_grants")
        .select("id, kind, track_slug, sector_slug, expires_at, created_at")
        .eq("student_id", data.studentId)
        .order("created_at", { ascending: false }),
      supabaseAdmin
        .from("payment_requests")
        .select("id, kind, track_name, sector_name, status, amount_kz, created_at")
        .eq("student_id", data.studentId)
        .in("status", ["approved", "rejected", "pending"])
        .order("created_at", { ascending: false })
        .limit(20),
      supabaseAdmin
        .from("notifications")
        .select("id, notification_type, title, body, status, channel, delivery_url, created_at")
        .eq("student_id", data.studentId)
        .order("created_at", { ascending: false })
        .limit(20),
    ]);

    const attempts: AttemptSummary[] = (attemptsRes.data ?? []).map((a: any) => ({
      id: a.id,
      quiz_id: a.quiz_id,
      score: a.score,
      total: a.total,
      taken_at: a.taken_at,
      lesson: a.quizzes?.lessons
        ? { id: a.quizzes.lessons.id, ...a.quizzes.lessons }
        : null,
    }));

    // Biblioteca do aluno: cada acesso aprovado recebe progresso calculado a partir da taxonomia e dos registos persistidos.
    const learningLibrary: LearningLibraryItem[] = (grantsRes.data ?? []).map((grant: AccessGrantRow) => {
      const found = getSector(grant.kind as TrackKind, grant.track_slug, grant.sector_slug);
      const totalLessons = found
        ? found.sector.modules.reduce((total, module) => total + module.lessons.length, 0)
        : 0;
      const completedLessons = (progressRes.data ?? []).filter((row: any) => {
        const lesson = row.lessons;
        return lesson?.track_kind === grant.kind && lesson?.track_slug === grant.track_slug && lesson?.sector_slug === grant.sector_slug;
      }).length;
      return {
        id: grant.id,
        kind: grant.kind,
        track_slug: grant.track_slug,
        sector_slug: grant.sector_slug,
        track_name: found?.track.name ?? grant.track_slug,
        sector_name: found?.sector.name ?? grant.sector_slug,
        expires_at: grant.expires_at,
        totalLessons,
        completedLessons,
        progressPct: totalLessons > 0 ? Math.min(100, Math.round((completedLessons / totalLessons) * 100)) : 0,
      };
    });

    // Best score per lesson
    const bestByLesson = new Map<string, AttemptSummary>();
    for (const a of attempts) {
      if (!a.lesson) continue;
      const cur = bestByLesson.get(a.lesson.id);
      if (!cur || a.score / a.total > cur.score / cur.total) {
        bestByLesson.set(a.lesson.id, a);
      }
    }

    return {
      student,
      attempts,
      bestByLesson: Array.from(bestByLesson.values()),
      completedLessons: progressRes.data ?? [],
      grants: (grantsRes.data ?? []) as AccessGrantRow[],
      learningLibrary,
      requests: (requestsRes.data ?? []) as ApprovalNotice[],
      notifications: (notificationsRes.data ?? []) as StudentNotification[],
    };
  });
