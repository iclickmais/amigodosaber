// Geração de aulas — partilhado entre a geração a pedido e a pré-geração em massa.
import { getLesson as findLesson, type TrackKind } from "@/lib/study-tracks";

export async function callLovableAI(body: unknown): Promise<string> {
  const key = process.env.LOVABLE_API_KEY;
  if (!key) throw new Error("LOVABLE_API_KEY em falta");
  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
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

export function buildLessonPrompt(args: {
  kind: TrackKind;
  trackName: string;
  sectorName: string;
  moduleTitle: string;
  lessonTitle: string;
}): string {
  const kindLabel =
    args.kind === "concurso"
      ? "concurso público em Angola"
      : "exame de acesso à universidade em Angola";
  return `És um professor angolano experiente. Escreve uma aula completa em português europeu para um aluno que se prepara para ${kindLabel}.

Área: ${args.trackName}
Sector/Curso: ${args.sectorName}
Módulo: ${args.moduleTitle}
Aula: ${args.lessonTitle}

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
}

export const LESSON_SYSTEM_PROMPT =
  "És um professor angolano rigoroso e didáctico. Escreves aulas completas em português europeu (norma angolana).";

/** Gera o markdown de uma aula a partir da taxonomia. */
export async function generateLessonMarkdown(args: {
  kind: TrackKind;
  trackSlug: string;
  sectorSlug: string;
  moduleSlug: string;
  lessonSlug: string;
}): Promise<{ title: string; content: string }> {
  const found = findLesson(
    args.kind,
    args.trackSlug,
    args.sectorSlug,
    args.moduleSlug,
    args.lessonSlug,
  );
  if (!found) throw new Error("Aula não encontrada na taxonomia");

  const content = await callLovableAI({
    model: "google/gemini-3.6-flash",
    messages: [
      { role: "system", content: LESSON_SYSTEM_PROMPT },
      {
        role: "user",
        content: buildLessonPrompt({
          kind: args.kind,
          trackName: found.track.name,
          sectorName: found.sector.name,
          moduleTitle: found.module.title,
          lessonTitle: found.lesson.title,
        }),
      },
    ],
  });

  return { title: found.lesson.title, content };
}
