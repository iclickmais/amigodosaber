export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Estudo" | "Concursos" | "Carreira";
  publishedAt: string;
  readTime: string;
  body: string[];
  keywords: string[];
}

export const newsPosts: NewsPost[] = [
  {
    slug: "como-montar-plano-estudo-concurso",
    title: "Como montar um plano de estudo para concursos sem perder o ritmo",
    excerpt: "Um método simples para organizar disciplinas, revisões e simulados em uma rotina possível de manter.",
    category: "Estudo",
    publishedAt: "2026-08-01",
    readTime: "6 min",
    keywords: ["plano de estudo", "concursos públicos", "revisão"],
    body: [
      "Um bom plano de estudo começa com uma visão realista do tempo disponível. Em vez de tentar estudar todas as disciplinas no mesmo dia, distribua blocos curtos e recorrentes ao longo da semana.",
      "Reserve momentos específicos para revisão ativa. Releia os pontos mais difíceis, responda questões sem consultar o material e anote os erros que voltam a aparecer.",
      "Ao terminar cada semana, faça um simulado e ajuste o plano com base no desempenho. O objetivo não é estudar de forma perfeita, mas criar um ritmo que consiga repetir até à prova.",
    ],
  },
  {
    slug: "como-estudar-por-questoes",
    title: "Estudar por questões: como transformar erros em progresso",
    excerpt: "Aprenda a usar questionários como ferramenta de diagnóstico, revisão e retenção do conteúdo.",
    category: "Estudo",
    publishedAt: "2026-07-25",
    readTime: "5 min",
    keywords: ["questões", "simulado", "aprendizagem ativa"],
    body: [
      "Resolver questões não serve apenas para medir uma nota. Cada resposta errada mostra uma lacuna específica: falta de conhecimento, interpretação ou atenção ao enunciado.",
      "Depois de cada sessão, classifique os erros e volte ao conteúdo correspondente. Em seguida, resolva uma nova questão sobre o mesmo assunto para verificar se a correção foi assimilada.",
      "Mantenha um histórico simples de desempenho por disciplina. Essa informação ajuda a decidir onde concentrar o próximo bloco de estudo e evita revisar apenas os temas mais confortáveis.",
    ],
  },
  {
    slug: "checklist-edital-concurso",
    title: "Checklist para ler um edital com atenção",
    excerpt: "Os pontos que merecem conferência antes de começar a preparação para um concurso.",
    category: "Concursos",
    publishedAt: "2026-07-18",
    readTime: "7 min",
    keywords: ["edital", "concurso em Angola", "preparação"],
    body: [
      "O edital deve ser a fonte principal para confirmar requisitos, documentos, etapas, datas e conteúdos. Evite basear decisões apenas em publicações de redes sociais ou mensagens encaminhadas.",
      "Faça uma lista com o prazo de inscrição, o local ou formato da prova, os critérios de avaliação e os documentos exigidos. Guarde uma cópia do edital e confira se houve retificação oficial.",
      "Depois de identificar as disciplinas, compare o conteúdo com o seu nível atual. Assim poderá montar um plano de estudo que prioriza os temas com maior peso e as lacunas mais relevantes.",
    ],
  },
  {
    slug: "rotina-estudo-trabalha",
    title: "Como estudar quando também trabalha",
    excerpt: "Estratégias para proteger pequenos blocos de concentração e manter constância ao longo do mês.",
    category: "Carreira",
    publishedAt: "2026-07-10",
    readTime: "5 min",
    keywords: ["rotina", "trabalho e estudo", "disciplina"],
    body: [
      "A rotina ideal é aquela que cabe na sua vida real. Comece por dois blocos fixos por dia ou por uma meta semanal de horas, em vez de depender de longas sessões ocasionais.",
      "Use o período de maior energia para matérias novas e deixe revisões, flashcards e questões curtas para momentos de menor disponibilidade.",
      "Planeie também o descanso. Sono e pausas melhoram a capacidade de lembrar e reduzem a probabilidade de abandonar o plano depois de poucos dias.",
    ],
  },
  {
    slug: "revisao-espacada-na-pratica",
    title: "Revisão espaçada na prática: o que rever em cada semana",
    excerpt: "Um calendário direto para rever conteúdos sem acumular matéria na véspera da prova.",
    category: "Estudo",
    publishedAt: "2026-07-03",
    readTime: "6 min",
    keywords: ["revisão espaçada", "memorização", "cronograma"],
    body: [
      "A revisão espaçada distribui o contacto com o mesmo conteúdo ao longo do tempo. Uma sequência simples pode combinar revisão no dia seguinte, uma semana depois e novamente no fim do mês.",
      "Em cada revisão, tente lembrar antes de reler. Escreva um resumo de memória, responda algumas questões e só depois consulte o material para corrigir os pontos esquecidos.",
      "Ajuste os intervalos conforme a dificuldade. Conteúdos que continuam a gerar erros devem voltar mais cedo para a sua fila de revisão.",
    ],
  },
  {
    slug: "preparacao-para-entrevista-e-prova",
    title: "Preparação além da prova escrita",
    excerpt: "Como se preparar para entrevistas, avaliações práticas e outras etapas de um processo seletivo.",
    category: "Concursos",
    publishedAt: "2026-06-26",
    readTime: "4 min",
    keywords: ["entrevista", "prova prática", "carreira pública"],
    body: [
      "Alguns processos seletivos incluem mais do que uma prova objetiva. Verifique no edital se existem entrevistas, avaliações práticas, testes físicos ou análise documental.",
      "Para entrevistas, pratique respostas claras sobre a sua formação, experiência e motivação. Para avaliações práticas, simule a tarefa dentro do tempo previsto e peça feedback a alguém de confiança.",
      "Em todas as etapas, leve os documentos solicitados e confirme previamente horário, local e regras de apresentação. Preparação logística também reduz ansiedade.",
    ],
  },
];

export function getNewsPost(slug: string) {
  return newsPosts.find((post) => post.slug === slug) ?? null;
}
