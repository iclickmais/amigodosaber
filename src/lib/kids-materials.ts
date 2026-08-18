export type KidsMaterial = {
  title: string;
  description: string;
  level: string;
  focus: string;
  pages: string;
  href: string;
};

export const kidsMaterials: KidsMaterial[] = [
  {
    title: "Fichas de caligrafia",
    description: "Traçado de letras maiúsculas e minúsculas, cópia orientada e linhas para escrita autónoma.",
    level: "Iniciação à escrita",
    focus: "Coordenação e caligrafia",
    pages: "14 páginas",
    href: "/kids/fichas-de-caligrafia.pdf",
  },
  {
    title: "Leitura por sílabas",
    description: "Famílias silábicas, junção de sílabas, cópia de palavras e frases de leitura inicial.",
    level: "Pré-leitura e alfabetização",
    focus: "Consciência fonológica",
    pages: "8 páginas",
    href: "/kids/leitura-por-silabas.pdf",
  },
  {
    title: "Primeira leitura e compreensão",
    description: "Texto curto, vocabulário essencial e perguntas de compreensão para responder por escrito.",
    level: "Leitura inicial",
    focus: "Compreensão leitora",
    pages: "6 páginas",
    href: "/kids/primeira-leitura-e-compreensao.pdf",
  },
  {
    title: "Vogais e primeiras palavras",
    description: "Reconhecimento, leitura e escrita das vogais com exercícios de completar e copiar palavras.",
    level: "Educação pré-escolar",
    focus: "Vogais e motricidade fina",
    pages: "7 páginas",
    href: "/kids/vogais-e-primeiras-palavras.pdf",
  },
];
