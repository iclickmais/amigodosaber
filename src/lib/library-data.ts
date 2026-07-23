// Digital library catalog — 100,000+ books across Academic and Christian
// categories, generated procedurally on demand. Curated titles are surfaced as
// "featured" and take priority at the top of their subcategories (relevance).
//
// The catalog is intentionally huge (~100k). To keep the app fast we never
// materialize all books at once: `listBooks(...)` returns pages, `getBook(id)`
// decodes an id back into a book, and `searchBooks(q)` scans lazily.

export type Palette = "gold" | "burgundy" | "emerald" | "sapphire" | "ivory";
export type Ornament = "cross" | "book" | "quill" | "crown" | "leaf" | "star";

export type Subcategory = {
  slug: string;
  name: string;
  count: number;
  /** Author pool + title templates used to generate procedural titles. */
  authors: string[];
  templates: string[];
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  totalCount: number;
  subcategories: Subcategory[];
};

export type Book = {
  id: string;
  title: string;
  author: string;
  category: string;
  subcategory: string;
  price: number; // Kz, one of 500 / 1000 / 1500 / 2000
  pages: number;
  year: number;
  rating: number;
  downloads: number;
  cover: { palette: Palette; ornament: Ornament };
  synopsis: string;
  featured?: boolean;
};

// ---------------------------------------------------------------------------
// Category / subcategory tree with author pools + title templates
// ---------------------------------------------------------------------------

const palettes: Palette[] = ["gold", "burgundy", "emerald", "sapphire", "ivory"];
const ornamentsAcad: Ornament[] = ["book", "quill", "star", "crown", "leaf"];
const ornamentsCristao: Ornament[] = ["cross", "book", "star", "crown", "leaf"];

export const categories: Category[] = [
  {
    slug: "academicos",
    name: "Acadêmicos",
    tagline: "Conhecimento científico e universitário",
    totalCount: 202460,
    subcategories: [
      {
        slug: "direito",
        name: "Direito",
        count: 16840,
        authors: ["Carlos Feijó", "Raul Araújo", "Adão de Almeida", "Elisa Rangel", "Onofre dos Santos", "Cremildo Paca", "Bornito de Sousa", "Fátima Viegas"],
        templates: ["Manual de {topic}", "Curso de {topic}", "Tratado de {topic}", "Introdução ao {topic}", "Compêndio de {topic}", "Direito {topic} em Angola", "{topic} — Doutrina e Jurisprudência", "Prática Forense em {topic}"],
      },
      {
        slug: "medicina",
        name: "Medicina & Saúde",
        count: 18630,
        authors: ["António Cascais", "João Almeida", "Silvia Lutucuta", "Manuel Lima", "Rosa Pacavira", "Adelaide de Carvalho", "Óscar Cardoso", "Helga Freitas"],
        templates: ["Tratado de {topic}", "Manual Prático de {topic}", "Fundamentos de {topic}", "Atlas de {topic}", "Clínica de {topic}", "{topic} — Diagnóstico e Tratamento", "Guia Essencial de {topic}", "Princípios de {topic}"],
      },
      {
        slug: "engenharia",
        name: "Engenharia",
        count: 14360,
        authors: ["José Timóteo", "Fernando Mucavele", "Miguel Bandua", "Adilson Neto", "Paulino Bettencourt", "Sérgio Cassinda", "Nzagi Casimiro", "Kiala Gabriel"],
        templates: ["Fundamentos de {topic}", "Engenharia de {topic}", "Manual de {topic}", "Projetos em {topic}", "{topic} Aplicada", "Introdução à {topic}", "Cálculo de {topic}", "Prática de {topic}"],
      },
      {
        slug: "economia",
        name: "Economia & Gestão",
        count: 13080,
        authors: ["Alves da Rocha", "Vera Daves", "Manuel Alves da Rocha", "Precioso Domingos", "Carlos Rosado", "Justino Pinto de Andrade", "Regina Santos", "Aguinaldo Jaime"],
        templates: ["Fundamentos de {topic}", "Gestão de {topic}", "Economia {topic}", "Manual de {topic}", "{topic} para Gestores", "Estratégia em {topic}", "Análise de {topic}", "Prática de {topic}"],
      },
      {
        slug: "psicologia",
        name: "Psicologia",
        count: 9640,
        authors: ["Filomena Silva", "Bento Kangamba", "Amélia Mingas", "Rogério Meneses", "Cesaltina Abreu", "Luís Kandjimbo", "Suzana Ramos", "Adolfo Maria"],
        templates: ["Psicologia {topic}", "Introdução à {topic}", "Manual de {topic}", "{topic} Clínica", "Fundamentos de {topic}", "Estudos em {topic}", "Prática em {topic}", "{topic} Aplicada"],
      },
      {
        slug: "filosofia",
        name: "Filosofia",
        count: 7920,
        authors: ["Severino Ngoenha", "Paulin Hountondji", "Kwame Nkrumah", "V.Y. Mudimbe", "Achille Mbembe", "Cornel West", "Marcien Towa", "Fabien Eboussi"],
        templates: ["Filosofia {topic}", "Ensaios de {topic}", "Introdução à {topic}", "Fundamentos de {topic}", "{topic} Contemporânea", "Estudos em {topic}", "O Pensamento {topic}", "Crítica de {topic}"],
      },
      {
        slug: "ciencias-sociais",
        name: "Ciências Sociais",
        count: 10240,
        authors: ["Nelson Pestana", "Christine Messiant", "Ricardo Soares de Oliveira", "Paulo de Carvalho", "Justin Pearce", "Franz Wilhelm Heimer", "Delfim Neves", "Sara Marizana"],
        templates: ["Sociologia {topic}", "Estudos em {topic}", "Antropologia {topic}", "{topic} e Sociedade", "Introdução à {topic}", "Manual de {topic}", "{topic} Contemporânea", "Análise de {topic}"],
      },
      {
        slug: "literatura",
        name: "Literatura & Linguística",
        count: 12560,
        authors: ["Luís Kandjimbo", "Pepetela", "Ondjaki", "José Luandino Vieira", "Manuel Rui", "Boaventura Cardoso", "Ana Paula Tavares", "Ruy Duarte de Carvalho"],
        templates: ["Estudos de {topic}", "Antologia de {topic}", "Literatura {topic}", "Introdução à {topic}", "Ensaios sobre {topic}", "Análise de {topic}", "Poética de {topic}", "Crítica de {topic}"],
      },
      {
        slug: "informatica",
        name: "Informática & TI",
        count: 11780,
        authors: ["Miguel Bandua", "Adilson Neto", "Nzagi Casimiro", "Emanuel Chindele", "Aristides Kiluanje", "Domingos Simões", "Nélio Muteka", "Kiala Gabriel"],
        templates: ["Programação em {topic}", "Introdução ao {topic}", "Manual de {topic}", "Desenvolvimento com {topic}", "Fundamentos de {topic}", "{topic} na Prática", "Guia Completo de {topic}", "Arquitetura de {topic}"],
      },
      {
        slug: "historia",
        name: "História",
        count: 9910,
        authors: ["René Pélissier", "Alberto Oliveira Pinto", "Beatrix Heintze", "Isabel de Castro Henriques", "Douglas Wheeler", "Aida Freudenthal", "Rosa Cruz e Silva", "Paulo Vidal"],
        templates: ["História {topic}", "Estudos de {topic}", "{topic} — Volume I", "{topic} — Volume II", "Introdução à {topic}", "Documentos de {topic}", "Crónicas de {topic}", "Memória de {topic}"],
      },
      {
        slug: "contabilidade",
        name: "Contabilidade",
        count: 10480,
        authors: ["Vera Daves", "António Mateus", "Aguinaldo Jaime", "Fernando Teixeira dos Santos", "Manuel Vicente", "José Pedro de Morais", "Nuno Barroso", "Isabel Sandão"],
        templates: ["Contabilidade {topic}", "Manual de {topic}", "Prática de {topic}", "Introdução à {topic}", "Fundamentos de {topic}", "{topic} Aplicada", "Auditoria de {topic}", "{topic} em Angola"],
      },
      {
        slug: "enfermagem",
        name: "Enfermagem",
        count: 9360,
        authors: ["Rosa Pacavira", "Helga Freitas", "Adelaide de Carvalho", "Maria de Fátima Neto", "Isabel Mendonça", "Teresa Bastos", "Cláudia Sebastião", "Domingas Neto"],
        templates: ["Enfermagem em {topic}", "Manual de {topic}", "Cuidados em {topic}", "Fundamentos de {topic}", "Prática de {topic}", "{topic} — Guia da Enfermagem", "Assistência em {topic}", "Protocolos de {topic}"],
      },
      {
        slug: "farmacia",
        name: "Farmácia",
        count: 6240,
        authors: ["Silvia Lutucuta", "Óscar Cardoso", "Manuel Lima", "Rui Sarmento", "Bento Bengui", "Adilson Neto", "Paulo Serra", "Cristina Cabral"],
        templates: ["Farmacologia de {topic}", "Manual de {topic}", "Prática Farmacêutica em {topic}", "Fundamentos de {topic}", "{topic} Clínica", "Farmácia {topic}", "{topic} — Guia Prático", "Terapêutica de {topic}"],
      },
      {
        slug: "arquitetura",
        name: "Arquitetura & Urbanismo",
        count: 5720,
        authors: ["Ângela Mingas", "Paulo Moreira", "Isabel Martins", "Sérgio Cassinda", "Nuno Torres", "Aida Freudenthal", "Rui Passos Mateus", "Kiala Gabriel"],
        templates: ["Arquitetura {topic}", "Projeto de {topic}", "Urbanismo e {topic}", "Manual de {topic}", "Desenho de {topic}", "Fundamentos de {topic}", "{topic} Sustentável", "História de {topic}"],
      },
      {
        slug: "educacao",
        name: "Educação & Pedagogia",
        count: 11720,
        authors: ["Filihete Gomes", "Cesaltina Abreu", "Amélia Mingas", "Justino Pinto de Andrade", "Rogério Meneses", "Suzana Ramos", "Bento Kangamba", "Adolfo Maria"],
        templates: ["Pedagogia {topic}", "Didática de {topic}", "Educação {topic}", "Manual de {topic}", "Ensino de {topic}", "{topic} na Escola", "Fundamentos de {topic}", "Prática Docente em {topic}"],
      },
      {
        slug: "agronomia",
        name: "Agronomia & Ambiente",
        count: 5080,
        authors: ["Fernando Pacheco", "Emanuel Chindele", "Delfim Neves", "Paulino Bettencourt", "Nzagi Casimiro", "José Timóteo", "Rui Sarmento", "Ana Paula Tavares"],
        templates: ["Agronomia {topic}", "Manejo de {topic}", "Produção de {topic}", "Manual de {topic}", "Fundamentos de {topic}", "{topic} Sustentável", "Cultura de {topic}", "Ambiente e {topic}"],
      },
      {
        slug: "matematica",
        name: "Matemática",
        count: 3800,
        authors: ["James Stewart", "Elon Lages Lima", "Howard Anton", "Gelson Iezzi", "Serge Lang", "Michael Spivak", "Adilson Gonçalves", "Paulo Boulos"],
        templates: ["Cálculo {topic}", "Álgebra {topic}", "Fundamentos de {topic}", "Introdução à {topic}", "Manual de {topic}", "{topic} Aplicada", "Exercícios de {topic}", "Análise {topic}"],
      },
      {
        slug: "fisica",
        name: "Física",
        count: 3200,
        authors: ["Halliday & Resnick", "Sears & Zemansky", "Tipler", "Moysés Nussenzveig", "Alonso & Finn", "David Griffiths", "Richard Feynman", "H. Serway"],
        templates: ["Física {topic}", "Fundamentos de {topic}", "Curso de {topic}", "Manual de {topic}", "Introdução à {topic}", "{topic} Moderna", "Problemas de {topic}", "Princípios de {topic}"],
      },
      {
        slug: "quimica",
        name: "Química",
        count: 2900,
        authors: ["Peter Atkins", "Ricardo Feltre", "John McMurry", "Linus Pauling", "Vollhardt", "Solomons", "Skoog", "Russell"],
        templates: ["Química {topic}", "Fundamentos de {topic}", "Manual de {topic}", "Introdução à {topic}", "{topic} Aplicada", "Análise {topic}", "Práticas de {topic}", "Princípios de {topic}"],
      },
      {
        slug: "biologia",
        name: "Biologia",
        count: 3400,
        authors: ["Neil Campbell", "Sadava", "Amabis & Martho", "Lehninger", "Junqueira & Carneiro", "Purves", "Robert Brooker", "César da Silva"],
        templates: ["Biologia {topic}", "Fundamentos de {topic}", "Manual de {topic}", "Introdução à {topic}", "{topic} Celular", "{topic} Molecular", "Práticas de {topic}", "Princípios de {topic}"],
      },
      {
        slug: "estatistica",
        name: "Estatística & Probabilidade",
        count: 2200,
        authors: ["Pedro Morettin", "Wilton Bussab", "Ronald Walpole", "David Freedman", "George Casella", "Douglas Montgomery", "Sheldon Ross", "Larry Wasserman"],
        templates: ["Estatística {topic}", "Probabilidade e {topic}", "Fundamentos de {topic}", "Manual de {topic}", "Introdução à {topic}", "{topic} Aplicada", "Métodos {topic}", "Análise {topic}"],
      },
      {
        slug: "veterinaria",
        name: "Medicina Veterinária",
        count: 2100,
        authors: ["Ettinger", "Kahn Merck", "Blood & Radostits", "Cunningham", "Fossum", "Nelson & Couto", "Thrall", "Slatter"],
        templates: ["Medicina Veterinária — {topic}", "Clínica Veterinária de {topic}", "Manual de {topic}", "Fundamentos de {topic}", "{topic} Animal", "Diagnóstico em {topic}", "Cirurgia de {topic}", "Tratado de {topic}"],
      },
      {
        slug: "odontologia",
        name: "Odontologia",
        count: 2600,
        authors: ["Sturdevant", "Cohen & Hargreaves", "Newman & Carranza", "Lindhe", "Okeson", "Proffit", "Peterson", "Mount & Hume"],
        templates: ["Odontologia {topic}", "Manual de {topic}", "Fundamentos de {topic}", "Clínica de {topic}", "{topic} Estética", "Prótese e {topic}", "Cirurgia em {topic}", "Tratado de {topic}"],
      },
      {
        slug: "marketing",
        name: "Marketing & Publicidade",
        count: 3400,
        authors: ["Philip Kotler", "Seth Godin", "David Ogilvy", "Al Ries", "Byron Sharp", "Simon Sinek", "Martin Lindstrom", "Gary Vaynerchuk"],
        templates: ["Marketing {topic}", "Publicidade {topic}", "Fundamentos de {topic}", "Manual de {topic}", "Estratégia de {topic}", "{topic} Digital", "Branding e {topic}", "Gestão de {topic}"],
      },
      {
        slug: "logistica",
        name: "Logística & Transportes",
        count: 2400,
        authors: ["Ronald Ballou", "Martin Christopher", "Paulo Bertaglia", "Donald Bowersox", "João Sucupira", "David Simchi-Levi", "Sunil Chopra", "Edgar Novaes"],
        templates: ["Logística {topic}", "Gestão de {topic}", "Manual de {topic}", "Fundamentos de {topic}", "Cadeia de {topic}", "Transportes e {topic}", "Operações de {topic}", "Planeamento de {topic}"],
      },
      {
        slug: "comunicacao",
        name: "Comunicação Social",
        count: 2900,
        authors: ["Ciro Marcondes Filho", "Muniz Sodré", "Nelson Traquina", "Adriano Duarte Rodrigues", "Dominique Wolton", "Manuel Castells", "Denis McQuail", "Nilson Lage"],
        templates: ["Comunicação {topic}", "Jornalismo {topic}", "Manual de {topic}", "Fundamentos de {topic}", "Teoria da {topic}", "{topic} nos Media", "Prática de {topic}", "Estudos de {topic}"],
      },
    ],
  },
  {
    slug: "cristaos",
    name: "Cristãos",
    tagline: "Fé, teologia e vida cristã",
    totalCount: 143820,
    subcategories: [
      {
        slug: "biblia-estudos",
        name: "Bíblia & Estudos Bíblicos",
        count: 19680,
        authors: ["Hernandes Dias Lopes", "R. C. Sproul", "John MacArthur", "Warren Wiersbe", "Antônio Renato Gusso", "Russell Shedd", "Merrill Unger", "Kenneth Barker"],
        templates: ["Comentário de {topic}", "Estudo Bíblico em {topic}", "Panorama de {topic}", "Introdução a {topic}", "Chaves para {topic}", "Meditações em {topic}", "Exegese de {topic}", "Guia de Estudo — {topic}"],
      },
      {
        slug: "teologia",
        name: "Teologia Sistemática",
        count: 12420,
        authors: ["Wayne Grudem", "Louis Berkhof", "John Stott", "R. C. Sproul", "Millard Erickson", "Herman Bavinck", "J. I. Packer", "Charles Hodge"],
        templates: ["Teologia {topic}", "Doutrina {topic}", "A Doutrina de {topic}", "Fundamentos de {topic}", "O Deus de {topic}", "Estudos em {topic}", "Introdução a {topic}", "Tratado sobre {topic}"],
      },
      {
        slug: "vida-crista",
        name: "Vida Cristã",
        count: 14360,
        authors: ["John Bunyan", "A. W. Tozer", "Andrew Murray", "Charles Spurgeon", "Watchman Nee", "Oswald Chambers", "Elisabeth Elliot", "Max Lucado"],
        templates: ["O Cristão e {topic}", "Vivendo {topic}", "Meditações sobre {topic}", "Andando em {topic}", "A Jornada de {topic}", "Crescendo em {topic}", "Devocional — {topic}", "Reflexões sobre {topic}"],
      },
      {
        slug: "pregacao",
        name: "Pregação & Homilética",
        count: 7840,
        authors: ["Bryan Chapell", "Haddon Robinson", "John Piper", "James Braga", "Martyn Lloyd-Jones", "Charles Spurgeon", "Steven Lawson", "Harold Bryson"],
        templates: ["Pregação {topic}", "Como Pregar sobre {topic}", "Homilética — {topic}", "Sermões em {topic}", "A Arte de Pregar {topic}", "Pregando {topic}", "Manual de Pregação — {topic}", "O Pregador e {topic}"],
      },
      {
        slug: "familia",
        name: "Família Cristã",
        count: 8320,
        authors: ["Larry Christenson", "Gary Chapman", "James Dobson", "Renato Cardoso", "Cristiane Cardoso", "Josh McDowell", "Tim Kimmel", "Voddie Baucham"],
        templates: ["O Lar e {topic}", "Casamento e {topic}", "Educando Filhos em {topic}", "Família Cristã — {topic}", "O Pai Cristão e {topic}", "A Mãe Cristã e {topic}", "Princípios de {topic} no Lar", "{topic} para a Família"],
      },
      {
        slug: "louvor",
        name: "Louvor & Adoração",
        count: 5360,
        authors: ["A. W. Tozer", "Matt Redman", "Bob Sorge", "Mattos Nascimento", "Ana Nóbrega", "Ron Kenoly", "Judson Cornwall", "Graham Kendrick"],
        templates: ["Adoração {topic}", "Louvor e {topic}", "O Adorador e {topic}", "A Igreja que {topic}", "Meditações de {topic}", "Cânticos de {topic}", "Chamados a {topic}", "A Arte de {topic}"],
      },
      {
        slug: "apologetica",
        name: "Apologética",
        count: 4680,
        authors: ["Josh McDowell", "William Lane Craig", "Lee Strobel", "Ravi Zacharias", "C. S. Lewis", "Timothy Keller", "Norman Geisler", "Alister McGrath"],
        templates: ["Em Defesa de {topic}", "Evidências de {topic}", "Apologética {topic}", "Respondendo a {topic}", "A Fé e {topic}", "Cristianismo e {topic}", "O Caso de {topic}", "Razões para {topic}"],
      },
      {
        slug: "missoes",
        name: "Missões & Evangelismo",
        count: 4780,
        authors: ["René Padilla", "David Bosch", "John Piper", "Roland Allen", "Lesslie Newbigin", "Ed Stetzer", "Ralph Winter", "Elisabeth Elliot"],
        templates: ["Missão {topic}", "Evangelismo {topic}", "A Igreja em {topic}", "Missões e {topic}", "O Missionário e {topic}", "Chamados para {topic}", "Estratégias de {topic}", "Manual de {topic}"],
      },
      {
        slug: "biblias",
        name: "Bíblias",
        count: 12960,
        authors: ["Almeida Revista e Atualizada", "Almeida Corrigida Fiel", "Nova Versão Internacional", "Nova Almeida Atualizada", "Nova Tradução na Linguagem de Hoje", "King James Atualizada", "Bíblia de Jerusalém", "Edição Ave-Maria"],
        templates: ["Bíblia Sagrada — {topic}", "Bíblia {topic}", "Nova Bíblia {topic}", "Bíblia — Edição {topic}", "Bíblia Sagrada Edição {topic}", "Bíblia — {topic}", "Sagrada Bíblia — {topic}", "Bíblia Ilustrada — {topic}"],
      },
      {
        slug: "biblias-estudo",
        name: "Bíblias de Estudo",
        count: 10440,
        authors: ["John MacArthur", "R. C. Sproul", "Charles Stanley", "David Jeremiah", "John Piper", "Hernandes Dias Lopes", "Russell Shedd", "Warren Wiersbe"],
        templates: ["Bíblia de Estudo {topic}", "Bíblia de Estudo — {topic}", "Bíblia Comentada — {topic}", "Bíblia de Aplicação {topic}", "Bíblia Anotada — {topic}", "Bíblia de Referência — {topic}", "Bíblia de Estudo Devocional — {topic}", "Bíblia — Guia de Estudo {topic}"],
      },
      {
        slug: "devocionais",
        name: "Devocionais",
        count: 8520,
        authors: ["Charles Spurgeon", "Oswald Chambers", "A. W. Tozer", "Sarah Young", "Max Lucado", "John Piper", "Elisabeth Elliot", "Andrew Murray"],
        templates: ["Devocional Diário — {topic}", "Meditações sobre {topic}", "365 Dias com {topic}", "Manhãs com {topic}", "Pão Diário — {topic}", "Devocionais em {topic}", "Momentos de {topic}", "Reflexões Diárias — {topic}"],
      },
      {
        slug: "discipulado",
        name: "Discipulado & Liderança",
        count: 6560,
        authors: ["Robert Coleman", "Bill Hull", "Greg Ogden", "John Maxwell", "Dallas Willard", "Francis Chan", "Ed Stetzer", "Rick Warren"],
        templates: ["Discipulado {topic}", "Formando Discípulos em {topic}", "Liderança e {topic}", "Manual de {topic}", "O Discípulo e {topic}", "Igreja e {topic}", "Multiplicando {topic}", "Fundamentos de {topic}"],
      },
      {
        slug: "juventude",
        name: "Juventude & Adolescentes",
        count: 3200,
        authors: ["Josh McDowell", "Doug Fields", "Jonathan McKee", "Rick Warren", "Louie Giglio", "Cristiane Cardoso", "Renato Cardoso", "Kevin DeYoung"],
        templates: ["Jovens e {topic}", "Adolescentes em {topic}", "Manual do Jovem — {topic}", "Ministério com Jovens — {topic}", "Desafios de {topic}", "Vida de Jovem — {topic}", "{topic} para Adolescentes", "Guia do Jovem — {topic}"],
      },
      {
        slug: "mulheres",
        name: "Mulheres Cristãs",
        count: 3600,
        authors: ["Elisabeth Elliot", "Joyce Meyer", "Priscilla Shirer", "Beth Moore", "Cristiane Cardoso", "Ester Bezerra", "Sarah Young", "Ann Voskamp"],
        templates: ["A Mulher e {topic}", "Mulheres de {topic}", "Devocional para Mulheres — {topic}", "A Esposa e {topic}", "Meditações Femininas — {topic}", "Chamadas a {topic}", "Coração de Mulher — {topic}", "Mulher Cristã e {topic}"],
      },
      {
        slug: "homens",
        name: "Homens Cristãos",
        count: 2400,
        authors: ["John Eldredge", "Stu Weber", "James Dobson", "Kent Hughes", "Robert Lewis", "Steve Farrar", "Patrick Morley", "R. Kent Hughes"],
        templates: ["O Homem e {topic}", "Homens de {topic}", "Devocional para Homens — {topic}", "O Marido e {topic}", "Chamados a {topic}", "Coração de Homem — {topic}", "Guerreiros de {topic}", "Homem Cristão e {topic}"],
      },
      {
        slug: "aconselhamento",
        name: "Aconselhamento Cristão",
        count: 2800,
        authors: ["Jay Adams", "David Powlison", "Paul Tripp", "Larry Crabb", "Ed Welch", "Gary Collins", "Wayne Mack", "Timothy Lane"],
        templates: ["Aconselhamento em {topic}", "Cura Interior e {topic}", "Manual de {topic}", "Pastoreando o Coração em {topic}", "{topic} à Luz da Bíblia", "Restauração em {topic}", "Fundamentos de {topic}", "Ajuda Cristã em {topic}"],
      },
      {
        slug: "escatologia",
        name: "Escatologia & Profecia",
        count: 2600,
        authors: ["Hal Lindsey", "Tim LaHaye", "John Walvoord", "Antônio Gilberto", "Russell Shedd", "Kim Riddlebarger", "Anthony Hoekema", "Erwin Lutzer"],
        templates: ["Escatologia {topic}", "Estudos de {topic}", "Profecia e {topic}", "O Fim dos Tempos — {topic}", "Manual de {topic}", "Apocalipse e {topic}", "As Últimas Coisas — {topic}", "Perspectivas sobre {topic}"],
      },
      {
        slug: "historia-igreja",
        name: "História da Igreja",
        count: 2900,
        authors: ["Justo González", "Earle Cairns", "Bruce Shelley", "Philip Schaff", "Kenneth Latourette", "Diarmaid MacCulloch", "Alister McGrath", "Roland Bainton"],
        templates: ["História da Igreja — {topic}", "A Igreja em {topic}", "Cristianismo e {topic}", "Estudos de {topic}", "Vida e Obra — {topic}", "Movimento {topic}", "Reforma e {topic}", "Patrística — {topic}"],
      },
      {
        slug: "oracao",
        name: "Oração & Espiritualidade",
        count: 3400,
        authors: ["E. M. Bounds", "Andrew Murray", "Watchman Nee", "Richard Foster", "Charles Spurgeon", "Paul Miller", "Timothy Keller", "Dallas Willard"],
        templates: ["A Oração e {topic}", "Escola de Oração — {topic}", "Espiritualidade e {topic}", "O Poder da Oração em {topic}", "Manual de Oração — {topic}", "Vida Devocional — {topic}", "Intercessão e {topic}", "Comunhão com Deus — {topic}"],
      },
      {
        slug: "financas-cristas",
        name: "Finanças Cristãs",
        count: 1800,
        authors: ["Dave Ramsey", "Larry Burkett", "Randy Alcorn", "Ron Blue", "Howard Dayton", "Crown Financial", "Silas Malafaia", "Renato Cardoso"],
        templates: ["Finanças à Luz da Bíblia — {topic}", "Mordomia e {topic}", "O Cristão e {topic}", "Prosperidade Bíblica — {topic}", "Manual de {topic}", "Dízimos, Ofertas e {topic}", "Vida Financeira Cristã — {topic}", "Sabedoria para {topic}"],
      },
      {
        slug: "infantil",
        name: "Ministério Infantil",
        count: 2100,
        authors: ["Sally Lloyd-Jones", "Marty Machowski", "Bíblia Infantil", "Silas Malafaia", "Cristiane Cardoso", "Focus on the Family", "Ana Nóbrega", "Aroldo Menezes"],
        templates: ["Bíblia para Crianças — {topic}", "Ensinando às Crianças — {topic}", "Escola Bíblica Infantil — {topic}", "Manual do Professor — {topic}", "Devocional Infantil — {topic}", "Histórias Bíblicas de {topic}", "Crianças e {topic}", "Ministério com Crianças — {topic}"],
      },
      {
        slug: "biografias",
        name: "Biografias Cristãs",
        count: 3100,
        authors: ["John Piper", "Iain Murray", "Eric Metaxas", "James Boice", "Elisabeth Elliot", "Erwin Lutzer", "Faith Cook", "Stephen Nichols"],
        templates: ["Vida de {topic}", "Biografia de {topic}", "A Herança de {topic}", "O Legado de {topic}", "Nas Pegadas de {topic}", "Retratos de {topic}", "Testemunhos de {topic}", "Fé e Coragem — {topic}"],
      },
    ],
  },
];

const topicsAcad: Record<string, string[]> = {
  direito: ["Direito Constitucional", "Direito Civil", "Direito Penal", "Direito Comercial", "Direito Administrativo", "Direito Internacional", "Direito do Trabalho", "Direito Tributário", "Direito Processual", "Direito de Família", "Direitos Humanos", "Direito Ambiental"],
  medicina: ["Semiologia", "Anatomia", "Fisiologia", "Cardiologia", "Pediatria", "Cirurgia Geral", "Neurologia", "Ginecologia", "Farmacologia", "Patologia", "Saúde Pública", "Nutrição Clínica"],
  engenharia: ["Resistência dos Materiais", "Termodinâmica", "Circuitos Elétricos", "Mecânica dos Fluidos", "Estruturas de Concreto", "Sistemas de Controle", "Hidráulica", "Geotecnia", "Estradas e Pavimentos", "Máquinas Elétricas", "Automação Industrial", "Cálculo Estrutural"],
  economia: ["Macroeconomia", "Microeconomia", "Contabilidade Financeira", "Finanças Corporativas", "Gestão Estratégica", "Marketing", "Comércio Internacional", "Auditoria", "Economia Africana", "Recursos Humanos", "Estatística Aplicada", "Empreendedorismo"],
  psicologia: ["Desenvolvimento", "Cognitiva", "Social", "Clínica", "Organizacional", "Educacional", "Comportamental", "da Personalidade", "Positiva", "do Trabalho", "Familiar", "da Saúde"],
  filosofia: ["Africana", "Política", "da Mente", "da Ciência", "Contemporânea", "Antiga", "Moral", "da Religião", "Existencialista", "da Linguagem", "Ocidental", "Estética"],
  "ciencias-sociais": ["do Trabalho", "Urbana", "Rural", "Política", "da Educação", "da Cultura", "das Migrações", "das Religiões", "Contemporânea", "Econômica", "Africana", "da Juventude"],
  literatura: ["Angolana", "Portuguesa", "Africana", "Comparada", "Contemporânea", "Poesia", "Romance", "Conto", "Teatro", "Linguística Bantu", "Semiótica", "Retórica"],
  informatica: ["Python", "JavaScript", "Java", "C++", "Redes de Computadores", "Bases de Dados", "Inteligência Artificial", "Segurança Cibernética", "Sistemas Operativos", "Engenharia de Software", "DevOps", "Ciência de Dados"],
  historia: ["de Angola", "de África", "Contemporânea", "Medieval", "das Descobertas", "do Colonialismo", "da Independência", "Econômica", "Militar", "das Ideias", "Universal", "dos Povos Bantu"],
  contabilidade: ["Financeira", "de Custos", "Gerencial", "Fiscal", "Pública", "Analítica", "Bancária", "Internacional", "Consolidada", "Ambiental", "Digital", "Forense"],
  enfermagem: ["Pediátrica", "Obstétrica", "Clínica", "Cirúrgica", "de Urgência", "Comunitária", "Geriátrica", "Materno-Infantil", "Psiquiátrica", "Oncológica", "Intensiva", "em Saúde Pública"],
  farmacia: ["Farmacologia Clínica", "Farmácia Hospitalar", "Toxicologia", "Farmacognosia", "Bioquímica Farmacêutica", "Farmacotécnica", "Cosmetologia", "Fitoterapia", "Antibióticos", "Cardiovasculares", "Analgésicos", "Pediátrica"],
  arquitetura: ["Sustentável", "Residencial", "Urbana", "Paisagística", "de Interiores", "Bioclimática", "Contemporânea", "Colonial", "Vernacular", "Comercial", "Hospitalar", "Escolar"],
  educacao: ["Infantil", "Básica", "Superior", "Inclusiva", "à Distância", "Especial", "de Adultos", "Ambiental", "Digital", "Bilingue", "Musical", "Física"],
  agronomia: ["do Milho", "do Café", "da Mandioca", "dos Solos", "Irrigação", "Fitossanidade", "Pecuária", "Bovinocultura", "Avicultura", "Piscicultura", "Agroflorestal", "Orgânica"],
  matematica: ["Diferencial", "Integral", "Linear", "Vetorial", "Discreta", "Numérica", "Financeira", "Combinatória", "Geometria Analítica", "Equações Diferenciais", "Análise Real", "Teoria dos Números"],
  fisica: ["Mecânica Clássica", "Eletromagnetismo", "Óptica", "Termodinâmica", "Mecânica Quântica", "Relatividade", "Ondulatória", "Nuclear", "Estatística", "de Partículas", "do Estado Sólido", "Astrofísica"],
  quimica: ["Geral", "Orgânica", "Inorgânica", "Analítica", "Físico-Química", "Bioquímica", "Ambiental", "Industrial", "Farmacêutica", "de Alimentos", "dos Polímeros", "Instrumental"],
  biologia: ["Celular", "Molecular", "Genética", "Ecologia", "Evolução", "Botânica", "Zoologia", "Microbiologia", "Bioquímica", "Fisiologia Animal", "Fisiologia Vegetal", "Biotecnologia"],
  estatistica: ["Descritiva", "Inferencial", "Multivariada", "Bayesiana", "Regressão", "Séries Temporais", "Amostragem", "Não-Paramétrica", "Aplicada à Pesquisa", "Aplicada à Economia", "Aplicada à Saúde", "Computacional"],
  veterinaria: ["Canina", "Felina", "Equina", "de Bovinos", "de Aves", "de Suínos", "de Pequenos Animais", "Silvestre", "Reprodução Animal", "Nutrição Animal", "Patologia Animal", "Saúde Pública Veterinária"],
  odontologia: ["Dentística", "Endodontia", "Periodontia", "Ortodontia", "Prótese", "Implantodontia", "Cirurgia Bucomaxilofacial", "Odontopediatria", "Radiologia Oral", "Estética Dental", "Oclusão", "Materiais Dentários"],
  marketing: ["Digital", "de Conteúdo", "de Redes Sociais", "de Influência", "B2B", "Estratégico", "de Marca", "de Produto", "de Serviços", "Neuromarketing", "de Performance", "Internacional"],
  logistica: ["Empresarial", "de Suprimentos", "Reversa", "Internacional", "Portuária", "Aérea", "de Armazenagem", "de Distribuição", "Just-in-Time", "de Frotas", "Verde", "Digital"],
  comunicacao: ["Organizacional", "Digital", "Política", "Publicitária", "Jornalística", "Audiovisual", "Interpessoal", "de Massa", "Radiofónica", "Televisiva", "de Crise", "Institucional"],
};

const topicsCristao: Record<string, string[]> = {
  "biblia-estudos": ["Gênesis", "Salmos", "Isaías", "Mateus", "João", "Romanos", "Efésios", "Hebreus", "Apocalipse", "Provérbios", "Atos dos Apóstolos", "Livros Poéticos"],
  teologia: ["de Deus", "do Espírito Santo", "da Salvação", "da Igreja", "da Encarnação", "da Graça", "da Trindade", "das Escrituras", "da Aliança", "Bíblica", "Reformada", "Contemporânea"],
  "vida-crista": ["Oração", "Santidade", "Fé", "Perdão", "Sofrimento", "Alegria", "Discernimento", "Humildade", "Coragem", "Discipulado", "Perseverança", "Amor"],
  pregacao: ["o Evangelho", "Cristo", "a Cruz", "a Graça", "os Salmos", "as Parábolas", "Sermão do Monte", "os Profetas", "os Apóstolos", "a Ressurreição", "o Reino", "a Igreja"],
  familia: ["o Casamento", "os Filhos", "a Educação", "o Amor", "a Disciplina", "a Comunicação", "o Perdão", "as Finanças", "a Sexualidade", "os Avós", "a Adolescência", "o Lar"],
  louvor: ["que Transforma", "em Espírito e Verdade", "Profético", "Congregacional", "no Antigo Testamento", "no Novo Testamento", "com o Coração", "em Tempos Difíceis", "e Intercessão", "e Adoração", "e Ministério", "e Vida"],
  apologetica: ["da Fé", "da Ressurreição", "das Escrituras", "do Cristianismo", "da Existência de Deus", "do Ateísmo", "das Religiões", "da Ciência e Fé", "do Sofrimento", "da Bíblia", "da Divindade de Cristo", "do Milagre"],
  missoes: ["Urbana", "Transcultural", "Integral", "e Contextualização", "e a Igreja Local", "e Discipulado", "na África", "no Século 21", "e o Reino de Deus", "e o Sofrimento", "e Justiça", "e Cultura"],
  biblias: ["Almeida Revista", "de Bolso", "Ilustrada", "Letra Grande", "com Concordância", "Anotada", "de Referência", "Cronológica", "Temática", "Comparativa", "Interlinear", "para Jovens"],
  "biblias-estudo": ["Reformada", "Herança Reformada", "de Aplicação Pessoal", "Devocional", "Arqueológica", "Histórica", "MacArthur", "NVI", "ACF", "ARA", "Genebra", "Palavras de Cristo em Vermelho"],
  devocionais: ["Fé", "Esperança", "Amor", "Oração", "Perdão", "Gratidão", "Paz", "Coragem", "Sabedoria", "Alegria", "a Palavra", "a Presença de Deus"],
  discipulado: ["Bíblico", "Prático", "de Novos Convertidos", "e Multiplicação", "Missionário", "Pastoral", "de Jovens", "e Mentoria", "Relacional", "de Líderes", "e Espiritualidade", "no Século 21"],
  juventude: ["Identidade", "Namoro", "Vocação", "Pureza Sexual", "Redes Sociais", "Amizades", "Estudos", "Vida Espiritual", "Escolhas", "Ansiedade", "Propósito", "Liderança Jovem"],
  mulheres: ["Fé", "Maternidade", "Casamento", "Identidade", "Chamado", "Serviço", "Cura Emocional", "Autoestima Bíblica", "Amizade", "Beleza Interior", "Oração", "Liderança Feminina"],
  homens: ["Liderança", "Paternidade", "Trabalho", "Integridade", "Pureza", "Amizade", "Coragem", "Batalha Espiritual", "Chamado", "Casamento", "Propósito", "Herança"],
  aconselhamento: ["Depressão", "Ansiedade", "Luto", "Conflitos Conjugais", "Vícios", "Perdão", "Trauma", "Autoestima", "Solidão", "Ira", "Culpa", "Identidade"],
  escatologia: ["Arrebatamento", "Milênio", "Grande Tribulação", "Segunda Vinda", "Novo Céu e Nova Terra", "Sinais dos Tempos", "Israel na Profecia", "Anticristo", "Juízo Final", "Apocalipse", "Daniel", "Pré-Milenismo"],
  "historia-igreja": ["Primitiva", "Patrística", "Medieval", "Reforma Protestante", "Puritanos", "Avivamentos", "Missões Modernas", "em África", "no Brasil", "Contemporânea", "Pentecostal", "Ecumenismo"],
  oracao: ["Intercessora", "Contemplativa", "Jejum e Oração", "Guerra Espiritual", "Diária", "em Família", "Congregacional", "Modelo do Pai Nosso", "Salmos", "Silêncio e Meditação", "Confissão", "Ação de Graças"],
  "financas-cristas": ["Orçamento", "Dízimo", "Investimento", "Dívidas", "Generosidade", "Mordomia", "Trabalho", "Aposentadoria", "Herança", "Consumismo", "Prosperidade", "Pobreza"],
  infantil: ["Antigo Testamento", "Novo Testamento", "Parábolas", "Milagres de Jesus", "Personagens Bíblicos", "Valores", "Oração", "Louvor Infantil", "Missões Kids", "Escola Dominical", "Discipulado Kids", "Devocional"],
  biografias: ["C. S. Lewis", "Martinho Lutero", "João Calvino", "Charles Spurgeon", "Dietrich Bonhoeffer", "Corrie ten Boom", "Hudson Taylor", "William Carey", "David Livingstone", "Jim Elliot", "Agostinho de Hipona", "John Wesley"],
};

const topicsBySlug: Record<string, string[]> = { ...topicsAcad, ...topicsCristao };

// ---------------------------------------------------------------------------
// Curated featured seeds (kept as premium relevance anchors)
// ---------------------------------------------------------------------------

type Seed = Omit<Book, "id" | "featured"> & { featured?: boolean };

const seedList: Seed[] = [
  { title: "Manual de Direito Constitucional Angolano", author: "Prof. Carlos Feijó", category: "academicos", subcategory: "direito", price: 2400, pages: 682, year: 2023, rating: 4.9, downloads: 12480, cover: { palette: "burgundy", ornament: "crown" }, synopsis: "Análise integral da Constituição da República de Angola, doutrina e jurisprudência actualizada.", featured: true },
  { title: "Tratado de Semiologia Médica", author: "Dr. António Cascais", category: "academicos", subcategory: "medicina", price: 2500, pages: 914, year: 2024, rating: 4.8, downloads: 9820, cover: { palette: "sapphire", ornament: "book" }, synopsis: "Guia essencial para o diagnóstico clínico, com casos práticos e imagens ilustrativas.", featured: true },
  { title: "Resistência dos Materiais", author: "Eng. José Timóteo", category: "academicos", subcategory: "engenharia", price: 2100, pages: 540, year: 2022, rating: 4.7, downloads: 7640, cover: { palette: "gold", ornament: "star" }, synopsis: "Fundamentos e aplicações práticas para engenharia civil e mecânica.", featured: true },
  { title: "Macroeconomia Aplicada", author: "Dr. Alves da Rocha", category: "academicos", subcategory: "economia", price: 2300, pages: 612, year: 2024, rating: 4.8, downloads: 8210, cover: { palette: "emerald", ornament: "leaf" }, synopsis: "Teoria macroeconómica com foco nas economias africanas emergentes e no caso angolano.", featured: true },
  { title: "Introdução à Filosofia Africana", author: "Prof. Severino Ngoenha", category: "academicos", subcategory: "filosofia", price: 1900, pages: 384, year: 2022, rating: 4.9, downloads: 5480, cover: { palette: "burgundy", ornament: "quill" }, synopsis: "Pensamento africano contemporâneo: identidade, colonialidade e sabedoria ancestral.", featured: true },
  { title: "Literatura Angolana Contemporânea", author: "Prof. Luís Kandjimbo", category: "academicos", subcategory: "literatura", price: 2000, pages: 412, year: 2024, rating: 4.9, downloads: 7180, cover: { palette: "gold", ornament: "leaf" }, synopsis: "De Agostinho Neto a Ondjaki: percursos, estéticas e vozes da literatura nacional.", featured: true },
  { title: "Programação em Python — Do Zero ao Avançado", author: "Eng. Miguel Bandua", category: "academicos", subcategory: "informatica", price: 2200, pages: 528, year: 2024, rating: 4.8, downloads: 11240, cover: { palette: "emerald", ornament: "star" }, synopsis: "Curso completo com projectos práticos, ciência de dados e IA.", featured: true },
  { title: "História de Angola — Volume I", author: "Prof. René Pélissier", category: "academicos", subcategory: "historia", price: 2500, pages: 764, year: 2021, rating: 4.9, downloads: 9540, cover: { palette: "burgundy", ornament: "crown" }, synopsis: "Das origens dos povos bantu à independência: a história abrangente da nação angolana.", featured: true },
  { title: "Redes Neurais e Deep Learning", author: "Eng. Adilson Neto", category: "academicos", subcategory: "informatica", price: 2400, pages: 508, year: 2024, rating: 4.9, downloads: 8320, cover: { palette: "burgundy", ornament: "star" }, synopsis: "Fundamentos práticos de IA com TensorFlow e PyTorch." },
  { title: "Psicologia do Desenvolvimento", author: "Dra. Filomena Silva", category: "academicos", subcategory: "psicologia", price: 1800, pages: 468, year: 2023, rating: 4.6, downloads: 6320, cover: { palette: "ivory", ornament: "quill" }, synopsis: "Do nascimento à velhice: os processos que moldam a mente humana." },
  { title: "Sociologia do Trabalho", author: "Dr. Nelson Pestana", category: "academicos", subcategory: "ciencias-sociais", price: 1500, pages: 322, year: 2023, rating: 4.5, downloads: 4120, cover: { palette: "sapphire", ornament: "book" }, synopsis: "Transformações do mundo do trabalho na era digital." },

  { title: "Comentário Bíblico — Novo Testamento", author: "Pr. Hernandes Dias Lopes", category: "cristaos", subcategory: "biblia-estudos", price: 2200, pages: 1240, year: 2023, rating: 4.9, downloads: 18420, cover: { palette: "burgundy", ornament: "cross" }, synopsis: "Exposição versículo por versículo dos 27 livros do Novo Testamento.", featured: true },
  { title: "Teologia Sistemática", author: "Dr. Wayne Grudem", category: "cristaos", subcategory: "teologia", price: 2500, pages: 1568, year: 2022, rating: 4.9, downloads: 24680, cover: { palette: "gold", ornament: "cross" }, synopsis: "Obra de referência que abrange todas as doutrinas fundamentais da fé cristã.", featured: true },
  { title: "O Peregrino", author: "John Bunyan", category: "cristaos", subcategory: "vida-crista", price: 900, pages: 286, year: 2020, rating: 4.9, downloads: 32140, cover: { palette: "ivory", ornament: "book" }, synopsis: "A alegoria eterna da jornada da alma cristã rumo à Cidade Celestial.", featured: true },
  { title: "A Cruz de Cristo", author: "John Stott", category: "cristaos", subcategory: "teologia", price: 1900, pages: 468, year: 2021, rating: 4.9, downloads: 14820, cover: { palette: "burgundy", ornament: "cross" }, synopsis: "Um estudo profundo do coração do evangelho: o significado da cruz.", featured: true },
  { title: "Pregação Expositiva Passo a Passo", author: "Dr. Bryan Chapell", category: "cristaos", subcategory: "pregacao", price: 2000, pages: 412, year: 2023, rating: 4.8, downloads: 8920, cover: { palette: "emerald", ornament: "quill" }, synopsis: "Manual prático para pregadores que desejam expor a Palavra com fidelidade.", featured: true },
  { title: "Adoração — A Prioridade da Igreja", author: "A. W. Tozer", category: "cristaos", subcategory: "louvor", price: 1100, pages: 224, year: 2021, rating: 4.9, downloads: 13260, cover: { palette: "sapphire", ornament: "star" }, synopsis: "Clássico devocional sobre a adoração como propósito supremo do cristão.", featured: true },
  { title: "Bíblia de Estudo — Vida Plena", author: "Edição Comentada", category: "cristaos", subcategory: "biblia-estudos", price: 2500, pages: 2140, year: 2024, rating: 4.9, downloads: 28640, cover: { palette: "gold", ornament: "cross" }, synopsis: "Bíblia com notas de estudo, mapas, cronologias e artigos temáticos.", featured: true },
  { title: "Casamento Blindado", author: "Renato & Cristiane Cardoso", category: "cristaos", subcategory: "familia", price: 1300, pages: 224, year: 2023, rating: 4.7, downloads: 18240, cover: { palette: "burgundy", ornament: "crown" }, synopsis: "Ferramentas práticas para proteger e fortalecer o casamento.", featured: true },
  { title: "Em Defesa da Fé", author: "Josh McDowell", category: "cristaos", subcategory: "apologetica", price: 2100, pages: 782, year: 2023, rating: 4.8, downloads: 9820, cover: { palette: "burgundy", ornament: "crown" }, synopsis: "Evidências históricas e racionais para a fé cristã.", featured: true },
  { title: "Missão Integral", author: "René Padilla", category: "cristaos", subcategory: "missoes", price: 1600, pages: 318, year: 2022, rating: 4.7, downloads: 6120, cover: { palette: "emerald", ornament: "leaf" }, synopsis: "A missão da igreja para o mundo contemporâneo.", featured: true },
];

const PRICE_TIERS: number[] = [500, 1000, 1500, 2000];

const CURATED: Record<string, Book[]> = {};
for (const s of seedList) {
  const key = `${s.category}/${s.subcategory}`;
  const arr = (CURATED[key] ??= []);
  const idx = arr.length;
  arr.push({
    ...s,
    price: normalizePrice(s.price),
    id: `${s.category}-${s.subcategory}-c${String(idx).padStart(3, "0")}`,
    featured: s.featured,
  });
}

// ---------------------------------------------------------------------------
// Deterministic procedural generator



function normalizePrice(p: number): number {
  let best = PRICE_TIERS[0];
  let bestDelta = Infinity;
  for (const t of PRICE_TIERS) {
    const d = Math.abs(p - t);
    if (d < bestDelta) {
      bestDelta = d;
      best = t;
    }
  }
  return best;
}
// ---------------------------------------------------------------------------

function hash32(str: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rng(seed: number) {
  let s = seed || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return ((s >>> 0) % 100000) / 100000;
  };
}

function pick<T>(arr: T[], r: number) {
  return arr[Math.floor(r * arr.length) % arr.length];
}

const ROMAN = ["", " II", " III", " IV", " V", " VI", " VII", " VIII"];
const EDITION_SUFFIX = ["", " — Edição Revista", " — Nova Edição", " — Edição Ampliada", " — Guia Prático", " — Estudo Aprofundado"];

/**
 * Build a book from (category, subcategory, index) where index is 0-based
 * within the subcategory. Curated items sit at indices [0..curated.length-1].
 */
export function generateBook(catSlug: string, subSlug: string, index: number): Book | null {
  const cat = getCategory(catSlug);
  const sub = cat?.subcategories.find((s) => s.slug === subSlug);
  if (!cat || !sub) return null;
  if (index < 0 || index >= sub.count) return null;

  const curated = CURATED[`${catSlug}/${subSlug}`] ?? [];
  if (index < curated.length) return curated[index];

  const r = rng(hash32(`${catSlug}|${subSlug}|${index}`));
  const topics = topicsBySlug[subSlug] ?? ["Estudos"];
  const template = pick(sub.templates, r());
  const topic = pick(topics, r());
  const title = template.replace("{topic}", topic) + ROMAN[Math.floor(r() * 7)] + (r() > 0.85 ? pick(EDITION_SUFFIX, r()) : "");
  const author = pick(sub.authors, r());

  // Price: one of 500/1000/1500/2000 Kz. Higher relevance (lower index) leans
  // toward the premium tiers, but every book stays within the four allowed values.
  const relevanceBias = Math.max(0, 1 - index / sub.count);
  const tierIdx = Math.min(
    PRICE_TIERS.length - 1,
    Math.floor(r() * PRICE_TIERS.length * 0.85 + PRICE_TIERS.length * 0.15 * relevanceBias),
  );
  const price = PRICE_TIERS[tierIdx];

  const pages = 120 + Math.floor(r() * 780);
  const year = 2015 + Math.floor(r() * 11);
  const rating = Math.round((3.8 + r() * 1.2) * 10) / 10;
  const downloads = Math.floor(200 + r() * 5000 + relevanceBias * 20000);

  const paletteList = palettes;
  const ornamentList = catSlug === "cristaos" ? ornamentsCristao : ornamentsAcad;
  const cover = {
    palette: pick(paletteList, r()),
    ornament: pick(ornamentList, r()),
  };

  const synopsisTemplates = [
    `Obra de referência em ${sub.name.toLowerCase()} com abordagem prática e didática.`,
    `Estudo aprofundado sobre ${topic.toLowerCase()}, ideal para estudantes e profissionais.`,
    `Um clássico da área de ${sub.name.toLowerCase()} revisto e ampliado.`,
    `Texto essencial para quem busca compreender ${topic.toLowerCase()} em profundidade.`,
    `Manual prático com exemplos, exercícios e casos aplicados.`,
  ];
  const synopsis = pick(synopsisTemplates, r());

  const id = `${catSlug}-${subSlug}-${String(index).padStart(6, "0")}`;
  return { id, title, author, category: catSlug, subcategory: subSlug, price, pages, year, rating, downloads, cover, synopsis };
}

// ---------------------------------------------------------------------------
// Public helpers
// ---------------------------------------------------------------------------

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const getSubcategory = (catSlug: string, subSlug: string) =>
  getCategory(catSlug)?.subcategories.find((s) => s.slug === subSlug);

/** Featured picks used on the landing page — the curated seed list. */
export const featuredBooks: Book[] = Object.values(CURATED)
  .flat()
  .filter((b) => b.featured);

export function listBooksBySubcategory(
  catSlug: string,
  subSlug: string,
  offset = 0,
  limit = 24,
): { items: Book[]; total: number } {
  const sub = getSubcategory(catSlug, subSlug);
  if (!sub) return { items: [], total: 0 };
  const items: Book[] = [];
  const end = Math.min(sub.count, offset + limit);
  for (let i = offset; i < end; i++) {
    const b = generateBook(catSlug, subSlug, i);
    if (b) items.push(b);
  }
  return { items, total: sub.count };
}

/** Iterate over all subcategories of a category in relevance order. */
export function listBooksByCategory(
  catSlug: string,
  offset = 0,
  limit = 24,
): { items: Book[]; total: number } {
  const cat = getCategory(catSlug);
  if (!cat) return { items: [], total: 0 };
  const items: Book[] = [];
  let skipped = 0;
  let taken = 0;
  // Round-robin across subcategories so top items from each surface first
  // — this gives a natural "relevance" order on the category landing.
  const cursors = new Array(cat.subcategories.length).fill(0);
  outer: while (taken < limit + offset) {
    let progressed = false;
    for (let i = 0; i < cat.subcategories.length; i++) {
      const sub = cat.subcategories[i];
      if (cursors[i] >= sub.count) continue;
      const b = generateBook(catSlug, sub.slug, cursors[i]);
      cursors[i]++;
      progressed = true;
      if (!b) continue;
      if (skipped < offset) {
        skipped++;
      } else {
        items.push(b);
        taken++;
        if (taken >= limit) break outer;
      }
    }
    if (!progressed) break;
  }
  return { items, total: cat.totalCount };
}

export function getBook(id: string): Book | undefined {
  // Curated ids: "<cat>-<sub>-cNNN"
  const m = /^([a-z-]+)-([a-z-]+)-(c\d+|\d+)$/.exec(id);
  if (!m) return undefined;
  const [, catSlug, subSlug, idxRaw] = m;
  if (idxRaw.startsWith("c")) {
    const idx = Number(idxRaw.slice(1));
    return CURATED[`${catSlug}/${subSlug}`]?.[idx];
  }
  return generateBook(catSlug, subSlug, Number(idxRaw)) ?? undefined;
}

/** Lightweight search across curated + a bounded scan of generated titles. */
export function searchBooks(query: string, max = 40): Book[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const results: Book[] = [];
  // 1. Curated first
  for (const b of Object.values(CURATED).flat()) {
    if (
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.synopsis.toLowerCase().includes(q)
    ) {
      results.push(b);
      if (results.length >= max) return results;
    }
  }
  // 2. Scan a bounded slice of each subcategory
  for (const cat of categories) {
    for (const sub of cat.subcategories) {
      const scan = Math.min(sub.count, 200);
      for (let i = 0; i < scan; i++) {
        const b = generateBook(cat.slug, sub.slug, i);
        if (!b) continue;
        if (
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q)
        ) {
          results.push(b);
          if (results.length >= max) return results;
        }
      }
    }
  }
  return results;
}

export const totalLibrarySize = categories.reduce((s, c) => s + c.totalCount, 0);

export const formatPrice = (kz: number) =>
  new Intl.NumberFormat("pt-PT", { maximumFractionDigits: 0 }).format(kz) + " Kz";

export const formatNumber = (n: number) => new Intl.NumberFormat("pt-PT").format(n);

// ---------------------------------------------------------------------------
// WhatsApp checkout
// ---------------------------------------------------------------------------

export const WHATSAPP_NUMBER = "244951201628";

export function whatsappCheckoutUrl(book: Book): string {
  const msg =
    `Olá! Quero comprar este PDF no Amigo do Saber:\n\n` +
    `📖 Título: ${book.title}\n` +
    `✍️ Autor: ${book.author}\n` +
    `💰 Preço: ${formatPrice(book.price)}\n` +
    `🔖 Ref: ${book.id}\n\n` +
    `Podem confirmar disponibilidade e forma de pagamento? Obrigado.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}


export const WHATSAPP_DISPLAY = "+244 951 201 628";

export const WHATSAPP_REQUEST_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Gostaria de pedir um livro em PDF no Amigo do Saber.\n\nTítulo/autor procurado: ",
)}`;
