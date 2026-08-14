import { concursoTracks, getSector } from "../src/lib/study-tracks.ts";

const track = concursoTracks[0];
if (!track) throw new Error("Taxonomia sem percurso de concurso");
const sector = track.sectors[0];
if (!sector) throw new Error("Taxonomia sem sector");
const found = getSector("concurso", track.slug, sector.slug);
if (!found) throw new Error("Sector não encontrado");

const lessons = found.sector.modules.flatMap((module) =>
  module.lessons.map((lesson) => ({ moduleSlug: module.slug, lessonSlug: lesson.slug, title: lesson.title })),
);
const free = lessons.slice(0, 3);
const fourth = lessons[3];
if (free.length !== 3) throw new Error(`Esperadas 3 aulas grátis, encontradas ${free.length}`);
if (fourth && free.some((lesson) => lesson.lessonSlug === fourth.lessonSlug && lesson.moduleSlug === fourth.moduleSlug)) {
  throw new Error("A quarta aula foi incluída indevidamente nas aulas grátis");
}
console.log(JSON.stringify({
  track: track.name,
  sector: sector.name,
  totalLessons: lessons.length,
  freeLessons: free.map(({ title, moduleSlug, lessonSlug }) => ({ title, moduleSlug, lessonSlug })),
  firstPaidLesson: fourth ? { title: fourth.title, moduleSlug: fourth.moduleSlug, lessonSlug: fourth.lessonSlug } : null,
}, null, 2));
