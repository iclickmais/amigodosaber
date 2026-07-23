import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { QuizQuestion } from "@/lib/study.functions";

// Intervalos SM-2 simplificados em dias por streak.
const INTERVALS_DAYS = [1, 3, 7, 21, 45];

export function nextReviewDate(streak: number): string {
  const days = INTERVALS_DAYS[Math.min(streak, INTERVALS_DAYS.length - 1)];
  const d = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  return d.toISOString();
}

// Chama-se do submitAttempt e do submitSimulado — enfileira as perguntas erradas.
export async function enqueueMistakes(params: {
  studentId: string;
  quizId: string;
  lessonId: string;
  wrongIndices: number[];
}): Promise<void> {
  if (params.wrongIndices.length === 0) return;
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const rows = params.wrongIndices.map((idx) => ({
    student_id: params.studentId,
    quiz_id: params.quizId,
    lesson_id: params.lessonId,
    question_index: idx,
    streak: 0,
    next_review_at: new Date().toISOString(),
    last_result: "wrong",
  }));
  // Insert com upsert por (student, quiz, question_index) — reinicia streak em caso de reincidência.
  await supabaseAdmin
    .from("revision_queue")
    .upsert(rows, { onConflict: "student_id,quiz_id,question_index" });
}

// Marca sucesso quando o aluno acerta a mesma pergunta no quiz normal — avança o streak.
export async function markMasteries(params: {
  studentId: string;
  quizId: string;
  correctIndices: number[];
}): Promise<void> {
  if (params.correctIndices.length === 0) return;
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data: existing } = await supabaseAdmin
    .from("revision_queue")
    .select("id, question_index, streak")
    .eq("student_id", params.studentId)
    .eq("quiz_id", params.quizId)
    .in("question_index", params.correctIndices);
  for (const row of existing ?? []) {
    const newStreak = row.streak + 1;
    await supabaseAdmin
      .from("revision_queue")
      .update({
        streak: newStreak,
        next_review_at: nextReviewDate(newStreak),
        last_result: "correct",
      })
      .eq("id", row.id);
  }
}

// ————— Fila de revisão para o aluno —————

const StudentIdSchema = z.object({ studentId: z.string().uuid() });

export interface RevisionCard {
  id: string;
  quiz_id: string;
  lesson_id: string;
  question_index: number;
  streak: number;
  next_review_at: string;
  question: QuizQuestion;
  lesson: {
    title: string;
    track_kind: string;
    track_slug: string;
    sector_slug: string;
    module_slug: string;
    lesson_slug: string;
  } | null;
}

export const getRevisionQueue = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => StudentIdSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const nowIso = new Date().toISOString();
    const { data: rows } = await supabaseAdmin
      .from("revision_queue")
      .select(
        "id, quiz_id, lesson_id, question_index, streak, next_review_at, quizzes(questions), lessons(title, track_kind, track_slug, sector_slug, module_slug, lesson_slug)",
      )
      .eq("student_id", data.studentId)
      .lte("next_review_at", nowIso)
      .order("next_review_at", { ascending: true })
      .limit(30);
    const cards: RevisionCard[] = [];
    for (const r of rows ?? []) {
      const row = r as unknown as {
        id: string;
        quiz_id: string;
        lesson_id: string;
        question_index: number;
        streak: number;
        next_review_at: string;
        quizzes: { questions: QuizQuestion[] } | null;
        lessons: RevisionCard["lesson"];
      };
      const q = row.quizzes?.questions?.[row.question_index];
      if (!q) continue;
      cards.push({
        id: row.id,
        quiz_id: row.quiz_id,
        lesson_id: row.lesson_id,
        question_index: row.question_index,
        streak: row.streak,
        next_review_at: row.next_review_at,
        question: q,
        lesson: row.lessons,
      });
    }

    // Contagem total pendente incluindo futuras (para o painel)
    const { count: totalDue } = await supabaseAdmin
      .from("revision_queue")
      .select("id", { count: "exact", head: true })
      .eq("student_id", data.studentId)
      .lte("next_review_at", nowIso);

    return { cards, totalDue: totalDue ?? cards.length };
  });

const AnswerSchema = z.object({
  cardId: z.string().uuid(),
  correct: z.boolean(),
});

export const submitRevisionCard = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AnswerSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: card } = await supabaseAdmin
      .from("revision_queue")
      .select("id, streak")
      .eq("id", data.cardId)
      .single();
    if (!card) throw new Error("Cartão não encontrado");
    if (data.correct) {
      const newStreak = card.streak + 1;
      // Se dominou (3 acertos seguidos com espaçamento), remove da fila.
      if (newStreak >= 3) {
        await supabaseAdmin.from("revision_queue").delete().eq("id", card.id);
        return { removed: true };
      }
      await supabaseAdmin
        .from("revision_queue")
        .update({
          streak: newStreak,
          next_review_at: nextReviewDate(newStreak),
          last_result: "correct",
        })
        .eq("id", card.id);
    } else {
      await supabaseAdmin
        .from("revision_queue")
        .update({
          streak: 0,
          next_review_at: nextReviewDate(0),
          last_result: "wrong",
        })
        .eq("id", card.id);
    }
    return { removed: false };
  });
