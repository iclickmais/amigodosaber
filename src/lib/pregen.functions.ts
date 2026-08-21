import { createServerFn } from "@tanstack/react-start";
import { concursoTracks, preparatorioTracks, type Track, type TrackKind } from "@/lib/study-tracks";
import { buildRichLessonContent } from "@/lib/lesson-builder";
import { buildLessonQuizQuestions } from "@/lib/lesson-quiz-builder";

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

function findModuleTitle(kind: TrackKind, trackSlug: string, sectorSlug: string, moduleSlug: string): string {
  const track = tracksOf(kind).find((t) => t.slug === trackSlug);
  const sector = track?.sectors.find((s) => s.slug === sectorSlug);
  return sector?.modules.find((m) => m.slug === moduleSlug)?.title ?? moduleSlug;
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
      const { data: lessonRows, error: lessonError } = await supabaseAdmin
        .from("lessons")
        .select("id")
        .eq("track_kind", kind)
        .eq("track_slug", slug);
      if (lessonError) throw new Error(lessonError.message);
      const ids = (lessonRows ?? []).map((row) => row.id);
      let quizCount = 0;
      for (let offset = 0; offset < ids.length; offset += 400) {
        const { count, error: countError } = await supabaseAdmin
          .from("quizzes")
          .select("lesson_id", { count: "exact", head: true })
          .in("lesson_id", ids.slice(offset, offset + 400));
        if (countError) throw new Error(countError.message);
        quizCount += count ?? 0;
      }
      out.push({
        kind,
        trackSlug: slug,
        trackName: refs[0].trackName,
        total: refs.length,
        generated: Math.min(quizCount, refs.length),
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
    const { data: existing, error: existingError } = await supabaseAdmin
      .from("lessons")
      .select("id, sector_slug, module_slug, lesson_slug, title, content_md")
      .eq("track_kind", data.kind)
      .eq("track_slug", data.trackSlug);
    if (existingError) throw new Error(existingError.message);

    const lessonByKey = new Map(
      (existing ?? []).map((r) => [
        `${r.sector_slug}|${r.module_slug}|${r.lesson_slug}`,
        r,
      ]),
    );
    const lessonIds = (existing ?? []).map((r) => r.id);
    const { data: existingQuizzes, error: quizError } = lessonIds.length
      ? await supabaseAdmin.from("quizzes").select("lesson_id").in("lesson_id", lessonIds)
      : { data: [], error: null };
    if (quizError) throw new Error(quizError.message);
    const quizIds = new Set((existingQuizzes ?? []).map((r) => r.lesson_id));
    const missing = refs.filter((r) => {
      const row = lessonByKey.get(`${r.sectorSlug}|${r.moduleSlug}|${r.lessonSlug}`);
      return !row || !quizIds.has(row.id);
    });

    const batch = missing.slice(0, limit);
    const errors: string[] = [];
    let generated = 0;

    await Promise.all(
      batch.map(async (ref) => {
        try {
          const key = `${ref.sectorSlug}|${ref.moduleSlug}|${ref.lessonSlug}`;
          let lesson = lessonByKey.get(key);
          if (!lesson) {
            const content = buildRichLessonContent(
              ref.trackName,
              ref.sectorName,
              findModuleTitle(data.kind, data.trackSlug, ref.sectorSlug, ref.moduleSlug),
              ref.lessonTitle,
              ref.kind,
            );
            const { data: inserted, error } = await supabaseAdmin
              .from("lessons")
              .insert({
                track_kind: ref.kind,
                track_slug: ref.trackSlug,
                sector_slug: ref.sectorSlug,
                module_slug: ref.moduleSlug,
                lesson_slug: ref.lessonSlug,
                title: ref.lessonTitle,
                content_md: content,
              })
              .select("id, sector_slug, module_slug, lesson_slug, title, content_md")
              .single();
            if (error || !inserted) throw new Error(error?.message ?? "Falha ao guardar a aula");
            lesson = inserted;
            lessonByKey.set(key, lesson);
          }

          const moduleTitle = findModuleTitle(data.kind, data.trackSlug, ref.sectorSlug, ref.moduleSlug);
          const { error: upsertError } = await supabaseAdmin.from("quizzes").upsert(
            {
              lesson_id: lesson.id,
              questions: buildLessonQuizQuestions({
                lessonTitle: ref.lessonTitle,
                moduleTitle,
                sectorName: ref.sectorName,
                trackName: ref.trackName,
                kind: ref.kind,
              }),
            },
            { onConflict: "lesson_id" },
          );
          if (upsertError) throw new Error(upsertError.message);
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
