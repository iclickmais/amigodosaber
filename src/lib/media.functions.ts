import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSector, type TrackKind } from "@/lib/study-tracks";

const MediaSchema = z.object({
  studentId: z.string().uuid(),
  kind: z.enum(["concurso", "preparatorio"]),
  trackSlug: z.string(),
  sectorSlug: z.string(),
  moduleSlug: z.string(),
  lessonSlug: z.string(),
});

export type LessonMedia = {
  id: string;
  media_type: "audio" | "video";
  title: string;
  description: string | null;
  media_url: string;
  thumbnail_url: string | null;
  duration_seconds: number | null;
  sort_order: number;
};

export const getLessonMedia = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => MediaSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const db = supabaseAdmin as any;
    const sector = getSector(data.kind as TrackKind, data.trackSlug, data.sectorSlug);
    if (!sector) return { hasAccess: false, media: [] as LessonMedia[] };

    const module = sector.sector.modules.find((item) => item.slug === data.moduleSlug);
    const lessonIndex = module?.lessons.findIndex((item) => item.slug === data.lessonSlug) ?? -1;
    const isFree = sector.sector.modules[0]?.slug === data.moduleSlug && lessonIndex >= 0 && lessonIndex < 3;
    const { data: grant } = await db
      .from("access_grants")
      .select("id")
      .eq("student_id", data.studentId)
      .eq("kind", data.kind)
      .eq("track_slug", data.trackSlug)
      .eq("sector_slug", data.sectorSlug)
      .gt("expires_at", new Date().toISOString())
      .limit(1)
      .maybeSingle();
    const hasAccess = Boolean(grant) || isFree;
    if (!hasAccess) return { hasAccess: false, media: [] as LessonMedia[] };

    const { data: lesson } = await db
      .from("lessons")
      .select("id")
      .eq("track_kind", data.kind)
      .eq("track_slug", data.trackSlug)
      .eq("sector_slug", data.sectorSlug)
      .eq("module_slug", data.moduleSlug)
      .eq("lesson_slug", data.lessonSlug)
      .maybeSingle();
    if (!lesson) return { hasAccess: true, media: [] as LessonMedia[] };

    const { data: media } = await db
      .from("lesson_media")
      .select("id, media_type, title, description, media_url, thumbnail_url, duration_seconds, sort_order")
      .eq("lesson_id", lesson.id)
      .eq("published", true)
      .order("sort_order", { ascending: true });
    return { hasAccess: true, media: (media ?? []) as LessonMedia[] };
  });
