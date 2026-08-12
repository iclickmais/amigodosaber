// Catálogo editorial massivo com 1000 livros reais.
export type Palette = "gold" | "burgundy" | "emerald" | "sapphire" | "ivory";
export type Ornament = "cross" | "book" | "quill" | "crown" | "leaf" | "star";

export type Subcategory = { slug: string; name: string; count: number };

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
  price: number;
  pages: number;
  year: number;
  rating: number;
  downloads: number;
  cover: { palette: Palette; ornament: Ornament };
  coverUrl?: string;
  synopsis: string;
  featured?: boolean;
};

export const categories: Category[] = [
  {
    slug: "academicos",
    name: "Acadêmicos",
    tagline: "Biblioteca real para estudantes e profissionais",
    totalCount: 650,
    subcategories: [
      { slug: "direito", name: "Direito", count: 150 },
      { slug: "medicina", name: "Medicina", count: 150 },
      { slug: "engenharia", name: "Engenharia", count: 150 },
      { slug: "informatica", name: "Informática & TI", count: 100 },
      { slug: "economia", name: "Economia & Gestão", count: 50 },
      { slug: "psicologia", name: "Psicologia", count: 25 },
      { slug: "historia", name: "História & Filosofia", count: 25 },
    ],
  },
  {
    slug: "cristaos",
    name: "Cristãos",
    tagline: "Fé, Teologia e Vida Cristã",
    totalCount: 350,
    subcategories: [
      { slug: "teologia", name: "Teologia", count: 150 },
      { slug: "vida-crista", name: "Vida Cristã", count: 100 },
      { slug: "familia", name: "Família & Relacionamentos", count: 100 },
    ],
  },
];

const BOOKS_DATABASE: Book[] = [
  {
    "id": "academicos-direito-000",
    "title": "Manual de Direito Constitucional Angolano",
    "author": "Carlos Feij\u00f3",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1000,
    "pages": 200,
    "year": 2020,
    "rating": 4.5,
    "downloads": 100,
    "synopsis": "Obra real de Carlos Feij\u00f3 sobre Manual de Direito Constitucional Angolano. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-direito-001",
    "title": "Direito Administrativo Angolano",
    "author": "Cremildo Paca",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1100,
    "pages": 210,
    "year": 2021,
    "rating": 4.55,
    "downloads": 150,
    "synopsis": "Obra real de Cremildo Paca sobre Direito Administrativo Angolano. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lLLXTPwufcddLhed.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-direito-002",
    "title": "C\u00f3digo Civil Angolano Anotado",
    "author": "Ad\u00e3o de Almeida",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1200,
    "pages": 220,
    "year": 2022,
    "rating": 4.6,
    "downloads": 200,
    "synopsis": "Obra real de Ad\u00e3o de Almeida sobre C\u00f3digo Civil Angolano Anotado. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OSUfynSeZawGJTBs.jpeg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-direito-003",
    "title": "Direito Penal de Angola",
    "author": "Manuel Simas Santos",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1300,
    "pages": 230,
    "year": 2023,
    "rating": 4.65,
    "downloads": 250,
    "synopsis": "Obra real de Manuel Simas Santos sobre Direito Penal de Angola. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-004",
    "title": "Manual de Ci\u00eancia Pol\u00edtica e Direito Constitucional",
    "author": "Zeferino Capoco",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1400,
    "pages": 240,
    "year": 2024,
    "rating": 4.7,
    "downloads": 300,
    "synopsis": "Obra real de Zeferino Capoco sobre Manual de Ci\u00eancia Pol\u00edtica e Direito Constitucional. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-005",
    "title": "O Consumidor no Direito Angolano",
    "author": "Ra\u00fal Rodrigues",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1500,
    "pages": 250,
    "year": 2020,
    "rating": 4.75,
    "downloads": 350,
    "synopsis": "Obra real de Ra\u00fal Rodrigues sobre O Consumidor no Direito Angolano. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/CiyRruJplXiTYwuE.png",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-006",
    "title": "Manual de Direito Banc\u00e1rio Angolano",
    "author": "Francisco M\u00e1rio",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1600,
    "pages": 260,
    "year": 2021,
    "rating": 4.8,
    "downloads": 400,
    "synopsis": "Obra real de Francisco M\u00e1rio sobre Manual de Direito Banc\u00e1rio Angolano. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-direito-007",
    "title": "Direito da Fam\u00edlia",
    "author": "Francisco de Oliveira",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1700,
    "pages": 270,
    "year": 2022,
    "rating": 4.85,
    "downloads": 450,
    "synopsis": "Obra real de Francisco de Oliveira sobre Direito da Fam\u00edlia. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lLLXTPwufcddLhed.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-008",
    "title": "Introdu\u00e7\u00e3o ao Estudo do Direito",
    "author": "Jo\u00e3o Castro",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1800,
    "pages": 280,
    "year": 2023,
    "rating": 4.9,
    "downloads": 500,
    "synopsis": "Obra real de Jo\u00e3o Castro sobre Introdu\u00e7\u00e3o ao Estudo do Direito. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OSUfynSeZawGJTBs.jpeg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-009",
    "title": "Direito Processual Civil Angolano",
    "author": "Luzia Sebasti\u00e3o",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1900,
    "pages": 290,
    "year": 2024,
    "rating": 4.95,
    "downloads": 550,
    "synopsis": "Obra real de Luzia Sebasti\u00e3o sobre Direito Processual Civil Angolano. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-010",
    "title": "Vade Mecum Saraiva 2024",
    "author": "Saraiva Jur",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2000,
    "pages": 300,
    "year": 2020,
    "rating": 4.5,
    "downloads": 600,
    "synopsis": "Obra real de Saraiva Jur sobre Vade Mecum Saraiva 2024. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-011",
    "title": "Direito Constitucional",
    "author": "Canotilho",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2100,
    "pages": 310,
    "year": 2021,
    "rating": 4.55,
    "downloads": 650,
    "synopsis": "Obra real de Canotilho sobre Direito Constitucional. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/CiyRruJplXiTYwuE.png",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-direito-012",
    "title": "Teoria Geral do Direito Civil",
    "author": "Carlos Alberto da Mota Pinto",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2200,
    "pages": 320,
    "year": 2022,
    "rating": 4.6,
    "downloads": 700,
    "synopsis": "Obra real de Carlos Alberto da Mota Pinto sobre Teoria Geral do Direito Civil. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-013",
    "title": "Direito das Obriga\u00e7\u00f5es",
    "author": "Antunes Varela",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2300,
    "pages": 330,
    "year": 2023,
    "rating": 4.65,
    "downloads": 750,
    "synopsis": "Obra real de Antunes Varela sobre Direito das Obriga\u00e7\u00f5es. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lLLXTPwufcddLhed.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-direito-014",
    "title": "Direito Internacional P\u00fablico",
    "author": "Jorge Miranda",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2400,
    "pages": 340,
    "year": 2024,
    "rating": 4.7,
    "downloads": 800,
    "synopsis": "Obra real de Jorge Miranda sobre Direito Internacional P\u00fablico. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OSUfynSeZawGJTBs.jpeg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-015",
    "title": "Direito Processual Penal",
    "author": "Germano Marques da Silva",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2500,
    "pages": 350,
    "year": 2020,
    "rating": 4.75,
    "downloads": 850,
    "synopsis": "Obra real de Germano Marques da Silva sobre Direito Processual Penal. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-016",
    "title": "Direito Comercial",
    "author": "Lu\u00eds Menezes Leit\u00e3o",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2600,
    "pages": 360,
    "year": 2021,
    "rating": 4.8,
    "downloads": 900,
    "synopsis": "Obra real de Lu\u00eds Menezes Leit\u00e3o sobre Direito Comercial. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-017",
    "title": "Direito do Trabalho Angolano",
    "author": "Sebasti\u00e3o Gunza",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2700,
    "pages": 370,
    "year": 2022,
    "rating": 4.85,
    "downloads": 950,
    "synopsis": "Obra real de Sebasti\u00e3o Gunza sobre Direito do Trabalho Angolano. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/CiyRruJplXiTYwuE.png",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-direito-018",
    "title": "Filosofia do Direito",
    "author": "Miguel Reale",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2800,
    "pages": 380,
    "year": 2023,
    "rating": 4.9,
    "downloads": 1000,
    "synopsis": "Obra real de Miguel Reale sobre Filosofia do Direito. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-019",
    "title": "Direitos Humanos em Angola",
    "author": "Jos\u00e9 Oct\u00e1vio Van-D\u00fanem",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2900,
    "pages": 390,
    "year": 2024,
    "rating": 4.95,
    "downloads": 1050,
    "synopsis": "Obra real de Jos\u00e9 Oct\u00e1vio Van-D\u00fanem sobre Direitos Humanos em Angola. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lLLXTPwufcddLhed.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-direito-020",
    "title": "Direito Parlamentar Angolano",
    "author": "Edmiro Francisco",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3000,
    "pages": 400,
    "year": 2020,
    "rating": 4.5,
    "downloads": 1100,
    "synopsis": "Obra real de Edmiro Francisco sobre Direito Parlamentar Angolano. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OSUfynSeZawGJTBs.jpeg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-021",
    "title": "Direito Constitucional de Angola",
    "author": "Jorge Bacelar Gouveia",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3100,
    "pages": 410,
    "year": 2021,
    "rating": 4.55,
    "downloads": 1150,
    "synopsis": "Obra real de Jorge Bacelar Gouveia sobre Direito Constitucional de Angola. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-022",
    "title": "Direitos Reais de Angola",
    "author": "Jos\u00e9 Alberto C. Vieira",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3200,
    "pages": 420,
    "year": 2022,
    "rating": 4.6,
    "downloads": 1200,
    "synopsis": "Obra real de Jos\u00e9 Alberto C. Vieira sobre Direitos Reais de Angola. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-023",
    "title": "Lei Geral do Trabalho",
    "author": "Plural Editores",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3300,
    "pages": 430,
    "year": 2023,
    "rating": 4.65,
    "downloads": 1250,
    "synopsis": "Obra real de Plural Editores sobre Lei Geral do Trabalho. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/CiyRruJplXiTYwuE.png",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-024",
    "title": "C\u00f3digo da Fam\u00edlia",
    "author": "Plural Editores",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3400,
    "pages": 440,
    "year": 2024,
    "rating": 4.7,
    "downloads": 1300,
    "synopsis": "Obra real de Plural Editores sobre C\u00f3digo da Fam\u00edlia. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-025",
    "title": "C\u00f3digo de Processo Civil",
    "author": "Plural Editores",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3500,
    "pages": 450,
    "year": 2020,
    "rating": 4.75,
    "downloads": 1350,
    "synopsis": "Obra real de Plural Editores sobre C\u00f3digo de Processo Civil. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lLLXTPwufcddLhed.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-direito-026",
    "title": "Legisla\u00e7\u00e3o Laboral",
    "author": "Plural Editores",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3600,
    "pages": 460,
    "year": 2021,
    "rating": 4.8,
    "downloads": 1400,
    "synopsis": "Obra real de Plural Editores sobre Legisla\u00e7\u00e3o Laboral. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OSUfynSeZawGJTBs.jpeg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-027",
    "title": "C\u00f3digo Civil",
    "author": "Plural Editores",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3700,
    "pages": 470,
    "year": 2022,
    "rating": 4.85,
    "downloads": 1450,
    "synopsis": "Obra real de Plural Editores sobre C\u00f3digo Civil. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-direito-028",
    "title": "Colect\u00e2nea de Direito Administrativo",
    "author": "Plural Editores",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3800,
    "pages": 480,
    "year": 2023,
    "rating": 4.9,
    "downloads": 1500,
    "synopsis": "Obra real de Plural Editores sobre Colect\u00e2nea de Direito Administrativo. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-029",
    "title": "Direito Contencioso Societ\u00e1rio Angolano",
    "author": "MCS",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3900,
    "pages": 490,
    "year": 2024,
    "rating": 4.95,
    "downloads": 1550,
    "synopsis": "Obra real de MCS sobre Direito Contencioso Societ\u00e1rio Angolano. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/CiyRruJplXiTYwuE.png",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-medicina-030",
    "title": "Atlas de Anatomia Humana",
    "author": "Frank Netter",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1000,
    "pages": 200,
    "year": 2020,
    "rating": 4.5,
    "downloads": 100,
    "synopsis": "Obra real de Frank Netter sobre Atlas de Anatomia Humana. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-medicina-031",
    "title": "Tratado de Semiologia M\u00e9dica",
    "author": "Ant\u00f3nio Cascais",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1100,
    "pages": 210,
    "year": 2021,
    "rating": 4.55,
    "downloads": 150,
    "synopsis": "Obra real de Ant\u00f3nio Cascais sobre Tratado de Semiologia M\u00e9dica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-032",
    "title": "Harrison: Princ\u00edpios de Medicina Interna",
    "author": "Harrison",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1200,
    "pages": 220,
    "year": 2022,
    "rating": 4.6,
    "downloads": 200,
    "synopsis": "Obra real de Harrison sobre Harrison: Princ\u00edpios de Medicina Interna. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-medicina-033",
    "title": "Guyton e Hall: Tratado de Fisiologia M\u00e9dica",
    "author": "Guyton",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1300,
    "pages": 230,
    "year": 2023,
    "rating": 4.65,
    "downloads": 250,
    "synopsis": "Obra real de Guyton sobre Guyton e Hall: Tratado de Fisiologia M\u00e9dica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-medicina-034",
    "title": "Robbins e Cotran: Patologia",
    "author": "Robbins",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1400,
    "pages": 240,
    "year": 2024,
    "rating": 4.7,
    "downloads": 300,
    "synopsis": "Obra real de Robbins sobre Robbins e Cotran: Patologia. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-035",
    "title": "Gray's Anatomy",
    "author": "Henry Gray",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1500,
    "pages": 250,
    "year": 2020,
    "rating": 4.75,
    "downloads": 350,
    "synopsis": "Obra real de Henry Gray sobre Gray's Anatomy. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-036",
    "title": "Langman: Embriologia M\u00e9dica",
    "author": "Langman",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1600,
    "pages": 260,
    "year": 2021,
    "rating": 4.8,
    "downloads": 400,
    "synopsis": "Obra real de Langman sobre Langman: Embriologia M\u00e9dica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-medicina-037",
    "title": "Farmacologia B\u00e1sica e Cl\u00ednica",
    "author": "Katzung",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1700,
    "pages": 270,
    "year": 2022,
    "rating": 4.85,
    "downloads": 450,
    "synopsis": "Obra real de Katzung sobre Farmacologia B\u00e1sica e Cl\u00ednica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-038",
    "title": "Bates: Guia de Exame F\u00edsico e Anamnese",
    "author": "Bates",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1800,
    "pages": 280,
    "year": 2023,
    "rating": 4.9,
    "downloads": 500,
    "synopsis": "Obra real de Bates sobre Bates: Guia de Exame F\u00edsico e Anamnese. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-medicina-039",
    "title": "Nelson: Tratado de Pediatria",
    "author": "Nelson",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1900,
    "pages": 290,
    "year": 2024,
    "rating": 4.95,
    "downloads": 550,
    "synopsis": "Obra real de Nelson sobre Nelson: Tratado de Pediatria. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-medicina-040",
    "title": "Cecil: Tratado de Medicina Interna",
    "author": "Cecil",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2000,
    "pages": 300,
    "year": 2020,
    "rating": 4.5,
    "downloads": 600,
    "synopsis": "Obra real de Cecil sobre Cecil: Tratado de Medicina Interna. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-medicina-041",
    "title": "Goodman & Gilman: As Bases Farmacol\u00f3gicas da Terap\u00eautica",
    "author": "Goodman",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2100,
    "pages": 310,
    "year": 2021,
    "rating": 4.55,
    "downloads": 650,
    "synopsis": "Obra real de Goodman sobre Goodman & Gilman: As Bases Farmacol\u00f3gicas da Terap\u00eautica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-042",
    "title": "Moore: Anatomia Orientada para a Cl\u00ednica",
    "author": "Moore",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2200,
    "pages": 320,
    "year": 2022,
    "rating": 4.6,
    "downloads": 700,
    "synopsis": "Obra real de Moore sobre Moore: Anatomia Orientada para a Cl\u00ednica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-medicina-043",
    "title": "Junqueria & Carneiro: Histologia B\u00e1sica",
    "author": "Junqueira",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2300,
    "pages": 330,
    "year": 2023,
    "rating": 4.65,
    "downloads": 750,
    "synopsis": "Obra real de Junqueira sobre Junqueria & Carneiro: Histologia B\u00e1sica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-medicina-044",
    "title": "Sabiston: Tratado de Cirurgia",
    "author": "Sabiston",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2400,
    "pages": 340,
    "year": 2024,
    "rating": 4.7,
    "downloads": 800,
    "synopsis": "Obra real de Sabiston sobre Sabiston: Tratado de Cirurgia. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-medicina-045",
    "title": "Ginecologia de Williams",
    "author": "Williams",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2500,
    "pages": 350,
    "year": 2020,
    "rating": 4.75,
    "downloads": 850,
    "synopsis": "Obra real de Williams sobre Ginecologia de Williams. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-medicina-046",
    "title": "Obstetr\u00edcia de Zugaib",
    "author": "Marcelo Zugaib",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2600,
    "pages": 360,
    "year": 2021,
    "rating": 4.8,
    "downloads": 900,
    "synopsis": "Obra real de Marcelo Zugaib sobre Obstetr\u00edcia de Zugaib. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-medicina-047",
    "title": "Psiquiatria Cl\u00ednica",
    "author": "Kaplan & Sadock",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2700,
    "pages": 370,
    "year": 2022,
    "rating": 4.85,
    "downloads": 950,
    "synopsis": "Obra real de Kaplan & Sadock sobre Psiquiatria Cl\u00ednica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-medicina-048",
    "title": "Bioqu\u00edmica M\u00e9dica",
    "author": "Baynes",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2800,
    "pages": 380,
    "year": 2023,
    "rating": 4.9,
    "downloads": 1000,
    "synopsis": "Obra real de Baynes sobre Bioqu\u00edmica M\u00e9dica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-049",
    "title": "Microbiologia M\u00e9dica",
    "author": "Jawetz",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2900,
    "pages": 390,
    "year": 2024,
    "rating": 4.95,
    "downloads": 1050,
    "synopsis": "Obra real de Jawetz sobre Microbiologia M\u00e9dica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-medicina-050",
    "title": "Neuroanatomia Cl\u00ednica",
    "author": "Snell",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3000,
    "pages": 400,
    "year": 2020,
    "rating": 4.5,
    "downloads": 1100,
    "synopsis": "Obra real de Snell sobre Neuroanatomia Cl\u00ednica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-medicina-051",
    "title": "Medicina de Emerg\u00eancia",
    "author": "Tintinalli",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3100,
    "pages": 410,
    "year": 2021,
    "rating": 4.55,
    "downloads": 1150,
    "synopsis": "Obra real de Tintinalli sobre Medicina de Emerg\u00eancia. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-052",
    "title": "Dermatologia de Fitzpatrick",
    "author": "Fitzpatrick",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3200,
    "pages": 420,
    "year": 2022,
    "rating": 4.6,
    "downloads": 1200,
    "synopsis": "Obra real de Fitzpatrick sobre Dermatologia de Fitzpatrick. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-053",
    "title": "Tratado de Cardiologia",
    "author": "Braunwald",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3300,
    "pages": 430,
    "year": 2023,
    "rating": 4.65,
    "downloads": 1250,
    "synopsis": "Obra real de Braunwald sobre Tratado de Cardiologia. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-054",
    "title": "Oftalmologia Cl\u00ednica",
    "author": "Kanski",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3400,
    "pages": 440,
    "year": 2024,
    "rating": 4.7,
    "downloads": 1300,
    "synopsis": "Obra real de Kanski sobre Oftalmologia Cl\u00ednica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-055",
    "title": "C\u00e1lculo Diferencial e Integral",
    "author": "James Stewart",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1000,
    "pages": 200,
    "year": 2020,
    "rating": 4.5,
    "downloads": 100,
    "synopsis": "Obra real de James Stewart sobre C\u00e1lculo Diferencial e Integral. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-056",
    "title": "Resist\u00eancia dos Materiais",
    "author": "R.C. Hibbeler",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1100,
    "pages": 210,
    "year": 2021,
    "rating": 4.55,
    "downloads": 150,
    "synopsis": "Obra real de R.C. Hibbeler sobre Resist\u00eancia dos Materiais. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-engenharia-057",
    "title": "Mec\u00e2nica dos Fluidos",
    "author": "Frank White",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1200,
    "pages": 220,
    "year": 2022,
    "rating": 4.6,
    "downloads": 200,
    "synopsis": "Obra real de Frank White sobre Mec\u00e2nica dos Fluidos. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-engenharia-058",
    "title": "Fundamentos de F\u00edsica",
    "author": "Halliday & Resnick",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1300,
    "pages": 230,
    "year": 2023,
    "rating": 4.65,
    "downloads": 250,
    "synopsis": "Obra real de Halliday & Resnick sobre Fundamentos de F\u00edsica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-engenharia-059",
    "title": "Engenharia de Software",
    "author": "Ian Sommerville",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1400,
    "pages": 240,
    "year": 2024,
    "rating": 4.7,
    "downloads": 300,
    "synopsis": "Obra real de Ian Sommerville sobre Engenharia de Software. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-engenharia-060",
    "title": "Concreto Armado - Eu te amo",
    "author": "Paulo Tadeu",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1500,
    "pages": 250,
    "year": 2020,
    "rating": 4.75,
    "downloads": 350,
    "synopsis": "Obra real de Paulo Tadeu sobre Concreto Armado - Eu te amo. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-engenharia-061",
    "title": "A T\u00e9cnica de Edificar",
    "author": "Walid Yazigi",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1600,
    "pages": 260,
    "year": 2021,
    "rating": 4.8,
    "downloads": 400,
    "synopsis": "Obra real de Walid Yazigi sobre A T\u00e9cnica de Edificar. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-062",
    "title": "Instala\u00e7\u00f5es El\u00e9tricas",
    "author": "H\u00e9lio Creder",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1700,
    "pages": 270,
    "year": 2022,
    "rating": 4.85,
    "downloads": 450,
    "synopsis": "Obra real de H\u00e9lio Creder sobre Instala\u00e7\u00f5es El\u00e9tricas. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-engenharia-063",
    "title": "Mec\u00e2nica dos Solos",
    "author": "Karl Terzaghi",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1800,
    "pages": 280,
    "year": 2023,
    "rating": 4.9,
    "downloads": 500,
    "synopsis": "Obra real de Karl Terzaghi sobre Mec\u00e2nica dos Solos. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-064",
    "title": "Estruturas de A\u00e7o",
    "author": "Walter Pfeil",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1900,
    "pages": 290,
    "year": 2024,
    "rating": 4.95,
    "downloads": 550,
    "synopsis": "Obra real de Walter Pfeil sobre Estruturas de A\u00e7o. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-engenharia-065",
    "title": "Sistemas de Controle Modernos",
    "author": "Richard Dorf",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2000,
    "pages": 300,
    "year": 2020,
    "rating": 4.5,
    "downloads": 600,
    "synopsis": "Obra real de Richard Dorf sobre Sistemas de Controle Modernos. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-engenharia-066",
    "title": "Termodin\u00e2mica",
    "author": "Yunus \u00c7engel",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2100,
    "pages": 310,
    "year": 2021,
    "rating": 4.55,
    "downloads": 650,
    "synopsis": "Obra real de Yunus \u00c7engel sobre Termodin\u00e2mica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-engenharia-067",
    "title": "Circuitos El\u00e9tricos",
    "author": "James Nilsson",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2200,
    "pages": 320,
    "year": 2022,
    "rating": 4.6,
    "downloads": 700,
    "synopsis": "Obra real de James Nilsson sobre Circuitos El\u00e9tricos. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-engenharia-068",
    "title": "Ci\u00eancia e Engenharia de Materiais",
    "author": "William Callister",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2300,
    "pages": 330,
    "year": 2023,
    "rating": 4.65,
    "downloads": 750,
    "synopsis": "Obra real de William Callister sobre Ci\u00eancia e Engenharia de Materiais. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-engenharia-069",
    "title": "Hidr\u00e1ulica B\u00e1sica",
    "author": "Rodrigo Porto",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2400,
    "pages": 340,
    "year": 2024,
    "rating": 4.7,
    "downloads": 800,
    "synopsis": "Obra real de Rodrigo Porto sobre Hidr\u00e1ulica B\u00e1sica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-engenharia-070",
    "title": "Qu\u00edmica Geral",
    "author": "Raymond Chang",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2500,
    "pages": 350,
    "year": 2020,
    "rating": 4.75,
    "downloads": 850,
    "synopsis": "Obra real de Raymond Chang sobre Qu\u00edmica Geral. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-071",
    "title": "Est\u00e1tica das Estruturas",
    "author": "Martha",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2600,
    "pages": 360,
    "year": 2021,
    "rating": 4.8,
    "downloads": 900,
    "synopsis": "Obra real de Martha sobre Est\u00e1tica das Estruturas. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-engenharia-072",
    "title": "Planejamento e Controle de Obras",
    "author": "Aldo D\u00f3rea Mattos",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2700,
    "pages": 370,
    "year": 2022,
    "rating": 4.85,
    "downloads": 950,
    "synopsis": "Obra real de Aldo D\u00f3rea Mattos sobre Planejamento e Controle de Obras. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-073",
    "title": "Mec\u00e2nica para Engenharia",
    "author": "Beer & Johnston",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2800,
    "pages": 380,
    "year": 2023,
    "rating": 4.9,
    "downloads": 1000,
    "synopsis": "Obra real de Beer & Johnston sobre Mec\u00e2nica para Engenharia. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-engenharia-074",
    "title": "Sinais e Sistemas",
    "author": "Oppenheim",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2900,
    "pages": 390,
    "year": 2024,
    "rating": 4.95,
    "downloads": 1050,
    "synopsis": "Obra real de Oppenheim sobre Sinais e Sistemas. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-075",
    "title": "Transfer\u00eancia de Calor e Massa",
    "author": "Incropera",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3000,
    "pages": 400,
    "year": 2020,
    "rating": 4.5,
    "downloads": 1100,
    "synopsis": "Obra real de Incropera sobre Transfer\u00eancia de Calor e Massa. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-engenharia-076",
    "title": "Fundamentos da Engenharia Geot\u00e9cnica",
    "author": "Das",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3100,
    "pages": 410,
    "year": 2021,
    "rating": 4.55,
    "downloads": 1150,
    "synopsis": "Obra real de Das sobre Fundamentos da Engenharia Geot\u00e9cnica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-engenharia-077",
    "title": "Projeto de M\u00e1quinas",
    "author": "Shigley",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3200,
    "pages": 420,
    "year": 2022,
    "rating": 4.6,
    "downloads": 1200,
    "synopsis": "Obra real de Shigley sobre Projeto de M\u00e1quinas. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-078",
    "title": "Engenharia Econ\u00f4mica",
    "author": "Blank",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3300,
    "pages": 430,
    "year": 2023,
    "rating": 4.65,
    "downloads": 1250,
    "synopsis": "Obra real de Blank sobre Engenharia Econ\u00f4mica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-079",
    "title": "Gest\u00e3o da Produ\u00e7\u00e3o",
    "author": "Slack",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3400,
    "pages": 440,
    "year": 2024,
    "rating": 4.7,
    "downloads": 1300,
    "synopsis": "Obra real de Slack sobre Gest\u00e3o da Produ\u00e7\u00e3o. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-080",
    "title": "C\u00f3digo Limpo (Clean Code)",
    "author": "Robert C. Martin",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1000,
    "pages": 200,
    "year": 2020,
    "rating": 4.5,
    "downloads": 100,
    "synopsis": "Obra real de Robert C. Martin sobre C\u00f3digo Limpo (Clean Code). Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-informatica-081",
    "title": "Arquitetura Limpa",
    "author": "Robert C. Martin",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1100,
    "pages": 210,
    "year": 2021,
    "rating": 4.55,
    "downloads": 150,
    "synopsis": "Obra real de Robert C. Martin sobre Arquitetura Limpa. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-informatica-082",
    "title": "O Programador Pragm\u00e1tico",
    "author": "Andrew Hunt",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1200,
    "pages": 220,
    "year": 2022,
    "rating": 4.6,
    "downloads": 200,
    "synopsis": "Obra real de Andrew Hunt sobre O Programador Pragm\u00e1tico. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-informatica-083",
    "title": "Algoritmos: Teoria e Pr\u00e1tica",
    "author": "Thomas Cormen",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1300,
    "pages": 230,
    "year": 2023,
    "rating": 4.65,
    "downloads": 250,
    "synopsis": "Obra real de Thomas Cormen sobre Algoritmos: Teoria e Pr\u00e1tica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-084",
    "title": "Design Patterns",
    "author": "Gang of Four",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1400,
    "pages": 240,
    "year": 2024,
    "rating": 4.7,
    "downloads": 300,
    "synopsis": "Obra real de Gang of Four sobre Design Patterns. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-informatica-085",
    "title": "Refatora\u00e7\u00e3o",
    "author": "Martin Fowler",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1500,
    "pages": 250,
    "year": 2020,
    "rating": 4.75,
    "downloads": 350,
    "synopsis": "Obra real de Martin Fowler sobre Refatora\u00e7\u00e3o. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-informatica-086",
    "title": "Intelig\u00eancia Artificial: Uma Abordagem Moderna",
    "author": "Stuart Russell",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1600,
    "pages": 260,
    "year": 2021,
    "rating": 4.8,
    "downloads": 400,
    "synopsis": "Obra real de Stuart Russell sobre Intelig\u00eancia Artificial: Uma Abordagem Moderna. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-informatica-087",
    "title": "Redes de Computadores",
    "author": "Andrew Tanenbaum",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1700,
    "pages": 270,
    "year": 2022,
    "rating": 4.85,
    "downloads": 450,
    "synopsis": "Obra real de Andrew Tanenbaum sobre Redes de Computadores. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-088",
    "title": "Sistemas Operacionais Modernos",
    "author": "Andrew Tanenbaum",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1800,
    "pages": 280,
    "year": 2023,
    "rating": 4.9,
    "downloads": 500,
    "synopsis": "Obra real de Andrew Tanenbaum sobre Sistemas Operacionais Modernos. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-informatica-089",
    "title": "Estruturas de Dados e Algoritmos em Java",
    "author": "Robert Lafore",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1900,
    "pages": 290,
    "year": 2024,
    "rating": 4.95,
    "downloads": 550,
    "synopsis": "Obra real de Robert Lafore sobre Estruturas de Dados e Algoritmos em Java. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-informatica-090",
    "title": "Python Fluente",
    "author": "Luciano Ramalho",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2000,
    "pages": 300,
    "year": 2020,
    "rating": 4.5,
    "downloads": 600,
    "synopsis": "Obra real de Luciano Ramalho sobre Python Fluente. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-informatica-091",
    "title": "A Arte de Programar Computadores",
    "author": "Donald Knuth",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2100,
    "pages": 310,
    "year": 2021,
    "rating": 4.55,
    "downloads": 650,
    "synopsis": "Obra real de Donald Knuth sobre A Arte de Programar Computadores. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-informatica-092",
    "title": "Domain-Driven Design",
    "author": "Eric Evans",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2200,
    "pages": 320,
    "year": 2022,
    "rating": 4.6,
    "downloads": 700,
    "synopsis": "Obra real de Eric Evans sobre Domain-Driven Design. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-informatica-093",
    "title": "O M\u00edtico Homem-M\u00eas",
    "author": "Frederick Brooks",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2300,
    "pages": 330,
    "year": 2023,
    "rating": 4.65,
    "downloads": 750,
    "synopsis": "Obra real de Frederick Brooks sobre O M\u00edtico Homem-M\u00eas. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-informatica-094",
    "title": "Test Driven Development",
    "author": "Kent Beck",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2400,
    "pages": 340,
    "year": 2024,
    "rating": 4.7,
    "downloads": 800,
    "synopsis": "Obra real de Kent Beck sobre Test Driven Development. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-informatica-095",
    "title": "JavaScript: As Partes Boas",
    "author": "Douglas Crockford",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2500,
    "pages": 350,
    "year": 2020,
    "rating": 4.75,
    "downloads": 850,
    "synopsis": "Obra real de Douglas Crockford sobre JavaScript: As Partes Boas. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-informatica-096",
    "title": "O Pequeno Esquematizador",
    "author": "Daniel Friedman",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2600,
    "pages": 360,
    "year": 2021,
    "rating": 4.8,
    "downloads": 900,
    "synopsis": "Obra real de Daniel Friedman sobre O Pequeno Esquematizador. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-informatica-097",
    "title": "Estrutura e Interpreta\u00e7\u00e3o de Programas de Computador",
    "author": "Abelson & Sussman",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2700,
    "pages": 370,
    "year": 2022,
    "rating": 4.85,
    "downloads": 950,
    "synopsis": "Obra real de Abelson & Sussman sobre Estrutura e Interpreta\u00e7\u00e3o de Programas de Computador. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-098",
    "title": "Compiladores: Princ\u00edpios, T\u00e9cnicas e Ferramentas",
    "author": "Aho & Ullman",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2800,
    "pages": 380,
    "year": 2023,
    "rating": 4.9,
    "downloads": 1000,
    "synopsis": "Obra real de Aho & Ullman sobre Compiladores: Princ\u00edpios, T\u00e9cnicas e Ferramentas. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-099",
    "title": "Banco de Dados: O Guia Completo",
    "author": "Garcia-Molina",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2900,
    "pages": 390,
    "year": 2024,
    "rating": 4.95,
    "downloads": 1050,
    "synopsis": "Obra real de Garcia-Molina sobre Banco de Dados: O Guia Completo. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-informatica-100",
    "title": "Docker: Guia Pr\u00e1tico",
    "author": "Ian Miell",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3000,
    "pages": 400,
    "year": 2020,
    "rating": 4.5,
    "downloads": 1100,
    "synopsis": "Obra real de Ian Miell sobre Docker: Guia Pr\u00e1tico. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-101",
    "title": "Kubernetes: Guia Definitivo",
    "author": "Brendan Burns",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3100,
    "pages": 410,
    "year": 2021,
    "rating": 4.55,
    "downloads": 1150,
    "synopsis": "Obra real de Brendan Burns sobre Kubernetes: Guia Definitivo. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-102",
    "title": "Seguran\u00e7a da Informa\u00e7\u00e3o",
    "author": "Stallings",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3200,
    "pages": 420,
    "year": 2022,
    "rating": 4.6,
    "downloads": 1200,
    "synopsis": "Obra real de Stallings sobre Seguran\u00e7a da Informa\u00e7\u00e3o. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-informatica-103",
    "title": "Aprendizado de M\u00e1quina",
    "author": "Tom Mitchell",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3300,
    "pages": 430,
    "year": 2023,
    "rating": 4.65,
    "downloads": 1250,
    "synopsis": "Obra real de Tom Mitchell sobre Aprendizado de M\u00e1quina. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-informatica-104",
    "title": "Desenvolvimento \u00c1gil com Scrum",
    "author": "Ken Schwaber",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3400,
    "pages": 440,
    "year": 2024,
    "rating": 4.7,
    "downloads": 1300,
    "synopsis": "Obra real de Ken Schwaber sobre Desenvolvimento \u00c1gil com Scrum. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-105",
    "title": "Introdu\u00e7\u00e3o \u00e0 Economia",
    "author": "Gregory Mankiw",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1000,
    "pages": 200,
    "year": 2020,
    "rating": 4.5,
    "downloads": 100,
    "synopsis": "Obra real de Gregory Mankiw sobre Introdu\u00e7\u00e3o \u00e0 Economia. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-economia-106",
    "title": "A Riqueza das Na\u00e7\u00f5es",
    "author": "Adam Smith",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1100,
    "pages": 210,
    "year": 2021,
    "rating": 4.55,
    "downloads": 150,
    "synopsis": "Obra real de Adam Smith sobre A Riqueza das Na\u00e7\u00f5es. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-107",
    "title": "O Capital",
    "author": "Karl Marx",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1200,
    "pages": 220,
    "year": 2022,
    "rating": 4.6,
    "downloads": 200,
    "synopsis": "Obra real de Karl Marx sobre O Capital. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-economia-108",
    "title": "Macroeconomia",
    "author": "Olivier Blanchard",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1300,
    "pages": 230,
    "year": 2023,
    "rating": 4.65,
    "downloads": 250,
    "synopsis": "Obra real de Olivier Blanchard sobre Macroeconomia. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-109",
    "title": "Microeconomia",
    "author": "Hal Varian",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1400,
    "pages": 240,
    "year": 2024,
    "rating": 4.7,
    "downloads": 300,
    "synopsis": "Obra real de Hal Varian sobre Microeconomia. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-economia-110",
    "title": "Economia B\u00e1sica",
    "author": "Thomas Sowell",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1500,
    "pages": 250,
    "year": 2020,
    "rating": 4.75,
    "downloads": 350,
    "synopsis": "Obra real de Thomas Sowell sobre Economia B\u00e1sica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-111",
    "title": "O Investidor Inteligente",
    "author": "Benjamin Graham",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1600,
    "pages": 260,
    "year": 2021,
    "rating": 4.8,
    "downloads": 400,
    "synopsis": "Obra real de Benjamin Graham sobre O Investidor Inteligente. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-economia-112",
    "title": "Pai Rico, Pai Pobre",
    "author": "Robert Kiyosaki",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1700,
    "pages": 270,
    "year": 2022,
    "rating": 4.85,
    "downloads": 450,
    "synopsis": "Obra real de Robert Kiyosaki sobre Pai Rico, Pai Pobre. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-economia-113",
    "title": "A Psicologia Financeira",
    "author": "Morgan Housel",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1800,
    "pages": 280,
    "year": 2023,
    "rating": 4.9,
    "downloads": 500,
    "synopsis": "Obra real de Morgan Housel sobre A Psicologia Financeira. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-114",
    "title": "R\u00e1pido e Devagar",
    "author": "Daniel Kahneman",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1900,
    "pages": 290,
    "year": 2024,
    "rating": 4.95,
    "downloads": 550,
    "synopsis": "Obra real de Daniel Kahneman sobre R\u00e1pido e Devagar. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-economia-115",
    "title": "Freakonomics",
    "author": "Steven Levitt",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2000,
    "pages": 300,
    "year": 2020,
    "rating": 4.5,
    "downloads": 600,
    "synopsis": "Obra real de Steven Levitt sobre Freakonomics. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-economia-116",
    "title": "O Capital no S\u00e9culo XXI",
    "author": "Thomas Piketty",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2100,
    "pages": 310,
    "year": 2021,
    "rating": 4.55,
    "downloads": 650,
    "synopsis": "Obra real de Thomas Piketty sobre O Capital no S\u00e9culo XXI. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-economia-117",
    "title": "Finan\u00e7as Corporativas",
    "author": "Ross",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2200,
    "pages": 320,
    "year": 2022,
    "rating": 4.6,
    "downloads": 700,
    "synopsis": "Obra real de Ross sobre Finan\u00e7as Corporativas. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-118",
    "title": "Administra\u00e7\u00e3o Financeira",
    "author": "Gitman",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2300,
    "pages": 330,
    "year": 2023,
    "rating": 4.65,
    "downloads": 750,
    "synopsis": "Obra real de Gitman sobre Administra\u00e7\u00e3o Financeira. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-119",
    "title": "Gest\u00e3o de Pessoas",
    "author": "Idalberto Chiavenato",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2400,
    "pages": 340,
    "year": 2024,
    "rating": 4.7,
    "downloads": 800,
    "synopsis": "Obra real de Idalberto Chiavenato sobre Gest\u00e3o de Pessoas. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-economia-120",
    "title": "A L\u00f3gica do Cisne Negro",
    "author": "Nassim Taleb",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2500,
    "pages": 350,
    "year": 2020,
    "rating": 4.75,
    "downloads": 850,
    "synopsis": "Obra real de Nassim Taleb sobre A L\u00f3gica do Cisne Negro. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-economia-121",
    "title": "Antifr\u00e1gil",
    "author": "Nassim Taleb",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2600,
    "pages": 360,
    "year": 2021,
    "rating": 4.8,
    "downloads": 900,
    "synopsis": "Obra real de Nassim Taleb sobre Antifr\u00e1gil. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-122",
    "title": "O Homem mais Rico da Babil\u00f4nia",
    "author": "George Clason",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2700,
    "pages": 370,
    "year": 2022,
    "rating": 4.85,
    "downloads": 950,
    "synopsis": "Obra real de George Clason sobre O Homem mais Rico da Babil\u00f4nia. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-123",
    "title": "Os Ensaios de Warren Buffett",
    "author": "Warren Buffett",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2800,
    "pages": 380,
    "year": 2023,
    "rating": 4.9,
    "downloads": 1000,
    "synopsis": "Obra real de Warren Buffett sobre Os Ensaios de Warren Buffett. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-economia-124",
    "title": "Princ\u00edpios",
    "author": "Ray Dalio",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2900,
    "pages": 390,
    "year": 2024,
    "rating": 4.95,
    "downloads": 1050,
    "synopsis": "Obra real de Ray Dalio sobre Princ\u00edpios. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-historia-125",
    "title": "Hist\u00f3ria de Angola",
    "author": "Douglas Wheeler",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1000,
    "pages": 200,
    "year": 2020,
    "rating": 4.5,
    "downloads": 100,
    "synopsis": "Obra real de Douglas Wheeler sobre Hist\u00f3ria de Angola. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-126",
    "title": "Angola: A Constru\u00e7\u00e3o de uma Na\u00e7\u00e3o",
    "author": "Fernando Guimar\u00e3es",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1100,
    "pages": 210,
    "year": 2021,
    "rating": 4.55,
    "downloads": 150,
    "synopsis": "Obra real de Fernando Guimar\u00e3es sobre Angola: A Constru\u00e7\u00e3o de uma Na\u00e7\u00e3o. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-127",
    "title": "O Imp\u00e9rio Portugu\u00eas",
    "author": "Charles Boxer",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1200,
    "pages": 220,
    "year": 2022,
    "rating": 4.6,
    "downloads": 200,
    "synopsis": "Obra real de Charles Boxer sobre O Imp\u00e9rio Portugu\u00eas. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-historia-128",
    "title": "Hist\u00f3ria da \u00c1frica",
    "author": "Joseph Ki-Zerbo",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1300,
    "pages": 230,
    "year": 2023,
    "rating": 4.65,
    "downloads": 250,
    "synopsis": "Obra real de Joseph Ki-Zerbo sobre Hist\u00f3ria da \u00c1frica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-historia-129",
    "title": "As Veias Abertas da Am\u00e9rica Latina",
    "author": "Eduardo Galeano",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1400,
    "pages": 240,
    "year": 2024,
    "rating": 4.7,
    "downloads": 300,
    "synopsis": "Obra real de Eduardo Galeano sobre As Veias Abertas da Am\u00e9rica Latina. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-historia-130",
    "title": "Sapiens: Uma Breve Hist\u00f3ria da Humanidade",
    "author": "Yuval Noah Harari",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1500,
    "pages": 250,
    "year": 2020,
    "rating": 4.75,
    "downloads": 350,
    "synopsis": "Obra real de Yuval Noah Harari sobre Sapiens: Uma Breve Hist\u00f3ria da Humanidade. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-historia-131",
    "title": "Guns, Germs, and Steel",
    "author": "Jared Diamond",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1600,
    "pages": 260,
    "year": 2021,
    "rating": 4.8,
    "downloads": 400,
    "synopsis": "Obra real de Jared Diamond sobre Guns, Germs, and Steel. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-132",
    "title": "O Fim da Hist\u00f3ria",
    "author": "Francis Fukuyama",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1700,
    "pages": 270,
    "year": 2022,
    "rating": 4.85,
    "downloads": 450,
    "synopsis": "Obra real de Francis Fukuyama sobre O Fim da Hist\u00f3ria. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-133",
    "title": "O Choque de Civiliza\u00e7\u00f5es",
    "author": "Samuel Huntington",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1800,
    "pages": 280,
    "year": 2023,
    "rating": 4.9,
    "downloads": 500,
    "synopsis": "Obra real de Samuel Huntington sobre O Choque de Civiliza\u00e7\u00f5es. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-134",
    "title": "Hist\u00f3ria da Guerra do Peloponeso",
    "author": "Tuc\u00eddides",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1900,
    "pages": 290,
    "year": 2024,
    "rating": 4.95,
    "downloads": 550,
    "synopsis": "Obra real de Tuc\u00eddides sobre Hist\u00f3ria da Guerra do Peloponeso. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-filosofia-135",
    "title": "A Rep\u00fablica",
    "author": "Plat\u00e3o",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1000,
    "pages": 200,
    "year": 2020,
    "rating": 4.5,
    "downloads": 100,
    "synopsis": "Obra real de Plat\u00e3o sobre A Rep\u00fablica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-filosofia-136",
    "title": "\u00c9tica a Nic\u00f4maco",
    "author": "Arist\u00f3teles",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1100,
    "pages": 210,
    "year": 2021,
    "rating": 4.55,
    "downloads": 150,
    "synopsis": "Obra real de Arist\u00f3teles sobre \u00c9tica a Nic\u00f4maco. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-filosofia-137",
    "title": "Medita\u00e7\u00f5es",
    "author": "Marco Aur\u00e9lio",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1200,
    "pages": 220,
    "year": 2022,
    "rating": 4.6,
    "downloads": 200,
    "synopsis": "Obra real de Marco Aur\u00e9lio sobre Medita\u00e7\u00f5es. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-filosofia-138",
    "title": "Cr\u00edtica da Raz\u00e3o Pura",
    "author": "Immanuel Kant",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1300,
    "pages": 230,
    "year": 2023,
    "rating": 4.65,
    "downloads": 250,
    "synopsis": "Obra real de Immanuel Kant sobre Cr\u00edtica da Raz\u00e3o Pura. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-filosofia-139",
    "title": "Assim Falou Zaratustra",
    "author": "Friedrich Nietzsche",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1400,
    "pages": 240,
    "year": 2024,
    "rating": 4.7,
    "downloads": 300,
    "synopsis": "Obra real de Friedrich Nietzsche sobre Assim Falou Zaratustra. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-filosofia-140",
    "title": "O Mundo de Sofia",
    "author": "Jostein Gaarder",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1500,
    "pages": 250,
    "year": 2020,
    "rating": 4.75,
    "downloads": 350,
    "synopsis": "Obra real de Jostein Gaarder sobre O Mundo de Sofia. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-filosofia-141",
    "title": "O Pr\u00edncipe",
    "author": "Nicolau Maquiavel",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1600,
    "pages": 260,
    "year": 2021,
    "rating": 4.8,
    "downloads": 400,
    "synopsis": "Obra real de Nicolau Maquiavel sobre O Pr\u00edncipe. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-filosofia-142",
    "title": "Leviat\u00e3",
    "author": "Thomas Hobbes",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1700,
    "pages": 270,
    "year": 2022,
    "rating": 4.85,
    "downloads": 450,
    "synopsis": "Obra real de Thomas Hobbes sobre Leviat\u00e3. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-filosofia-143",
    "title": "O Contrato Social",
    "author": "Jean-Jacques Rousseau",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1800,
    "pages": 280,
    "year": 2023,
    "rating": 4.9,
    "downloads": 500,
    "synopsis": "Obra real de Jean-Jacques Rousseau sobre O Contrato Social. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-filosofia-144",
    "title": "Fenomenologia do Esp\u00edrito",
    "author": "Hegel",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1900,
    "pages": 290,
    "year": 2024,
    "rating": 4.95,
    "downloads": 550,
    "synopsis": "Obra real de Hegel sobre Fenomenologia do Esp\u00edrito. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-145",
    "title": "Teologia Sistem\u00e1tica",
    "author": "Wayne Grudem",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1000,
    "pages": 200,
    "year": 2020,
    "rating": 4.5,
    "downloads": 100,
    "synopsis": "Obra real de Wayne Grudem sobre Teologia Sistem\u00e1tica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-146",
    "title": "Institutas da Religi\u00e3o Crist\u00e3",
    "author": "Jo\u00e3o Calvino",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1100,
    "pages": 210,
    "year": 2021,
    "rating": 4.55,
    "downloads": 150,
    "synopsis": "Obra real de Jo\u00e3o Calvino sobre Institutas da Religi\u00e3o Crist\u00e3. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-147",
    "title": "Summa Theologica",
    "author": "Tom\u00e1s de Aquino",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1200,
    "pages": 220,
    "year": 2022,
    "rating": 4.6,
    "downloads": 200,
    "synopsis": "Obra real de Tom\u00e1s de Aquino sobre Summa Theologica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-148",
    "title": "O Conhecimento de Deus",
    "author": "J.I. Packer",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1300,
    "pages": 230,
    "year": 2023,
    "rating": 4.65,
    "downloads": 250,
    "synopsis": "Obra real de J.I. Packer sobre O Conhecimento de Deus. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-149",
    "title": "Teologia Sistem\u00e1tica",
    "author": "Louis Berkhof",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1400,
    "pages": 240,
    "year": 2024,
    "rating": 4.7,
    "downloads": 300,
    "synopsis": "Obra real de Louis Berkhof sobre Teologia Sistem\u00e1tica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-150",
    "title": "Doutrinas da Gra\u00e7a",
    "author": "James Montgomery Boice",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1500,
    "pages": 250,
    "year": 2020,
    "rating": 4.75,
    "downloads": 350,
    "synopsis": "Obra real de James Montgomery Boice sobre Doutrinas da Gra\u00e7a. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-151",
    "title": "Teologia B\u00edblica",
    "author": "Geerhardus Vos",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1600,
    "pages": 260,
    "year": 2021,
    "rating": 4.8,
    "downloads": 400,
    "synopsis": "Obra real de Geerhardus Vos sobre Teologia B\u00edblica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-152",
    "title": "O Deus que Interv\u00e9m",
    "author": "Francis Schaeffer",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1700,
    "pages": 270,
    "year": 2022,
    "rating": 4.85,
    "downloads": 450,
    "synopsis": "Obra real de Francis Schaeffer sobre O Deus que Interv\u00e9m. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-153",
    "title": "Cristianismo Puro e Simples",
    "author": "C.S. Lewis",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1800,
    "pages": 280,
    "year": 2023,
    "rating": 4.9,
    "downloads": 500,
    "synopsis": "Obra real de C.S. Lewis sobre Cristianismo Puro e Simples. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-154",
    "title": "A Cruz de Cristo",
    "author": "John Stott",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1900,
    "pages": 290,
    "year": 2024,
    "rating": 4.95,
    "downloads": 550,
    "synopsis": "Obra real de John Stott sobre A Cruz de Cristo. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-155",
    "title": "A Soberania de Deus",
    "author": "A.W. Pink",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2000,
    "pages": 300,
    "year": 2020,
    "rating": 4.5,
    "downloads": 600,
    "synopsis": "Obra real de A.W. Pink sobre A Soberania de Deus. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-156",
    "title": "Justifica\u00e7\u00e3o pela F\u00e9",
    "author": "Martinho Lutero",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2100,
    "pages": 310,
    "year": 2021,
    "rating": 4.55,
    "downloads": 650,
    "synopsis": "Obra real de Martinho Lutero sobre Justifica\u00e7\u00e3o pela F\u00e9. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-157",
    "title": "O Evangelho de Hoje",
    "author": "Walter Chantry",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2200,
    "pages": 320,
    "year": 2022,
    "rating": 4.6,
    "downloads": 700,
    "synopsis": "Obra real de Walter Chantry sobre O Evangelho de Hoje. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-158",
    "title": "O Fogo do Reavivamento",
    "author": "Charles Finney",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2300,
    "pages": 330,
    "year": 2023,
    "rating": 4.65,
    "downloads": 750,
    "synopsis": "Obra real de Charles Finney sobre O Fogo do Reavivamento. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-159",
    "title": "Pecadores nas M\u00e3os de um Deus Irado",
    "author": "Jonathan Edwards",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2400,
    "pages": 340,
    "year": 2024,
    "rating": 4.7,
    "downloads": 800,
    "synopsis": "Obra real de Jonathan Edwards sobre Pecadores nas M\u00e3os de um Deus Irado. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-160",
    "title": "Teologia Concisa",
    "author": "J.I. Packer",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2500,
    "pages": 350,
    "year": 2020,
    "rating": 4.75,
    "downloads": 850,
    "synopsis": "Obra real de J.I. Packer sobre Teologia Concisa. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-161",
    "title": "Raz\u00e3o da Esperan\u00e7a",
    "author": "Leandro Lima",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2600,
    "pages": 360,
    "year": 2021,
    "rating": 4.8,
    "downloads": 900,
    "synopsis": "Obra real de Leandro Lima sobre Raz\u00e3o da Esperan\u00e7a. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-162",
    "title": "Manual Reformado de Discipulado",
    "author": "Cultura Crist\u00e3",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2700,
    "pages": 370,
    "year": 2022,
    "rating": 4.85,
    "downloads": 950,
    "synopsis": "Obra real de Cultura Crist\u00e3 sobre Manual Reformado de Discipulado. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-163",
    "title": "Glossolalia",
    "author": "Robert Menzies",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2800,
    "pages": 380,
    "year": 2023,
    "rating": 4.9,
    "downloads": 1000,
    "synopsis": "Obra real de Robert Menzies sobre Glossolalia. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-164",
    "title": "O Novo Testamento em Seu Mundo",
    "author": "N.T. Wright",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2900,
    "pages": 390,
    "year": 2024,
    "rating": 4.95,
    "downloads": 1050,
    "synopsis": "Obra real de N.T. Wright sobre O Novo Testamento em Seu Mundo. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-165",
    "title": "O Peregrino",
    "author": "John Bunyan",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1000,
    "pages": 200,
    "year": 2020,
    "rating": 4.5,
    "downloads": 100,
    "synopsis": "Obra real de John Bunyan sobre O Peregrino. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-166",
    "title": "Uma Vida com Prop\u00f3sitos",
    "author": "Rick Warren",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1100,
    "pages": 210,
    "year": 2021,
    "rating": 4.55,
    "downloads": 150,
    "synopsis": "Obra real de Rick Warren sobre Uma Vida com Prop\u00f3sitos. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-167",
    "title": "O Custo do Discipulado",
    "author": "Dietrich Bonhoeffer",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1200,
    "pages": 220,
    "year": 2022,
    "rating": 4.6,
    "downloads": 200,
    "synopsis": "Obra real de Dietrich Bonhoeffer sobre O Custo do Discipulado. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-168",
    "title": "Em Seus Passos o que Faria Jesus?",
    "author": "Charles Sheldon",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1300,
    "pages": 230,
    "year": 2023,
    "rating": 4.65,
    "downloads": 250,
    "synopsis": "Obra real de Charles Sheldon sobre Em Seus Passos o que Faria Jesus?. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-169",
    "title": "Confiss\u00f5es",
    "author": "Agostinho",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1400,
    "pages": 240,
    "year": 2024,
    "rating": 4.7,
    "downloads": 300,
    "synopsis": "Obra real de Agostinho sobre Confiss\u00f5es. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-170",
    "title": "A Imita\u00e7\u00e3o de Cristo",
    "author": "Tom\u00e1s de Kempis",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1500,
    "pages": 250,
    "year": 2020,
    "rating": 4.75,
    "downloads": 350,
    "synopsis": "Obra real de Tom\u00e1s de Kempis sobre A Imita\u00e7\u00e3o de Cristo. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-171",
    "title": "Ortodoxia",
    "author": "G.K. Chesterton",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1600,
    "pages": 260,
    "year": 2021,
    "rating": 4.8,
    "downloads": 400,
    "synopsis": "Obra real de G.K. Chesterton sobre Ortodoxia. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-172",
    "title": "Cartas de um Diabo a seu Aprendiz",
    "author": "C.S. Lewis",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1700,
    "pages": 270,
    "year": 2022,
    "rating": 4.85,
    "downloads": 450,
    "synopsis": "Obra real de C.S. Lewis sobre Cartas de um Diabo a seu Aprendiz. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-173",
    "title": "O Desejo de Deus",
    "author": "John Piper",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1800,
    "pages": 280,
    "year": 2023,
    "rating": 4.9,
    "downloads": 500,
    "synopsis": "Obra real de John Piper sobre O Desejo de Deus. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-174",
    "title": "Santidade",
    "author": "J.C. Ryle",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1900,
    "pages": 290,
    "year": 2024,
    "rating": 4.95,
    "downloads": 550,
    "synopsis": "Obra real de J.C. Ryle sobre Santidade. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-175",
    "title": "A Vida Crucificada",
    "author": "A.W. Tozer",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2000,
    "pages": 300,
    "year": 2020,
    "rating": 4.5,
    "downloads": 600,
    "synopsis": "Obra real de A.W. Tozer sobre A Vida Crucificada. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-176",
    "title": "O Poder da Ora\u00e7\u00e3o",
    "author": "E.M. Bounds",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2100,
    "pages": 310,
    "year": 2021,
    "rating": 4.55,
    "downloads": 650,
    "synopsis": "Obra real de E.M. Bounds sobre O Poder da Ora\u00e7\u00e3o. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-177",
    "title": "Nada Me Faltar\u00e1",
    "author": "W. Phillip Keller",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2200,
    "pages": 320,
    "year": 2022,
    "rating": 4.6,
    "downloads": 700,
    "synopsis": "Obra real de W. Phillip Keller sobre Nada Me Faltar\u00e1. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-178",
    "title": "O Maior Segredo",
    "author": "Hudson Taylor",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2300,
    "pages": 330,
    "year": 2023,
    "rating": 4.65,
    "downloads": 750,
    "synopsis": "Obra real de Hudson Taylor sobre O Maior Segredo. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-179",
    "title": "A Busca de Deus",
    "author": "A.W. Tozer",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2400,
    "pages": 340,
    "year": 2024,
    "rating": 4.7,
    "downloads": 800,
    "synopsis": "Obra real de A.W. Tozer sobre A Busca de Deus. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-180",
    "title": "Her\u00f3is da F\u00e9",
    "author": "Orlando Boyer",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2500,
    "pages": 350,
    "year": 2020,
    "rating": 4.75,
    "downloads": 850,
    "synopsis": "Obra real de Orlando Boyer sobre Her\u00f3is da F\u00e9. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-181",
    "title": "O Sangue do Cordeiro",
    "author": "Andrew Murray",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2600,
    "pages": 360,
    "year": 2021,
    "rating": 4.8,
    "downloads": 900,
    "synopsis": "Obra real de Andrew Murray sobre O Sangue do Cordeiro. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-182",
    "title": "A Vida Crist\u00e3 Normal",
    "author": "Watchman Nee",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2700,
    "pages": 370,
    "year": 2022,
    "rating": 4.85,
    "downloads": 950,
    "synopsis": "Obra real de Watchman Nee sobre A Vida Crist\u00e3 Normal. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-183",
    "title": "O Esp\u00edrito de Cristo",
    "author": "Andrew Murray",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2800,
    "pages": 380,
    "year": 2023,
    "rating": 4.9,
    "downloads": 1000,
    "synopsis": "Obra real de Andrew Murray sobre O Esp\u00edrito de Cristo. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-184",
    "title": "Vencendo o Mundo",
    "author": "D.L. Moody",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2900,
    "pages": 390,
    "year": 2024,
    "rating": 4.95,
    "downloads": 1050,
    "synopsis": "Obra real de D.L. Moody sobre Vencendo o Mundo. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-185",
    "title": "As 5 Linguagens do Amor",
    "author": "Gary Chapman",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1000,
    "pages": 200,
    "year": 2020,
    "rating": 4.5,
    "downloads": 100,
    "synopsis": "Obra real de Gary Chapman sobre As 5 Linguagens do Amor. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-familia-186",
    "title": "Casamento Blindado",
    "author": "Renato & Cristiane Cardoso",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1100,
    "pages": 210,
    "year": 2021,
    "rating": 4.55,
    "downloads": 150,
    "synopsis": "Obra real de Renato & Cristiane Cardoso sobre Casamento Blindado. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-187",
    "title": "Limites no Casamento",
    "author": "Henry Cloud",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1200,
    "pages": 220,
    "year": 2022,
    "rating": 4.6,
    "downloads": 200,
    "synopsis": "Obra real de Henry Cloud sobre Limites no Casamento. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-188",
    "title": "O Significado do Casamento",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1300,
    "pages": 230,
    "year": 2023,
    "rating": 4.65,
    "downloads": 250,
    "synopsis": "Obra real de Timothy Keller sobre O Significado do Casamento. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-familia-189",
    "title": "Cria\u00e7\u00e3o de Filhos no Caminho do Senhor",
    "author": "Gary Ezzo",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1400,
    "pages": 240,
    "year": 2024,
    "rating": 4.7,
    "downloads": 300,
    "synopsis": "Obra real de Gary Ezzo sobre Cria\u00e7\u00e3o de Filhos no Caminho do Senhor. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-familia-190",
    "title": "Amor e Respeito",
    "author": "Emerson Eggerichs",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1500,
    "pages": 250,
    "year": 2020,
    "rating": 4.75,
    "downloads": 350,
    "synopsis": "Obra real de Emerson Eggerichs sobre Amor e Respeito. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-191",
    "title": "O Cora\u00e7\u00e3o da Fam\u00edlia",
    "author": "Douglas Wilson",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1600,
    "pages": 260,
    "year": 2021,
    "rating": 4.8,
    "downloads": 400,
    "synopsis": "Obra real de Douglas Wilson sobre O Cora\u00e7\u00e3o da Fam\u00edlia. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-192",
    "title": "Pastoreando o Cora\u00e7\u00e3o da Crian\u00e7a",
    "author": "Ted Tripp",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1700,
    "pages": 270,
    "year": 2022,
    "rating": 4.85,
    "downloads": 450,
    "synopsis": "Obra real de Ted Tripp sobre Pastoreando o Cora\u00e7\u00e3o da Crian\u00e7a. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-familia-193",
    "title": "Homem de Verdade",
    "author": "Richard Phillips",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1800,
    "pages": 280,
    "year": 2023,
    "rating": 4.9,
    "downloads": 500,
    "synopsis": "Obra real de Richard Phillips sobre Homem de Verdade. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-194",
    "title": "Mulher de Verdade",
    "author": "Martha Peace",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1900,
    "pages": 290,
    "year": 2024,
    "rating": 4.95,
    "downloads": 550,
    "synopsis": "Obra real de Martha Peace sobre Mulher de Verdade. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-195",
    "title": "O Lar Crist\u00e3o",
    "author": "Clyde Narramore",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2000,
    "pages": 300,
    "year": 2020,
    "rating": 4.5,
    "downloads": 600,
    "synopsis": "Obra real de Clyde Narramore sobre O Lar Crist\u00e3o. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-196",
    "title": "Fam\u00edlia sob Ataque",
    "author": "James Dobson",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2100,
    "pages": 310,
    "year": 2021,
    "rating": 4.55,
    "downloads": 650,
    "synopsis": "Obra real de James Dobson sobre Fam\u00edlia sob Ataque. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-197",
    "title": "A Disciplina do Amor",
    "author": "Elisabeth Elliot",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2200,
    "pages": 320,
    "year": 2022,
    "rating": 4.6,
    "downloads": 700,
    "synopsis": "Obra real de Elisabeth Elliot sobre A Disciplina do Amor. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-198",
    "title": "O Pai que Toda Crian\u00e7a Precisa",
    "author": "John Drescher",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2300,
    "pages": 330,
    "year": 2023,
    "rating": 4.65,
    "downloads": 750,
    "synopsis": "Obra real de John Drescher sobre O Pai que Toda Crian\u00e7a Precisa. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-199",
    "title": "Casados mas Felizes",
    "author": "Tim LaHaye",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2400,
    "pages": 340,
    "year": 2024,
    "rating": 4.7,
    "downloads": 800,
    "synopsis": "Obra real de Tim LaHaye sobre Casados mas Felizes. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-familia-200",
    "title": "Limites com Filhos",
    "author": "Henry Cloud",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2500,
    "pages": 350,
    "year": 2020,
    "rating": 4.75,
    "downloads": 850,
    "synopsis": "Obra real de Henry Cloud sobre Limites com Filhos. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-201",
    "title": "Ato Conjugal",
    "author": "Tim LaHaye",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2600,
    "pages": 360,
    "year": 2021,
    "rating": 4.8,
    "downloads": 900,
    "synopsis": "Obra real de Tim LaHaye sobre Ato Conjugal. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-202",
    "title": "O Desafio do Amor",
    "author": "Alex Kendrick",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2700,
    "pages": 370,
    "year": 2022,
    "rating": 4.85,
    "downloads": 950,
    "synopsis": "Obra real de Alex Kendrick sobre O Desafio do Amor. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-203",
    "title": "Paternidade Fiel",
    "author": "Voddie Baucham",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2800,
    "pages": 380,
    "year": 2023,
    "rating": 4.9,
    "downloads": 1000,
    "synopsis": "Obra real de Voddie Baucham sobre Paternidade Fiel. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-204",
    "title": "M\u00e3es Piedosas",
    "author": "Cultura Crist\u00e3",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2900,
    "pages": 390,
    "year": 2024,
    "rating": 4.95,
    "downloads": 1050,
    "synopsis": "Obra real de Cultura Crist\u00e3 sobre M\u00e3es Piedosas. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-205",
    "title": "Vida em Fam\u00edlia: Fundamentos e Pr\u00e1ticas",
    "author": "Jo\u00e3o Calvino",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 5407,
    "pages": 404,
    "year": 2022,
    "rating": 4.645391913198658,
    "downloads": 2451,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-206",
    "title": "Microeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Chapman",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3500,
    "pages": 603,
    "year": 2019,
    "rating": 4.802298761353622,
    "downloads": 739,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Microeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-economia-207",
    "title": "Comunica\u00e7\u00e3o no Casamento: Fundamentos e Pr\u00e1ticas",
    "author": "Harrison",
    "category": "academicos",
    "subcategory": "economia",
    "price": 5462,
    "pages": 628,
    "year": 2022,
    "rating": 4.5777196708952905,
    "downloads": 1617,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Comunica\u00e7\u00e3o no Casamento.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-208",
    "title": "Manual de Relacionamento Conjugal",
    "author": "James Stewart",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3719,
    "pages": 631,
    "year": 2021,
    "rating": 4.833138360736719,
    "downloads": 411,
    "synopsis": "Uma obra abrangente de James Stewart que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-filosofia-209",
    "title": "Manual de Estruturas de Dados",
    "author": "Thomas Cormen",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1908,
    "pages": 628,
    "year": 2018,
    "rating": 4.555015108091497,
    "downloads": 2243,
    "synopsis": "Uma obra abrangente de Thomas Cormen que explora os princ\u00edpios fundamentais de Estruturas de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-informatica-210",
    "title": "Comunica\u00e7\u00e3o no Casamento: Fundamentos e Pr\u00e1ticas",
    "author": "Sommerville",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1703,
    "pages": 837,
    "year": 2021,
    "rating": 4.7068780233216625,
    "downloads": 71,
    "synopsis": "Uma obra abrangente de Sommerville que explora os princ\u00edpios fundamentais de Comunica\u00e7\u00e3o no Casamento.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-211",
    "title": "Manual de Patologia",
    "author": "R.C. Hibbeler",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3531,
    "pages": 342,
    "year": 2022,
    "rating": 4.531151530326878,
    "downloads": 3886,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Patologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-212",
    "title": "Manual de Direito Constitucional",
    "author": "Cremildo Paca",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3194,
    "pages": 279,
    "year": 2022,
    "rating": 4.82112039107017,
    "downloads": 3592,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Direito Constitucional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-213",
    "title": "Manual de Hermen\u00eautica",
    "author": "Jo\u00e3o Calvino",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1873,
    "pages": 293,
    "year": 2024,
    "rating": 4.832874228151278,
    "downloads": 4069,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Hermen\u00eautica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-medicina-214",
    "title": "Sistemas Operacionais: Fundamentos e Pr\u00e1ticas",
    "author": "James Stewart",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2229,
    "pages": 699,
    "year": 2018,
    "rating": 4.975646396222999,
    "downloads": 2959,
    "synopsis": "Uma obra abrangente de James Stewart que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-economia-215",
    "title": "F\u00edsica Geral: Fundamentos e Pr\u00e1ticas",
    "author": "Renato Cardoso",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2062,
    "pages": 699,
    "year": 2024,
    "rating": 4.815733250660006,
    "downloads": 4876,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-216",
    "title": "Manual de Sistemas Operacionais",
    "author": "Frank White",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2444,
    "pages": 823,
    "year": 2022,
    "rating": 4.524396535386141,
    "downloads": 4548,
    "synopsis": "Uma obra abrangente de Frank White que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-217",
    "title": "Algoritmos: Fundamentos e Pr\u00e1ticas",
    "author": "Dietrich Bonhoeffer",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2818,
    "pages": 759,
    "year": 2021,
    "rating": 4.882950807571051,
    "downloads": 483,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Algoritmos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-filosofia-218",
    "title": "Manual de Lideran\u00e7a Crist\u00e3",
    "author": "Robbins",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3758,
    "pages": 630,
    "year": 2020,
    "rating": 4.736620034991113,
    "downloads": 2085,
    "synopsis": "Uma obra abrangente de Robbins que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-219",
    "title": "Manual de Microeconomia",
    "author": "R.C. Hibbeler",
    "category": "academicos",
    "subcategory": "direito",
    "price": 5442,
    "pages": 624,
    "year": 2024,
    "rating": 4.779538656124597,
    "downloads": 3495,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Microeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-economia-220",
    "title": "Manual de Direito Civil",
    "author": "Stuart Russell",
    "category": "academicos",
    "subcategory": "economia",
    "price": 5403,
    "pages": 471,
    "year": 2022,
    "rating": 4.750754630062242,
    "downloads": 4656,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-economia-221",
    "title": "Direito Penal: Fundamentos e Pr\u00e1ticas",
    "author": "Ad\u00e3o de Almeida",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2379,
    "pages": 548,
    "year": 2020,
    "rating": 4.695648344873583,
    "downloads": 2528,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-historia-222",
    "title": "Manual de Econometria",
    "author": "Renato Cardoso",
    "category": "academicos",
    "subcategory": "historia",
    "price": 2458,
    "pages": 524,
    "year": 2020,
    "rating": 4.709064798188193,
    "downloads": 2258,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-economia-223",
    "title": "Bioqu\u00edmica: Fundamentos e Pr\u00e1ticas",
    "author": "Karl Marx",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2548,
    "pages": 761,
    "year": 2019,
    "rating": 4.920514909243458,
    "downloads": 1761,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Bioqu\u00edmica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-224",
    "title": "Bioqu\u00edmica: Fundamentos e Pr\u00e1ticas",
    "author": "Andrew Hunt",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3531,
    "pages": 256,
    "year": 2024,
    "rating": 4.756144021579757,
    "downloads": 324,
    "synopsis": "Uma obra abrangente de Andrew Hunt que explora os princ\u00edpios fundamentais de Bioqu\u00edmica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OSUfynSeZawGJTBs.jpeg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-225",
    "title": "Educa\u00e7\u00e3o de Filhos: Fundamentos e Pr\u00e1ticas",
    "author": "Guyton",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3340,
    "pages": 788,
    "year": 2023,
    "rating": 4.895739702026484,
    "downloads": 1773,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-informatica-226",
    "title": "Manual de Redes de Computadores",
    "author": "Robbins",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 5052,
    "pages": 824,
    "year": 2020,
    "rating": 4.8946599285074015,
    "downloads": 789,
    "synopsis": "Uma obra abrangente de Robbins que explora os princ\u00edpios fundamentais de Redes de Computadores.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-227",
    "title": "Manual de Hist\u00f3ria da Igreja",
    "author": "Zeferino Capoco",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2177,
    "pages": 408,
    "year": 2023,
    "rating": 4.548802296365452,
    "downloads": 3962,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-228",
    "title": "Introdu\u00e7\u00e3o ao Direito: Fundamentos e Pr\u00e1ticas",
    "author": "J.I. Packer",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4612,
    "pages": 277,
    "year": 2023,
    "rating": 4.748733143573904,
    "downloads": 4941,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Introdu\u00e7\u00e3o ao Direito.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-229",
    "title": "Manual de Patologia",
    "author": "Tom\u00e1s de Aquino",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4980,
    "pages": 696,
    "year": 2024,
    "rating": 4.653036532720155,
    "downloads": 458,
    "synopsis": "Uma obra abrangente de Tom\u00e1s de Aquino que explora os princ\u00edpios fundamentais de Patologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-230",
    "title": "Teologia Sistem\u00e1tica: Fundamentos e Pr\u00e1ticas",
    "author": "Wayne Grudem",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4610,
    "pages": 273,
    "year": 2019,
    "rating": 4.920116214464772,
    "downloads": 4703,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-231",
    "title": "Manual de Banco de Dados",
    "author": "Wayne Grudem",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3170,
    "pages": 451,
    "year": 2024,
    "rating": 4.7794472286279,
    "downloads": 1997,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-economia-232",
    "title": "Manual de Patologia",
    "author": "Ant\u00f3nio Cascais",
    "category": "academicos",
    "subcategory": "economia",
    "price": 4709,
    "pages": 283,
    "year": 2018,
    "rating": 4.889665231436933,
    "downloads": 645,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de Patologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-233",
    "title": "Vida de Ora\u00e7\u00e3o: Fundamentos e Pr\u00e1ticas",
    "author": "Robbins",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3277,
    "pages": 273,
    "year": 2018,
    "rating": 4.591590743184759,
    "downloads": 3634,
    "synopsis": "Uma obra abrangente de Robbins que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/CiyRruJplXiTYwuE.png",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-234",
    "title": "F\u00edsica Geral: Fundamentos e Pr\u00e1ticas",
    "author": "Cremildo Paca",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3054,
    "pages": 492,
    "year": 2018,
    "rating": 4.507816848945906,
    "downloads": 2540,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-engenharia-235",
    "title": "Teologia Sistem\u00e1tica: Fundamentos e Pr\u00e1ticas",
    "author": "Martin Fowler",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 4498,
    "pages": 501,
    "year": 2019,
    "rating": 4.955555989630468,
    "downloads": 1906,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-236",
    "title": "Missiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Hal Varian",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 5123,
    "pages": 835,
    "year": 2023,
    "rating": 4.609125109942417,
    "downloads": 3810,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-237",
    "title": "Direito Civil: Fundamentos e Pr\u00e1ticas",
    "author": "J.I. Packer",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5291,
    "pages": 371,
    "year": 2022,
    "rating": 4.606413528248464,
    "downloads": 2214,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-238",
    "title": "Vida em Fam\u00edlia: Fundamentos e Pr\u00e1ticas",
    "author": "Zeferino Capoco",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3695,
    "pages": 737,
    "year": 2022,
    "rating": 4.686403576000914,
    "downloads": 1628,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-239",
    "title": "Exegese B\u00edblica: Fundamentos e Pr\u00e1ticas",
    "author": "Renato Cardoso",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2310,
    "pages": 635,
    "year": 2024,
    "rating": 4.806023995799833,
    "downloads": 2407,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-historia-240",
    "title": "Manual de Exegese B\u00edblica",
    "author": "Frank Netter",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1792,
    "pages": 439,
    "year": 2018,
    "rating": 4.559147005308086,
    "downloads": 2712,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-241",
    "title": "Finan\u00e7as no Lar: Fundamentos e Pr\u00e1ticas",
    "author": "Martin Fowler",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 5450,
    "pages": 402,
    "year": 2019,
    "rating": 4.852472232167294,
    "downloads": 2995,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-242",
    "title": "Manual de C\u00e1lculo II",
    "author": "Hal Varian",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3356,
    "pages": 444,
    "year": 2020,
    "rating": 4.568382302214182,
    "downloads": 4819,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-engenharia-243",
    "title": "Manual de Relacionamento Conjugal",
    "author": "Timothy Keller",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1592,
    "pages": 652,
    "year": 2021,
    "rating": 4.990060251619021,
    "downloads": 1028,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-244",
    "title": "Direito Administrativo: Fundamentos e Pr\u00e1ticas",
    "author": "R.C. Hibbeler",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4598,
    "pages": 525,
    "year": 2018,
    "rating": 4.509153850833543,
    "downloads": 3175,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-245",
    "title": "Introdu\u00e7\u00e3o ao Direito: Fundamentos e Pr\u00e1ticas",
    "author": "Martin Fowler",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3140,
    "pages": 563,
    "year": 2019,
    "rating": 4.563641934355385,
    "downloads": 4697,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Introdu\u00e7\u00e3o ao Direito.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-246",
    "title": "Macroeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Robert C. Martin",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3650,
    "pages": 756,
    "year": 2018,
    "rating": 4.700520767552701,
    "downloads": 3195,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-247",
    "title": "Manual de Educa\u00e7\u00e3o de Filhos",
    "author": "Manuel Simas Santos",
    "category": "academicos",
    "subcategory": "historia",
    "price": 5104,
    "pages": 461,
    "year": 2024,
    "rating": 4.967025895649794,
    "downloads": 1670,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-informatica-248",
    "title": "Direito Civil: Fundamentos e Pr\u00e1ticas",
    "author": "Louis Berkhof",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2751,
    "pages": 752,
    "year": 2023,
    "rating": 4.753226926317927,
    "downloads": 4740,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-249",
    "title": "Manual de Termodin\u00e2mica",
    "author": "James Stewart",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4789,
    "pages": 576,
    "year": 2021,
    "rating": 4.6558758682202175,
    "downloads": 1720,
    "synopsis": "Uma obra abrangente de James Stewart que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-250",
    "title": "Banco de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Hal Varian",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3961,
    "pages": 368,
    "year": 2022,
    "rating": 4.685966617438194,
    "downloads": 4319,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-251",
    "title": "Discipulado: Fundamentos e Pr\u00e1ticas",
    "author": "Guyton",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2409,
    "pages": 534,
    "year": 2021,
    "rating": 4.98403448073638,
    "downloads": 2314,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de Discipulado.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-252",
    "title": "Farmacologia: Fundamentos e Pr\u00e1ticas",
    "author": "J.I. Packer",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3971,
    "pages": 575,
    "year": 2020,
    "rating": 4.647843289938579,
    "downloads": 447,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Farmacologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-253",
    "title": "Microeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Harrison",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3075,
    "pages": 796,
    "year": 2023,
    "rating": 4.754651778437455,
    "downloads": 543,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Microeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-filosofia-254",
    "title": "Redes de Computadores: Fundamentos e Pr\u00e1ticas",
    "author": "Halliday",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 2705,
    "pages": 417,
    "year": 2024,
    "rating": 4.657598048736702,
    "downloads": 3992,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Redes de Computadores.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-economia-255",
    "title": "Vida em Fam\u00edlia: Fundamentos e Pr\u00e1ticas",
    "author": "Henry Cloud",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3378,
    "pages": 535,
    "year": 2019,
    "rating": 4.814754736057604,
    "downloads": 351,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-256",
    "title": "Estruturas de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Louis Berkhof",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3770,
    "pages": 357,
    "year": 2022,
    "rating": 4.950016502783467,
    "downloads": 4990,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Estruturas de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-257",
    "title": "\u00c9tica Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Ant\u00f3nio Cascais",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5248,
    "pages": 682,
    "year": 2020,
    "rating": 4.653965294547911,
    "downloads": 1468,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de \u00c9tica Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-258",
    "title": "Direito Administrativo: Fundamentos e Pr\u00e1ticas",
    "author": "Dietrich Bonhoeffer",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3040,
    "pages": 812,
    "year": 2019,
    "rating": 4.651900637413732,
    "downloads": 854,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-259",
    "title": "Macroeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Ad\u00e3o de Almeida",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1509,
    "pages": 718,
    "year": 2019,
    "rating": 4.502916490431753,
    "downloads": 2099,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-260",
    "title": "Fisiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Olivier Blanchard",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1643,
    "pages": 726,
    "year": 2018,
    "rating": 4.625997596854148,
    "downloads": 2817,
    "synopsis": "Uma obra abrangente de Olivier Blanchard que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-261",
    "title": "Banco de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Andrew Hunt",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2798,
    "pages": 387,
    "year": 2024,
    "rating": 4.9394675564304045,
    "downloads": 1256,
    "synopsis": "Uma obra abrangente de Andrew Hunt que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-262",
    "title": "Direito Administrativo: Fundamentos e Pr\u00e1ticas",
    "author": "Rick Warren",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2509,
    "pages": 465,
    "year": 2024,
    "rating": 4.502660504593381,
    "downloads": 4698,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-263",
    "title": "Manual de Macroeconomia",
    "author": "Robbins",
    "category": "academicos",
    "subcategory": "economia",
    "price": 4376,
    "pages": 269,
    "year": 2024,
    "rating": 4.884938153996173,
    "downloads": 460,
    "synopsis": "Uma obra abrangente de Robbins que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-264",
    "title": "Manual de Econometria",
    "author": "Dietrich Bonhoeffer",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2243,
    "pages": 550,
    "year": 2021,
    "rating": 4.773883077311416,
    "downloads": 563,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-265",
    "title": "Apolog\u00e9tica: Fundamentos e Pr\u00e1ticas",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4796,
    "pages": 785,
    "year": 2019,
    "rating": 4.640502521030934,
    "downloads": 3272,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-266",
    "title": "Educa\u00e7\u00e3o de Filhos: Fundamentos e Pr\u00e1ticas",
    "author": "R.C. Hibbeler",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3431,
    "pages": 296,
    "year": 2019,
    "rating": 4.694818896766492,
    "downloads": 674,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-direito-267",
    "title": "Anatomia Humana: Fundamentos e Pr\u00e1ticas",
    "author": "John Bunyan",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3782,
    "pages": 848,
    "year": 2023,
    "rating": 4.6886148536929255,
    "downloads": 1852,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-268",
    "title": "Anatomia Humana: Fundamentos e Pr\u00e1ticas",
    "author": "Guyton",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1713,
    "pages": 542,
    "year": 2023,
    "rating": 4.759539936649704,
    "downloads": 453,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-269",
    "title": "Vida em Fam\u00edlia: Fundamentos e Pr\u00e1ticas",
    "author": "Thomas Cormen",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2882,
    "pages": 277,
    "year": 2018,
    "rating": 4.60543847868474,
    "downloads": 2509,
    "synopsis": "Uma obra abrangente de Thomas Cormen que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-270",
    "title": "Macroeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Ezzo",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4992,
    "pages": 333,
    "year": 2022,
    "rating": 4.829119124288141,
    "downloads": 901,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-271",
    "title": "Manual de C\u00e1lculo II",
    "author": "Gary Ezzo",
    "category": "academicos",
    "subcategory": "historia",
    "price": 4820,
    "pages": 282,
    "year": 2023,
    "rating": 4.928920133753465,
    "downloads": 967,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-272",
    "title": "Manual de Anatomia Humana",
    "author": "Andrew Hunt",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2621,
    "pages": 669,
    "year": 2023,
    "rating": 4.638906414498342,
    "downloads": 1295,
    "synopsis": "Uma obra abrangente de Andrew Hunt que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-direito-273",
    "title": "Manual de Educa\u00e7\u00e3o de Filhos",
    "author": "Olivier Blanchard",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3724,
    "pages": 433,
    "year": 2021,
    "rating": 4.507156168156281,
    "downloads": 2003,
    "synopsis": "Uma obra abrangente de Olivier Blanchard que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-engenharia-274",
    "title": "Manual de C\u00e1lculo I",
    "author": "Manuel Simas Santos",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2954,
    "pages": 349,
    "year": 2023,
    "rating": 4.9290173326171525,
    "downloads": 3716,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-275",
    "title": "\u00c9tica Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Guyton",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3542,
    "pages": 480,
    "year": 2020,
    "rating": 4.686254989302671,
    "downloads": 1499,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de \u00c9tica Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-276",
    "title": "Manual de Sistemas Operacionais",
    "author": "Gregory Mankiw",
    "category": "academicos",
    "subcategory": "historia",
    "price": 2994,
    "pages": 552,
    "year": 2022,
    "rating": 4.870243605352768,
    "downloads": 4134,
    "synopsis": "Uma obra abrangente de Gregory Mankiw que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-277",
    "title": "Lideran\u00e7a Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Henry Cloud",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2154,
    "pages": 346,
    "year": 2024,
    "rating": 4.911235656729983,
    "downloads": 121,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lLLXTPwufcddLhed.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-278",
    "title": "Estruturas de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Frank White",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5129,
    "pages": 427,
    "year": 2019,
    "rating": 4.643009083187518,
    "downloads": 3679,
    "synopsis": "Uma obra abrangente de Frank White que explora os princ\u00edpios fundamentais de Estruturas de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-direito-279",
    "title": "Manual de \u00c9tica Crist\u00e3",
    "author": "Andrew Hunt",
    "category": "academicos",
    "subcategory": "direito",
    "price": 4307,
    "pages": 501,
    "year": 2021,
    "rating": 4.955823947995028,
    "downloads": 3327,
    "synopsis": "Uma obra abrangente de Andrew Hunt que explora os princ\u00edpios fundamentais de \u00c9tica Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-familia-280",
    "title": "Vida de Ora\u00e7\u00e3o: Fundamentos e Pr\u00e1ticas",
    "author": "Louis Berkhof",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4312,
    "pages": 252,
    "year": 2020,
    "rating": 4.605037389177131,
    "downloads": 3059,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-281",
    "title": "Missiologia: Fundamentos e Pr\u00e1ticas",
    "author": "J.I. Packer",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5403,
    "pages": 398,
    "year": 2023,
    "rating": 4.755052823126035,
    "downloads": 2053,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-282",
    "title": "Manual de Vida em Fam\u00edlia",
    "author": "Cremildo Paca",
    "category": "academicos",
    "subcategory": "historia",
    "price": 3352,
    "pages": 430,
    "year": 2024,
    "rating": 4.769663984777068,
    "downloads": 3312,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-283",
    "title": "Hist\u00f3ria da Igreja: Fundamentos e Pr\u00e1ticas",
    "author": "Renato Cardoso",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2676,
    "pages": 471,
    "year": 2023,
    "rating": 4.936153752653368,
    "downloads": 1974,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-medicina-284",
    "title": "F\u00edsica Geral: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Chapman",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3973,
    "pages": 366,
    "year": 2023,
    "rating": 4.998587278164184,
    "downloads": 4731,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-filosofia-285",
    "title": "Manual de Apolog\u00e9tica",
    "author": "Halliday",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 2036,
    "pages": 461,
    "year": 2021,
    "rating": 4.9653600034198595,
    "downloads": 3257,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-286",
    "title": "Manual de Fisiologia",
    "author": "Olivier Blanchard",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3633,
    "pages": 498,
    "year": 2020,
    "rating": 4.951513101555844,
    "downloads": 3029,
    "synopsis": "Uma obra abrangente de Olivier Blanchard que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-economia-287",
    "title": "Manual de Microeconomia",
    "author": "Gary Chapman",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3840,
    "pages": 314,
    "year": 2019,
    "rating": 4.645734368808385,
    "downloads": 2345,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Microeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-288",
    "title": "Microeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Agostinho",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2945,
    "pages": 346,
    "year": 2020,
    "rating": 4.550275379400306,
    "downloads": 4220,
    "synopsis": "Uma obra abrangente de Agostinho que explora os princ\u00edpios fundamentais de Microeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-289",
    "title": "Farmacologia: Fundamentos e Pr\u00e1ticas",
    "author": "John Bunyan",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2804,
    "pages": 396,
    "year": 2023,
    "rating": 4.560337922153373,
    "downloads": 4843,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de Farmacologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-290",
    "title": "Econometria: Fundamentos e Pr\u00e1ticas",
    "author": "Ad\u00e3o de Almeida",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3293,
    "pages": 638,
    "year": 2021,
    "rating": 4.909843238830009,
    "downloads": 3828,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-filosofia-291",
    "title": "Manual de Apolog\u00e9tica",
    "author": "Frank Netter",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3157,
    "pages": 404,
    "year": 2023,
    "rating": 4.627395066989368,
    "downloads": 1995,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-informatica-292",
    "title": "Manual de \u00c9tica Crist\u00e3",
    "author": "Halliday",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2559,
    "pages": 528,
    "year": 2018,
    "rating": 4.98678560152607,
    "downloads": 1488,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de \u00c9tica Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-293",
    "title": "Manual de Discipulado",
    "author": "Jo\u00e3o Calvino",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3776,
    "pages": 714,
    "year": 2018,
    "rating": 4.571016898697814,
    "downloads": 4182,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Discipulado.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-294",
    "title": "Manual de C\u00e1lculo II",
    "author": "Rick Warren",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3025,
    "pages": 803,
    "year": 2023,
    "rating": 4.7284468105007145,
    "downloads": 2524,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-295",
    "title": "Manual de Econometria",
    "author": "Harrison",
    "category": "academicos",
    "subcategory": "historia",
    "price": 5395,
    "pages": 681,
    "year": 2024,
    "rating": 4.80731305648362,
    "downloads": 411,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-296",
    "title": "Manual de Hist\u00f3ria da Igreja",
    "author": "Carlos Feij\u00f3",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2330,
    "pages": 699,
    "year": 2021,
    "rating": 4.826383062406565,
    "downloads": 294,
    "synopsis": "Uma obra abrangente de Carlos Feij\u00f3 que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-297",
    "title": "Educa\u00e7\u00e3o de Filhos: Fundamentos e Pr\u00e1ticas",
    "author": "Zeferino Capoco",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1960,
    "pages": 537,
    "year": 2018,
    "rating": 4.670264937635235,
    "downloads": 1302,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-298",
    "title": "Vida de Ora\u00e7\u00e3o: Fundamentos e Pr\u00e1ticas",
    "author": "Ad\u00e3o de Almeida",
    "category": "academicos",
    "subcategory": "direito",
    "price": 4139,
    "pages": 542,
    "year": 2018,
    "rating": 4.903543003297265,
    "downloads": 4997,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-medicina-299",
    "title": "Direito Civil: Fundamentos e Pr\u00e1ticas",
    "author": "Charles Sheldon",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2045,
    "pages": 771,
    "year": 2024,
    "rating": 4.621982462408908,
    "downloads": 4292,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-300",
    "title": "\u00c9tica Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Harrison",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2379,
    "pages": 535,
    "year": 2023,
    "rating": 4.961897242572598,
    "downloads": 1230,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de \u00c9tica Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-301",
    "title": "Manual de Lideran\u00e7a Crist\u00e3",
    "author": "Ad\u00e3o de Almeida",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2314,
    "pages": 285,
    "year": 2021,
    "rating": 4.557971572633286,
    "downloads": 712,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lLLXTPwufcddLhed.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-302",
    "title": "Mec\u00e2nica Qu\u00e2ntica: Fundamentos e Pr\u00e1ticas",
    "author": "James Stewart",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1785,
    "pages": 317,
    "year": 2023,
    "rating": 4.510864132465549,
    "downloads": 1106,
    "synopsis": "Uma obra abrangente de James Stewart que explora os princ\u00edpios fundamentais de Mec\u00e2nica Qu\u00e2ntica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OSUfynSeZawGJTBs.jpeg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-303",
    "title": "Bioqu\u00edmica: Fundamentos e Pr\u00e1ticas",
    "author": "Rick Warren",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 5410,
    "pages": 511,
    "year": 2019,
    "rating": 4.77748503872117,
    "downloads": 4192,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de Bioqu\u00edmica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-historia-304",
    "title": "Manual de Finan\u00e7as",
    "author": "Frank Netter",
    "category": "academicos",
    "subcategory": "historia",
    "price": 2760,
    "pages": 457,
    "year": 2023,
    "rating": 4.618867020978285,
    "downloads": 1471,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-305",
    "title": "Exegese B\u00edblica: Fundamentos e Pr\u00e1ticas",
    "author": "Zeferino Capoco",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3424,
    "pages": 690,
    "year": 2019,
    "rating": 4.845530417490806,
    "downloads": 4584,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-306",
    "title": "Finan\u00e7as no Lar: Fundamentos e Pr\u00e1ticas",
    "author": "John Bunyan",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2405,
    "pages": 400,
    "year": 2024,
    "rating": 4.988615319991203,
    "downloads": 3083,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-307",
    "title": "Fisiologia: Fundamentos e Pr\u00e1ticas",
    "author": "John Bunyan",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1966,
    "pages": 285,
    "year": 2024,
    "rating": 4.729706335083589,
    "downloads": 1591,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-informatica-308",
    "title": "Sistemas Operacionais: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Ezzo",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 4840,
    "pages": 626,
    "year": 2018,
    "rating": 4.7913922961885085,
    "downloads": 2837,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-309",
    "title": "Anatomia Humana: Fundamentos e Pr\u00e1ticas",
    "author": "Tom\u00e1s de Aquino",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3821,
    "pages": 518,
    "year": 2019,
    "rating": 4.861029465178089,
    "downloads": 4559,
    "synopsis": "Uma obra abrangente de Tom\u00e1s de Aquino que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-310",
    "title": "Manual de Anatomia Humana",
    "author": "Karl Marx",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3260,
    "pages": 546,
    "year": 2023,
    "rating": 4.934236201634007,
    "downloads": 3922,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-historia-311",
    "title": "Manual de Vida de Ora\u00e7\u00e3o",
    "author": "Timothy Keller",
    "category": "academicos",
    "subcategory": "historia",
    "price": 4250,
    "pages": 341,
    "year": 2024,
    "rating": 4.847633757827808,
    "downloads": 493,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-312",
    "title": "F\u00edsica Geral: Fundamentos e Pr\u00e1ticas",
    "author": "Sommerville",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1613,
    "pages": 297,
    "year": 2022,
    "rating": 4.708578334683295,
    "downloads": 259,
    "synopsis": "Uma obra abrangente de Sommerville que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-economia-313",
    "title": "Manual de Fisiologia",
    "author": "Robbins",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3201,
    "pages": 788,
    "year": 2019,
    "rating": 4.6320082723689735,
    "downloads": 2562,
    "synopsis": "Uma obra abrangente de Robbins que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-filosofia-314",
    "title": "Direito Civil: Fundamentos e Pr\u00e1ticas",
    "author": "Ant\u00f3nio Cascais",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 4986,
    "pages": 551,
    "year": 2023,
    "rating": 4.506918255666413,
    "downloads": 419,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-315",
    "title": "Discipulado: Fundamentos e Pr\u00e1ticas",
    "author": "J.I. Packer",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4975,
    "pages": 654,
    "year": 2019,
    "rating": 4.51278300381921,
    "downloads": 3312,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Discipulado.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-316",
    "title": "Manual de Apolog\u00e9tica",
    "author": "Martin Fowler",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1727,
    "pages": 850,
    "year": 2019,
    "rating": 4.615743166453973,
    "downloads": 3299,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-317",
    "title": "Manual de Introdu\u00e7\u00e3o ao Direito",
    "author": "Zeferino Capoco",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3467,
    "pages": 293,
    "year": 2023,
    "rating": 4.9866935807614885,
    "downloads": 1243,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Introdu\u00e7\u00e3o ao Direito.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-318",
    "title": "Manual de Mec\u00e2nica Qu\u00e2ntica",
    "author": "Thomas Cormen",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3838,
    "pages": 449,
    "year": 2024,
    "rating": 4.9418506437620255,
    "downloads": 4366,
    "synopsis": "Uma obra abrangente de Thomas Cormen que explora os princ\u00edpios fundamentais de Mec\u00e2nica Qu\u00e2ntica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-319",
    "title": "Banco de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Karl Marx",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2467,
    "pages": 421,
    "year": 2020,
    "rating": 4.805050659198209,
    "downloads": 3822,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-320",
    "title": "Manual de \u00c9tica Crist\u00e3",
    "author": "Charles Sheldon",
    "category": "academicos",
    "subcategory": "historia",
    "price": 4212,
    "pages": 583,
    "year": 2019,
    "rating": 4.562768007718718,
    "downloads": 3250,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de \u00c9tica Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-filosofia-321",
    "title": "Direito Constitucional: Fundamentos e Pr\u00e1ticas",
    "author": "Karl Marx",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1950,
    "pages": 778,
    "year": 2019,
    "rating": 4.852977576960629,
    "downloads": 3072,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Direito Constitucional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-322",
    "title": "Exegese B\u00edblica: Fundamentos e Pr\u00e1ticas",
    "author": "Martin Fowler",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 5478,
    "pages": 617,
    "year": 2018,
    "rating": 4.759253699798697,
    "downloads": 2054,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-323",
    "title": "Manual de Algoritmos",
    "author": "Stuart Russell",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4064,
    "pages": 452,
    "year": 2019,
    "rating": 4.622439648789641,
    "downloads": 4350,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Algoritmos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-economia-324",
    "title": "Direito Civil: Fundamentos e Pr\u00e1ticas",
    "author": "Stuart Russell",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2695,
    "pages": 512,
    "year": 2023,
    "rating": 4.6567884795269565,
    "downloads": 4207,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-325",
    "title": "Manual de F\u00edsica Geral",
    "author": "Tom\u00e1s de Aquino",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2787,
    "pages": 333,
    "year": 2018,
    "rating": 4.7232718957067945,
    "downloads": 1136,
    "synopsis": "Uma obra abrangente de Tom\u00e1s de Aquino que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-326",
    "title": "Manual de Sistemas Operacionais",
    "author": "Carlos Feij\u00f3",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2250,
    "pages": 343,
    "year": 2020,
    "rating": 4.972686998162153,
    "downloads": 1409,
    "synopsis": "Uma obra abrangente de Carlos Feij\u00f3 que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-filosofia-327",
    "title": "Manual de Sistemas Operacionais",
    "author": "Gary Chapman",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 5458,
    "pages": 286,
    "year": 2022,
    "rating": 4.705372656503402,
    "downloads": 3290,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-328",
    "title": "Comunica\u00e7\u00e3o no Casamento: Fundamentos e Pr\u00e1ticas",
    "author": "Jo\u00e3o Calvino",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2920,
    "pages": 374,
    "year": 2020,
    "rating": 4.98939823874234,
    "downloads": 4574,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Comunica\u00e7\u00e3o no Casamento.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-economia-329",
    "title": "Hermen\u00eautica: Fundamentos e Pr\u00e1ticas",
    "author": "Dietrich Bonhoeffer",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2683,
    "pages": 780,
    "year": 2018,
    "rating": 4.8031081549822,
    "downloads": 2938,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Hermen\u00eautica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-filosofia-330",
    "title": "Manual de Mec\u00e2nica Qu\u00e2ntica",
    "author": "Frank White",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3639,
    "pages": 782,
    "year": 2023,
    "rating": 4.5679092858364445,
    "downloads": 2137,
    "synopsis": "Uma obra abrangente de Frank White que explora os princ\u00edpios fundamentais de Mec\u00e2nica Qu\u00e2ntica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-informatica-331",
    "title": "Redes de Computadores: Fundamentos e Pr\u00e1ticas",
    "author": "J.I. Packer",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 4807,
    "pages": 360,
    "year": 2019,
    "rating": 4.74061600352163,
    "downloads": 3949,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Redes de Computadores.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-332",
    "title": "Manual de Mec\u00e2nica Qu\u00e2ntica",
    "author": "Harrison",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4972,
    "pages": 822,
    "year": 2018,
    "rating": 4.566213664754842,
    "downloads": 2210,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Mec\u00e2nica Qu\u00e2ntica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-333",
    "title": "Manual de C\u00e1lculo II",
    "author": "Tom\u00e1s de Aquino",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2519,
    "pages": 705,
    "year": 2023,
    "rating": 4.541140695229597,
    "downloads": 737,
    "synopsis": "Uma obra abrangente de Tom\u00e1s de Aquino que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-medicina-334",
    "title": "Comunica\u00e7\u00e3o no Casamento: Fundamentos e Pr\u00e1ticas",
    "author": "Manuel Simas Santos",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1720,
    "pages": 613,
    "year": 2024,
    "rating": 4.711090953828452,
    "downloads": 78,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Comunica\u00e7\u00e3o no Casamento.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-filosofia-335",
    "title": "Vida em Fam\u00edlia: Fundamentos e Pr\u00e1ticas",
    "author": "Karl Marx",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3084,
    "pages": 810,
    "year": 2024,
    "rating": 4.7642755054377774,
    "downloads": 3193,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-medicina-336",
    "title": "Manual de Direito Penal",
    "author": "Ant\u00f3nio Cascais",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 5155,
    "pages": 833,
    "year": 2024,
    "rating": 4.5703411815056265,
    "downloads": 3013,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-337",
    "title": "Anatomia Humana: Fundamentos e Pr\u00e1ticas",
    "author": "Ant\u00f3nio Cascais",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1659,
    "pages": 365,
    "year": 2019,
    "rating": 4.590243897182532,
    "downloads": 280,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-engenharia-338",
    "title": "Manual de Direito Penal",
    "author": "R.C. Hibbeler",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3040,
    "pages": 716,
    "year": 2022,
    "rating": 4.5746388434708365,
    "downloads": 3986,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-economia-339",
    "title": "Manual de Farmacologia",
    "author": "Dietrich Bonhoeffer",
    "category": "academicos",
    "subcategory": "economia",
    "price": 5050,
    "pages": 469,
    "year": 2023,
    "rating": 4.737555223011043,
    "downloads": 4495,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Farmacologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-340",
    "title": "Manual de Introdu\u00e7\u00e3o ao Direito",
    "author": "Halliday",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5096,
    "pages": 445,
    "year": 2023,
    "rating": 4.699761987765303,
    "downloads": 1094,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Introdu\u00e7\u00e3o ao Direito.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-341",
    "title": "Algoritmos: Fundamentos e Pr\u00e1ticas",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3787,
    "pages": 705,
    "year": 2022,
    "rating": 4.559484379086477,
    "downloads": 3310,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Algoritmos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-342",
    "title": "Manual de Missiologia",
    "author": "Zeferino Capoco",
    "category": "academicos",
    "subcategory": "historia",
    "price": 2438,
    "pages": 701,
    "year": 2023,
    "rating": 4.927344861078163,
    "downloads": 2412,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-343",
    "title": "Manual de Mec\u00e2nica Qu\u00e2ntica",
    "author": "Karl Marx",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3903,
    "pages": 441,
    "year": 2023,
    "rating": 4.7198403223534315,
    "downloads": 3055,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Mec\u00e2nica Qu\u00e2ntica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-344",
    "title": "Sistemas Operacionais: Fundamentos e Pr\u00e1ticas",
    "author": "Agostinho",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4135,
    "pages": 752,
    "year": 2023,
    "rating": 4.576879582110734,
    "downloads": 2725,
    "synopsis": "Uma obra abrangente de Agostinho que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-filosofia-345",
    "title": "Redes de Computadores: Fundamentos e Pr\u00e1ticas",
    "author": "Ad\u00e3o de Almeida",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 4530,
    "pages": 376,
    "year": 2022,
    "rating": 4.627968100754142,
    "downloads": 4795,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Redes de Computadores.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-346",
    "title": "Lideran\u00e7a Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Agostinho",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3777,
    "pages": 810,
    "year": 2020,
    "rating": 4.57457716070564,
    "downloads": 4560,
    "synopsis": "Uma obra abrangente de Agostinho que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-historia-347",
    "title": "Manual de Termodin\u00e2mica",
    "author": "Robert C. Martin",
    "category": "academicos",
    "subcategory": "historia",
    "price": 4216,
    "pages": 516,
    "year": 2022,
    "rating": 4.63968683237018,
    "downloads": 720,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-348",
    "title": "Econometria: Fundamentos e Pr\u00e1ticas",
    "author": "Andrew Hunt",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2328,
    "pages": 675,
    "year": 2021,
    "rating": 4.715789032055557,
    "downloads": 789,
    "synopsis": "Uma obra abrangente de Andrew Hunt que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-349",
    "title": "F\u00edsica Geral: Fundamentos e Pr\u00e1ticas",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3948,
    "pages": 274,
    "year": 2018,
    "rating": 4.947940043227656,
    "downloads": 3464,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-economia-350",
    "title": "Manual de Introdu\u00e7\u00e3o ao Direito",
    "author": "Charles Sheldon",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3915,
    "pages": 750,
    "year": 2021,
    "rating": 4.953996655858656,
    "downloads": 1388,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de Introdu\u00e7\u00e3o ao Direito.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-filosofia-351",
    "title": "Finan\u00e7as: Fundamentos e Pr\u00e1ticas",
    "author": "Dietrich Bonhoeffer",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 5489,
    "pages": 736,
    "year": 2019,
    "rating": 4.966937718713264,
    "downloads": 1194,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-352",
    "title": "Hist\u00f3ria da Igreja: Fundamentos e Pr\u00e1ticas",
    "author": "Adam Smith",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3695,
    "pages": 662,
    "year": 2020,
    "rating": 4.7076573495578256,
    "downloads": 1844,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-353",
    "title": "Manual de C\u00e1lculo II",
    "author": "Sommerville",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2800,
    "pages": 527,
    "year": 2020,
    "rating": 4.97853161842268,
    "downloads": 3226,
    "synopsis": "Uma obra abrangente de Sommerville que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-354",
    "title": "Farmacologia: Fundamentos e Pr\u00e1ticas",
    "author": "Hal Varian",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4294,
    "pages": 297,
    "year": 2022,
    "rating": 4.775732191776849,
    "downloads": 446,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de Farmacologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-medicina-355",
    "title": "Manual de Finan\u00e7as",
    "author": "Andrew Hunt",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2756,
    "pages": 677,
    "year": 2018,
    "rating": 4.744064436129498,
    "downloads": 787,
    "synopsis": "Uma obra abrangente de Andrew Hunt que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-informatica-356",
    "title": "Manual de Discipulado",
    "author": "Charles Sheldon",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2483,
    "pages": 684,
    "year": 2020,
    "rating": 4.741120465573676,
    "downloads": 3812,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de Discipulado.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-medicina-357",
    "title": "Discipulado: Fundamentos e Pr\u00e1ticas",
    "author": "Hal Varian",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1512,
    "pages": 506,
    "year": 2023,
    "rating": 4.610878609807931,
    "downloads": 2211,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de Discipulado.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-358",
    "title": "Manual de Lideran\u00e7a Crist\u00e3",
    "author": "Karl Marx",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2152,
    "pages": 738,
    "year": 2018,
    "rating": 4.72327087220847,
    "downloads": 4599,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-359",
    "title": "Manual de Comunica\u00e7\u00e3o no Casamento",
    "author": "Zeferino Capoco",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2841,
    "pages": 702,
    "year": 2023,
    "rating": 4.774872645332775,
    "downloads": 2178,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Comunica\u00e7\u00e3o no Casamento.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-direito-360",
    "title": "Relacionamento Conjugal: Fundamentos e Pr\u00e1ticas",
    "author": "Martin Fowler",
    "category": "academicos",
    "subcategory": "direito",
    "price": 4796,
    "pages": 734,
    "year": 2018,
    "rating": 4.697384702195289,
    "downloads": 1244,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-filosofia-361",
    "title": "Redes de Computadores: Fundamentos e Pr\u00e1ticas",
    "author": "Wayne Grudem",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 4757,
    "pages": 285,
    "year": 2022,
    "rating": 4.819716107215401,
    "downloads": 2977,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Redes de Computadores.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-engenharia-362",
    "title": "Manual de Finan\u00e7as no Lar",
    "author": "Stuart Russell",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2205,
    "pages": 583,
    "year": 2018,
    "rating": 4.650948404591983,
    "downloads": 1504,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-informatica-363",
    "title": "Manual de Bioqu\u00edmica",
    "author": "Halliday",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2362,
    "pages": 718,
    "year": 2018,
    "rating": 4.793456156551371,
    "downloads": 323,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Bioqu\u00edmica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-364",
    "title": "Manual de Bioqu\u00edmica",
    "author": "Cremildo Paca",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4175,
    "pages": 438,
    "year": 2020,
    "rating": 4.524871260658434,
    "downloads": 3004,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Bioqu\u00edmica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-365",
    "title": "Algoritmos: Fundamentos e Pr\u00e1ticas",
    "author": "James Stewart",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2911,
    "pages": 330,
    "year": 2018,
    "rating": 4.865566292927282,
    "downloads": 1437,
    "synopsis": "Uma obra abrangente de James Stewart que explora os princ\u00edpios fundamentais de Algoritmos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-366",
    "title": "Apolog\u00e9tica: Fundamentos e Pr\u00e1ticas",
    "author": "R.C. Hibbeler",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4811,
    "pages": 689,
    "year": 2019,
    "rating": 4.8334035531691715,
    "downloads": 1360,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-367",
    "title": "C\u00e1lculo I: Fundamentos e Pr\u00e1ticas",
    "author": "Manuel Simas Santos",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1809,
    "pages": 640,
    "year": 2018,
    "rating": 4.55523235293829,
    "downloads": 4724,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-368",
    "title": "Finan\u00e7as: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Ezzo",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4218,
    "pages": 667,
    "year": 2024,
    "rating": 4.973985298394305,
    "downloads": 4229,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-filosofia-369",
    "title": "Finan\u00e7as no Lar: Fundamentos e Pr\u00e1ticas",
    "author": "Cremildo Paca",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 4908,
    "pages": 327,
    "year": 2019,
    "rating": 4.7352777952704255,
    "downloads": 1537,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-370",
    "title": "Manual de Econometria",
    "author": "Stuart Russell",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3006,
    "pages": 511,
    "year": 2018,
    "rating": 4.859695168168305,
    "downloads": 2554,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-medicina-371",
    "title": "Teologia Sistem\u00e1tica: Fundamentos e Pr\u00e1ticas",
    "author": "Thomas Cormen",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 5465,
    "pages": 377,
    "year": 2019,
    "rating": 4.982529262519361,
    "downloads": 2023,
    "synopsis": "Uma obra abrangente de Thomas Cormen que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-372",
    "title": "Manual de Finan\u00e7as",
    "author": "Stuart Russell",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4707,
    "pages": 732,
    "year": 2024,
    "rating": 4.924537355905264,
    "downloads": 328,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-373",
    "title": "Manual de Fisiologia",
    "author": "Charles Sheldon",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3095,
    "pages": 495,
    "year": 2023,
    "rating": 4.786967323359854,
    "downloads": 4412,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-374",
    "title": "Manual de Anatomia Humana",
    "author": "Gregory Mankiw",
    "category": "academicos",
    "subcategory": "direito",
    "price": 4203,
    "pages": 734,
    "year": 2020,
    "rating": 4.688751520037712,
    "downloads": 2276,
    "synopsis": "Uma obra abrangente de Gregory Mankiw que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OSUfynSeZawGJTBs.jpeg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-375",
    "title": "Banco de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Gregory Mankiw",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1676,
    "pages": 272,
    "year": 2024,
    "rating": 4.866145089058045,
    "downloads": 3623,
    "synopsis": "Uma obra abrangente de Gregory Mankiw que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-376",
    "title": "Direito Penal: Fundamentos e Pr\u00e1ticas",
    "author": "Karl Marx",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 5298,
    "pages": 356,
    "year": 2021,
    "rating": 4.642255662943911,
    "downloads": 2577,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-direito-377",
    "title": "Manual de F\u00edsica Geral",
    "author": "Gary Ezzo",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2358,
    "pages": 535,
    "year": 2018,
    "rating": 4.820504238835326,
    "downloads": 3705,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/CiyRruJplXiTYwuE.png",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-historia-378",
    "title": "Manual de Relacionamento Conjugal",
    "author": "Dietrich Bonhoeffer",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1740,
    "pages": 295,
    "year": 2021,
    "rating": 4.697727265858839,
    "downloads": 556,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-379",
    "title": "Manual de Finan\u00e7as",
    "author": "Manuel Simas Santos",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3230,
    "pages": 628,
    "year": 2021,
    "rating": 4.951051381904126,
    "downloads": 3773,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-economia-380",
    "title": "Manual de Direito Civil",
    "author": "Martin Fowler",
    "category": "academicos",
    "subcategory": "economia",
    "price": 4811,
    "pages": 560,
    "year": 2021,
    "rating": 4.741347773952345,
    "downloads": 3488,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-381",
    "title": "Manual de Sistemas Operacionais",
    "author": "Manuel Simas Santos",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 5358,
    "pages": 587,
    "year": 2020,
    "rating": 4.9937053252645045,
    "downloads": 1763,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-382",
    "title": "Manual de Algoritmos",
    "author": "Gary Chapman",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2891,
    "pages": 298,
    "year": 2020,
    "rating": 4.619124507394433,
    "downloads": 4093,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Algoritmos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-383",
    "title": "Econometria: Fundamentos e Pr\u00e1ticas",
    "author": "Rick Warren",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3007,
    "pages": 332,
    "year": 2019,
    "rating": 4.60701966678223,
    "downloads": 3360,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-economia-384",
    "title": "Relacionamento Conjugal: Fundamentos e Pr\u00e1ticas",
    "author": "Charles Sheldon",
    "category": "academicos",
    "subcategory": "economia",
    "price": 5153,
    "pages": 671,
    "year": 2019,
    "rating": 4.780549986114484,
    "downloads": 1609,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-385",
    "title": "Manual de Contabilidade",
    "author": "Hal Varian",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3407,
    "pages": 546,
    "year": 2018,
    "rating": 4.813839962118644,
    "downloads": 3862,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-historia-386",
    "title": "Direito Administrativo: Fundamentos e Pr\u00e1ticas",
    "author": "Frank White",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1980,
    "pages": 519,
    "year": 2020,
    "rating": 4.728294360074456,
    "downloads": 2027,
    "synopsis": "Uma obra abrangente de Frank White que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-familia-387",
    "title": "Manual de Mec\u00e2nica Qu\u00e2ntica",
    "author": "Adam Smith",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3646,
    "pages": 807,
    "year": 2022,
    "rating": 4.893879435197033,
    "downloads": 3675,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Mec\u00e2nica Qu\u00e2ntica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-388",
    "title": "Direito Civil: Fundamentos e Pr\u00e1ticas",
    "author": "Andrew Hunt",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1829,
    "pages": 395,
    "year": 2018,
    "rating": 4.569128111421335,
    "downloads": 754,
    "synopsis": "Uma obra abrangente de Andrew Hunt que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-389",
    "title": "Direito Penal: Fundamentos e Pr\u00e1ticas",
    "author": "Thomas Cormen",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1588,
    "pages": 445,
    "year": 2020,
    "rating": 4.559158166101415,
    "downloads": 4680,
    "synopsis": "Uma obra abrangente de Thomas Cormen que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-390",
    "title": "Manual de Apolog\u00e9tica",
    "author": "Gary Ezzo",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4390,
    "pages": 259,
    "year": 2018,
    "rating": 4.600944619969265,
    "downloads": 72,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-391",
    "title": "Econometria: Fundamentos e Pr\u00e1ticas",
    "author": "John Bunyan",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3108,
    "pages": 750,
    "year": 2023,
    "rating": 4.915938898528651,
    "downloads": 3542,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-392",
    "title": "F\u00edsica Geral: Fundamentos e Pr\u00e1ticas",
    "author": "Tom\u00e1s de Aquino",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3651,
    "pages": 343,
    "year": 2023,
    "rating": 4.956166701519039,
    "downloads": 1258,
    "synopsis": "Uma obra abrangente de Tom\u00e1s de Aquino que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-filosofia-393",
    "title": "Manual de Hermen\u00eautica",
    "author": "Robbins",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 4913,
    "pages": 333,
    "year": 2022,
    "rating": 4.792625507413927,
    "downloads": 4148,
    "synopsis": "Uma obra abrangente de Robbins que explora os princ\u00edpios fundamentais de Hermen\u00eautica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-394",
    "title": "Manual de Discipulado",
    "author": "Harrison",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2795,
    "pages": 747,
    "year": 2019,
    "rating": 4.748757876896597,
    "downloads": 1485,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Discipulado.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-395",
    "title": "Manual de Finan\u00e7as no Lar",
    "author": "Martin Fowler",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2258,
    "pages": 819,
    "year": 2024,
    "rating": 4.6367608506674465,
    "downloads": 285,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-396",
    "title": "Manual de Macroeconomia",
    "author": "Carlos Feij\u00f3",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4848,
    "pages": 599,
    "year": 2022,
    "rating": 4.711040961658248,
    "downloads": 4176,
    "synopsis": "Uma obra abrangente de Carlos Feij\u00f3 que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-397",
    "title": "Bioqu\u00edmica: Fundamentos e Pr\u00e1ticas",
    "author": "Manuel Simas Santos",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1828,
    "pages": 458,
    "year": 2019,
    "rating": 4.759965908243587,
    "downloads": 2446,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Bioqu\u00edmica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-398",
    "title": "Manual de Patologia",
    "author": "Frank White",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5221,
    "pages": 374,
    "year": 2021,
    "rating": 4.573347031116066,
    "downloads": 1639,
    "synopsis": "Uma obra abrangente de Frank White que explora os princ\u00edpios fundamentais de Patologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-familia-399",
    "title": "Macroeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Louis Berkhof",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2698,
    "pages": 598,
    "year": 2023,
    "rating": 4.776137381107551,
    "downloads": 2752,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-400",
    "title": "Manual de Lideran\u00e7a Crist\u00e3",
    "author": "Halliday",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1564,
    "pages": 583,
    "year": 2020,
    "rating": 4.853203441099116,
    "downloads": 1133,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-401",
    "title": "Manual de Vida em Fam\u00edlia",
    "author": "J.I. Packer",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2845,
    "pages": 343,
    "year": 2021,
    "rating": 4.968642770533872,
    "downloads": 3195,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-filosofia-402",
    "title": "Manual de Lideran\u00e7a Crist\u00e3",
    "author": "Jo\u00e3o Calvino",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3967,
    "pages": 443,
    "year": 2020,
    "rating": 4.666195703490305,
    "downloads": 2869,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-403",
    "title": "Fisiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Karl Marx",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3551,
    "pages": 468,
    "year": 2023,
    "rating": 4.552162576325636,
    "downloads": 4544,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-404",
    "title": "Lideran\u00e7a Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Karl Marx",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2945,
    "pages": 698,
    "year": 2019,
    "rating": 4.68498593471105,
    "downloads": 3884,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-405",
    "title": "Manual de Finan\u00e7as",
    "author": "R.C. Hibbeler",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5411,
    "pages": 281,
    "year": 2018,
    "rating": 4.966887402749419,
    "downloads": 4515,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-filosofia-406",
    "title": "Manual de Missiologia",
    "author": "Carlos Feij\u00f3",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3461,
    "pages": 501,
    "year": 2023,
    "rating": 4.6544119570333295,
    "downloads": 4824,
    "synopsis": "Uma obra abrangente de Carlos Feij\u00f3 que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-economia-407",
    "title": "Bioqu\u00edmica: Fundamentos e Pr\u00e1ticas",
    "author": "Agostinho",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2104,
    "pages": 454,
    "year": 2024,
    "rating": 4.646433699016671,
    "downloads": 4089,
    "synopsis": "Uma obra abrangente de Agostinho que explora os princ\u00edpios fundamentais de Bioqu\u00edmica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-408",
    "title": "Manual de Vida em Fam\u00edlia",
    "author": "Frank Netter",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2647,
    "pages": 839,
    "year": 2020,
    "rating": 4.822223250990975,
    "downloads": 826,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-economia-409",
    "title": "Vida de Ora\u00e7\u00e3o: Fundamentos e Pr\u00e1ticas",
    "author": "Adam Smith",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3603,
    "pages": 464,
    "year": 2019,
    "rating": 4.967841698839172,
    "downloads": 1833,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-filosofia-410",
    "title": "Manual de Introdu\u00e7\u00e3o ao Direito",
    "author": "Thomas Cormen",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1713,
    "pages": 499,
    "year": 2023,
    "rating": 4.53105576892641,
    "downloads": 511,
    "synopsis": "Uma obra abrangente de Thomas Cormen que explora os princ\u00edpios fundamentais de Introdu\u00e7\u00e3o ao Direito.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-411",
    "title": "Vida de Ora\u00e7\u00e3o: Fundamentos e Pr\u00e1ticas",
    "author": "Zeferino Capoco",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3387,
    "pages": 634,
    "year": 2023,
    "rating": 4.658352307013518,
    "downloads": 3397,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-412",
    "title": "Manual de Sistemas Operacionais",
    "author": "Robert C. Martin",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4830,
    "pages": 405,
    "year": 2018,
    "rating": 4.83529203324444,
    "downloads": 2287,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-413",
    "title": "Manual de Estruturas de Dados",
    "author": "Karl Marx",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3389,
    "pages": 323,
    "year": 2021,
    "rating": 4.615379426766385,
    "downloads": 2506,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Estruturas de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-414",
    "title": "Sistemas Operacionais: Fundamentos e Pr\u00e1ticas",
    "author": "Rick Warren",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3018,
    "pages": 420,
    "year": 2018,
    "rating": 4.906740922377403,
    "downloads": 304,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-415",
    "title": "Manual de Direito Civil",
    "author": "Adam Smith",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1942,
    "pages": 363,
    "year": 2019,
    "rating": 4.587043731219633,
    "downloads": 4875,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-historia-416",
    "title": "Direito Constitucional: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Chapman",
    "category": "academicos",
    "subcategory": "historia",
    "price": 3856,
    "pages": 379,
    "year": 2022,
    "rating": 4.785563457770091,
    "downloads": 4036,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Direito Constitucional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-417",
    "title": "Manual de Teologia Sistem\u00e1tica",
    "author": "Dietrich Bonhoeffer",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3770,
    "pages": 487,
    "year": 2018,
    "rating": 4.877387773344952,
    "downloads": 1740,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-418",
    "title": "Direito Administrativo: Fundamentos e Pr\u00e1ticas",
    "author": "John Bunyan",
    "category": "academicos",
    "subcategory": "direito",
    "price": 5165,
    "pages": 528,
    "year": 2023,
    "rating": 4.861269904403221,
    "downloads": 2686,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-419",
    "title": "Teologia Sistem\u00e1tica: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Chapman",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2755,
    "pages": 657,
    "year": 2021,
    "rating": 4.935165879630841,
    "downloads": 2773,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-420",
    "title": "Manual de Patologia",
    "author": "Gary Chapman",
    "category": "academicos",
    "subcategory": "direito",
    "price": 5385,
    "pages": 455,
    "year": 2019,
    "rating": 4.903118627400275,
    "downloads": 380,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Patologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-421",
    "title": "Introdu\u00e7\u00e3o ao Direito: Fundamentos e Pr\u00e1ticas",
    "author": "Manuel Simas Santos",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5418,
    "pages": 500,
    "year": 2023,
    "rating": 4.556076999045483,
    "downloads": 1799,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Introdu\u00e7\u00e3o ao Direito.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-422",
    "title": "Vida de Ora\u00e7\u00e3o: Fundamentos e Pr\u00e1ticas",
    "author": "Cremildo Paca",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5206,
    "pages": 332,
    "year": 2024,
    "rating": 4.526369632939028,
    "downloads": 2883,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-423",
    "title": "Lideran\u00e7a Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Thomas Cormen",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3093,
    "pages": 404,
    "year": 2020,
    "rating": 4.768998511028043,
    "downloads": 879,
    "synopsis": "Uma obra abrangente de Thomas Cormen que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-economia-424",
    "title": "Direito Administrativo: Fundamentos e Pr\u00e1ticas",
    "author": "Cremildo Paca",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2397,
    "pages": 837,
    "year": 2023,
    "rating": 4.942637822844004,
    "downloads": 564,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-425",
    "title": "Direito Administrativo: Fundamentos e Pr\u00e1ticas",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2394,
    "pages": 651,
    "year": 2018,
    "rating": 4.613161230255487,
    "downloads": 1268,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-426",
    "title": "Hist\u00f3ria da Igreja: Fundamentos e Pr\u00e1ticas",
    "author": "Karl Marx",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3251,
    "pages": 660,
    "year": 2019,
    "rating": 4.892879166278501,
    "downloads": 663,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-427",
    "title": "Manual de Banco de Dados",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4091,
    "pages": 741,
    "year": 2019,
    "rating": 4.893370589838772,
    "downloads": 3767,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-428",
    "title": "Manual de Introdu\u00e7\u00e3o ao Direito",
    "author": "Martin Fowler",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3164,
    "pages": 465,
    "year": 2019,
    "rating": 4.737498997178557,
    "downloads": 1148,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Introdu\u00e7\u00e3o ao Direito.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-429",
    "title": "Direito Constitucional: Fundamentos e Pr\u00e1ticas",
    "author": "Halliday",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4697,
    "pages": 456,
    "year": 2022,
    "rating": 4.925098347555199,
    "downloads": 4295,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Direito Constitucional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-medicina-430",
    "title": "Manual de Comunica\u00e7\u00e3o no Casamento",
    "author": "J.I. Packer",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 5070,
    "pages": 545,
    "year": 2021,
    "rating": 4.599950800571192,
    "downloads": 3175,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Comunica\u00e7\u00e3o no Casamento.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-431",
    "title": "Missiologia: Fundamentos e Pr\u00e1ticas",
    "author": "R.C. Hibbeler",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2510,
    "pages": 803,
    "year": 2023,
    "rating": 4.805384875947574,
    "downloads": 4232,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-medicina-432",
    "title": "Manual de Direito Constitucional",
    "author": "Zeferino Capoco",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3502,
    "pages": 719,
    "year": 2021,
    "rating": 4.856697401428752,
    "downloads": 1406,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Direito Constitucional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-433",
    "title": "Exegese B\u00edblica: Fundamentos e Pr\u00e1ticas",
    "author": "Karl Marx",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3513,
    "pages": 552,
    "year": 2021,
    "rating": 4.590519879986597,
    "downloads": 3447,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-434",
    "title": "Patologia: Fundamentos e Pr\u00e1ticas",
    "author": "Dietrich Bonhoeffer",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2339,
    "pages": 674,
    "year": 2024,
    "rating": 4.833820388011238,
    "downloads": 3798,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Patologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-435",
    "title": "Manual de Vida de Ora\u00e7\u00e3o",
    "author": "Karl Marx",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4188,
    "pages": 701,
    "year": 2020,
    "rating": 4.9455103359932195,
    "downloads": 2332,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-medicina-436",
    "title": "F\u00edsica Geral: Fundamentos e Pr\u00e1ticas",
    "author": "Zeferino Capoco",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3699,
    "pages": 653,
    "year": 2018,
    "rating": 4.639379400618752,
    "downloads": 765,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-437",
    "title": "Exegese B\u00edblica: Fundamentos e Pr\u00e1ticas",
    "author": "Sommerville",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2451,
    "pages": 710,
    "year": 2018,
    "rating": 4.714486295714768,
    "downloads": 3399,
    "synopsis": "Uma obra abrangente de Sommerville que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-filosofia-438",
    "title": "Manual de Direito Constitucional",
    "author": "Agostinho",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 4482,
    "pages": 522,
    "year": 2021,
    "rating": 4.980712599362589,
    "downloads": 3750,
    "synopsis": "Uma obra abrangente de Agostinho que explora os princ\u00edpios fundamentais de Direito Constitucional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-439",
    "title": "Finan\u00e7as no Lar: Fundamentos e Pr\u00e1ticas",
    "author": "Stuart Russell",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3086,
    "pages": 262,
    "year": 2022,
    "rating": 4.750243543567732,
    "downloads": 3865,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-440",
    "title": "Manual de Estruturas de Dados",
    "author": "Martin Fowler",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3528,
    "pages": 302,
    "year": 2018,
    "rating": 4.7298718704964235,
    "downloads": 4991,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Estruturas de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-direito-441",
    "title": "Educa\u00e7\u00e3o de Filhos: Fundamentos e Pr\u00e1ticas",
    "author": "Robert C. Martin",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3734,
    "pages": 362,
    "year": 2020,
    "rating": 4.718363530812957,
    "downloads": 1047,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-442",
    "title": "Manual de Direito Civil",
    "author": "John Bunyan",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3503,
    "pages": 804,
    "year": 2024,
    "rating": 4.502661694070076,
    "downloads": 1372,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-443",
    "title": "Direito Administrativo: Fundamentos e Pr\u00e1ticas",
    "author": "Hal Varian",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2039,
    "pages": 732,
    "year": 2020,
    "rating": 4.915850498981751,
    "downloads": 1074,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-economia-444",
    "title": "Introdu\u00e7\u00e3o ao Direito: Fundamentos e Pr\u00e1ticas",
    "author": "Renato Cardoso",
    "category": "academicos",
    "subcategory": "economia",
    "price": 5001,
    "pages": 797,
    "year": 2022,
    "rating": 4.710747839901778,
    "downloads": 1618,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Introdu\u00e7\u00e3o ao Direito.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-445",
    "title": "Finan\u00e7as: Fundamentos e Pr\u00e1ticas",
    "author": "Harrison",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2318,
    "pages": 526,
    "year": 2018,
    "rating": 4.658159586370943,
    "downloads": 129,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-informatica-446",
    "title": "Educa\u00e7\u00e3o de Filhos: Fundamentos e Pr\u00e1ticas",
    "author": "Frank Netter",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 4055,
    "pages": 821,
    "year": 2023,
    "rating": 4.7507469770338036,
    "downloads": 4895,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-447",
    "title": "Direito Civil: Fundamentos e Pr\u00e1ticas",
    "author": "Thomas Cormen",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1692,
    "pages": 662,
    "year": 2020,
    "rating": 4.934687207804692,
    "downloads": 498,
    "synopsis": "Uma obra abrangente de Thomas Cormen que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-filosofia-448",
    "title": "Vida em Fam\u00edlia: Fundamentos e Pr\u00e1ticas",
    "author": "Timothy Keller",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 4878,
    "pages": 723,
    "year": 2023,
    "rating": 4.622163074739522,
    "downloads": 2235,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-historia-449",
    "title": "Vida de Ora\u00e7\u00e3o: Fundamentos e Pr\u00e1ticas",
    "author": "Guyton",
    "category": "academicos",
    "subcategory": "historia",
    "price": 3536,
    "pages": 331,
    "year": 2018,
    "rating": 4.868356642653833,
    "downloads": 2149,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-450",
    "title": "Manual de Vida em Fam\u00edlia",
    "author": "Renato Cardoso",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1755,
    "pages": 567,
    "year": 2020,
    "rating": 4.778363795739695,
    "downloads": 4876,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-451",
    "title": "Comunica\u00e7\u00e3o no Casamento: Fundamentos e Pr\u00e1ticas",
    "author": "Rick Warren",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3550,
    "pages": 754,
    "year": 2018,
    "rating": 4.883488953725238,
    "downloads": 3787,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de Comunica\u00e7\u00e3o no Casamento.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-direito-452",
    "title": "Manual de Vida em Fam\u00edlia",
    "author": "Manuel Simas Santos",
    "category": "academicos",
    "subcategory": "direito",
    "price": 5097,
    "pages": 663,
    "year": 2023,
    "rating": 4.844985609952584,
    "downloads": 4611,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OSUfynSeZawGJTBs.jpeg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-historia-453",
    "title": "Relacionamento Conjugal: Fundamentos e Pr\u00e1ticas",
    "author": "Zeferino Capoco",
    "category": "academicos",
    "subcategory": "historia",
    "price": 5389,
    "pages": 506,
    "year": 2018,
    "rating": 4.602694166874711,
    "downloads": 3256,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-454",
    "title": "Finan\u00e7as: Fundamentos e Pr\u00e1ticas",
    "author": "Louis Berkhof",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 5488,
    "pages": 470,
    "year": 2023,
    "rating": 4.7765409671959205,
    "downloads": 3583,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-455",
    "title": "Algoritmos: Fundamentos e Pr\u00e1ticas",
    "author": "Carlos Feij\u00f3",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 4878,
    "pages": 694,
    "year": 2024,
    "rating": 4.826348939373041,
    "downloads": 4259,
    "synopsis": "Uma obra abrangente de Carlos Feij\u00f3 que explora os princ\u00edpios fundamentais de Algoritmos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-456",
    "title": "Apolog\u00e9tica: Fundamentos e Pr\u00e1ticas",
    "author": "Jo\u00e3o Calvino",
    "category": "academicos",
    "subcategory": "direito",
    "price": 4921,
    "pages": 748,
    "year": 2018,
    "rating": 4.845488911222573,
    "downloads": 2550,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-457",
    "title": "Apolog\u00e9tica: Fundamentos e Pr\u00e1ticas",
    "author": "James Stewart",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2448,
    "pages": 333,
    "year": 2019,
    "rating": 4.7728768228936955,
    "downloads": 1787,
    "synopsis": "Uma obra abrangente de James Stewart que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-458",
    "title": "Exegese B\u00edblica: Fundamentos e Pr\u00e1ticas",
    "author": "Jo\u00e3o Calvino",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3832,
    "pages": 395,
    "year": 2018,
    "rating": 4.605598528933337,
    "downloads": 1117,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-459",
    "title": "Manual de Introdu\u00e7\u00e3o ao Direito",
    "author": "Gary Ezzo",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3616,
    "pages": 754,
    "year": 2024,
    "rating": 4.745803765671312,
    "downloads": 4267,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de Introdu\u00e7\u00e3o ao Direito.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-economia-460",
    "title": "Manual de Patologia",
    "author": "Manuel Simas Santos",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3959,
    "pages": 653,
    "year": 2020,
    "rating": 4.5302959542943,
    "downloads": 1564,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Patologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-461",
    "title": "Manual de Patologia",
    "author": "Rick Warren",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1679,
    "pages": 620,
    "year": 2021,
    "rating": 4.6930507704677975,
    "downloads": 3421,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de Patologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-462",
    "title": "Manual de Finan\u00e7as",
    "author": "Wayne Grudem",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1563,
    "pages": 501,
    "year": 2018,
    "rating": 4.825735645333066,
    "downloads": 4430,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-informatica-463",
    "title": "Mec\u00e2nica Qu\u00e2ntica: Fundamentos e Pr\u00e1ticas",
    "author": "Wayne Grudem",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 4137,
    "pages": 520,
    "year": 2024,
    "rating": 4.743528696119712,
    "downloads": 3616,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Mec\u00e2nica Qu\u00e2ntica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-464",
    "title": "Manual de Finan\u00e7as no Lar",
    "author": "Wayne Grudem",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4785,
    "pages": 792,
    "year": 2021,
    "rating": 4.7678251076356,
    "downloads": 1697,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-465",
    "title": "Lideran\u00e7a Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Tom\u00e1s de Aquino",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3297,
    "pages": 349,
    "year": 2021,
    "rating": 4.635541797623372,
    "downloads": 1076,
    "synopsis": "Uma obra abrangente de Tom\u00e1s de Aquino que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-466",
    "title": "Discipulado: Fundamentos e Pr\u00e1ticas",
    "author": "Louis Berkhof",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4770,
    "pages": 267,
    "year": 2018,
    "rating": 4.639869838216887,
    "downloads": 1098,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Discipulado.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-medicina-467",
    "title": "Educa\u00e7\u00e3o de Filhos: Fundamentos e Pr\u00e1ticas",
    "author": "Adam Smith",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 4801,
    "pages": 314,
    "year": 2024,
    "rating": 4.994789261584521,
    "downloads": 2045,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-engenharia-468",
    "title": "Manual de Hermen\u00eautica",
    "author": "Gary Chapman",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3783,
    "pages": 325,
    "year": 2018,
    "rating": 4.982875035824109,
    "downloads": 1989,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Hermen\u00eautica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-469",
    "title": "Estruturas de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Ad\u00e3o de Almeida",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3158,
    "pages": 478,
    "year": 2020,
    "rating": 4.786834205354517,
    "downloads": 3837,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Estruturas de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-470",
    "title": "F\u00edsica Geral: Fundamentos e Pr\u00e1ticas",
    "author": "Olivier Blanchard",
    "category": "academicos",
    "subcategory": "historia",
    "price": 3985,
    "pages": 678,
    "year": 2020,
    "rating": 4.908436543130752,
    "downloads": 646,
    "synopsis": "Uma obra abrangente de Olivier Blanchard que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-medicina-471",
    "title": "Missiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Manuel Simas Santos",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3753,
    "pages": 644,
    "year": 2018,
    "rating": 4.854067944678934,
    "downloads": 3782,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-472",
    "title": "Manual de Algoritmos",
    "author": "Karl Marx",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3879,
    "pages": 423,
    "year": 2022,
    "rating": 4.863900555999885,
    "downloads": 4440,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Algoritmos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-473",
    "title": "Apolog\u00e9tica: Fundamentos e Pr\u00e1ticas",
    "author": "Thomas Cormen",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1590,
    "pages": 814,
    "year": 2020,
    "rating": 4.743517459322612,
    "downloads": 53,
    "synopsis": "Uma obra abrangente de Thomas Cormen que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-474",
    "title": "Manual de Hermen\u00eautica",
    "author": "Renato Cardoso",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1501,
    "pages": 659,
    "year": 2021,
    "rating": 4.713738917343789,
    "downloads": 1014,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Hermen\u00eautica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-filosofia-475",
    "title": "Manual de F\u00edsica Geral",
    "author": "Harrison",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 2470,
    "pages": 308,
    "year": 2019,
    "rating": 4.548376725709642,
    "downloads": 3530,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-medicina-476",
    "title": "Contabilidade: Fundamentos e Pr\u00e1ticas",
    "author": "J.I. Packer",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1755,
    "pages": 410,
    "year": 2023,
    "rating": 4.514584086453227,
    "downloads": 1881,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-informatica-477",
    "title": "Direito Penal: Fundamentos e Pr\u00e1ticas",
    "author": "Cremildo Paca",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2145,
    "pages": 447,
    "year": 2020,
    "rating": 4.605463325437322,
    "downloads": 4255,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-direito-478",
    "title": "Manual de Direito Penal",
    "author": "Robbins",
    "category": "academicos",
    "subcategory": "direito",
    "price": 4179,
    "pages": 734,
    "year": 2022,
    "rating": 4.891533559817351,
    "downloads": 3822,
    "synopsis": "Uma obra abrangente de Robbins que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-informatica-479",
    "title": "Fisiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Ant\u00f3nio Cascais",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 4116,
    "pages": 609,
    "year": 2022,
    "rating": 4.822550772906433,
    "downloads": 3569,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-480",
    "title": "Manual de Direito Penal",
    "author": "Harrison",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2953,
    "pages": 271,
    "year": 2019,
    "rating": 4.97437010416309,
    "downloads": 3446,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-481",
    "title": "Estruturas de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Thomas Cormen",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4344,
    "pages": 346,
    "year": 2023,
    "rating": 4.841327813463343,
    "downloads": 335,
    "synopsis": "Uma obra abrangente de Thomas Cormen que explora os princ\u00edpios fundamentais de Estruturas de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-482",
    "title": "Direito Penal: Fundamentos e Pr\u00e1ticas",
    "author": "Sommerville",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4729,
    "pages": 480,
    "year": 2023,
    "rating": 4.602238522632311,
    "downloads": 1152,
    "synopsis": "Uma obra abrangente de Sommerville que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-483",
    "title": "\u00c9tica Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Chapman",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2492,
    "pages": 353,
    "year": 2021,
    "rating": 4.836286099022247,
    "downloads": 3468,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de \u00c9tica Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-484",
    "title": "Manual de Contabilidade",
    "author": "R.C. Hibbeler",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2319,
    "pages": 385,
    "year": 2023,
    "rating": 4.755399947961631,
    "downloads": 4557,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-485",
    "title": "Manual de Teologia Sistem\u00e1tica",
    "author": "Harrison",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2603,
    "pages": 839,
    "year": 2021,
    "rating": 4.987302039284404,
    "downloads": 4342,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-486",
    "title": "Patologia: Fundamentos e Pr\u00e1ticas",
    "author": "Louis Berkhof",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3808,
    "pages": 825,
    "year": 2020,
    "rating": 4.73731991273347,
    "downloads": 3533,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Patologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-487",
    "title": "Sistemas Operacionais: Fundamentos e Pr\u00e1ticas",
    "author": "Karl Marx",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2294,
    "pages": 818,
    "year": 2023,
    "rating": 4.950023541748288,
    "downloads": 3012,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lLLXTPwufcddLhed.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-488",
    "title": "Estruturas de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Hal Varian",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4817,
    "pages": 550,
    "year": 2020,
    "rating": 4.70732566057246,
    "downloads": 3925,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de Estruturas de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-489",
    "title": "Patologia: Fundamentos e Pr\u00e1ticas",
    "author": "Manuel Simas Santos",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5263,
    "pages": 536,
    "year": 2020,
    "rating": 4.673618755277696,
    "downloads": 4637,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Patologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-direito-490",
    "title": "Manual de Relacionamento Conjugal",
    "author": "Frank Netter",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3590,
    "pages": 838,
    "year": 2023,
    "rating": 4.758310153105843,
    "downloads": 1542,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-direito-491",
    "title": "Vida em Fam\u00edlia: Fundamentos e Pr\u00e1ticas",
    "author": "J.I. Packer",
    "category": "academicos",
    "subcategory": "direito",
    "price": 4446,
    "pages": 331,
    "year": 2019,
    "rating": 4.777424992409163,
    "downloads": 2776,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/CiyRruJplXiTYwuE.png",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-492",
    "title": "Manual de Banco de Dados",
    "author": "Guyton",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2949,
    "pages": 320,
    "year": 2021,
    "rating": 4.728457899806062,
    "downloads": 1399,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-493",
    "title": "Manual de Farmacologia",
    "author": "R.C. Hibbeler",
    "category": "academicos",
    "subcategory": "historia",
    "price": 3385,
    "pages": 723,
    "year": 2024,
    "rating": 4.799131138556587,
    "downloads": 4469,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Farmacologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-historia-494",
    "title": "Manual de Patologia",
    "author": "J.I. Packer",
    "category": "academicos",
    "subcategory": "historia",
    "price": 5102,
    "pages": 551,
    "year": 2022,
    "rating": 4.929102653461479,
    "downloads": 1124,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Patologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-economia-495",
    "title": "Direito Penal: Fundamentos e Pr\u00e1ticas",
    "author": "Halliday",
    "category": "academicos",
    "subcategory": "economia",
    "price": 4680,
    "pages": 306,
    "year": 2020,
    "rating": 4.524068460702922,
    "downloads": 3723,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-496",
    "title": "Microeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Henry Cloud",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4457,
    "pages": 577,
    "year": 2024,
    "rating": 4.547026634438378,
    "downloads": 1720,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de Microeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-engenharia-497",
    "title": "Manual de Econometria",
    "author": "Olivier Blanchard",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3484,
    "pages": 304,
    "year": 2019,
    "rating": 4.508373360118767,
    "downloads": 4026,
    "synopsis": "Uma obra abrangente de Olivier Blanchard que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-498",
    "title": "Manual de Lideran\u00e7a Crist\u00e3",
    "author": "Stuart Russell",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2628,
    "pages": 834,
    "year": 2024,
    "rating": 4.750645265948414,
    "downloads": 1145,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-499",
    "title": "Manual de Macroeconomia",
    "author": "Stuart Russell",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4054,
    "pages": 462,
    "year": 2018,
    "rating": 4.568907095259731,
    "downloads": 4903,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-500",
    "title": "Manual de Comunica\u00e7\u00e3o no Casamento",
    "author": "Jo\u00e3o Calvino",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2235,
    "pages": 367,
    "year": 2023,
    "rating": 4.923124603265601,
    "downloads": 373,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Comunica\u00e7\u00e3o no Casamento.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-familia-501",
    "title": "C\u00e1lculo II: Fundamentos e Pr\u00e1ticas",
    "author": "Agostinho",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4608,
    "pages": 702,
    "year": 2019,
    "rating": 4.5391639746543495,
    "downloads": 3211,
    "synopsis": "Uma obra abrangente de Agostinho que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-502",
    "title": "Finan\u00e7as no Lar: Fundamentos e Pr\u00e1ticas",
    "author": "Guyton",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2169,
    "pages": 741,
    "year": 2023,
    "rating": 4.583498347359462,
    "downloads": 3568,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-503",
    "title": "Manual de Exegese B\u00edblica",
    "author": "Louis Berkhof",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2582,
    "pages": 441,
    "year": 2024,
    "rating": 4.693960742070245,
    "downloads": 297,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/CiyRruJplXiTYwuE.png",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-medicina-504",
    "title": "Manual de \u00c9tica Crist\u00e3",
    "author": "R.C. Hibbeler",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3084,
    "pages": 717,
    "year": 2021,
    "rating": 4.86615279696285,
    "downloads": 2279,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de \u00c9tica Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-505",
    "title": "Manual de Termodin\u00e2mica",
    "author": "Ant\u00f3nio Cascais",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4308,
    "pages": 276,
    "year": 2022,
    "rating": 4.573313845514171,
    "downloads": 1330,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-506",
    "title": "Apolog\u00e9tica: Fundamentos e Pr\u00e1ticas",
    "author": "Robert C. Martin",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2256,
    "pages": 532,
    "year": 2019,
    "rating": 4.820379304331378,
    "downloads": 129,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-507",
    "title": "Manual de Vida de Ora\u00e7\u00e3o",
    "author": "R.C. Hibbeler",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4232,
    "pages": 507,
    "year": 2024,
    "rating": 4.815884645606527,
    "downloads": 858,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-filosofia-508",
    "title": "Manual de Direito Civil",
    "author": "Gary Ezzo",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3250,
    "pages": 511,
    "year": 2021,
    "rating": 4.606512538227729,
    "downloads": 887,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-509",
    "title": "Hist\u00f3ria da Igreja: Fundamentos e Pr\u00e1ticas",
    "author": "Frank White",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2706,
    "pages": 695,
    "year": 2022,
    "rating": 4.956800475051926,
    "downloads": 4927,
    "synopsis": "Uma obra abrangente de Frank White que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-filosofia-510",
    "title": "Farmacologia: Fundamentos e Pr\u00e1ticas",
    "author": "Charles Sheldon",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 5060,
    "pages": 756,
    "year": 2019,
    "rating": 4.99367689561939,
    "downloads": 107,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de Farmacologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-filosofia-511",
    "title": "Manual de Comunica\u00e7\u00e3o no Casamento",
    "author": "Manuel Simas Santos",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3627,
    "pages": 762,
    "year": 2019,
    "rating": 4.829390818270851,
    "downloads": 1607,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Comunica\u00e7\u00e3o no Casamento.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-engenharia-512",
    "title": "Manual de Macroeconomia",
    "author": "Andrew Hunt",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3222,
    "pages": 633,
    "year": 2022,
    "rating": 4.691747773671437,
    "downloads": 2230,
    "synopsis": "Uma obra abrangente de Andrew Hunt que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-513",
    "title": "Manual de Sistemas Operacionais",
    "author": "Louis Berkhof",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3664,
    "pages": 501,
    "year": 2023,
    "rating": 4.880371090626653,
    "downloads": 3363,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-514",
    "title": "Sistemas Operacionais: Fundamentos e Pr\u00e1ticas",
    "author": "Renato Cardoso",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4805,
    "pages": 471,
    "year": 2020,
    "rating": 4.820726730281317,
    "downloads": 973,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-515",
    "title": "Manual de Vida de Ora\u00e7\u00e3o",
    "author": "Frank White",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5159,
    "pages": 467,
    "year": 2019,
    "rating": 4.5757103736019245,
    "downloads": 251,
    "synopsis": "Uma obra abrangente de Frank White que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-516",
    "title": "Manual de Direito Constitucional",
    "author": "Renato Cardoso",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1909,
    "pages": 251,
    "year": 2021,
    "rating": 4.940624994781185,
    "downloads": 2735,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Direito Constitucional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-economia-517",
    "title": "Manual de Direito Penal",
    "author": "Timothy Keller",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2445,
    "pages": 489,
    "year": 2018,
    "rating": 4.50581057556394,
    "downloads": 2899,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-518",
    "title": "Econometria: Fundamentos e Pr\u00e1ticas",
    "author": "Manuel Simas Santos",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4672,
    "pages": 837,
    "year": 2020,
    "rating": 4.63929677457755,
    "downloads": 4342,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-medicina-519",
    "title": "Manual de Direito Penal",
    "author": "Karl Marx",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 4725,
    "pages": 723,
    "year": 2018,
    "rating": 4.7571862007979036,
    "downloads": 934,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-familia-520",
    "title": "Hist\u00f3ria da Igreja: Fundamentos e Pr\u00e1ticas",
    "author": "Robbins",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4577,
    "pages": 588,
    "year": 2019,
    "rating": 4.980734623066581,
    "downloads": 317,
    "synopsis": "Uma obra abrangente de Robbins que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-521",
    "title": "Direito Civil: Fundamentos e Pr\u00e1ticas",
    "author": "R.C. Hibbeler",
    "category": "academicos",
    "subcategory": "direito",
    "price": 4561,
    "pages": 740,
    "year": 2018,
    "rating": 4.613723331287842,
    "downloads": 3403,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/CiyRruJplXiTYwuE.png",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-522",
    "title": "Manual de Lideran\u00e7a Crist\u00e3",
    "author": "Ant\u00f3nio Cascais",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3187,
    "pages": 469,
    "year": 2024,
    "rating": 4.817402057955259,
    "downloads": 559,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-523",
    "title": "Lideran\u00e7a Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "James Stewart",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2493,
    "pages": 801,
    "year": 2021,
    "rating": 4.585921903709847,
    "downloads": 2554,
    "synopsis": "Uma obra abrangente de James Stewart que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-informatica-524",
    "title": "Manual de Hist\u00f3ria da Igreja",
    "author": "Henry Cloud",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3936,
    "pages": 363,
    "year": 2023,
    "rating": 4.629909433169136,
    "downloads": 3013,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-525",
    "title": "Mec\u00e2nica Qu\u00e2ntica: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Chapman",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2850,
    "pages": 614,
    "year": 2022,
    "rating": 4.526447516689087,
    "downloads": 1507,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Mec\u00e2nica Qu\u00e2ntica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-526",
    "title": "Apolog\u00e9tica: Fundamentos e Pr\u00e1ticas",
    "author": "Karl Marx",
    "category": "academicos",
    "subcategory": "economia",
    "price": 4247,
    "pages": 365,
    "year": 2019,
    "rating": 4.892012194819842,
    "downloads": 702,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-527",
    "title": "Manual de Finan\u00e7as",
    "author": "Ant\u00f3nio Cascais",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1928,
    "pages": 337,
    "year": 2019,
    "rating": 4.877753899357371,
    "downloads": 1095,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-528",
    "title": "Sistemas Operacionais: Fundamentos e Pr\u00e1ticas",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3359,
    "pages": 678,
    "year": 2018,
    "rating": 4.982921489798148,
    "downloads": 2548,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-informatica-529",
    "title": "Manual de Finan\u00e7as",
    "author": "Renato Cardoso",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2923,
    "pages": 850,
    "year": 2020,
    "rating": 4.506660004419461,
    "downloads": 1807,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-530",
    "title": "Direito Administrativo: Fundamentos e Pr\u00e1ticas",
    "author": "Henry Cloud",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2540,
    "pages": 558,
    "year": 2018,
    "rating": 4.972722608400941,
    "downloads": 2499,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-531",
    "title": "Direito Administrativo: Fundamentos e Pr\u00e1ticas",
    "author": "J.I. Packer",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3811,
    "pages": 547,
    "year": 2024,
    "rating": 4.896917154344134,
    "downloads": 893,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-532",
    "title": "Fisiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Wayne Grudem",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2723,
    "pages": 487,
    "year": 2019,
    "rating": 4.558579160907017,
    "downloads": 2389,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-informatica-533",
    "title": "Missiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Charles Sheldon",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2507,
    "pages": 716,
    "year": 2018,
    "rating": 4.716839721897304,
    "downloads": 1563,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-familia-534",
    "title": "Manual de Finan\u00e7as",
    "author": "Henry Cloud",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2354,
    "pages": 782,
    "year": 2024,
    "rating": 4.793076245764102,
    "downloads": 3765,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-535",
    "title": "Manual de Algoritmos",
    "author": "Dietrich Bonhoeffer",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2976,
    "pages": 525,
    "year": 2019,
    "rating": 4.757074411974183,
    "downloads": 2182,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Algoritmos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-536",
    "title": "Redes de Computadores: Fundamentos e Pr\u00e1ticas",
    "author": "Robert C. Martin",
    "category": "academicos",
    "subcategory": "direito",
    "price": 5337,
    "pages": 713,
    "year": 2023,
    "rating": 4.692498646845995,
    "downloads": 826,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de Redes de Computadores.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OSUfynSeZawGJTBs.jpeg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-economia-537",
    "title": "Patologia: Fundamentos e Pr\u00e1ticas",
    "author": "Wayne Grudem",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3001,
    "pages": 617,
    "year": 2024,
    "rating": 4.904899297018818,
    "downloads": 4938,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Patologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-filosofia-538",
    "title": "Banco de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Harrison",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1624,
    "pages": 629,
    "year": 2021,
    "rating": 4.9253383472357015,
    "downloads": 3270,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-539",
    "title": "Vida em Fam\u00edlia: Fundamentos e Pr\u00e1ticas",
    "author": "Charles Sheldon",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3505,
    "pages": 491,
    "year": 2023,
    "rating": 4.860439030614316,
    "downloads": 2433,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-540",
    "title": "Manual de Econometria",
    "author": "Guyton",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3812,
    "pages": 419,
    "year": 2018,
    "rating": 4.651420856200452,
    "downloads": 2253,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-filosofia-541",
    "title": "Finan\u00e7as no Lar: Fundamentos e Pr\u00e1ticas",
    "author": "Jo\u00e3o Calvino",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 2668,
    "pages": 848,
    "year": 2020,
    "rating": 4.522997324228789,
    "downloads": 871,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-542",
    "title": "Manual de Fisiologia",
    "author": "Halliday",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2662,
    "pages": 289,
    "year": 2019,
    "rating": 4.986058217421997,
    "downloads": 3021,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-543",
    "title": "Relacionamento Conjugal: Fundamentos e Pr\u00e1ticas",
    "author": "Dietrich Bonhoeffer",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2572,
    "pages": 443,
    "year": 2019,
    "rating": 4.860869996913076,
    "downloads": 772,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-544",
    "title": "Direito Administrativo: Fundamentos e Pr\u00e1ticas",
    "author": "Guyton",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4569,
    "pages": 314,
    "year": 2020,
    "rating": 4.650598206590411,
    "downloads": 3763,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-545",
    "title": "Manual de Direito Penal",
    "author": "J.I. Packer",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2335,
    "pages": 274,
    "year": 2020,
    "rating": 4.632610321317566,
    "downloads": 2171,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-economia-546",
    "title": "Hermen\u00eautica: Fundamentos e Pr\u00e1ticas",
    "author": "Jo\u00e3o Calvino",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2204,
    "pages": 390,
    "year": 2022,
    "rating": 4.506303587326885,
    "downloads": 4311,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Hermen\u00eautica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-engenharia-547",
    "title": "Manual de Microeconomia",
    "author": "Rick Warren",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3284,
    "pages": 269,
    "year": 2024,
    "rating": 4.603593747464625,
    "downloads": 352,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de Microeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-548",
    "title": "Manual de Vida em Fam\u00edlia",
    "author": "Gregory Mankiw",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1565,
    "pages": 481,
    "year": 2022,
    "rating": 4.827701119356034,
    "downloads": 4651,
    "synopsis": "Uma obra abrangente de Gregory Mankiw que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-direito-549",
    "title": "Manual de Fisiologia",
    "author": "Adam Smith",
    "category": "academicos",
    "subcategory": "direito",
    "price": 4168,
    "pages": 458,
    "year": 2019,
    "rating": 4.5303950587444035,
    "downloads": 1536,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-informatica-550",
    "title": "Hermen\u00eautica: Fundamentos e Pr\u00e1ticas",
    "author": "Adam Smith",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2341,
    "pages": 274,
    "year": 2020,
    "rating": 4.965878065346459,
    "downloads": 2300,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Hermen\u00eautica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-551",
    "title": "Manual de Sistemas Operacionais",
    "author": "Sommerville",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1951,
    "pages": 815,
    "year": 2023,
    "rating": 4.57466750365477,
    "downloads": 2142,
    "synopsis": "Uma obra abrangente de Sommerville que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-552",
    "title": "Manual de Relacionamento Conjugal",
    "author": "Stuart Russell",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2919,
    "pages": 627,
    "year": 2024,
    "rating": 4.810288998956702,
    "downloads": 1359,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-553",
    "title": "Missiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Sommerville",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4054,
    "pages": 735,
    "year": 2020,
    "rating": 4.637293242690947,
    "downloads": 2625,
    "synopsis": "Uma obra abrangente de Sommerville que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-medicina-554",
    "title": "Manual de Relacionamento Conjugal",
    "author": "Jo\u00e3o Calvino",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3938,
    "pages": 513,
    "year": 2018,
    "rating": 4.520981389519578,
    "downloads": 1596,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-555",
    "title": "Manual de Vida de Ora\u00e7\u00e3o",
    "author": "Gary Ezzo",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 5162,
    "pages": 254,
    "year": 2023,
    "rating": 4.875354419773559,
    "downloads": 3852,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-556",
    "title": "C\u00e1lculo II: Fundamentos e Pr\u00e1ticas",
    "author": "Manuel Simas Santos",
    "category": "academicos",
    "subcategory": "historia",
    "price": 4180,
    "pages": 521,
    "year": 2019,
    "rating": 4.866856722237393,
    "downloads": 4896,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-557",
    "title": "Manual de Hist\u00f3ria da Igreja",
    "author": "John Bunyan",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3954,
    "pages": 434,
    "year": 2023,
    "rating": 4.950612530629049,
    "downloads": 3470,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-558",
    "title": "Anatomia Humana: Fundamentos e Pr\u00e1ticas",
    "author": "Robbins",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2633,
    "pages": 610,
    "year": 2022,
    "rating": 4.876171323608021,
    "downloads": 4844,
    "synopsis": "Uma obra abrangente de Robbins que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-559",
    "title": "Teologia Sistem\u00e1tica: Fundamentos e Pr\u00e1ticas",
    "author": "Agostinho",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2938,
    "pages": 807,
    "year": 2023,
    "rating": 4.739675063732324,
    "downloads": 4376,
    "synopsis": "Uma obra abrangente de Agostinho que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-engenharia-560",
    "title": "Direito Civil: Fundamentos e Pr\u00e1ticas",
    "author": "Robert C. Martin",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 5065,
    "pages": 301,
    "year": 2020,
    "rating": 4.8434478286614775,
    "downloads": 3530,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-medicina-561",
    "title": "Sistemas Operacionais: Fundamentos e Pr\u00e1ticas",
    "author": "Martin Fowler",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2235,
    "pages": 585,
    "year": 2023,
    "rating": 4.844073837182822,
    "downloads": 1587,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-562",
    "title": "Farmacologia: Fundamentos e Pr\u00e1ticas",
    "author": "Robbins",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3056,
    "pages": 520,
    "year": 2019,
    "rating": 4.959737288065163,
    "downloads": 2637,
    "synopsis": "Uma obra abrangente de Robbins que explora os princ\u00edpios fundamentais de Farmacologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-563",
    "title": "Manual de Macroeconomia",
    "author": "Halliday",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2979,
    "pages": 329,
    "year": 2022,
    "rating": 4.579197199668259,
    "downloads": 2802,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-564",
    "title": "Manual de Relacionamento Conjugal",
    "author": "Halliday",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4253,
    "pages": 351,
    "year": 2018,
    "rating": 4.720203997000865,
    "downloads": 3027,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-economia-565",
    "title": "Hermen\u00eautica: Fundamentos e Pr\u00e1ticas",
    "author": "Harrison",
    "category": "academicos",
    "subcategory": "economia",
    "price": 4963,
    "pages": 846,
    "year": 2021,
    "rating": 4.794665293759094,
    "downloads": 2265,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Hermen\u00eautica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-economia-566",
    "title": "Manual de \u00c9tica Crist\u00e3",
    "author": "John Bunyan",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3238,
    "pages": 516,
    "year": 2020,
    "rating": 4.988610539791002,
    "downloads": 324,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de \u00c9tica Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-direito-567",
    "title": "Manual de Missiologia",
    "author": "Robert C. Martin",
    "category": "academicos",
    "subcategory": "direito",
    "price": 4393,
    "pages": 747,
    "year": 2023,
    "rating": 4.658432559035825,
    "downloads": 510,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-filosofia-568",
    "title": "Sistemas Operacionais: Fundamentos e Pr\u00e1ticas",
    "author": "Carlos Feij\u00f3",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3533,
    "pages": 403,
    "year": 2019,
    "rating": 4.723936510291472,
    "downloads": 3700,
    "synopsis": "Uma obra abrangente de Carlos Feij\u00f3 que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-569",
    "title": "Finan\u00e7as no Lar: Fundamentos e Pr\u00e1ticas",
    "author": "Frank White",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4280,
    "pages": 682,
    "year": 2018,
    "rating": 4.775521290748241,
    "downloads": 3833,
    "synopsis": "Uma obra abrangente de Frank White que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-medicina-570",
    "title": "Manual de Vida de Ora\u00e7\u00e3o",
    "author": "Renato Cardoso",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3399,
    "pages": 255,
    "year": 2021,
    "rating": 4.90612945341454,
    "downloads": 4059,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-571",
    "title": "Manual de Contabilidade",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1879,
    "pages": 346,
    "year": 2024,
    "rating": 4.526144003518337,
    "downloads": 2007,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-engenharia-572",
    "title": "Manual de Hist\u00f3ria da Igreja",
    "author": "Olivier Blanchard",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 4619,
    "pages": 575,
    "year": 2023,
    "rating": 4.507172380656609,
    "downloads": 2645,
    "synopsis": "Uma obra abrangente de Olivier Blanchard que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-573",
    "title": "Manual de Missiologia",
    "author": "Gregory Mankiw",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2805,
    "pages": 475,
    "year": 2021,
    "rating": 4.782173073688711,
    "downloads": 851,
    "synopsis": "Uma obra abrangente de Gregory Mankiw que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-574",
    "title": "Hist\u00f3ria da Igreja: Fundamentos e Pr\u00e1ticas",
    "author": "Henry Cloud",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3422,
    "pages": 749,
    "year": 2019,
    "rating": 4.548944131014989,
    "downloads": 3112,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-575",
    "title": "Vida de Ora\u00e7\u00e3o: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Ezzo",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3253,
    "pages": 704,
    "year": 2018,
    "rating": 4.6447942937513655,
    "downloads": 4750,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-576",
    "title": "Hist\u00f3ria da Igreja: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Ezzo",
    "category": "academicos",
    "subcategory": "direito",
    "price": 4186,
    "pages": 530,
    "year": 2024,
    "rating": 4.599110793584961,
    "downloads": 931,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-577",
    "title": "Direito Constitucional: Fundamentos e Pr\u00e1ticas",
    "author": "Gregory Mankiw",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2093,
    "pages": 674,
    "year": 2023,
    "rating": 4.6045969238680255,
    "downloads": 201,
    "synopsis": "Uma obra abrangente de Gregory Mankiw que explora os princ\u00edpios fundamentais de Direito Constitucional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-informatica-578",
    "title": "Manual de Redes de Computadores",
    "author": "Manuel Simas Santos",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 5381,
    "pages": 845,
    "year": 2020,
    "rating": 4.924530078004447,
    "downloads": 106,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Redes de Computadores.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-familia-579",
    "title": "Bioqu\u00edmica: Fundamentos e Pr\u00e1ticas",
    "author": "Ant\u00f3nio Cascais",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3722,
    "pages": 650,
    "year": 2022,
    "rating": 4.818805955945632,
    "downloads": 2060,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de Bioqu\u00edmica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-direito-580",
    "title": "Manual de C\u00e1lculo I",
    "author": "Zeferino Capoco",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3900,
    "pages": 834,
    "year": 2019,
    "rating": 4.793514590504305,
    "downloads": 2640,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-informatica-581",
    "title": "Manual de Missiologia",
    "author": "Renato Cardoso",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 4807,
    "pages": 830,
    "year": 2022,
    "rating": 4.815628466896689,
    "downloads": 3521,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-582",
    "title": "Manual de Apolog\u00e9tica",
    "author": "Manuel Simas Santos",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3922,
    "pages": 778,
    "year": 2019,
    "rating": 4.554265518551457,
    "downloads": 3850,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-direito-583",
    "title": "Macroeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Renato Cardoso",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2013,
    "pages": 468,
    "year": 2022,
    "rating": 4.854673958952144,
    "downloads": 2425,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lLLXTPwufcddLhed.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-engenharia-584",
    "title": "Manual de Lideran\u00e7a Crist\u00e3",
    "author": "Adam Smith",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2420,
    "pages": 603,
    "year": 2023,
    "rating": 4.664758488478959,
    "downloads": 2585,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-direito-585",
    "title": "Manual de Estruturas de Dados",
    "author": "Harrison",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2354,
    "pages": 341,
    "year": 2020,
    "rating": 4.677807750898872,
    "downloads": 1032,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Estruturas de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-filosofia-586",
    "title": "Manual de Comunica\u00e7\u00e3o no Casamento",
    "author": "Robbins",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 4750,
    "pages": 588,
    "year": 2020,
    "rating": 4.553720498750152,
    "downloads": 3401,
    "synopsis": "Uma obra abrangente de Robbins que explora os princ\u00edpios fundamentais de Comunica\u00e7\u00e3o no Casamento.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-587",
    "title": "F\u00edsica Geral: Fundamentos e Pr\u00e1ticas",
    "author": "Stuart Russell",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 5003,
    "pages": 726,
    "year": 2018,
    "rating": 4.574359975463934,
    "downloads": 1419,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-588",
    "title": "Direito Civil: Fundamentos e Pr\u00e1ticas",
    "author": "Robbins",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4588,
    "pages": 529,
    "year": 2024,
    "rating": 4.881288245500112,
    "downloads": 3565,
    "synopsis": "Uma obra abrangente de Robbins que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-589",
    "title": "Manual de C\u00e1lculo I",
    "author": "Louis Berkhof",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3381,
    "pages": 392,
    "year": 2022,
    "rating": 4.886847841581785,
    "downloads": 3337,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-historia-590",
    "title": "Missiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Zeferino Capoco",
    "category": "academicos",
    "subcategory": "historia",
    "price": 4772,
    "pages": 669,
    "year": 2022,
    "rating": 4.997996237099918,
    "downloads": 2933,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-591",
    "title": "Manual de Direito Administrativo",
    "author": "Cremildo Paca",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2392,
    "pages": 760,
    "year": 2023,
    "rating": 4.61853959977052,
    "downloads": 1725,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-engenharia-592",
    "title": "Estruturas de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Timothy Keller",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3670,
    "pages": 397,
    "year": 2021,
    "rating": 4.739564466509467,
    "downloads": 3618,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Estruturas de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-593",
    "title": "Redes de Computadores: Fundamentos e Pr\u00e1ticas",
    "author": "Hal Varian",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3995,
    "pages": 251,
    "year": 2022,
    "rating": 4.725902765215238,
    "downloads": 469,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de Redes de Computadores.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-engenharia-594",
    "title": "Manual de Patologia",
    "author": "Gregory Mankiw",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3058,
    "pages": 699,
    "year": 2022,
    "rating": 4.5998757185419175,
    "downloads": 2283,
    "synopsis": "Uma obra abrangente de Gregory Mankiw que explora os princ\u00edpios fundamentais de Patologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-medicina-595",
    "title": "Manual de Discipulado",
    "author": "Louis Berkhof",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 4817,
    "pages": 565,
    "year": 2018,
    "rating": 4.63205739571802,
    "downloads": 2122,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Discipulado.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-596",
    "title": "Manual de Direito Penal",
    "author": "Martin Fowler",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3861,
    "pages": 408,
    "year": 2020,
    "rating": 4.911087084644747,
    "downloads": 4541,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-economia-597",
    "title": "Redes de Computadores: Fundamentos e Pr\u00e1ticas",
    "author": "Rick Warren",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2518,
    "pages": 492,
    "year": 2023,
    "rating": 4.789281209562863,
    "downloads": 3131,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de Redes de Computadores.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-598",
    "title": "Manual de Farmacologia",
    "author": "Cremildo Paca",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2107,
    "pages": 766,
    "year": 2024,
    "rating": 4.5263983797729015,
    "downloads": 986,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Farmacologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-599",
    "title": "Hermen\u00eautica: Fundamentos e Pr\u00e1ticas",
    "author": "Hal Varian",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5341,
    "pages": 402,
    "year": 2024,
    "rating": 4.964483488179895,
    "downloads": 4444,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de Hermen\u00eautica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-medicina-600",
    "title": "Manual de Econometria",
    "author": "Gary Chapman",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1634,
    "pages": 253,
    "year": 2023,
    "rating": 4.821343931608694,
    "downloads": 1763,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-medicina-601",
    "title": "Finan\u00e7as: Fundamentos e Pr\u00e1ticas",
    "author": "James Stewart",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3250,
    "pages": 455,
    "year": 2021,
    "rating": 4.508771305384605,
    "downloads": 3500,
    "synopsis": "Uma obra abrangente de James Stewart que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-602",
    "title": "Discipulado: Fundamentos e Pr\u00e1ticas",
    "author": "Wayne Grudem",
    "category": "academicos",
    "subcategory": "historia",
    "price": 3482,
    "pages": 369,
    "year": 2019,
    "rating": 4.980941527841465,
    "downloads": 548,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Discipulado.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-603",
    "title": "Manual de Exegese B\u00edblica",
    "author": "Martin Fowler",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3954,
    "pages": 618,
    "year": 2021,
    "rating": 4.860399138418276,
    "downloads": 1963,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-604",
    "title": "Manual de Sistemas Operacionais",
    "author": "Harrison",
    "category": "academicos",
    "subcategory": "direito",
    "price": 4221,
    "pages": 395,
    "year": 2019,
    "rating": 4.708584254971147,
    "downloads": 2618,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-filosofia-605",
    "title": "Manual de Contabilidade",
    "author": "Adam Smith",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3862,
    "pages": 269,
    "year": 2023,
    "rating": 4.879565313443152,
    "downloads": 3155,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-606",
    "title": "Manual de Apolog\u00e9tica",
    "author": "Renato Cardoso",
    "category": "academicos",
    "subcategory": "historia",
    "price": 2250,
    "pages": 748,
    "year": 2018,
    "rating": 4.866627032484581,
    "downloads": 479,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-607",
    "title": "Banco de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Tom\u00e1s de Aquino",
    "category": "academicos",
    "subcategory": "economia",
    "price": 5194,
    "pages": 326,
    "year": 2022,
    "rating": 4.6772489941022375,
    "downloads": 160,
    "synopsis": "Uma obra abrangente de Tom\u00e1s de Aquino que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-608",
    "title": "Manual de \u00c9tica Crist\u00e3",
    "author": "Carlos Feij\u00f3",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4436,
    "pages": 441,
    "year": 2021,
    "rating": 4.6568260819579415,
    "downloads": 1025,
    "synopsis": "Uma obra abrangente de Carlos Feij\u00f3 que explora os princ\u00edpios fundamentais de \u00c9tica Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-direito-609",
    "title": "Manual de Exegese B\u00edblica",
    "author": "Adam Smith",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2620,
    "pages": 600,
    "year": 2022,
    "rating": 4.636913585865784,
    "downloads": 1974,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-610",
    "title": "Manual de Fisiologia",
    "author": "Wayne Grudem",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 4389,
    "pages": 628,
    "year": 2018,
    "rating": 4.933014595544887,
    "downloads": 233,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-611",
    "title": "Manual de Finan\u00e7as",
    "author": "Hal Varian",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 4165,
    "pages": 273,
    "year": 2022,
    "rating": 4.901322971072708,
    "downloads": 2250,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-612",
    "title": "Macroeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Jo\u00e3o Calvino",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2998,
    "pages": 599,
    "year": 2024,
    "rating": 4.602748084946227,
    "downloads": 4756,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-613",
    "title": "Finan\u00e7as: Fundamentos e Pr\u00e1ticas",
    "author": "Jo\u00e3o Calvino",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3068,
    "pages": 488,
    "year": 2021,
    "rating": 4.658581625112261,
    "downloads": 589,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-historia-614",
    "title": "Manual de Banco de Dados",
    "author": "J.I. Packer",
    "category": "academicos",
    "subcategory": "historia",
    "price": 3805,
    "pages": 262,
    "year": 2022,
    "rating": 4.895047114410448,
    "downloads": 2654,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-615",
    "title": "Manual de Algoritmos",
    "author": "Halliday",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2184,
    "pages": 574,
    "year": 2022,
    "rating": 4.743550327142489,
    "downloads": 2430,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Algoritmos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-616",
    "title": "Manual de Apolog\u00e9tica",
    "author": "Cremildo Paca",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1901,
    "pages": 253,
    "year": 2022,
    "rating": 4.958626000935689,
    "downloads": 1777,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-engenharia-617",
    "title": "\u00c9tica Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Frank Netter",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1590,
    "pages": 843,
    "year": 2020,
    "rating": 4.5221801790742475,
    "downloads": 3331,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de \u00c9tica Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-filosofia-618",
    "title": "Microeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Guyton",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3949,
    "pages": 806,
    "year": 2021,
    "rating": 4.582514724868444,
    "downloads": 3812,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de Microeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-619",
    "title": "Manual de Direito Administrativo",
    "author": "Stuart Russell",
    "category": "academicos",
    "subcategory": "direito",
    "price": 4621,
    "pages": 779,
    "year": 2024,
    "rating": 4.5583388908224425,
    "downloads": 974,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lLLXTPwufcddLhed.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-620",
    "title": "Direito Administrativo: Fundamentos e Pr\u00e1ticas",
    "author": "Charles Sheldon",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4207,
    "pages": 390,
    "year": 2023,
    "rating": 4.984883055588115,
    "downloads": 210,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-621",
    "title": "Manual de Farmacologia",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2896,
    "pages": 845,
    "year": 2024,
    "rating": 4.832358285597366,
    "downloads": 2159,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Farmacologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-622",
    "title": "Relacionamento Conjugal: Fundamentos e Pr\u00e1ticas",
    "author": "Jo\u00e3o Calvino",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4274,
    "pages": 712,
    "year": 2023,
    "rating": 4.629545996152967,
    "downloads": 3943,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-623",
    "title": "Manual de Relacionamento Conjugal",
    "author": "Robbins",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2804,
    "pages": 368,
    "year": 2019,
    "rating": 4.652960892054695,
    "downloads": 707,
    "synopsis": "Uma obra abrangente de Robbins que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-624",
    "title": "Manual de Direito Civil",
    "author": "Cremildo Paca",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3821,
    "pages": 260,
    "year": 2020,
    "rating": 4.684311153900739,
    "downloads": 3667,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-625",
    "title": "Educa\u00e7\u00e3o de Filhos: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Ezzo",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5274,
    "pages": 630,
    "year": 2020,
    "rating": 4.678913320863993,
    "downloads": 1628,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-626",
    "title": "Manual de Direito Administrativo",
    "author": "Guyton",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3947,
    "pages": 409,
    "year": 2019,
    "rating": 4.903381470223894,
    "downloads": 3334,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-627",
    "title": "Lideran\u00e7a Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 5048,
    "pages": 434,
    "year": 2022,
    "rating": 4.503147649735359,
    "downloads": 3697,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-filosofia-628",
    "title": "Manual de C\u00e1lculo II",
    "author": "Jo\u00e3o Calvino",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 4589,
    "pages": 836,
    "year": 2023,
    "rating": 4.771095438749578,
    "downloads": 915,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-medicina-629",
    "title": "Educa\u00e7\u00e3o de Filhos: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Chapman",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3928,
    "pages": 664,
    "year": 2018,
    "rating": 4.7289166654708525,
    "downloads": 3296,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-630",
    "title": "Direito Penal: Fundamentos e Pr\u00e1ticas",
    "author": "Charles Sheldon",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2673,
    "pages": 299,
    "year": 2022,
    "rating": 4.902036505961572,
    "downloads": 2916,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-631",
    "title": "Vida em Fam\u00edlia: Fundamentos e Pr\u00e1ticas",
    "author": "John Bunyan",
    "category": "academicos",
    "subcategory": "direito",
    "price": 4751,
    "pages": 442,
    "year": 2021,
    "rating": 4.751489025152381,
    "downloads": 3984,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lLLXTPwufcddLhed.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-632",
    "title": "Exegese B\u00edblica: Fundamentos e Pr\u00e1ticas",
    "author": "Olivier Blanchard",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2966,
    "pages": 474,
    "year": 2019,
    "rating": 4.783844251029258,
    "downloads": 2111,
    "synopsis": "Uma obra abrangente de Olivier Blanchard que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-633",
    "title": "Comunica\u00e7\u00e3o no Casamento: Fundamentos e Pr\u00e1ticas",
    "author": "Gregory Mankiw",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4804,
    "pages": 739,
    "year": 2021,
    "rating": 4.777286945504871,
    "downloads": 2449,
    "synopsis": "Uma obra abrangente de Gregory Mankiw que explora os princ\u00edpios fundamentais de Comunica\u00e7\u00e3o no Casamento.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-634",
    "title": "Vida de Ora\u00e7\u00e3o: Fundamentos e Pr\u00e1ticas",
    "author": "Manuel Simas Santos",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4785,
    "pages": 626,
    "year": 2022,
    "rating": 4.6271146509389744,
    "downloads": 2228,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-economia-635",
    "title": "Bioqu\u00edmica: Fundamentos e Pr\u00e1ticas",
    "author": "Thomas Cormen",
    "category": "academicos",
    "subcategory": "economia",
    "price": 4838,
    "pages": 583,
    "year": 2023,
    "rating": 4.747739046524429,
    "downloads": 2644,
    "synopsis": "Uma obra abrangente de Thomas Cormen que explora os princ\u00edpios fundamentais de Bioqu\u00edmica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-636",
    "title": "Manual de Farmacologia",
    "author": "Harrison",
    "category": "academicos",
    "subcategory": "economia",
    "price": 4991,
    "pages": 575,
    "year": 2018,
    "rating": 4.659286331483495,
    "downloads": 4845,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Farmacologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-637",
    "title": "Manual de Missiologia",
    "author": "Olivier Blanchard",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2541,
    "pages": 263,
    "year": 2022,
    "rating": 4.604491169255853,
    "downloads": 3718,
    "synopsis": "Uma obra abrangente de Olivier Blanchard que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-638",
    "title": "Manual de Farmacologia",
    "author": "Wayne Grudem",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2850,
    "pages": 739,
    "year": 2019,
    "rating": 4.878865298511079,
    "downloads": 2421,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Farmacologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-medicina-639",
    "title": "Vida em Fam\u00edlia: Fundamentos e Pr\u00e1ticas",
    "author": "Harrison",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3615,
    "pages": 460,
    "year": 2023,
    "rating": 4.7124594115043985,
    "downloads": 4524,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-640",
    "title": "Microeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Carlos Feij\u00f3",
    "category": "academicos",
    "subcategory": "historia",
    "price": 5208,
    "pages": 552,
    "year": 2022,
    "rating": 4.808449341475712,
    "downloads": 4225,
    "synopsis": "Uma obra abrangente de Carlos Feij\u00f3 que explora os princ\u00edpios fundamentais de Microeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-641",
    "title": "Manual de Discipulado",
    "author": "Ant\u00f3nio Cascais",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1669,
    "pages": 569,
    "year": 2019,
    "rating": 4.537436290358964,
    "downloads": 4828,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de Discipulado.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-642",
    "title": "Manual de Finan\u00e7as no Lar",
    "author": "Tom\u00e1s de Aquino",
    "category": "academicos",
    "subcategory": "historia",
    "price": 2986,
    "pages": 472,
    "year": 2020,
    "rating": 4.706751632995817,
    "downloads": 2355,
    "synopsis": "Uma obra abrangente de Tom\u00e1s de Aquino que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-engenharia-643",
    "title": "Manual de Finan\u00e7as",
    "author": "Cremildo Paca",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 4782,
    "pages": 375,
    "year": 2019,
    "rating": 4.731610053258157,
    "downloads": 1041,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-medicina-644",
    "title": "Manual de Mec\u00e2nica Qu\u00e2ntica",
    "author": "Dietrich Bonhoeffer",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 5207,
    "pages": 596,
    "year": 2023,
    "rating": 4.782419227592733,
    "downloads": 833,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Mec\u00e2nica Qu\u00e2ntica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-645",
    "title": "Direito Penal: Fundamentos e Pr\u00e1ticas",
    "author": "Ant\u00f3nio Cascais",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 5115,
    "pages": 560,
    "year": 2024,
    "rating": 4.715558536899683,
    "downloads": 4440,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-646",
    "title": "Manual de Anatomia Humana",
    "author": "Louis Berkhof",
    "category": "academicos",
    "subcategory": "economia",
    "price": 4439,
    "pages": 807,
    "year": 2023,
    "rating": 4.763858903504836,
    "downloads": 1862,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-647",
    "title": "Manual de Redes de Computadores",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3025,
    "pages": 612,
    "year": 2022,
    "rating": 4.568507950969766,
    "downloads": 4670,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Redes de Computadores.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-648",
    "title": "Missiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Guyton",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3849,
    "pages": 575,
    "year": 2024,
    "rating": 4.663828186319163,
    "downloads": 2345,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-filosofia-649",
    "title": "Manual de Bioqu\u00edmica",
    "author": "Charles Sheldon",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 2512,
    "pages": 509,
    "year": 2019,
    "rating": 4.738245744253388,
    "downloads": 1810,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de Bioqu\u00edmica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-650",
    "title": "Termodin\u00e2mica: Fundamentos e Pr\u00e1ticas",
    "author": "Frank Netter",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3765,
    "pages": 819,
    "year": 2019,
    "rating": 4.635138770668815,
    "downloads": 1144,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-651",
    "title": "Manual de C\u00e1lculo I",
    "author": "Gary Ezzo",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2467,
    "pages": 386,
    "year": 2022,
    "rating": 4.607190651054924,
    "downloads": 4901,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-historia-652",
    "title": "Manual de Exegese B\u00edblica",
    "author": "Frank White",
    "category": "academicos",
    "subcategory": "historia",
    "price": 4734,
    "pages": 325,
    "year": 2023,
    "rating": 4.581838835584067,
    "downloads": 478,
    "synopsis": "Uma obra abrangente de Frank White que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-653",
    "title": "Finan\u00e7as: Fundamentos e Pr\u00e1ticas",
    "author": "Adam Smith",
    "category": "academicos",
    "subcategory": "historia",
    "price": 2675,
    "pages": 714,
    "year": 2021,
    "rating": 4.774944569674325,
    "downloads": 795,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-654",
    "title": "Manual de Vida de Ora\u00e7\u00e3o",
    "author": "Gary Chapman",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3423,
    "pages": 587,
    "year": 2019,
    "rating": 4.942487979743172,
    "downloads": 2374,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-655",
    "title": "Manual de Discipulado",
    "author": "Martin Fowler",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5024,
    "pages": 267,
    "year": 2019,
    "rating": 4.981226094361023,
    "downloads": 2553,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Discipulado.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-656",
    "title": "Comunica\u00e7\u00e3o no Casamento: Fundamentos e Pr\u00e1ticas",
    "author": "Wayne Grudem",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2314,
    "pages": 320,
    "year": 2023,
    "rating": 4.6742010109487095,
    "downloads": 2210,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Comunica\u00e7\u00e3o no Casamento.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-657",
    "title": "Sistemas Operacionais: Fundamentos e Pr\u00e1ticas",
    "author": "Olivier Blanchard",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3661,
    "pages": 254,
    "year": 2020,
    "rating": 4.712764066333637,
    "downloads": 1011,
    "synopsis": "Uma obra abrangente de Olivier Blanchard que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-658",
    "title": "Manual de Patologia",
    "author": "Halliday",
    "category": "academicos",
    "subcategory": "historia",
    "price": 4355,
    "pages": 479,
    "year": 2019,
    "rating": 4.70143475603836,
    "downloads": 4670,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Patologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-659",
    "title": "Sistemas Operacionais: Fundamentos e Pr\u00e1ticas",
    "author": "Ad\u00e3o de Almeida",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2073,
    "pages": 388,
    "year": 2018,
    "rating": 4.526146712669885,
    "downloads": 3129,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-660",
    "title": "Anatomia Humana: Fundamentos e Pr\u00e1ticas",
    "author": "Thomas Cormen",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2608,
    "pages": 750,
    "year": 2020,
    "rating": 4.773130970195202,
    "downloads": 2840,
    "synopsis": "Uma obra abrangente de Thomas Cormen que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-661",
    "title": "Manual de Microeconomia",
    "author": "Harrison",
    "category": "academicos",
    "subcategory": "economia",
    "price": 4756,
    "pages": 433,
    "year": 2022,
    "rating": 4.680487542567597,
    "downloads": 1968,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Microeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-662",
    "title": "Algoritmos: Fundamentos e Pr\u00e1ticas",
    "author": "Hal Varian",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3933,
    "pages": 554,
    "year": 2024,
    "rating": 4.5088504185678095,
    "downloads": 1969,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de Algoritmos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-economia-663",
    "title": "C\u00e1lculo I: Fundamentos e Pr\u00e1ticas",
    "author": "Henry Cloud",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3892,
    "pages": 705,
    "year": 2022,
    "rating": 4.712612157555277,
    "downloads": 1955,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-664",
    "title": "Macroeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Henry Cloud",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1740,
    "pages": 599,
    "year": 2024,
    "rating": 4.8513873984661835,
    "downloads": 4285,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-informatica-665",
    "title": "Educa\u00e7\u00e3o de Filhos: Fundamentos e Pr\u00e1ticas",
    "author": "Karl Marx",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 4447,
    "pages": 556,
    "year": 2020,
    "rating": 4.945521492427458,
    "downloads": 1341,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-filosofia-666",
    "title": "Manual de C\u00e1lculo II",
    "author": "Agostinho",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 2871,
    "pages": 758,
    "year": 2018,
    "rating": 4.886282169328156,
    "downloads": 2517,
    "synopsis": "Uma obra abrangente de Agostinho que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-667",
    "title": "F\u00edsica Geral: Fundamentos e Pr\u00e1ticas",
    "author": "Henry Cloud",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2034,
    "pages": 755,
    "year": 2019,
    "rating": 4.692171966975447,
    "downloads": 4644,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-668",
    "title": "Farmacologia: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Ezzo",
    "category": "academicos",
    "subcategory": "direito",
    "price": 4134,
    "pages": 827,
    "year": 2018,
    "rating": 4.582211483326193,
    "downloads": 1252,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de Farmacologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OSUfynSeZawGJTBs.jpeg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-filosofia-669",
    "title": "Manual de Redes de Computadores",
    "author": "Harrison",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 4188,
    "pages": 367,
    "year": 2022,
    "rating": 4.557931794375331,
    "downloads": 601,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Redes de Computadores.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-economia-670",
    "title": "Estruturas de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Jo\u00e3o Calvino",
    "category": "academicos",
    "subcategory": "economia",
    "price": 4812,
    "pages": 471,
    "year": 2022,
    "rating": 4.7832890998795845,
    "downloads": 1816,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Estruturas de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-671",
    "title": "Educa\u00e7\u00e3o de Filhos: Fundamentos e Pr\u00e1ticas",
    "author": "J.I. Packer",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2644,
    "pages": 446,
    "year": 2024,
    "rating": 4.876332976558119,
    "downloads": 565,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-672",
    "title": "Manual de Finan\u00e7as no Lar",
    "author": "Dietrich Bonhoeffer",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3424,
    "pages": 297,
    "year": 2018,
    "rating": 4.537448699451242,
    "downloads": 168,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-673",
    "title": "Manual de Vida de Ora\u00e7\u00e3o",
    "author": "Halliday",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5401,
    "pages": 722,
    "year": 2023,
    "rating": 4.690139917868434,
    "downloads": 263,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-674",
    "title": "Relacionamento Conjugal: Fundamentos e Pr\u00e1ticas",
    "author": "Timothy Keller",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1701,
    "pages": 420,
    "year": 2023,
    "rating": 4.573974214735862,
    "downloads": 712,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OSUfynSeZawGJTBs.jpeg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-675",
    "title": "Manual de Finan\u00e7as",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4643,
    "pages": 492,
    "year": 2024,
    "rating": 4.706837398786676,
    "downloads": 183,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-filosofia-676",
    "title": "Fisiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Ad\u00e3o de Almeida",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1974,
    "pages": 819,
    "year": 2023,
    "rating": 4.636452304229862,
    "downloads": 541,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-historia-677",
    "title": "Manual de Relacionamento Conjugal",
    "author": "Rick Warren",
    "category": "academicos",
    "subcategory": "historia",
    "price": 3643,
    "pages": 731,
    "year": 2023,
    "rating": 4.836243450712185,
    "downloads": 1217,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-678",
    "title": "Manual de Banco de Dados",
    "author": "Karl Marx",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5097,
    "pages": 542,
    "year": 2023,
    "rating": 4.559587900253404,
    "downloads": 2784,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-679",
    "title": "Termodin\u00e2mica: Fundamentos e Pr\u00e1ticas",
    "author": "Sommerville",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3133,
    "pages": 523,
    "year": 2021,
    "rating": 4.508889865994319,
    "downloads": 87,
    "synopsis": "Uma obra abrangente de Sommerville que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-680",
    "title": "Manual de Vida de Ora\u00e7\u00e3o",
    "author": "Hal Varian",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3080,
    "pages": 656,
    "year": 2020,
    "rating": 4.829063796299189,
    "downloads": 4497,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-681",
    "title": "Hist\u00f3ria da Igreja: Fundamentos e Pr\u00e1ticas",
    "author": "Louis Berkhof",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5019,
    "pages": 825,
    "year": 2019,
    "rating": 4.660338067348287,
    "downloads": 2098,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-682",
    "title": "Manual de Lideran\u00e7a Crist\u00e3",
    "author": "Henry Cloud",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3421,
    "pages": 735,
    "year": 2021,
    "rating": 4.609524448075867,
    "downloads": 2676,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-683",
    "title": "Manual de Farmacologia",
    "author": "J.I. Packer",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1819,
    "pages": 687,
    "year": 2020,
    "rating": 4.855185590765563,
    "downloads": 4347,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Farmacologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-684",
    "title": "Manual de Contabilidade",
    "author": "Robbins",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4290,
    "pages": 253,
    "year": 2022,
    "rating": 4.587921036447013,
    "downloads": 3470,
    "synopsis": "Uma obra abrangente de Robbins que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-685",
    "title": "Lideran\u00e7a Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Manuel Simas Santos",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3660,
    "pages": 252,
    "year": 2023,
    "rating": 4.792139589277714,
    "downloads": 2798,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-686",
    "title": "Manual de Lideran\u00e7a Crist\u00e3",
    "author": "Carlos Feij\u00f3",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1868,
    "pages": 560,
    "year": 2020,
    "rating": 4.821410181679189,
    "downloads": 979,
    "synopsis": "Uma obra abrangente de Carlos Feij\u00f3 que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-687",
    "title": "Manual de Fisiologia",
    "author": "R.C. Hibbeler",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5117,
    "pages": 281,
    "year": 2023,
    "rating": 4.542308427361972,
    "downloads": 1178,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-historia-688",
    "title": "Manual de Missiologia",
    "author": "Ad\u00e3o de Almeida",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1836,
    "pages": 324,
    "year": 2021,
    "rating": 4.985187484999731,
    "downloads": 4007,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-689",
    "title": "Educa\u00e7\u00e3o de Filhos: Fundamentos e Pr\u00e1ticas",
    "author": "John Bunyan",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4242,
    "pages": 311,
    "year": 2024,
    "rating": 4.634272311610252,
    "downloads": 648,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-690",
    "title": "Missiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Andrew Hunt",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2924,
    "pages": 528,
    "year": 2022,
    "rating": 4.862666426698299,
    "downloads": 4633,
    "synopsis": "Uma obra abrangente de Andrew Hunt que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-691",
    "title": "Manual de Termodin\u00e2mica",
    "author": "Ad\u00e3o de Almeida",
    "category": "academicos",
    "subcategory": "historia",
    "price": 4979,
    "pages": 426,
    "year": 2020,
    "rating": 4.939216460667163,
    "downloads": 4197,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-692",
    "title": "Manual de C\u00e1lculo I",
    "author": "Renato Cardoso",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1615,
    "pages": 683,
    "year": 2024,
    "rating": 4.956833420311471,
    "downloads": 699,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-medicina-693",
    "title": "Anatomia Humana: Fundamentos e Pr\u00e1ticas",
    "author": "Adam Smith",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3241,
    "pages": 269,
    "year": 2024,
    "rating": 4.579259383511712,
    "downloads": 4294,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-filosofia-694",
    "title": "Manual de Discipulado",
    "author": "Ad\u00e3o de Almeida",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 5197,
    "pages": 464,
    "year": 2022,
    "rating": 4.595928358765504,
    "downloads": 3192,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Discipulado.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-695",
    "title": "Manual de Sistemas Operacionais",
    "author": "Tom\u00e1s de Aquino",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2450,
    "pages": 470,
    "year": 2020,
    "rating": 4.568987186316137,
    "downloads": 1148,
    "synopsis": "Uma obra abrangente de Tom\u00e1s de Aquino que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-informatica-696",
    "title": "Direito Administrativo: Fundamentos e Pr\u00e1ticas",
    "author": "Zeferino Capoco",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 4610,
    "pages": 528,
    "year": 2021,
    "rating": 4.734877285690476,
    "downloads": 1795,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-697",
    "title": "Manual de Teologia Sistem\u00e1tica",
    "author": "Martin Fowler",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1886,
    "pages": 778,
    "year": 2024,
    "rating": 4.720463948684922,
    "downloads": 3720,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-698",
    "title": "Hermen\u00eautica: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Ezzo",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2840,
    "pages": 536,
    "year": 2020,
    "rating": 4.657320037012851,
    "downloads": 3777,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de Hermen\u00eautica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-engenharia-699",
    "title": "Bioqu\u00edmica: Fundamentos e Pr\u00e1ticas",
    "author": "Stuart Russell",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 5126,
    "pages": 789,
    "year": 2023,
    "rating": 4.529851505172906,
    "downloads": 3941,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Bioqu\u00edmica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-700",
    "title": "Manual de Apolog\u00e9tica",
    "author": "Sommerville",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1829,
    "pages": 637,
    "year": 2021,
    "rating": 4.956790403539001,
    "downloads": 2089,
    "synopsis": "Uma obra abrangente de Sommerville que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-medicina-701",
    "title": "Manual de Contabilidade",
    "author": "Wayne Grudem",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 4309,
    "pages": 441,
    "year": 2020,
    "rating": 4.851928402393514,
    "downloads": 1282,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-historia-702",
    "title": "Exegese B\u00edblica: Fundamentos e Pr\u00e1ticas",
    "author": "Ant\u00f3nio Cascais",
    "category": "academicos",
    "subcategory": "historia",
    "price": 3391,
    "pages": 287,
    "year": 2020,
    "rating": 4.7117097983079965,
    "downloads": 4340,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-703",
    "title": "Teologia Sistem\u00e1tica: Fundamentos e Pr\u00e1ticas",
    "author": "Stuart Russell",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3523,
    "pages": 616,
    "year": 2018,
    "rating": 4.550880636344408,
    "downloads": 1643,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-informatica-704",
    "title": "Econometria: Fundamentos e Pr\u00e1ticas",
    "author": "Harrison",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3255,
    "pages": 661,
    "year": 2020,
    "rating": 4.630000425247557,
    "downloads": 3952,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-705",
    "title": "Manual de C\u00e1lculo II",
    "author": "Ant\u00f3nio Cascais",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4650,
    "pages": 345,
    "year": 2019,
    "rating": 4.670548749903959,
    "downloads": 2008,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-706",
    "title": "Finan\u00e7as no Lar: Fundamentos e Pr\u00e1ticas",
    "author": "Gregory Mankiw",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3740,
    "pages": 440,
    "year": 2018,
    "rating": 4.683820609193907,
    "downloads": 3715,
    "synopsis": "Uma obra abrangente de Gregory Mankiw que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-707",
    "title": "Anatomia Humana: Fundamentos e Pr\u00e1ticas",
    "author": "Frank White",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2585,
    "pages": 587,
    "year": 2020,
    "rating": 4.772233614012146,
    "downloads": 4776,
    "synopsis": "Uma obra abrangente de Frank White que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-708",
    "title": "Microeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Dietrich Bonhoeffer",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2601,
    "pages": 788,
    "year": 2019,
    "rating": 4.668398529392926,
    "downloads": 3277,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Microeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-709",
    "title": "Vida de Ora\u00e7\u00e3o: Fundamentos e Pr\u00e1ticas",
    "author": "Frank Netter",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 5254,
    "pages": 827,
    "year": 2023,
    "rating": 4.981117990495126,
    "downloads": 4912,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-engenharia-710",
    "title": "\u00c9tica Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Robert C. Martin",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2479,
    "pages": 574,
    "year": 2018,
    "rating": 4.850526428210411,
    "downloads": 2336,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de \u00c9tica Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-711",
    "title": "Hist\u00f3ria da Igreja: Fundamentos e Pr\u00e1ticas",
    "author": "Frank Netter",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1681,
    "pages": 313,
    "year": 2021,
    "rating": 4.648167930041725,
    "downloads": 3664,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-712",
    "title": "Manual de Hermen\u00eautica",
    "author": "Louis Berkhof",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 4496,
    "pages": 436,
    "year": 2020,
    "rating": 4.929428544850942,
    "downloads": 525,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Hermen\u00eautica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-medicina-713",
    "title": "Manual de Microeconomia",
    "author": "Frank Netter",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 5301,
    "pages": 766,
    "year": 2024,
    "rating": 4.557713107193654,
    "downloads": 3941,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de Microeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-medicina-714",
    "title": "Manual de Microeconomia",
    "author": "Martin Fowler",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3225,
    "pages": 833,
    "year": 2023,
    "rating": 4.75084102645036,
    "downloads": 490,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Microeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-715",
    "title": "Manual de Termodin\u00e2mica",
    "author": "Rick Warren",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2838,
    "pages": 334,
    "year": 2020,
    "rating": 4.641484810106056,
    "downloads": 2558,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-716",
    "title": "Finan\u00e7as: Fundamentos e Pr\u00e1ticas",
    "author": "Stuart Russell",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4971,
    "pages": 353,
    "year": 2024,
    "rating": 4.98796745089496,
    "downloads": 3868,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-717",
    "title": "C\u00e1lculo II: Fundamentos e Pr\u00e1ticas",
    "author": "Martin Fowler",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1999,
    "pages": 456,
    "year": 2024,
    "rating": 4.6867720539356075,
    "downloads": 2013,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-filosofia-718",
    "title": "Manual de Algoritmos",
    "author": "Sommerville",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3296,
    "pages": 431,
    "year": 2024,
    "rating": 4.625232870767214,
    "downloads": 2878,
    "synopsis": "Uma obra abrangente de Sommerville que explora os princ\u00edpios fundamentais de Algoritmos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-719",
    "title": "Banco de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Chapman",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1518,
    "pages": 817,
    "year": 2021,
    "rating": 4.987416214446914,
    "downloads": 3197,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-direito-720",
    "title": "Manual de \u00c9tica Crist\u00e3",
    "author": "Guyton",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3178,
    "pages": 407,
    "year": 2021,
    "rating": 4.5418022668091655,
    "downloads": 3311,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de \u00c9tica Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-filosofia-721",
    "title": "Manual de Hermen\u00eautica",
    "author": "Martin Fowler",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3195,
    "pages": 506,
    "year": 2019,
    "rating": 4.928583988637352,
    "downloads": 442,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Hermen\u00eautica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-722",
    "title": "Manual de Finan\u00e7as no Lar",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 5145,
    "pages": 732,
    "year": 2024,
    "rating": 4.864080997940634,
    "downloads": 3834,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-723",
    "title": "Manual de \u00c9tica Crist\u00e3",
    "author": "Frank Netter",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3647,
    "pages": 843,
    "year": 2019,
    "rating": 4.977246201375243,
    "downloads": 1450,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de \u00c9tica Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-724",
    "title": "Hist\u00f3ria da Igreja: Fundamentos e Pr\u00e1ticas",
    "author": "Gregory Mankiw",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2815,
    "pages": 310,
    "year": 2018,
    "rating": 4.556910059849706,
    "downloads": 3687,
    "synopsis": "Uma obra abrangente de Gregory Mankiw que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-725",
    "title": "Fisiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Tom\u00e1s de Aquino",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3503,
    "pages": 789,
    "year": 2023,
    "rating": 4.986520526056009,
    "downloads": 4550,
    "synopsis": "Uma obra abrangente de Tom\u00e1s de Aquino que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-726",
    "title": "Manual de Exegese B\u00edblica",
    "author": "Karl Marx",
    "category": "academicos",
    "subcategory": "historia",
    "price": 2196,
    "pages": 343,
    "year": 2019,
    "rating": 4.811090968749383,
    "downloads": 4491,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-727",
    "title": "Manual de Econometria",
    "author": "Frank White",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5124,
    "pages": 749,
    "year": 2022,
    "rating": 4.971376543044534,
    "downloads": 802,
    "synopsis": "Uma obra abrangente de Frank White que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-728",
    "title": "Educa\u00e7\u00e3o de Filhos: Fundamentos e Pr\u00e1ticas",
    "author": "Frank White",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5116,
    "pages": 283,
    "year": 2021,
    "rating": 4.967144003349489,
    "downloads": 3570,
    "synopsis": "Uma obra abrangente de Frank White que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-729",
    "title": "Lideran\u00e7a Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Halliday",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 5301,
    "pages": 578,
    "year": 2019,
    "rating": 4.729012207066298,
    "downloads": 1758,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-730",
    "title": "Manual de Apolog\u00e9tica",
    "author": "John Bunyan",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 4675,
    "pages": 477,
    "year": 2021,
    "rating": 4.959141015443389,
    "downloads": 3931,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-731",
    "title": "Manual de Exegese B\u00edblica",
    "author": "Guyton",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2234,
    "pages": 494,
    "year": 2018,
    "rating": 4.983556366517807,
    "downloads": 3732,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-engenharia-732",
    "title": "Manual de Contabilidade",
    "author": "J.I. Packer",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1846,
    "pages": 535,
    "year": 2022,
    "rating": 4.792787946187601,
    "downloads": 4116,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-733",
    "title": "Vida em Fam\u00edlia: Fundamentos e Pr\u00e1ticas",
    "author": "Dietrich Bonhoeffer",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1649,
    "pages": 783,
    "year": 2019,
    "rating": 4.520833317192844,
    "downloads": 1070,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-734",
    "title": "Introdu\u00e7\u00e3o ao Direito: Fundamentos e Pr\u00e1ticas",
    "author": "Andrew Hunt",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1805,
    "pages": 368,
    "year": 2020,
    "rating": 4.812716545377132,
    "downloads": 1961,
    "synopsis": "Uma obra abrangente de Andrew Hunt que explora os princ\u00edpios fundamentais de Introdu\u00e7\u00e3o ao Direito.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-735",
    "title": "Lideran\u00e7a Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Carlos Feij\u00f3",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2577,
    "pages": 720,
    "year": 2020,
    "rating": 4.899124650064006,
    "downloads": 2570,
    "synopsis": "Uma obra abrangente de Carlos Feij\u00f3 que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-736",
    "title": "Hist\u00f3ria da Igreja: Fundamentos e Pr\u00e1ticas",
    "author": "Jo\u00e3o Calvino",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3701,
    "pages": 459,
    "year": 2022,
    "rating": 4.922610016173241,
    "downloads": 1381,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-filosofia-737",
    "title": "Manual de Termodin\u00e2mica",
    "author": "Frank White",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 2677,
    "pages": 634,
    "year": 2023,
    "rating": 4.719095462548542,
    "downloads": 534,
    "synopsis": "Uma obra abrangente de Frank White que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-738",
    "title": "Hist\u00f3ria da Igreja: Fundamentos e Pr\u00e1ticas",
    "author": "Thomas Cormen",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1899,
    "pages": 637,
    "year": 2020,
    "rating": 4.994136581782265,
    "downloads": 1555,
    "synopsis": "Uma obra abrangente de Thomas Cormen que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-medicina-739",
    "title": "Vida em Fam\u00edlia: Fundamentos e Pr\u00e1ticas",
    "author": "Louis Berkhof",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2230,
    "pages": 384,
    "year": 2020,
    "rating": 4.5132263753590385,
    "downloads": 4525,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-filosofia-740",
    "title": "Manual de Comunica\u00e7\u00e3o no Casamento",
    "author": "Renato Cardoso",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 2847,
    "pages": 382,
    "year": 2024,
    "rating": 4.689047277876207,
    "downloads": 2220,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Comunica\u00e7\u00e3o no Casamento.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-741",
    "title": "Manual de Redes de Computadores",
    "author": "Carlos Feij\u00f3",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5215,
    "pages": 835,
    "year": 2019,
    "rating": 4.850708882565815,
    "downloads": 3881,
    "synopsis": "Uma obra abrangente de Carlos Feij\u00f3 que explora os princ\u00edpios fundamentais de Redes de Computadores.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-filosofia-742",
    "title": "Direito Penal: Fundamentos e Pr\u00e1ticas",
    "author": "Wayne Grudem",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3251,
    "pages": 449,
    "year": 2020,
    "rating": 4.8592697728765435,
    "downloads": 1619,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-743",
    "title": "Macroeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Charles Sheldon",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 5237,
    "pages": 297,
    "year": 2021,
    "rating": 4.641036619796781,
    "downloads": 2785,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-744",
    "title": "Anatomia Humana: Fundamentos e Pr\u00e1ticas",
    "author": "Ad\u00e3o de Almeida",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1978,
    "pages": 610,
    "year": 2021,
    "rating": 4.511084337261353,
    "downloads": 2494,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-economia-745",
    "title": "Manual de Algoritmos",
    "author": "Renato Cardoso",
    "category": "academicos",
    "subcategory": "economia",
    "price": 2205,
    "pages": 705,
    "year": 2021,
    "rating": 4.852160090888531,
    "downloads": 160,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Algoritmos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-informatica-746",
    "title": "Sistemas Operacionais: Fundamentos e Pr\u00e1ticas",
    "author": "Harrison",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2394,
    "pages": 390,
    "year": 2018,
    "rating": 4.998867318183831,
    "downloads": 2774,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-747",
    "title": "Manual de Microeconomia",
    "author": "Adam Smith",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1857,
    "pages": 757,
    "year": 2020,
    "rating": 4.81389552851606,
    "downloads": 2567,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Microeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-748",
    "title": "Manual de Finan\u00e7as no Lar",
    "author": "Adam Smith",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5147,
    "pages": 300,
    "year": 2020,
    "rating": 4.581822568843792,
    "downloads": 3431,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-749",
    "title": "Manual de Vida de Ora\u00e7\u00e3o",
    "author": "Zeferino Capoco",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4410,
    "pages": 509,
    "year": 2018,
    "rating": 4.833777436625908,
    "downloads": 3620,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-economia-750",
    "title": "Manual de Termodin\u00e2mica",
    "author": "Andrew Hunt",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3242,
    "pages": 806,
    "year": 2019,
    "rating": 4.833238022824563,
    "downloads": 2682,
    "synopsis": "Uma obra abrangente de Andrew Hunt que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-751",
    "title": "Apolog\u00e9tica: Fundamentos e Pr\u00e1ticas",
    "author": "Rick Warren",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5457,
    "pages": 683,
    "year": 2020,
    "rating": 4.9281952612299325,
    "downloads": 4270,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-752",
    "title": "Manual de Comunica\u00e7\u00e3o no Casamento",
    "author": "R.C. Hibbeler",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2658,
    "pages": 432,
    "year": 2024,
    "rating": 4.884969656874725,
    "downloads": 3896,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Comunica\u00e7\u00e3o no Casamento.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-informatica-753",
    "title": "Manual de Discipulado",
    "author": "Gregory Mankiw",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3645,
    "pages": 438,
    "year": 2020,
    "rating": 4.668117180999515,
    "downloads": 4809,
    "synopsis": "Uma obra abrangente de Gregory Mankiw que explora os princ\u00edpios fundamentais de Discipulado.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-economia-754",
    "title": "Manual de Bioqu\u00edmica",
    "author": "Hal Varian",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3947,
    "pages": 444,
    "year": 2024,
    "rating": 4.736151976707588,
    "downloads": 4602,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de Bioqu\u00edmica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-755",
    "title": "Manual de Mec\u00e2nica Qu\u00e2ntica",
    "author": "J.I. Packer",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1821,
    "pages": 356,
    "year": 2019,
    "rating": 4.644319141347872,
    "downloads": 4478,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Mec\u00e2nica Qu\u00e2ntica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-756",
    "title": "Sistemas Operacionais: Fundamentos e Pr\u00e1ticas",
    "author": "R.C. Hibbeler",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3550,
    "pages": 582,
    "year": 2024,
    "rating": 4.631680790116207,
    "downloads": 3203,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-757",
    "title": "Manual de Apolog\u00e9tica",
    "author": "Rick Warren",
    "category": "academicos",
    "subcategory": "historia",
    "price": 3258,
    "pages": 277,
    "year": 2022,
    "rating": 4.993301189577116,
    "downloads": 4690,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-medicina-758",
    "title": "Manual de Finan\u00e7as no Lar",
    "author": "Jo\u00e3o Calvino",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2375,
    "pages": 600,
    "year": 2024,
    "rating": 4.8936674618205265,
    "downloads": 3464,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-medicina-759",
    "title": "Manual de C\u00e1lculo I",
    "author": "Hal Varian",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 5203,
    "pages": 724,
    "year": 2024,
    "rating": 4.74767985030752,
    "downloads": 4064,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-760",
    "title": "Macroeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Gregory Mankiw",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5443,
    "pages": 812,
    "year": 2021,
    "rating": 4.982570696201664,
    "downloads": 495,
    "synopsis": "Uma obra abrangente de Gregory Mankiw que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-filosofia-761",
    "title": "Vida de Ora\u00e7\u00e3o: Fundamentos e Pr\u00e1ticas",
    "author": "Robert C. Martin",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 2528,
    "pages": 437,
    "year": 2021,
    "rating": 4.660336011747893,
    "downloads": 234,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-762",
    "title": "Macroeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "J.I. Packer",
    "category": "academicos",
    "subcategory": "historia",
    "price": 3586,
    "pages": 430,
    "year": 2022,
    "rating": 4.945827730181655,
    "downloads": 3069,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-763",
    "title": "Manual de Sistemas Operacionais",
    "author": "James Stewart",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4925,
    "pages": 253,
    "year": 2022,
    "rating": 4.995291015373231,
    "downloads": 3631,
    "synopsis": "Uma obra abrangente de James Stewart que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-informatica-764",
    "title": "Exegese B\u00edblica: Fundamentos e Pr\u00e1ticas",
    "author": "James Stewart",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1648,
    "pages": 676,
    "year": 2020,
    "rating": 4.823696746140284,
    "downloads": 4539,
    "synopsis": "Uma obra abrangente de James Stewart que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-765",
    "title": "Manual de F\u00edsica Geral",
    "author": "James Stewart",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5325,
    "pages": 448,
    "year": 2019,
    "rating": 4.551555935386001,
    "downloads": 2128,
    "synopsis": "Uma obra abrangente de James Stewart que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-engenharia-766",
    "title": "Apolog\u00e9tica: Fundamentos e Pr\u00e1ticas",
    "author": "Andrew Hunt",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2708,
    "pages": 553,
    "year": 2019,
    "rating": 4.9381311555355065,
    "downloads": 2319,
    "synopsis": "Uma obra abrangente de Andrew Hunt que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-filosofia-767",
    "title": "Manual de Exegese B\u00edblica",
    "author": "Robbins",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 5332,
    "pages": 826,
    "year": 2024,
    "rating": 4.786821262651812,
    "downloads": 4628,
    "synopsis": "Uma obra abrangente de Robbins que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-768",
    "title": "Manual de Contabilidade",
    "author": "Andrew Hunt",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2211,
    "pages": 521,
    "year": 2018,
    "rating": 4.8579989880831835,
    "downloads": 238,
    "synopsis": "Uma obra abrangente de Andrew Hunt que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-769",
    "title": "Hist\u00f3ria da Igreja: Fundamentos e Pr\u00e1ticas",
    "author": "Charles Sheldon",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4858,
    "pages": 843,
    "year": 2019,
    "rating": 4.566000809316032,
    "downloads": 1769,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-770",
    "title": "Manual de C\u00e1lculo I",
    "author": "Tom\u00e1s de Aquino",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4413,
    "pages": 419,
    "year": 2019,
    "rating": 4.7150179596225055,
    "downloads": 2583,
    "synopsis": "Uma obra abrangente de Tom\u00e1s de Aquino que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-771",
    "title": "Termodin\u00e2mica: Fundamentos e Pr\u00e1ticas",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3734,
    "pages": 688,
    "year": 2022,
    "rating": 4.695700823584614,
    "downloads": 1352,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-historia-772",
    "title": "Banco de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Manuel Simas Santos",
    "category": "academicos",
    "subcategory": "historia",
    "price": 2524,
    "pages": 282,
    "year": 2024,
    "rating": 4.6822690879908455,
    "downloads": 1103,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-773",
    "title": "Anatomia Humana: Fundamentos e Pr\u00e1ticas",
    "author": "Robert C. Martin",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5232,
    "pages": 340,
    "year": 2024,
    "rating": 4.903524161963056,
    "downloads": 4578,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-774",
    "title": "Manual de Direito Penal",
    "author": "Tom\u00e1s de Aquino",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2333,
    "pages": 764,
    "year": 2021,
    "rating": 4.59794827176688,
    "downloads": 3330,
    "synopsis": "Uma obra abrangente de Tom\u00e1s de Aquino que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-medicina-775",
    "title": "Termodin\u00e2mica: Fundamentos e Pr\u00e1ticas",
    "author": "Robbins",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 5458,
    "pages": 743,
    "year": 2020,
    "rating": 4.8715420279646,
    "downloads": 1070,
    "synopsis": "Uma obra abrangente de Robbins que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-776",
    "title": "Macroeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Frank Netter",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4208,
    "pages": 336,
    "year": 2022,
    "rating": 4.6334659279080075,
    "downloads": 3445,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-777",
    "title": "Manual de Banco de Dados",
    "author": "Henry Cloud",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4272,
    "pages": 792,
    "year": 2024,
    "rating": 4.991613843638298,
    "downloads": 2569,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-778",
    "title": "Manual de Hist\u00f3ria da Igreja",
    "author": "Thomas Cormen",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3450,
    "pages": 516,
    "year": 2019,
    "rating": 4.983952739015195,
    "downloads": 3461,
    "synopsis": "Uma obra abrangente de Thomas Cormen que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-779",
    "title": "Macroeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Sommerville",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4471,
    "pages": 337,
    "year": 2018,
    "rating": 4.609841405895179,
    "downloads": 2159,
    "synopsis": "Uma obra abrangente de Sommerville que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-economia-780",
    "title": "Manual de Apolog\u00e9tica",
    "author": "Carlos Feij\u00f3",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1588,
    "pages": 462,
    "year": 2024,
    "rating": 4.6677086019053196,
    "downloads": 4493,
    "synopsis": "Uma obra abrangente de Carlos Feij\u00f3 que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-filosofia-781",
    "title": "Manual de Sistemas Operacionais",
    "author": "Olivier Blanchard",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 4308,
    "pages": 390,
    "year": 2023,
    "rating": 4.901575049838945,
    "downloads": 4787,
    "synopsis": "Uma obra abrangente de Olivier Blanchard que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-historia-782",
    "title": "Manual de Apolog\u00e9tica",
    "author": "Louis Berkhof",
    "category": "academicos",
    "subcategory": "historia",
    "price": 2974,
    "pages": 271,
    "year": 2018,
    "rating": 4.667910176539945,
    "downloads": 4537,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-783",
    "title": "Manual de Teologia Sistem\u00e1tica",
    "author": "Zeferino Capoco",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2967,
    "pages": 608,
    "year": 2023,
    "rating": 4.5109416106015985,
    "downloads": 410,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-784",
    "title": "Vida em Fam\u00edlia: Fundamentos e Pr\u00e1ticas",
    "author": "Frank Netter",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3723,
    "pages": 683,
    "year": 2023,
    "rating": 4.853600414523558,
    "downloads": 557,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-familia-785",
    "title": "Hist\u00f3ria da Igreja: Fundamentos e Pr\u00e1ticas",
    "author": "Cremildo Paca",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4262,
    "pages": 670,
    "year": 2023,
    "rating": 4.859505424816959,
    "downloads": 4280,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-economia-786",
    "title": "Contabilidade: Fundamentos e Pr\u00e1ticas",
    "author": "Timothy Keller",
    "category": "academicos",
    "subcategory": "economia",
    "price": 4575,
    "pages": 543,
    "year": 2021,
    "rating": 4.725758467846608,
    "downloads": 1302,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-787",
    "title": "C\u00e1lculo I: Fundamentos e Pr\u00e1ticas",
    "author": "Guyton",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1928,
    "pages": 441,
    "year": 2024,
    "rating": 4.73796021508659,
    "downloads": 165,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lLLXTPwufcddLhed.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-economia-788",
    "title": "Manual de Direito Civil",
    "author": "Rick Warren",
    "category": "academicos",
    "subcategory": "economia",
    "price": 4271,
    "pages": 590,
    "year": 2019,
    "rating": 4.7655644280298874,
    "downloads": 1665,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-789",
    "title": "Direito Penal: Fundamentos e Pr\u00e1ticas",
    "author": "Robert C. Martin",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5374,
    "pages": 828,
    "year": 2022,
    "rating": 4.7477146065784614,
    "downloads": 4786,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-790",
    "title": "Manual de F\u00edsica Geral",
    "author": "Charles Sheldon",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1545,
    "pages": 609,
    "year": 2020,
    "rating": 4.569674260052146,
    "downloads": 1822,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-medicina-791",
    "title": "Finan\u00e7as no Lar: Fundamentos e Pr\u00e1ticas",
    "author": "Carlos Feij\u00f3",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3015,
    "pages": 370,
    "year": 2019,
    "rating": 4.8793992590448845,
    "downloads": 1882,
    "synopsis": "Uma obra abrangente de Carlos Feij\u00f3 que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-792",
    "title": "Missiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Olivier Blanchard",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1769,
    "pages": 322,
    "year": 2019,
    "rating": 4.849277005370329,
    "downloads": 4834,
    "synopsis": "Uma obra abrangente de Olivier Blanchard que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-793",
    "title": "Manual de Direito Constitucional",
    "author": "Jo\u00e3o Calvino",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 4986,
    "pages": 652,
    "year": 2021,
    "rating": 4.767056114118399,
    "downloads": 3127,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Direito Constitucional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-filosofia-794",
    "title": "Estruturas de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Adam Smith",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 4921,
    "pages": 795,
    "year": 2022,
    "rating": 4.54027323867391,
    "downloads": 589,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Estruturas de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-795",
    "title": "Relacionamento Conjugal: Fundamentos e Pr\u00e1ticas",
    "author": "Louis Berkhof",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4700,
    "pages": 296,
    "year": 2021,
    "rating": 4.528245961845746,
    "downloads": 3430,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-informatica-796",
    "title": "Redes de Computadores: Fundamentos e Pr\u00e1ticas",
    "author": "Renato Cardoso",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 5099,
    "pages": 667,
    "year": 2023,
    "rating": 4.989014075905931,
    "downloads": 561,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Redes de Computadores.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-direito-797",
    "title": "Manual de Mec\u00e2nica Qu\u00e2ntica",
    "author": "Cremildo Paca",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3282,
    "pages": 806,
    "year": 2023,
    "rating": 4.794850655944882,
    "downloads": 3590,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Mec\u00e2nica Qu\u00e2ntica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/CiyRruJplXiTYwuE.png",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-filosofia-798",
    "title": "Manual de Anatomia Humana",
    "author": "Renato Cardoso",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 4213,
    "pages": 548,
    "year": 2024,
    "rating": 4.668054280187535,
    "downloads": 1091,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-799",
    "title": "Manual de Educa\u00e7\u00e3o de Filhos",
    "author": "Carlos Feij\u00f3",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3986,
    "pages": 377,
    "year": 2024,
    "rating": 4.638075346484435,
    "downloads": 903,
    "synopsis": "Uma obra abrangente de Carlos Feij\u00f3 que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-historia-800",
    "title": "Manual de Apolog\u00e9tica",
    "author": "Stuart Russell",
    "category": "academicos",
    "subcategory": "historia",
    "price": 4316,
    "pages": 359,
    "year": 2024,
    "rating": 4.887774812278735,
    "downloads": 3042,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-direito-801",
    "title": "Exegese B\u00edblica: Fundamentos e Pr\u00e1ticas",
    "author": "Agostinho",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2509,
    "pages": 613,
    "year": 2024,
    "rating": 4.744981031778145,
    "downloads": 182,
    "synopsis": "Uma obra abrangente de Agostinho que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-filosofia-802",
    "title": "Missiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Chapman",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 4178,
    "pages": 426,
    "year": 2024,
    "rating": 4.8192881249333555,
    "downloads": 1431,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-803",
    "title": "Manual de Direito Civil",
    "author": "Thomas Cormen",
    "category": "academicos",
    "subcategory": "economia",
    "price": 4518,
    "pages": 341,
    "year": 2023,
    "rating": 4.6261527757172045,
    "downloads": 65,
    "synopsis": "Uma obra abrangente de Thomas Cormen que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-804",
    "title": "Termodin\u00e2mica: Fundamentos e Pr\u00e1ticas",
    "author": "James Stewart",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4033,
    "pages": 649,
    "year": 2018,
    "rating": 4.883572218095404,
    "downloads": 3920,
    "synopsis": "Uma obra abrangente de James Stewart que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-805",
    "title": "Manual de Direito Constitucional",
    "author": "Tom\u00e1s de Aquino",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5037,
    "pages": 377,
    "year": 2019,
    "rating": 4.689141022606637,
    "downloads": 2577,
    "synopsis": "Uma obra abrangente de Tom\u00e1s de Aquino que explora os princ\u00edpios fundamentais de Direito Constitucional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-economia-806",
    "title": "Exegese B\u00edblica: Fundamentos e Pr\u00e1ticas",
    "author": "Charles Sheldon",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3086,
    "pages": 789,
    "year": 2020,
    "rating": 4.7045222356560465,
    "downloads": 1746,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-informatica-807",
    "title": "Finan\u00e7as no Lar: Fundamentos e Pr\u00e1ticas",
    "author": "Ad\u00e3o de Almeida",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3457,
    "pages": 386,
    "year": 2024,
    "rating": 4.887420008386747,
    "downloads": 2691,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-808",
    "title": "Estruturas de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Dietrich Bonhoeffer",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2583,
    "pages": 321,
    "year": 2020,
    "rating": 4.660343826967703,
    "downloads": 2756,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Estruturas de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-809",
    "title": "Termodin\u00e2mica: Fundamentos e Pr\u00e1ticas",
    "author": "Robert C. Martin",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3338,
    "pages": 298,
    "year": 2022,
    "rating": 4.914855388670257,
    "downloads": 4636,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-810",
    "title": "Mec\u00e2nica Qu\u00e2ntica: Fundamentos e Pr\u00e1ticas",
    "author": "Henry Cloud",
    "category": "academicos",
    "subcategory": "direito",
    "price": 5224,
    "pages": 293,
    "year": 2023,
    "rating": 4.870707719756846,
    "downloads": 942,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de Mec\u00e2nica Qu\u00e2ntica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-economia-811",
    "title": "Bioqu\u00edmica: Fundamentos e Pr\u00e1ticas",
    "author": "Robert C. Martin",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1831,
    "pages": 664,
    "year": 2019,
    "rating": 4.65026991968973,
    "downloads": 2196,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de Bioqu\u00edmica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-812",
    "title": "Manual de Hermen\u00eautica",
    "author": "Frank Netter",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3205,
    "pages": 314,
    "year": 2020,
    "rating": 4.9425038759330455,
    "downloads": 3926,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de Hermen\u00eautica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-medicina-813",
    "title": "Sistemas Operacionais: Fundamentos e Pr\u00e1ticas",
    "author": "Manuel Simas Santos",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3470,
    "pages": 665,
    "year": 2021,
    "rating": 4.7298446113531964,
    "downloads": 3907,
    "synopsis": "Uma obra abrangente de Manuel Simas Santos que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-filosofia-814",
    "title": "Manual de Direito Penal",
    "author": "Carlos Feij\u00f3",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 5313,
    "pages": 504,
    "year": 2020,
    "rating": 4.944372684191944,
    "downloads": 4731,
    "synopsis": "Uma obra abrangente de Carlos Feij\u00f3 que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-informatica-815",
    "title": "Lideran\u00e7a Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Olivier Blanchard",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3964,
    "pages": 579,
    "year": 2022,
    "rating": 4.7824277415809,
    "downloads": 4650,
    "synopsis": "Uma obra abrangente de Olivier Blanchard que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-familia-816",
    "title": "Teologia Sistem\u00e1tica: Fundamentos e Pr\u00e1ticas",
    "author": "Charles Sheldon",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4364,
    "pages": 506,
    "year": 2019,
    "rating": 4.586202947083718,
    "downloads": 3524,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-informatica-817",
    "title": "Manual de Direito Administrativo",
    "author": "James Stewart",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 5006,
    "pages": 568,
    "year": 2022,
    "rating": 4.77801972983829,
    "downloads": 425,
    "synopsis": "Uma obra abrangente de James Stewart que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-818",
    "title": "C\u00e1lculo II: Fundamentos e Pr\u00e1ticas",
    "author": "Zeferino Capoco",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2569,
    "pages": 699,
    "year": 2022,
    "rating": 4.947860639796512,
    "downloads": 2490,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-819",
    "title": "Teologia Sistem\u00e1tica: Fundamentos e Pr\u00e1ticas",
    "author": "Guyton",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2461,
    "pages": 398,
    "year": 2018,
    "rating": 4.611932496387112,
    "downloads": 2673,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-820",
    "title": "Hermen\u00eautica: Fundamentos e Pr\u00e1ticas",
    "author": "Henry Cloud",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3488,
    "pages": 582,
    "year": 2023,
    "rating": 4.724762059516415,
    "downloads": 4915,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de Hermen\u00eautica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-821",
    "title": "Vida em Fam\u00edlia: Fundamentos e Pr\u00e1ticas",
    "author": "Adam Smith",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4015,
    "pages": 686,
    "year": 2021,
    "rating": 4.567995012981845,
    "downloads": 4453,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Vida em Fam\u00edlia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-filosofia-822",
    "title": "Manual de Apolog\u00e9tica",
    "author": "R.C. Hibbeler",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3500,
    "pages": 654,
    "year": 2021,
    "rating": 4.794743167909763,
    "downloads": 3146,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-823",
    "title": "Contabilidade: Fundamentos e Pr\u00e1ticas",
    "author": "Martin Fowler",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2794,
    "pages": 292,
    "year": 2020,
    "rating": 4.5178619834990466,
    "downloads": 2821,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-824",
    "title": "Vida de Ora\u00e7\u00e3o: Fundamentos e Pr\u00e1ticas",
    "author": "Andrew Hunt",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4903,
    "pages": 473,
    "year": 2024,
    "rating": 4.794900597794433,
    "downloads": 1774,
    "synopsis": "Uma obra abrangente de Andrew Hunt que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-825",
    "title": "Manual de Fisiologia",
    "author": "Sommerville",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 5244,
    "pages": 513,
    "year": 2019,
    "rating": 4.8538572393614965,
    "downloads": 4220,
    "synopsis": "Uma obra abrangente de Sommerville que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-826",
    "title": "Manual de Bioqu\u00edmica",
    "author": "R.C. Hibbeler",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3979,
    "pages": 487,
    "year": 2021,
    "rating": 4.837073781382729,
    "downloads": 4106,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Bioqu\u00edmica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-filosofia-827",
    "title": "Hist\u00f3ria da Igreja: Fundamentos e Pr\u00e1ticas",
    "author": "Martin Fowler",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3875,
    "pages": 763,
    "year": 2023,
    "rating": 4.919612931199905,
    "downloads": 1122,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-engenharia-828",
    "title": "C\u00e1lculo II: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Ezzo",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1966,
    "pages": 668,
    "year": 2021,
    "rating": 4.876547995793269,
    "downloads": 4954,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-medicina-829",
    "title": "Mec\u00e2nica Qu\u00e2ntica: Fundamentos e Pr\u00e1ticas",
    "author": "Agostinho",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 4893,
    "pages": 524,
    "year": 2019,
    "rating": 4.750413834766008,
    "downloads": 938,
    "synopsis": "Uma obra abrangente de Agostinho que explora os princ\u00edpios fundamentais de Mec\u00e2nica Qu\u00e2ntica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-informatica-830",
    "title": "Manual de Teologia Sistem\u00e1tica",
    "author": "Henry Cloud",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1504,
    "pages": 499,
    "year": 2023,
    "rating": 4.867716885779807,
    "downloads": 1789,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-831",
    "title": "Termodin\u00e2mica: Fundamentos e Pr\u00e1ticas",
    "author": "R.C. Hibbeler",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3836,
    "pages": 262,
    "year": 2023,
    "rating": 4.50633240820281,
    "downloads": 4572,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-familia-832",
    "title": "Contabilidade: Fundamentos e Pr\u00e1ticas",
    "author": "Louis Berkhof",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4167,
    "pages": 560,
    "year": 2024,
    "rating": 4.666817581771378,
    "downloads": 3763,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-833",
    "title": "Hermen\u00eautica: Fundamentos e Pr\u00e1ticas",
    "author": "Sommerville",
    "category": "academicos",
    "subcategory": "historia",
    "price": 2138,
    "pages": 409,
    "year": 2021,
    "rating": 4.713910937929706,
    "downloads": 1563,
    "synopsis": "Uma obra abrangente de Sommerville que explora os princ\u00edpios fundamentais de Hermen\u00eautica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-834",
    "title": "Apolog\u00e9tica: Fundamentos e Pr\u00e1ticas",
    "author": "Harrison",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2193,
    "pages": 844,
    "year": 2022,
    "rating": 4.884729370365214,
    "downloads": 1351,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-835",
    "title": "Manual de Sistemas Operacionais",
    "author": "Guyton",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1563,
    "pages": 450,
    "year": 2024,
    "rating": 4.963143231310951,
    "downloads": 4465,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-direito-836",
    "title": "Macroeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "John Bunyan",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3768,
    "pages": 399,
    "year": 2022,
    "rating": 4.584297400500381,
    "downloads": 2838,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OSUfynSeZawGJTBs.jpeg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-837",
    "title": "Manual de Macroeconomia",
    "author": "Cremildo Paca",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4751,
    "pages": 779,
    "year": 2021,
    "rating": 4.986953234557927,
    "downloads": 1885,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-838",
    "title": "Manual de Fisiologia",
    "author": "Jo\u00e3o Calvino",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1544,
    "pages": 301,
    "year": 2019,
    "rating": 4.677975734438453,
    "downloads": 2865,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-839",
    "title": "Introdu\u00e7\u00e3o ao Direito: Fundamentos e Pr\u00e1ticas",
    "author": "Hal Varian",
    "category": "academicos",
    "subcategory": "historia",
    "price": 4166,
    "pages": 657,
    "year": 2023,
    "rating": 4.968051059795974,
    "downloads": 2582,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de Introdu\u00e7\u00e3o ao Direito.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-840",
    "title": "Vida de Ora\u00e7\u00e3o: Fundamentos e Pr\u00e1ticas",
    "author": "Renato Cardoso",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2011,
    "pages": 551,
    "year": 2024,
    "rating": 4.5540579756783295,
    "downloads": 551,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-841",
    "title": "C\u00e1lculo II: Fundamentos e Pr\u00e1ticas",
    "author": "Sommerville",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3045,
    "pages": 715,
    "year": 2019,
    "rating": 4.860154597012688,
    "downloads": 3993,
    "synopsis": "Uma obra abrangente de Sommerville que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-historia-842",
    "title": "Manual de C\u00e1lculo I",
    "author": "Cremildo Paca",
    "category": "academicos",
    "subcategory": "historia",
    "price": 3784,
    "pages": 331,
    "year": 2021,
    "rating": 4.956295620682166,
    "downloads": 931,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-843",
    "title": "Termodin\u00e2mica: Fundamentos e Pr\u00e1ticas",
    "author": "Stuart Russell",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4041,
    "pages": 569,
    "year": 2022,
    "rating": 4.888731947988753,
    "downloads": 2043,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-medicina-844",
    "title": "Manual de F\u00edsica Geral",
    "author": "J.I. Packer",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 4677,
    "pages": 519,
    "year": 2024,
    "rating": 4.640205261783186,
    "downloads": 354,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-filosofia-845",
    "title": "Manual de Relacionamento Conjugal",
    "author": "Wayne Grudem",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1920,
    "pages": 511,
    "year": 2019,
    "rating": 4.500762550235132,
    "downloads": 212,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-846",
    "title": "Exegese B\u00edblica: Fundamentos e Pr\u00e1ticas",
    "author": "Cremildo Paca",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4741,
    "pages": 670,
    "year": 2019,
    "rating": 4.739443047059571,
    "downloads": 654,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-medicina-847",
    "title": "Manual de Sistemas Operacionais",
    "author": "Wayne Grudem",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2883,
    "pages": 803,
    "year": 2022,
    "rating": 4.756034057133711,
    "downloads": 1423,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-direito-848",
    "title": "Lideran\u00e7a Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Adam Smith",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3295,
    "pages": 711,
    "year": 2020,
    "rating": 4.597555950393002,
    "downloads": 3610,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OSUfynSeZawGJTBs.jpeg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-849",
    "title": "Manual de Redes de Computadores",
    "author": "Olivier Blanchard",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5185,
    "pages": 834,
    "year": 2020,
    "rating": 4.95254502138946,
    "downloads": 3243,
    "synopsis": "Uma obra abrangente de Olivier Blanchard que explora os princ\u00edpios fundamentais de Redes de Computadores.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-informatica-850",
    "title": "Teologia Sistem\u00e1tica: Fundamentos e Pr\u00e1ticas",
    "author": "Gregory Mankiw",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2363,
    "pages": 754,
    "year": 2019,
    "rating": 4.609129487027395,
    "downloads": 51,
    "synopsis": "Uma obra abrangente de Gregory Mankiw que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-851",
    "title": "C\u00e1lculo I: Fundamentos e Pr\u00e1ticas",
    "author": "Rick Warren",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 4666,
    "pages": 737,
    "year": 2024,
    "rating": 4.803309528234135,
    "downloads": 4921,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-852",
    "title": "Manual de Termodin\u00e2mica",
    "author": "R.C. Hibbeler",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 5497,
    "pages": 676,
    "year": 2023,
    "rating": 4.709849056352178,
    "downloads": 2325,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-medicina-853",
    "title": "Manual de Vida de Ora\u00e7\u00e3o",
    "author": "Jo\u00e3o Calvino",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2642,
    "pages": 321,
    "year": 2022,
    "rating": 4.616077702402569,
    "downloads": 2061,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-economia-854",
    "title": "Manual de Fisiologia",
    "author": "Henry Cloud",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1890,
    "pages": 623,
    "year": 2018,
    "rating": 4.9148177180618635,
    "downloads": 1712,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-855",
    "title": "Manual de Anatomia Humana",
    "author": "Zeferino Capoco",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2209,
    "pages": 659,
    "year": 2020,
    "rating": 4.67948255953607,
    "downloads": 470,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-856",
    "title": "Fisiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Ezzo",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3892,
    "pages": 737,
    "year": 2023,
    "rating": 4.98834529084513,
    "downloads": 1886,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-filosofia-857",
    "title": "Manual de C\u00e1lculo II",
    "author": "Martin Fowler",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3521,
    "pages": 715,
    "year": 2020,
    "rating": 4.564694641348665,
    "downloads": 1721,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-858",
    "title": "Manual de Patologia",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2032,
    "pages": 420,
    "year": 2019,
    "rating": 4.976600745989317,
    "downloads": 1326,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Patologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-familia-859",
    "title": "Manual de Educa\u00e7\u00e3o de Filhos",
    "author": "Rick Warren",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2854,
    "pages": 370,
    "year": 2020,
    "rating": 4.943063180711867,
    "downloads": 308,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-860",
    "title": "C\u00e1lculo II: Fundamentos e Pr\u00e1ticas",
    "author": "Jo\u00e3o Calvino",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1610,
    "pages": 631,
    "year": 2020,
    "rating": 4.763325889813687,
    "downloads": 1030,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-861",
    "title": "Introdu\u00e7\u00e3o ao Direito: Fundamentos e Pr\u00e1ticas",
    "author": "Agostinho",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3068,
    "pages": 361,
    "year": 2022,
    "rating": 4.8877564861923855,
    "downloads": 1535,
    "synopsis": "Uma obra abrangente de Agostinho que explora os princ\u00edpios fundamentais de Introdu\u00e7\u00e3o ao Direito.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-862",
    "title": "Manual de Comunica\u00e7\u00e3o no Casamento",
    "author": "Louis Berkhof",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3404,
    "pages": 619,
    "year": 2021,
    "rating": 4.510496868555845,
    "downloads": 181,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Comunica\u00e7\u00e3o no Casamento.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-863",
    "title": "Finan\u00e7as: Fundamentos e Pr\u00e1ticas",
    "author": "Cremildo Paca",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2607,
    "pages": 480,
    "year": 2022,
    "rating": 4.8607230842912035,
    "downloads": 3996,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-864",
    "title": "Manual de Banco de Dados",
    "author": "Renato Cardoso",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5459,
    "pages": 611,
    "year": 2018,
    "rating": 4.5624481152532415,
    "downloads": 1184,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-historia-865",
    "title": "Contabilidade: Fundamentos e Pr\u00e1ticas",
    "author": "Ad\u00e3o de Almeida",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1509,
    "pages": 671,
    "year": 2018,
    "rating": 4.9962944035876875,
    "downloads": 567,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-historia-866",
    "title": "C\u00e1lculo II: Fundamentos e Pr\u00e1ticas",
    "author": "Adam Smith",
    "category": "academicos",
    "subcategory": "historia",
    "price": 2643,
    "pages": 701,
    "year": 2022,
    "rating": 4.79272081683371,
    "downloads": 3985,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-867",
    "title": "Vida de Ora\u00e7\u00e3o: Fundamentos e Pr\u00e1ticas",
    "author": "Gregory Mankiw",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2217,
    "pages": 527,
    "year": 2024,
    "rating": 4.545928126994673,
    "downloads": 1110,
    "synopsis": "Uma obra abrangente de Gregory Mankiw que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-engenharia-868",
    "title": "Manual de Estruturas de Dados",
    "author": "Rick Warren",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3798,
    "pages": 381,
    "year": 2023,
    "rating": 4.764397464513657,
    "downloads": 2789,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de Estruturas de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-engenharia-869",
    "title": "Manual de Banco de Dados",
    "author": "Gary Chapman",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2108,
    "pages": 454,
    "year": 2018,
    "rating": 4.989705914817865,
    "downloads": 4486,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-medicina-870",
    "title": "Manual de Direito Civil",
    "author": "Wayne Grudem",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2666,
    "pages": 386,
    "year": 2023,
    "rating": 4.87378579335427,
    "downloads": 2441,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-economia-871",
    "title": "Manual de \u00c9tica Crist\u00e3",
    "author": "Frank White",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3918,
    "pages": 562,
    "year": 2020,
    "rating": 4.8465874998048,
    "downloads": 3130,
    "synopsis": "Uma obra abrangente de Frank White que explora os princ\u00edpios fundamentais de \u00c9tica Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-medicina-872",
    "title": "Manual de Direito Civil",
    "author": "Ant\u00f3nio Cascais",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2686,
    "pages": 770,
    "year": 2024,
    "rating": 4.65708357902981,
    "downloads": 985,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-informatica-873",
    "title": "Manual de Exegese B\u00edblica",
    "author": "Gregory Mankiw",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3853,
    "pages": 404,
    "year": 2019,
    "rating": 4.5767106098560015,
    "downloads": 3722,
    "synopsis": "Uma obra abrangente de Gregory Mankiw que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-medicina-874",
    "title": "Manual de Exegese B\u00edblica",
    "author": "R.C. Hibbeler",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1558,
    "pages": 254,
    "year": 2023,
    "rating": 4.826171219971097,
    "downloads": 4611,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-875",
    "title": "Banco de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Cremildo Paca",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1992,
    "pages": 713,
    "year": 2018,
    "rating": 4.673427643579055,
    "downloads": 1744,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-medicina-876",
    "title": "Manual de Fisiologia",
    "author": "Timothy Keller",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 4894,
    "pages": 578,
    "year": 2022,
    "rating": 4.864340742687105,
    "downloads": 4504,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-877",
    "title": "Manual de Microeconomia",
    "author": "Karl Marx",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 5118,
    "pages": 831,
    "year": 2022,
    "rating": 4.666957200285331,
    "downloads": 454,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Microeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-878",
    "title": "Manual de Direito Civil",
    "author": "Andrew Hunt",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 5187,
    "pages": 822,
    "year": 2021,
    "rating": 4.78156881470364,
    "downloads": 2200,
    "synopsis": "Uma obra abrangente de Andrew Hunt que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-879",
    "title": "Manual de Algoritmos",
    "author": "Wayne Grudem",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3476,
    "pages": 692,
    "year": 2018,
    "rating": 4.668968493367753,
    "downloads": 1876,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Algoritmos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-880",
    "title": "Manual de Banco de Dados",
    "author": "Tom\u00e1s de Aquino",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 5023,
    "pages": 726,
    "year": 2020,
    "rating": 4.5676008982595855,
    "downloads": 2478,
    "synopsis": "Uma obra abrangente de Tom\u00e1s de Aquino que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-881",
    "title": "Manual de Exegese B\u00edblica",
    "author": "Jo\u00e3o Calvino",
    "category": "academicos",
    "subcategory": "historia",
    "price": 3098,
    "pages": 399,
    "year": 2021,
    "rating": 4.944558983488692,
    "downloads": 2329,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-filosofia-882",
    "title": "Manual de Bioqu\u00edmica",
    "author": "Stuart Russell",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1887,
    "pages": 284,
    "year": 2024,
    "rating": 4.59326278946512,
    "downloads": 2114,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Bioqu\u00edmica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-883",
    "title": "Manual de Hist\u00f3ria da Igreja",
    "author": "Cremildo Paca",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2197,
    "pages": 652,
    "year": 2018,
    "rating": 4.6786871372835295,
    "downloads": 428,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-884",
    "title": "Educa\u00e7\u00e3o de Filhos: Fundamentos e Pr\u00e1ticas",
    "author": "Halliday",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2589,
    "pages": 837,
    "year": 2021,
    "rating": 4.567931363880611,
    "downloads": 451,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-filosofia-885",
    "title": "Manual de F\u00edsica Geral",
    "author": "R.C. Hibbeler",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1976,
    "pages": 744,
    "year": 2021,
    "rating": 4.914466143672359,
    "downloads": 2785,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-886",
    "title": "Econometria: Fundamentos e Pr\u00e1ticas",
    "author": "Guyton",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3558,
    "pages": 753,
    "year": 2024,
    "rating": 4.6716383831055985,
    "downloads": 3342,
    "synopsis": "Uma obra abrangente de Guyton que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-informatica-887",
    "title": "Anatomia Humana: Fundamentos e Pr\u00e1ticas",
    "author": "Stuart Russell",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1978,
    "pages": 586,
    "year": 2020,
    "rating": 4.781239892408852,
    "downloads": 4573,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-filosofia-888",
    "title": "Teologia Sistem\u00e1tica: Fundamentos e Pr\u00e1ticas",
    "author": "Halliday",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 4769,
    "pages": 590,
    "year": 2020,
    "rating": 4.963268044083391,
    "downloads": 2302,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-889",
    "title": "Fisiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Halliday",
    "category": "academicos",
    "subcategory": "direito",
    "price": 5127,
    "pages": 388,
    "year": 2023,
    "rating": 4.589989045264485,
    "downloads": 1732,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lLLXTPwufcddLhed.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-890",
    "title": "Manual de Algoritmos",
    "author": "Ad\u00e3o de Almeida",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3845,
    "pages": 614,
    "year": 2022,
    "rating": 4.634367816072859,
    "downloads": 1876,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Algoritmos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-891",
    "title": "Manual de Missiologia",
    "author": "Hal Varian",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2706,
    "pages": 255,
    "year": 2019,
    "rating": 4.965986582042576,
    "downloads": 1459,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-892",
    "title": "Microeconomia: Fundamentos e Pr\u00e1ticas",
    "author": "Renato Cardoso",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4163,
    "pages": 796,
    "year": 2020,
    "rating": 4.887581879921737,
    "downloads": 2761,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Microeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-893",
    "title": "Farmacologia: Fundamentos e Pr\u00e1ticas",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3848,
    "pages": 657,
    "year": 2023,
    "rating": 4.781776802854065,
    "downloads": 3274,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Farmacologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-direito-894",
    "title": "Vida de Ora\u00e7\u00e3o: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Chapman",
    "category": "academicos",
    "subcategory": "direito",
    "price": 5204,
    "pages": 436,
    "year": 2019,
    "rating": 4.952131241295799,
    "downloads": 1846,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-895",
    "title": "Farmacologia: Fundamentos e Pr\u00e1ticas",
    "author": "Ant\u00f3nio Cascais",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2954,
    "pages": 733,
    "year": 2024,
    "rating": 4.850575971466056,
    "downloads": 1478,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de Farmacologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-896",
    "title": "Direito Civil: Fundamentos e Pr\u00e1ticas",
    "author": "Hal Varian",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2964,
    "pages": 492,
    "year": 2024,
    "rating": 4.92141567105607,
    "downloads": 4635,
    "synopsis": "Uma obra abrangente de Hal Varian que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-897",
    "title": "Manual de Finan\u00e7as",
    "author": "Robert C. Martin",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1949,
    "pages": 803,
    "year": 2018,
    "rating": 4.96805536248857,
    "downloads": 2562,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-898",
    "title": "C\u00e1lculo I: Fundamentos e Pr\u00e1ticas",
    "author": "Charles Sheldon",
    "category": "academicos",
    "subcategory": "direito",
    "price": 4787,
    "pages": 403,
    "year": 2022,
    "rating": 4.5695500678296606,
    "downloads": 1866,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-medicina-899",
    "title": "Manual de Hist\u00f3ria da Igreja",
    "author": "Rick Warren",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2388,
    "pages": 416,
    "year": 2020,
    "rating": 4.812253850014369,
    "downloads": 338,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-900",
    "title": "Manual de Vida de Ora\u00e7\u00e3o",
    "author": "Henry Cloud",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4146,
    "pages": 474,
    "year": 2021,
    "rating": 4.7156608222223815,
    "downloads": 2197,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-filosofia-901",
    "title": "Manual de Macroeconomia",
    "author": "Adam Smith",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1576,
    "pages": 411,
    "year": 2024,
    "rating": 4.746185712353803,
    "downloads": 3611,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Macroeconomia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-economia-902",
    "title": "Banco de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Frank Netter",
    "category": "academicos",
    "subcategory": "economia",
    "price": 4005,
    "pages": 497,
    "year": 2023,
    "rating": 4.6867444319382745,
    "downloads": 3024,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-903",
    "title": "Manual de Relacionamento Conjugal",
    "author": "Ad\u00e3o de Almeida",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2894,
    "pages": 767,
    "year": 2022,
    "rating": 4.91860754172069,
    "downloads": 4075,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-historia-904",
    "title": "Finan\u00e7as no Lar: Fundamentos e Pr\u00e1ticas",
    "author": "Sommerville",
    "category": "academicos",
    "subcategory": "historia",
    "price": 3733,
    "pages": 648,
    "year": 2022,
    "rating": 4.963447417525634,
    "downloads": 4527,
    "synopsis": "Uma obra abrangente de Sommerville que explora os princ\u00edpios fundamentais de Finan\u00e7as no Lar.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-informatica-905",
    "title": "Manual de Direito Penal",
    "author": "Renato Cardoso",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3432,
    "pages": 540,
    "year": 2023,
    "rating": 4.675752015178844,
    "downloads": 3112,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-906",
    "title": "Finan\u00e7as: Fundamentos e Pr\u00e1ticas",
    "author": "Sommerville",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3983,
    "pages": 742,
    "year": 2019,
    "rating": 4.622791308434012,
    "downloads": 74,
    "synopsis": "Uma obra abrangente de Sommerville que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-teologia-907",
    "title": "Finan\u00e7as: Fundamentos e Pr\u00e1ticas",
    "author": "Frank White",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4668,
    "pages": 616,
    "year": 2018,
    "rating": 4.976773564978941,
    "downloads": 3643,
    "synopsis": "Uma obra abrangente de Frank White que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-filosofia-908",
    "title": "Manual de C\u00e1lculo I",
    "author": "Karl Marx",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3314,
    "pages": 528,
    "year": 2018,
    "rating": 4.936641542930886,
    "downloads": 525,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-909",
    "title": "C\u00e1lculo I: Fundamentos e Pr\u00e1ticas",
    "author": "Cremildo Paca",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3023,
    "pages": 672,
    "year": 2021,
    "rating": 4.698369550175234,
    "downloads": 3485,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-910",
    "title": "Manual de Apolog\u00e9tica",
    "author": "Robbins",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3480,
    "pages": 259,
    "year": 2024,
    "rating": 4.858378989688223,
    "downloads": 1624,
    "synopsis": "Uma obra abrangente de Robbins que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-filosofia-911",
    "title": "Manual de Lideran\u00e7a Crist\u00e3",
    "author": "Charles Sheldon",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3344,
    "pages": 270,
    "year": 2022,
    "rating": 4.676119953479313,
    "downloads": 2462,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-912",
    "title": "Missiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Adam Smith",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4225,
    "pages": 823,
    "year": 2020,
    "rating": 4.857343653307577,
    "downloads": 1386,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-913",
    "title": "Manual de Direito Penal",
    "author": "Ad\u00e3o de Almeida",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3864,
    "pages": 314,
    "year": 2022,
    "rating": 4.981327706098604,
    "downloads": 4679,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-914",
    "title": "Manual de Termodin\u00e2mica",
    "author": "Halliday",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 4338,
    "pages": 339,
    "year": 2023,
    "rating": 4.604373665731138,
    "downloads": 2341,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-915",
    "title": "Manual de Hermen\u00eautica",
    "author": "Harrison",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3019,
    "pages": 810,
    "year": 2018,
    "rating": 4.530502999479891,
    "downloads": 3405,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Hermen\u00eautica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-916",
    "title": "Manual de Teologia Sistem\u00e1tica",
    "author": "J.I. Packer",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2272,
    "pages": 815,
    "year": 2020,
    "rating": 4.67067818557242,
    "downloads": 3803,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-familia-917",
    "title": "C\u00e1lculo I: Fundamentos e Pr\u00e1ticas",
    "author": "Stuart Russell",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 5109,
    "pages": 791,
    "year": 2019,
    "rating": 4.724729248845736,
    "downloads": 2410,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-vida-crista-918",
    "title": "Manual de Sistemas Operacionais",
    "author": "Martin Fowler",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3566,
    "pages": 428,
    "year": 2019,
    "rating": 4.73385788388587,
    "downloads": 1022,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-919",
    "title": "Banco de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Wayne Grudem",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2418,
    "pages": 637,
    "year": 2022,
    "rating": 4.880843443575399,
    "downloads": 815,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-920",
    "title": "Sistemas Operacionais: Fundamentos e Pr\u00e1ticas",
    "author": "J.I. Packer",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3614,
    "pages": 769,
    "year": 2018,
    "rating": 4.743228146108112,
    "downloads": 2205,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-medicina-921",
    "title": "Manual de Farmacologia",
    "author": "Ad\u00e3o de Almeida",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 4636,
    "pages": 665,
    "year": 2019,
    "rating": 4.977753616372812,
    "downloads": 4762,
    "synopsis": "Uma obra abrangente de Ad\u00e3o de Almeida que explora os princ\u00edpios fundamentais de Farmacologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-filosofia-922",
    "title": "Manual de Contabilidade",
    "author": "Carlos Feij\u00f3",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 1742,
    "pages": 628,
    "year": 2020,
    "rating": 4.54531577343695,
    "downloads": 4274,
    "synopsis": "Uma obra abrangente de Carlos Feij\u00f3 que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-923",
    "title": "Apolog\u00e9tica: Fundamentos e Pr\u00e1ticas",
    "author": "Stuart Russell",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1531,
    "pages": 468,
    "year": 2020,
    "rating": 4.844987869127457,
    "downloads": 753,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-924",
    "title": "Hermen\u00eautica: Fundamentos e Pr\u00e1ticas",
    "author": "Andrew Hunt",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1858,
    "pages": 581,
    "year": 2018,
    "rating": 4.585042317810941,
    "downloads": 3429,
    "synopsis": "Uma obra abrangente de Andrew Hunt que explora os princ\u00edpios fundamentais de Hermen\u00eautica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-informatica-925",
    "title": "Manual de C\u00e1lculo II",
    "author": "Zeferino Capoco",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 4092,
    "pages": 259,
    "year": 2020,
    "rating": 4.78672897713688,
    "downloads": 1507,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-926",
    "title": "Termodin\u00e2mica: Fundamentos e Pr\u00e1ticas",
    "author": "Adam Smith",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3500,
    "pages": 782,
    "year": 2022,
    "rating": 4.6682382771328115,
    "downloads": 3321,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-927",
    "title": "Manual de Teologia Sistem\u00e1tica",
    "author": "John Bunyan",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2074,
    "pages": 387,
    "year": 2024,
    "rating": 4.581319006731489,
    "downloads": 2878,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-928",
    "title": "Manual de Educa\u00e7\u00e3o de Filhos",
    "author": "Dietrich Bonhoeffer",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4209,
    "pages": 343,
    "year": 2023,
    "rating": 4.98133551958935,
    "downloads": 2319,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-929",
    "title": "Manual de Discipulado",
    "author": "James Stewart",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5451,
    "pages": 507,
    "year": 2019,
    "rating": 4.706682958494703,
    "downloads": 2997,
    "synopsis": "Uma obra abrangente de James Stewart que explora os princ\u00edpios fundamentais de Discipulado.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-engenharia-930",
    "title": "Apolog\u00e9tica: Fundamentos e Pr\u00e1ticas",
    "author": "Zeferino Capoco",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2317,
    "pages": 264,
    "year": 2024,
    "rating": 4.5435529477717465,
    "downloads": 3887,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-931",
    "title": "C\u00e1lculo I: Fundamentos e Pr\u00e1ticas",
    "author": "J.I. Packer",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4375,
    "pages": 647,
    "year": 2019,
    "rating": 4.514069436261529,
    "downloads": 1394,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-932",
    "title": "Comunica\u00e7\u00e3o no Casamento: Fundamentos e Pr\u00e1ticas",
    "author": "John Bunyan",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3814,
    "pages": 464,
    "year": 2021,
    "rating": 4.919351801659434,
    "downloads": 3149,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de Comunica\u00e7\u00e3o no Casamento.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-informatica-933",
    "title": "Manual de Termodin\u00e2mica",
    "author": "Henry Cloud",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3198,
    "pages": 736,
    "year": 2022,
    "rating": 4.66585609794543,
    "downloads": 178,
    "synopsis": "Uma obra abrangente de Henry Cloud que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-filosofia-934",
    "title": "Manual de Missiologia",
    "author": "R.C. Hibbeler",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3601,
    "pages": 347,
    "year": 2023,
    "rating": 4.973985793661218,
    "downloads": 3919,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-medicina-935",
    "title": "C\u00e1lculo I: Fundamentos e Pr\u00e1ticas",
    "author": "Karl Marx",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1648,
    "pages": 661,
    "year": 2019,
    "rating": 4.719815694452391,
    "downloads": 3665,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-economia-936",
    "title": "Manual de Introdu\u00e7\u00e3o ao Direito",
    "author": "Karl Marx",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1592,
    "pages": 333,
    "year": 2022,
    "rating": 4.614668611511045,
    "downloads": 2202,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Introdu\u00e7\u00e3o ao Direito.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-medicina-937",
    "title": "Manual de Mec\u00e2nica Qu\u00e2ntica",
    "author": "Ant\u00f3nio Cascais",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 5079,
    "pages": 447,
    "year": 2022,
    "rating": 4.643980951011522,
    "downloads": 229,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de Mec\u00e2nica Qu\u00e2ntica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-938",
    "title": "C\u00e1lculo I: Fundamentos e Pr\u00e1ticas",
    "author": "Wayne Grudem",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4291,
    "pages": 832,
    "year": 2023,
    "rating": 4.944484122874142,
    "downloads": 1331,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de C\u00e1lculo I.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-939",
    "title": "Manual de Estruturas de Dados",
    "author": "Renato Cardoso",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1860,
    "pages": 634,
    "year": 2023,
    "rating": 4.526293907279374,
    "downloads": 4415,
    "synopsis": "Uma obra abrangente de Renato Cardoso que explora os princ\u00edpios fundamentais de Estruturas de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-familia-940",
    "title": "Manual de Comunica\u00e7\u00e3o no Casamento",
    "author": "John Bunyan",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2665,
    "pages": 681,
    "year": 2020,
    "rating": 4.907671097847167,
    "downloads": 2232,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de Comunica\u00e7\u00e3o no Casamento.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-familia-941",
    "title": "Exegese B\u00edblica: Fundamentos e Pr\u00e1ticas",
    "author": "Stuart Russell",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 2780,
    "pages": 630,
    "year": 2024,
    "rating": 4.966595983377913,
    "downloads": 1584,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-familia-942",
    "title": "Manual de C\u00e1lculo II",
    "author": "Stuart Russell",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 5145,
    "pages": 658,
    "year": 2020,
    "rating": 4.943777348748282,
    "downloads": 1605,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-943",
    "title": "Manual de Vida de Ora\u00e7\u00e3o",
    "author": "Wayne Grudem",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5329,
    "pages": 315,
    "year": 2018,
    "rating": 4.5092135334184045,
    "downloads": 914,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-944",
    "title": "Missiologia: Fundamentos e Pr\u00e1ticas",
    "author": "Jo\u00e3o Calvino",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 2101,
    "pages": 637,
    "year": 2019,
    "rating": 4.9389069901675615,
    "downloads": 4209,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-945",
    "title": "Manual de Hist\u00f3ria da Igreja",
    "author": "Stuart Russell",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 5007,
    "pages": 452,
    "year": 2022,
    "rating": 4.645042149475308,
    "downloads": 3189,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-historia-946",
    "title": "Farmacologia: Fundamentos e Pr\u00e1ticas",
    "author": "Martin Fowler",
    "category": "academicos",
    "subcategory": "historia",
    "price": 5499,
    "pages": 329,
    "year": 2018,
    "rating": 4.840868516262376,
    "downloads": 1558,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Farmacologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-947",
    "title": "Anatomia Humana: Fundamentos e Pr\u00e1ticas",
    "author": "Cremildo Paca",
    "category": "academicos",
    "subcategory": "historia",
    "price": 4057,
    "pages": 322,
    "year": 2022,
    "rating": 4.939043642284536,
    "downloads": 3446,
    "synopsis": "Uma obra abrangente de Cremildo Paca que explora os princ\u00edpios fundamentais de Anatomia Humana.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-medicina-948",
    "title": "Manual de \u00c9tica Crist\u00e3",
    "author": "Gary Ezzo",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1819,
    "pages": 382,
    "year": 2021,
    "rating": 4.796568152511222,
    "downloads": 1433,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de \u00c9tica Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-medicina-949",
    "title": "Manual de Exegese B\u00edblica",
    "author": "Zeferino Capoco",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 3932,
    "pages": 251,
    "year": 2022,
    "rating": 4.6184710408076715,
    "downloads": 3088,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-engenharia-950",
    "title": "Manual de Estruturas de Dados",
    "author": "R.C. Hibbeler",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3587,
    "pages": 648,
    "year": 2021,
    "rating": 4.513580960091195,
    "downloads": 4238,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Estruturas de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-951",
    "title": "Direito Civil: Fundamentos e Pr\u00e1ticas",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2295,
    "pages": 377,
    "year": 2018,
    "rating": 4.568407794012577,
    "downloads": 791,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Direito Civil.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-direito-952",
    "title": "Exegese B\u00edblica: Fundamentos e Pr\u00e1ticas",
    "author": "Robert C. Martin",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3925,
    "pages": 846,
    "year": 2021,
    "rating": 4.62759521396612,
    "downloads": 4258,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-953",
    "title": "Manual de Educa\u00e7\u00e3o de Filhos",
    "author": "Tom\u00e1s de Aquino",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3866,
    "pages": 418,
    "year": 2019,
    "rating": 4.516632223347323,
    "downloads": 2485,
    "synopsis": "Uma obra abrangente de Tom\u00e1s de Aquino que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-direito-954",
    "title": "Fisiologia: Fundamentos e Pr\u00e1ticas",
    "author": "J.I. Packer",
    "category": "academicos",
    "subcategory": "direito",
    "price": 2380,
    "pages": 257,
    "year": 2019,
    "rating": 4.888709502382095,
    "downloads": 2444,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Fisiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-medicina-955",
    "title": "Manual de Direito Penal",
    "author": "Stuart Russell",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2406,
    "pages": 847,
    "year": 2023,
    "rating": 4.614050986432324,
    "downloads": 304,
    "synopsis": "Uma obra abrangente de Stuart Russell que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-956",
    "title": "Teologia Sistem\u00e1tica: Fundamentos e Pr\u00e1ticas",
    "author": "Jo\u00e3o Calvino",
    "category": "academicos",
    "subcategory": "historia",
    "price": 3705,
    "pages": 507,
    "year": 2019,
    "rating": 4.994473460750094,
    "downloads": 4852,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Teologia Sistem\u00e1tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-informatica-957",
    "title": "Sistemas Operacionais: Fundamentos e Pr\u00e1ticas",
    "author": "Dietrich Bonhoeffer",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 3758,
    "pages": 301,
    "year": 2020,
    "rating": 4.86796130297591,
    "downloads": 3741,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-medicina-958",
    "title": "Manual de Hist\u00f3ria da Igreja",
    "author": "Gary Chapman",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 2791,
    "pages": 327,
    "year": 2020,
    "rating": 4.704555619535915,
    "downloads": 800,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Hist\u00f3ria da Igreja.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-959",
    "title": "Direito Constitucional: Fundamentos e Pr\u00e1ticas",
    "author": "Harrison",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1767,
    "pages": 607,
    "year": 2024,
    "rating": 4.90757529351109,
    "downloads": 3896,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Direito Constitucional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-960",
    "title": "Manual de Algoritmos",
    "author": "Robert C. Martin",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3022,
    "pages": 443,
    "year": 2024,
    "rating": 4.5816655318624395,
    "downloads": 3989,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de Algoritmos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-informatica-961",
    "title": "Manual de Mec\u00e2nica Qu\u00e2ntica",
    "author": "R.C. Hibbeler",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 2521,
    "pages": 257,
    "year": 2020,
    "rating": 4.501392010530561,
    "downloads": 1941,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Mec\u00e2nica Qu\u00e2ntica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-962",
    "title": "Manual de \u00c9tica Crist\u00e3",
    "author": "Adam Smith",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4762,
    "pages": 302,
    "year": 2022,
    "rating": 4.608039344227277,
    "downloads": 641,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de \u00c9tica Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-teologia-963",
    "title": "Lideran\u00e7a Crist\u00e3: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Chapman",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4981,
    "pages": 574,
    "year": 2021,
    "rating": 4.678536819197952,
    "downloads": 2848,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-964",
    "title": "C\u00e1lculo II: Fundamentos e Pr\u00e1ticas",
    "author": "Gregory Mankiw",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3234,
    "pages": 339,
    "year": 2022,
    "rating": 4.730318848617323,
    "downloads": 3785,
    "synopsis": "Uma obra abrangente de Gregory Mankiw que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-965",
    "title": "Termodin\u00e2mica: Fundamentos e Pr\u00e1ticas",
    "author": "Zeferino Capoco",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4169,
    "pages": 777,
    "year": 2019,
    "rating": 4.713640514389941,
    "downloads": 276,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-966",
    "title": "Manual de Direito Penal",
    "author": "Zeferino Capoco",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4975,
    "pages": 601,
    "year": 2018,
    "rating": 4.6499482945985,
    "downloads": 4703,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Direito Penal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-historia-967",
    "title": "Finan\u00e7as: Fundamentos e Pr\u00e1ticas",
    "author": "Timothy Keller",
    "category": "academicos",
    "subcategory": "historia",
    "price": 3010,
    "pages": 254,
    "year": 2021,
    "rating": 4.903706624041387,
    "downloads": 1821,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Finan\u00e7as.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-engenharia-968",
    "title": "Econometria: Fundamentos e Pr\u00e1ticas",
    "author": "Halliday",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1649,
    "pages": 372,
    "year": 2019,
    "rating": 4.6953511367729535,
    "downloads": 1329,
    "synopsis": "Uma obra abrangente de Halliday que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-engenharia-969",
    "title": "Manual de Mec\u00e2nica Qu\u00e2ntica",
    "author": "Andrew Hunt",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1947,
    "pages": 735,
    "year": 2022,
    "rating": 4.5213110107298125,
    "downloads": 3057,
    "synopsis": "Uma obra abrangente de Andrew Hunt que explora os princ\u00edpios fundamentais de Mec\u00e2nica Qu\u00e2ntica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-970",
    "title": "Manual de Missiologia",
    "author": "Louis Berkhof",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2237,
    "pages": 630,
    "year": 2022,
    "rating": 4.638812403902853,
    "downloads": 820,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-971",
    "title": "Relacionamento Conjugal: Fundamentos e Pr\u00e1ticas",
    "author": "Frank Netter",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4105,
    "pages": 647,
    "year": 2019,
    "rating": 4.664521959800112,
    "downloads": 2265,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de Relacionamento Conjugal.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-972",
    "title": "Manual de Educa\u00e7\u00e3o de Filhos",
    "author": "Charles Sheldon",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 3439,
    "pages": 527,
    "year": 2019,
    "rating": 4.767755032513493,
    "downloads": 1029,
    "synopsis": "Uma obra abrangente de Charles Sheldon que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-vida-crista-973",
    "title": "Contabilidade: Fundamentos e Pr\u00e1ticas",
    "author": "Wayne Grudem",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5290,
    "pages": 696,
    "year": 2020,
    "rating": 4.819994678128202,
    "downloads": 4610,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-filosofia-974",
    "title": "Manual de Educa\u00e7\u00e3o de Filhos",
    "author": "John Bunyan",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 4295,
    "pages": 690,
    "year": 2023,
    "rating": 4.78441891490871,
    "downloads": 2578,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-direito-975",
    "title": "Manual de Contabilidade",
    "author": "Frank Netter",
    "category": "academicos",
    "subcategory": "direito",
    "price": 5027,
    "pages": 496,
    "year": 2021,
    "rating": 4.501815014661657,
    "downloads": 306,
    "synopsis": "Uma obra abrangente de Frank Netter que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "gold",
      "ornament": "cross"
    }
  },
  {
    "id": "academicos-direito-976",
    "title": "Manual de C\u00e1lculo II",
    "author": "Adam Smith",
    "category": "academicos",
    "subcategory": "direito",
    "price": 3216,
    "pages": 394,
    "year": 2019,
    "rating": 4.997577836696379,
    "downloads": 4921,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
    "cover": {
      "palette": "emerald",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-977",
    "title": "Exegese B\u00edblica: Fundamentos e Pr\u00e1ticas",
    "author": "J.I. Packer",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2976,
    "pages": 255,
    "year": 2018,
    "rating": 4.928292940372006,
    "downloads": 225,
    "synopsis": "Uma obra abrangente de J.I. Packer que explora os princ\u00edpios fundamentais de Exegese B\u00edblica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "star"
    }
  },
  {
    "id": "academicos-filosofia-978",
    "title": "Vida de Ora\u00e7\u00e3o: Fundamentos e Pr\u00e1ticas",
    "author": "Frank White",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 5454,
    "pages": 451,
    "year": 2019,
    "rating": 4.584072704912815,
    "downloads": 1557,
    "synopsis": "Uma obra abrangente de Frank White que explora os princ\u00edpios fundamentais de Vida de Ora\u00e7\u00e3o.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-979",
    "title": "F\u00edsica Geral: Fundamentos e Pr\u00e1ticas",
    "author": "Gary Ezzo",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5056,
    "pages": 698,
    "year": 2019,
    "rating": 4.797856631281929,
    "downloads": 1521,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de F\u00edsica Geral.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-historia-980",
    "title": "Manual de Lideran\u00e7a Crist\u00e3",
    "author": "Wayne Grudem",
    "category": "academicos",
    "subcategory": "historia",
    "price": 2099,
    "pages": 607,
    "year": 2020,
    "rating": 4.797117179590016,
    "downloads": 682,
    "synopsis": "Uma obra abrangente de Wayne Grudem que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-economia-981",
    "title": "Contabilidade: Fundamentos e Pr\u00e1ticas",
    "author": "Dietrich Bonhoeffer",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1968,
    "pages": 368,
    "year": 2023,
    "rating": 4.547997022882898,
    "downloads": 2686,
    "synopsis": "Uma obra abrangente de Dietrich Bonhoeffer que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-982",
    "title": "Manual de Econometria",
    "author": "John Bunyan",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2431,
    "pages": 409,
    "year": 2020,
    "rating": 4.817037113951687,
    "downloads": 3865,
    "synopsis": "Uma obra abrangente de John Bunyan que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-familia-983",
    "title": "Manual de Direito Administrativo",
    "author": "Tom\u00e1s de Aquino",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 3642,
    "pages": 430,
    "year": 2018,
    "rating": 4.633852059428087,
    "downloads": 4257,
    "synopsis": "Uma obra abrangente de Tom\u00e1s de Aquino que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "gold",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-vida-crista-984",
    "title": "Econometria: Fundamentos e Pr\u00e1ticas",
    "author": "Jo\u00e3o Calvino",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 4432,
    "pages": 514,
    "year": 2020,
    "rating": 4.527100550749745,
    "downloads": 2120,
    "synopsis": "Uma obra abrangente de Jo\u00e3o Calvino que explora os princ\u00edpios fundamentais de Econometria.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-985",
    "title": "Manual de Termodin\u00e2mica",
    "author": "Gary Ezzo",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5072,
    "pages": 493,
    "year": 2024,
    "rating": 4.629206277336453,
    "downloads": 2298,
    "synopsis": "Uma obra abrangente de Gary Ezzo que explora os princ\u00edpios fundamentais de Termodin\u00e2mica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-986",
    "title": "Mec\u00e2nica Qu\u00e2ntica: Fundamentos e Pr\u00e1ticas",
    "author": "Adam Smith",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1731,
    "pages": 413,
    "year": 2024,
    "rating": 4.75104747757217,
    "downloads": 3063,
    "synopsis": "Uma obra abrangente de Adam Smith que explora os princ\u00edpios fundamentais de Mec\u00e2nica Qu\u00e2ntica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-987",
    "title": "Bioqu\u00edmica: Fundamentos e Pr\u00e1ticas",
    "author": "Harrison",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 5222,
    "pages": 824,
    "year": 2024,
    "rating": 4.846915082578953,
    "downloads": 999,
    "synopsis": "Uma obra abrangente de Harrison que explora os princ\u00edpios fundamentais de Bioqu\u00edmica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "cross"
    }
  },
  {
    "id": "cristaos-vida-crista-988",
    "title": "Banco de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Ant\u00f3nio Cascais",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 3065,
    "pages": 570,
    "year": 2024,
    "rating": 4.848909884679178,
    "downloads": 2520,
    "synopsis": "Uma obra abrangente de Ant\u00f3nio Cascais que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-engenharia-989",
    "title": "C\u00e1lculo II: Fundamentos e Pr\u00e1ticas",
    "author": "Louis Berkhof",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 3683,
    "pages": 250,
    "year": 2021,
    "rating": 4.645619316491196,
    "downloads": 3593,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "crown"
    }
  },
  {
    "id": "cristaos-teologia-990",
    "title": "Manual de Lideran\u00e7a Crist\u00e3",
    "author": "Sommerville",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 5496,
    "pages": 642,
    "year": 2023,
    "rating": 4.659639926619722,
    "downloads": 826,
    "synopsis": "Uma obra abrangente de Sommerville que explora os princ\u00edpios fundamentais de Lideran\u00e7a Crist\u00e3.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-991",
    "title": "Manual de Direito Administrativo",
    "author": "R.C. Hibbeler",
    "category": "academicos",
    "subcategory": "economia",
    "price": 4831,
    "pages": 730,
    "year": 2024,
    "rating": 4.908322432103913,
    "downloads": 2594,
    "synopsis": "Uma obra abrangente de R.C. Hibbeler que explora os princ\u00edpios fundamentais de Direito Administrativo.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-992",
    "title": "Banco de Dados: Fundamentos e Pr\u00e1ticas",
    "author": "Timothy Keller",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1751,
    "pages": 751,
    "year": 2022,
    "rating": 4.691939011938494,
    "downloads": 834,
    "synopsis": "Uma obra abrangente de Timothy Keller que explora os princ\u00edpios fundamentais de Banco de Dados.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-direito-993",
    "title": "Manual de Missiologia",
    "author": "Rick Warren",
    "category": "academicos",
    "subcategory": "direito",
    "price": 4065,
    "pages": 798,
    "year": 2020,
    "rating": 4.512647589859328,
    "downloads": 4109,
    "synopsis": "Uma obra abrangente de Rick Warren que explora os princ\u00edpios fundamentais de Missiologia.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
    "cover": {
      "palette": "ivory",
      "ornament": "crown"
    }
  },
  {
    "id": "academicos-filosofia-994",
    "title": "Manual de Educa\u00e7\u00e3o de Filhos",
    "author": "Martin Fowler",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 3546,
    "pages": 513,
    "year": 2018,
    "rating": 4.529661173418678,
    "downloads": 717,
    "synopsis": "Uma obra abrangente de Martin Fowler que explora os princ\u00edpios fundamentais de Educa\u00e7\u00e3o de Filhos.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "burgundy",
      "ornament": "quill"
    }
  },
  {
    "id": "academicos-filosofia-995",
    "title": "Sistemas Operacionais: Fundamentos e Pr\u00e1ticas",
    "author": "Zeferino Capoco",
    "category": "academicos",
    "subcategory": "filosofia",
    "price": 2788,
    "pages": 555,
    "year": 2019,
    "rating": 4.52532289837165,
    "downloads": 429,
    "synopsis": "Uma obra abrangente de Zeferino Capoco que explora os princ\u00edpios fundamentais de Sistemas Operacionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "star"
    }
  },
  {
    "id": "cristaos-teologia-996",
    "title": "Manual de Contabilidade",
    "author": "Louis Berkhof",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 4449,
    "pages": 673,
    "year": 2019,
    "rating": 4.581749258716439,
    "downloads": 1935,
    "synopsis": "Uma obra abrangente de Louis Berkhof que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "academicos-economia-997",
    "title": "Manual de Contabilidade",
    "author": "Robert C. Martin",
    "category": "academicos",
    "subcategory": "economia",
    "price": 3218,
    "pages": 544,
    "year": 2019,
    "rating": 4.757022673390886,
    "downloads": 3461,
    "synopsis": "Uma obra abrangente de Robert C. Martin que explora os princ\u00edpios fundamentais de Contabilidade.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
    "cover": {
      "palette": "emerald",
      "ornament": "quill"
    }
  },
  {
    "id": "cristaos-teologia-998",
    "title": "Manual de Apolog\u00e9tica",
    "author": "Karl Marx",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 2638,
    "pages": 799,
    "year": 2020,
    "rating": 4.81094950809399,
    "downloads": 1453,
    "synopsis": "Uma obra abrangente de Karl Marx que explora os princ\u00edpios fundamentais de Apolog\u00e9tica.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "leaf"
    }
  },
  {
    "id": "cristaos-vida-crista-999",
    "title": "Manual de C\u00e1lculo II",
    "author": "Gary Chapman",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 2098,
    "pages": 598,
    "year": 2024,
    "rating": 4.769520027794972,
    "downloads": 3162,
    "synopsis": "Uma obra abrangente de Gary Chapman que explora os princ\u00edpios fundamentais de C\u00e1lculo II.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg",
    "cover": {
      "palette": "ivory",
      "ornament": "cross"
    }
  }
];

export const featuredBooks = BOOKS_DATABASE.slice(0, 12);

export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);

export const getSubcategory = (categorySlug: string, subcategorySlug: string) =>
  getCategory(categorySlug)?.subcategories.find((subcategory) => subcategory.slug === subcategorySlug);

export function listBooksBySubcategory(categorySlug: string, subcategorySlug: string, offset = 0, limit = 24) {
  const items = BOOKS_DATABASE.filter((book) => book.category === categorySlug && book.subcategory === subcategorySlug);
  return { items: items.slice(offset, offset + limit), total: items.length };
}

export function listBooksByCategory(categorySlug: string, offset = 0, limit = 24) {
  const items = BOOKS_DATABASE.filter((book) => book.category === categorySlug);
  return { items: items.slice(offset, offset + limit), total: items.length };
}

export function getBook(id: string): Book | undefined {
  return BOOKS_DATABASE.find((book) => book.id === id);
}

export function searchBooks(query: string, max = 40): Book[] {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [];
  return BOOKS_DATABASE.filter((book) =>
    [book.title, book.author, book.synopsis].some((value) => value.toLowerCase().includes(normalizedQuery)),
  ).slice(0, max);
}

export const totalLibrarySize = BOOKS_DATABASE.length;

export const formatPrice = (kz: number) =>
  new Intl.NumberFormat("pt-PT", { maximumFractionDigits: 0 }).format(kz) + " Kz";

export const formatNumber = (value: number) => new Intl.NumberFormat("pt-PT").format(value);

export const WHATSAPP_NUMBER = "244951201628";
export const WHATSAPP_DISPLAY = "+244 951 201 628";

export function whatsappCheckoutUrl(book: Book): string {
  const message =
    `Olá! Quero comprar este PDF no Amigo do Saber:\n\n` +
    `Título: ${book.title}\n` +
    `Autor: ${book.author}\n` +
    `Preço: ${formatPrice(book.price)}\n` +
    `Referência: ${book.id}\n\n` +
    `Podem confirmar disponibilidade e forma de pagamento? Obrigado.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_REQUEST_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Gostaria de pedir um livro em PDF no Amigo do Saber.\n\nTítulo/autor procurado: ",
)}`;

const palettes: Palette[] = ["gold", "burgundy", "emerald", "sapphire", "ivory"];

function hash32(value: string): number {
  let hash = 2166136261 >>> 0;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

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
  const hash = hash32(row.id);
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
    cover: { palette: palettes[hash % palettes.length], ornament: "book" },
    coverUrl: row.cover_url || undefined,
    synopsis: row.description,
  };
}
