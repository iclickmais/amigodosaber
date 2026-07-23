import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  getLesson as findLesson,
  getSector as findSector,
  type TrackKind,
} from "@/lib/study-tracks";

// ————— Registo simples: telefone + apelido —————

const RegisterSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(6, "Número inválido")
    .max(20, "Número inválido")
    .regex(/^[+\d\s-]+$/, "Use apenas dígitos e +"),
  surname: z.string().trim().min(2, "Apelido muito curto").max(60, "Apelido demasiado longo"),
});

function normalizePhone(raw: string): string {
  const digits = raw.replace(/[^\d]/g, "");
  if (digits.startsWith("244")) return "+" + digits;
  if (digits.length === 9) return "+244" + digits;
  return raw.startsWith("+") ? raw.replace(/\s|-/g, "") : "+" + digits;
}

export const registerStudent = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => RegisterSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const phone = normalizePhone(data.phone);
    const surname = data.surname;

    // Upsert by phone
    const { data: existing } = await supabaseAdmin
      .from("students")
      .select("id, phone, surname")
      .eq("phone", phone)
      .maybeSingle();

    if (existing) {
      // Update surname if changed
      if (existing.surname !== surname) {
        await supabaseAdmin.from("students").update({ surname }).eq("id", existing.id);
      }
      return { id: existing.id, phone, surname };
    }

    const { data: created, error } = await supabaseAdmin
      .from("students")
      .insert({ phone, surname })
      .select("id, phone, surname")
      .single();
    if (error || !created) throw new Error(error?.message ?? "Falha ao registar");
    return { id: created.id, phone: created.phone, surname: created.surname };
  });

// ————— Aula: cache-first, senão gera com IA —————

const LessonSchema = z.object({
  kind: z.enum(["concurso", "preparatorio"]),
  trackSlug: z.string(),
  sectorSlug: z.string(),
  moduleSlug: z.string(),
  lessonSlug: z.string(),
  studentId: z.string().uuid(),
});

interface LessonRow {
  id: string;
  title: string;
  content_md: string;
}

async function callLovableAI(body: unknown): Promise<string> {
  const key = process.env.LOVABLE_API_KEY;
  if (!key) throw new Error("LOVABLE_API_KEY em falta");
  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    if (res.status === 429) throw new Error("Muitas requisições. Tenta novamente daqui a pouco.");
    if (res.status === 402) throw new Error("Créditos de IA esgotados. Contacta o administrador.");
    throw new Error(`Falha na IA (${res.status}): ${text.slice(0, 200)}`);
  }
  const json = (await res.json()) as { choices?: { message?: { content?: string } }[] };
  const content = json.choices?.[0]?.message?.content ?? "";
  if (!content) throw new Error("Resposta vazia da IA");
  return content;
}

export const getOrGenerateLesson = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LessonSchema.parse(input))
  .handler(async ({ data }): Promise<LessonRow> => {
    const found = findLesson(
      data.kind as TrackKind,
      data.trackSlug,
      data.sectorSlug,
      data.moduleSlug,
      data.lessonSlug,
    );
    if (!found) throw new Error("Aula não encontrada na taxonomia");

    // Gate: aluno precisa de acesso pago activo ao sector
    const { checkAccess } = await import("@/lib/access.functions");
    const access = await checkAccess(
      data.studentId,
      data.kind as TrackKind,
      data.trackSlug,
      data.sectorSlug,
    );
    if (!access.hasAccess) {
      throw new Error("ACCESS_REQUIRED: pagamento necessário para abrir esta aula.");
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");


    // Cache lookup
    const { data: cached } = await supabaseAdmin
      .from("lessons")
      .select("id, title, content_md")
      .eq("track_kind", data.kind)
      .eq("track_slug", data.trackSlug)
      .eq("sector_slug", data.sectorSlug)
      .eq("module_slug", data.moduleSlug)
      .eq("lesson_slug", data.lessonSlug)
      .maybeSingle();
    if (cached) return cached as unknown as LessonRow;

    const kindLabel = data.kind === "concurso" ? "concurso público em Angola" : "exame de acesso à universidade em Angola";
    const prompt = `És um professor angolano experiente. Escreve uma aula completa em português europeu para um aluno que se prepara para ${kindLabel}.

Área: ${found.track.name}
Sector/Curso: ${found.sector.name}
Módulo: ${found.module.title}
Aula: ${found.lesson.title}

Estrutura obrigatória (usa Markdown com títulos ## e ###, listas, negrito, tabelas quando útil):

## Introdução
2 parágrafos que enquadram o tema e explicam porque é importante para este concurso/curso.

## Conceitos fundamentais
Explica 4 a 6 conceitos-chave. Cada conceito com:
- Definição clara
- Exemplo concreto (usa contexto angolano sempre que possível)
- Nota prática

## Aprofundamento
Desenvolve os conceitos com detalhe técnico, incluindo fórmulas, casos, artigos de lei ou dados relevantes.

## Exemplos resolvidos
Apresenta 3 exemplos ou problemas totalmente resolvidos, mostrando o raciocínio passo-a-passo.

## Erros comuns a evitar
Lista 4-6 armadilhas típicas em provas.

## Resumo
5 pontos-chave que o aluno deve memorizar.

## Glossário
6 a 10 termos técnicos com definição curta.

Escreve como se estivesses numa sala de aula: tom respeitoso, explicativo, sem infantilizar. Sê rigoroso e completo — mínimo 900 palavras.`;

    const content = await callLovableAI({
      model: "google/gemini-3.6-flash",
      messages: [
        { role: "system", content: "És um professor angolano rigoroso e didáctico. Escreves aulas completas em português europeu (norma angolana)." },
        { role: "user", content: prompt },
      ],
    });

    const { data: inserted, error } = await supabaseAdmin
      .from("lessons")
      .insert({
        track_kind: data.kind,
        track_slug: data.trackSlug,
        sector_slug: data.sectorSlug,
        module_slug: data.moduleSlug,
        lesson_slug: data.lessonSlug,
        title: found.lesson.title,
        content_md: content,
      })
      .select("id, title, content_md")
      .single();
    if (error || !inserted) throw new Error(error?.message ?? "Falha ao gravar aula");
    return inserted as unknown as LessonRow;
  });

// ————— Quiz: cache-first, senão gera —————

const QuizSchema = z.object({ lessonId: z.string().uuid() });

export interface QuizQuestion {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface QuizPayload {
  id: string;
  lesson_id: string;
  questions: QuizQuestion[];
}

export const getOrGenerateQuiz = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => QuizSchema.parse(input))
  .handler(async ({ data }): Promise<QuizPayload> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: cached } = await supabaseAdmin
      .from("quizzes")
      .select("id, lesson_id, questions")
      .eq("lesson_id", data.lessonId)
      .maybeSingle();
    if (cached) return cached as unknown as QuizPayload;

    const { data: lesson, error: lessonErr } = await supabaseAdmin
      .from("lessons")
      .select("title, content_md")
      .eq("id", data.lessonId)
      .single();
    if (lessonErr || !lesson) throw new Error("Aula não encontrada");

    const raw = await callLovableAI({
      model: "google/gemini-3.6-flash",
      messages: [
        { role: "system", content: "És um professor que cria testes de escolha múltipla rigorosos em português europeu. Devolves APENAS JSON válido, sem texto extra." },
        {
          role: "user",
          content: `Baseando-te na aula abaixo, cria 10 perguntas de escolha múltipla.

Regras:
- Cada pergunta tem exactamente 4 opções.
- Uma e só uma opção correcta.
- Explica sempre porque a opção é correcta (2-3 frases).
- Distribui a dificuldade: 3 fáceis, 4 médias, 3 difíceis.
- Nunca uses "Todas as anteriores" ou "Nenhuma das anteriores".

Devolve JSON exactamente neste formato (sem markdown, sem \`\`\`json):
{"questions":[{"q":"...","options":["A","B","C","D"],"correct":0,"explanation":"..."}]}

AULA — ${lesson.title}:
${lesson.content_md.slice(0, 6000)}`,
        },
      ],
      response_format: { type: "json_object" },
    });

    let parsed: { questions?: QuizQuestion[] };
    try {
      parsed = JSON.parse(raw);
    } catch {
      // try to recover json body
      const match = raw.match(/\{[\s\S]*\}/);
      if (!match) throw new Error("A IA não devolveu JSON válido");
      parsed = JSON.parse(match[0]);
    }
    const questions = (parsed.questions ?? []).filter(
      (q) =>
        q &&
        typeof q.q === "string" &&
        Array.isArray(q.options) &&
        q.options.length === 4 &&
        Number.isInteger(q.correct) &&
        q.correct >= 0 &&
        q.correct <= 3,
    );
    if (questions.length < 5) throw new Error("Quiz gerado incompleto — tenta novamente");

    const { data: inserted, error } = await supabaseAdmin
      .from("quizzes")
      .insert({ lesson_id: data.lessonId, questions: questions as unknown as never })
      .select("id, lesson_id, questions")
      .single();
    if (error || !inserted) throw new Error(error?.message ?? "Falha ao gravar quiz");
    return inserted as unknown as QuizPayload;
  });

// ————— Submeter tentativa —————

const AttemptSchema = z.object({
  studentId: z.string().uuid(),
  quizId: z.string().uuid(),
  answers: z.array(z.number().int().min(0).max(3)),
});

export const submitAttempt = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AttemptSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: quiz, error: qErr } = await supabaseAdmin
      .from("quizzes")
      .select("id, lesson_id, questions")
      .eq("id", data.quizId)
      .single();
    if (qErr || !quiz) throw new Error("Quiz não encontrado");

    const questions = quiz.questions as unknown as QuizQuestion[];
    const total = questions.length;
    let score = 0;
    const wrongIdx: number[] = [];
    const correctIdx: number[] = [];
    const detail = questions.map((q, i) => {
      const chosen = data.answers[i] ?? -1;
      const correct = chosen === q.correct;
      if (correct) {
        score += 1;
        correctIdx.push(i);
      } else {
        wrongIdx.push(i);
      }
      return { chosen, correct: q.correct, isCorrect: correct };
    });

    // Verify student exists
    const { data: student } = await supabaseAdmin
      .from("students")
      .select("id")
      .eq("id", data.studentId)
      .maybeSingle();
    if (!student) throw new Error("Aluno não registado");

    await supabaseAdmin.from("attempts").insert({
      student_id: data.studentId,
      quiz_id: data.quizId,
      score,
      total,
      answers: detail,
    });

    // Alimenta a fila de repetição espaçada.
    const { enqueueMistakes, markMasteries } = await import("@/lib/revision.functions");
    await enqueueMistakes({
      studentId: data.studentId,
      quizId: data.quizId,
      lessonId: quiz.lesson_id,
      wrongIndices: wrongIdx,
    });
    await markMasteries({
      studentId: data.studentId,
      quizId: data.quizId,
      correctIndices: correctIdx,
    });

    // Mark lesson as completed if score >= 60%
    if (score / total >= 0.6) {
      await supabaseAdmin
        .from("progress")
        .upsert(
          { student_id: data.studentId, lesson_id: quiz.lesson_id },
          { onConflict: "student_id,lesson_id" },
        );
    }

    return { score, total, detail };
  });

// ————— Painel: progresso do aluno —————

const StudentIdSchema = z.object({ studentId: z.string().uuid() });

export const getStudentDashboard = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => StudentIdSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: student } = await supabaseAdmin
      .from("students")
      .select("id, phone, surname, created_at")
      .eq("id", data.studentId)
      .maybeSingle();
    if (!student) throw new Error("Aluno não encontrado");

    const { data: attempts } = await supabaseAdmin
      .from("attempts")
      .select("id, quiz_id, score, total, taken_at, quizzes(lesson_id, lessons(title, track_kind, track_slug, sector_slug, module_slug, lesson_slug))")
      .eq("student_id", data.studentId)
      .order("taken_at", { ascending: false })
      .limit(20);

    const { data: completedLessons } = await supabaseAdmin
      .from("progress")
      .select("lesson_id, completed_at, lessons(title, track_kind, track_slug, sector_slug, module_slug, lesson_slug)")
      .eq("student_id", data.studentId)
      .order("completed_at", { ascending: false });

    return {
      student,
      attempts: attempts ?? [],
      completedLessons: completedLessons ?? [],
    };
  });

// ————— Estatística de sector: quantas aulas o aluno concluiu —————

const SectorProgressSchema = z.object({
  studentId: z.string().uuid().optional(),
  kind: z.enum(["concurso", "preparatorio"]),
  trackSlug: z.string(),
  sectorSlug: z.string(),
});

export const getSectorProgress = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => SectorProgressSchema.parse(input))
  .handler(async ({ data }) => {
    const sector = findSector(data.kind as TrackKind, data.trackSlug, data.sectorSlug);
    if (!sector) throw new Error("Sector não encontrado");
    const totalLessons = sector.sector.modules.reduce((s, m) => s + m.lessons.length, 0);

    if (!data.studentId) return { totalLessons, completed: 0, completedLessonIds: [] as string[] };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows } = await supabaseAdmin
      .from("progress")
      .select("lesson_id, lessons!inner(track_kind, track_slug, sector_slug, lesson_slug, module_slug)")
      .eq("student_id", data.studentId)
      .eq("lessons.track_kind", data.kind)
      .eq("lessons.track_slug", data.trackSlug)
      .eq("lessons.sector_slug", data.sectorSlug);

    return {
      totalLessons,
      completed: rows?.length ?? 0,
      completedLessonIds: (rows ?? []).map((r) => r.lesson_id),
    };
  });
