// Mensagens motivacionais específicas por objectivo (kind + track).
// Cada aluno vê uma mensagem alinhada com o seu sonho concreto.

import type { TrackKind } from "@/lib/study-tracks";

export interface Motivation {
  title: string;
  message: string;
  goal: string; // frase curta do objectivo final
}

const CONCURSO: Record<string, Motivation> = {
  minint: {
    title: "Vais servir Angola de farda no peito",
    goal: "entrar no Ministério do Interior",
    message:
      "O MININT precisa de mulheres e homens preparados. Cada aula que fechas aqui é um passo para veres o teu nome na lista de admitidos.",
  },
  minsa: {
    title: "Angola precisa de ti na saúde",
    goal: "entrar no Ministério da Saúde",
    message:
      "Do hospital ao centro de saúde da comunidade, o país precisa de profissionais rigorosos. Estuda hoje, salva vidas amanhã.",
  },
  mined: {
    title: "Educar é transformar Angola",
    goal: "entrar no Ministério da Educação",
    message:
      "Vais formar as próximas gerações. Prepara-te com o mesmo cuidado com que vais ensinar — cada quiz é um treino real.",
  },
  minjusdh: {
    title: "Justiça começa em quem se prepara",
    goal: "entrar no Ministério da Justiça e Direitos Humanos",
    message:
      "Dominar a Constituição e o procedimento não é opcional — é o que separa quem passa de quem quase passou. Vamos.",
  },
  minfin: {
    title: "As contas do país passam pelas tuas mãos",
    goal: "entrar no Ministério das Finanças",
    message:
      "Rigor, ética e método. Aqui treinas os três em cada aula. O MINFIN escolhe quem chega já com esses hábitos.",
  },
  minap: {
    title: "A modernização começa contigo",
    goal: "entrar no Ministério da Administração Pública",
    message:
      "Ser funcionário público é servir. Domina a estrutura da AP e a deontologia — depois é só provares no dia da prova.",
  },
  mindef: {
    title: "Defender Angola exige preparação",
    goal: "entrar no Ministério da Defesa Nacional",
    message:
      "Disciplina no estudo hoje é disciplina no serviço amanhã. Não deixes lacunas — resolve todos os quizzes.",
  },
  minener: {
    title: "Levar energia a cada canto do país",
    goal: "entrar no Ministério da Energia e Águas",
    message:
      "Angola cresce onde há luz e água. Prepara-te com afinco e faz parte de quem constrói esse futuro.",
  },
  mtti: {
    title: "Conecta Angola ao mundo",
    goal: "entrar no Ministério dos Transportes",
    message:
      "Cada estrada, cada porto, cada rota aérea precisa de quem sabe. Estuda com método e conquista o teu lugar.",
  },
  mincult: {
    title: "Guardar e mostrar a nossa cultura",
    goal: "entrar no Ministério da Cultura, Turismo e Ambiente",
    message:
      "A nossa identidade é o nosso maior activo. Prepara-te para a defender e projectar com competência.",
  },
};

const PREPARATORIO_DEFAULT: Motivation = {
  title: "A tua vaga na universidade começa aqui",
  goal: "passar no exame de acesso",
  message:
    "Três meses de estudo sério com aulas e questionários específicos do teu curso. Faz cada quiz — é o teu exame de treino.",
};

const PREPARATORIO_BY_TRACK: Record<string, Partial<Motivation>> = {
  medicina: {
    title: "Serás médico(a) — começa por dominar a matéria",
    message:
      "Bio, Química, Física, Matemática. Nada de atalhos. Fecha cada quiz acima de 60% e vais chegar ao exame preparado(a).",
  },
  engenharia: {
    title: "Constrói Angola — mas primeiro constrói a tua nota",
    message:
      "Matemática e Física resolvem-se com prática. Cada exercício aqui é uma repetição a mais que os teus concorrentes não fazem.",
  },
  direito: {
    title: "Advogado(a) prepara a defesa desde já",
    message:
      "Português e argumentação são a tua arma. Treina a leitura crítica em cada aula e domina o exame.",
  },
  economia: {
    title: "As decisões económicas do país precisam de ti",
    message:
      "Matemática, contabilidade, actualidade. Estuda com o rigor que o mercado te vai exigir amanhã.",
  },
};

export function getMotivation(kind: TrackKind, trackSlug: string): Motivation {
  if (kind === "concurso") {
    return (
      CONCURSO[trackSlug] ?? {
        title: "O teu concurso, a tua vitória",
        goal: "passar no concurso",
        message:
          "Prepara-te com método: aula, resumo, quiz. Repete até dominares. É assim que se ganha um lugar.",
      }
    );
  }
  const override = PREPARATORIO_BY_TRACK[trackSlug];
  return { ...PREPARATORIO_DEFAULT, ...override };
}
