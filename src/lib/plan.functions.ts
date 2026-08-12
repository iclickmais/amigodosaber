import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSector, type TrackKind } from "@/lib/study-tracks";

const SectorSchema = z.object({
  studentId: z.string().uuid(),
  kind: z.enum(["concurso", "preparatorio"]),
  trackSlug: z.string(),
  sectorSlug: z.string(),
});

const SetTargetSchema = SectorSchema.extend({
  targetDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export const setStudyPlanTarget = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => SetTargetSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    await supabaseAdmin
      .from("study_plans")
      .upsert(
        {
          student_id: data.studentId,
          kind: data.kind,
          track_slug: data.trackSlug,
          sector_slug: data.sectorSlug,
          target_date: data.targetDate,
        },
        { onConflict: "student_id,kind,track_slug,sector_slug" },
      );
    return { ok: true };
  });

export interface TodayItem {
  moduleSlug: string;
  moduleTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  completed: boolean;
}

export interface TodayPlan {
  kind: string;
  trackSlug: string;
  sectorSlug: string;
  sectorName: string;
  trackName: string;
  targetDate: string;
  daysLeft: number;
  totalLessons: number;
  completedLessons: number;
  todayItems: TodayItem[];
  progressPct: number;
}

const GetPlanSchema = z.object({ studentId: z.string().uuid() });

export const getStudyPlans = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => GetPlanSchema.parse(input))
  .handler(async ({ data }): Promise<TodayPlan[]> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: plans } = await supabaseAdmin
      .from("study_plans")
      .select("kind, track_slug, sector_slug, target_date")
      .eq("student_id", data.studentId);
    if (!plans || plans.length === 0) return [];

    const { data: progress } = await (supabaseAdmin as any)
      .from("progress")
      .select("lesson_id, lessons(track_kind, track_slug, sector_slug, module_slug, lesson_slug)")
      .eq("student_id", data.studentId);

    const completedByKey = new Set<string>();
    for (const p of progress ?? []) {
      const row = p as unknown as {
        lessons: { track_kind: string; track_slug: string; sector_slug: string; module_slug: string; lesson_slug: string } | null;
      };
      if (row.lessons) {
        completedByKey.add(
          `${row.lessons.track_kind}/${row.lessons.track_slug}/${row.lessons.sector_slug}/${row.lessons.module_slug}/${row.lessons.lesson_slug}`,
        );
      }
    }

    const result: TodayPlan[] = [];
    for (const p of plans) {
      const sector = getSector(p.kind as TrackKind, p.track_slug, p.sector_slug);
      if (!sector) continue;
      const allLessons: { moduleSlug: string; moduleTitle: string; lessonSlug: string; lessonTitle: string; completed: boolean }[] = [];
      for (const mod of sector.sector.modules) {
        for (const les of mod.lessons) {
          const key = `${p.kind}/${p.track_slug}/${p.sector_slug}/${mod.slug}/${les.slug}`;
          allLessons.push({
            moduleSlug: mod.slug,
            moduleTitle: mod.title,
            lessonSlug: les.slug,
            lessonTitle: les.title,
            completed: completedByKey.has(key),
          });
        }
      }
      const totalLessons = allLessons.length;
      const completedLessons = allLessons.filter((l) => l.completed).length;
      const remaining = allLessons.filter((l) => !l.completed);

      const target = new Date(p.target_date + "T23:59:59");
      const now = new Date();
      const daysLeft = Math.max(
        1,
        Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)),
      );
      const perDay = Math.max(1, Math.ceil(remaining.length / daysLeft));
      const todayItems = remaining.slice(0, perDay);

      result.push({
        kind: p.kind,
        trackSlug: p.track_slug,
        sectorSlug: p.sector_slug,
        sectorName: sector.sector.name,
        trackName: sector.track.name,
        targetDate: p.target_date,
        daysLeft,
        totalLessons,
        completedLessons,
        todayItems,
        progressPct: totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0,
      });
    }
    return result;
  });


const PreferencesSchema = z.object({
  studentId: z.string().uuid(),
  dailyMinutes: z.number().int().min(10).max(240),
  targetDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).nullable().optional(),
  goal: z.enum(["progress", "exam", "revision"]),
  preferredTime: z.enum(["morning", "afternoon", "evening", "flexible"]),
});

export type StudyPreferences = {
  studentId: string;
  dailyMinutes: number;
  targetDate: string | null;
  goal: "progress" | "exam" | "revision";
  preferredTime: "morning" | "afternoon" | "evening" | "flexible";
  aiPlan: string[];
  updatedAt: string;
};

export const saveStudyPreferences = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => PreferencesSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: saved, error } = await (supabaseAdmin as any)
      .from("study_profiles")
      .upsert(
        {
          student_id: data.studentId,
          daily_minutes: data.dailyMinutes,
          target_date: data.targetDate ?? null,
          goal: data.goal,
          preferred_time: data.preferredTime,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "student_id" },
      )
      .select("student_id, daily_minutes, target_date, goal, preferred_time, ai_plan, updated_at")
      .single();
    if (error || !saved) throw new Error(error?.message ?? "Não foi possível guardar as preferências.");
    return {
      studentId: saved.student_id,
      dailyMinutes: saved.daily_minutes,
      targetDate: saved.target_date,
      goal: saved.goal,
      preferredTime: saved.preferred_time,
      aiPlan: Array.isArray(saved.ai_plan) ? saved.ai_plan : [],
      updatedAt: saved.updated_at,
    } as StudyPreferences;
  });

export const getStudyPreferences = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => GetPlanSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: saved } = await (supabaseAdmin as any)
      .from("study_profiles")
      .select("student_id, daily_minutes, target_date, goal, preferred_time, ai_plan, updated_at")
      .eq("student_id", data.studentId)
      .maybeSingle();
    if (!saved) return null;
    return {
      studentId: saved.student_id,
      dailyMinutes: saved.daily_minutes,
      targetDate: saved.target_date,
      goal: saved.goal,
      preferredTime: saved.preferred_time,
      aiPlan: Array.isArray(saved.ai_plan) ? saved.ai_plan : [],
      updatedAt: saved.updated_at,
    } as StudyPreferences;
  });

const CoachSchema = PreferencesSchema.extend({
  kind: z.enum(["concurso", "preparatorio"]),
  trackSlug: z.string(),
  sectorSlug: z.string(),
});

function fallbackCoachAdvice(args: z.infer<typeof CoachSchema>, remaining: number, lessonsPerDay: number): string[] {
  const timeLabel = {
    morning: "de manhã",
    afternoon: "à tarde",
    evening: "à noite",
    flexible: "no horário em que tens mais foco",
  }[args.preferredTime];
  const goalLabel = args.goal === "exam" ? "aproximação da prova" : args.goal === "revision" ? "revisão espaçada" : "progresso constante";
  return [
    `Estuda ${args.dailyMinutes} minutos ${timeLabel}; divide o tempo entre leitura activa e recuperação sem consultar o material.`,
    `Meta de hoje: ${Math.min(remaining, lessonsPerDay)} ${Math.min(remaining, lessonsPerDay) === 1 ? "aula" : "aulas"}. Fecha cada aula com o quiz e uma nota de três linhas.`,
    `O teu foco é ${goalLabel}. Se errares uma questão, guarda-a para a revisão e tenta explicar o raciocínio em voz alta.`,
    "Mantém uma sessão curta mesmo nos dias difíceis: consistência vale mais do que estudar muitas horas uma única vez.",
  ];
}

export const generatePersonalizedPlan = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => CoachSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const sector = getSector(data.kind as TrackKind, data.trackSlug, data.sectorSlug);
    if (!sector) throw new Error("Sector de estudo não encontrado.");

    const { data: progress } = await (supabaseAdmin as any)
      .from("progress")
      .select("lesson_id, lessons(track_kind, track_slug, sector_slug, module_slug, lesson_slug)")
      .eq("student_id", data.studentId);
    const completed = new Set<string>();
    for (const row of progress ?? []) {
      const lesson = (row as any).lessons;
      if (lesson) completed.add(`${lesson.track_kind}/${lesson.track_slug}/${lesson.sector_slug}/${lesson.module_slug}/${lesson.lesson_slug}`);
    }

    const remaining: string[] = [];
    for (const module of sector.sector.modules) {
      for (const lesson of module.lessons) {
        const key = `${data.kind}/${data.trackSlug}/${data.sectorSlug}/${module.slug}/${lesson.slug}`;
        if (!completed.has(key)) remaining.push(`${module.title}: ${lesson.title}`);
      }
    }
    const lessonsPerDay = Math.max(1, Math.floor(data.dailyMinutes / 25));
    const fallback = fallbackCoachAdvice(data, remaining.length, lessonsPerDay);
    let advice = fallback;
    let source: "ia" | "local" = "local";

    try {
      const { callLovableAI } = await import("@/lib/lesson-gen.server");
      const raw = await callLovableAI({
        model: "google/gemini-3.6-flash",
        messages: [
          { role: "system", content: "És um coach de estudo angolano. Responde apenas com JSON válido no formato {\"advice\":[\"...\"]}. Dá 4 recomendações curtas, concretas e motivadoras em português europeu. Não inventes matérias nem datas." },
          { role: "user", content: JSON.stringify({ dailyMinutes: data.dailyMinutes, targetDate: data.targetDate, goal: data.goal, preferredTime: data.preferredTime, remainingLessons: remaining.slice(0, 40) }) },
        ],
      });
      const parsed = JSON.parse(raw) as { advice?: unknown };
      if (Array.isArray(parsed.advice) && parsed.advice.length >= 3 && parsed.advice.every((item) => typeof item === "string")) {
        advice = parsed.advice.slice(0, 5) as string[];
        source = "ia";
      }
    } catch {
      // A personalização continua disponível sem IA, com recomendações locais instantâneas.
    }

    const { data: saved, error } = await (supabaseAdmin as any)
      .from("study_profiles")
      .upsert(
        {
          student_id: data.studentId,
          daily_minutes: data.dailyMinutes,
          target_date: data.targetDate ?? null,
          goal: data.goal,
          preferred_time: data.preferredTime,
          ai_plan: advice,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "student_id" },
      )
      .select("student_id, daily_minutes, target_date, goal, preferred_time, ai_plan, updated_at")
      .single();
    if (error || !saved) throw new Error(error?.message ?? "Não foi possível guardar o teu plano.");

    return {
      advice,
      source,
      remainingLessons: remaining.length,
      lessonsPerDay,
      preferences: {
        studentId: saved.student_id,
        dailyMinutes: saved.daily_minutes,
        targetDate: saved.target_date,
        goal: saved.goal,
        preferredTime: saved.preferred_time,
        aiPlan: Array.isArray(saved.ai_plan) ? saved.ai_plan : advice,
        updatedAt: saved.updated_at,
      } as StudyPreferences,
    };
  });
