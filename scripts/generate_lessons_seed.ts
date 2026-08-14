import { writeFileSync } from "node:fs";
import { concursoTracks, preparatorioTracks } from "../src/lib/study-tracks.ts";
import { buildRichLessonContent } from "../src/lib/lesson-builder.ts";

type Kind = "concurso" | "preparatorio";

type LessonRecord = {
  id: string;
  track_kind: Kind;
  track_slug: string;
  sector_slug: string;
  module_slug: string;
  lesson_slug: string;
  title: string;
  content_md: string;
};

type QuizRecord = {
  id: string;
  lesson_id: string;
  questions: unknown[];
};

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

function sql(value: string): string {
  return `'${value.replaceAll("'", "''")}'`;
}

function preparedContent(
  trackName: string,
  sectorName: string,
  moduleTitle: string,
  lessonTitle: string,
  kind: Kind,
): string {
  return buildRichLessonContent(trackName, sectorName, moduleTitle, lessonTitle, kind);
}
function preparedQuestions(lessonTitle: string) {
  return [
    [
      `Qual é o foco principal da aula “${lessonTitle}”?`,
      ["Compreender e aplicar os conceitos do tema", "Memorizar palavras sem contexto", "Ignorar os exemplos práticos", "Estudar apenas o título"],
      0,
      "A aprendizagem exige compreensão, aplicação e revisão do tema, não apenas memorização isolada.",
    ],
    [
      "Qual é o primeiro passo recomendado perante um exercício?",
      ["Ler o enunciado e identificar o que é pedido", "Escolher a opção mais longa", "Saltar directamente para a conclusão", "Ignorar os dados apresentados"],
      0,
      "A leitura cuidadosa permite separar dados relevantes, comando e informações acessórias.",
    ],
    [
      "O que torna uma resposta académica mais forte?",
      ["Definição, fundamentação e aplicação", "Uma frase sem justificação", "Cópia integral do enunciado", "Uso de termos sem explicação"],
      0,
      "Uma resposta clara apresenta o conceito, explica a razão e mostra como ele se aplica.",
    ],
    [
      "Para que serve o resumo de cinco linhas?",
      ["Verificar se a ideia foi compreendida", "Substituir todos os exercícios", "Evitar a revisão", "Aumentar o texto sem propósito"],
      0,
      "Resumir com concisão é uma forma de recuperação activa e revela lacunas de compreensão.",
    ],
    [
      "Qual estratégia ajuda a consolidar a memória?",
      ["Revisão espaçada e recuperação activa", "Ler uma vez e nunca voltar ao tema", "Estudar apenas na véspera", "Evitar testar-se"],
      0,
      "Revisões distribuídas no tempo e perguntas de memória fortalecem a retenção.",
    ],
    [
      "Como deve ser tratado um ponto que depende de legislação actualizada?",
      ["Confirmar a norma oficial vigente", "Usar qualquer publicação sem data", "Ignorar a actualização", "Substituir a lei por opinião"],
      0,
      "Normas podem mudar; por isso, a fonte oficial e a data de consulta devem ser verificadas.",
    ],
    [
      "O que fazer depois de errar uma questão?",
      ["Analisar a causa do erro e refazer o raciocínio", "Apagar a resposta e seguir sem rever", "Decorar apenas a letra", "Desistir do módulo"],
      0,
      "O erro torna-se aprendizagem quando o estudante identifica a causa e corrige o procedimento.",
    ],
    [
      "Qual elemento demonstra aplicação prática?",
      ["Relacionar o conceito com uma situação do sector", "Repetir o título da aula", "Evitar exemplos", "Responder sem passos"],
      0,
      "Aplicar significa transferir o conhecimento para uma situação concreta e justificar a decisão.",
    ],
    [
      "Como verificar uma conclusão?",
      ["Conferir se responde exactamente ao que foi pedido", "Escolher a resposta mais rápida", "Ignorar as condições do problema", "Trocar a conclusão por um resumo"],
      0,
      "A verificação final compara a conclusão com o comando e com as condições do enunciado.",
    ],
    [
      "Qual é o objectivo do checklist no fim da aula?",
      ["Medir autonomia e indicar o que rever", "Substituir o estudo", "Limitar a compreensão", "Eliminar o quiz"],
      0,
      "O checklist ajuda o aluno a avaliar a própria preparação e a planear a próxima revisão.",
    ],
  ].map(([q, options, correct, explanation]) => ({ q, options, correct, explanation }));
}

const lessons: LessonRecord[] = [];
const quizzes: QuizRecord[] = [];

for (const [kind, tracks] of [["concurso", concursoTracks], ["preparatorio", preparatorioTracks] ] as const) {
  for (const track of tracks) {
    for (const sector of track.sectors) {
      for (const module of sector.modules) {
        for (const lesson of module.lessons) {
          const key = `${kind}:${track.slug}:${sector.slug}:${module.slug}:${lesson.slug}`;
          const lessonId = stableUuid(`lesson:${key}`);
          lessons.push({
            id: lessonId,
            track_kind: kind,
            track_slug: track.slug,
            sector_slug: sector.slug,
            module_slug: module.slug,
            lesson_slug: lesson.slug,
            title: lesson.title,
            content_md: preparedContent(track.name, sector.name, module.title, lesson.title, kind),
          });
          quizzes.push({
            id: stableUuid(`quiz:${lessonId}`),
            lesson_id: lessonId,
            questions: preparedQuestions(lesson.title),
          });
        }
      }
    }
  }
}

const lessonSql = [
  "-- Aulas pré-preparadas alinhadas com src/lib/study-tracks.ts.",
  "-- Execute no Supabase SQL Editor depois de aplicar as migrações.",
  "BEGIN;",
  "DELETE FROM public.quizzes;",
  "DELETE FROM public.lessons;",
  ...lessons.map((item) => `INSERT INTO public.lessons (id, track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md) VALUES (${sql(item.id)}, ${sql(item.track_kind)}, ${sql(item.track_slug)}, ${sql(item.sector_slug)}, ${sql(item.module_slug)}, ${sql(item.lesson_slug)}, ${sql(item.title)}, ${sql(item.content_md)});`),
  "COMMIT;",
  "",
].join("\n");

const quizSql = [
  "-- Quizzes pré-preparados alinhados com as aulas acima.",
  "BEGIN;",
  ...quizzes.map((item) => `INSERT INTO public.quizzes (id, lesson_id, questions) VALUES (${sql(item.id)}, ${sql(item.lesson_id)}, ${sql(JSON.stringify(item.questions))}::jsonb);`),
  "COMMIT;",
  "",
].join("\n");

writeFileSync("supabase/pregenerated_lessons.sql", lessonSql);
writeFileSync("supabase/pregenerated_quizzes.sql", quizSql);
console.log(`Geradas ${lessons.length} aulas e ${quizzes.length} quizzes pré-preparados.`);
console.log("Arquivos: supabase/pregenerated_lessons.sql e supabase/pregenerated_quizzes.sql");
