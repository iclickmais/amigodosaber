import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSector, type TrackKind } from "@/lib/study-tracks";
import { checkAccess } from "@/lib/access.functions";
import { enqueueMistakes } from "@/lib/revision.functions";
import type { QuizQuestion } from "@/lib/study.functions";

const SIMULADO_QUESTIONS = 30;
const SIMULADO_DURATION_SEC = 45 * 60; // 45 minutos

const SectorSchema = z.object({
  studentId: z.string().uuid(),
  kind: z.enum(["concurso", "preparatorio"]),
  trackSlug: z.string(),
  sectorSlug: z.string(),
});

export interface SimuladoQuestion extends QuizQuestion {
  quiz_id: string;
  question_index: number;
  lesson_id: string;
  lesson_title: string;
}

export interface SimuladoPayload {
  questions: SimuladoQuestion[];
  durationSec: number;
  kind: string;
  trackSlug: string;
  sectorSlug: string;
}

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export const startSimulado = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => SectorSchema.parse(input))
  .handler(async ({ data }): Promise<SimuladoPayload> => {
    const found = getSector(data.kind as TrackKind, data.trackSlug, data.sectorSlug);
    if (!found) throw new Error("Sector não encontrado");
    const access = await checkAccess(
      data.studentId,
      data.kind as TrackKind,
      data.trackSlug,
      data.sectorSlug,
    );
    if (!access.hasAccess) throw new Error("ACCESS_REQUIRED");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    // Todos os quizzes já gerados para as aulas deste sector
    const { data: rows } = await supabaseAdmin
      .from("quizzes")
      .select("id, questions, lesson_id, lessons!inner(id, title, track_kind, track_slug, sector_slug)")
      .eq("lessons.track_kind", data.kind)
      .eq("lessons.track_slug", data.trackSlug)
      .eq("lessons.sector_slug", data.sectorSlug);

    const pool: SimuladoQuestion[] = [];
    for (const r of rows ?? []) {
      const row = r as unknown as {
        id: string;
        lesson_id: string;
        questions: QuizQuestion[];
        lessons: { title: string } | null;
      };
      row.questions.forEach((q, idx) => {
        pool.push({
          ...q,
          quiz_id: row.id,
          question_index: idx,
          lesson_id: row.lesson_id,
          lesson_title: row.lessons?.title ?? "Aula",
        });
      });
    }

    if (pool.length < 10) {
      throw new Error(
        "SIMULADO_NEEDS_LESSONS: abre pelo menos algumas aulas e responde aos quizzes primeiro para desbloquear o simulado.",
      );
    }

    const selected = shuffle(pool).slice(0, Math.min(SIMULADO_QUESTIONS, pool.length));

    return {
      questions: selected,
      durationSec: SIMULADO_DURATION_SEC,
      kind: data.kind,
      trackSlug: data.trackSlug,
      sectorSlug: data.sectorSlug,
    };
  });

const SubmitSchema = z.object({
  studentId: z.string().uuid(),
  kind: z.enum(["concurso", "preparatorio"]),
  trackSlug: z.string(),
  sectorSlug: z.string(),
  durationSec: z.number().int().min(0),
  answers: z.array(
    z.object({
      quiz_id: z.string().uuid(),
      question_index: z.number().int().min(0),
      lesson_id: z.string().uuid(),
      chosen: z.number().int().min(-1).max(3),
      correct: z.number().int().min(0).max(3),
    }),
  ),
});

export const submitSimulado = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => SubmitSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const total = data.answers.length;
    const score = data.answers.filter((a) => a.chosen === a.correct).length;

    await supabaseAdmin.from("simulado_attempts").insert({
      student_id: data.studentId,
      kind: data.kind,
      track_slug: data.trackSlug,
      sector_slug: data.sectorSlug,
      score,
      total,
      duration_sec: data.durationSec,
      answers: data.answers as unknown as never,
    });

    // Envia erros para a fila de revisão (agrupados por quiz)
    const byQuiz = new Map<string, { lessonId: string; wrong: number[] }>();
    for (const a of data.answers) {
      if (a.chosen !== a.correct) {
        const entry = byQuiz.get(a.quiz_id) ?? { lessonId: a.lesson_id, wrong: [] };
        entry.wrong.push(a.question_index);
        byQuiz.set(a.quiz_id, entry);
      }
    }
    for (const [quizId, info] of byQuiz.entries()) {
      await enqueueMistakes({
        studentId: data.studentId,
        quizId,
        lessonId: info.lessonId,
        wrongIndices: info.wrong,
      });
    }

    // Média do sector para comparação
    const { data: agg } = await supabaseAdmin
      .from("simulado_attempts")
      .select("score, total")
      .eq("kind", data.kind)
      .eq("track_slug", data.trackSlug)
      .eq("sector_slug", data.sectorSlug);
    const pcts = (agg ?? []).map((r) => (r.total > 0 ? r.score / r.total : 0));
    const avg = pcts.length ? pcts.reduce((s, v) => s + v, 0) / pcts.length : 0;

    return { score, total, durationSec: data.durationSec, sectorAveragePct: Math.round(avg * 100) };
  });
