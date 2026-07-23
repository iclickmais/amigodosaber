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

    const { data: progress } = await supabaseAdmin
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
