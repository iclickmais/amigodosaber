// Taxonomia estática das áreas de estudo — Concurso Público e Preparatório.
// Aulas e quizzes são gerados por IA sob demanda e cacheados em Lovable Cloud.

export type TrackKind = "concurso" | "preparatorio";

export interface Module {
  slug: string;
  title: string;
  lessons: { slug: string; title: string }[];
}

export interface Sector {
  slug: string;
  name: string;
  description: string;
  modules: Module[];
}

export interface Track {
  slug: string;
  name: string;
  icon: string; // emoji ou letra
  tagline: string;
  sectors: Sector[];
}

// ————— Helpers para gerar módulos padrão —————

const stdConcursoModules = (subject: string): Module[] => [
  {
    slug: "portugues",
    title: "Língua Portuguesa",
    lessons: [
      { slug: "compreensao", title: "Compreensão e interpretação de texto" },
      { slug: "gramatica", title: "Gramática essencial" },
      { slug: "redaccao", title: "Redacção oficial" },
    ],
  },
  {
    slug: "matematica",
    title: "Raciocínio Lógico-Matemático",
    lessons: [
      { slug: "aritmetica", title: "Aritmética e proporções" },
      { slug: "logica", title: "Lógica e sequências" },
      { slug: "problemas", title: "Resolução de problemas" },
    ],
  },
  {
    slug: "constituicao",
    title: "Constituição da República de Angola",
    lessons: [
      { slug: "principios", title: "Princípios fundamentais" },
      { slug: "direitos", title: "Direitos, liberdades e garantias" },
      { slug: "orgaos", title: "Órgãos de soberania" },
    ],
  },
  {
    slug: "administracao",
    title: "Administração Pública",
    lessons: [
      { slug: "estrutura", title: "Estrutura da Administração Pública angolana" },
      { slug: "deontologia", title: "Deontologia e ética do funcionário público" },
      { slug: "procedimento", title: "Procedimento administrativo" },
    ],
  },
  {
    slug: "especifico",
    title: `Conhecimentos Específicos — ${subject}`,
    lessons: [
      { slug: "fundamentos", title: `Fundamentos de ${subject}` },
      { slug: "legislacao", title: `Legislação aplicável ao ${subject}` },
      { slug: "casos-praticos", title: `Casos práticos em ${subject}` },
    ],
  },
  {
    slug: "actualidades",
    title: "Actualidade angolana e mundial",
    lessons: [
      { slug: "angola", title: "Angola contemporânea" },
      { slug: "africa", title: "África e SADC" },
      { slug: "mundo", title: "Panorama global" },
    ],
  },
];

const disciplinaModule = (slug: string, title: string): Module => ({
  slug,
  title,
  lessons: [
    { slug: "fundamentos", title: `Fundamentos de ${title}` },
    { slug: "intermedio", title: `${title} — nível intermédio` },
    { slug: "avancado", title: `${title} — nível avançado` },
    { slug: "exercicios", title: `Exercícios resolvidos de ${title}` },
    { slug: "exame", title: `Simulação tipo exame — ${title}` },
  ],
});

// ————— Disciplinas ricas para o Preparatório —————

const matematicaPrep: Module = {
  slug: "matematica",
  title: "Matemática",
  lessons: [
    { slug: "conjuntos", title: "Teoria dos conjuntos e números reais" },
    { slug: "algebra", title: "Álgebra — expressões e equações" },
    { slug: "inequacoes", title: "Inequações e sistemas" },
    { slug: "funcoes", title: "Funções — domínio, contradomínio e gráficos" },
    { slug: "funcoes-quadraticas", title: "Funções quadráticas e polinomiais" },
    { slug: "exponencial-logaritmo", title: "Exponencial e logaritmo" },
    { slug: "trigonometria", title: "Trigonometria e identidades" },
    { slug: "geometria-plana", title: "Geometria plana e teoremas" },
    { slug: "geometria-analitica", title: "Geometria analítica" },
    { slug: "geometria-espacial", title: "Geometria no espaço e volumes" },
    { slug: "sucessoes", title: "Sucessões e progressões" },
    { slug: "limites", title: "Limites e continuidade" },
    { slug: "derivadas", title: "Derivadas e aplicações" },
    { slug: "integrais", title: "Noções de integrais" },
    { slug: "matrizes", title: "Matrizes e determinantes" },
    { slug: "probabilidade", title: "Combinatória e probabilidade" },
    { slug: "estatistica", title: "Estatística descritiva" },
    { slug: "exame", title: "Simulação tipo exame de acesso" },
  ],
};

const fisicaPrep: Module = {
  slug: "fisica",
  title: "Física",
  lessons: [
    { slug: "grandezas", title: "Grandezas físicas e unidades SI" },
    { slug: "cinematica", title: "Cinemática — movimento e gráficos" },
    { slug: "dinamica", title: "Dinâmica e leis de Newton" },
    { slug: "energia", title: "Trabalho, energia e potência" },
    { slug: "impulso", title: "Impulso e quantidade de movimento" },
    { slug: "gravitacao", title: "Gravitação universal" },
    { slug: "fluidos", title: "Estática dos fluidos" },
    { slug: "termodinamica", title: "Calor e termodinâmica" },
    { slug: "ondas", title: "Ondas e som" },
    { slug: "optica", title: "Óptica geométrica" },
    { slug: "electrostatica", title: "Electrostática" },
    { slug: "corrente", title: "Corrente eléctrica e circuitos" },
    { slug: "magnetismo", title: "Electromagnetismo" },
    { slug: "moderna", title: "Introdução à Física Moderna" },
    { slug: "exame", title: "Simulação tipo exame de acesso" },
  ],
};

const quimicaPrep: Module = {
  slug: "quimica",
  title: "Química",
  lessons: [
    { slug: "materia", title: "Matéria, substâncias e misturas" },
    { slug: "atomo", title: "Estrutura atómica e tabela periódica" },
    { slug: "ligacoes", title: "Ligações químicas" },
    { slug: "reaccoes", title: "Reacções químicas e balanceamento" },
    { slug: "estequiometria", title: "Estequiometria e mol" },
    { slug: "solucoes", title: "Soluções e concentração" },
    { slug: "acido-base", title: "Ácidos, bases e pH" },
    { slug: "redox", title: "Oxirredução e electroquímica" },
    { slug: "termoquimica", title: "Termoquímica" },
    { slug: "cinetica", title: "Cinética e equilíbrio químico" },
    { slug: "organica-intro", title: "Química orgânica — introdução" },
    { slug: "hidrocarbonetos", title: "Hidrocarbonetos e funções orgânicas" },
    { slug: "polimeros", title: "Polímeros e bioquímica" },
    { slug: "exame", title: "Simulação tipo exame de acesso" },
  ],
};

const biologiaPrep: Module = {
  slug: "biologia",
  title: "Biologia",
  lessons: [
    { slug: "celula", title: "Célula — estrutura e organelos" },
    { slug: "membrana", title: "Transporte pela membrana" },
    { slug: "metabolismo", title: "Metabolismo — respiração e fotossíntese" },
    { slug: "divisao", title: "Divisão celular — mitose e meiose" },
    { slug: "genetica", title: "Genética mendeliana" },
    { slug: "biomolecular", title: "Genética molecular — DNA e RNA" },
    { slug: "evolucao", title: "Evolução das espécies" },
    { slug: "ecologia", title: "Ecologia e biodiversidade angolana" },
    { slug: "sistemas", title: "Sistemas do corpo humano" },
    { slug: "reproducao", title: "Reprodução e desenvolvimento" },
    { slug: "microbiologia", title: "Microbiologia e imunidade" },
    { slug: "doencas", title: "Doenças endémicas em Angola" },
    { slug: "botanica", title: "Botânica e zoologia" },
    { slug: "exame", title: "Simulação tipo exame de acesso" },
  ],
};

const portuguesPrep: Module = {
  slug: "portugues",
  title: "Português",
  lessons: [
    { slug: "interpretacao", title: "Compreensão e interpretação de textos" },
    { slug: "tipos-texto", title: "Tipologia e géneros textuais" },
    { slug: "coesao", title: "Coesão e coerência" },
    { slug: "classes", title: "Classes de palavras" },
    { slug: "verbos", title: "Verbos e conjugação" },
    { slug: "sintaxe", title: "Sintaxe da frase simples e complexa" },
    { slug: "concordancia", title: "Concordância verbal e nominal" },
    { slug: "regencia", title: "Regência verbal e nominal" },
    { slug: "pontuacao", title: "Pontuação" },
    { slug: "semantica", title: "Semântica — sentido e ambiguidade" },
    { slug: "figuras", title: "Figuras de estilo" },
    { slug: "literatura-angolana", title: "Literatura angolana — autores essenciais" },
    { slug: "literatura-portuguesa", title: "Literatura portuguesa — do trovadorismo ao modernismo" },
    { slug: "redaccao", title: "Redacção — dissertação argumentativa" },
    { slug: "exame", title: "Simulação tipo exame de acesso" },
  ],
};

const inglesPrep: Module = {
  slug: "ingles",
  title: "Inglês",
  lessons: [
    { slug: "reading", title: "Reading comprehension" },
    { slug: "tenses", title: "Verb tenses — present, past, future" },
    { slug: "perfect", title: "Perfect tenses and passive voice" },
    { slug: "modal", title: "Modal verbs" },
    { slug: "conditionals", title: "Conditionals and reported speech" },
    { slug: "vocabulary", title: "Vocabulary building" },
    { slug: "phrasal", title: "Phrasal verbs and idioms" },
    { slug: "writing", title: "Writing — essays and letters" },
    { slug: "exame", title: "Simulação tipo exame de acesso" },
  ],
};

const historiaPrep: Module = {
  slug: "historia",
  title: "História de Angola",
  lessons: [
    { slug: "pre-colonial", title: "Angola pré-colonial e grandes reinos" },
    { slug: "kongo", title: "Reino do Kongo" },
    { slug: "ndongo", title: "Ndongo, Matamba e Rainha Njinga" },
    { slug: "trafico", title: "Tráfico de escravos e resistências" },
    { slug: "colonizacao", title: "Ocupação portuguesa efectiva" },
    { slug: "movimentos", title: "Movimentos nacionalistas e libertação" },
    { slug: "independencia", title: "Independência e 11 de Novembro" },
    { slug: "guerra-civil", title: "Guerra civil e acordos de paz" },
    { slug: "actual", title: "Angola contemporânea" },
    { slug: "africa", title: "África — descolonização e integração" },
    { slug: "mundo", title: "Panorama mundial — séculos XIX e XX" },
    { slug: "exame", title: "Simulação tipo exame de acesso" },
  ],
};

const geografiaPrep: Module = {
  slug: "geografia",
  title: "Geografia",
  lessons: [
    { slug: "fisica-angola", title: "Geografia física de Angola" },
    { slug: "clima", title: "Clima e hidrografia" },
    { slug: "biomas", title: "Biomas e vegetação" },
    { slug: "recursos", title: "Recursos naturais e minerais" },
    { slug: "populacao", title: "População e demografia" },
    { slug: "provincias", title: "As 21 províncias" },
    { slug: "economia", title: "Economia angolana" },
    { slug: "urbana", title: "Geografia urbana e rural" },
    { slug: "africa", title: "Geografia de África e SADC" },
    { slug: "mundo", title: "Geografia mundial e globalização" },
    { slug: "cartografia", title: "Cartografia e coordenadas" },
    { slug: "exame", title: "Simulação tipo exame de acesso" },
  ],
};

const filosofiaPrep: Module = {
  slug: "filosofia",
  title: "Filosofia",
  lessons: [
    { slug: "introducao", title: "O que é filosofar" },
    { slug: "antiga", title: "Filosofia antiga — pré-socráticos a Aristóteles" },
    { slug: "medieval", title: "Filosofia medieval" },
    { slug: "moderna", title: "Filosofia moderna — Descartes, Kant" },
    { slug: "contemporanea", title: "Filosofia contemporânea" },
    { slug: "africana", title: "Filosofia africana e ubuntu" },
    { slug: "logica", title: "Lógica e argumentação" },
    { slug: "etica", title: "Ética e moral" },
    { slug: "politica", title: "Filosofia política" },
    { slug: "conhecimento", title: "Teoria do conhecimento" },
    { slug: "exame", title: "Simulação tipo exame de acesso" },
  ],
};

const literaturaPrep: Module = {
  slug: "literatura",
  title: "Literatura",
  lessons: [
    { slug: "angolana-oral", title: "Literatura oral angolana" },
    { slug: "angolana-moderna", title: "Literatura angolana moderna — Agostinho Neto, Pepetela, Ondjaki" },
    { slug: "poesia-angolana", title: "Poesia angolana" },
    { slug: "portuguesa-medieval", title: "Literatura portuguesa medieval" },
    { slug: "camoes", title: "Camões e Os Lusíadas" },
    { slug: "romantismo", title: "Romantismo e Realismo" },
    { slug: "pessoa", title: "Fernando Pessoa e heterónimos" },
    { slug: "brasileira", title: "Literatura brasileira essencial" },
    { slug: "universal", title: "Literatura universal — panorama" },
    { slug: "analise", title: "Análise literária e figuras de estilo" },
    { slug: "exame", title: "Simulação tipo exame de acesso" },
  ],
};

const francesPrep: Module = {
  slug: "frances",
  title: "Francês",
  lessons: [
    { slug: "salutations", title: "Salutations et présentations" },
    { slug: "verbes", title: "Verbes réguliers et irréguliers" },
    { slug: "temps", title: "Temps du passé et futur" },
    { slug: "vocabulaire", title: "Vocabulaire essentiel" },
    { slug: "lecture", title: "Compréhension de texte" },
    { slug: "redaction", title: "Rédaction — lettre et dissertation" },
    { slug: "exame", title: "Simulação tipo exame de acesso" },
  ],
};

const logicaPrep: Module = {
  slug: "logica",
  title: "Lógica e Resolução de Problemas",
  lessons: [
    { slug: "proposicoes", title: "Proposições e conectivos lógicos" },
    { slug: "tabelas-verdade", title: "Tabelas de verdade" },
    { slug: "argumentos", title: "Argumentos válidos e falácias" },
    { slug: "sequencias", title: "Sequências numéricas e padrões" },
    { slug: "problemas", title: "Problemas de raciocínio lógico" },
    { slug: "quantitativo", title: "Raciocínio quantitativo" },
    { slug: "exame", title: "Simulação tipo exame de acesso" },
  ],
};

const stdCientificas = (): Module[] => [
  matematicaPrep,
  fisicaPrep,
  quimicaPrep,
  biologiaPrep,
  portuguesPrep,
  inglesPrep,
];

const stdEngenharias = (): Module[] => [
  matematicaPrep,
  fisicaPrep,
  quimicaPrep,
  portuguesPrep,
  inglesPrep,
  logicaPrep,
];

const stdCienciasSociais = (): Module[] => [
  portuguesPrep,
  historiaPrep,
  geografiaPrep,
  filosofiaPrep,
  matematicaPrep,
  inglesPrep,
];

const stdLetras = (): Module[] => [
  portuguesPrep,
  literaturaPrep,
  historiaPrep,
  filosofiaPrep,
  inglesPrep,
  francesPrep,
];

// ————— Módulos ricos do MININT (por carreira) —————

const commonMinintBase = (): Module[] => [
  {
    slug: "portugues",
    title: "Língua Portuguesa",
    lessons: [
      { slug: "compreensao", title: "Compreensão e interpretação de texto" },
      { slug: "tipos-texto", title: "Tipos e géneros textuais" },
      { slug: "coesao", title: "Coesão e coerência textual" },
      { slug: "classes-palavras", title: "Classes de palavras" },
      { slug: "verbos", title: "Conjugação verbal" },
      { slug: "concordancia", title: "Concordância verbal e nominal" },
      { slug: "regencia", title: "Regência verbal e nominal" },
      { slug: "sintaxe", title: "Sintaxe da frase" },
      { slug: "pontuacao", title: "Pontuação" },
      { slug: "ortografia", title: "Ortografia e acentuação" },
      { slug: "semantica", title: "Semântica — sinónimos e antónimos" },
      { slug: "figuras", title: "Figuras de estilo" },
      { slug: "redaccao", title: "Redacção oficial e ofícios" },
      { slug: "relatorio", title: "Relatório e acta" },
      { slug: "vocabulario", title: "Vocabulário técnico policial" },
    ],
  },
  {
    slug: "matematica",
    title: "Raciocínio Lógico-Matemático",
    lessons: [
      { slug: "operacoes", title: "Operações com números inteiros" },
      { slug: "fraccoes", title: "Fracções e números decimais" },
      { slug: "aritmetica", title: "Proporções e regra de três" },
      { slug: "percentagens", title: "Percentagens" },
      { slug: "juros", title: "Juros simples e compostos" },
      { slug: "equacoes", title: "Equações do 1º grau" },
      { slug: "sistemas", title: "Sistemas de equações" },
      { slug: "logica", title: "Lógica proposicional" },
      { slug: "conjuntos", title: "Teoria dos conjuntos" },
      { slug: "sequencias", title: "Sequências e padrões numéricos" },
      { slug: "geometria-plana", title: "Geometria plana" },
      { slug: "geometria-espacial", title: "Geometria espacial" },
      { slug: "medidas", title: "Sistemas de medida" },
      { slug: "estatistica", title: "Estatística e probabilidade básica" },
      { slug: "problemas", title: "Resolução de problemas" },
    ],
  },
  {
    slug: "constituicao",
    title: "Constituição da República de Angola",
    lessons: [
      { slug: "principios", title: "Princípios fundamentais do Estado" },
      { slug: "republica", title: "Natureza e forma da República" },
      { slug: "simbolos", title: "Símbolos nacionais" },
      { slug: "direitos", title: "Direitos, liberdades e garantias" },
      { slug: "direitos-sociais", title: "Direitos económicos, sociais e culturais" },
      { slug: "deveres", title: "Deveres fundamentais" },
      { slug: "estrangeiros", title: "Estatuto dos estrangeiros" },
      { slug: "orgaos", title: "Órgãos de soberania" },
      { slug: "executivo", title: "Presidente da República e Executivo" },
      { slug: "assembleia", title: "Assembleia Nacional" },
      { slug: "judicial", title: "Poder Judicial" },
      { slug: "ministerio-publico", title: "Ministério Público" },
      { slug: "defesa", title: "Defesa nacional e segurança" },
      { slug: "poder-local", title: "Poder local e autarquias" },
      { slug: "revisao", title: "Revisão constitucional" },
    ],
  },
  {
    slug: "administracao",
    title: "Administração Pública",
    lessons: [
      { slug: "conceito", title: "Conceito e princípios da Administração Pública" },
      { slug: "estrutura", title: "Estrutura da Administração central" },
      { slug: "administracao-local", title: "Administração local do Estado" },
      { slug: "deontologia", title: "Deontologia do funcionário público" },
      { slug: "etica", title: "Ética e probidade administrativa" },
      { slug: "estatuto", title: "Estatuto Geral da Função Pública" },
      { slug: "carreiras", title: "Regime de carreiras" },
      { slug: "procedimento", title: "Procedimento administrativo" },
      { slug: "actos", title: "Actos administrativos" },
      { slug: "hierarquia", title: "Hierarquia e disciplina" },
      { slug: "responsabilidade", title: "Responsabilidade civil e disciplinar" },
      { slug: "documentos", title: "Elaboração de documentos oficiais" },
      { slug: "arquivo", title: "Gestão de arquivo" },
    ],
  },
  {
    slug: "historia-angola",
    title: "História e Geografia de Angola",
    lessons: [
      { slug: "pre-colonial", title: "Angola pré-colonial e reinos" },
      { slug: "kongo", title: "Reino do Kongo" },
      { slug: "ndongo-matamba", title: "Ndongo e Matamba — Rainha Njinga" },
      { slug: "colonizacao", title: "Colonização portuguesa" },
      { slug: "resistencia", title: "Resistências à ocupação" },
      { slug: "movimentos", title: "Movimentos de libertação" },
      { slug: "independencia", title: "Luta pela independência e 11 de Novembro" },
      { slug: "guerra-civil", title: "Guerra civil e acordos de paz" },
      { slug: "republica-actual", title: "República e reconciliação nacional" },
      { slug: "geografia-fisica", title: "Geografia física de Angola" },
      { slug: "clima", title: "Clima e hidrografia" },
      { slug: "recursos", title: "Recursos naturais" },
      { slug: "populacao", title: "População e línguas nacionais" },
      { slug: "provincias", title: "As 21 províncias de Angola" },
      { slug: "economia", title: "Economia angolana" },
    ],
  },
  {
    slug: "actualidades",
    title: "Actualidades e Cultura Geral",
    lessons: [
      { slug: "angola", title: "Angola contemporânea" },
      { slug: "politica-nacional", title: "Panorama político nacional" },
      { slug: "africa", title: "África, SADC e União Africana" },
      { slug: "cplp", title: "CPLP e lusofonia" },
      { slug: "onu", title: "ONU e organizações internacionais" },
      { slug: "mundo", title: "Panorama internacional actual" },
      { slug: "seguranca", title: "Segurança regional e terrorismo" },
      { slug: "ambiente", title: "Alterações climáticas e ambiente" },
      { slug: "tecnologia", title: "Tecnologia e sociedade digital" },
      { slug: "desporto", title: "Desporto angolano e mundial" },
    ],
  },
  {
    slug: "direitos-humanos",
    title: "Direitos Humanos e Ética Policial",
    lessons: [
      { slug: "conceito", title: "Conceito e evolução dos Direitos Humanos" },
      { slug: "declaracao", title: "Declaração Universal dos Direitos Humanos" },
      { slug: "carta-africana", title: "Carta Africana dos Direitos do Homem e dos Povos" },
      { slug: "convencoes", title: "Convenções internacionais ratificadas por Angola" },
      { slug: "uso-forca", title: "Uso legítimo da força" },
      { slug: "tortura", title: "Proibição da tortura e maus-tratos" },
      { slug: "detidos", title: "Direitos das pessoas detidas" },
      { slug: "grupos-vulneraveis", title: "Protecção de grupos vulneráveis" },
      { slug: "genero", title: "Igualdade de género e violência doméstica" },
      { slug: "criancas", title: "Direitos da criança" },
      { slug: "codigo-conduta", title: "Código de conduta para agentes da lei" },
      { slug: "provedor", title: "Provedor de Justiça" },
    ],
  },
  {
    slug: "aptidao-fisica",
    title: "Aptidão Física e Saúde",
    lessons: [
      { slug: "provas", title: "Provas físicas do concurso" },
      { slug: "corrida", title: "Preparação para corrida de resistência" },
      { slug: "forca", title: "Treino de força e flexões" },
      { slug: "abdominais", title: "Abdominais e core" },
      { slug: "salto", title: "Salto em comprimento e altura" },
      { slug: "natacao", title: "Natação básica" },
      { slug: "treino", title: "Plano de treino progressivo de 12 semanas" },
      { slug: "nutricao", title: "Nutrição do candidato" },
      { slug: "hidratacao", title: "Hidratação e recuperação" },
      { slug: "lesoes", title: "Prevenção de lesões" },
      { slug: "primeiros-socorros", title: "Primeiros socorros" },
      { slug: "saude-mental", title: "Saúde mental e stress do concurso" },
    ],
  },
  {
    slug: "informatica",
    title: "Noções Básicas de Informática",
    lessons: [
      { slug: "hardware", title: "Hardware e software" },
      { slug: "windows", title: "Sistema operativo Windows" },
      { slug: "word", title: "Processamento de texto — Word" },
      { slug: "excel", title: "Folhas de cálculo — Excel" },
      { slug: "email", title: "Correio electrónico" },
      { slug: "internet", title: "Internet e pesquisa segura" },
      { slug: "seguranca", title: "Segurança informática básica" },
    ],
  },
];

const policiaNacionalModules: Module[] = [
  ...commonMinintBase(),
  {
    slug: "ordem-publica",
    title: "Ordem Pública e Segurança Interna",
    lessons: [
      { slug: "conceitos", title: "Conceitos de ordem e tranquilidade públicas" },
      { slug: "manifestacoes", title: "Gestão de manifestações e reuniões" },
      { slug: "distúrbios", title: "Controlo de distúrbios civis" },
      { slug: "patrulhamento-urbano", title: "Patrulhamento urbano a pé" },
      { slug: "patrulhamento-motorizado", title: "Patrulhamento motorizado" },
      { slug: "patrulhamento-rural", title: "Patrulhamento rural" },
      { slug: "transito", title: "Policiamento de trânsito" },
      { slug: "acidentes", title: "Atendimento a acidentes de viação" },
      { slug: "eventos", title: "Segurança em grandes eventos" },
      { slug: "escoltas", title: "Escoltas e protecção de dignitários" },
      { slug: "vizinhanca", title: "Policiamento de proximidade" },
    ],
  },
  {
    slug: "legislacao-pn",
    title: "Legislação da Polícia Nacional",
    lessons: [
      { slug: "lei-organica", title: "Lei Orgânica da Polícia Nacional" },
      { slug: "missao", title: "Missão, atribuições e competências" },
      { slug: "estatuto", title: "Estatuto Orgânico do pessoal policial" },
      { slug: "categorias", title: "Categorias, postos e insígnias" },
      { slug: "disciplinar", title: "Regulamento disciplinar" },
      { slug: "continencias", title: "Continências e honras militares" },
      { slug: "uniformes", title: "Regulamento de uniformes" },
      { slug: "armas", title: "Regime jurídico das armas e munições" },
      { slug: "lei-seguranca", title: "Lei de Segurança Nacional" },
    ],
  },
  {
    slug: "penal-basico",
    title: "Noções de Direito Penal",
    lessons: [
      { slug: "codigo-penal", title: "Código Penal — princípios gerais" },
      { slug: "crime", title: "Conceito de crime e elementos" },
      { slug: "dolo-negligencia", title: "Dolo e negligência" },
      { slug: "penas", title: "Tipos de penas" },
      { slug: "crimes-pessoa", title: "Crimes contra as pessoas" },
      { slug: "crimes-patrimonio", title: "Crimes contra o património" },
      { slug: "crimes-liberdade", title: "Crimes contra a liberdade" },
      { slug: "violencia-domestica", title: "Violência doméstica" },
      { slug: "trafico-drogas", title: "Tráfico e consumo de drogas" },
      { slug: "flagrante", title: "Flagrante delito e detenção" },
    ],
  },
  {
    slug: "processo-penal",
    title: "Processo Penal para Agentes",
    lessons: [
      { slug: "principios", title: "Princípios do processo penal" },
      { slug: "sujeitos", title: "Sujeitos processuais" },
      { slug: "inquerito", title: "Fase do inquérito" },
      { slug: "denuncia", title: "Denúncia e queixa" },
      { slug: "auto-noticia", title: "Auto de notícia" },
      { slug: "detencao", title: "Detenção e prisão preventiva" },
      { slug: "buscas", title: "Buscas e apreensões" },
      { slug: "meios-prova", title: "Meios de prova" },
      { slug: "testemunhas", title: "Inquirição de testemunhas" },
      { slug: "cadeia-custodia", title: "Cadeia de custódia" },
    ],
  },
  {
    slug: "tecnica-policial",
    title: "Técnica e Táctica Policial",
    lessons: [
      { slug: "abordagem", title: "Abordagem a suspeitos" },
      { slug: "revista", title: "Revista pessoal e a veículos" },
      { slug: "algemagem", title: "Técnicas de algemagem" },
      { slug: "conducao", title: "Condução de detidos" },
      { slug: "comunicacoes", title: "Comunicações rádio e código Q" },
      { slug: "defesa-pessoal", title: "Defesa pessoal policial" },
      { slug: "bastao", title: "Uso do bastão táctico" },
      { slug: "tiro-teoria", title: "Instrução de tiro — teoria" },
      { slug: "tiro-pratica", title: "Instrução de tiro — prática e segurança" },
      { slug: "veiculos", title: "Perseguição e paragem de veículos" },
      { slug: "reféns", title: "Situações com reféns — noções" },
    ],
  },
];

const smeModules: Module[] = [
  ...commonMinintBase(),
  {
    slug: "legislacao-migratoria",
    title: "Legislação Migratória",
    lessons: [
      { slug: "lei-estrangeiros", title: "Lei do regime jurídico de estrangeiros" },
      { slug: "entrada-saida", title: "Entrada, permanência e saída" },
      { slug: "vistos", title: "Tipos de vistos e requisitos" },
      { slug: "prorrogacao", title: "Prorrogação de permanência" },
      { slug: "residencia", title: "Autorização de residência" },
      { slug: "asilo", title: "Refugiados e direito de asilo" },
      { slug: "apatrida", title: "Apátridas" },
      { slug: "expulsao", title: "Expulsão e repatriamento" },
      { slug: "sancoes", title: "Sanções e contra-ordenações" },
    ],
  },
  {
    slug: "fronteiras",
    title: "Controlo de Fronteiras",
    lessons: [
      { slug: "postos", title: "Postos fronteiriços de Angola" },
      { slug: "procedimentos", title: "Procedimentos de controlo migratório" },
      { slug: "documentos", title: "Documentos de viagem internacionais" },
      { slug: "vistos-check", title: "Verificação de vistos" },
      { slug: "fraude", title: "Detecção de documentos fraudulentos" },
      { slug: "biometria", title: "Sistemas biométricos" },
      { slug: "trafico", title: "Combate ao tráfico de pessoas" },
      { slug: "contrabando", title: "Contrabando de migrantes" },
      { slug: "interpol", title: "Cooperação com INTERPOL" },
    ],
  },
  {
    slug: "identificacao",
    title: "Identificação Civil",
    lessons: [
      { slug: "sistema", title: "Sistema Nacional de Identificação" },
      { slug: "bi", title: "Bilhete de identidade" },
      { slug: "passaporte", title: "Passaporte angolano" },
      { slug: "registo-estrangeiros", title: "Registo central de estrangeiros" },
      { slug: "carta-condução", title: "Carta de condução" },
    ],
  },
  {
    slug: "ingles-tecnico",
    title: "Inglês Técnico para SME",
    lessons: [
      { slug: "basico", title: "Inglês básico de fronteira" },
      { slug: "saudacoes", title: "Saudações e apresentação" },
      { slug: "entrevista", title: "Entrevista a viajantes" },
      { slug: "perguntas", title: "Perguntas de rotina em inglês" },
      { slug: "documentos-ingles", title: "Leitura de documentos em inglês" },
      { slug: "situacoes", title: "Gestão de situações difíceis" },
    ],
  },
  {
    slug: "geografia-mundial",
    title: "Geografia Mundial e Fronteiras",
    lessons: [
      { slug: "continentes", title: "Continentes e países" },
      { slug: "vizinhos", title: "Países vizinhos de Angola" },
      { slug: "capitais", title: "Capitais e nacionalidades" },
      { slug: "sadc", title: "Espaço SADC e livre circulação" },
    ],
  },
];

const sicModules: Module[] = [
  ...commonMinintBase(),
  {
    slug: "direito-penal",
    title: "Direito Penal Aprofundado",
    lessons: [
      { slug: "parte-geral", title: "Parte geral do Código Penal" },
      { slug: "aplicacao-lei", title: "Aplicação da lei penal no tempo e espaço" },
      { slug: "elementos-crime", title: "Elementos do crime" },
      { slug: "tentativa", title: "Tentativa e desistência" },
      { slug: "comparticipacao", title: "Comparticipação criminosa" },
      { slug: "penas", title: "Penas e medidas de segurança" },
      { slug: "crimes-pessoa", title: "Crimes contra as pessoas" },
      { slug: "homicidio", title: "Homicídio e suas formas" },
      { slug: "crimes-patrimonio", title: "Crimes contra o património" },
      { slug: "furto-roubo", title: "Furto, roubo e burla" },
      { slug: "crimes-estado", title: "Crimes contra o Estado" },
      { slug: "crimes-economicos", title: "Crimes económicos e financeiros" },
      { slug: "corrupcao", title: "Corrupção e branqueamento de capitais" },
      { slug: "cibercrime", title: "Cibercrime" },
    ],
  },
  {
    slug: "processo-penal",
    title: "Direito Processual Penal",
    lessons: [
      { slug: "principios", title: "Princípios do processo penal" },
      { slug: "sujeitos", title: "Sujeitos processuais" },
      { slug: "competencia", title: "Competência dos tribunais" },
      { slug: "inquerito", title: "Inquérito e investigação" },
      { slug: "instrucao", title: "Instrução contraditória" },
      { slug: "julgamento", title: "Fase de julgamento" },
      { slug: "meios-prova", title: "Meios de prova e obtenção" },
      { slug: "escutas", title: "Escutas telefónicas" },
      { slug: "medidas-coaccao", title: "Medidas de coacção" },
      { slug: "recursos", title: "Recursos" },
    ],
  },
  {
    slug: "investigacao",
    title: "Técnicas de Investigação Criminal",
    lessons: [
      { slug: "metodologia", title: "Metodologia da investigação" },
      { slug: "cena-crime", title: "Preservação da cena do crime" },
      { slug: "recolha", title: "Recolha e preservação de vestígios" },
      { slug: "interrogatorio", title: "Interrogatório e entrevista cognitiva" },
      { slug: "suspeitos", title: "Identificação de suspeitos" },
      { slug: "reconhecimento", title: "Reconhecimento e retratos falados" },
      { slug: "vigilancia", title: "Vigilância e seguimentos" },
      { slug: "infiltracao", title: "Acções encobertas — noções" },
      { slug: "informadores", title: "Gestão de fontes e informadores" },
      { slug: "analise", title: "Análise criminal e cruzamento de dados" },
      { slug: "relatorio", title: "Elaboração de relatórios de investigação" },
    ],
  },
  {
    slug: "criminalistica",
    title: "Criminalística e Perícia",
    lessons: [
      { slug: "introducao", title: "Introdução à criminalística" },
      { slug: "dactiloscopia", title: "Dactiloscopia e impressões digitais" },
      { slug: "balistica", title: "Balística forense" },
      { slug: "documentoscopia", title: "Documentoscopia" },
      { slug: "dna", title: "DNA e vestígios biológicos" },
      { slug: "toxicologia", title: "Toxicologia forense" },
      { slug: "medicina-legal", title: "Noções de medicina legal" },
      { slug: "digital", title: "Perícia informática forense" },
      { slug: "fotografia", title: "Fotografia forense" },
    ],
  },
  {
    slug: "criminologia",
    title: "Criminologia",
    lessons: [
      { slug: "introducao", title: "Introdução à criminologia" },
      { slug: "teorias", title: "Teorias explicativas do crime" },
      { slug: "perfil", title: "Perfil criminal" },
      { slug: "reincidencia", title: "Reincidência e prevenção" },
      { slug: "vitimologia", title: "Vitimologia" },
      { slug: "crime-organizado", title: "Crime organizado" },
    ],
  },
];

const spcbModules: Module[] = [
  ...commonMinintBase(),
  {
    slug: "proteccao-civil",
    title: "Protecção Civil",
    lessons: [
      { slug: "sistema", title: "Sistema Nacional de Protecção Civil" },
      { slug: "legislacao", title: "Legislação da Protecção Civil" },
      { slug: "riscos", title: "Análise de riscos e vulnerabilidades" },
      { slug: "riscos-angola", title: "Principais riscos em Angola" },
      { slug: "planos", title: "Planos de emergência" },
      { slug: "coordenacao", title: "Coordenação de operações" },
      { slug: "evacuacao", title: "Evacuação de populações" },
      { slug: "abrigos", title: "Gestão de abrigos temporários" },
      { slug: "sensibilizacao", title: "Sensibilização comunitária" },
    ],
  },
  {
    slug: "combate-incendios",
    title: "Combate a Incêndios",
    lessons: [
      { slug: "quimica-fogo", title: "Química e triângulo do fogo" },
      { slug: "classes", title: "Classes de fogo" },
      { slug: "propagacao", title: "Propagação do incêndio" },
      { slug: "extincao", title: "Métodos e agentes extintores" },
      { slug: "extintores", title: "Extintores portáteis" },
      { slug: "mangueiras", title: "Mangueiras e agulhetas" },
      { slug: "epi", title: "Equipamento de protecção individual" },
      { slug: "arcs", title: "Aparelho respiratório autónomo" },
      { slug: "urbanos", title: "Incêndios urbanos" },
      { slug: "florestais", title: "Incêndios florestais e rurais" },
      { slug: "veiculos", title: "Incêndios em veículos" },
      { slug: "industriais", title: "Incêndios industriais" },
      { slug: "ventilacao", title: "Ventilação táctica" },
    ],
  },
  {
    slug: "salvamento",
    title: "Salvamento e Desencarceramento",
    lessons: [
      { slug: "principios", title: "Princípios do salvamento" },
      { slug: "aquatico", title: "Salvamento aquático" },
      { slug: "altura", title: "Salvamento em altura e cordas" },
      { slug: "confinados", title: "Espaços confinados" },
      { slug: "desencarceramento", title: "Desencarceramento em acidentes de viação" },
      { slug: "estruturas", title: "Colapso de estruturas" },
      { slug: "montanha", title: "Salvamento em montanha" },
      { slug: "animais", title: "Salvamento de animais" },
    ],
  },
  {
    slug: "emergencia-medica",
    title: "Emergência Médica Pré-Hospitalar",
    lessons: [
      { slug: "avaliacao", title: "Avaliação da vítima" },
      { slug: "suporte-basico", title: "Suporte básico de vida e RCP" },
      { slug: "dae", title: "Desfibrilhador automático externo (DAE)" },
      { slug: "hemorragias", title: "Controlo de hemorragias" },
      { slug: "trauma", title: "Atendimento ao politraumatizado" },
      { slug: "queimados", title: "Vítimas de queimaduras" },
      { slug: "fracturas", title: "Fracturas e imobilização" },
      { slug: "parto", title: "Parto de emergência" },
      { slug: "pediatria", title: "Emergências pediátricas" },
      { slug: "transporte", title: "Transporte de vítimas" },
      { slug: "triagem", title: "Triagem em incidentes multi-vítimas" },
    ],
  },
  {
    slug: "materias-perigosas",
    title: "Matérias Perigosas",
    lessons: [
      { slug: "classificacao", title: "Classificação ONU das mercadorias perigosas" },
      { slug: "rotulos", title: "Rótulos e placas de identificação" },
      { slug: "derrames", title: "Contenção de derrames" },
      { slug: "gases", title: "Fugas de gases tóxicos" },
      { slug: "quimicos", title: "Produtos químicos comuns" },
      { slug: "descontaminacao", title: "Descontaminação de vítimas e equipas" },
    ],
  },
];

const sefPenitenciarioModules: Module[] = [
  ...commonMinintBase(),
  {
    slug: "sistema-penitenciario",
    title: "Sistema Penitenciário Angolano",
    lessons: [
      { slug: "historia", title: "História do sistema prisional angolano" },
      { slug: "lei-execucao", title: "Lei de execução das penas" },
      { slug: "estabelecimentos", title: "Tipos de estabelecimentos prisionais" },
      { slug: "regime", title: "Regimes de cumprimento de pena" },
      { slug: "classificacao", title: "Classificação e separação de reclusos" },
      { slug: "preventivos", title: "Presos preventivos vs condenados" },
      { slug: "menores", title: "Regime especial de menores" },
      { slug: "mulheres", title: "Regime especial de mulheres" },
      { slug: "direitos-reclusos", title: "Direitos e deveres dos reclusos" },
      { slug: "regras-mandela", title: "Regras Mínimas de Mandela (ONU)" },
    ],
  },
  {
    slug: "seguranca-prisional",
    title: "Segurança e Vigilância Prisional",
    lessons: [
      { slug: "postos", title: "Postos de vigilância e rondas" },
      { slug: "controlo-acessos", title: "Controlo de acessos" },
      { slug: "revistas-pessoas", title: "Revistas a reclusos e visitas" },
      { slug: "revistas-celas", title: "Revistas a celas e espaços" },
      { slug: "objectos-proibidos", title: "Identificação de objectos proibidos" },
      { slug: "motins", title: "Prevenção e controlo de motins" },
      { slug: "fugas", title: "Prevenção de fugas" },
      { slug: "autoagressoes", title: "Prevenção de auto-agressões e suicídio" },
      { slug: "transporte", title: "Transporte de reclusos" },
      { slug: "algemas", title: "Uso de algemas e meios de coacção" },
      { slug: "armas-prisional", title: "Uso de armas no sistema prisional" },
    ],
  },
  {
    slug: "ressocializacao",
    title: "Tratamento e Ressocialização",
    lessons: [
      { slug: "programas", title: "Programas de reinserção social" },
      { slug: "avaliacao", title: "Avaliação individual do recluso" },
      { slug: "trabalho", title: "Trabalho prisional" },
      { slug: "educacao", title: "Educação escolar na prisão" },
      { slug: "formacao", title: "Formação profissional" },
      { slug: "religiao", title: "Assistência religiosa" },
      { slug: "familia", title: "Manutenção de laços familiares" },
      { slug: "saude-fisica", title: "Assistência médica" },
      { slug: "saude-mental", title: "Saúde mental na prisão" },
      { slug: "toxicodependencia", title: "Tratamento da toxicodependência" },
      { slug: "liberdade-condicional", title: "Liberdade condicional" },
    ],
  },
  {
    slug: "gestao-conflitos",
    title: "Gestão de Conflitos e Comunicação",
    lessons: [
      { slug: "comunicacao", title: "Comunicação eficaz com reclusos" },
      { slug: "escuta", title: "Escuta activa" },
      { slug: "mediacao", title: "Mediação de conflitos" },
      { slug: "negociacao", title: "Negociação em situações críticas" },
      { slug: "linguagem", title: "Linguagem não-verbal" },
      { slug: "stress", title: "Gestão do stress do agente" },
      { slug: "burnout", title: "Prevenção do burnout" },
    ],
  },
];


// ————— Módulos ricos do MINSA (base comum + específicos) —————

const commonMinsaBase = (): Module[] => [
  {
    slug: "portugues",
    title: "Língua Portuguesa",
    lessons: [
      { slug: "compreensao", title: "Compreensão e interpretação de texto" },
      { slug: "tipos-texto", title: "Tipos e géneros textuais" },
      { slug: "gramatica", title: "Gramática essencial" },
      { slug: "concordancia", title: "Concordância verbal e nominal" },
      { slug: "ortografia", title: "Ortografia e acentuação" },
      { slug: "redaccao", title: "Redacção oficial na saúde" },
      { slug: "relatorio", title: "Relatório clínico e nota de serviço" },
      { slug: "vocabulario", title: "Vocabulário técnico da saúde" },
    ],
  },
  {
    slug: "matematica",
    title: "Raciocínio Lógico-Matemático",
    lessons: [
      { slug: "aritmetica", title: "Aritmética e proporções" },
      { slug: "percentagens", title: "Percentagens e regra de três" },
      { slug: "dosagens", title: "Cálculo de dosagens e diluições" },
      { slug: "unidades", title: "Sistemas de medida e conversões" },
      { slug: "estatistica", title: "Estatística sanitária básica" },
      { slug: "problemas", title: "Resolução de problemas" },
    ],
  },
  {
    slug: "constituicao",
    title: "Constituição da República e Direito à Saúde",
    lessons: [
      { slug: "principios", title: "Princípios fundamentais do Estado" },
      { slug: "direitos", title: "Direitos, liberdades e garantias" },
      { slug: "direito-saude", title: "Direito à saúde (art. 77.º)" },
      { slug: "orgaos", title: "Órgãos de soberania" },
      { slug: "administracao-local", title: "Administração local e municipalização" },
    ],
  },
  {
    slug: "administracao",
    title: "Administração Pública e Deontologia",
    lessons: [
      { slug: "estatuto", title: "Estatuto Geral da Função Pública" },
      { slug: "carreiras-saude", title: "Carreiras especiais da saúde" },
      { slug: "deontologia", title: "Deontologia do profissional de saúde" },
      { slug: "sigilo", title: "Sigilo profissional e confidencialidade" },
      { slug: "procedimento", title: "Procedimento administrativo" },
      { slug: "documentos", title: "Documentos e arquivo clínico" },
    ],
  },
  {
    slug: "sns",
    title: "Sistema Nacional de Saúde de Angola",
    lessons: [
      { slug: "organizacao", title: "Organização do Sistema Nacional de Saúde" },
      { slug: "niveis", title: "Níveis de atenção — primário, secundário, terciário" },
      { slug: "rede", title: "Rede sanitária e municipalização" },
      { slug: "pndsc", title: "Política Nacional de Saúde e PNDS" },
      { slug: "cuidados-primarios", title: "Cuidados de saúde primários e Alma-Ata" },
      { slug: "financiamento", title: "Financiamento e OGE da saúde" },
      { slug: "recursos-humanos", title: "Recursos humanos em saúde" },
      { slug: "medicamentos", title: "Política nacional do medicamento" },
    ],
  },
  {
    slug: "saude-publica",
    title: "Saúde Pública e Epidemiologia",
    lessons: [
      { slug: "conceitos", title: "Saúde, doença e determinantes sociais" },
      { slug: "epidemiologia", title: "Epidemiologia — conceitos e indicadores" },
      { slug: "vigilancia", title: "Vigilância epidemiológica em Angola" },
      { slug: "malaria", title: "Malária — controlo e tratamento" },
      { slug: "tuberculose", title: "Tuberculose — programa nacional" },
      { slug: "hiv-sida", title: "HIV/SIDA — prevenção e TARV" },
      { slug: "colera", title: "Cólera e doenças diarreicas" },
      { slug: "sarampo", title: "Sarampo, poliomielite e PAV" },
      { slug: "materno-infantil", title: "Saúde materno-infantil" },
      { slug: "nutricao", title: "Nutrição e desnutrição infantil" },
      { slug: "nao-transmissiveis", title: "Doenças não-transmissíveis" },
      { slug: "surtos", title: "Resposta a surtos e emergências" },
    ],
  },
  {
    slug: "etica-bioetica",
    title: "Ética, Bioética e Direitos do Utente",
    lessons: [
      { slug: "principios", title: "Princípios da bioética" },
      { slug: "consentimento", title: "Consentimento informado" },
      { slug: "direitos-utente", title: "Carta dos Direitos e Deveres do Utente" },
      { slug: "confidencialidade", title: "Confidencialidade e protecção de dados" },
      { slug: "fim-vida", title: "Cuidados em fim de vida" },
      { slug: "conflito", title: "Gestão de conflitos éticos" },
    ],
  },
  {
    slug: "biosseguranca",
    title: "Biossegurança e Controlo de Infecções",
    lessons: [
      { slug: "principios", title: "Princípios de biossegurança" },
      { slug: "epi", title: "Equipamento de protecção individual" },
      { slug: "lavagem", title: "Lavagem das mãos e higienização" },
      { slug: "desinfeccao", title: "Desinfecção e esterilização" },
      { slug: "residuos", title: "Gestão de resíduos hospitalares" },
      { slug: "isolamento", title: "Isolamento e precauções por transmissão" },
      { slug: "acidentes", title: "Acidentes com material biológico" },
    ],
  },
  {
    slug: "historia-angola",
    title: "História e Geografia de Angola",
    lessons: [
      { slug: "movimentos", title: "Movimentos de libertação" },
      { slug: "independencia", title: "Independência e 11 de Novembro" },
      { slug: "actual", title: "Angola contemporânea" },
      { slug: "provincias", title: "As 21 províncias" },
      { slug: "populacao", title: "População e indicadores demográficos" },
    ],
  },
  {
    slug: "actualidades",
    title: "Actualidades e Cultura Geral",
    lessons: [
      { slug: "angola", title: "Actualidade angolana" },
      { slug: "saude-mundial", title: "OMS, ODS e agenda global de saúde" },
      { slug: "africa", title: "África, SADC e União Africana" },
      { slug: "pandemias", title: "Pandemias recentes — COVID-19, Marburg, Ébola" },
    ],
  },
  {
    slug: "informatica",
    title: "Informática Básica",
    lessons: [
      { slug: "windows", title: "Sistema operativo e ficheiros" },
      { slug: "word", title: "Processamento de texto" },
      { slug: "excel", title: "Folhas de cálculo — indicadores" },
      { slug: "sistemas", title: "Sistemas de informação em saúde (SIS-A)" },
      { slug: "internet", title: "Internet e segurança de dados" },
    ],
  },
];

const enfermagemModules: Module[] = [
  ...commonMinsaBase(),
  {
    slug: "fundamentos-enfermagem",
    title: "Fundamentos de Enfermagem",
    lessons: [
      { slug: "historia", title: "História da enfermagem e Florence Nightingale" },
      { slug: "processo", title: "Processo de enfermagem — SOAP" },
      { slug: "sinais-vitais", title: "Sinais vitais — TA, FC, FR, T, SpO2" },
      { slug: "exame-fisico", title: "Exame físico céfalo-caudal" },
      { slug: "necessidades", title: "Necessidades humanas básicas (V. Henderson)" },
      { slug: "higiene", title: "Higiene e conforto do doente" },
      { slug: "posicionamento", title: "Posicionamento e mobilização" },
      { slug: "alimentacao", title: "Alimentação e hidratação" },
      { slug: "eliminacao", title: "Eliminação — algaliação e clister" },
      { slug: "curativos", title: "Curativos e feridas" },
      { slug: "administracao-medicamentos", title: "Administração de medicamentos e vias" },
      { slug: "punc-venosa", title: "Punção venosa e soroterapia" },
      { slug: "registos", title: "Registos de enfermagem" },
    ],
  },
  {
    slug: "enfermagem-medico-cirurgica",
    title: "Enfermagem Médico-Cirúrgica",
    lessons: [
      { slug: "cardio", title: "Cuidados em cardiologia" },
      { slug: "hta", title: "Hipertensão arterial e diabetes" },
      { slug: "respiratorio", title: "Cuidados respiratórios e oxigenoterapia" },
      { slug: "digestivo", title: "Sistema digestivo — cuidados" },
      { slug: "renal", title: "Insuficiência renal e diálise" },
      { slug: "neurologico", title: "AVC e cuidados neurológicos" },
      { slug: "pre-op", title: "Cuidados pré-operatórios" },
      { slug: "pos-op", title: "Cuidados pós-operatórios" },
      { slug: "dor", title: "Avaliação e controlo da dor" },
    ],
  },
  {
    slug: "materno-infantil",
    title: "Enfermagem Materno-Infantil",
    lessons: [
      { slug: "pre-natal", title: "Consulta pré-natal" },
      { slug: "trabalho-parto", title: "Trabalho de parto e assistência" },
      { slug: "puerperio", title: "Puerpério e amamentação" },
      { slug: "planeamento", title: "Planeamento familiar" },
      { slug: "recem-nascido", title: "Cuidados ao recém-nascido" },
      { slug: "vacinacao", title: "Programa Alargado de Vacinação (PAV)" },
      { slug: "aidi", title: "AIDI — Atenção Integrada às Doenças da Infância" },
      { slug: "adolescente", title: "Saúde do adolescente" },
    ],
  },
  {
    slug: "urgencia",
    title: "Enfermagem em Urgência e Emergência",
    lessons: [
      { slug: "triagem", title: "Triagem de Manchester" },
      { slug: "sbv", title: "Suporte básico de vida e RCP" },
      { slug: "sav", title: "Suporte avançado de vida" },
      { slug: "trauma", title: "Atendimento ao politraumatizado" },
      { slug: "queimados", title: "Vítimas de queimaduras" },
      { slug: "intoxicacoes", title: "Intoxicações agudas" },
      { slug: "choque", title: "Estados de choque" },
    ],
  },
  {
    slug: "farmacologia-enfermagem",
    title: "Farmacologia para Enfermagem",
    lessons: [
      { slug: "principios", title: "Princípios de farmacologia" },
      { slug: "vias", title: "Vias de administração e cálculo de doses" },
      { slug: "antibioticos", title: "Antibióticos essenciais" },
      { slug: "analgesicos", title: "Analgésicos e antipiréticos" },
      { slug: "cardiovasculares", title: "Fármacos cardiovasculares" },
      { slug: "insulina", title: "Insulinas e antidiabéticos" },
      { slug: "psicotropicos", title: "Psicotrópicos e controlo" },
    ],
  },
];

const medicinaModules: Module[] = [
  ...commonMinsaBase(),
  {
    slug: "semiologia",
    title: "Semiologia Médica",
    lessons: [
      { slug: "anamnese", title: "Anamnese e história clínica" },
      { slug: "exame-fisico", title: "Exame físico geral" },
      { slug: "cardio", title: "Semiologia cardiovascular" },
      { slug: "respiratorio", title: "Semiologia respiratória" },
      { slug: "abdominal", title: "Semiologia abdominal" },
      { slug: "neurologico", title: "Exame neurológico" },
    ],
  },
  {
    slug: "clinica-medica",
    title: "Clínica Médica",
    lessons: [
      { slug: "hta", title: "Hipertensão arterial" },
      { slug: "diabetes", title: "Diabetes mellitus" },
      { slug: "dpoc-asma", title: "DPOC e asma" },
      { slug: "insuficiencia-cardiaca", title: "Insuficiência cardíaca" },
      { slug: "avc", title: "AVC e cefaleias" },
      { slug: "hepatite", title: "Hepatites virais" },
      { slug: "anemias", title: "Anemias — falciforme, ferropénica" },
      { slug: "reumatismo", title: "Doenças reumatológicas" },
    ],
  },
  {
    slug: "doencas-tropicais",
    title: "Doenças Tropicais e Infecciosas",
    lessons: [
      { slug: "malaria", title: "Malária — diagnóstico e tratamento" },
      { slug: "tb", title: "Tuberculose pulmonar e extra-pulmonar" },
      { slug: "hiv", title: "HIV/SIDA — TARV e infecções oportunistas" },
      { slug: "colera", title: "Cólera e febre tifóide" },
      { slug: "esquistossomose", title: "Esquistossomose e parasitoses" },
      { slug: "meningites", title: "Meningites" },
      { slug: "raiva", title: "Raiva e tétano" },
    ],
  },
  {
    slug: "materno-infantil-med",
    title: "Saúde Materno-Infantil",
    lessons: [
      { slug: "gravidez", title: "Assistência pré-natal" },
      { slug: "parto", title: "Parto normal e distocias" },
      { slug: "urgencias-obstetricas", title: "Urgências obstétricas — pré-eclâmpsia, hemorragia" },
      { slug: "pediatria-geral", title: "Pediatria geral" },
      { slug: "aidi", title: "AIDI e sinais de perigo" },
      { slug: "desnutricao", title: "Desnutrição aguda grave" },
      { slug: "vacinacao", title: "PAV e calendário vacinal" },
    ],
  },
  {
    slug: "cirurgia",
    title: "Cirurgia Geral",
    lessons: [
      { slug: "abdomen-agudo", title: "Abdómen agudo" },
      { slug: "hernia", title: "Hérnias" },
      { slug: "trauma", title: "Trauma e ATLS" },
      { slug: "queimaduras", title: "Queimados" },
      { slug: "pre-op", title: "Avaliação pré-operatória" },
    ],
  },
  {
    slug: "urgencia-med",
    title: "Urgência e Emergência Médica",
    lessons: [
      { slug: "abcde", title: "Abordagem ABCDE" },
      { slug: "rcp", title: "RCP no adulto e criança" },
      { slug: "choque", title: "Choque — classificação e tratamento" },
      { slug: "intoxicacoes", title: "Intoxicações agudas" },
      { slug: "convulsoes", title: "Convulsões e coma" },
    ],
  },
  {
    slug: "saude-publica-med",
    title: "Saúde Pública e Medicina Preventiva",
    lessons: [
      { slug: "indicadores", title: "Indicadores de saúde e mortalidade" },
      { slug: "epidemiologia", title: "Estudos epidemiológicos" },
      { slug: "atencao-primaria", title: "Atenção primária e municipalização" },
      { slug: "programas", title: "Programas nacionais de saúde" },
    ],
  },
];

const tecnicosDiagnosticoModules: Module[] = [
  ...commonMinsaBase(),
  {
    slug: "analises-clinicas",
    title: "Análises Clínicas",
    lessons: [
      { slug: "colheita", title: "Colheita e transporte de amostras" },
      { slug: "hematologia", title: "Hematologia — hemograma" },
      { slug: "bioquimica", title: "Bioquímica clínica" },
      { slug: "microbiologia", title: "Microbiologia e cultura" },
      { slug: "parasitologia", title: "Parasitologia — malária, parasitas intestinais" },
      { slug: "serologia", title: "Serologia — HIV, hepatites, sífilis" },
      { slug: "urina", title: "Análise sumária de urina" },
      { slug: "controlo", title: "Controlo de qualidade laboratorial" },
    ],
  },
  {
    slug: "radiologia",
    title: "Radiologia e Imagiologia",
    lessons: [
      { slug: "fisica", title: "Física das radiações" },
      { slug: "proteccao", title: "Radioprotecção e dosimetria" },
      { slug: "raios-x", title: "Técnica de raios-X convencional" },
      { slug: "tac", title: "Tomografia computorizada — noções" },
      { slug: "ecografia", title: "Ecografia — princípios" },
      { slug: "posicionamento", title: "Posicionamento radiográfico" },
      { slug: "contraste", title: "Meios de contraste" },
    ],
  },
  {
    slug: "fisioterapia",
    title: "Fisioterapia",
    lessons: [
      { slug: "anatomia", title: "Anatomia funcional e cinesiologia" },
      { slug: "avaliacao", title: "Avaliação fisioterapêutica" },
      { slug: "cinesio", title: "Cinesioterapia" },
      { slug: "electro", title: "Electroterapia" },
      { slug: "termoterapia", title: "Termoterapia e crioterapia" },
      { slug: "neuro", title: "Fisioterapia neurológica" },
      { slug: "ortopedica", title: "Fisioterapia ortopédica" },
      { slug: "respiratoria", title: "Fisioterapia respiratória" },
    ],
  },
];

const farmaciaModules: Module[] = [
  ...commonMinsaBase(),
  {
    slug: "farmacologia",
    title: "Farmacologia",
    lessons: [
      { slug: "farmacocinetica", title: "Farmacocinética" },
      { slug: "farmacodinamica", title: "Farmacodinâmica" },
      { slug: "antibioticos", title: "Antibióticos e resistência" },
      { slug: "analgesicos", title: "Analgésicos e anti-inflamatórios" },
      { slug: "cardiovasculares", title: "Fármacos cardiovasculares" },
      { slug: "endocrinos", title: "Fármacos endócrinos" },
      { slug: "psicotropicos", title: "Psicotrópicos e estupefacientes" },
      { slug: "antimalaricos", title: "Antimaláricos e antiparasitários" },
      { slug: "arv", title: "Antirretrovirais" },
    ],
  },
  {
    slug: "farmacia-hospitalar",
    title: "Farmácia Hospitalar",
    lessons: [
      { slug: "gestao-stock", title: "Gestão de stock de medicamentos" },
      { slug: "aprovisionamento", title: "Aprovisionamento e CECOMA" },
      { slug: "dispensa", title: "Dispensa por dose unitária" },
      { slug: "manipulacao", title: "Manipulação e preparações" },
      { slug: "farmacovigilancia", title: "Farmacovigilância" },
      { slug: "essenciais", title: "Lista Nacional de Medicamentos Essenciais" },
      { slug: "cadeia-frio", title: "Cadeia de frio de vacinas" },
    ],
  },
  {
    slug: "legislacao-farmaceutica",
    title: "Legislação Farmacêutica",
    lessons: [
      { slug: "regime-juridico", title: "Regime jurídico do exercício farmacêutico" },
      { slug: "arme", title: "ARMED — regulação de medicamentos" },
      { slug: "psicotropicos-lei", title: "Regime de psicotrópicos e estupefacientes" },
      { slug: "publicidade", title: "Publicidade de medicamentos" },
    ],
  },
];

const adminHospitalarModules: Module[] = [
  ...commonMinsaBase(),
  {
    slug: "gestao-hospitalar",
    title: "Gestão Hospitalar",
    lessons: [
      { slug: "estrutura", title: "Estrutura organizativa do hospital" },
      { slug: "planeamento", title: "Planeamento estratégico hospitalar" },
      { slug: "qualidade", title: "Gestão da qualidade e acreditação" },
      { slug: "indicadores", title: "Indicadores de desempenho hospitalar" },
      { slug: "rh", title: "Gestão de recursos humanos" },
      { slug: "logistica", title: "Logística e aprovisionamento" },
    ],
  },
  {
    slug: "financas-publicas",
    title: "Finanças Públicas e OGE",
    lessons: [
      { slug: "oge", title: "Ciclo do Orçamento Geral do Estado" },
      { slug: "cabimentacao", title: "Cabimentação e execução orçamental" },
      { slug: "sigfe", title: "SIGFE — sistema de gestão financeira" },
      { slug: "contratacao", title: "Contratação pública" },
      { slug: "patrimonio", title: "Gestão do património do Estado" },
    ],
  },
  {
    slug: "gestao-doentes",
    title: "Gestão do Doente e Sistemas de Informação",
    lessons: [
      { slug: "admissao", title: "Admissão, alta e transferência" },
      { slug: "processo-clinico", title: "Processo clínico e arquivo" },
      { slug: "codificacao", title: "Codificação CID-10" },
      { slug: "sis-a", title: "SIS-A e reporte de dados" },
    ],
  },
];

// ————— Módulos ricos do MINED (base comum + específicos) —————

const commonMinedBase = (): Module[] => [
  {
    slug: "portugues",
    title: "Língua Portuguesa",
    lessons: [
      { slug: "compreensao", title: "Compreensão e interpretação de texto" },
      { slug: "gramatica", title: "Gramática — classes de palavras" },
      { slug: "sintaxe", title: "Sintaxe e análise sintáctica" },
      { slug: "concordancia", title: "Concordância verbal e nominal" },
      { slug: "ortografia", title: "Ortografia e acentuação" },
      { slug: "redaccao", title: "Redacção pedagógica e dissertação" },
      { slug: "literatura", title: "Literatura angolana no ensino" },
    ],
  },
  {
    slug: "matematica",
    title: "Raciocínio Lógico-Matemático",
    lessons: [
      { slug: "aritmetica", title: "Aritmética e proporções" },
      { slug: "logica", title: "Lógica e sequências" },
      { slug: "problemas", title: "Resolução de problemas" },
      { slug: "estatistica", title: "Estatística para o docente" },
    ],
  },
  {
    slug: "constituicao",
    title: "Constituição da República e Direito à Educação",
    lessons: [
      { slug: "principios", title: "Princípios fundamentais do Estado" },
      { slug: "direitos", title: "Direitos, liberdades e garantias" },
      { slug: "direito-educacao", title: "Direito à educação (art. 79.º)" },
      { slug: "orgaos", title: "Órgãos de soberania" },
    ],
  },
  {
    slug: "lbse",
    title: "Lei de Bases do Sistema de Educação (LBSE)",
    lessons: [
      { slug: "principios", title: "Princípios, fins e objectivos da educação" },
      { slug: "estrutura", title: "Estrutura do sistema de educação e ensino" },
      { slug: "primario", title: "Ensino primário" },
      { slug: "secundario", title: "Ensino secundário — I e II ciclos" },
      { slug: "tecnico", title: "Ensino técnico-profissional" },
      { slug: "superior", title: "Ensino superior" },
      { slug: "especial", title: "Educação especial e inclusiva" },
      { slug: "adultos", title: "Educação de adultos" },
      { slug: "avaliacao", title: "Avaliação das aprendizagens" },
      { slug: "docente", title: "Estatuto da carreira docente" },
    ],
  },
  {
    slug: "pedagogia",
    title: "Pedagogia Geral",
    lessons: [
      { slug: "conceitos", title: "Conceitos fundamentais da pedagogia" },
      { slug: "correntes", title: "Correntes pedagógicas — do tradicional ao construtivismo" },
      { slug: "freire", title: "Paulo Freire e a pedagogia libertadora" },
      { slug: "aprendizagem", title: "Teorias da aprendizagem — Piaget, Vygotsky, Ausubel" },
      { slug: "curriculo", title: "Currículo e projecto educativo" },
      { slug: "planificacao", title: "Planificação da aula" },
      { slug: "objectivos", title: "Objectivos educacionais e taxonomia de Bloom" },
      { slug: "gestao-sala", title: "Gestão de sala de aula" },
      { slug: "motivacao", title: "Motivação e envolvimento do aluno" },
      { slug: "inclusao", title: "Educação inclusiva e diferenciação" },
    ],
  },
  {
    slug: "psicologia-educacao",
    title: "Psicologia da Educação",
    lessons: [
      { slug: "desenvolvimento", title: "Desenvolvimento infantil e adolescente" },
      { slug: "cognicao", title: "Processos cognitivos e aprendizagem" },
      { slug: "afectivo", title: "Desenvolvimento afectivo e social" },
      { slug: "dificuldades", title: "Dificuldades de aprendizagem" },
      { slug: "comportamento", title: "Comportamento e disciplina positiva" },
      { slug: "bullying", title: "Prevenção do bullying" },
    ],
  },
  {
    slug: "didactica",
    title: "Didáctica Geral",
    lessons: [
      { slug: "conceitos", title: "Didáctica — conceitos e objecto" },
      { slug: "metodos", title: "Métodos e técnicas de ensino" },
      { slug: "aula", title: "Estrutura de uma aula eficaz" },
      { slug: "recursos", title: "Recursos didácticos e materiais" },
      { slug: "tic-educacao", title: "TIC na educação" },
      { slug: "avaliacao", title: "Avaliação — diagnóstica, formativa, sumativa" },
      { slug: "instrumentos", title: "Instrumentos de avaliação" },
      { slug: "feedback", title: "Feedback pedagógico" },
    ],
  },
  {
    slug: "etica-docente",
    title: "Ética e Deontologia Docente",
    lessons: [
      { slug: "estatuto", title: "Estatuto da carreira docente" },
      { slug: "deontologia", title: "Deontologia profissional do professor" },
      { slug: "direitos-crianca", title: "Direitos da criança e do adolescente" },
      { slug: "abuso", title: "Prevenção de abuso e negligência" },
      { slug: "genero", title: "Igualdade de género na escola" },
    ],
  },
  {
    slug: "historia-angola",
    title: "História e Geografia de Angola",
    lessons: [
      { slug: "pre-colonial", title: "Angola pré-colonial e reinos" },
      { slug: "independencia", title: "Independência e 11 de Novembro" },
      { slug: "actual", title: "Angola contemporânea" },
      { slug: "provincias", title: "As 21 províncias" },
      { slug: "linguas", title: "Línguas nacionais e diversidade cultural" },
    ],
  },
  {
    slug: "actualidades",
    title: "Actualidades e Cultura Geral",
    lessons: [
      { slug: "angola", title: "Actualidade angolana" },
      { slug: "africa", title: "África, SADC e União Africana" },
      { slug: "ods", title: "ODS 4 — Educação de qualidade" },
      { slug: "mundo", title: "Panorama internacional" },
    ],
  },
  {
    slug: "informatica-educativa",
    title: "Informática Educativa",
    lessons: [
      { slug: "windows", title: "Sistema operativo e ficheiros" },
      { slug: "word", title: "Word — testes e materiais" },
      { slug: "excel", title: "Excel — pautas e notas" },
      { slug: "powerpoint", title: "PowerPoint — apresentações pedagógicas" },
      { slug: "internet", title: "Recursos educativos abertos" },
    ],
  },
];

const primarioModules: Module[] = [
  ...commonMinedBase(),
  {
    slug: "pedagogia-primaria",
    title: "Pedagogia do Ensino Primário",
    lessons: [
      { slug: "especificidade", title: "Especificidade da 1ª à 6ª classe" },
      { slug: "monodocencia", title: "Regime de monodocência" },
      { slug: "planos-classes", title: "Planos curriculares do ensino primário" },
      { slug: "clube", title: "Actividades lúdicas e clubes escolares" },
      { slug: "familia", title: "Relação escola-família" },
    ],
  },
  {
    slug: "alfabetizacao",
    title: "Alfabetização e Iniciação à Leitura",
    lessons: [
      { slug: "metodos", title: "Métodos de alfabetização — sintético e analítico" },
      { slug: "consciencia", title: "Consciência fonológica" },
      { slug: "leitura", title: "Ensino da leitura" },
      { slug: "escrita", title: "Ensino da escrita e caligrafia" },
      { slug: "compreensao", title: "Compreensão leitora" },
      { slug: "bilingue", title: "Alfabetização em contexto bilingue" },
    ],
  },
  {
    slug: "matematica-primaria",
    title: "Didáctica da Matemática no Primário",
    lessons: [
      { slug: "numero", title: "Sentido de número" },
      { slug: "operacoes", title: "As quatro operações" },
      { slug: "problemas", title: "Resolução de problemas" },
      { slug: "geometria", title: "Geometria no primário" },
      { slug: "medida", title: "Grandezas e medidas" },
      { slug: "materiais", title: "Materiais manipulativos" },
    ],
  },
  {
    slug: "estudo-meio",
    title: "Estudo do Meio e Ciências",
    lessons: [
      { slug: "meio-fisico", title: "Meio físico e ambiente" },
      { slug: "meio-social", title: "Meio social e comunidade" },
      { slug: "saude", title: "Educação para a saúde" },
      { slug: "ciencias", title: "Iniciação às ciências naturais" },
      { slug: "experiencias", title: "Experiências simples em sala" },
    ],
  },
];

const secundario1Modules: Module[] = [
  ...commonMinedBase(),
  {
    slug: "didactica-i-ciclo",
    title: "Didáctica do I Ciclo",
    lessons: [
      { slug: "adolescente", title: "Ensinar o adolescente da 7ª à 9ª" },
      { slug: "planos", title: "Planos curriculares do I ciclo" },
      { slug: "interdisciplinar", title: "Trabalho interdisciplinar" },
      { slug: "projectos", title: "Trabalho por projectos" },
      { slug: "avaliacao", title: "Avaliação no I ciclo" },
    ],
  },
  {
    slug: "orientacao",
    title: "Orientação Escolar e Vocacional",
    lessons: [
      { slug: "diretor-turma", title: "Papel do director de turma" },
      { slug: "vocacional", title: "Orientação vocacional para o II ciclo" },
      { slug: "absentismo", title: "Prevenção do absentismo escolar" },
    ],
  },
];

const secundario2Modules: Module[] = [
  ...commonMinedBase(),
  {
    slug: "didactica-ii-ciclo",
    title: "Didáctica do II Ciclo",
    lessons: [
      { slug: "areas", title: "Áreas de formação — Ciências, Económico-Jurídicas, Humanas" },
      { slug: "planos", title: "Planos curriculares do II ciclo" },
      { slug: "exame", title: "Preparação para o exame nacional" },
      { slug: "acesso-superior", title: "Preparação para o acesso ao ensino superior" },
      { slug: "avaliacao", title: "Avaliação no II ciclo" },
    ],
  },
  {
    slug: "metodologia-cientifica",
    title: "Metodologia Científica",
    lessons: [
      { slug: "pesquisa", title: "Ensinar pesquisa e trabalho científico" },
      { slug: "referenciacao", title: "Referenciação e citação" },
      { slug: "projecto-final", title: "Projecto tecnológico e monografia" },
    ],
  },
];

const tecnicoDocenteModules: Module[] = [
  ...commonMinedBase(),
  {
    slug: "ensino-tecnico",
    title: "Ensino Técnico-Profissional",
    lessons: [
      { slug: "sistema", title: "Sistema INEFOP e institutos técnicos" },
      { slug: "competencias", title: "Formação por competências" },
      { slug: "praticas", title: "Aulas práticas e oficinas" },
      { slug: "seguranca", title: "Segurança nas oficinas e laboratórios" },
      { slug: "empresa", title: "Ligação escola-empresa e estágios" },
      { slug: "empreendedorismo", title: "Educação para o empreendedorismo" },
    ],
  },
  {
    slug: "avaliacao-tecnica",
    title: "Avaliação por Competências",
    lessons: [
      { slug: "referenciais", title: "Referenciais de competências" },
      { slug: "provas-praticas", title: "Provas práticas e demonstração" },
      { slug: "portfolio", title: "Portefólio do aluno" },
      { slug: "prova-aptidao", title: "Prova de aptidão profissional (PAP)" },
    ],
  },
];

// ————— CONCURSO PÚBLICO —————

export const concursoTracks: Track[] = [
  {
    slug: "minint",
    name: "Ministério do Interior",
    icon: "🛡️",
    tagline: "Preparação completa para todas as carreiras do MININT.",
    sectors: [
      { slug: "policia-nacional", name: "Polícia Nacional (PN)", description: "Agente e Subinspector da PN — ordem pública, patrulhamento e legislação policial.", modules: policiaNacionalModules },
      { slug: "sme", name: "Serviço de Migração e Estrangeiros (SME)", description: "Controlo de fronteiras, vistos, documentos e combate ao tráfico.", modules: smeModules },
      { slug: "sic", name: "Serviço de Investigação Criminal (SIC)", description: "Investigação criminal, criminalística e processo penal.", modules: sicModules },
      { slug: "spcb", name: "Serviço de Protecção Civil e Bombeiros (SPCB)", description: "Combate a incêndios, salvamento e emergência médica.", modules: spcbModules },
      { slug: "sef", name: "Serviço Penitenciário", description: "Guarda prisional — segurança, vigilância e ressocialização.", modules: sefPenitenciarioModules },
    ],
  },
  {
    slug: "minsa",
    name: "Ministério da Saúde",
    icon: "⚕️",
    tagline: "Concursos para carreiras da saúde pública.",
    sectors: [
      { slug: "enfermagem", name: "Enfermagem", description: "Enfermeiro básico, geral e superior — cuidados, farmacologia e materno-infantil.", modules: enfermagemModules },
      { slug: "medicina", name: "Medicina", description: "Médicos generalistas — clínica, cirurgia, doenças tropicais e urgência.", modules: medicinaModules },
      { slug: "tecnicos-diagnostico", name: "Técnicos de Diagnóstico e Terapêutica", description: "Análises clínicas, radiologia e fisioterapia.", modules: tecnicosDiagnosticoModules },
      { slug: "farmacia", name: "Farmácia Hospitalar", description: "Farmacologia, gestão de medicamentos e legislação farmacêutica.", modules: farmaciaModules },
      { slug: "administracao-hospitalar", name: "Administração Hospitalar", description: "Gestão de unidades sanitárias, OGE e sistemas de informação.", modules: adminHospitalarModules },
    ],
  },
  {
    slug: "mined",
    name: "Ministério da Educação",
    icon: "📚",
    tagline: "Concursos para a carreira docente — LBSE, pedagogia e didáctica.",
    sectors: [
      { slug: "primario", name: "Docente do Ensino Primário", description: "1ª à 6ª classe — alfabetização, monodocência e didáctica primária.", modules: primarioModules },
      { slug: "secundario-1", name: "Docente do I Ciclo do Ensino Secundário", description: "7ª à 9ª classe — didáctica do I ciclo e orientação escolar.", modules: secundario1Modules },
      { slug: "secundario-2", name: "Docente do II Ciclo do Ensino Secundário", description: "10ª à 13ª classe — didáctica do II ciclo e metodologia científica.", modules: secundario2Modules },
      { slug: "tecnico", name: "Docente do Ensino Técnico-Profissional", description: "Institutos técnicos — formação por competências e avaliação prática.", modules: tecnicoDocenteModules },
    ],
  },
  {
    slug: "minjusdh",
    name: "Ministério da Justiça e Direitos Humanos",
    icon: "⚖️",
    tagline: "Concursos para carreiras jurídicas e do registo.",
    sectors: [
      { slug: "magistratura", name: "Magistratura Judicial e do MP", description: "Juízes e procuradores.", modules: stdConcursoModules("Direito Substantivo e Processual") },
      { slug: "registos-notariado", name: "Registos e Notariado", description: "Conservadores e notários.", modules: stdConcursoModules("Registos, Notariado e Identificação") },
      { slug: "prisional", name: "Guarda Prisional", description: "Serviços prisionais.", modules: stdConcursoModules("Sistema Prisional Angolano") },
    ],
  },
  {
    slug: "minfin",
    name: "Ministério das Finanças",
    icon: "💰",
    tagline: "AGT, Tesouro e Inspecção Financeira.",
    sectors: [
      { slug: "agt", name: "Administração Geral Tributária (AGT)", description: "Impostos e aduaneira.", modules: stdConcursoModules("Fiscalidade e Aduanas") },
      { slug: "tesouro", name: "Tesouro Nacional", description: "Gestão do OGE.", modules: stdConcursoModules("Contabilidade Pública e OGE") },
      { slug: "inspeccao", name: "Inspecção-Geral de Finanças", description: "Auditoria pública.", modules: stdConcursoModules("Auditoria e Controlo Interno") },
    ],
  },
  {
    slug: "minap",
    name: "Administração Pública",
    icon: "🏛️",
    tagline: "Carreiras transversais do Estado.",
    sectors: [
      { slug: "assistente-tecnico", name: "Assistente Técnico", description: "Nível médio.", modules: stdConcursoModules("Prática Administrativa") },
      { slug: "tecnico-superior", name: "Técnico Superior", description: "Nível superior.", modules: stdConcursoModules("Gestão Pública") },
      { slug: "secretariado", name: "Secretariado Executivo", description: "Apoio à direcção.", modules: stdConcursoModules("Secretariado e Protocolo") },
    ],
  },
  {
    slug: "mindef",
    name: "Ministério da Defesa (FAA — civis)",
    icon: "🎖️",
    tagline: "Concursos civis para as Forças Armadas.",
    sectors: [
      { slug: "administrativo", name: "Pessoal Administrativo", description: "Apoio às FAA.", modules: stdConcursoModules("Administração Militar") },
      { slug: "saude-militar", name: "Saúde Militar", description: "Enfermagem e medicina militar.", modules: stdConcursoModules("Saúde Militar") },
      { slug: "logistica", name: "Logística Militar", description: "Cadeia de abastecimento.", modules: stdConcursoModules("Logística e Manutenção") },
    ],
  },
  {
    slug: "mintt",
    name: "Ministério dos Transportes",
    icon: "🚛",
    tagline: "Transportes rodoviário, ferroviário, aéreo e marítimo.",
    sectors: [
      { slug: "rodoviario", name: "Transporte Rodoviário (INTR)", description: "Regulação rodoviária.", modules: stdConcursoModules("Transporte Rodoviário") },
      { slug: "aereo", name: "Aviação Civil (INAVIC)", description: "Aviação civil.", modules: stdConcursoModules("Aviação Civil") },
      { slug: "maritimo", name: "Transporte Marítimo (IMPA)", description: "Portos e navegação.", modules: stdConcursoModules("Transporte Marítimo") },
    ],
  },
  {
    slug: "minagrip",
    name: "Ministério da Agricultura e Pescas",
    icon: "🌾",
    tagline: "Agricultura, pescas e desenvolvimento rural.",
    sectors: [
      { slug: "extensao-rural", name: "Extensão Rural (IDA)", description: "Apoio ao agricultor.", modules: stdConcursoModules("Extensão Agrária") },
      { slug: "veterinaria", name: "Serviços Veterinários", description: "Sanidade animal.", modules: stdConcursoModules("Medicina Veterinária") },
      { slug: "pescas", name: "Pescas e Aquicultura", description: "Recursos aquáticos.", modules: stdConcursoModules("Pescas e Aquicultura") },
    ],
  },
  {
    slug: "minener",
    name: "Ministério da Energia e Águas",
    icon: "⚡",
    tagline: "Sector energético e hídrico.",
    sectors: [
      { slug: "electricidade", name: "Electricidade (ENDE, PRODEL)", description: "Produção e distribuição.", modules: stdConcursoModules("Sistemas Eléctricos") },
      { slug: "aguas", name: "Águas e Saneamento (EPAL)", description: "Abastecimento de água.", modules: stdConcursoModules("Gestão Hídrica") },
    ],
  },
  {
    slug: "mtti",
    name: "Ministério das Telecomunicações",
    icon: "📡",
    tagline: "TIC, correios e telecomunicações.",
    sectors: [
      { slug: "tic", name: "Tecnologias de Informação", description: "Analistas e técnicos TIC.", modules: stdConcursoModules("Tecnologias de Informação") },
      { slug: "telecom", name: "Telecomunicações", description: "Redes e infra-estruturas.", modules: stdConcursoModules("Redes e Telecomunicações") },
    ],
  },
  {
    slug: "mincult",
    name: "Ministério da Cultura, Turismo e Ambiente",
    icon: "🎭",
    tagline: "Cultura, turismo e ambiente.",
    sectors: [
      { slug: "cultura", name: "Património Cultural", description: "Museus, arquivos, património.", modules: stdConcursoModules("Património Cultural") },
      { slug: "turismo", name: "Turismo", description: "Sector turístico.", modules: stdConcursoModules("Gestão Turística") },
      { slug: "ambiente", name: "Ambiente", description: "Protecção ambiental.", modules: stdConcursoModules("Gestão Ambiental") },
    ],
  },
];

// ————— PREPARATÓRIO UNIVERSITÁRIO —————

export const preparatorioTracks: Track[] = [
  {
    slug: "saude",
    name: "Ciências da Saúde",
    icon: "🩺",
    tagline: "Medicina, Enfermagem, Farmácia e afins.",
    sectors: [
      { slug: "medicina", name: "Medicina", description: "Acesso a Medicina.", modules: stdCientificas() },
      { slug: "enfermagem", name: "Enfermagem", description: "Acesso a Enfermagem.", modules: stdCientificas() },
      { slug: "farmacia", name: "Farmácia", description: "Acesso a Farmácia.", modules: stdCientificas() },
      { slug: "psicologia", name: "Psicologia", description: "Acesso a Psicologia.", modules: stdCienciasSociais() },
      { slug: "odontologia", name: "Estomatologia / Odontologia", description: "Acesso a Estomatologia.", modules: stdCientificas() },
      { slug: "analises-clinicas", name: "Análises Clínicas", description: "Técnico superior.", modules: stdCientificas() },
      { slug: "fisioterapia", name: "Fisioterapia", description: "Acesso a Fisioterapia.", modules: stdCientificas() },
      { slug: "nutricao", name: "Nutrição", description: "Acesso a Nutrição.", modules: stdCientificas() },
    ],
  },
  {
    slug: "engenharias",
    name: "Engenharias",
    icon: "🛠️",
    tagline: "Todas as engenharias com foco em Matemática e Física.",
    sectors: [
      { slug: "civil", name: "Engenharia Civil", description: "Estruturas, construção.", modules: stdEngenharias() },
      { slug: "informatica", name: "Engenharia Informática", description: "Software e sistemas.", modules: stdEngenharias() },
      { slug: "electrotecnica", name: "Engenharia Electrotécnica", description: "Energia e electrónica.", modules: stdEngenharias() },
      { slug: "mecanica", name: "Engenharia Mecânica", description: "Máquinas e produção.", modules: stdEngenharias() },
      { slug: "quimica", name: "Engenharia Química", description: "Processos industriais.", modules: stdEngenharias() },
      { slug: "petroleos", name: "Engenharia de Petróleos", description: "Upstream e refinação.", modules: stdEngenharias() },
      { slug: "minas", name: "Engenharia de Minas e Geologia", description: "Exploração mineira.", modules: stdEngenharias() },
      { slug: "ambiental", name: "Engenharia do Ambiente", description: "Sustentabilidade.", modules: stdEngenharias() },
      { slug: "agronomia", name: "Engenharia Agronómica", description: "Agricultura.", modules: stdEngenharias() },
    ],
  },
  {
    slug: "sociais",
    name: "Ciências Sociais e Humanas",
    icon: "⚖️",
    tagline: "Direito, Economia, Gestão e afins.",
    sectors: [
      { slug: "direito", name: "Direito", description: "Acesso à Faculdade de Direito.", modules: stdCienciasSociais() },
      { slug: "economia", name: "Economia", description: "Acesso a Economia.", modules: stdCienciasSociais() },
      { slug: "gestao", name: "Gestão", description: "Acesso a Gestão.", modules: stdCienciasSociais() },
      { slug: "contabilidade", name: "Contabilidade e Auditoria", description: "Acesso a Contabilidade.", modules: stdCienciasSociais() },
      { slug: "relacoes-internacionais", name: "Relações Internacionais", description: "Diplomacia.", modules: stdCienciasSociais() },
      { slug: "sociologia", name: "Sociologia", description: "Ciência social.", modules: stdCienciasSociais() },
      { slug: "servico-social", name: "Serviço Social", description: "Trabalho social.", modules: stdCienciasSociais() },
      { slug: "comunicacao", name: "Ciências da Comunicação", description: "Jornalismo.", modules: stdCienciasSociais() },
    ],
  },
  {
    slug: "exactas",
    name: "Ciências Exactas e Naturais",
    icon: "🧪",
    tagline: "Matemática, Física, Química, Biologia.",
    sectors: [
      { slug: "matematica", name: "Matemática", description: "Licenciatura em Matemática.", modules: stdCientificas() },
      { slug: "fisica", name: "Física", description: "Licenciatura em Física.", modules: stdCientificas() },
      { slug: "quimica", name: "Química", description: "Licenciatura em Química.", modules: stdCientificas() },
      { slug: "biologia", name: "Biologia", description: "Licenciatura em Biologia.", modules: stdCientificas() },
      { slug: "geologia", name: "Geologia", description: "Ciências da Terra.", modules: stdCientificas() },
      { slug: "informatica", name: "Informática", description: "Ciências da Computação.", modules: stdCientificas() },
    ],
  },
  {
    slug: "letras",
    name: "Letras e Humanidades",
    icon: "📖",
    tagline: "Línguas, literatura, história e filosofia.",
    sectors: [
      { slug: "portugues", name: "Ensino do Português", description: "Licenciatura em Português.", modules: stdLetras() },
      { slug: "ingles", name: "Ensino do Inglês", description: "Licenciatura em Inglês.", modules: stdLetras() },
      { slug: "frances", name: "Ensino do Francês", description: "Licenciatura em Francês.", modules: stdLetras() },
      { slug: "linguistica", name: "Linguística e Línguas Bantu", description: "Estudos linguísticos.", modules: stdLetras() },
      { slug: "historia", name: "História", description: "Licenciatura em História.", modules: stdLetras() },
      { slug: "filosofia", name: "Filosofia", description: "Licenciatura em Filosofia.", modules: stdLetras() },
    ],
  },
  {
    slug: "arquitectura-artes",
    name: "Arquitectura e Artes",
    icon: "🏛️",
    tagline: "Arquitectura, design e artes visuais.",
    sectors: [
      { slug: "arquitectura", name: "Arquitectura e Urbanismo", description: "Acesso a Arquitectura.", modules: stdEngenharias() },
      { slug: "design", name: "Design", description: "Design gráfico e produto.", modules: stdCientificas() },
      { slug: "artes-visuais", name: "Artes Visuais", description: "Pintura, escultura.", modules: stdLetras() },
      { slug: "musica", name: "Música", description: "Formação musical.", modules: stdLetras() },
    ],
  },
];

// ————— Lookups —————

export function getTracks(kind: TrackKind): Track[] {
  return kind === "concurso" ? concursoTracks : preparatorioTracks;
}

export function getTrack(kind: TrackKind, slug: string): Track | undefined {
  return getTracks(kind).find((t) => t.slug === slug);
}

export function getSector(kind: TrackKind, trackSlug: string, sectorSlug: string) {
  const track = getTrack(kind, trackSlug);
  if (!track) return undefined;
  const sector = track.sectors.find((s) => s.slug === sectorSlug);
  if (!sector) return undefined;
  return { track, sector };
}

export function getLesson(
  kind: TrackKind,
  trackSlug: string,
  sectorSlug: string,
  moduleSlug: string,
  lessonSlug: string,
) {
  const found = getSector(kind, trackSlug, sectorSlug);
  if (!found) return undefined;
  const mod = found.sector.modules.find((m) => m.slug === moduleSlug);
  if (!mod) return undefined;
  const lesson = mod.lessons.find((l) => l.slug === lessonSlug);
  if (!lesson) return undefined;
  return { ...found, module: mod, lesson };
}

export function totalSectors(kind: TrackKind): number {
  return getTracks(kind).reduce((s, t) => s + t.sectors.length, 0);
}
