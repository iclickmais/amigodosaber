import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  getLesson as findLesson,
  getSector as findSector,
  type TrackKind,
} from "@/lib/study-tracks";
import { buildRichLessonContent } from "@/lib/lesson-builder";

// ————— Registo simples: telefone + apelido —————

const RegisterSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(6, "Número inválido")
    .max(20, "Número inválido")
    .regex(/^[+\d\s-]+$/, "Use apenas dígitos e +"),
  surname: z.string().trim().min(2, "Apelido muito curto").max(60, "Apelido demasiado longo"),
  referralCode: z.string().trim().min(3).max(32).optional(),
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
    const phone = normalizePhone(data.phone);
    const surname = data.surname;

    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

      // Upsert by phone
      const { data: existing } = await supabaseAdmin
        .from("students")
        .select("id, phone, surname")
        .eq("phone", phone)
        .maybeSingle();

      if (existing) {
        // Update surname if changed; a repeated login never creates a second referral.
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
      if (data.referralCode) {
        const { recordAffiliateRegistration } = await import("@/lib/affiliate.functions");
        await recordAffiliateRegistration(supabaseAdmin, created.id, data.referralCode);
      }
      return { id: created.id, phone: created.phone, surname: created.surname };
    } catch (err) {
      console.warn("Supabase not connected, using local session fallback:", err);
      return { 
        id: "00000000-0000-0000-0000-" + phone.replace(/\D/g, "").padStart(12, "0").slice(-12), 
        phone, 
        surname 
      };
    }
  });

// ————— Aula: conteúdo pré-preparado, sem IA em tempo real —————

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

function stableUuid(input: string): string {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  const parts = [0, 1, 2, 3].map((offset) => {
    let value = hash ^ (offset * 0x9e3779b9);
    value = Math.imul(value ^ (value >>> 16), 2246822507);
    value = Math.imul(value ^ (value >>> 13), 3266489909);
    return ((value ^ (value >>> 16)) >>> 0).toString(16).padStart(8, "0");
  });
  const hex = parts.join("").slice(0, 32).split("");
  hex[12] = "5";
  hex[16] = ((parseInt(hex[16], 16) & 0x3) | 0x8).toString(16);
  return `${hex.slice(0, 8).join("")}-${hex.slice(8, 12).join("")}-${hex.slice(12, 16).join("")}-${hex.slice(16, 20).join("")}-${hex.slice(20).join("")}`;
}

function buildPreparedLesson(
  found: ReturnType<typeof findLesson>,
  data: z.infer<typeof LessonSchema>,
): LessonRow {
  if (!found) throw new Error("Aula não encontrada na taxonomia");
  const { track, sector, module, lesson } = found;
  const scope = `${data.kind}:${data.trackSlug}:${data.sectorSlug}:${data.moduleSlug}:${data.lessonSlug}`;
  return {
    id: stableUuid(`lesson:${scope}`),
    title: lesson.title,
    content_md: buildRichLessonContent(track.name, sector.name, module.title, lesson.title, data.kind),
  };
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

    // Gate: aluno precisa de acesso pago activo ao sector (excepto a 1ª aula do sector)
    const sector = findSector(data.kind as TrackKind, data.trackSlug, data.sectorSlug);
    if (!sector) throw new Error("Sector não encontrado");

    // Regra: as primeiras 3 aulas do sector são gratuitas antes do paywall.
    const allSectorLessons: { moduleSlug: string; lessonSlug: string }[] = [];
    for (const m of sector.sector.modules) {
      for (const l of m.lessons) {
        allSectorLessons.push({ moduleSlug: m.slug, lessonSlug: l.slug });
      }
    }
    const freeLessons = allSectorLessons.slice(0, 3);
    const isFreeLesson = freeLessons.some(
      (fl) => fl.moduleSlug === data.moduleSlug && fl.lessonSlug === data.lessonSlug
    );

    if (!isFreeLesson) {
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
    }

    const prepared = buildPreparedLesson(found, data);

    // Primeiro lê o conteúdo já gravado. Se ainda não existir, grava imediatamente
    // a aula pré-preparada; nunca chama IA nem deixa o aluno num estado de espera.
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
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

      const { data: inserted } = await supabaseAdmin
        .from("lessons")
        .upsert(
          {
            id: prepared.id,
            track_kind: data.kind,
            track_slug: data.trackSlug,
            sector_slug: data.sectorSlug,
            module_slug: data.moduleSlug,
            lesson_slug: data.lessonSlug,
            title: prepared.title,
            content_md: prepared.content_md,
          },
          { onConflict: "track_kind,track_slug,sector_slug,module_slug,lesson_slug" },
        )
        .select("id, title, content_md")
        .single();

      if (inserted) return inserted as unknown as LessonRow;
    } catch (err) {
      console.warn("Aula pré-preparada servida localmente; Supabase indisponível:", err);
    }

    return prepared;
  });

// ————— Quiz: pré-preparado, cacheado e sem IA em tempo real —————

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

function buildPreparedQuiz(lessonId: string, title: string): QuizPayload {
  const questions: QuizQuestion[] = [
    {
      q: `Qual é o foco principal da aula “${title}”?`,
      options: ["Compreender e aplicar os conceitos do tema", "Memorizar palavras sem contexto", "Ignorar os exemplos práticos", "Estudar apenas o título"],
      correct: 0,
      explanation: "A aprendizagem exige compreensão, aplicação e revisão do tema, não apenas memorização isolada.",
    },
    {
      q: "Qual é o primeiro passo recomendado perante um exercício?",
      options: ["Ler o enunciado e identificar o que é pedido", "Escolher a opção mais longa", "Saltar directamente para a conclusão", "Ignorar os dados apresentados"],
      correct: 0,
      explanation: "A leitura cuidadosa permite separar dados relevantes, comando e informações acessórias.",
    },
    {
      q: "O que torna uma resposta académica mais forte?",
      options: ["Definição, fundamentação e aplicação", "Uma frase sem justificação", "Cópia integral do enunciado", "Uso de termos sem explicação"],
      correct: 0,
      explanation: "Uma resposta clara apresenta o conceito, explica a razão e mostra como ele se aplica.",
    },
    {
      q: "Para que serve o resumo de cinco linhas?",
      options: ["Verificar se a ideia foi compreendida", "Substituir todos os exercícios", "Evitar a revisão", "Aumentar o texto sem propósito"],
      correct: 0,
      explanation: "Resumir com concisão é uma forma de recuperação activa e revela lacunas de compreensão.",
    },
    {
      q: "Qual estratégia ajuda a consolidar a memória?",
      options: ["Revisão espaçada e recuperação activa", "Ler uma vez e nunca voltar ao tema", "Estudar apenas na véspera", "Evitar testar-se"],
      correct: 0,
      explanation: "Revisões distribuídas no tempo e perguntas de memória fortalecem a retenção.",
    },
    {
      q: "Como deve ser tratado um ponto que depende de legislação actualizada?",
      options: ["Confirmar a norma oficial vigente", "Usar qualquer publicação sem data", "Ignorar a actualização", "Substituir a lei por opinião"],
      correct: 0,
      explanation: "Normas podem mudar; por isso, a fonte oficial e a data de consulta devem ser verificadas.",
    },
    {
      q: "O que fazer depois de errar uma questão?",
      options: ["Analisar a causa do erro e refazer o raciocínio", "Apagar a resposta e seguir sem rever", "Decorar apenas a letra", "Desistir do módulo"],
      correct: 0,
      explanation: "O erro torna-se aprendizagem quando o estudante identifica a causa e corrige o procedimento.",
    },
    {
      q: "Qual elemento demonstra aplicação prática?",
      options: ["Relacionar o conceito com uma situação do sector", "Repetir o título da aula", "Evitar exemplos", "Responder sem passos"],
      correct: 0,
      explanation: "Aplicar significa transferir o conhecimento para uma situação concreta e justificar a decisão.",
    },
    {
      q: "Como verificar uma conclusão?",
      options: ["Conferir se responde exactamente ao que foi pedido", "Escolher a resposta mais rápida", "Ignorar as condições do problema", "Trocar a conclusão por um resumo"],
      correct: 0,
      explanation: "A verificação final compara a conclusão com o comando e com as condições do enunciado.",
    },
    {
      q: "Qual é o objectivo do checklist no fim da aula?",
      options: ["Medir autonomia e indicar o que rever", "Substituir o estudo", "Limitar a compreensão", "Eliminar o quiz"],
      correct: 0,
      explanation: "O checklist ajuda o aluno a avaliar a própria preparação e a planear a próxima revisão.",
    },
  ];
  return { id: stableUuid(`quiz:${lessonId}`), lesson_id: lessonId, questions };
}

export const getOrGenerateQuiz = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => QuizSchema.parse(input))
  .handler(async ({ data }): Promise<QuizPayload> => {
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { data: cached } = await supabaseAdmin
        .from("quizzes")
        .select("id, lesson_id, questions")
        .eq("lesson_id", data.lessonId)
        .maybeSingle();
      if (cached) return cached as unknown as QuizPayload;

      const { data: lesson } = await supabaseAdmin
        .from("lessons")
        .select("title")
        .eq("id", data.lessonId)
        .maybeSingle();
      const prepared = buildPreparedQuiz(data.lessonId, lesson?.title ?? "esta aula");
      const { data: inserted } = await supabaseAdmin
        .from("quizzes")
        .upsert(
          { id: prepared.id, lesson_id: prepared.lesson_id, questions: prepared.questions as unknown as never },
          { onConflict: "lesson_id" },
        )
        .select("id, lesson_id, questions")
        .single();
      if (inserted) return inserted as unknown as QuizPayload;
      return prepared;
    } catch (err) {
      console.warn("Quiz pré-preparado servido localmente; Supabase indisponível:", err);
      return buildPreparedQuiz(data.lessonId, "esta aula");
    }
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
      .select("id, lesson_id, questions, lessons(track_kind, track_slug, sector_slug, module_slug, lesson_slug)")
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

    // Mark lesson as completed if score >= 60% and trigger the three-lesson funnel once.
    if (score / total >= 0.6) {
      const { data: existingProgress } = await supabaseAdmin
        .from("progress")
        .select("lesson_id")
        .eq("student_id", data.studentId)
        .eq("lesson_id", quiz.lesson_id)
        .maybeSingle();
      await supabaseAdmin
        .from("progress")
        .upsert(
          { student_id: data.studentId, lesson_id: quiz.lesson_id },
          { onConflict: "student_id,lesson_id" },
        );

      const lesson = (quiz as any).lessons;
      if (!existingProgress && lesson) {
        const sector = findSector(lesson.track_kind as TrackKind, lesson.track_slug, lesson.sector_slug);
        const firstModule = sector?.sector.modules[0];
        const lessonIndex = firstModule?.lessons.findIndex((item) => item.slug === lesson.lesson_slug) ?? -1;
        if (lessonIndex >= 0 && lessonIndex < 3) {
          const { trackLessonCompletion } = await import("@/lib/notifications.functions");
          await trackLessonCompletion({ data: { studentId: data.studentId, lessonIndex, sectorSlug: lesson.sector_slug } });
        }
      }
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
