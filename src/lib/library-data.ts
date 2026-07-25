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
  coverUrl?: string;
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
        templates: ["Teologia {topic}", "Doutrina de {topic}", "Fundamentos da {topic}", "Curso de {topic}", "Manual de {topic}", "Introdução à {topic}", "Tratado de {topic}", "Estudos em {topic}"],
      },
      {
        slug: "vida-crista",
        name: "Vida Cristã",
        count: 15340,
        authors: ["C. S. Lewis", "A. W. Tozer", "John Bunyan", "John Piper", "Timothy Keller", "Charles Spurgeon", "E. M. Bounds", "Andrew Murray"],
        templates: ["A Vida com {topic}", "O Caminho da {topic}", "Crescendo em {topic}", "O Poder da {topic}", "Segredos da {topic}", "Manual de {topic}", "Desafios da {topic}", "Frutos da {topic}"],
      },
      {
        slug: "pregacao",
        name: "Pregação & Homilética",
        count: 6840,
        authors: ["Charles Spurgeon", "Martyn Lloyd-Jones", "Bryan Chapell", "Haddon Robinson", "John Stott", "Timothy Keller", "Steven Lawson", "Albert Mohler"],
        templates: ["A Arte de Pregar {topic}", "Manual de Homilética sobre {topic}", "O Pregador e {topic}", "Exposição de {topic}", "Sermões sobre {topic}", "A Mensagem de {topic}", "Pregando {topic}", "Fundamentos de {topic}"],
      },
      {
        slug: "familia",
        name: "Família & Casamento",
        count: 11240,
        authors: ["James Dobson", "Gary Chapman", "Paul Tripp", "Renato Cardoso", "Cristiane Cardoso", "Jaime Kemp", "Douglas Wilson", "Elizabeth George"],
        templates: ["O Lar e {topic}", "Casamento e {topic}", "Criando Filhos com {topic}", "O Desafio de {topic}", "A Bênção de {topic}", "Manual da Família sobre {topic}", "Amor e {topic}", "Vida Familiar em {topic}"],
      },
      {
        slug: "louvor",
        name: "Louvor & Adoração",
        count: 5720,
        authors: ["A. W. Tozer", "Bob Kauflin", "Harold Best", "D. A. Carson", "John Piper", "Matt Redman", "Keith Getty", "Marco Feliciano"],
        templates: ["A Essência do Louvor em {topic}", "Adoração e {topic}", "O Coração do Adorador de {topic}", "Teologia do Louvor em {topic}", "Cânticos de {topic}", "Manual de Adoração sobre {topic}", "Louvando com {topic}", "A Prioridade de {topic}"],
      },
      {
        slug: "apologetica",
        name: "Apologética",
        count: 8240,
        authors: ["William Lane Craig", "Josh McDowell", "Ravi Zacharias", "Lee Strobel", "Norman Geisler", "Alister McGrath", "C. S. Lewis", "Francis Schaeffer"],
        templates: ["Em Defesa de {topic}", "Razões para {topic}", "O Caso de {topic}", "Resposta ao {topic}", "Evidências de {topic}", "Manual de Apologética sobre {topic}", "Verdade sobre {topic}", "Diálogos sobre {topic}"],
      },
      {
        slug: "missoes",
        name: "Missões & Evangelismo",
        count: 7460,
        authors: ["David Platt", "John Piper", "Paul Washer", "Ronaldo Lidório", "Oswald Smith", "Hudson Taylor", "William Carey", "René Padilla"],
        templates: ["Ide e Pregai {topic}", "A Missão de {topic}", "Coração Missionário por {topic}", "Evangelismo e {topic}", "Alcançando o Mundo com {topic}", "Manual de Missões sobre {topic}", "O Campo de {topic}", "Desafio Missionário em {topic}"],
      },
      {
        slug: "biblias",
        name: "Bíblias",
        count: 4200,
        authors: ["João Ferreira de Almeida", "Sociedade Bíblica", "Editora Vida", "Mundo Cristão", "CPAD", "Thomas Nelson", "Zondervan", "Crossway"],
        templates: ["Bíblia {topic}", "Sagrada Escritura {topic}", "A Palavra de Deus {topic}", "Bíblia Sagrada {topic}", "O Livro de {topic}", "Testamento {topic}", "Escrituras {topic}", "Bíblia de {topic}"],
      },
      {
        slug: "biblias-estudo",
        name: "Bíblias de Estudo",
        count: 3800,
        authors: ["SBB", "CPAD", "Vida Nova", "Fiel", "Hagnos", "Geográfica", "Paulus", "Vozes"],
        templates: ["Bíblia de Estudo {topic}", "Bíblia Anotada {topic}", "Bíblia Comentada {topic}", "Bíblia Temática {topic}", "Bíblia de Referência {topic}", "Bíblia Expositiva {topic}", "Bíblia de Aplicação {topic}", "Bíblia do Pregador {topic}"],
      },
      {
        slug: "devocionais",
        name: "Devocionais",
        count: 9120,
        authors: ["Charles Spurgeon", "Oswald Chambers", "Max Lucado", "Billy Graham", "Sarah Young", "Rick Warren", "John Piper", "Stormie Omartian"],
        templates: ["365 Dias com {topic}", "Manhã e Noite com {topic}", "Gotas de {topic}", "Pão Diário de {topic}", "Minutos com {topic}", "Devocional de {topic}", "Caminhando com {topic}", "Reflexões sobre {topic}"],
      },
      {
        slug: "discipulado",
        name: "Discipulado",
        count: 6240,
        authors: ["Dietrich Bonhoeffer", "Robert Coleman", "A. B. Bruce", "John Stott", "David Platt", "Francis Chan", "Edmund Chan", "Neil Anderson"],
        templates: ["O Custo do Discipulado em {topic}", "Plano de Discipulado para {topic}", "Seguindo a Cristo em {topic}", "Mestre e {topic}", "A Jornada do Discípulo de {topic}", "Manual de Discipulado sobre {topic}", "Vida de Discípulo em {topic}", "Multiplicando {topic}"],
      },
      {
        slug: "juventude",
        name: "Juventude",
        count: 8560,
        authors: ["Joshua Harris", "Paul Washer", "Duglas Gonçalves", "Lucinho Barreto", "Tiago Brunet", "Jefferson Neto", "Fabíola Melo", "Teo Hayashi"],
        templates: ["Jovem e {topic}", "Geração de {topic}", "O Desafio Jovem de {topic}", "Radical por {topic}", "Identidade e {topic}", "Manual do Jovem sobre {topic}", "Escolhas e {topic}", "Vida com Propósito em {topic}"],
      },
      {
        slug: "mulheres",
        name: "Mulheres",
        count: 7940,
        authors: ["Elizabeth George", "Nancy DeMoss Wolgemuth", "Elisabeth Elliot", "Francine Rivers", "Lysa TerKeurst", "Stormie Omartian", "Devi Titus", "Helena Tannure"],
        templates: ["Mulher de {topic}", "O Coração da Mulher de {topic}", "Desafios Femininos em {topic}", "Mulher Segundo o Coração de {topic}", "Beleza e {topic}", "Manual da Mulher sobre {topic}", "Vida de Oração e {topic}", "Mulheres de {topic}"],
      },
      {
        slug: "homens",
        name: "Homens",
        count: 7280,
        authors: ["Edwin Louis Cole", "Robert Lewis", "Stephen Kendrick", "Alex Kendrick", "John Eldredge", "R. C. Sproul", "Voddie Baucham", "Claudio Duarte"],
        templates: ["Homem de {topic}", "O Coração do Homem de {topic}", "Desafios Masculinos em {topic}", "Homem Segundo o Coração de {topic}", "Integridade e {topic}", "Manual do Homem sobre {topic}", "Liderança e {topic}", "Homens de {topic}"],
      },
      {
        slug: "aconselhamento",
        name: "Aconselhamento",
        count: 5420,
        authors: ["Jay Adams", "Edward Welch", "Paul Tripp", "Larry Crabb", "Gary Collins", "David Powlison", "Timothy Lane", "Elyse Fitzpatrick"],
        templates: ["Cura para {topic}", "Aconselhando em {topic}", "Vencendo {topic}", "Esperança para {topic}", "Lidando com {topic}", "Manual de Aconselhamento sobre {topic}", "Paz em {topic}", "Restaurando {topic}"],
      },
      {
        slug: "escatologia",
        name: "Escatologia",
        count: 4860,
        authors: ["John Walvoord", "Dwight Pentecost", "Tim LaHaye", "Heber Campos", "Augustus Nicodemus", "Ciro Zibordi", "Esequias Soares", "Antônio Gilberto"],
        templates: ["O Fim de {topic}", "Sinais de {topic}", "A Vinda de {topic}", "Estudos sobre {topic}", "Apocalipse e {topic}", "Manual de Escatologia sobre {topic}", "O Reino de {topic}", "Profecias sobre {topic}"],
      },
      {
        slug: "historia-igreja",
        name: "História da Igreja",
        count: 6140,
        authors: ["Justo González", "Eusebio de Cesarea", "Kenneth Curtis", "Bruce Shelley", "Mark Noll", "Iain Murray", "Timothy George", "Franklin Ferreira"],
        templates: ["História de {topic}", "A Igreja e {topic}", "O Legado de {topic}", "Caminhos de {topic}", "Grandes Momentos de {topic}", "Manual de História sobre {topic}", "Retratos de {topic}", "A Herança de {topic}"],
      },
      {
        slug: "oracao",
        name: "Oração",
        count: 8920,
        authors: ["E. M. Bounds", "Andrew Murray", "Charles Spurgeon", "R. A. Torrey", "Stormie Omartian", "Timothy Keller", "John Piper", "Brother Lawrence"],
        templates: ["O Poder da Oração em {topic}", "A Vida de Oração e {topic}", "Falando com Deus sobre {topic}", "O Segredo da Oração em {topic}", "Intercessão por {topic}", "Manual de Oração sobre {topic}", "Ajoelhados por {topic}", "Comunhão e {topic}"],
      },
      {
        slug: "financas-cristas",
        name: "Finanças Cristãs",
        count: 3940,
        authors: ["Howard Dayton", "Larry Burkett", "Ron Blue", "Dave Ramsey", "Crown Financial", "Tiago Brunet", "Paulo Vieira", "Benny Hinn"],
        templates: ["Mordomia de {topic}", "Finanças e {topic}", "O Cristão e {topic}", "Prosperidade em {topic}", "Gestão de {topic}", "Manual Financeiro sobre {topic}", "Liberdade em {topic}", "Princípios de {topic}"],
      },
      {
        slug: "infantil",
        name: "Infantil",
        count: 7520,
        authors: ["Max Lucado", "SBB", "CPAD", "Editora Vida", "Mundo Cristão", "Zondervan", "Thomas Nelson", "Paulus"],
        templates: ["Bíblia para Crianças sobre {topic}", "Histórias de {topic}", "O Pequeno Discípulo de {topic}", "Aventuras com {topic}", "Aprendendo sobre {topic}", "Manual Infantil sobre {topic}", "Valores e {topic}", "Crescendo com {topic}"],
      },
      {
        slug: "biografias",
        name: "Biografias",
        count: 5240,
        authors: ["John Piper", "Iain Murray", "Eric Metaxas", "James Boice", "Elisabeth Elliot", "Erwin Lutzer", "Faith Cook", "Stephen Nichols"],
        templates: ["Vida de {topic}", "Biografia de {topic}", "A Herança de {topic}", "O Legado de {topic}", "Nas Pegadas de {topic}", "Retratos de {topic}", "Testemunhos de {topic}", "Fé e Coragem — {topic}"],
      },
    ],
  },
  {
    slug: "nacionais",
    name: "Nacionais (Angolanos)",
    tagline: "Obras de autores angolanos e livros sobre Angola",
    totalCount: 0,
    subcategories: [
      { slug: "literatura-angolana", name: "Literatura Angolana", count: 0, authors: [], templates: [] },
      { slug: "historia-angola", name: "História de Angola", count: 0, authors: [], templates: [] },
      { slug: "cultura-e-linguas", name: "Cultura e Línguas Bantu", count: 0, authors: [], templates: [] },
      { slug: "direito-angolano", name: "Direito Angolano", count: 0, authors: [], templates: [] },
      { slug: "economia-angolana", name: "Economia e Sociedade", count: 0, authors: [], templates: [] },
      { slug: "biografias-angolanas", name: "Biografias Angolanas", count: 0, authors: [], templates: [] },
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
  { 
    title: "Manual de Direito Constitucional Angolano", 
    author: "Prof. Carlos Feijó", 
    category: "academicos", 
    subcategory: "direito", 
    price: 2400, 
    pages: 682, 
    year: 2023, 
    rating: 4.9, 
    downloads: 12480, 
    cover: { palette: "burgundy", ornament: "crown" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71yLz9V1OXL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Análise integral da Constituição da República de Angola, doutrina e jurisprudência actualizada.", 
    featured: true 
  },
  { 
    title: "Tratado de Semiologia Médica", 
    author: "Dr. António Cascais", 
    category: "academicos", 
    subcategory: "medicina", 
    price: 2500, 
    pages: 914, 
    year: 2024, 
    rating: 4.8, 
    downloads: 9820, 
    cover: { palette: "sapphire", ornament: "book" }, 
    coverUrl: "https://m.media-amazon.com/images/I/81T6L1l6fXL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Guia essencial para o diagnóstico clínico, com casos práticos e imagens ilustrativas.", 
    featured: true 
  },
  { 
    title: "Resistência dos Materiais", 
    author: "Eng. José Timóteo", 
    category: "academicos", 
    subcategory: "engenharia", 
    price: 2100, 
    pages: 540, 
    year: 2022, 
    rating: 4.7, 
    downloads: 7640, 
    cover: { palette: "gold", ornament: "star" }, 
    coverUrl: "https://m.media-amazon.com/images/I/81E7O7vU7NL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Fundamentos e aplicações práticas para engenharia civil e mecânica.", 
    featured: true 
  },
  { 
    title: "Macroeconomia Aplicada", 
    author: "Dr. Alves da Rocha", 
    category: "academicos", 
    subcategory: "economia", 
    price: 2300, 
    pages: 612, 
    year: 2024, 
    rating: 4.8, 
    downloads: 8210, 
    cover: { palette: "emerald", ornament: "leaf" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71X8R0f2LGL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Teoria macroeconómica com foco nas economias africanas emergentes e no caso angolano.", 
    featured: true 
  },
  { 
    title: "Introdução à Filosofia Africana", 
    author: "Prof. Severino Ngoenha", 
    category: "academicos", 
    subcategory: "filosofia", 
    price: 1900, 
    pages: 384, 
    year: 2022, 
    rating: 4.9, 
    downloads: 5480, 
    cover: { palette: "burgundy", ornament: "quill" }, 
    coverUrl: "https://m.media-amazon.com/images/I/61N7z-1nUUL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Pensamento africano contemporâneo: identidade, colonialidade e sabedoria ancestral.", 
    featured: true 
  },
  { 
    title: "Literatura Angolana Contemporânea", 
    author: "Prof. Luís Kandjimbo", 
    category: "academicos", 
    subcategory: "literatura", 
    price: 2000, 
    pages: 412, 
    year: 2024, 
    rating: 4.9, 
    downloads: 7180, 
    cover: { palette: "gold", ornament: "leaf" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71u9v-7Z7XL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "De Agostinho Neto a Ondjaki: percursos, estéticas e vozes da literatura nacional.", 
    featured: true 
  },
  { 
    title: "Programação em Python — Do Zero ao Avançado", 
    author: "Eng. Miguel Bandua", 
    category: "academicos", 
    subcategory: "informatica", 
    price: 2200, 
    pages: 528, 
    year: 2024, 
    rating: 4.8, 
    downloads: 11240, 
    cover: { palette: "emerald", ornament: "star" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71h3v-7Z7XL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Curso completo com projectos práticos, ciência de dados e IA.", 
    featured: true 
  },
  { 
    title: "História de Angola — Volume I", 
    author: "Prof. René Pélissier", 
    category: "academicos", 
    subcategory: "historia", 
    price: 2500, 
    pages: 764, 
    year: 2021, 
    rating: 4.9, 
    downloads: 9540, 
    cover: { palette: "burgundy", ornament: "crown" }, 
    coverUrl: "https://m.media-amazon.com/images/I/81h3v-7Z7XL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Das origens dos povos bantu à independência: a história abrangente da nação angolana.", 
    featured: true 
  },
  { title: "Redes Neurais e Deep Learning", author: "Eng. Adilson Neto", category: "academicos", subcategory: "informatica", price: 2400, pages: 508, year: 2024, rating: 4.9, downloads: 8320, cover: { palette: "burgundy", ornament: "star" }, synopsis: "Fundamentos práticos de IA com TensorFlow e PyTorch." },
  { title: "Psicologia do Desenvolvimento", author: "Dra. Filomena Silva", category: "academicos", subcategory: "psicologia", price: 1800, pages: 468, year: 2023, rating: 4.6, downloads: 6320, cover: { palette: "ivory", ornament: "quill" }, synopsis: "Do nascimento à velhice: os processos que moldam a mente humana." },
  { title: "Sociologia do Trabalho", author: "Dr. Nelson Pestana", category: "academicos", subcategory: "ciencias-sociais", price: 1500, pages: 322, year: 2023, rating: 4.5, downloads: 4120, cover: { palette: "sapphire", ornament: "book" }, synopsis: "Transformações do mundo do trabalho na era digital." },

  { 
    title: "Comentário Bíblico — Novo Testamento", 
    author: "Pr. Hernandes Dias Lopes", 
    category: "cristaos", 
    subcategory: "biblia-estudos", 
    price: 2200, 
    pages: 1240, 
    year: 2023, 
    rating: 4.9, 
    downloads: 18420, 
    cover: { palette: "burgundy", ornament: "cross" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71u9v-7Z7XL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Exposição versículo por versículo dos 27 livros do Novo Testamento.", 
    featured: true 
  },
  { 
    title: "Teologia Sistemática", 
    author: "Dr. Wayne Grudem", 
    category: "cristaos", 
    subcategory: "teologia", 
    price: 2500, 
    pages: 1568, 
    year: 2022, 
    rating: 4.9, 
    downloads: 24680, 
    cover: { palette: "gold", ornament: "cross" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71N7-8-8-8L._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Obra de referência que abrange todas as doutrinas fundamentais da fé cristã.", 
    featured: true 
  },
  { 
    title: "O Peregrino", 
    author: "John Bunyan", 
    category: "cristaos", 
    subcategory: "vida-crista", 
    price: 900, 
    pages: 286, 
    year: 2020, 
    rating: 4.9, 
    downloads: 32140, 
    cover: { palette: "ivory", ornament: "book" }, 
    coverUrl: "https://m.media-amazon.com/images/I/81N7-8-8-8L._AC_UF1000,1000_QL80_.jpg",
    synopsis: "A alegoria eterna da jornada da alma cristã rumo à Cidade Celestial.", 
    featured: true 
  },
  { 
    title: "A Cruz de Cristo", 
    author: "John Stott", 
    category: "cristaos", 
    subcategory: "teologia", 
    price: 1900, 
    pages: 468, 
    year: 2021, 
    rating: 4.9, 
    downloads: 14820, 
    cover: { palette: "burgundy", ornament: "cross" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71N7-8-8-8L._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Um estudo profundo do coração do evangelho: o significado da cruz.", 
    featured: true 
  },
  { 
    title: "Pregação Expositiva Passo a Passo", 
    author: "Dr. Bryan Chapell", 
    category: "cristaos", 
    subcategory: "pregacao", 
    price: 2000, 
    pages: 412, 
    year: 2023, 
    rating: 4.8, 
    downloads: 8920, 
    cover: { palette: "emerald", ornament: "quill" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71N7-8-8-8L._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Manual prático para pregadores que desejam expor a Palavra com fidelidade.", 
    featured: true 
  },
  { 
    title: "Adoração — A Prioridade da Igreja", 
    author: "A. W. Tozer", 
    category: "cristaos", 
    subcategory: "louvor", 
    price: 1100, 
    pages: 224, 
    year: 2021, 
    rating: 4.9, 
    downloads: 13260, 
    cover: { palette: "sapphire", ornament: "star" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71N7-8-8-8L._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Clássico devocional sobre a adoração como propósito supremo do cristão.", 
    featured: true 
  },
  { 
    title: "Bíblia de Estudo — Vida Plena", 
    author: "Edição Comentada", 
    category: "cristaos", 
    subcategory: "biblia-estudos", 
    price: 2500, 
    pages: 2140, 
    year: 2024, 
    rating: 4.9, 
    downloads: 28640, 
    cover: { palette: "gold", ornament: "cross" }, 
    coverUrl: "https://m.media-amazon.com/images/I/81N7-8-8-8L._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Bíblia com notas de estudo, mapas, cronologias e artigos temáticos.", 
    featured: true 
  },
  { 
    title: "Casamento Blindado", 
    author: "Renato & Cristiane Cardoso", 
    category: "cristaos", 
    subcategory: "familia", 
    price: 1300, 
    pages: 224, 
    year: 2023, 
    rating: 4.7, 
    downloads: 18240, 
    cover: { palette: "burgundy", ornament: "crown" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71N7-8-8-8L._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Ferramentas práticas para proteger e fortalecer o casamento.", 
    featured: true 
  },
  { 
    title: "Em Defesa da Fé", 
    author: "Josh McDowell", 
    category: "cristaos", 
    subcategory: "apologetica", 
    price: 2100, 
    pages: 782, 
    year: 2023, 
    rating: 4.8, 
    downloads: 9820, 
    cover: { palette: "burgundy", ornament: "crown" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71N7-8-8-8L._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Evidências históricas e racionais para a fé cristã.", 
    featured: true 
  },
  { 
    title: "Missão Integral", 
    author: "René Padilla", 
    category: "cristaos", 
    subcategory: "missoes", 
    price: 1600, 
    pages: 318, 
    year: 2022, 
    rating: 4.7, 
    downloads: 6120, 
    cover: { palette: "emerald", ornament: "leaf" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71N7-8-8-8L._AC_UF1000,1000_QL80_.jpg",
    synopsis: "A missão da igreja para o mundo contemporâneo.", 
    featured: true 
  },
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

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const getSubcategory = (catSlug: string, subSlug: string) =>
  getCategory(catSlug)?.subcategories.find((s) => s.slug === subSlug);

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
  const m = /^([a-z-]+)-([a-z-]+)-(c\d+|\d+)$/.exec(id);
  if (!m) return undefined;
  const [, catSlug, subSlug, idxRaw] = m;
  if (idxRaw.startsWith("c")) {
    const idx = Number(idxRaw.slice(1));
    return CURATED[`${catSlug}/${subSlug}`]?.[idx];
  }
  return generateBook(catSlug, subSlug, Number(idxRaw)) ?? undefined;
}

export function searchBooks(query: string, max = 40): Book[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const results: Book[] = [];
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

const _palettes: Palette[] = ["gold", "burgundy", "emerald", "sapphire", "ivory"];
const _ornAcad: Ornament[] = ["book", "quill", "star", "crown", "leaf"];
const _ornCristao: Ornament[] = ["cross", "book", "star", "crown", "leaf"];
const _ornNacional: Ornament[] = ["leaf", "star", "book", "crown", "quill"];

export function dbBookToDisplay(row: {
  id: string;
  title: string;
  author: string;
  category_slug: string;
  subcategory_slug: string;
  price_kz: number;
  cover_url: string | null;
  description: string;
  created_at: string;
}): Book {
  const h = hash32(row.id);
  const orn =
    row.category_slug === "cristaos"
      ? _ornCristao
      : row.category_slug === "nacionais"
        ? _ornNacional
        : _ornAcad;
  return {
    id: row.id,
    title: row.title,
    author: row.author,
    category: row.category_slug,
    subcategory: row.subcategory_slug,
    price: row.price_kz,
    pages: 0,
    year: new Date(row.created_at).getFullYear(),
    rating: 5,
    downloads: 0,
    cover: {
      palette: _palettes[h % _palettes.length],
      ornament: orn[(h >>> 3) % orn.length],
    },
    coverUrl: row.cover_url || undefined,
    synopsis: row.description,
  };
}
