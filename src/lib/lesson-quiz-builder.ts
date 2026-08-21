import type { TrackKind } from "@/lib/study-tracks";

export type LessonQuizQuestion = {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
};

function rotate<T>(items: T[], offset: number): T[] {
  const n = ((offset % items.length) + items.length) % items.length;
  return [...items.slice(n), ...items.slice(0, n)];
}

function hashText(text: string): number {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function question(
  q: string,
  correct: string,
  distractors: string[],
  explanation: string,
  seed: number,
): LessonQuizQuestion {
  const options = rotate([correct, ...distractors], seed % 4);
  return {
    q,
    options,
    correct: options.indexOf(correct),
    explanation,
  };
}

function domainQuestions(
  lessonTitle: string,
  moduleTitle: string,
  sectorName: string,
  seed: number,
): LessonQuizQuestion[] {
  const text = `${moduleTitle} ${lessonTitle}`.toLowerCase();

  if (/matem|aritm|álgebra|equação|inequa|funç|geometr|trigonom|sucess|limite|derivad|integral|matriz|probabil|estatíst|proporç|números/.test(text)) {
    return [
      question(`Ao resolver um problema de ${lessonTitle}, qual é a ordem mais segura?`, "Identificar os dados, escolher a relação matemática, calcular passo a passo e verificar a unidade", ["Aplicar qualquer fórmula e aceitar o primeiro número", "Começar pela resposta e inventar os dados em falta", "Ignorar o domínio e conferir apenas a aparência do resultado"], "A resolução matemática deve ligar dados, modelo, cálculo e verificação.", seed),
      question(`O que deve ser confirmado antes de usar uma fórmula em ${lessonTitle}?`, "As condições de aplicação, as grandezas envolvidas e as unidades", ["Apenas se a fórmula é curta", "Se o resultado tem muitos algarismos", "Se outra pessoa obteve um número parecido"], "Uma fórmula só é válida quando as suas condições e unidades são respeitadas.", seed + 1),
      question(`Qual comportamento demonstra domínio de ${lessonTitle}?`, "Explicar por que cada transformação é válida e interpretar o resultado no contexto", ["Escrever somente o número final", "Memorizar a letra da opção correcta", "Trocar a unidade para esconder uma inconsistência"], "A competência inclui raciocínio, justificação e interpretação.", seed + 2),
    ];
  }

  if (/portugu|gramát|redac|texto|coesão|coerência|sintax|concord|regên|pontua|semânt|literatura|lingu|inglês|francês|reading|writing|verb|vocabulary/.test(text)) {
    return [
      question(`Ao estudar ${lessonTitle}, o que deve sustentar uma resposta?`, "As palavras, relações sintácticas ou passagens do texto que justificam a conclusão", ["Uma impressão sem evidência", "Informação externa que contradiz o texto", "A opção mais longa, independentemente do enunciado"], "A análise linguística e textual precisa de evidência observável.", seed),
      question(`Qual sequência ajuda a resolver uma questão de ${lessonTitle}?`, "Ler o comando, localizar as marcas relevantes, aplicar a regra e rever a resposta", ["Ler apenas a primeira linha e adivinhar", "Escolher a regra antes de conhecer o enunciado", "Copiar o texto sem identificar a pergunta"], "A sequência evita respostas intuitivas e permite verificar cada etapa.", seed + 1),
      question(`Que erro é especialmente prejudicial em ${lessonTitle}?`, "Confundir uma interpretação possível com uma conclusão demonstrada pelo texto", ["Citar a passagem que fundamenta a resposta", "Rever concordância e pontuação", "Distinguir informação explícita de inferência"], "A interpretação deve respeitar a força exacta da linguagem usada.", seed + 2),
    ];
  }

  if (/constitui|direito|legisla|administra|deontolog|ética|procedimento|magistr|registo|notariado|prisional|justiça|soberania|órgãos|património|governo|actualidade|política|relações internacionais/.test(text)) {
    return [
      question(`Perante um caso de ${lessonTitle}, qual é o primeiro cuidado técnico?`, "Identificar a fonte vigente, a competência da entidade e os factos relevantes", ["Citar uma opinião sem verificar a norma", "Começar pela sanção sem analisar o procedimento", "Aplicar uma regra de outro sector por analogia automática"], "A resposta jurídica ou administrativa depende da norma aplicável, da competência e dos factos.", seed),
      question(`Como se aplica correctamente uma regra de ${lessonTitle}?`, "Separar requisitos, prazo, prova e consequência e depois relacioná-los com os factos", ["Repetir o título da lei sem interpretar", "Ignorar excepções e requisitos", "Escolher a consequência antes de analisar os pressupostos"], "Uma aplicação completa mostra a ponte entre a regra e a situação concreta.", seed + 1),
      question(`O que deve ser feito quando a matéria de ${lessonTitle} pode ter sido alterada?`, "Conferir a versão actual numa fonte oficial antes de concluir", ["Usar um resumo sem data", "Assumir que toda a norma antiga continua igual", "Substituir a lei por experiência pessoal"], "Legislação e regulamentos exigem verificação de vigência e âmbito.", seed + 2),
    ];
  }

  if (/físic|cinemát|dinâm|energia|impulso|gravita|fluido|termodin|onda|óptica|electrost|corrente|magnet|quím|átomo|tabela periód|ligaç|reacç|estequi|mol|soluç|ácido|base|redox|biolog|célula|membrana|metabol|genét|dna|rna|evoluç|ecolog|microbi|anatom|fisiolog|farmac|enferm|medicina|odont|fisioter|nutriç/.test(text)) {
    return [
      question(`Para compreender ${lessonTitle}, por que se começa pelo modelo ou processo?`, "Porque ele identifica as grandezas, estruturas ou etapas que explicam o fenómeno", ["Porque elimina a necessidade de observar dados", "Porque permite decorar termos sem relações", "Porque torna desnecessária a verificação experimental"], "Ciências naturais exigem relacionar estrutura, processo, grandeza e consequência.", seed),
      question(`Qual procedimento produz uma resposta mais rigorosa em ${lessonTitle}?`, "Definir as entidades, organizar os dados, aplicar a lei ou mecanismo e interpretar o resultado", ["Misturar unidades e corrigir só no fim", "Indicar o nome do fenómeno sem explicação", "Escolher a conclusão antes de observar as condições"], "A sequência torna o raciocínio verificável e reduz erros de interpretação.", seed + 1),
      question(`Como se corrige um erro numa questão de ${lessonTitle}?`, "Localizar a etapa em que o modelo, a unidade ou a relação causa–efeito foi quebrada", ["Memorizar a alternativa sem compreender", "Apagar o raciocínio e começar por outro tema", "Considerar correcto qualquer resultado plausível"], "A análise do erro transforma a tentativa em aprendizagem transferível.", seed + 2),
    ];
  }

  return [
    question(`Qual é a melhor forma de aprender ${lessonTitle} no contexto de ${sectorName}?`, "Definir o conceito, compreender o método, aplicá-lo num caso e justificar a conclusão", ["Memorizar o título sem praticar", "Ler apenas o resumo e ignorar os exemplos", "Responder rapidamente sem verificar as condições"], "Aprender exige compreensão, aplicação e verificação, não apenas exposição ao texto.", seed),
    question(`Ao iniciar uma questão sobre ${lessonTitle}, o que deve ser feito?`, "Delimitar o que é pedido e separar os dados relevantes das informações acessórias", ["Escolher uma resposta antes de ler o enunciado", "Copiar a primeira definição encontrada", "Ignorar o contexto profissional"], "Delimitar o problema evita saltos e torna a solução controlável.", seed + 1),
    question(`O que distingue uma resposta forte sobre ${lessonTitle}?`, "Uma explicação que apresenta a regra ou ideia, mostra os passos e relaciona-os com o caso", ["Uma frase vaga sem fundamento", "Uma lista de palavras difíceis", "Uma conclusão que não responde ao comando"], "A avaliação deve conseguir seguir o caminho entre a pergunta e a conclusão.", seed + 2),
  ];
}

export function buildLessonQuizQuestions(args: {
  lessonTitle: string;
  moduleTitle: string;
  sectorName: string;
  trackName: string;
  kind: TrackKind;
}): LessonQuizQuestion[] {
  const seed = hashText(`${args.kind}:${args.trackName}:${args.sectorName}:${args.moduleTitle}:${args.lessonTitle}`);
  const kindLabel = args.kind === "concurso" ? "do concurso público" : "do exame de acesso";
  const base = [
    question(`Qual é o objectivo de aprendizagem central desta aula sobre ${args.lessonTitle}?`, `Compreender ${args.lessonTitle}, explicar o raciocínio e transferi-lo para uma situação ${kindLabel}`, ["Reconhecer apenas o título da aula", "Decorar frases sem saber quando aplicá-las", "Evitar exercícios para não cometer erros"], "O objectivo é construir conhecimento utilizável, com explicação e aplicação.", seed + 4),
    question("O que deve acontecer depois de uma resposta incorrecta?", "Identificar a causa do erro, corrigir o passo afectado e resolver novamente", ["Memorizar apenas a opção certa", "Ignorar o erro e avançar sem revisão", "Alterar os dados do exercício para acertar"], "A correcção consciente do erro é uma etapa essencial da aprendizagem.", seed + 5),
    question("Como deve ser feita a revisão desta aula?", "Usar recuperação activa, resolver uma aplicação nova e rever em intervalos espaçados", ["Reler passivamente uma vez", "Estudar só na véspera da prova", "Substituir a prática por copiar o texto"], "A recuperação e a revisão espaçada consolidam a memória e revelam lacunas.", seed + 6),
    question("Qual é a função do exemplo resolvido nesta aula?", "Mostrar como os conceitos se transformam num procedimento verificável", ["Encher a página sem relação com o tema", "Dar uma resposta para copiar sem entender", "Substituir todas as actividades do estudante"], "Um exemplo resolvido deve tornar visíveis as decisões e os passos do raciocínio.", seed + 7),
    question("Antes de estudar uma norma, fórmula ou procedimento relacionado com a aula, o aluno deve…", "Confirmar a versão, as condições de aplicação e a fonte indicada no programa", ["Escolher a primeira informação encontrada", "Assumir que nenhum contexto altera a regra", "Usar um comentário sem referência como fonte final"], "Fontes, condições e actualizações fazem parte do domínio responsável do conhecimento.", seed + 8),
  ];
  return [...domainQuestions(args.lessonTitle, args.moduleTitle, args.sectorName, seed), ...base];
}
