import type { TrackKind } from "@/lib/study-tracks";

type TopicProfile = {
  focus: string;
  knowledge: string;
  procedure: string;
  workedExample: string;
  traps: string[];
  practice: string;
  resources: string;
};

function profileFor(moduleTitle: string, lessonTitle: string, sectorName: string): TopicProfile {
  const text = `${moduleTitle} ${lessonTitle}`.toLowerCase();

  if (/matem|aritm|álgebra|equação|inequa|funç|geometr|trigonom|sucess|limite|derivad|integral|matriz|probabil|estatíst|proporç|números reais/.test(text)) {
    return {
      focus: "definir as grandezas, escolher a representação adequada e justificar cada transformação algébrica",
      knowledge: "Em Matemática, uma solução completa liga definição, propriedades, cálculo e verificação. O estudante deve distinguir dados, incógnita, condições e unidade de resposta antes de escrever operações.",
      procedure: "1. Transcreve os dados e a pergunta. 2. Escolhe a propriedade, fórmula ou representação apropriada. 3. Executa os cálculos linha a linha. 4. Verifica sinal, domínio, unidade e ordem de grandeza. 5. Interpreta o resultado no contexto do enunciado.",
      workedExample: "Num problema de proporções, se 4 unidades correspondem a 18, então a razão unitária é 18 ÷ 4 = 4,5 e 7 unidades correspondem a 7 × 4,5 = 31,5. A resposta só fica completa quando se indica a unidade e se verifica que a relação usada é directamente proporcional.",
      traps: ["aplicar uma fórmula sem confirmar as condições", "eliminar parênteses ou sinais sem mostrar a transformação", "apresentar apenas o número final, sem interpretação"],
      practice: "Cria dois exercícios do mesmo tipo: um com números simples e outro com uma condição adicional. Resolve ambos e compara o método, não apenas o resultado.",
      resources: "manual de Matemática do nível do curso, formulário autorizado e provas de acesso da instituição, sempre conferindo o programa oficial vigente",
    };
  }

  if (/físic|cinemát|dinâm|energia|impulso|gravita|fluido|termodin|onda|óptica|electrost|corrente|magnet|moderna/.test(text)) {
    return {
      focus: "relacionar grandezas físicas, unidades, modelo idealizado e interpretação do resultado",
      knowledge: "Uma resolução de Física começa pelo modelo: qual sistema está a ser estudado, que interações existem e que aproximações são aceitáveis. A equação só deve ser escolhida depois de se identificar a grandeza procurada e as unidades.",
      procedure: "1. Faz um esquema do fenómeno. 2. Lista os dados em unidades coerentes do SI. 3. Identifica a lei física aplicável. 4. Isola a incógnita antes de substituir valores. 5. Calcula, arredonda com critério e interpreta o sentido físico.",
      workedExample: "Se um corpo parte do repouso e tem aceleração constante de 2 m/s² durante 5 s, a velocidade final é v = v₀ + at = 0 + 2×5 = 10 m/s. A distância, usando s = s₀ + v₀t + at²/2, aumenta 25 m relativamente à posição inicial. As duas grandezas descrevem aspectos diferentes do mesmo movimento.",
      traps: ["misturar km/h com m/s sem conversão", "confundir velocidade com aceleração", "usar uma lei sem explicitar as hipóteses do modelo"],
      practice: "Desenha o diagrama do fenómeno e resolve o exercício novamente sem consultar a fórmula. Depois explica oralmente por que razão a unidade final é coerente.",
      resources: "programa oficial de Física, tabela de unidades SI e provas de acesso ou manuais recomendados pelo curso",
    };
  }

  if (/quím|átomo|tabela periód|ligaç|reacç|estequi|mol|soluç|ácido|base|redox|termoquím|cinét|hidrocarbon|polímero/.test(text)) {
    return {
      focus: "passar da representação microscópica para a equação, cálculo e observação experimental",
      knowledge: "A aprendizagem de Química exige distinguir substância, mistura, partícula, quantidade de matéria e transformação. Uma equação química deve respeitar a conservação dos átomos e ser acompanhada de condições e unidades quando aplicável.",
      procedure: "1. Identifica reagentes e produtos. 2. Escreve as fórmulas correctamente. 3. Balanceia por conservação de átomos e carga. 4. Converte dados em mol quando necessário. 5. Determina a grandeza pedida e verifica o resultado com a estequiometria.",
      workedExample: "Na reacção 2H₂ + O₂ → 2H₂O, duas quantidades estequiométricas de hidrogénio reagem com uma de oxigénio para formar duas de água. O coeficiente não altera a fórmula da substância: indica a proporção entre partículas ou mols.",
      traps: ["alterar índices da fórmula para balancear", "confundir coeficiente estequiométrico com índice", "omitir unidade ou estado físico quando ele altera a interpretação"],
      practice: "Escolhe uma reacção do programa, balanceia-a por tentativa fundamentada e explica o significado de cada coeficiente em termos de mol.",
      resources: "tabela periódica, programa oficial de Química, manual recomendado e exercícios de exames de acesso",
    };
  }

  if (/biolog|célula|membrana|metabol|genét|dna|rna|evoluç|ecolog|sistema|microbi|doenç|reproduç|anatom|fisiolog|farmac|enferm|medicina|saúde|odont|fisioter|nutriç|anális|veterin|psicolog/.test(text)) {
    return {
      focus: "organizar estruturas, processos, funções e relações de causa e efeito sem decorar listas isoladas",
      knowledge: "Nas Ciências da Saúde e Biológicas, uma resposta sólida liga estrutura e função, normalidade e alteração, mecanismo e consequência. Os termos devem ser definidos e relacionados com o nível de organização estudado.",
      procedure: "1. Identifica o sistema ou processo. 2. Localiza as estruturas envolvidas. 3. Ordena os acontecimentos. 4. Explica a relação causa–efeito. 5. Distingue observação, hipótese, diagnóstico ou conclusão conforme o contexto.",
      workedExample: "Ao analisar uma alteração num processo fisiológico, começa por comparar a função normal com a alteração observada, localiza o ponto do processo em que surge o desvio e prevê quais funções serão afectadas. A explicação deve apresentar mecanismo, não apenas o nome da doença ou estrutura.",
      traps: ["confundir estrutura com função", "memorizar sintomas sem compreender o mecanismo", "apresentar uma conduta clínica sem indicar limites, fonte ou supervisão profissional"],
      practice: "Constrói um mapa com estrutura, função, processo, alteração e consequência. Explica o mapa a outra pessoa e corrige os termos que ficaram sem definição.",
      resources: "manual indicado pelo curso, normas da instituição de ensino e fontes de saúde pública ou sociedades científicas reconhecidas",
    };
  }

  if (/portugu|gramát|redac|texto|coesão|coerência|sintax|concord|regên|pontua|semânt|figura|literatura|lingu|inglês|francês|reading|writing|verb|vocabulary/.test(text)) {
    return {
      focus: "ler com evidência textual, identificar a regra linguística e construir uma resposta clara e justificada",
      knowledge: "O domínio da Língua Portuguesa e das línguas estrangeiras combina compreensão, análise e produção. Uma resposta não deve depender de impressão: deve apontar a palavra, relação, estrutura ou passagem que sustenta a conclusão.",
      procedure: "1. Lê o enunciado e define o comando. 2. Localiza as marcas linguísticas relevantes. 3. Aplica a regra ou estratégia de leitura. 4. Elimina interpretações que contradigam o texto. 5. Redige uma resposta concisa, completa e revista.",
      workedExample: "Para interpretar um texto, distingue informação explícita, inferência necessária e opinião. Se o autor afirma que uma medida reduziu um problema, isso não prova automaticamente que o problema desapareceu; a conclusão deve respeitar a força exacta da linguagem usada.",
      traps: ["responder com conhecimento externo que o texto não sustenta", "confundir tema com ideia principal", "ignorar concordância, pontuação ou regência na redacção"],
      practice: "Selecciona um parágrafo, sublinha conectores, identifica a ideia principal e escreve uma paráfrase sem acrescentar informação nova.",
      resources: "gramática ou manual de língua recomendado, textos literários e não literários, programa do exame e critérios públicos de avaliação",
    };
  }

  if (/constitui|direito|legisla|administra|deontolog|ética|procedimento|magistr|registo|notariado|prisional|justiça|soberania|órgãos|património|governo|actualidade|política|relações internacionais/.test(text)) {
    return {
      focus: "distinguir princípios, competências, procedimentos e garantias, fundamentando cada conclusão na fonte aplicável",
      knowledge: "Em Direito, Administração Pública e concursos, uma resposta tecnicamente forte separa a regra geral, os requisitos, a competência, o procedimento e as excepções. A matéria deve ser estudada com a versão actualizada da Constituição, da lei ou do regulamento indicado no programa.",
      procedure: "1. Identifica o problema jurídico ou administrativo. 2. Determina a fonte e a competência relevantes. 3. Lista os requisitos e prazos. 4. Aplica a regra aos factos sem saltos lógicos. 5. Redige a conclusão e indica a necessidade de confirmar alterações legislativas.",
      workedExample: "Perante uma decisão administrativa, analisa primeiro a competência do órgão, depois a finalidade, os factos, a fundamentação e o procedimento. Só no fim avalia a consequência. Uma resposta que cita apenas um princípio, sem o ligar aos factos, fica incompleta.",
      traps: ["tratar uma opinião como se fosse norma", "confundir competência de um órgão com competência de outro", "citar legislação sem confirmar a versão e o âmbito de aplicação"],
      practice: "Faz uma tabela com regra, requisitos, entidade competente, prazo, prova e consequência. Depois resolve um caso alterando apenas um requisito e explica o efeito.",
      resources: "Constituição e legislação disponibilizadas por fontes oficiais, regulamentos do sector, manuais da instituição e jurisprudência ou doutrina indicada no programa",
    };
  }

  if (/informát|tecnolog|comput|software|dados|program|engenh|electric|electr|mecân|civil|arquitect|design|gestão|econom|contab|finan|marketing|sociolog|comunica|filosof|história|geolog|agronom|ambiente|turismo|cultura/.test(text)) {
    return {
      focus: "compreender o modelo, decompor o problema e justificar a escolha técnica ou conceptual",
      knowledge: "Nas áreas técnicas, económicas e das ciências humanas, a aprendizagem deve ligar conceitos, critérios, ferramentas e contexto. A descrição de um procedimento só é completa quando explica por que razão a escolha é adequada e quais são os seus limites.",
      procedure: "1. Define o problema e o resultado esperado. 2. Recolhe os dados relevantes. 3. Selecciona o método ou ferramenta. 4. Executa por etapas verificáveis. 5. Testa o resultado, documenta as decisões e propõe melhorias.",
      workedExample: "Num projecto profissional, começa por transformar a necessidade num requisito observável. Compara alternativas segundo custo, segurança, qualidade e manutenção; implementa a opção escolhida; e valida o resultado com um teste que possa ser repetido.",
      traps: ["escolher a ferramenta antes de definir o problema", "confundir resultado plausível com resultado validado", "omitir premissas, limitações e critérios de qualidade"],
      practice: "Redige um mini-projecto de uma página com problema, dados, método, resultado esperado, teste de validação e risco principal.",
      resources: "manual técnico recomendado, normas da área, documentação oficial das ferramentas e exercícios ou estudos de caso do curso",
    };
  }

  return {
    focus: "definir o tema, organizar os seus elementos e transferir o conhecimento para um caso do sector",
    knowledge: `O tema deve ser estudado como um sistema: definição, componentes, relações, condições de aplicação e consequências. Em ${sectorName}, o estudante precisa de transformar informação em decisão fundamentada, e não apenas repetir frases do manual.`,
    procedure: "1. Delimita o problema. 2. Recolhe conceitos e dados. 3. Ordena os passos. 4. Aplica o método a um caso. 5. Verifica a conclusão e regista o que precisa de revisão.",
    workedExample: `Num caso de ${lessonTitle}, começa por separar factos, conceitos e pergunta. Em seguida, selecciona o princípio ou procedimento do módulo, explica cada passo e termina com uma conclusão directamente ligada ao enunciado.`,
    traps: ["memorizar sem compreender", "saltar a etapa de análise", "dar uma conclusão sem justificar"],
    practice: `Cria um exemplo relacionado com ${sectorName}, resolve-o por escrito e explica por que razão o método de ${moduleTitle} é adequado.`,
    resources: "programa oficial, manual recomendado pela instituição, fontes normativas ou técnicas aplicáveis e provas anteriores quando disponíveis",
  };
}

export function buildRichLessonContent(
  trackName: string,
  sectorName: string,
  moduleTitle: string,
  lessonTitle: string,
  kind: TrackKind,
): string {
  const profile = profileFor(moduleTitle, lessonTitle, sectorName);
  const audience = kind === "concurso"
    ? `candidatos ao concurso do percurso ${trackName}`
    : `estudantes do percurso preparatório ${trackName}`;

  return `# ${lessonTitle}

> **Módulo:** ${moduleTitle}  
> **Sector:** ${sectorName}  
> **Percurso:** ${trackName}  
> **Público:** ${audience}

## 1. Objectivos de aprendizagem

No fim desta aula, o estudante deverá ser capaz de:

1. Explicar com linguagem própria o conceito central de **${lessonTitle}**.
2. Distinguir os seus elementos, condições, etapas e consequências.
3. Aplicar o método a um exercício ou situação profissional de **${sectorName}**.
4. Justificar a resposta, reconhecer erros frequentes e indicar o que precisa de rever.

## 2. Por que este tema importa

**${lessonTitle}** pertence ao núcleo de **${moduleTitle}**. O objectivo não é decorar uma definição isolada: é compreender como o tema funciona, quando deve ser aplicado e como se prova que a conclusão está correcta. Essa competência é relevante para a avaliação e para a tomada responsável de decisões no contexto de **${sectorName}**.

A pergunta orientadora desta aula é: **como reconhecer o problema, escolher o método correcto e explicar a solução com rigor?**

## 3. Base conceptual

${profile.knowledge}

Para estudar o tema, retém estas três camadas:

| Camada | Pergunta de estudo | Resultado esperado |
|---|---|---|
| Conceito | O que é e o que não é? | Definição precisa e limites claros |
| Método | Como se analisa ou resolve? | Passos ordenados e verificáveis |
| Aplicação | Onde aparece na prática? | Caso resolvido e conclusão fundamentada |

### Vocabulário mínimo

* **Conceito:** a ideia ou unidade de conhecimento que está a ser definida.
* **Critério:** a regra usada para distinguir situações ou escolher uma solução.
* **Aplicação:** a transferência do conhecimento para um exercício ou caso concreto.
* **Verificação:** a conferência da resposta, das condições e das unidades ou fontes utilizadas.

## 4. Desenvolvimento passo a passo

A abordagem recomendada para **${lessonTitle}** é a seguinte:

${profile.procedure}

Durante a resolução, escreve as premissas. Se uma informação não estiver no enunciado, não a inventes: assinala a hipótese ou procura a fonte indicada no programa. Em matérias sujeitas a actualização, confirma sempre a versão vigente antes de transformar o apontamento em regra.

## 5. Exemplo resolvido

### Situação

Aplica o tema **${lessonTitle}** a uma situação de **${sectorName}**, identificando dados, questão, método e conclusão.

### Resolução comentada

${profile.workedExample}

### Como seria avaliada uma boa resposta

Uma resposta de nível elevado apresenta o conceito, mostra os passos essenciais, usa os termos adequados e termina com uma conclusão proporcional aos dados. Não basta indicar uma opção: é necessário explicar **por que** ela é adequada e **em que condições** deixaria de ser.

## 6. Erros frequentes e correcção

| Erro | Por que prejudica | Como corrigir |
|---|---|---|
| ${profile.traps[0]} | Oculta o raciocínio e pode levar a uma aplicação fora do contexto. | Define primeiro o problema e escreve a condição de aplicação. |
| ${profile.traps[1]} | Produz respostas aparentemente certas, mas sem fundamento verificável. | Divide a resolução em etapas e justifica cada escolha. |
| ${profile.traps[2]} | Impede a revisão e dificulta detectar contradições. | Confere a resposta final com o enunciado, a unidade ou a fonte. |

## 7. Actividade guiada

${profile.practice}

**Entrega pessoal:** escreve entre cinco e dez linhas com a tua solução. Depois compara o texto com o checklist abaixo e assinala a primeira etapa que ainda não consegues executar sem ajuda.

## 8. Recuperação activa

Antes de responder ao questionário, revê sem consultar a aula:

1. Qual é a definição operacional de **${lessonTitle}**?
2. Que dados ou palavras-chave determinam a escolha do método?
3. Qual é a diferença entre uma resposta apenas plausível e uma resposta fundamentada?
4. Que erro é mais provável cometer neste tema e como o evitarias?

## 9. Síntese de revisão

* **Ideia central:** ${profile.focus}.
* **Sequência:** compreender, seleccionar, aplicar, verificar e explicar.
* **Transferência:** relacionar ${lessonTitle} com uma situação real de ${sectorName}.
* **Próxima revisão:** repetir as quatro perguntas de recuperação após 24 horas e novamente após sete dias.

## 10. Checklist de domínio

- [ ] Defini o tema sem copiar a primeira frase do manual.
- [ ] Sei separar conceito, critério e aplicação.
- [ ] Resolvi o exemplo mostrando as etapas.
- [ ] Consigo explicar um erro frequente e a sua correcção.
- [ ] Completei a actividade guiada.
- [ ] Registei uma dúvida concreta para revisão.

## 11. Leituras e fontes de estudo

Use o **programa oficial do curso**, o manual adoptado pela instituição e as fontes normativas ou técnicas aplicáveis. Para **${lessonTitle}**, a pesquisa complementar deve começar por: ${profile.resources}. A plataforma apresenta esta aula como material pedagógico pré-preparado; a legislação, os regulamentos e os conteúdos sujeitos a mudança devem ser conferidos na fonte oficial antes de uma decisão profissional ou de uma prova.

> **Aula pré-preparada:** este conteúdo é disponibilizado imediatamente e não é gerado durante a abertura da página.
`;
}
