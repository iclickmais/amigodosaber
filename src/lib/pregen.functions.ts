import { createServerFn } from "@tanstack/react-start";
import { concursoTracks, preparatorioTracks, type Track, type TrackKind } from "@/lib/study-tracks";
import { generateLessonMarkdown } from "@/lib/lesson-gen.server";

const ADMIN_PHONE = "+244921346544";

interface LessonRef {
  kind: TrackKind;
  trackSlug: string;
  trackName: string;
  sectorSlug: string;
  sectorName: string;
  moduleSlug: string;
  lessonSlug: string;
  lessonTitle: string;
}

function tracksOf(kind: TrackKind): Track[] {
  return kind === "concurso" ? concursoTracks : preparatorioTracks;
}

function enumerateLessons(kind: TrackKind, trackSlug: string, sectorSlug?: string): LessonRef[] {
  const track = tracksOf(kind).find((t) => t.slug === trackSlug);
  if (!track) return [];
  const out: LessonRef[] = [];
  for (const sector of track.sectors) {
    if (sectorSlug && sector.slug !== sectorSlug) continue;
    for (const mod of sector.modules) {
      for (const lesson of mod.lessons) {
        out.push({
          kind,
          trackSlug: track.slug,
          trackName: track.name,
          sectorSlug: sector.slug,
          sectorName: sector.name,
          moduleSlug: mod.slug,
          lessonSlug: lesson.slug,
          lessonTitle: lesson.title,
        });
      }
    }
  }
  return out;
}

export interface PregenTrackStatus {
  kind: TrackKind;
  trackSlug: string;
  trackName: string;
  total: number;
  generated: number;
}

/** Estado da pré-geração por ministério/faculdade. */
export const pregenStatus = createServerFn({ method: "POST" })
  .inputValidator((input: { adminPhone: string; kind?: TrackKind; trackSlugs?: string[] }) => input)
  .handler(async ({ data }): Promise<PregenTrackStatus[]> => {
    if (data.adminPhone !== ADMIN_PHONE) throw new Error("Não autorizado.");
    const kind: TrackKind = data.kind ?? "concurso";
    const slugs = data.trackSlugs ?? tracksOf(kind).map((t) => t.slug);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const out: PregenTrackStatus[] = [];
    for (const slug of slugs) {
      const refs = enumerateLessons(kind, slug);
      if (refs.length === 0) continue;
      const { count } = await supabaseAdmin
        .from("lessons")
        .select("id", { count: "exact", head: true })
        .eq("track_kind", kind)
        .eq("track_slug", slug);
      out.push({
        kind,
        trackSlug: slug,
        trackName: refs[0].trackName,
        total: refs.length,
        generated: count ?? 0,
      });
    }
    return out;
  });

export interface PregenBatchResult {
  generated: number;
  remaining: number;
  total: number;
  errors: string[];
  done: boolean;
}

/**
 * Gera em lote as aulas que ainda faltam de um ministério/faculdade e grava-as
 * na base de dados. O painel chama isto repetidamente até `done`.
 */
export const pregenBatch = createServerFn({ method: "POST" })
  .inputValidator(
    (input: {
      adminPhone: string;
      kind: TrackKind;
      trackSlug: string;
      sectorSlug?: string;
      limit?: number;
    }) => input,
  )
  .handler(async ({ data }): Promise<PregenBatchResult> => {
    if (data.adminPhone !== ADMIN_PHONE) throw new Error("Não autorizado.");
    const limit = Math.min(Math.max(data.limit ?? 4, 1), 8);
    const refs = enumerateLessons(data.kind, data.trackSlug, data.sectorSlug);
    if (refs.length === 0) throw new Error("Área não encontrada.");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: existing } = await supabaseAdmin
      .from("lessons")
      .select("sector_slug, module_slug, lesson_slug")
      .eq("track_kind", data.kind)
      .eq("track_slug", data.trackSlug);

    const have = new Set(
      (existing ?? []).map((r) => `${r.sector_slug}|${r.module_slug}|${r.lesson_slug}`),
    );
    const missing = refs.filter(
      (r) => !have.has(`${r.sectorSlug}|${r.moduleSlug}|${r.lessonSlug}`),
    );

    const batch = missing.slice(0, limit);
    const errors: string[] = [];
    let generated = 0;

    await Promise.all(
      batch.map(async (ref) => {
        try {
          const { title, content } = await generateLessonMarkdown({
            kind: ref.kind,
            trackSlug: ref.trackSlug,
            sectorSlug: ref.sectorSlug,
            moduleSlug: ref.moduleSlug,
            lessonSlug: ref.lessonSlug,
          });
          const { error } = await supabaseAdmin.from("lessons").insert({
            track_kind: ref.kind,
            track_slug: ref.trackSlug,
            sector_slug: ref.sectorSlug,
            module_slug: ref.moduleSlug,
            lesson_slug: ref.lessonSlug,
            title,
            content_md: content,
          });
          if (error) throw new Error(error.message);
          generated += 1;
        } catch (e) {
          errors.push(`${ref.sectorName} › ${ref.lessonTitle}: ${e instanceof Error ? e.message : "erro"}`);
        }
      }),
    );

    const remaining = missing.length - generated;
    return {
      generated,
      remaining,
      total: refs.length,
      errors,
      done: remaining <= 0 || (generated === 0 && errors.length > 0),
    };
  });
