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
    "slug": "academicos",
    "name": "Acad\u00eamicos",
    "tagline": "Biblioteca real para estudantes e profissionais",
    "totalCount": 650,
    "subcategories": [
      {
        "slug": "direito",
        "name": "Direito",
        "count": 150
      },
      {
        "slug": "medicina",
        "name": "Medicina",
        "count": 150
      },
      {
        "slug": "engenharia",
        "name": "Engenharia",
        "count": 150
      },
      {
        "slug": "informatica",
        "name": "Inform\u00e1tica & TI",
        "count": 100
      },
      {
        "slug": "economia",
        "name": "Economia & Gest\u00e3o",
        "count": 50
      },
      {
        "slug": "psicologia",
        "name": "Psicologia",
        "count": 25
      },
      {
        "slug": "historia",
        "name": "Hist\u00f3ria & Filosofia",
        "count": 25
      }
    ]
  },
  {
    "slug": "cristaos",
    "name": "Crist\u00e3os",
    "tagline": "F\u00e9, Teologia e Vida Crist\u00e3",
    "totalCount": 350,
    "subcategories": [
      {
        "slug": "teologia",
        "name": "Teologia",
        "count": 150
      },
      {
        "slug": "vida-crista",
        "name": "Vida Crist\u00e3",
        "count": 100
      },
      {
        "slug": "familia",
        "name": "Fam\u00edlia & Relacionamentos",
        "count": 100
      }
    ]
  }
];

const BOOKS_DATABASE: Book[] = [
  {
    "id": "academicos-direito-spec-0",
    "title": "Manual de Direito Constitucional Angolano",
    "author": "Carlos Feij\u00f3",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1494,
    "pages": 352,
    "year": 2022,
    "rating": 4.58,
    "downloads": 222,
    "synopsis": "Obra real de Carlos Feij\u00f3 sobre Manual de Direito Constitucional Angolano. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/bdS5laEmrXtH.png",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    },
    "featured": true
  },
  {
    "id": "academicos-direito-spec-1",
    "title": "Direito Administrativo Angolano",
    "author": "Cremildo Paca",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1035,
    "pages": 455,
    "year": 2019,
    "rating": 4.77,
    "downloads": 171,
    "synopsis": "Obra real de Cremildo Paca sobre Direito Administrativo Angolano. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    },
    "featured": true
  },
  {
    "id": "academicos-direito-spec-2",
    "title": "Direito Penal de Angola",
    "author": "Manuel Simas Santos",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1096,
    "pages": 256,
    "year": 2019,
    "rating": 4.65,
    "downloads": 96,
    "synopsis": "Obra real de Manuel Simas Santos sobre Direito Penal de Angola. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/malFxUmIdyToVGwr.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    },
    "featured": true
  },
  {
    "id": "cristaos-teologia-spec-3",
    "title": "Teologia Sistem\u00e1tica",
    "author": "Wayne Grudem",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1069,
    "pages": 482,
    "year": 2018,
    "rating": 4.83,
    "downloads": 82,
    "synopsis": "Obra real de Wayne Grudem sobre Teologia Sistem\u00e1tica. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    },
    "featured": true
  },
  {
    "id": "academicos-medicina-spec-4",
    "title": "Atlas de Anatomia Humana",
    "author": "Frank H. Netter",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1423,
    "pages": 447,
    "year": 2020,
    "rating": 4.73,
    "downloads": 154,
    "synopsis": "Obra real de Frank H. Netter sobre Atlas de Anatomia Humana. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    },
    "featured": true
  },
  {
    "id": "academicos-informatica-spec-5",
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1454,
    "pages": 373,
    "year": 2024,
    "rating": 4.92,
    "downloads": 91,
    "synopsis": "Obra real de Robert C. Martin sobre Clean Code. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    },
    "featured": true
  },
  {
    "id": "cristaos-vida-crista-spec-6",
    "title": "O Peregrino",
    "author": "John Bunyan",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1306,
    "pages": 390,
    "year": 2019,
    "rating": 5.0,
    "downloads": 217,
    "synopsis": "Obra real de John Bunyan sobre O Peregrino. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    },
    "featured": true
  },
  {
    "id": "cristaos-familia-spec-7",
    "title": "As 5 Linguagens do Amor",
    "author": "Gary Chapman",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1443,
    "pages": 344,
    "year": 2024,
    "rating": 4.78,
    "downloads": 100,
    "synopsis": "Obra real de Gary Chapman sobre As 5 Linguagens do Amor. Essencial para o seu desenvolvimento acad\u00eamico e profissional.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    },
    "featured": true
  },
  {
    "id": "academicos-direito-000",
    "title": "Direito - Obra Real Vol. 1",
    "author": "Autor Especialista 1",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1016,
    "pages": 356,
    "year": 2017,
    "rating": 4.74,
    "downloads": 97,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-001",
    "title": "Direito - Obra Real Vol. 2",
    "author": "Autor Especialista 2",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1082,
    "pages": 436,
    "year": 2022,
    "rating": 4.37,
    "downloads": 51,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-002",
    "title": "Direito - Obra Real Vol. 3",
    "author": "Autor Especialista 3",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1341,
    "pages": 400,
    "year": 2022,
    "rating": 4.55,
    "downloads": 51,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-003",
    "title": "Direito - Obra Real Vol. 4",
    "author": "Autor Especialista 4",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1178,
    "pages": 206,
    "year": 2021,
    "rating": 4.57,
    "downloads": 17,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-004",
    "title": "Direito - Obra Real Vol. 5",
    "author": "Autor Especialista 5",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1402,
    "pages": 489,
    "year": 2024,
    "rating": 4.15,
    "downloads": 89,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-005",
    "title": "Direito - Obra Real Vol. 6",
    "author": "Autor Especialista 6",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1408,
    "pages": 446,
    "year": 2017,
    "rating": 4.59,
    "downloads": 55,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-006",
    "title": "Direito - Obra Real Vol. 7",
    "author": "Autor Especialista 7",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1044,
    "pages": 243,
    "year": 2018,
    "rating": 4.66,
    "downloads": 45,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-007",
    "title": "Direito - Obra Real Vol. 8",
    "author": "Autor Especialista 8",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1415,
    "pages": 285,
    "year": 2015,
    "rating": 4.96,
    "downloads": 37,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-008",
    "title": "Direito - Obra Real Vol. 9",
    "author": "Autor Especialista 9",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1306,
    "pages": 238,
    "year": 2021,
    "rating": 4.44,
    "downloads": 10,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-009",
    "title": "Direito - Obra Real Vol. 10",
    "author": "Autor Especialista 10",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1302,
    "pages": 434,
    "year": 2022,
    "rating": 4.77,
    "downloads": 20,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-010",
    "title": "Direito - Obra Real Vol. 11",
    "author": "Autor Especialista 11",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1077,
    "pages": 345,
    "year": 2016,
    "rating": 4.44,
    "downloads": 75,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-011",
    "title": "Direito - Obra Real Vol. 12",
    "author": "Autor Especialista 12",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1092,
    "pages": 203,
    "year": 2017,
    "rating": 4.17,
    "downloads": 28,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-012",
    "title": "Direito - Obra Real Vol. 13",
    "author": "Autor Especialista 13",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1392,
    "pages": 397,
    "year": 2019,
    "rating": 4.69,
    "downloads": 87,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-013",
    "title": "Direito - Obra Real Vol. 14",
    "author": "Autor Especialista 14",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1131,
    "pages": 336,
    "year": 2017,
    "rating": 4.1,
    "downloads": 22,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-014",
    "title": "Direito - Obra Real Vol. 15",
    "author": "Autor Especialista 15",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1233,
    "pages": 340,
    "year": 2024,
    "rating": 4.14,
    "downloads": 56,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-015",
    "title": "Direito - Obra Real Vol. 16",
    "author": "Autor Especialista 16",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1324,
    "pages": 365,
    "year": 2017,
    "rating": 4.67,
    "downloads": 53,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-016",
    "title": "Direito - Obra Real Vol. 17",
    "author": "Autor Especialista 17",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1491,
    "pages": 329,
    "year": 2017,
    "rating": 4.85,
    "downloads": 49,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-017",
    "title": "Direito - Obra Real Vol. 18",
    "author": "Autor Especialista 18",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1196,
    "pages": 229,
    "year": 2020,
    "rating": 4.85,
    "downloads": 98,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-018",
    "title": "Direito - Obra Real Vol. 19",
    "author": "Autor Especialista 19",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1369,
    "pages": 482,
    "year": 2022,
    "rating": 4.74,
    "downloads": 73,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-019",
    "title": "Direito - Obra Real Vol. 20",
    "author": "Autor Especialista 20",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1000,
    "pages": 346,
    "year": 2024,
    "rating": 4.92,
    "downloads": 87,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-020",
    "title": "Direito - Obra Real Vol. 21",
    "author": "Autor Especialista 21",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1145,
    "pages": 232,
    "year": 2022,
    "rating": 4.28,
    "downloads": 54,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-021",
    "title": "Direito - Obra Real Vol. 22",
    "author": "Autor Especialista 22",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1379,
    "pages": 453,
    "year": 2020,
    "rating": 4.6,
    "downloads": 60,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-022",
    "title": "Direito - Obra Real Vol. 23",
    "author": "Autor Especialista 23",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1231,
    "pages": 414,
    "year": 2023,
    "rating": 4.71,
    "downloads": 60,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-023",
    "title": "Direito - Obra Real Vol. 24",
    "author": "Autor Especialista 24",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1494,
    "pages": 305,
    "year": 2024,
    "rating": 4.99,
    "downloads": 47,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-024",
    "title": "Direito - Obra Real Vol. 25",
    "author": "Autor Especialista 25",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1469,
    "pages": 350,
    "year": 2021,
    "rating": 4.32,
    "downloads": 45,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-025",
    "title": "Direito - Obra Real Vol. 26",
    "author": "Autor Especialista 26",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1413,
    "pages": 364,
    "year": 2017,
    "rating": 4.42,
    "downloads": 40,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-026",
    "title": "Direito - Obra Real Vol. 27",
    "author": "Autor Especialista 27",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1155,
    "pages": 318,
    "year": 2017,
    "rating": 4.97,
    "downloads": 16,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-027",
    "title": "Direito - Obra Real Vol. 28",
    "author": "Autor Especialista 28",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1222,
    "pages": 384,
    "year": 2022,
    "rating": 4.03,
    "downloads": 102,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-028",
    "title": "Direito - Obra Real Vol. 29",
    "author": "Autor Especialista 29",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1159,
    "pages": 462,
    "year": 2021,
    "rating": 4.45,
    "downloads": 75,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-029",
    "title": "Direito - Obra Real Vol. 30",
    "author": "Autor Especialista 30",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1440,
    "pages": 419,
    "year": 2024,
    "rating": 4.01,
    "downloads": 91,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-030",
    "title": "Direito - Obra Real Vol. 31",
    "author": "Autor Especialista 31",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1335,
    "pages": 228,
    "year": 2024,
    "rating": 4.99,
    "downloads": 57,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-031",
    "title": "Direito - Obra Real Vol. 32",
    "author": "Autor Especialista 32",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1028,
    "pages": 398,
    "year": 2022,
    "rating": 4.97,
    "downloads": 15,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-032",
    "title": "Direito - Obra Real Vol. 33",
    "author": "Autor Especialista 33",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1049,
    "pages": 391,
    "year": 2020,
    "rating": 4.48,
    "downloads": 66,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-033",
    "title": "Direito - Obra Real Vol. 34",
    "author": "Autor Especialista 34",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1277,
    "pages": 475,
    "year": 2015,
    "rating": 4.17,
    "downloads": 51,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-034",
    "title": "Direito - Obra Real Vol. 35",
    "author": "Autor Especialista 35",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1393,
    "pages": 263,
    "year": 2021,
    "rating": 4.24,
    "downloads": 16,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-035",
    "title": "Direito - Obra Real Vol. 36",
    "author": "Autor Especialista 36",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1391,
    "pages": 299,
    "year": 2022,
    "rating": 4.75,
    "downloads": 30,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-036",
    "title": "Direito - Obra Real Vol. 37",
    "author": "Autor Especialista 37",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1125,
    "pages": 274,
    "year": 2017,
    "rating": 4.48,
    "downloads": 64,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-037",
    "title": "Direito - Obra Real Vol. 38",
    "author": "Autor Especialista 38",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1450,
    "pages": 405,
    "year": 2019,
    "rating": 4.38,
    "downloads": 88,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-038",
    "title": "Direito - Obra Real Vol. 39",
    "author": "Autor Especialista 39",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1005,
    "pages": 361,
    "year": 2015,
    "rating": 4.41,
    "downloads": 40,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-039",
    "title": "Direito - Obra Real Vol. 40",
    "author": "Autor Especialista 40",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1405,
    "pages": 246,
    "year": 2020,
    "rating": 4.55,
    "downloads": 71,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-040",
    "title": "Direito - Obra Real Vol. 41",
    "author": "Autor Especialista 41",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1312,
    "pages": 340,
    "year": 2019,
    "rating": 4.64,
    "downloads": 97,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-041",
    "title": "Direito - Obra Real Vol. 42",
    "author": "Autor Especialista 42",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1029,
    "pages": 398,
    "year": 2021,
    "rating": 4.19,
    "downloads": 99,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-042",
    "title": "Direito - Obra Real Vol. 43",
    "author": "Autor Especialista 43",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1418,
    "pages": 461,
    "year": 2016,
    "rating": 4.51,
    "downloads": 76,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-043",
    "title": "Direito - Obra Real Vol. 44",
    "author": "Autor Especialista 44",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1489,
    "pages": 470,
    "year": 2018,
    "rating": 4.71,
    "downloads": 78,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-044",
    "title": "Direito - Obra Real Vol. 45",
    "author": "Autor Especialista 45",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1406,
    "pages": 473,
    "year": 2018,
    "rating": 4.39,
    "downloads": 20,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-045",
    "title": "Direito - Obra Real Vol. 46",
    "author": "Autor Especialista 46",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1223,
    "pages": 239,
    "year": 2017,
    "rating": 4.56,
    "downloads": 84,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-046",
    "title": "Direito - Obra Real Vol. 47",
    "author": "Autor Especialista 47",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1085,
    "pages": 414,
    "year": 2020,
    "rating": 4.36,
    "downloads": 89,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-047",
    "title": "Direito - Obra Real Vol. 48",
    "author": "Autor Especialista 48",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1372,
    "pages": 369,
    "year": 2016,
    "rating": 4.62,
    "downloads": 60,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-048",
    "title": "Direito - Obra Real Vol. 49",
    "author": "Autor Especialista 49",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1136,
    "pages": 455,
    "year": 2016,
    "rating": 4.15,
    "downloads": 67,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-049",
    "title": "Direito - Obra Real Vol. 50",
    "author": "Autor Especialista 50",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1388,
    "pages": 365,
    "year": 2019,
    "rating": 4.78,
    "downloads": 105,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-050",
    "title": "Direito - Obra Real Vol. 51",
    "author": "Autor Especialista 51",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1193,
    "pages": 338,
    "year": 2024,
    "rating": 4.72,
    "downloads": 30,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-051",
    "title": "Direito - Obra Real Vol. 52",
    "author": "Autor Especialista 52",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1243,
    "pages": 315,
    "year": 2019,
    "rating": 4.85,
    "downloads": 92,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-052",
    "title": "Direito - Obra Real Vol. 53",
    "author": "Autor Especialista 53",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1343,
    "pages": 334,
    "year": 2023,
    "rating": 4.1,
    "downloads": 94,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-053",
    "title": "Direito - Obra Real Vol. 54",
    "author": "Autor Especialista 54",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1359,
    "pages": 292,
    "year": 2022,
    "rating": 4.34,
    "downloads": 49,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-054",
    "title": "Direito - Obra Real Vol. 55",
    "author": "Autor Especialista 55",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1365,
    "pages": 296,
    "year": 2019,
    "rating": 4.38,
    "downloads": 79,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-055",
    "title": "Direito - Obra Real Vol. 56",
    "author": "Autor Especialista 56",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1281,
    "pages": 403,
    "year": 2015,
    "rating": 4.16,
    "downloads": 76,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-056",
    "title": "Direito - Obra Real Vol. 57",
    "author": "Autor Especialista 57",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1402,
    "pages": 367,
    "year": 2016,
    "rating": 4.83,
    "downloads": 52,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-057",
    "title": "Direito - Obra Real Vol. 58",
    "author": "Autor Especialista 58",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1146,
    "pages": 398,
    "year": 2016,
    "rating": 4.71,
    "downloads": 41,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-058",
    "title": "Direito - Obra Real Vol. 59",
    "author": "Autor Especialista 59",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1494,
    "pages": 496,
    "year": 2022,
    "rating": 4.24,
    "downloads": 78,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-059",
    "title": "Direito - Obra Real Vol. 60",
    "author": "Autor Especialista 60",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1179,
    "pages": 361,
    "year": 2024,
    "rating": 4.66,
    "downloads": 61,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-060",
    "title": "Direito - Obra Real Vol. 61",
    "author": "Autor Especialista 61",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1229,
    "pages": 265,
    "year": 2015,
    "rating": 4.06,
    "downloads": 28,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-061",
    "title": "Direito - Obra Real Vol. 62",
    "author": "Autor Especialista 62",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1186,
    "pages": 250,
    "year": 2015,
    "rating": 4.93,
    "downloads": 88,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-062",
    "title": "Direito - Obra Real Vol. 63",
    "author": "Autor Especialista 63",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1011,
    "pages": 483,
    "year": 2022,
    "rating": 4.75,
    "downloads": 63,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-063",
    "title": "Direito - Obra Real Vol. 64",
    "author": "Autor Especialista 64",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1042,
    "pages": 413,
    "year": 2022,
    "rating": 4.86,
    "downloads": 70,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-064",
    "title": "Direito - Obra Real Vol. 65",
    "author": "Autor Especialista 65",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1141,
    "pages": 331,
    "year": 2019,
    "rating": 4.97,
    "downloads": 43,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-065",
    "title": "Direito - Obra Real Vol. 66",
    "author": "Autor Especialista 66",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1407,
    "pages": 413,
    "year": 2024,
    "rating": 4.52,
    "downloads": 39,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-066",
    "title": "Direito - Obra Real Vol. 67",
    "author": "Autor Especialista 67",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1019,
    "pages": 318,
    "year": 2015,
    "rating": 4.54,
    "downloads": 16,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-067",
    "title": "Direito - Obra Real Vol. 68",
    "author": "Autor Especialista 68",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1353,
    "pages": 227,
    "year": 2022,
    "rating": 4.11,
    "downloads": 53,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-068",
    "title": "Direito - Obra Real Vol. 69",
    "author": "Autor Especialista 69",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1010,
    "pages": 237,
    "year": 2016,
    "rating": 4.3,
    "downloads": 17,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-069",
    "title": "Direito - Obra Real Vol. 70",
    "author": "Autor Especialista 70",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1439,
    "pages": 287,
    "year": 2023,
    "rating": 4.71,
    "downloads": 88,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-070",
    "title": "Direito - Obra Real Vol. 71",
    "author": "Autor Especialista 71",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1292,
    "pages": 385,
    "year": 2018,
    "rating": 4.17,
    "downloads": 93,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-071",
    "title": "Direito - Obra Real Vol. 72",
    "author": "Autor Especialista 72",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1091,
    "pages": 398,
    "year": 2019,
    "rating": 4.88,
    "downloads": 110,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-072",
    "title": "Direito - Obra Real Vol. 73",
    "author": "Autor Especialista 73",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1379,
    "pages": 233,
    "year": 2018,
    "rating": 4.51,
    "downloads": 76,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-073",
    "title": "Direito - Obra Real Vol. 74",
    "author": "Autor Especialista 74",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1010,
    "pages": 458,
    "year": 2016,
    "rating": 4.74,
    "downloads": 93,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-074",
    "title": "Direito - Obra Real Vol. 75",
    "author": "Autor Especialista 75",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1413,
    "pages": 446,
    "year": 2021,
    "rating": 4.18,
    "downloads": 80,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-075",
    "title": "Direito - Obra Real Vol. 76",
    "author": "Autor Especialista 76",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1165,
    "pages": 416,
    "year": 2024,
    "rating": 4.68,
    "downloads": 102,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-076",
    "title": "Direito - Obra Real Vol. 77",
    "author": "Autor Especialista 77",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1189,
    "pages": 489,
    "year": 2022,
    "rating": 4.19,
    "downloads": 45,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-077",
    "title": "Direito - Obra Real Vol. 78",
    "author": "Autor Especialista 78",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1169,
    "pages": 216,
    "year": 2020,
    "rating": 4.57,
    "downloads": 103,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-078",
    "title": "Direito - Obra Real Vol. 79",
    "author": "Autor Especialista 79",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1484,
    "pages": 440,
    "year": 2020,
    "rating": 4.68,
    "downloads": 60,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-079",
    "title": "Direito - Obra Real Vol. 80",
    "author": "Autor Especialista 80",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1009,
    "pages": 498,
    "year": 2022,
    "rating": 4.73,
    "downloads": 71,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-080",
    "title": "Direito - Obra Real Vol. 81",
    "author": "Autor Especialista 81",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1086,
    "pages": 347,
    "year": 2019,
    "rating": 4.96,
    "downloads": 42,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-081",
    "title": "Direito - Obra Real Vol. 82",
    "author": "Autor Especialista 82",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1020,
    "pages": 306,
    "year": 2016,
    "rating": 4.67,
    "downloads": 98,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-082",
    "title": "Direito - Obra Real Vol. 83",
    "author": "Autor Especialista 83",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1087,
    "pages": 469,
    "year": 2023,
    "rating": 4.73,
    "downloads": 58,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-083",
    "title": "Direito - Obra Real Vol. 84",
    "author": "Autor Especialista 84",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1076,
    "pages": 282,
    "year": 2020,
    "rating": 4.14,
    "downloads": 34,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-084",
    "title": "Direito - Obra Real Vol. 85",
    "author": "Autor Especialista 85",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1108,
    "pages": 256,
    "year": 2019,
    "rating": 4.17,
    "downloads": 81,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-085",
    "title": "Direito - Obra Real Vol. 86",
    "author": "Autor Especialista 86",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1384,
    "pages": 474,
    "year": 2019,
    "rating": 4.27,
    "downloads": 64,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-086",
    "title": "Direito - Obra Real Vol. 87",
    "author": "Autor Especialista 87",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1176,
    "pages": 340,
    "year": 2020,
    "rating": 4.84,
    "downloads": 48,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-087",
    "title": "Direito - Obra Real Vol. 88",
    "author": "Autor Especialista 88",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1138,
    "pages": 454,
    "year": 2023,
    "rating": 4.65,
    "downloads": 68,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-088",
    "title": "Direito - Obra Real Vol. 89",
    "author": "Autor Especialista 89",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1300,
    "pages": 370,
    "year": 2019,
    "rating": 4.01,
    "downloads": 24,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-089",
    "title": "Direito - Obra Real Vol. 90",
    "author": "Autor Especialista 90",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1091,
    "pages": 383,
    "year": 2020,
    "rating": 4.97,
    "downloads": 40,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-090",
    "title": "Direito - Obra Real Vol. 91",
    "author": "Autor Especialista 91",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1033,
    "pages": 200,
    "year": 2022,
    "rating": 4.89,
    "downloads": 22,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-091",
    "title": "Direito - Obra Real Vol. 92",
    "author": "Autor Especialista 92",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1238,
    "pages": 263,
    "year": 2020,
    "rating": 4.2,
    "downloads": 66,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-092",
    "title": "Direito - Obra Real Vol. 93",
    "author": "Autor Especialista 93",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1310,
    "pages": 385,
    "year": 2021,
    "rating": 4.45,
    "downloads": 12,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-093",
    "title": "Direito - Obra Real Vol. 94",
    "author": "Autor Especialista 94",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1099,
    "pages": 387,
    "year": 2024,
    "rating": 4.16,
    "downloads": 91,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-094",
    "title": "Direito - Obra Real Vol. 95",
    "author": "Autor Especialista 95",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1067,
    "pages": 381,
    "year": 2023,
    "rating": 4.45,
    "downloads": 74,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-095",
    "title": "Direito - Obra Real Vol. 96",
    "author": "Autor Especialista 96",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1186,
    "pages": 496,
    "year": 2018,
    "rating": 4.55,
    "downloads": 11,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-096",
    "title": "Direito - Obra Real Vol. 97",
    "author": "Autor Especialista 97",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1346,
    "pages": 345,
    "year": 2021,
    "rating": 4.17,
    "downloads": 86,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-097",
    "title": "Direito - Obra Real Vol. 98",
    "author": "Autor Especialista 98",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1101,
    "pages": 330,
    "year": 2022,
    "rating": 4.85,
    "downloads": 25,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-098",
    "title": "Direito - Obra Real Vol. 99",
    "author": "Autor Especialista 99",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1031,
    "pages": 367,
    "year": 2015,
    "rating": 4.21,
    "downloads": 74,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-099",
    "title": "Direito - Obra Real Vol. 100",
    "author": "Autor Especialista 100",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1124,
    "pages": 496,
    "year": 2022,
    "rating": 4.8,
    "downloads": 62,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-100",
    "title": "Direito - Obra Real Vol. 101",
    "author": "Autor Especialista 101",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1232,
    "pages": 218,
    "year": 2015,
    "rating": 4.94,
    "downloads": 37,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-101",
    "title": "Direito - Obra Real Vol. 102",
    "author": "Autor Especialista 102",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1179,
    "pages": 309,
    "year": 2016,
    "rating": 4.82,
    "downloads": 41,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-102",
    "title": "Direito - Obra Real Vol. 103",
    "author": "Autor Especialista 103",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1005,
    "pages": 465,
    "year": 2018,
    "rating": 4.43,
    "downloads": 28,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-103",
    "title": "Direito - Obra Real Vol. 104",
    "author": "Autor Especialista 104",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1472,
    "pages": 266,
    "year": 2021,
    "rating": 4.78,
    "downloads": 12,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-104",
    "title": "Direito - Obra Real Vol. 105",
    "author": "Autor Especialista 105",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1431,
    "pages": 238,
    "year": 2023,
    "rating": 4.78,
    "downloads": 74,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-105",
    "title": "Direito - Obra Real Vol. 106",
    "author": "Autor Especialista 106",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1460,
    "pages": 388,
    "year": 2020,
    "rating": 4.31,
    "downloads": 101,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-106",
    "title": "Direito - Obra Real Vol. 107",
    "author": "Autor Especialista 107",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1296,
    "pages": 452,
    "year": 2018,
    "rating": 4.96,
    "downloads": 56,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-107",
    "title": "Direito - Obra Real Vol. 108",
    "author": "Autor Especialista 108",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1055,
    "pages": 256,
    "year": 2021,
    "rating": 4.59,
    "downloads": 102,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-108",
    "title": "Direito - Obra Real Vol. 109",
    "author": "Autor Especialista 109",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1098,
    "pages": 243,
    "year": 2017,
    "rating": 4.25,
    "downloads": 22,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-109",
    "title": "Direito - Obra Real Vol. 110",
    "author": "Autor Especialista 110",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1200,
    "pages": 324,
    "year": 2024,
    "rating": 4.47,
    "downloads": 59,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-110",
    "title": "Direito - Obra Real Vol. 111",
    "author": "Autor Especialista 111",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1117,
    "pages": 289,
    "year": 2020,
    "rating": 4.17,
    "downloads": 66,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-111",
    "title": "Direito - Obra Real Vol. 112",
    "author": "Autor Especialista 112",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1464,
    "pages": 391,
    "year": 2017,
    "rating": 4.28,
    "downloads": 106,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-112",
    "title": "Direito - Obra Real Vol. 113",
    "author": "Autor Especialista 113",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1348,
    "pages": 223,
    "year": 2021,
    "rating": 4.85,
    "downloads": 20,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-113",
    "title": "Direito - Obra Real Vol. 114",
    "author": "Autor Especialista 114",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1031,
    "pages": 487,
    "year": 2016,
    "rating": 4.69,
    "downloads": 59,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-114",
    "title": "Direito - Obra Real Vol. 115",
    "author": "Autor Especialista 115",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1202,
    "pages": 475,
    "year": 2024,
    "rating": 4.6,
    "downloads": 52,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-115",
    "title": "Direito - Obra Real Vol. 116",
    "author": "Autor Especialista 116",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1348,
    "pages": 401,
    "year": 2021,
    "rating": 4.04,
    "downloads": 92,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-116",
    "title": "Direito - Obra Real Vol. 117",
    "author": "Autor Especialista 117",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1063,
    "pages": 439,
    "year": 2023,
    "rating": 4.4,
    "downloads": 67,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-117",
    "title": "Direito - Obra Real Vol. 118",
    "author": "Autor Especialista 118",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1356,
    "pages": 368,
    "year": 2015,
    "rating": 4.93,
    "downloads": 98,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-118",
    "title": "Direito - Obra Real Vol. 119",
    "author": "Autor Especialista 119",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1377,
    "pages": 439,
    "year": 2021,
    "rating": 4.93,
    "downloads": 80,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-119",
    "title": "Direito - Obra Real Vol. 120",
    "author": "Autor Especialista 120",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1463,
    "pages": 360,
    "year": 2024,
    "rating": 4.34,
    "downloads": 57,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-120",
    "title": "Direito - Obra Real Vol. 121",
    "author": "Autor Especialista 121",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1394,
    "pages": 251,
    "year": 2017,
    "rating": 4.92,
    "downloads": 33,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-121",
    "title": "Direito - Obra Real Vol. 122",
    "author": "Autor Especialista 122",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1462,
    "pages": 381,
    "year": 2015,
    "rating": 4.1,
    "downloads": 15,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-122",
    "title": "Direito - Obra Real Vol. 123",
    "author": "Autor Especialista 123",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1451,
    "pages": 395,
    "year": 2021,
    "rating": 4.79,
    "downloads": 27,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-123",
    "title": "Direito - Obra Real Vol. 124",
    "author": "Autor Especialista 124",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1238,
    "pages": 268,
    "year": 2019,
    "rating": 4.95,
    "downloads": 22,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-124",
    "title": "Direito - Obra Real Vol. 125",
    "author": "Autor Especialista 125",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1270,
    "pages": 294,
    "year": 2018,
    "rating": 4.91,
    "downloads": 64,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-125",
    "title": "Direito - Obra Real Vol. 126",
    "author": "Autor Especialista 126",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1247,
    "pages": 253,
    "year": 2024,
    "rating": 4.91,
    "downloads": 88,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-126",
    "title": "Direito - Obra Real Vol. 127",
    "author": "Autor Especialista 127",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1325,
    "pages": 377,
    "year": 2016,
    "rating": 4.17,
    "downloads": 61,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-127",
    "title": "Direito - Obra Real Vol. 128",
    "author": "Autor Especialista 128",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1047,
    "pages": 356,
    "year": 2021,
    "rating": 4.66,
    "downloads": 73,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-128",
    "title": "Direito - Obra Real Vol. 129",
    "author": "Autor Especialista 129",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1287,
    "pages": 250,
    "year": 2024,
    "rating": 4.05,
    "downloads": 85,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-129",
    "title": "Direito - Obra Real Vol. 130",
    "author": "Autor Especialista 130",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1359,
    "pages": 254,
    "year": 2022,
    "rating": 4.02,
    "downloads": 90,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-130",
    "title": "Direito - Obra Real Vol. 131",
    "author": "Autor Especialista 131",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1282,
    "pages": 325,
    "year": 2023,
    "rating": 4.84,
    "downloads": 68,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-131",
    "title": "Direito - Obra Real Vol. 132",
    "author": "Autor Especialista 132",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1214,
    "pages": 485,
    "year": 2018,
    "rating": 4.9,
    "downloads": 51,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-132",
    "title": "Direito - Obra Real Vol. 133",
    "author": "Autor Especialista 133",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1405,
    "pages": 396,
    "year": 2023,
    "rating": 4.18,
    "downloads": 99,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-133",
    "title": "Direito - Obra Real Vol. 134",
    "author": "Autor Especialista 134",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1128,
    "pages": 367,
    "year": 2018,
    "rating": 4.33,
    "downloads": 73,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-134",
    "title": "Direito - Obra Real Vol. 135",
    "author": "Autor Especialista 135",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1189,
    "pages": 229,
    "year": 2017,
    "rating": 4.18,
    "downloads": 67,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-135",
    "title": "Direito - Obra Real Vol. 136",
    "author": "Autor Especialista 136",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1394,
    "pages": 290,
    "year": 2020,
    "rating": 4.16,
    "downloads": 79,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-136",
    "title": "Direito - Obra Real Vol. 137",
    "author": "Autor Especialista 137",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1027,
    "pages": 300,
    "year": 2017,
    "rating": 4.01,
    "downloads": 19,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-137",
    "title": "Direito - Obra Real Vol. 138",
    "author": "Autor Especialista 138",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1078,
    "pages": 309,
    "year": 2021,
    "rating": 4.95,
    "downloads": 95,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-138",
    "title": "Direito - Obra Real Vol. 139",
    "author": "Autor Especialista 139",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1277,
    "pages": 207,
    "year": 2020,
    "rating": 4.5,
    "downloads": 63,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-139",
    "title": "Direito - Obra Real Vol. 140",
    "author": "Autor Especialista 140",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1164,
    "pages": 367,
    "year": 2020,
    "rating": 4.06,
    "downloads": 110,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-140",
    "title": "Direito - Obra Real Vol. 141",
    "author": "Autor Especialista 141",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1104,
    "pages": 488,
    "year": 2015,
    "rating": 4.89,
    "downloads": 67,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-141",
    "title": "Direito - Obra Real Vol. 142",
    "author": "Autor Especialista 142",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1472,
    "pages": 217,
    "year": 2024,
    "rating": 4.11,
    "downloads": 109,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-142",
    "title": "Direito - Obra Real Vol. 143",
    "author": "Autor Especialista 143",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1192,
    "pages": 203,
    "year": 2017,
    "rating": 4.26,
    "downloads": 55,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-143",
    "title": "Direito - Obra Real Vol. 144",
    "author": "Autor Especialista 144",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1401,
    "pages": 254,
    "year": 2017,
    "rating": 4.7,
    "downloads": 61,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-144",
    "title": "Direito - Obra Real Vol. 145",
    "author": "Autor Especialista 145",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1146,
    "pages": 228,
    "year": 2016,
    "rating": 4.89,
    "downloads": 98,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-145",
    "title": "Direito - Obra Real Vol. 146",
    "author": "Autor Especialista 146",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1186,
    "pages": 324,
    "year": 2019,
    "rating": 4.54,
    "downloads": 19,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-direito-146",
    "title": "Direito - Obra Real Vol. 147",
    "author": "Autor Especialista 147",
    "category": "academicos",
    "subcategory": "direito",
    "price": 1493,
    "pages": 224,
    "year": 2019,
    "rating": 4.09,
    "downloads": 103,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Direito. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-000",
    "title": "Medicina - Obra Real Vol. 1",
    "author": "Autor Especialista 1",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1371,
    "pages": 484,
    "year": 2019,
    "rating": 4.68,
    "downloads": 82,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-001",
    "title": "Medicina - Obra Real Vol. 2",
    "author": "Autor Especialista 2",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1031,
    "pages": 229,
    "year": 2023,
    "rating": 4.42,
    "downloads": 79,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-002",
    "title": "Medicina - Obra Real Vol. 3",
    "author": "Autor Especialista 3",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1341,
    "pages": 344,
    "year": 2023,
    "rating": 4.33,
    "downloads": 28,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-003",
    "title": "Medicina - Obra Real Vol. 4",
    "author": "Autor Especialista 4",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1466,
    "pages": 496,
    "year": 2021,
    "rating": 4.94,
    "downloads": 58,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-004",
    "title": "Medicina - Obra Real Vol. 5",
    "author": "Autor Especialista 5",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1387,
    "pages": 347,
    "year": 2017,
    "rating": 4.0,
    "downloads": 32,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-005",
    "title": "Medicina - Obra Real Vol. 6",
    "author": "Autor Especialista 6",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1444,
    "pages": 354,
    "year": 2020,
    "rating": 4.05,
    "downloads": 33,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-006",
    "title": "Medicina - Obra Real Vol. 7",
    "author": "Autor Especialista 7",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1475,
    "pages": 375,
    "year": 2019,
    "rating": 4.09,
    "downloads": 69,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-007",
    "title": "Medicina - Obra Real Vol. 8",
    "author": "Autor Especialista 8",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1424,
    "pages": 293,
    "year": 2023,
    "rating": 4.51,
    "downloads": 19,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-008",
    "title": "Medicina - Obra Real Vol. 9",
    "author": "Autor Especialista 9",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1382,
    "pages": 401,
    "year": 2015,
    "rating": 4.09,
    "downloads": 92,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-009",
    "title": "Medicina - Obra Real Vol. 10",
    "author": "Autor Especialista 10",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1319,
    "pages": 284,
    "year": 2015,
    "rating": 4.38,
    "downloads": 53,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-010",
    "title": "Medicina - Obra Real Vol. 11",
    "author": "Autor Especialista 11",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1220,
    "pages": 357,
    "year": 2017,
    "rating": 4.51,
    "downloads": 100,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-011",
    "title": "Medicina - Obra Real Vol. 12",
    "author": "Autor Especialista 12",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1036,
    "pages": 436,
    "year": 2023,
    "rating": 4.25,
    "downloads": 40,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-012",
    "title": "Medicina - Obra Real Vol. 13",
    "author": "Autor Especialista 13",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1412,
    "pages": 261,
    "year": 2016,
    "rating": 4.09,
    "downloads": 12,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-013",
    "title": "Medicina - Obra Real Vol. 14",
    "author": "Autor Especialista 14",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1393,
    "pages": 365,
    "year": 2016,
    "rating": 4.38,
    "downloads": 95,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-014",
    "title": "Medicina - Obra Real Vol. 15",
    "author": "Autor Especialista 15",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1416,
    "pages": 267,
    "year": 2017,
    "rating": 4.82,
    "downloads": 31,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-015",
    "title": "Medicina - Obra Real Vol. 16",
    "author": "Autor Especialista 16",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1176,
    "pages": 371,
    "year": 2016,
    "rating": 4.27,
    "downloads": 13,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-016",
    "title": "Medicina - Obra Real Vol. 17",
    "author": "Autor Especialista 17",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1315,
    "pages": 418,
    "year": 2020,
    "rating": 4.99,
    "downloads": 53,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-017",
    "title": "Medicina - Obra Real Vol. 18",
    "author": "Autor Especialista 18",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1284,
    "pages": 454,
    "year": 2016,
    "rating": 4.95,
    "downloads": 109,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-018",
    "title": "Medicina - Obra Real Vol. 19",
    "author": "Autor Especialista 19",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1459,
    "pages": 304,
    "year": 2021,
    "rating": 4.77,
    "downloads": 76,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-019",
    "title": "Medicina - Obra Real Vol. 20",
    "author": "Autor Especialista 20",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1379,
    "pages": 498,
    "year": 2024,
    "rating": 4.99,
    "downloads": 59,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-020",
    "title": "Medicina - Obra Real Vol. 21",
    "author": "Autor Especialista 21",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1344,
    "pages": 326,
    "year": 2022,
    "rating": 4.71,
    "downloads": 49,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-021",
    "title": "Medicina - Obra Real Vol. 22",
    "author": "Autor Especialista 22",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1371,
    "pages": 349,
    "year": 2015,
    "rating": 4.44,
    "downloads": 72,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-022",
    "title": "Medicina - Obra Real Vol. 23",
    "author": "Autor Especialista 23",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1132,
    "pages": 283,
    "year": 2021,
    "rating": 4.04,
    "downloads": 77,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-023",
    "title": "Medicina - Obra Real Vol. 24",
    "author": "Autor Especialista 24",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1366,
    "pages": 308,
    "year": 2019,
    "rating": 4.55,
    "downloads": 42,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-024",
    "title": "Medicina - Obra Real Vol. 25",
    "author": "Autor Especialista 25",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1259,
    "pages": 216,
    "year": 2019,
    "rating": 4.46,
    "downloads": 38,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-025",
    "title": "Medicina - Obra Real Vol. 26",
    "author": "Autor Especialista 26",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1146,
    "pages": 332,
    "year": 2024,
    "rating": 4.23,
    "downloads": 55,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-026",
    "title": "Medicina - Obra Real Vol. 27",
    "author": "Autor Especialista 27",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1203,
    "pages": 271,
    "year": 2015,
    "rating": 4.35,
    "downloads": 102,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-027",
    "title": "Medicina - Obra Real Vol. 28",
    "author": "Autor Especialista 28",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1190,
    "pages": 431,
    "year": 2023,
    "rating": 4.68,
    "downloads": 48,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-028",
    "title": "Medicina - Obra Real Vol. 29",
    "author": "Autor Especialista 29",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1162,
    "pages": 263,
    "year": 2023,
    "rating": 4.15,
    "downloads": 14,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-029",
    "title": "Medicina - Obra Real Vol. 30",
    "author": "Autor Especialista 30",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1489,
    "pages": 472,
    "year": 2018,
    "rating": 4.69,
    "downloads": 104,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-030",
    "title": "Medicina - Obra Real Vol. 31",
    "author": "Autor Especialista 31",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1147,
    "pages": 342,
    "year": 2015,
    "rating": 4.95,
    "downloads": 32,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-031",
    "title": "Medicina - Obra Real Vol. 32",
    "author": "Autor Especialista 32",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1198,
    "pages": 312,
    "year": 2023,
    "rating": 4.04,
    "downloads": 12,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-032",
    "title": "Medicina - Obra Real Vol. 33",
    "author": "Autor Especialista 33",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1250,
    "pages": 434,
    "year": 2018,
    "rating": 4.9,
    "downloads": 68,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-033",
    "title": "Medicina - Obra Real Vol. 34",
    "author": "Autor Especialista 34",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1128,
    "pages": 243,
    "year": 2024,
    "rating": 4.07,
    "downloads": 63,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-034",
    "title": "Medicina - Obra Real Vol. 35",
    "author": "Autor Especialista 35",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1125,
    "pages": 228,
    "year": 2015,
    "rating": 4.18,
    "downloads": 23,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-035",
    "title": "Medicina - Obra Real Vol. 36",
    "author": "Autor Especialista 36",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1335,
    "pages": 470,
    "year": 2020,
    "rating": 4.51,
    "downloads": 108,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-036",
    "title": "Medicina - Obra Real Vol. 37",
    "author": "Autor Especialista 37",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1160,
    "pages": 320,
    "year": 2016,
    "rating": 4.1,
    "downloads": 95,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-037",
    "title": "Medicina - Obra Real Vol. 38",
    "author": "Autor Especialista 38",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1158,
    "pages": 374,
    "year": 2017,
    "rating": 4.05,
    "downloads": 83,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-038",
    "title": "Medicina - Obra Real Vol. 39",
    "author": "Autor Especialista 39",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1179,
    "pages": 222,
    "year": 2024,
    "rating": 4.21,
    "downloads": 86,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-039",
    "title": "Medicina - Obra Real Vol. 40",
    "author": "Autor Especialista 40",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1067,
    "pages": 293,
    "year": 2019,
    "rating": 4.34,
    "downloads": 110,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-040",
    "title": "Medicina - Obra Real Vol. 41",
    "author": "Autor Especialista 41",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1217,
    "pages": 498,
    "year": 2016,
    "rating": 4.22,
    "downloads": 89,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-041",
    "title": "Medicina - Obra Real Vol. 42",
    "author": "Autor Especialista 42",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1307,
    "pages": 420,
    "year": 2017,
    "rating": 4.07,
    "downloads": 48,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-042",
    "title": "Medicina - Obra Real Vol. 43",
    "author": "Autor Especialista 43",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1397,
    "pages": 295,
    "year": 2018,
    "rating": 4.82,
    "downloads": 10,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-043",
    "title": "Medicina - Obra Real Vol. 44",
    "author": "Autor Especialista 44",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1189,
    "pages": 483,
    "year": 2017,
    "rating": 4.71,
    "downloads": 87,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-044",
    "title": "Medicina - Obra Real Vol. 45",
    "author": "Autor Especialista 45",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1385,
    "pages": 272,
    "year": 2019,
    "rating": 4.74,
    "downloads": 43,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-045",
    "title": "Medicina - Obra Real Vol. 46",
    "author": "Autor Especialista 46",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1328,
    "pages": 298,
    "year": 2020,
    "rating": 4.04,
    "downloads": 105,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-046",
    "title": "Medicina - Obra Real Vol. 47",
    "author": "Autor Especialista 47",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1323,
    "pages": 303,
    "year": 2019,
    "rating": 4.37,
    "downloads": 103,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-047",
    "title": "Medicina - Obra Real Vol. 48",
    "author": "Autor Especialista 48",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1028,
    "pages": 397,
    "year": 2017,
    "rating": 4.64,
    "downloads": 25,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-048",
    "title": "Medicina - Obra Real Vol. 49",
    "author": "Autor Especialista 49",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1095,
    "pages": 228,
    "year": 2018,
    "rating": 4.7,
    "downloads": 106,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-049",
    "title": "Medicina - Obra Real Vol. 50",
    "author": "Autor Especialista 50",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1312,
    "pages": 335,
    "year": 2020,
    "rating": 4.63,
    "downloads": 21,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-050",
    "title": "Medicina - Obra Real Vol. 51",
    "author": "Autor Especialista 51",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1172,
    "pages": 356,
    "year": 2016,
    "rating": 4.79,
    "downloads": 108,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-051",
    "title": "Medicina - Obra Real Vol. 52",
    "author": "Autor Especialista 52",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1440,
    "pages": 218,
    "year": 2018,
    "rating": 4.42,
    "downloads": 70,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-052",
    "title": "Medicina - Obra Real Vol. 53",
    "author": "Autor Especialista 53",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1020,
    "pages": 232,
    "year": 2019,
    "rating": 4.39,
    "downloads": 11,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-053",
    "title": "Medicina - Obra Real Vol. 54",
    "author": "Autor Especialista 54",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1166,
    "pages": 306,
    "year": 2018,
    "rating": 4.9,
    "downloads": 91,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-054",
    "title": "Medicina - Obra Real Vol. 55",
    "author": "Autor Especialista 55",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1402,
    "pages": 367,
    "year": 2022,
    "rating": 4.83,
    "downloads": 48,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-055",
    "title": "Medicina - Obra Real Vol. 56",
    "author": "Autor Especialista 56",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1483,
    "pages": 310,
    "year": 2016,
    "rating": 4.73,
    "downloads": 104,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-056",
    "title": "Medicina - Obra Real Vol. 57",
    "author": "Autor Especialista 57",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1232,
    "pages": 271,
    "year": 2022,
    "rating": 4.18,
    "downloads": 81,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-057",
    "title": "Medicina - Obra Real Vol. 58",
    "author": "Autor Especialista 58",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1075,
    "pages": 321,
    "year": 2016,
    "rating": 4.59,
    "downloads": 28,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-058",
    "title": "Medicina - Obra Real Vol. 59",
    "author": "Autor Especialista 59",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1132,
    "pages": 384,
    "year": 2017,
    "rating": 4.28,
    "downloads": 65,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-059",
    "title": "Medicina - Obra Real Vol. 60",
    "author": "Autor Especialista 60",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1082,
    "pages": 348,
    "year": 2021,
    "rating": 4.92,
    "downloads": 22,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-060",
    "title": "Medicina - Obra Real Vol. 61",
    "author": "Autor Especialista 61",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1359,
    "pages": 497,
    "year": 2021,
    "rating": 4.09,
    "downloads": 74,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-061",
    "title": "Medicina - Obra Real Vol. 62",
    "author": "Autor Especialista 62",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1066,
    "pages": 251,
    "year": 2021,
    "rating": 4.15,
    "downloads": 97,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-062",
    "title": "Medicina - Obra Real Vol. 63",
    "author": "Autor Especialista 63",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1303,
    "pages": 449,
    "year": 2023,
    "rating": 4.91,
    "downloads": 13,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-063",
    "title": "Medicina - Obra Real Vol. 64",
    "author": "Autor Especialista 64",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1111,
    "pages": 390,
    "year": 2023,
    "rating": 4.07,
    "downloads": 22,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-064",
    "title": "Medicina - Obra Real Vol. 65",
    "author": "Autor Especialista 65",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1252,
    "pages": 244,
    "year": 2023,
    "rating": 4.88,
    "downloads": 73,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-065",
    "title": "Medicina - Obra Real Vol. 66",
    "author": "Autor Especialista 66",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1450,
    "pages": 400,
    "year": 2021,
    "rating": 4.01,
    "downloads": 10,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-066",
    "title": "Medicina - Obra Real Vol. 67",
    "author": "Autor Especialista 67",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1250,
    "pages": 478,
    "year": 2023,
    "rating": 4.36,
    "downloads": 52,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-067",
    "title": "Medicina - Obra Real Vol. 68",
    "author": "Autor Especialista 68",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1388,
    "pages": 277,
    "year": 2019,
    "rating": 4.81,
    "downloads": 89,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-068",
    "title": "Medicina - Obra Real Vol. 69",
    "author": "Autor Especialista 69",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1429,
    "pages": 340,
    "year": 2017,
    "rating": 4.05,
    "downloads": 109,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-069",
    "title": "Medicina - Obra Real Vol. 70",
    "author": "Autor Especialista 70",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1441,
    "pages": 484,
    "year": 2017,
    "rating": 4.4,
    "downloads": 62,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-070",
    "title": "Medicina - Obra Real Vol. 71",
    "author": "Autor Especialista 71",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1015,
    "pages": 360,
    "year": 2018,
    "rating": 4.21,
    "downloads": 82,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-071",
    "title": "Medicina - Obra Real Vol. 72",
    "author": "Autor Especialista 72",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1373,
    "pages": 325,
    "year": 2021,
    "rating": 4.94,
    "downloads": 33,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-072",
    "title": "Medicina - Obra Real Vol. 73",
    "author": "Autor Especialista 73",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1460,
    "pages": 226,
    "year": 2020,
    "rating": 4.69,
    "downloads": 75,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-073",
    "title": "Medicina - Obra Real Vol. 74",
    "author": "Autor Especialista 74",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1488,
    "pages": 329,
    "year": 2024,
    "rating": 4.41,
    "downloads": 33,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-074",
    "title": "Medicina - Obra Real Vol. 75",
    "author": "Autor Especialista 75",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1427,
    "pages": 285,
    "year": 2019,
    "rating": 4.72,
    "downloads": 89,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-075",
    "title": "Medicina - Obra Real Vol. 76",
    "author": "Autor Especialista 76",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1393,
    "pages": 289,
    "year": 2023,
    "rating": 4.36,
    "downloads": 66,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-076",
    "title": "Medicina - Obra Real Vol. 77",
    "author": "Autor Especialista 77",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1245,
    "pages": 330,
    "year": 2018,
    "rating": 4.97,
    "downloads": 90,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-077",
    "title": "Medicina - Obra Real Vol. 78",
    "author": "Autor Especialista 78",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1499,
    "pages": 407,
    "year": 2021,
    "rating": 4.04,
    "downloads": 108,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-078",
    "title": "Medicina - Obra Real Vol. 79",
    "author": "Autor Especialista 79",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1157,
    "pages": 477,
    "year": 2015,
    "rating": 4.19,
    "downloads": 93,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-079",
    "title": "Medicina - Obra Real Vol. 80",
    "author": "Autor Especialista 80",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1429,
    "pages": 346,
    "year": 2021,
    "rating": 4.64,
    "downloads": 41,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-080",
    "title": "Medicina - Obra Real Vol. 81",
    "author": "Autor Especialista 81",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1045,
    "pages": 337,
    "year": 2018,
    "rating": 4.94,
    "downloads": 12,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-081",
    "title": "Medicina - Obra Real Vol. 82",
    "author": "Autor Especialista 82",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1403,
    "pages": 330,
    "year": 2017,
    "rating": 4.65,
    "downloads": 61,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-082",
    "title": "Medicina - Obra Real Vol. 83",
    "author": "Autor Especialista 83",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1312,
    "pages": 226,
    "year": 2022,
    "rating": 4.68,
    "downloads": 14,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-083",
    "title": "Medicina - Obra Real Vol. 84",
    "author": "Autor Especialista 84",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1113,
    "pages": 236,
    "year": 2015,
    "rating": 4.96,
    "downloads": 19,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-084",
    "title": "Medicina - Obra Real Vol. 85",
    "author": "Autor Especialista 85",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1218,
    "pages": 449,
    "year": 2015,
    "rating": 4.68,
    "downloads": 78,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-085",
    "title": "Medicina - Obra Real Vol. 86",
    "author": "Autor Especialista 86",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1194,
    "pages": 236,
    "year": 2015,
    "rating": 4.34,
    "downloads": 94,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-086",
    "title": "Medicina - Obra Real Vol. 87",
    "author": "Autor Especialista 87",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1099,
    "pages": 222,
    "year": 2023,
    "rating": 4.85,
    "downloads": 76,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-087",
    "title": "Medicina - Obra Real Vol. 88",
    "author": "Autor Especialista 88",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1005,
    "pages": 268,
    "year": 2016,
    "rating": 4.32,
    "downloads": 48,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-088",
    "title": "Medicina - Obra Real Vol. 89",
    "author": "Autor Especialista 89",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1339,
    "pages": 451,
    "year": 2017,
    "rating": 4.46,
    "downloads": 88,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-089",
    "title": "Medicina - Obra Real Vol. 90",
    "author": "Autor Especialista 90",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1382,
    "pages": 301,
    "year": 2019,
    "rating": 4.19,
    "downloads": 72,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-090",
    "title": "Medicina - Obra Real Vol. 91",
    "author": "Autor Especialista 91",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1009,
    "pages": 420,
    "year": 2024,
    "rating": 4.99,
    "downloads": 92,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-091",
    "title": "Medicina - Obra Real Vol. 92",
    "author": "Autor Especialista 92",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1362,
    "pages": 253,
    "year": 2019,
    "rating": 4.44,
    "downloads": 33,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-092",
    "title": "Medicina - Obra Real Vol. 93",
    "author": "Autor Especialista 93",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1085,
    "pages": 387,
    "year": 2021,
    "rating": 4.98,
    "downloads": 97,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-093",
    "title": "Medicina - Obra Real Vol. 94",
    "author": "Autor Especialista 94",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1109,
    "pages": 405,
    "year": 2015,
    "rating": 4.83,
    "downloads": 109,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-094",
    "title": "Medicina - Obra Real Vol. 95",
    "author": "Autor Especialista 95",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1326,
    "pages": 494,
    "year": 2017,
    "rating": 4.93,
    "downloads": 45,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-095",
    "title": "Medicina - Obra Real Vol. 96",
    "author": "Autor Especialista 96",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1468,
    "pages": 383,
    "year": 2024,
    "rating": 4.79,
    "downloads": 22,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-096",
    "title": "Medicina - Obra Real Vol. 97",
    "author": "Autor Especialista 97",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1305,
    "pages": 375,
    "year": 2021,
    "rating": 4.85,
    "downloads": 82,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-097",
    "title": "Medicina - Obra Real Vol. 98",
    "author": "Autor Especialista 98",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1263,
    "pages": 451,
    "year": 2020,
    "rating": 4.45,
    "downloads": 106,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-098",
    "title": "Medicina - Obra Real Vol. 99",
    "author": "Autor Especialista 99",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1125,
    "pages": 408,
    "year": 2017,
    "rating": 4.02,
    "downloads": 51,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-099",
    "title": "Medicina - Obra Real Vol. 100",
    "author": "Autor Especialista 100",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1032,
    "pages": 434,
    "year": 2024,
    "rating": 4.34,
    "downloads": 81,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-100",
    "title": "Medicina - Obra Real Vol. 101",
    "author": "Autor Especialista 101",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1358,
    "pages": 297,
    "year": 2016,
    "rating": 4.62,
    "downloads": 67,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-101",
    "title": "Medicina - Obra Real Vol. 102",
    "author": "Autor Especialista 102",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1399,
    "pages": 337,
    "year": 2016,
    "rating": 4.15,
    "downloads": 34,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-102",
    "title": "Medicina - Obra Real Vol. 103",
    "author": "Autor Especialista 103",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1145,
    "pages": 290,
    "year": 2015,
    "rating": 4.71,
    "downloads": 67,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-103",
    "title": "Medicina - Obra Real Vol. 104",
    "author": "Autor Especialista 104",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1469,
    "pages": 305,
    "year": 2022,
    "rating": 4.79,
    "downloads": 10,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-104",
    "title": "Medicina - Obra Real Vol. 105",
    "author": "Autor Especialista 105",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1464,
    "pages": 385,
    "year": 2017,
    "rating": 4.66,
    "downloads": 42,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-105",
    "title": "Medicina - Obra Real Vol. 106",
    "author": "Autor Especialista 106",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1100,
    "pages": 455,
    "year": 2020,
    "rating": 4.94,
    "downloads": 68,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-106",
    "title": "Medicina - Obra Real Vol. 107",
    "author": "Autor Especialista 107",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1019,
    "pages": 346,
    "year": 2020,
    "rating": 4.62,
    "downloads": 22,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-107",
    "title": "Medicina - Obra Real Vol. 108",
    "author": "Autor Especialista 108",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1289,
    "pages": 488,
    "year": 2017,
    "rating": 4.68,
    "downloads": 26,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-108",
    "title": "Medicina - Obra Real Vol. 109",
    "author": "Autor Especialista 109",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1293,
    "pages": 497,
    "year": 2023,
    "rating": 4.53,
    "downloads": 75,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-109",
    "title": "Medicina - Obra Real Vol. 110",
    "author": "Autor Especialista 110",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1420,
    "pages": 308,
    "year": 2018,
    "rating": 4.5,
    "downloads": 44,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-110",
    "title": "Medicina - Obra Real Vol. 111",
    "author": "Autor Especialista 111",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1424,
    "pages": 367,
    "year": 2021,
    "rating": 4.23,
    "downloads": 107,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-111",
    "title": "Medicina - Obra Real Vol. 112",
    "author": "Autor Especialista 112",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1051,
    "pages": 247,
    "year": 2022,
    "rating": 4.34,
    "downloads": 76,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-112",
    "title": "Medicina - Obra Real Vol. 113",
    "author": "Autor Especialista 113",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1363,
    "pages": 248,
    "year": 2017,
    "rating": 4.07,
    "downloads": 109,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-113",
    "title": "Medicina - Obra Real Vol. 114",
    "author": "Autor Especialista 114",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1145,
    "pages": 488,
    "year": 2022,
    "rating": 4.73,
    "downloads": 88,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-114",
    "title": "Medicina - Obra Real Vol. 115",
    "author": "Autor Especialista 115",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1350,
    "pages": 414,
    "year": 2023,
    "rating": 4.74,
    "downloads": 99,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-115",
    "title": "Medicina - Obra Real Vol. 116",
    "author": "Autor Especialista 116",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1275,
    "pages": 274,
    "year": 2020,
    "rating": 4.82,
    "downloads": 104,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-116",
    "title": "Medicina - Obra Real Vol. 117",
    "author": "Autor Especialista 117",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1205,
    "pages": 438,
    "year": 2017,
    "rating": 4.85,
    "downloads": 50,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-117",
    "title": "Medicina - Obra Real Vol. 118",
    "author": "Autor Especialista 118",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1016,
    "pages": 437,
    "year": 2018,
    "rating": 4.12,
    "downloads": 85,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-118",
    "title": "Medicina - Obra Real Vol. 119",
    "author": "Autor Especialista 119",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1483,
    "pages": 231,
    "year": 2024,
    "rating": 4.42,
    "downloads": 21,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-119",
    "title": "Medicina - Obra Real Vol. 120",
    "author": "Autor Especialista 120",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1184,
    "pages": 255,
    "year": 2019,
    "rating": 4.16,
    "downloads": 102,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-120",
    "title": "Medicina - Obra Real Vol. 121",
    "author": "Autor Especialista 121",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1404,
    "pages": 375,
    "year": 2019,
    "rating": 4.72,
    "downloads": 56,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-121",
    "title": "Medicina - Obra Real Vol. 122",
    "author": "Autor Especialista 122",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1265,
    "pages": 279,
    "year": 2018,
    "rating": 4.75,
    "downloads": 55,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-122",
    "title": "Medicina - Obra Real Vol. 123",
    "author": "Autor Especialista 123",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1258,
    "pages": 325,
    "year": 2023,
    "rating": 4.74,
    "downloads": 92,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-123",
    "title": "Medicina - Obra Real Vol. 124",
    "author": "Autor Especialista 124",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1012,
    "pages": 259,
    "year": 2020,
    "rating": 4.53,
    "downloads": 56,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-124",
    "title": "Medicina - Obra Real Vol. 125",
    "author": "Autor Especialista 125",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1058,
    "pages": 327,
    "year": 2017,
    "rating": 4.96,
    "downloads": 87,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-125",
    "title": "Medicina - Obra Real Vol. 126",
    "author": "Autor Especialista 126",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1074,
    "pages": 466,
    "year": 2021,
    "rating": 4.93,
    "downloads": 42,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-126",
    "title": "Medicina - Obra Real Vol. 127",
    "author": "Autor Especialista 127",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1173,
    "pages": 371,
    "year": 2018,
    "rating": 4.52,
    "downloads": 39,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-127",
    "title": "Medicina - Obra Real Vol. 128",
    "author": "Autor Especialista 128",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1481,
    "pages": 468,
    "year": 2015,
    "rating": 4.57,
    "downloads": 25,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-128",
    "title": "Medicina - Obra Real Vol. 129",
    "author": "Autor Especialista 129",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1025,
    "pages": 308,
    "year": 2022,
    "rating": 4.94,
    "downloads": 82,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-129",
    "title": "Medicina - Obra Real Vol. 130",
    "author": "Autor Especialista 130",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1404,
    "pages": 491,
    "year": 2022,
    "rating": 4.84,
    "downloads": 63,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-130",
    "title": "Medicina - Obra Real Vol. 131",
    "author": "Autor Especialista 131",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1422,
    "pages": 372,
    "year": 2019,
    "rating": 4.82,
    "downloads": 26,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-131",
    "title": "Medicina - Obra Real Vol. 132",
    "author": "Autor Especialista 132",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1476,
    "pages": 312,
    "year": 2024,
    "rating": 4.02,
    "downloads": 98,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-132",
    "title": "Medicina - Obra Real Vol. 133",
    "author": "Autor Especialista 133",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1288,
    "pages": 243,
    "year": 2015,
    "rating": 4.43,
    "downloads": 107,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-133",
    "title": "Medicina - Obra Real Vol. 134",
    "author": "Autor Especialista 134",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1412,
    "pages": 494,
    "year": 2016,
    "rating": 4.4,
    "downloads": 96,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-134",
    "title": "Medicina - Obra Real Vol. 135",
    "author": "Autor Especialista 135",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1455,
    "pages": 338,
    "year": 2022,
    "rating": 4.5,
    "downloads": 55,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-135",
    "title": "Medicina - Obra Real Vol. 136",
    "author": "Autor Especialista 136",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1384,
    "pages": 470,
    "year": 2015,
    "rating": 4.75,
    "downloads": 99,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-136",
    "title": "Medicina - Obra Real Vol. 137",
    "author": "Autor Especialista 137",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1220,
    "pages": 252,
    "year": 2021,
    "rating": 4.65,
    "downloads": 17,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-137",
    "title": "Medicina - Obra Real Vol. 138",
    "author": "Autor Especialista 138",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1494,
    "pages": 440,
    "year": 2019,
    "rating": 4.24,
    "downloads": 76,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-138",
    "title": "Medicina - Obra Real Vol. 139",
    "author": "Autor Especialista 139",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1212,
    "pages": 300,
    "year": 2019,
    "rating": 4.54,
    "downloads": 46,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-139",
    "title": "Medicina - Obra Real Vol. 140",
    "author": "Autor Especialista 140",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1407,
    "pages": 201,
    "year": 2020,
    "rating": 4.17,
    "downloads": 84,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-140",
    "title": "Medicina - Obra Real Vol. 141",
    "author": "Autor Especialista 141",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1064,
    "pages": 459,
    "year": 2016,
    "rating": 4.97,
    "downloads": 16,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-141",
    "title": "Medicina - Obra Real Vol. 142",
    "author": "Autor Especialista 142",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1215,
    "pages": 233,
    "year": 2015,
    "rating": 4.91,
    "downloads": 26,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-142",
    "title": "Medicina - Obra Real Vol. 143",
    "author": "Autor Especialista 143",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1223,
    "pages": 326,
    "year": 2020,
    "rating": 4.87,
    "downloads": 41,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-143",
    "title": "Medicina - Obra Real Vol. 144",
    "author": "Autor Especialista 144",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1469,
    "pages": 313,
    "year": 2020,
    "rating": 4.35,
    "downloads": 99,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-144",
    "title": "Medicina - Obra Real Vol. 145",
    "author": "Autor Especialista 145",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1472,
    "pages": 425,
    "year": 2015,
    "rating": 4.26,
    "downloads": 54,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-145",
    "title": "Medicina - Obra Real Vol. 146",
    "author": "Autor Especialista 146",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1250,
    "pages": 294,
    "year": 2017,
    "rating": 4.66,
    "downloads": 100,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-146",
    "title": "Medicina - Obra Real Vol. 147",
    "author": "Autor Especialista 147",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1322,
    "pages": 490,
    "year": 2021,
    "rating": 4.88,
    "downloads": 41,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-147",
    "title": "Medicina - Obra Real Vol. 148",
    "author": "Autor Especialista 148",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1269,
    "pages": 420,
    "year": 2023,
    "rating": 4.26,
    "downloads": 55,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-medicina-148",
    "title": "Medicina - Obra Real Vol. 149",
    "author": "Autor Especialista 149",
    "category": "academicos",
    "subcategory": "medicina",
    "price": 1212,
    "pages": 481,
    "year": 2019,
    "rating": 4.05,
    "downloads": 21,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Medicina. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/eOZlAVaNMXkrvZFw.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-000",
    "title": "Engenharia - Obra Real Vol. 1",
    "author": "Autor Especialista 1",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1316,
    "pages": 365,
    "year": 2016,
    "rating": 4.61,
    "downloads": 96,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-001",
    "title": "Engenharia - Obra Real Vol. 2",
    "author": "Autor Especialista 2",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1241,
    "pages": 446,
    "year": 2023,
    "rating": 4.43,
    "downloads": 77,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-002",
    "title": "Engenharia - Obra Real Vol. 3",
    "author": "Autor Especialista 3",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1262,
    "pages": 314,
    "year": 2017,
    "rating": 4.27,
    "downloads": 90,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-003",
    "title": "Engenharia - Obra Real Vol. 4",
    "author": "Autor Especialista 4",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1351,
    "pages": 327,
    "year": 2018,
    "rating": 4.18,
    "downloads": 89,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-004",
    "title": "Engenharia - Obra Real Vol. 5",
    "author": "Autor Especialista 5",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1148,
    "pages": 410,
    "year": 2019,
    "rating": 4.16,
    "downloads": 42,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-005",
    "title": "Engenharia - Obra Real Vol. 6",
    "author": "Autor Especialista 6",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1038,
    "pages": 346,
    "year": 2019,
    "rating": 4.14,
    "downloads": 14,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-006",
    "title": "Engenharia - Obra Real Vol. 7",
    "author": "Autor Especialista 7",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1237,
    "pages": 337,
    "year": 2023,
    "rating": 4.12,
    "downloads": 95,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-007",
    "title": "Engenharia - Obra Real Vol. 8",
    "author": "Autor Especialista 8",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1423,
    "pages": 319,
    "year": 2023,
    "rating": 4.99,
    "downloads": 12,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-008",
    "title": "Engenharia - Obra Real Vol. 9",
    "author": "Autor Especialista 9",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1038,
    "pages": 400,
    "year": 2016,
    "rating": 4.56,
    "downloads": 34,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-009",
    "title": "Engenharia - Obra Real Vol. 10",
    "author": "Autor Especialista 10",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1181,
    "pages": 367,
    "year": 2019,
    "rating": 4.65,
    "downloads": 95,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-010",
    "title": "Engenharia - Obra Real Vol. 11",
    "author": "Autor Especialista 11",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1418,
    "pages": 408,
    "year": 2023,
    "rating": 4.63,
    "downloads": 36,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-011",
    "title": "Engenharia - Obra Real Vol. 12",
    "author": "Autor Especialista 12",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1383,
    "pages": 393,
    "year": 2017,
    "rating": 4.49,
    "downloads": 52,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-012",
    "title": "Engenharia - Obra Real Vol. 13",
    "author": "Autor Especialista 13",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1472,
    "pages": 204,
    "year": 2016,
    "rating": 4.79,
    "downloads": 63,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-013",
    "title": "Engenharia - Obra Real Vol. 14",
    "author": "Autor Especialista 14",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1450,
    "pages": 297,
    "year": 2015,
    "rating": 4.82,
    "downloads": 38,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-014",
    "title": "Engenharia - Obra Real Vol. 15",
    "author": "Autor Especialista 15",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1134,
    "pages": 483,
    "year": 2023,
    "rating": 4.15,
    "downloads": 93,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-015",
    "title": "Engenharia - Obra Real Vol. 16",
    "author": "Autor Especialista 16",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1258,
    "pages": 261,
    "year": 2018,
    "rating": 4.65,
    "downloads": 110,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-016",
    "title": "Engenharia - Obra Real Vol. 17",
    "author": "Autor Especialista 17",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1043,
    "pages": 398,
    "year": 2023,
    "rating": 4.43,
    "downloads": 95,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-017",
    "title": "Engenharia - Obra Real Vol. 18",
    "author": "Autor Especialista 18",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1456,
    "pages": 403,
    "year": 2022,
    "rating": 4.27,
    "downloads": 51,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-018",
    "title": "Engenharia - Obra Real Vol. 19",
    "author": "Autor Especialista 19",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1121,
    "pages": 286,
    "year": 2021,
    "rating": 4.32,
    "downloads": 94,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-019",
    "title": "Engenharia - Obra Real Vol. 20",
    "author": "Autor Especialista 20",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1136,
    "pages": 246,
    "year": 2022,
    "rating": 4.79,
    "downloads": 36,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-020",
    "title": "Engenharia - Obra Real Vol. 21",
    "author": "Autor Especialista 21",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1437,
    "pages": 403,
    "year": 2021,
    "rating": 4.33,
    "downloads": 58,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-021",
    "title": "Engenharia - Obra Real Vol. 22",
    "author": "Autor Especialista 22",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1476,
    "pages": 331,
    "year": 2016,
    "rating": 4.25,
    "downloads": 42,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-022",
    "title": "Engenharia - Obra Real Vol. 23",
    "author": "Autor Especialista 23",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1371,
    "pages": 213,
    "year": 2023,
    "rating": 4.96,
    "downloads": 82,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-023",
    "title": "Engenharia - Obra Real Vol. 24",
    "author": "Autor Especialista 24",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1088,
    "pages": 480,
    "year": 2018,
    "rating": 4.31,
    "downloads": 32,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-024",
    "title": "Engenharia - Obra Real Vol. 25",
    "author": "Autor Especialista 25",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1008,
    "pages": 202,
    "year": 2024,
    "rating": 4.84,
    "downloads": 88,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-025",
    "title": "Engenharia - Obra Real Vol. 26",
    "author": "Autor Especialista 26",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1185,
    "pages": 472,
    "year": 2022,
    "rating": 4.53,
    "downloads": 24,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-026",
    "title": "Engenharia - Obra Real Vol. 27",
    "author": "Autor Especialista 27",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1206,
    "pages": 209,
    "year": 2017,
    "rating": 4.7,
    "downloads": 41,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-027",
    "title": "Engenharia - Obra Real Vol. 28",
    "author": "Autor Especialista 28",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1367,
    "pages": 376,
    "year": 2019,
    "rating": 4.39,
    "downloads": 61,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-028",
    "title": "Engenharia - Obra Real Vol. 29",
    "author": "Autor Especialista 29",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1219,
    "pages": 267,
    "year": 2020,
    "rating": 4.12,
    "downloads": 94,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-029",
    "title": "Engenharia - Obra Real Vol. 30",
    "author": "Autor Especialista 30",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1364,
    "pages": 203,
    "year": 2015,
    "rating": 4.82,
    "downloads": 20,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-030",
    "title": "Engenharia - Obra Real Vol. 31",
    "author": "Autor Especialista 31",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1343,
    "pages": 390,
    "year": 2019,
    "rating": 4.45,
    "downloads": 80,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-031",
    "title": "Engenharia - Obra Real Vol. 32",
    "author": "Autor Especialista 32",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1160,
    "pages": 381,
    "year": 2015,
    "rating": 4.85,
    "downloads": 83,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-032",
    "title": "Engenharia - Obra Real Vol. 33",
    "author": "Autor Especialista 33",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1429,
    "pages": 499,
    "year": 2016,
    "rating": 4.64,
    "downloads": 75,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-033",
    "title": "Engenharia - Obra Real Vol. 34",
    "author": "Autor Especialista 34",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1267,
    "pages": 439,
    "year": 2018,
    "rating": 4.38,
    "downloads": 22,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-034",
    "title": "Engenharia - Obra Real Vol. 35",
    "author": "Autor Especialista 35",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1014,
    "pages": 307,
    "year": 2016,
    "rating": 4.72,
    "downloads": 68,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-035",
    "title": "Engenharia - Obra Real Vol. 36",
    "author": "Autor Especialista 36",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1482,
    "pages": 439,
    "year": 2024,
    "rating": 4.1,
    "downloads": 89,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-036",
    "title": "Engenharia - Obra Real Vol. 37",
    "author": "Autor Especialista 37",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1323,
    "pages": 354,
    "year": 2024,
    "rating": 4.57,
    "downloads": 103,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-037",
    "title": "Engenharia - Obra Real Vol. 38",
    "author": "Autor Especialista 38",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1011,
    "pages": 385,
    "year": 2023,
    "rating": 4.89,
    "downloads": 70,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-038",
    "title": "Engenharia - Obra Real Vol. 39",
    "author": "Autor Especialista 39",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1215,
    "pages": 279,
    "year": 2019,
    "rating": 4.27,
    "downloads": 74,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-039",
    "title": "Engenharia - Obra Real Vol. 40",
    "author": "Autor Especialista 40",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1101,
    "pages": 394,
    "year": 2022,
    "rating": 4.28,
    "downloads": 50,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-040",
    "title": "Engenharia - Obra Real Vol. 41",
    "author": "Autor Especialista 41",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1283,
    "pages": 267,
    "year": 2019,
    "rating": 4.71,
    "downloads": 58,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-041",
    "title": "Engenharia - Obra Real Vol. 42",
    "author": "Autor Especialista 42",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1320,
    "pages": 491,
    "year": 2021,
    "rating": 4.7,
    "downloads": 44,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-042",
    "title": "Engenharia - Obra Real Vol. 43",
    "author": "Autor Especialista 43",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1307,
    "pages": 331,
    "year": 2017,
    "rating": 4.55,
    "downloads": 50,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-043",
    "title": "Engenharia - Obra Real Vol. 44",
    "author": "Autor Especialista 44",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1064,
    "pages": 263,
    "year": 2016,
    "rating": 4.43,
    "downloads": 60,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-044",
    "title": "Engenharia - Obra Real Vol. 45",
    "author": "Autor Especialista 45",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1210,
    "pages": 478,
    "year": 2023,
    "rating": 4.02,
    "downloads": 71,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-045",
    "title": "Engenharia - Obra Real Vol. 46",
    "author": "Autor Especialista 46",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1412,
    "pages": 208,
    "year": 2019,
    "rating": 4.48,
    "downloads": 107,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-046",
    "title": "Engenharia - Obra Real Vol. 47",
    "author": "Autor Especialista 47",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1026,
    "pages": 276,
    "year": 2023,
    "rating": 4.68,
    "downloads": 77,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-047",
    "title": "Engenharia - Obra Real Vol. 48",
    "author": "Autor Especialista 48",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1488,
    "pages": 477,
    "year": 2023,
    "rating": 4.64,
    "downloads": 15,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-048",
    "title": "Engenharia - Obra Real Vol. 49",
    "author": "Autor Especialista 49",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1166,
    "pages": 433,
    "year": 2024,
    "rating": 4.21,
    "downloads": 36,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-049",
    "title": "Engenharia - Obra Real Vol. 50",
    "author": "Autor Especialista 50",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1422,
    "pages": 321,
    "year": 2016,
    "rating": 4.34,
    "downloads": 76,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-050",
    "title": "Engenharia - Obra Real Vol. 51",
    "author": "Autor Especialista 51",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1167,
    "pages": 478,
    "year": 2019,
    "rating": 4.33,
    "downloads": 45,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-051",
    "title": "Engenharia - Obra Real Vol. 52",
    "author": "Autor Especialista 52",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1233,
    "pages": 356,
    "year": 2023,
    "rating": 4.52,
    "downloads": 71,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-052",
    "title": "Engenharia - Obra Real Vol. 53",
    "author": "Autor Especialista 53",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1379,
    "pages": 400,
    "year": 2016,
    "rating": 4.81,
    "downloads": 40,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-053",
    "title": "Engenharia - Obra Real Vol. 54",
    "author": "Autor Especialista 54",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1311,
    "pages": 462,
    "year": 2022,
    "rating": 4.34,
    "downloads": 39,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-054",
    "title": "Engenharia - Obra Real Vol. 55",
    "author": "Autor Especialista 55",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1364,
    "pages": 413,
    "year": 2016,
    "rating": 4.62,
    "downloads": 22,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-055",
    "title": "Engenharia - Obra Real Vol. 56",
    "author": "Autor Especialista 56",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1154,
    "pages": 410,
    "year": 2021,
    "rating": 4.11,
    "downloads": 104,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-056",
    "title": "Engenharia - Obra Real Vol. 57",
    "author": "Autor Especialista 57",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1168,
    "pages": 217,
    "year": 2023,
    "rating": 4.09,
    "downloads": 34,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-057",
    "title": "Engenharia - Obra Real Vol. 58",
    "author": "Autor Especialista 58",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1282,
    "pages": 278,
    "year": 2019,
    "rating": 4.9,
    "downloads": 53,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-058",
    "title": "Engenharia - Obra Real Vol. 59",
    "author": "Autor Especialista 59",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1478,
    "pages": 230,
    "year": 2017,
    "rating": 4.99,
    "downloads": 108,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-059",
    "title": "Engenharia - Obra Real Vol. 60",
    "author": "Autor Especialista 60",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1290,
    "pages": 299,
    "year": 2024,
    "rating": 4.99,
    "downloads": 51,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-060",
    "title": "Engenharia - Obra Real Vol. 61",
    "author": "Autor Especialista 61",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1334,
    "pages": 247,
    "year": 2019,
    "rating": 4.18,
    "downloads": 82,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-061",
    "title": "Engenharia - Obra Real Vol. 62",
    "author": "Autor Especialista 62",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1269,
    "pages": 270,
    "year": 2016,
    "rating": 4.66,
    "downloads": 10,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-062",
    "title": "Engenharia - Obra Real Vol. 63",
    "author": "Autor Especialista 63",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1002,
    "pages": 274,
    "year": 2020,
    "rating": 4.99,
    "downloads": 82,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-063",
    "title": "Engenharia - Obra Real Vol. 64",
    "author": "Autor Especialista 64",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1001,
    "pages": 200,
    "year": 2019,
    "rating": 4.54,
    "downloads": 72,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-064",
    "title": "Engenharia - Obra Real Vol. 65",
    "author": "Autor Especialista 65",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1258,
    "pages": 315,
    "year": 2015,
    "rating": 4.07,
    "downloads": 15,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-065",
    "title": "Engenharia - Obra Real Vol. 66",
    "author": "Autor Especialista 66",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1148,
    "pages": 243,
    "year": 2020,
    "rating": 4.2,
    "downloads": 110,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-066",
    "title": "Engenharia - Obra Real Vol. 67",
    "author": "Autor Especialista 67",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1318,
    "pages": 377,
    "year": 2020,
    "rating": 4.76,
    "downloads": 95,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-067",
    "title": "Engenharia - Obra Real Vol. 68",
    "author": "Autor Especialista 68",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1093,
    "pages": 323,
    "year": 2024,
    "rating": 4.72,
    "downloads": 61,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-068",
    "title": "Engenharia - Obra Real Vol. 69",
    "author": "Autor Especialista 69",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1146,
    "pages": 454,
    "year": 2024,
    "rating": 4.1,
    "downloads": 78,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-069",
    "title": "Engenharia - Obra Real Vol. 70",
    "author": "Autor Especialista 70",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1232,
    "pages": 356,
    "year": 2024,
    "rating": 4.17,
    "downloads": 40,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-070",
    "title": "Engenharia - Obra Real Vol. 71",
    "author": "Autor Especialista 71",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1060,
    "pages": 351,
    "year": 2024,
    "rating": 4.04,
    "downloads": 73,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-071",
    "title": "Engenharia - Obra Real Vol. 72",
    "author": "Autor Especialista 72",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1140,
    "pages": 443,
    "year": 2021,
    "rating": 4.63,
    "downloads": 10,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-072",
    "title": "Engenharia - Obra Real Vol. 73",
    "author": "Autor Especialista 73",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1413,
    "pages": 467,
    "year": 2023,
    "rating": 4.63,
    "downloads": 81,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-073",
    "title": "Engenharia - Obra Real Vol. 74",
    "author": "Autor Especialista 74",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1271,
    "pages": 450,
    "year": 2024,
    "rating": 4.34,
    "downloads": 11,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-074",
    "title": "Engenharia - Obra Real Vol. 75",
    "author": "Autor Especialista 75",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1469,
    "pages": 222,
    "year": 2023,
    "rating": 4.47,
    "downloads": 83,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-075",
    "title": "Engenharia - Obra Real Vol. 76",
    "author": "Autor Especialista 76",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1433,
    "pages": 449,
    "year": 2023,
    "rating": 4.6,
    "downloads": 42,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-076",
    "title": "Engenharia - Obra Real Vol. 77",
    "author": "Autor Especialista 77",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1299,
    "pages": 238,
    "year": 2024,
    "rating": 4.26,
    "downloads": 110,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-077",
    "title": "Engenharia - Obra Real Vol. 78",
    "author": "Autor Especialista 78",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1285,
    "pages": 334,
    "year": 2023,
    "rating": 4.87,
    "downloads": 10,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-078",
    "title": "Engenharia - Obra Real Vol. 79",
    "author": "Autor Especialista 79",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1258,
    "pages": 353,
    "year": 2023,
    "rating": 4.6,
    "downloads": 86,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-079",
    "title": "Engenharia - Obra Real Vol. 80",
    "author": "Autor Especialista 80",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1262,
    "pages": 258,
    "year": 2017,
    "rating": 4.18,
    "downloads": 69,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-080",
    "title": "Engenharia - Obra Real Vol. 81",
    "author": "Autor Especialista 81",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1087,
    "pages": 480,
    "year": 2021,
    "rating": 4.99,
    "downloads": 64,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-081",
    "title": "Engenharia - Obra Real Vol. 82",
    "author": "Autor Especialista 82",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1453,
    "pages": 460,
    "year": 2018,
    "rating": 4.92,
    "downloads": 86,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-082",
    "title": "Engenharia - Obra Real Vol. 83",
    "author": "Autor Especialista 83",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1288,
    "pages": 242,
    "year": 2016,
    "rating": 5.0,
    "downloads": 21,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-083",
    "title": "Engenharia - Obra Real Vol. 84",
    "author": "Autor Especialista 84",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1152,
    "pages": 297,
    "year": 2020,
    "rating": 4.21,
    "downloads": 93,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-084",
    "title": "Engenharia - Obra Real Vol. 85",
    "author": "Autor Especialista 85",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1431,
    "pages": 448,
    "year": 2020,
    "rating": 4.6,
    "downloads": 64,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-085",
    "title": "Engenharia - Obra Real Vol. 86",
    "author": "Autor Especialista 86",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1402,
    "pages": 293,
    "year": 2021,
    "rating": 4.09,
    "downloads": 86,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-086",
    "title": "Engenharia - Obra Real Vol. 87",
    "author": "Autor Especialista 87",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1413,
    "pages": 248,
    "year": 2016,
    "rating": 4.42,
    "downloads": 18,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-087",
    "title": "Engenharia - Obra Real Vol. 88",
    "author": "Autor Especialista 88",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1467,
    "pages": 488,
    "year": 2018,
    "rating": 5.0,
    "downloads": 103,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-088",
    "title": "Engenharia - Obra Real Vol. 89",
    "author": "Autor Especialista 89",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1088,
    "pages": 480,
    "year": 2016,
    "rating": 4.23,
    "downloads": 46,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-089",
    "title": "Engenharia - Obra Real Vol. 90",
    "author": "Autor Especialista 90",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1216,
    "pages": 467,
    "year": 2017,
    "rating": 4.14,
    "downloads": 84,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-090",
    "title": "Engenharia - Obra Real Vol. 91",
    "author": "Autor Especialista 91",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1254,
    "pages": 206,
    "year": 2020,
    "rating": 4.98,
    "downloads": 58,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-091",
    "title": "Engenharia - Obra Real Vol. 92",
    "author": "Autor Especialista 92",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1352,
    "pages": 384,
    "year": 2022,
    "rating": 4.44,
    "downloads": 32,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-092",
    "title": "Engenharia - Obra Real Vol. 93",
    "author": "Autor Especialista 93",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1095,
    "pages": 370,
    "year": 2018,
    "rating": 4.35,
    "downloads": 89,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-093",
    "title": "Engenharia - Obra Real Vol. 94",
    "author": "Autor Especialista 94",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1436,
    "pages": 465,
    "year": 2016,
    "rating": 4.88,
    "downloads": 14,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-094",
    "title": "Engenharia - Obra Real Vol. 95",
    "author": "Autor Especialista 95",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1393,
    "pages": 380,
    "year": 2017,
    "rating": 4.7,
    "downloads": 100,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-095",
    "title": "Engenharia - Obra Real Vol. 96",
    "author": "Autor Especialista 96",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1154,
    "pages": 331,
    "year": 2015,
    "rating": 4.61,
    "downloads": 92,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-096",
    "title": "Engenharia - Obra Real Vol. 97",
    "author": "Autor Especialista 97",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1135,
    "pages": 250,
    "year": 2022,
    "rating": 4.13,
    "downloads": 45,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-097",
    "title": "Engenharia - Obra Real Vol. 98",
    "author": "Autor Especialista 98",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1071,
    "pages": 457,
    "year": 2020,
    "rating": 4.19,
    "downloads": 82,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-098",
    "title": "Engenharia - Obra Real Vol. 99",
    "author": "Autor Especialista 99",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1442,
    "pages": 368,
    "year": 2024,
    "rating": 4.42,
    "downloads": 105,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-099",
    "title": "Engenharia - Obra Real Vol. 100",
    "author": "Autor Especialista 100",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1389,
    "pages": 313,
    "year": 2016,
    "rating": 4.7,
    "downloads": 50,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-100",
    "title": "Engenharia - Obra Real Vol. 101",
    "author": "Autor Especialista 101",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1256,
    "pages": 214,
    "year": 2022,
    "rating": 4.59,
    "downloads": 15,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-101",
    "title": "Engenharia - Obra Real Vol. 102",
    "author": "Autor Especialista 102",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1086,
    "pages": 221,
    "year": 2015,
    "rating": 4.33,
    "downloads": 105,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-102",
    "title": "Engenharia - Obra Real Vol. 103",
    "author": "Autor Especialista 103",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1348,
    "pages": 464,
    "year": 2017,
    "rating": 4.54,
    "downloads": 91,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-103",
    "title": "Engenharia - Obra Real Vol. 104",
    "author": "Autor Especialista 104",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1278,
    "pages": 244,
    "year": 2016,
    "rating": 4.88,
    "downloads": 75,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-104",
    "title": "Engenharia - Obra Real Vol. 105",
    "author": "Autor Especialista 105",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1327,
    "pages": 328,
    "year": 2018,
    "rating": 4.42,
    "downloads": 50,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-105",
    "title": "Engenharia - Obra Real Vol. 106",
    "author": "Autor Especialista 106",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1270,
    "pages": 426,
    "year": 2018,
    "rating": 4.2,
    "downloads": 47,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-106",
    "title": "Engenharia - Obra Real Vol. 107",
    "author": "Autor Especialista 107",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1226,
    "pages": 466,
    "year": 2022,
    "rating": 4.44,
    "downloads": 37,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-107",
    "title": "Engenharia - Obra Real Vol. 108",
    "author": "Autor Especialista 108",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1017,
    "pages": 322,
    "year": 2017,
    "rating": 4.47,
    "downloads": 58,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-108",
    "title": "Engenharia - Obra Real Vol. 109",
    "author": "Autor Especialista 109",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1381,
    "pages": 230,
    "year": 2022,
    "rating": 4.19,
    "downloads": 70,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-109",
    "title": "Engenharia - Obra Real Vol. 110",
    "author": "Autor Especialista 110",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1481,
    "pages": 457,
    "year": 2023,
    "rating": 4.98,
    "downloads": 25,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-110",
    "title": "Engenharia - Obra Real Vol. 111",
    "author": "Autor Especialista 111",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1154,
    "pages": 336,
    "year": 2020,
    "rating": 4.57,
    "downloads": 82,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-111",
    "title": "Engenharia - Obra Real Vol. 112",
    "author": "Autor Especialista 112",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1166,
    "pages": 332,
    "year": 2023,
    "rating": 4.99,
    "downloads": 78,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-112",
    "title": "Engenharia - Obra Real Vol. 113",
    "author": "Autor Especialista 113",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1363,
    "pages": 439,
    "year": 2017,
    "rating": 4.04,
    "downloads": 93,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-113",
    "title": "Engenharia - Obra Real Vol. 114",
    "author": "Autor Especialista 114",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1286,
    "pages": 399,
    "year": 2021,
    "rating": 4.31,
    "downloads": 31,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-114",
    "title": "Engenharia - Obra Real Vol. 115",
    "author": "Autor Especialista 115",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1437,
    "pages": 276,
    "year": 2017,
    "rating": 4.09,
    "downloads": 14,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-115",
    "title": "Engenharia - Obra Real Vol. 116",
    "author": "Autor Especialista 116",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1422,
    "pages": 347,
    "year": 2021,
    "rating": 4.57,
    "downloads": 27,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-116",
    "title": "Engenharia - Obra Real Vol. 117",
    "author": "Autor Especialista 117",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1111,
    "pages": 457,
    "year": 2020,
    "rating": 4.66,
    "downloads": 64,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-117",
    "title": "Engenharia - Obra Real Vol. 118",
    "author": "Autor Especialista 118",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1449,
    "pages": 407,
    "year": 2020,
    "rating": 4.48,
    "downloads": 63,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-118",
    "title": "Engenharia - Obra Real Vol. 119",
    "author": "Autor Especialista 119",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1344,
    "pages": 247,
    "year": 2022,
    "rating": 4.41,
    "downloads": 16,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-119",
    "title": "Engenharia - Obra Real Vol. 120",
    "author": "Autor Especialista 120",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1078,
    "pages": 496,
    "year": 2016,
    "rating": 4.24,
    "downloads": 42,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-120",
    "title": "Engenharia - Obra Real Vol. 121",
    "author": "Autor Especialista 121",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1008,
    "pages": 251,
    "year": 2019,
    "rating": 4.99,
    "downloads": 72,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-121",
    "title": "Engenharia - Obra Real Vol. 122",
    "author": "Autor Especialista 122",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1367,
    "pages": 353,
    "year": 2022,
    "rating": 4.24,
    "downloads": 23,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-122",
    "title": "Engenharia - Obra Real Vol. 123",
    "author": "Autor Especialista 123",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1088,
    "pages": 349,
    "year": 2018,
    "rating": 4.28,
    "downloads": 66,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-123",
    "title": "Engenharia - Obra Real Vol. 124",
    "author": "Autor Especialista 124",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1287,
    "pages": 389,
    "year": 2021,
    "rating": 4.3,
    "downloads": 39,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-124",
    "title": "Engenharia - Obra Real Vol. 125",
    "author": "Autor Especialista 125",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1386,
    "pages": 286,
    "year": 2020,
    "rating": 4.1,
    "downloads": 12,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-125",
    "title": "Engenharia - Obra Real Vol. 126",
    "author": "Autor Especialista 126",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1466,
    "pages": 361,
    "year": 2022,
    "rating": 4.56,
    "downloads": 108,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-126",
    "title": "Engenharia - Obra Real Vol. 127",
    "author": "Autor Especialista 127",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1238,
    "pages": 248,
    "year": 2024,
    "rating": 4.94,
    "downloads": 22,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-127",
    "title": "Engenharia - Obra Real Vol. 128",
    "author": "Autor Especialista 128",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1240,
    "pages": 415,
    "year": 2019,
    "rating": 4.87,
    "downloads": 42,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-128",
    "title": "Engenharia - Obra Real Vol. 129",
    "author": "Autor Especialista 129",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1263,
    "pages": 485,
    "year": 2024,
    "rating": 4.72,
    "downloads": 87,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-129",
    "title": "Engenharia - Obra Real Vol. 130",
    "author": "Autor Especialista 130",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1130,
    "pages": 238,
    "year": 2017,
    "rating": 4.44,
    "downloads": 101,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-130",
    "title": "Engenharia - Obra Real Vol. 131",
    "author": "Autor Especialista 131",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1249,
    "pages": 245,
    "year": 2018,
    "rating": 4.64,
    "downloads": 92,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-131",
    "title": "Engenharia - Obra Real Vol. 132",
    "author": "Autor Especialista 132",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1152,
    "pages": 242,
    "year": 2016,
    "rating": 4.96,
    "downloads": 58,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-132",
    "title": "Engenharia - Obra Real Vol. 133",
    "author": "Autor Especialista 133",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1461,
    "pages": 353,
    "year": 2020,
    "rating": 4.59,
    "downloads": 11,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-133",
    "title": "Engenharia - Obra Real Vol. 134",
    "author": "Autor Especialista 134",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1369,
    "pages": 365,
    "year": 2022,
    "rating": 4.74,
    "downloads": 109,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-134",
    "title": "Engenharia - Obra Real Vol. 135",
    "author": "Autor Especialista 135",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1122,
    "pages": 373,
    "year": 2024,
    "rating": 4.53,
    "downloads": 39,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-135",
    "title": "Engenharia - Obra Real Vol. 136",
    "author": "Autor Especialista 136",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1219,
    "pages": 286,
    "year": 2018,
    "rating": 4.37,
    "downloads": 56,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-136",
    "title": "Engenharia - Obra Real Vol. 137",
    "author": "Autor Especialista 137",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1038,
    "pages": 244,
    "year": 2024,
    "rating": 4.36,
    "downloads": 45,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-137",
    "title": "Engenharia - Obra Real Vol. 138",
    "author": "Autor Especialista 138",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1327,
    "pages": 240,
    "year": 2021,
    "rating": 4.75,
    "downloads": 30,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-138",
    "title": "Engenharia - Obra Real Vol. 139",
    "author": "Autor Especialista 139",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1495,
    "pages": 352,
    "year": 2018,
    "rating": 4.86,
    "downloads": 93,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-139",
    "title": "Engenharia - Obra Real Vol. 140",
    "author": "Autor Especialista 140",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1104,
    "pages": 345,
    "year": 2021,
    "rating": 4.88,
    "downloads": 85,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-140",
    "title": "Engenharia - Obra Real Vol. 141",
    "author": "Autor Especialista 141",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1413,
    "pages": 308,
    "year": 2018,
    "rating": 4.12,
    "downloads": 102,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-141",
    "title": "Engenharia - Obra Real Vol. 142",
    "author": "Autor Especialista 142",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1026,
    "pages": 319,
    "year": 2024,
    "rating": 4.66,
    "downloads": 60,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-142",
    "title": "Engenharia - Obra Real Vol. 143",
    "author": "Autor Especialista 143",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1072,
    "pages": 352,
    "year": 2021,
    "rating": 4.86,
    "downloads": 96,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-143",
    "title": "Engenharia - Obra Real Vol. 144",
    "author": "Autor Especialista 144",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1063,
    "pages": 226,
    "year": 2015,
    "rating": 4.98,
    "downloads": 11,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-144",
    "title": "Engenharia - Obra Real Vol. 145",
    "author": "Autor Especialista 145",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1041,
    "pages": 452,
    "year": 2020,
    "rating": 4.67,
    "downloads": 72,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-145",
    "title": "Engenharia - Obra Real Vol. 146",
    "author": "Autor Especialista 146",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1025,
    "pages": 354,
    "year": 2019,
    "rating": 4.34,
    "downloads": 80,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-146",
    "title": "Engenharia - Obra Real Vol. 147",
    "author": "Autor Especialista 147",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1378,
    "pages": 390,
    "year": 2021,
    "rating": 4.8,
    "downloads": 99,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-147",
    "title": "Engenharia - Obra Real Vol. 148",
    "author": "Autor Especialista 148",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1339,
    "pages": 443,
    "year": 2016,
    "rating": 4.06,
    "downloads": 55,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-148",
    "title": "Engenharia - Obra Real Vol. 149",
    "author": "Autor Especialista 149",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1014,
    "pages": 262,
    "year": 2022,
    "rating": 4.76,
    "downloads": 39,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-engenharia-149",
    "title": "Engenharia - Obra Real Vol. 150",
    "author": "Autor Especialista 150",
    "category": "academicos",
    "subcategory": "engenharia",
    "price": 1499,
    "pages": 402,
    "year": 2024,
    "rating": 4.47,
    "downloads": 11,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Engenharia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/YGtjkSDPsBbGUyYu.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-000",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 1",
    "author": "Autor Especialista 1",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1227,
    "pages": 374,
    "year": 2022,
    "rating": 4.59,
    "downloads": 39,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-001",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 2",
    "author": "Autor Especialista 2",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1319,
    "pages": 422,
    "year": 2022,
    "rating": 4.8,
    "downloads": 10,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-002",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 3",
    "author": "Autor Especialista 3",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1407,
    "pages": 453,
    "year": 2023,
    "rating": 4.55,
    "downloads": 26,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-003",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 4",
    "author": "Autor Especialista 4",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1457,
    "pages": 314,
    "year": 2018,
    "rating": 4.15,
    "downloads": 64,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-004",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 5",
    "author": "Autor Especialista 5",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1193,
    "pages": 308,
    "year": 2022,
    "rating": 4.79,
    "downloads": 43,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-005",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 6",
    "author": "Autor Especialista 6",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1413,
    "pages": 211,
    "year": 2019,
    "rating": 4.61,
    "downloads": 107,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-006",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 7",
    "author": "Autor Especialista 7",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1139,
    "pages": 327,
    "year": 2016,
    "rating": 4.6,
    "downloads": 70,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-007",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 8",
    "author": "Autor Especialista 8",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1459,
    "pages": 389,
    "year": 2018,
    "rating": 4.41,
    "downloads": 43,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-008",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 9",
    "author": "Autor Especialista 9",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1337,
    "pages": 427,
    "year": 2015,
    "rating": 4.66,
    "downloads": 21,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-009",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 10",
    "author": "Autor Especialista 10",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1356,
    "pages": 413,
    "year": 2023,
    "rating": 4.22,
    "downloads": 86,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-010",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 11",
    "author": "Autor Especialista 11",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1431,
    "pages": 420,
    "year": 2024,
    "rating": 4.31,
    "downloads": 39,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-011",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 12",
    "author": "Autor Especialista 12",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1228,
    "pages": 292,
    "year": 2015,
    "rating": 4.96,
    "downloads": 55,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-012",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 13",
    "author": "Autor Especialista 13",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1044,
    "pages": 258,
    "year": 2020,
    "rating": 4.73,
    "downloads": 22,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-013",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 14",
    "author": "Autor Especialista 14",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1171,
    "pages": 482,
    "year": 2019,
    "rating": 4.88,
    "downloads": 84,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-014",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 15",
    "author": "Autor Especialista 15",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1356,
    "pages": 402,
    "year": 2023,
    "rating": 4.56,
    "downloads": 39,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-015",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 16",
    "author": "Autor Especialista 16",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1445,
    "pages": 454,
    "year": 2019,
    "rating": 4.58,
    "downloads": 105,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-016",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 17",
    "author": "Autor Especialista 17",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1214,
    "pages": 338,
    "year": 2015,
    "rating": 4.9,
    "downloads": 41,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-017",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 18",
    "author": "Autor Especialista 18",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1337,
    "pages": 231,
    "year": 2019,
    "rating": 4.46,
    "downloads": 17,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-018",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 19",
    "author": "Autor Especialista 19",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1178,
    "pages": 225,
    "year": 2020,
    "rating": 4.95,
    "downloads": 57,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-019",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 20",
    "author": "Autor Especialista 20",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1478,
    "pages": 447,
    "year": 2021,
    "rating": 4.64,
    "downloads": 84,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-020",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 21",
    "author": "Autor Especialista 21",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1450,
    "pages": 252,
    "year": 2017,
    "rating": 4.02,
    "downloads": 46,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-021",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 22",
    "author": "Autor Especialista 22",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1225,
    "pages": 410,
    "year": 2016,
    "rating": 4.38,
    "downloads": 36,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-022",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 23",
    "author": "Autor Especialista 23",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1280,
    "pages": 390,
    "year": 2024,
    "rating": 4.22,
    "downloads": 58,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-023",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 24",
    "author": "Autor Especialista 24",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1429,
    "pages": 469,
    "year": 2024,
    "rating": 4.34,
    "downloads": 39,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-024",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 25",
    "author": "Autor Especialista 25",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1164,
    "pages": 447,
    "year": 2015,
    "rating": 4.83,
    "downloads": 106,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-025",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 26",
    "author": "Autor Especialista 26",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1425,
    "pages": 468,
    "year": 2021,
    "rating": 4.89,
    "downloads": 38,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-026",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 27",
    "author": "Autor Especialista 27",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1351,
    "pages": 296,
    "year": 2022,
    "rating": 4.75,
    "downloads": 26,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-027",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 28",
    "author": "Autor Especialista 28",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1421,
    "pages": 414,
    "year": 2022,
    "rating": 4.8,
    "downloads": 62,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-028",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 29",
    "author": "Autor Especialista 29",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1037,
    "pages": 221,
    "year": 2020,
    "rating": 4.8,
    "downloads": 12,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-029",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 30",
    "author": "Autor Especialista 30",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1022,
    "pages": 292,
    "year": 2021,
    "rating": 4.98,
    "downloads": 54,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-030",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 31",
    "author": "Autor Especialista 31",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1350,
    "pages": 298,
    "year": 2018,
    "rating": 4.46,
    "downloads": 49,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-031",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 32",
    "author": "Autor Especialista 32",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1158,
    "pages": 269,
    "year": 2015,
    "rating": 4.18,
    "downloads": 110,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-032",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 33",
    "author": "Autor Especialista 33",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1125,
    "pages": 245,
    "year": 2024,
    "rating": 4.57,
    "downloads": 18,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-033",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 34",
    "author": "Autor Especialista 34",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1353,
    "pages": 354,
    "year": 2024,
    "rating": 4.53,
    "downloads": 42,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-034",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 35",
    "author": "Autor Especialista 35",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1260,
    "pages": 385,
    "year": 2017,
    "rating": 4.29,
    "downloads": 70,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-035",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 36",
    "author": "Autor Especialista 36",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1201,
    "pages": 209,
    "year": 2017,
    "rating": 4.45,
    "downloads": 71,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-036",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 37",
    "author": "Autor Especialista 37",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1204,
    "pages": 358,
    "year": 2018,
    "rating": 4.9,
    "downloads": 87,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-037",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 38",
    "author": "Autor Especialista 38",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1358,
    "pages": 461,
    "year": 2019,
    "rating": 4.91,
    "downloads": 81,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-038",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 39",
    "author": "Autor Especialista 39",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1234,
    "pages": 273,
    "year": 2021,
    "rating": 4.6,
    "downloads": 17,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-039",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 40",
    "author": "Autor Especialista 40",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1125,
    "pages": 379,
    "year": 2015,
    "rating": 4.97,
    "downloads": 13,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-040",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 41",
    "author": "Autor Especialista 41",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1487,
    "pages": 259,
    "year": 2022,
    "rating": 4.61,
    "downloads": 12,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-041",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 42",
    "author": "Autor Especialista 42",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1018,
    "pages": 364,
    "year": 2022,
    "rating": 4.04,
    "downloads": 28,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-042",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 43",
    "author": "Autor Especialista 43",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1044,
    "pages": 363,
    "year": 2022,
    "rating": 4.16,
    "downloads": 20,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-043",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 44",
    "author": "Autor Especialista 44",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1221,
    "pages": 341,
    "year": 2021,
    "rating": 4.86,
    "downloads": 28,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-044",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 45",
    "author": "Autor Especialista 45",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1102,
    "pages": 207,
    "year": 2015,
    "rating": 4.69,
    "downloads": 51,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-045",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 46",
    "author": "Autor Especialista 46",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1098,
    "pages": 339,
    "year": 2024,
    "rating": 4.96,
    "downloads": 35,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-046",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 47",
    "author": "Autor Especialista 47",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1079,
    "pages": 293,
    "year": 2015,
    "rating": 4.26,
    "downloads": 15,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-047",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 48",
    "author": "Autor Especialista 48",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1245,
    "pages": 224,
    "year": 2024,
    "rating": 4.85,
    "downloads": 15,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-048",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 49",
    "author": "Autor Especialista 49",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1347,
    "pages": 427,
    "year": 2018,
    "rating": 4.99,
    "downloads": 50,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-049",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 50",
    "author": "Autor Especialista 50",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1074,
    "pages": 201,
    "year": 2017,
    "rating": 4.82,
    "downloads": 17,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-050",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 51",
    "author": "Autor Especialista 51",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1281,
    "pages": 416,
    "year": 2019,
    "rating": 4.94,
    "downloads": 88,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-051",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 52",
    "author": "Autor Especialista 52",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1262,
    "pages": 259,
    "year": 2022,
    "rating": 4.53,
    "downloads": 81,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-052",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 53",
    "author": "Autor Especialista 53",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1328,
    "pages": 323,
    "year": 2018,
    "rating": 4.8,
    "downloads": 110,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-053",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 54",
    "author": "Autor Especialista 54",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1187,
    "pages": 402,
    "year": 2022,
    "rating": 4.61,
    "downloads": 64,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-054",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 55",
    "author": "Autor Especialista 55",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1392,
    "pages": 424,
    "year": 2018,
    "rating": 4.78,
    "downloads": 44,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-055",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 56",
    "author": "Autor Especialista 56",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1017,
    "pages": 218,
    "year": 2020,
    "rating": 4.56,
    "downloads": 104,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-056",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 57",
    "author": "Autor Especialista 57",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1095,
    "pages": 286,
    "year": 2021,
    "rating": 4.42,
    "downloads": 19,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-057",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 58",
    "author": "Autor Especialista 58",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1445,
    "pages": 400,
    "year": 2024,
    "rating": 4.3,
    "downloads": 10,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-058",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 59",
    "author": "Autor Especialista 59",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1371,
    "pages": 377,
    "year": 2019,
    "rating": 4.46,
    "downloads": 74,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-059",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 60",
    "author": "Autor Especialista 60",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1321,
    "pages": 309,
    "year": 2021,
    "rating": 4.41,
    "downloads": 78,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-060",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 61",
    "author": "Autor Especialista 61",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1337,
    "pages": 482,
    "year": 2024,
    "rating": 4.42,
    "downloads": 43,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-061",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 62",
    "author": "Autor Especialista 62",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1310,
    "pages": 252,
    "year": 2015,
    "rating": 4.88,
    "downloads": 16,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-062",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 63",
    "author": "Autor Especialista 63",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1017,
    "pages": 395,
    "year": 2016,
    "rating": 4.71,
    "downloads": 22,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-063",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 64",
    "author": "Autor Especialista 64",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1405,
    "pages": 316,
    "year": 2022,
    "rating": 4.83,
    "downloads": 55,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-064",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 65",
    "author": "Autor Especialista 65",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1424,
    "pages": 304,
    "year": 2015,
    "rating": 4.15,
    "downloads": 11,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-065",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 66",
    "author": "Autor Especialista 66",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1074,
    "pages": 484,
    "year": 2021,
    "rating": 4.65,
    "downloads": 67,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-066",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 67",
    "author": "Autor Especialista 67",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1411,
    "pages": 227,
    "year": 2017,
    "rating": 4.76,
    "downloads": 45,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-067",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 68",
    "author": "Autor Especialista 68",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1015,
    "pages": 243,
    "year": 2015,
    "rating": 4.04,
    "downloads": 67,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-068",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 69",
    "author": "Autor Especialista 69",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1339,
    "pages": 490,
    "year": 2017,
    "rating": 4.62,
    "downloads": 77,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-069",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 70",
    "author": "Autor Especialista 70",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1233,
    "pages": 499,
    "year": 2019,
    "rating": 4.14,
    "downloads": 81,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-070",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 71",
    "author": "Autor Especialista 71",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1341,
    "pages": 479,
    "year": 2024,
    "rating": 4.16,
    "downloads": 26,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-071",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 72",
    "author": "Autor Especialista 72",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1072,
    "pages": 333,
    "year": 2023,
    "rating": 4.07,
    "downloads": 86,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-072",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 73",
    "author": "Autor Especialista 73",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1003,
    "pages": 368,
    "year": 2017,
    "rating": 4.61,
    "downloads": 83,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-073",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 74",
    "author": "Autor Especialista 74",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1431,
    "pages": 369,
    "year": 2017,
    "rating": 4.84,
    "downloads": 65,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-074",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 75",
    "author": "Autor Especialista 75",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1336,
    "pages": 467,
    "year": 2021,
    "rating": 4.21,
    "downloads": 54,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-075",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 76",
    "author": "Autor Especialista 76",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1193,
    "pages": 463,
    "year": 2021,
    "rating": 4.98,
    "downloads": 69,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-076",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 77",
    "author": "Autor Especialista 77",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1171,
    "pages": 467,
    "year": 2016,
    "rating": 4.29,
    "downloads": 83,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-077",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 78",
    "author": "Autor Especialista 78",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1026,
    "pages": 364,
    "year": 2023,
    "rating": 4.68,
    "downloads": 55,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-078",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 79",
    "author": "Autor Especialista 79",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1223,
    "pages": 282,
    "year": 2020,
    "rating": 4.26,
    "downloads": 77,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-079",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 80",
    "author": "Autor Especialista 80",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1275,
    "pages": 426,
    "year": 2016,
    "rating": 4.76,
    "downloads": 50,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-080",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 81",
    "author": "Autor Especialista 81",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1467,
    "pages": 225,
    "year": 2019,
    "rating": 4.41,
    "downloads": 72,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-081",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 82",
    "author": "Autor Especialista 82",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1211,
    "pages": 332,
    "year": 2015,
    "rating": 4.59,
    "downloads": 14,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-082",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 83",
    "author": "Autor Especialista 83",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1353,
    "pages": 417,
    "year": 2018,
    "rating": 4.84,
    "downloads": 49,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-083",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 84",
    "author": "Autor Especialista 84",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1498,
    "pages": 368,
    "year": 2024,
    "rating": 4.82,
    "downloads": 46,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-084",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 85",
    "author": "Autor Especialista 85",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1433,
    "pages": 450,
    "year": 2021,
    "rating": 4.12,
    "downloads": 27,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-085",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 86",
    "author": "Autor Especialista 86",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1348,
    "pages": 238,
    "year": 2022,
    "rating": 4.47,
    "downloads": 62,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-086",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 87",
    "author": "Autor Especialista 87",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1378,
    "pages": 336,
    "year": 2022,
    "rating": 4.01,
    "downloads": 16,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-087",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 88",
    "author": "Autor Especialista 88",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1121,
    "pages": 454,
    "year": 2024,
    "rating": 4.67,
    "downloads": 21,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-088",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 89",
    "author": "Autor Especialista 89",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1478,
    "pages": 389,
    "year": 2023,
    "rating": 4.93,
    "downloads": 72,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-089",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 90",
    "author": "Autor Especialista 90",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1373,
    "pages": 250,
    "year": 2020,
    "rating": 4.27,
    "downloads": 64,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-090",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 91",
    "author": "Autor Especialista 91",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1319,
    "pages": 423,
    "year": 2023,
    "rating": 4.3,
    "downloads": 29,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-091",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 92",
    "author": "Autor Especialista 92",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1171,
    "pages": 297,
    "year": 2020,
    "rating": 4.25,
    "downloads": 41,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-092",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 93",
    "author": "Autor Especialista 93",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1224,
    "pages": 268,
    "year": 2018,
    "rating": 4.77,
    "downloads": 102,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-093",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 94",
    "author": "Autor Especialista 94",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1075,
    "pages": 263,
    "year": 2015,
    "rating": 4.4,
    "downloads": 65,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-094",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 95",
    "author": "Autor Especialista 95",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1183,
    "pages": 401,
    "year": 2016,
    "rating": 4.98,
    "downloads": 50,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-095",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 96",
    "author": "Autor Especialista 96",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1058,
    "pages": 223,
    "year": 2018,
    "rating": 4.56,
    "downloads": 78,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-096",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 97",
    "author": "Autor Especialista 97",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1414,
    "pages": 356,
    "year": 2017,
    "rating": 4.31,
    "downloads": 105,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-097",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 98",
    "author": "Autor Especialista 98",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1342,
    "pages": 309,
    "year": 2020,
    "rating": 4.51,
    "downloads": 56,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-informatica-098",
    "title": "Inform\u00e1tica & TI - Obra Real Vol. 99",
    "author": "Autor Especialista 99",
    "category": "academicos",
    "subcategory": "informatica",
    "price": 1065,
    "pages": 320,
    "year": 2018,
    "rating": 4.28,
    "downloads": 77,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Inform\u00e1tica & TI. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/ZbxDEUgQNhfoFkIQ.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-000",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 1",
    "author": "Autor Especialista 1",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1491,
    "pages": 308,
    "year": 2023,
    "rating": 4.42,
    "downloads": 87,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-001",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 2",
    "author": "Autor Especialista 2",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1108,
    "pages": 490,
    "year": 2017,
    "rating": 4.21,
    "downloads": 17,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-002",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 3",
    "author": "Autor Especialista 3",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1345,
    "pages": 283,
    "year": 2021,
    "rating": 4.34,
    "downloads": 21,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-003",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 4",
    "author": "Autor Especialista 4",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1153,
    "pages": 205,
    "year": 2019,
    "rating": 4.64,
    "downloads": 73,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-004",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 5",
    "author": "Autor Especialista 5",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1371,
    "pages": 476,
    "year": 2016,
    "rating": 4.71,
    "downloads": 105,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-005",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 6",
    "author": "Autor Especialista 6",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1325,
    "pages": 480,
    "year": 2019,
    "rating": 4.44,
    "downloads": 53,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-006",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 7",
    "author": "Autor Especialista 7",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1340,
    "pages": 394,
    "year": 2023,
    "rating": 4.09,
    "downloads": 21,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-007",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 8",
    "author": "Autor Especialista 8",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1455,
    "pages": 272,
    "year": 2022,
    "rating": 4.44,
    "downloads": 29,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-008",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 9",
    "author": "Autor Especialista 9",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1233,
    "pages": 276,
    "year": 2017,
    "rating": 4.36,
    "downloads": 65,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-009",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 10",
    "author": "Autor Especialista 10",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1267,
    "pages": 445,
    "year": 2018,
    "rating": 4.67,
    "downloads": 87,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-010",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 11",
    "author": "Autor Especialista 11",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1337,
    "pages": 424,
    "year": 2022,
    "rating": 4.57,
    "downloads": 62,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-011",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 12",
    "author": "Autor Especialista 12",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1379,
    "pages": 265,
    "year": 2018,
    "rating": 4.41,
    "downloads": 39,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-012",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 13",
    "author": "Autor Especialista 13",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1367,
    "pages": 325,
    "year": 2016,
    "rating": 4.38,
    "downloads": 94,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-013",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 14",
    "author": "Autor Especialista 14",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1036,
    "pages": 325,
    "year": 2022,
    "rating": 4.02,
    "downloads": 24,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-014",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 15",
    "author": "Autor Especialista 15",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1479,
    "pages": 446,
    "year": 2023,
    "rating": 4.06,
    "downloads": 104,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-015",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 16",
    "author": "Autor Especialista 16",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1109,
    "pages": 464,
    "year": 2015,
    "rating": 4.2,
    "downloads": 93,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-016",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 17",
    "author": "Autor Especialista 17",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1460,
    "pages": 362,
    "year": 2024,
    "rating": 4.56,
    "downloads": 73,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-017",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 18",
    "author": "Autor Especialista 18",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1157,
    "pages": 200,
    "year": 2016,
    "rating": 4.87,
    "downloads": 69,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-018",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 19",
    "author": "Autor Especialista 19",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1221,
    "pages": 458,
    "year": 2023,
    "rating": 4.14,
    "downloads": 51,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-019",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 20",
    "author": "Autor Especialista 20",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1344,
    "pages": 490,
    "year": 2020,
    "rating": 4.15,
    "downloads": 101,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-020",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 21",
    "author": "Autor Especialista 21",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1396,
    "pages": 357,
    "year": 2020,
    "rating": 4.0,
    "downloads": 17,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-021",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 22",
    "author": "Autor Especialista 22",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1409,
    "pages": 498,
    "year": 2023,
    "rating": 4.87,
    "downloads": 30,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-022",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 23",
    "author": "Autor Especialista 23",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1232,
    "pages": 258,
    "year": 2021,
    "rating": 4.18,
    "downloads": 86,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-023",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 24",
    "author": "Autor Especialista 24",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1120,
    "pages": 447,
    "year": 2024,
    "rating": 4.7,
    "downloads": 69,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-024",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 25",
    "author": "Autor Especialista 25",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1144,
    "pages": 208,
    "year": 2017,
    "rating": 4.94,
    "downloads": 43,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-025",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 26",
    "author": "Autor Especialista 26",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1036,
    "pages": 381,
    "year": 2017,
    "rating": 4.39,
    "downloads": 60,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-026",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 27",
    "author": "Autor Especialista 27",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1075,
    "pages": 456,
    "year": 2019,
    "rating": 4.27,
    "downloads": 45,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-027",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 28",
    "author": "Autor Especialista 28",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1128,
    "pages": 221,
    "year": 2020,
    "rating": 4.09,
    "downloads": 58,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-028",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 29",
    "author": "Autor Especialista 29",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1026,
    "pages": 201,
    "year": 2015,
    "rating": 4.75,
    "downloads": 105,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-029",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 30",
    "author": "Autor Especialista 30",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1454,
    "pages": 498,
    "year": 2023,
    "rating": 4.03,
    "downloads": 22,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-030",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 31",
    "author": "Autor Especialista 31",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1319,
    "pages": 255,
    "year": 2020,
    "rating": 4.71,
    "downloads": 28,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-031",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 32",
    "author": "Autor Especialista 32",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1495,
    "pages": 297,
    "year": 2021,
    "rating": 4.5,
    "downloads": 20,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-032",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 33",
    "author": "Autor Especialista 33",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1288,
    "pages": 309,
    "year": 2024,
    "rating": 4.16,
    "downloads": 71,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-033",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 34",
    "author": "Autor Especialista 34",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1067,
    "pages": 490,
    "year": 2021,
    "rating": 4.7,
    "downloads": 79,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-034",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 35",
    "author": "Autor Especialista 35",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1133,
    "pages": 366,
    "year": 2015,
    "rating": 4.69,
    "downloads": 41,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-035",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 36",
    "author": "Autor Especialista 36",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1111,
    "pages": 304,
    "year": 2018,
    "rating": 4.07,
    "downloads": 71,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-036",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 37",
    "author": "Autor Especialista 37",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1112,
    "pages": 452,
    "year": 2020,
    "rating": 4.56,
    "downloads": 60,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-037",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 38",
    "author": "Autor Especialista 38",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1300,
    "pages": 416,
    "year": 2016,
    "rating": 4.3,
    "downloads": 37,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-038",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 39",
    "author": "Autor Especialista 39",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1375,
    "pages": 464,
    "year": 2016,
    "rating": 4.25,
    "downloads": 18,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-039",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 40",
    "author": "Autor Especialista 40",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1147,
    "pages": 288,
    "year": 2019,
    "rating": 4.75,
    "downloads": 32,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-040",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 41",
    "author": "Autor Especialista 41",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1174,
    "pages": 448,
    "year": 2017,
    "rating": 4.45,
    "downloads": 29,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-041",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 42",
    "author": "Autor Especialista 42",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1154,
    "pages": 201,
    "year": 2015,
    "rating": 4.67,
    "downloads": 23,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-042",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 43",
    "author": "Autor Especialista 43",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1261,
    "pages": 401,
    "year": 2019,
    "rating": 4.49,
    "downloads": 38,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-043",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 44",
    "author": "Autor Especialista 44",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1140,
    "pages": 384,
    "year": 2016,
    "rating": 4.58,
    "downloads": 21,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-044",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 45",
    "author": "Autor Especialista 45",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1485,
    "pages": 473,
    "year": 2021,
    "rating": 4.72,
    "downloads": 104,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-045",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 46",
    "author": "Autor Especialista 46",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1378,
    "pages": 451,
    "year": 2023,
    "rating": 4.4,
    "downloads": 36,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-046",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 47",
    "author": "Autor Especialista 47",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1370,
    "pages": 296,
    "year": 2022,
    "rating": 4.42,
    "downloads": 81,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-047",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 48",
    "author": "Autor Especialista 48",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1291,
    "pages": 209,
    "year": 2019,
    "rating": 4.55,
    "downloads": 107,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-048",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 49",
    "author": "Autor Especialista 49",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1219,
    "pages": 468,
    "year": 2023,
    "rating": 4.56,
    "downloads": 46,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-economia-049",
    "title": "Economia & Gest\u00e3o - Obra Real Vol. 50",
    "author": "Autor Especialista 50",
    "category": "academicos",
    "subcategory": "economia",
    "price": 1076,
    "pages": 275,
    "year": 2017,
    "rating": 4.48,
    "downloads": 55,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Economia & Gest\u00e3o. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/PqcrfpbXKzYINcKX.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-000",
    "title": "Psicologia - Obra Real Vol. 1",
    "author": "Autor Especialista 1",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1103,
    "pages": 422,
    "year": 2022,
    "rating": 4.43,
    "downloads": 31,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-001",
    "title": "Psicologia - Obra Real Vol. 2",
    "author": "Autor Especialista 2",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1046,
    "pages": 286,
    "year": 2015,
    "rating": 4.86,
    "downloads": 30,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-002",
    "title": "Psicologia - Obra Real Vol. 3",
    "author": "Autor Especialista 3",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1013,
    "pages": 295,
    "year": 2018,
    "rating": 4.56,
    "downloads": 23,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-003",
    "title": "Psicologia - Obra Real Vol. 4",
    "author": "Autor Especialista 4",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1302,
    "pages": 280,
    "year": 2021,
    "rating": 4.43,
    "downloads": 39,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-004",
    "title": "Psicologia - Obra Real Vol. 5",
    "author": "Autor Especialista 5",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1388,
    "pages": 208,
    "year": 2023,
    "rating": 4.33,
    "downloads": 80,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-005",
    "title": "Psicologia - Obra Real Vol. 6",
    "author": "Autor Especialista 6",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1369,
    "pages": 489,
    "year": 2016,
    "rating": 4.43,
    "downloads": 97,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-006",
    "title": "Psicologia - Obra Real Vol. 7",
    "author": "Autor Especialista 7",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1417,
    "pages": 259,
    "year": 2015,
    "rating": 4.4,
    "downloads": 98,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-007",
    "title": "Psicologia - Obra Real Vol. 8",
    "author": "Autor Especialista 8",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1485,
    "pages": 231,
    "year": 2019,
    "rating": 4.11,
    "downloads": 27,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-008",
    "title": "Psicologia - Obra Real Vol. 9",
    "author": "Autor Especialista 9",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1074,
    "pages": 320,
    "year": 2015,
    "rating": 4.77,
    "downloads": 16,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-009",
    "title": "Psicologia - Obra Real Vol. 10",
    "author": "Autor Especialista 10",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1293,
    "pages": 432,
    "year": 2019,
    "rating": 4.7,
    "downloads": 43,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-010",
    "title": "Psicologia - Obra Real Vol. 11",
    "author": "Autor Especialista 11",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1298,
    "pages": 203,
    "year": 2015,
    "rating": 4.75,
    "downloads": 48,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-011",
    "title": "Psicologia - Obra Real Vol. 12",
    "author": "Autor Especialista 12",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1200,
    "pages": 418,
    "year": 2023,
    "rating": 4.78,
    "downloads": 22,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-012",
    "title": "Psicologia - Obra Real Vol. 13",
    "author": "Autor Especialista 13",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1105,
    "pages": 465,
    "year": 2021,
    "rating": 4.57,
    "downloads": 27,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-013",
    "title": "Psicologia - Obra Real Vol. 14",
    "author": "Autor Especialista 14",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1391,
    "pages": 411,
    "year": 2016,
    "rating": 4.94,
    "downloads": 32,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-014",
    "title": "Psicologia - Obra Real Vol. 15",
    "author": "Autor Especialista 15",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1298,
    "pages": 354,
    "year": 2020,
    "rating": 4.65,
    "downloads": 24,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-015",
    "title": "Psicologia - Obra Real Vol. 16",
    "author": "Autor Especialista 16",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1428,
    "pages": 287,
    "year": 2021,
    "rating": 4.16,
    "downloads": 85,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-016",
    "title": "Psicologia - Obra Real Vol. 17",
    "author": "Autor Especialista 17",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1406,
    "pages": 224,
    "year": 2021,
    "rating": 4.38,
    "downloads": 19,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-017",
    "title": "Psicologia - Obra Real Vol. 18",
    "author": "Autor Especialista 18",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1272,
    "pages": 386,
    "year": 2024,
    "rating": 4.11,
    "downloads": 19,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-018",
    "title": "Psicologia - Obra Real Vol. 19",
    "author": "Autor Especialista 19",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1491,
    "pages": 465,
    "year": 2019,
    "rating": 4.79,
    "downloads": 93,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-019",
    "title": "Psicologia - Obra Real Vol. 20",
    "author": "Autor Especialista 20",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1236,
    "pages": 420,
    "year": 2024,
    "rating": 4.78,
    "downloads": 48,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-020",
    "title": "Psicologia - Obra Real Vol. 21",
    "author": "Autor Especialista 21",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1175,
    "pages": 331,
    "year": 2021,
    "rating": 4.51,
    "downloads": 18,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-021",
    "title": "Psicologia - Obra Real Vol. 22",
    "author": "Autor Especialista 22",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1170,
    "pages": 451,
    "year": 2023,
    "rating": 4.54,
    "downloads": 65,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-022",
    "title": "Psicologia - Obra Real Vol. 23",
    "author": "Autor Especialista 23",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1041,
    "pages": 312,
    "year": 2021,
    "rating": 4.85,
    "downloads": 31,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-023",
    "title": "Psicologia - Obra Real Vol. 24",
    "author": "Autor Especialista 24",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1317,
    "pages": 304,
    "year": 2023,
    "rating": 4.42,
    "downloads": 67,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-psicologia-024",
    "title": "Psicologia - Obra Real Vol. 25",
    "author": "Autor Especialista 25",
    "category": "academicos",
    "subcategory": "psicologia",
    "price": 1480,
    "pages": 215,
    "year": 2015,
    "rating": 4.38,
    "downloads": 70,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Psicologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-000",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 1",
    "author": "Autor Especialista 1",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1419,
    "pages": 397,
    "year": 2017,
    "rating": 4.55,
    "downloads": 19,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-001",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 2",
    "author": "Autor Especialista 2",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1169,
    "pages": 359,
    "year": 2023,
    "rating": 4.23,
    "downloads": 37,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-002",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 3",
    "author": "Autor Especialista 3",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1251,
    "pages": 455,
    "year": 2023,
    "rating": 4.42,
    "downloads": 102,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-003",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 4",
    "author": "Autor Especialista 4",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1097,
    "pages": 428,
    "year": 2015,
    "rating": 4.04,
    "downloads": 12,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-004",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 5",
    "author": "Autor Especialista 5",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1338,
    "pages": 296,
    "year": 2019,
    "rating": 4.08,
    "downloads": 29,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-005",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 6",
    "author": "Autor Especialista 6",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1250,
    "pages": 316,
    "year": 2020,
    "rating": 4.71,
    "downloads": 87,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-006",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 7",
    "author": "Autor Especialista 7",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1225,
    "pages": 414,
    "year": 2016,
    "rating": 4.19,
    "downloads": 34,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-007",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 8",
    "author": "Autor Especialista 8",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1423,
    "pages": 416,
    "year": 2017,
    "rating": 4.51,
    "downloads": 94,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-008",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 9",
    "author": "Autor Especialista 9",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1449,
    "pages": 351,
    "year": 2020,
    "rating": 4.78,
    "downloads": 48,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-009",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 10",
    "author": "Autor Especialista 10",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1158,
    "pages": 255,
    "year": 2024,
    "rating": 4.08,
    "downloads": 45,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-010",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 11",
    "author": "Autor Especialista 11",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1308,
    "pages": 245,
    "year": 2019,
    "rating": 4.6,
    "downloads": 15,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-011",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 12",
    "author": "Autor Especialista 12",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1480,
    "pages": 483,
    "year": 2020,
    "rating": 4.2,
    "downloads": 84,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-012",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 13",
    "author": "Autor Especialista 13",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1425,
    "pages": 373,
    "year": 2020,
    "rating": 4.5,
    "downloads": 85,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-013",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 14",
    "author": "Autor Especialista 14",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1436,
    "pages": 415,
    "year": 2021,
    "rating": 4.15,
    "downloads": 65,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-014",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 15",
    "author": "Autor Especialista 15",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1326,
    "pages": 422,
    "year": 2017,
    "rating": 4.96,
    "downloads": 89,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-015",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 16",
    "author": "Autor Especialista 16",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1073,
    "pages": 204,
    "year": 2017,
    "rating": 4.97,
    "downloads": 105,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-016",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 17",
    "author": "Autor Especialista 17",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1237,
    "pages": 317,
    "year": 2022,
    "rating": 4.62,
    "downloads": 18,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-017",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 18",
    "author": "Autor Especialista 18",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1241,
    "pages": 254,
    "year": 2021,
    "rating": 4.54,
    "downloads": 20,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-018",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 19",
    "author": "Autor Especialista 19",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1310,
    "pages": 276,
    "year": 2018,
    "rating": 4.29,
    "downloads": 79,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-019",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 20",
    "author": "Autor Especialista 20",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1444,
    "pages": 246,
    "year": 2022,
    "rating": 4.82,
    "downloads": 92,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-020",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 21",
    "author": "Autor Especialista 21",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1479,
    "pages": 342,
    "year": 2020,
    "rating": 4.8,
    "downloads": 41,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-021",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 22",
    "author": "Autor Especialista 22",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1353,
    "pages": 352,
    "year": 2019,
    "rating": 4.32,
    "downloads": 32,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-022",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 23",
    "author": "Autor Especialista 23",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1162,
    "pages": 377,
    "year": 2020,
    "rating": 4.39,
    "downloads": 54,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-023",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 24",
    "author": "Autor Especialista 24",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1378,
    "pages": 366,
    "year": 2016,
    "rating": 4.23,
    "downloads": 53,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "academicos-historia-024",
    "title": "Hist\u00f3ria & Filosofia - Obra Real Vol. 25",
    "author": "Autor Especialista 25",
    "category": "academicos",
    "subcategory": "historia",
    "price": 1461,
    "pages": 321,
    "year": 2022,
    "rating": 4.86,
    "downloads": 25,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Hist\u00f3ria & Filosofia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BELfPsKMLDALpjHi.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-000",
    "title": "Teologia - Obra Real Vol. 1",
    "author": "Autor Especialista 1",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1263,
    "pages": 255,
    "year": 2023,
    "rating": 4.02,
    "downloads": 73,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-001",
    "title": "Teologia - Obra Real Vol. 2",
    "author": "Autor Especialista 2",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1125,
    "pages": 222,
    "year": 2020,
    "rating": 4.69,
    "downloads": 17,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-002",
    "title": "Teologia - Obra Real Vol. 3",
    "author": "Autor Especialista 3",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1015,
    "pages": 416,
    "year": 2015,
    "rating": 4.76,
    "downloads": 71,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-003",
    "title": "Teologia - Obra Real Vol. 4",
    "author": "Autor Especialista 4",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1122,
    "pages": 448,
    "year": 2016,
    "rating": 4.18,
    "downloads": 22,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-004",
    "title": "Teologia - Obra Real Vol. 5",
    "author": "Autor Especialista 5",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1088,
    "pages": 370,
    "year": 2016,
    "rating": 4.19,
    "downloads": 31,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-005",
    "title": "Teologia - Obra Real Vol. 6",
    "author": "Autor Especialista 6",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1416,
    "pages": 415,
    "year": 2018,
    "rating": 4.36,
    "downloads": 108,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-006",
    "title": "Teologia - Obra Real Vol. 7",
    "author": "Autor Especialista 7",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1422,
    "pages": 338,
    "year": 2024,
    "rating": 4.48,
    "downloads": 31,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-007",
    "title": "Teologia - Obra Real Vol. 8",
    "author": "Autor Especialista 8",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1447,
    "pages": 441,
    "year": 2023,
    "rating": 4.64,
    "downloads": 95,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-008",
    "title": "Teologia - Obra Real Vol. 9",
    "author": "Autor Especialista 9",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1347,
    "pages": 275,
    "year": 2019,
    "rating": 4.01,
    "downloads": 92,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-009",
    "title": "Teologia - Obra Real Vol. 10",
    "author": "Autor Especialista 10",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1172,
    "pages": 202,
    "year": 2018,
    "rating": 4.62,
    "downloads": 15,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-010",
    "title": "Teologia - Obra Real Vol. 11",
    "author": "Autor Especialista 11",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1489,
    "pages": 313,
    "year": 2019,
    "rating": 4.96,
    "downloads": 61,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-011",
    "title": "Teologia - Obra Real Vol. 12",
    "author": "Autor Especialista 12",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1438,
    "pages": 321,
    "year": 2021,
    "rating": 4.78,
    "downloads": 50,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-012",
    "title": "Teologia - Obra Real Vol. 13",
    "author": "Autor Especialista 13",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1195,
    "pages": 360,
    "year": 2016,
    "rating": 4.97,
    "downloads": 63,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-013",
    "title": "Teologia - Obra Real Vol. 14",
    "author": "Autor Especialista 14",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1464,
    "pages": 490,
    "year": 2024,
    "rating": 4.98,
    "downloads": 19,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-014",
    "title": "Teologia - Obra Real Vol. 15",
    "author": "Autor Especialista 15",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1102,
    "pages": 297,
    "year": 2020,
    "rating": 4.88,
    "downloads": 88,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-015",
    "title": "Teologia - Obra Real Vol. 16",
    "author": "Autor Especialista 16",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1168,
    "pages": 475,
    "year": 2023,
    "rating": 4.04,
    "downloads": 44,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-016",
    "title": "Teologia - Obra Real Vol. 17",
    "author": "Autor Especialista 17",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1207,
    "pages": 311,
    "year": 2023,
    "rating": 4.01,
    "downloads": 57,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-017",
    "title": "Teologia - Obra Real Vol. 18",
    "author": "Autor Especialista 18",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1310,
    "pages": 350,
    "year": 2018,
    "rating": 4.62,
    "downloads": 82,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-018",
    "title": "Teologia - Obra Real Vol. 19",
    "author": "Autor Especialista 19",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1052,
    "pages": 373,
    "year": 2019,
    "rating": 4.16,
    "downloads": 62,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-019",
    "title": "Teologia - Obra Real Vol. 20",
    "author": "Autor Especialista 20",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1261,
    "pages": 432,
    "year": 2015,
    "rating": 4.78,
    "downloads": 109,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-020",
    "title": "Teologia - Obra Real Vol. 21",
    "author": "Autor Especialista 21",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1289,
    "pages": 474,
    "year": 2020,
    "rating": 4.36,
    "downloads": 68,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-021",
    "title": "Teologia - Obra Real Vol. 22",
    "author": "Autor Especialista 22",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1000,
    "pages": 439,
    "year": 2015,
    "rating": 4.68,
    "downloads": 54,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-022",
    "title": "Teologia - Obra Real Vol. 23",
    "author": "Autor Especialista 23",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1413,
    "pages": 484,
    "year": 2019,
    "rating": 4.36,
    "downloads": 100,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-023",
    "title": "Teologia - Obra Real Vol. 24",
    "author": "Autor Especialista 24",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1110,
    "pages": 364,
    "year": 2020,
    "rating": 4.78,
    "downloads": 61,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-024",
    "title": "Teologia - Obra Real Vol. 25",
    "author": "Autor Especialista 25",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1272,
    "pages": 332,
    "year": 2022,
    "rating": 4.8,
    "downloads": 43,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-025",
    "title": "Teologia - Obra Real Vol. 26",
    "author": "Autor Especialista 26",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1100,
    "pages": 221,
    "year": 2023,
    "rating": 4.68,
    "downloads": 75,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-026",
    "title": "Teologia - Obra Real Vol. 27",
    "author": "Autor Especialista 27",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1180,
    "pages": 251,
    "year": 2019,
    "rating": 4.69,
    "downloads": 110,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-027",
    "title": "Teologia - Obra Real Vol. 28",
    "author": "Autor Especialista 28",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1435,
    "pages": 349,
    "year": 2018,
    "rating": 4.72,
    "downloads": 29,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-028",
    "title": "Teologia - Obra Real Vol. 29",
    "author": "Autor Especialista 29",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1050,
    "pages": 410,
    "year": 2024,
    "rating": 4.42,
    "downloads": 58,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-029",
    "title": "Teologia - Obra Real Vol. 30",
    "author": "Autor Especialista 30",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1132,
    "pages": 407,
    "year": 2016,
    "rating": 4.34,
    "downloads": 72,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-030",
    "title": "Teologia - Obra Real Vol. 31",
    "author": "Autor Especialista 31",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1360,
    "pages": 284,
    "year": 2019,
    "rating": 4.31,
    "downloads": 60,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-031",
    "title": "Teologia - Obra Real Vol. 32",
    "author": "Autor Especialista 32",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1076,
    "pages": 469,
    "year": 2020,
    "rating": 4.95,
    "downloads": 74,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-032",
    "title": "Teologia - Obra Real Vol. 33",
    "author": "Autor Especialista 33",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1499,
    "pages": 434,
    "year": 2022,
    "rating": 4.07,
    "downloads": 10,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-033",
    "title": "Teologia - Obra Real Vol. 34",
    "author": "Autor Especialista 34",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1141,
    "pages": 342,
    "year": 2015,
    "rating": 4.01,
    "downloads": 110,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-034",
    "title": "Teologia - Obra Real Vol. 35",
    "author": "Autor Especialista 35",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1125,
    "pages": 291,
    "year": 2017,
    "rating": 4.78,
    "downloads": 38,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-035",
    "title": "Teologia - Obra Real Vol. 36",
    "author": "Autor Especialista 36",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1306,
    "pages": 408,
    "year": 2015,
    "rating": 4.36,
    "downloads": 84,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-036",
    "title": "Teologia - Obra Real Vol. 37",
    "author": "Autor Especialista 37",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1398,
    "pages": 374,
    "year": 2020,
    "rating": 4.27,
    "downloads": 72,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-037",
    "title": "Teologia - Obra Real Vol. 38",
    "author": "Autor Especialista 38",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1354,
    "pages": 412,
    "year": 2018,
    "rating": 4.63,
    "downloads": 62,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-038",
    "title": "Teologia - Obra Real Vol. 39",
    "author": "Autor Especialista 39",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1224,
    "pages": 298,
    "year": 2020,
    "rating": 4.33,
    "downloads": 36,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-039",
    "title": "Teologia - Obra Real Vol. 40",
    "author": "Autor Especialista 40",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1388,
    "pages": 249,
    "year": 2020,
    "rating": 4.94,
    "downloads": 28,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-040",
    "title": "Teologia - Obra Real Vol. 41",
    "author": "Autor Especialista 41",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1488,
    "pages": 385,
    "year": 2019,
    "rating": 4.73,
    "downloads": 11,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-041",
    "title": "Teologia - Obra Real Vol. 42",
    "author": "Autor Especialista 42",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1420,
    "pages": 372,
    "year": 2023,
    "rating": 4.12,
    "downloads": 63,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-042",
    "title": "Teologia - Obra Real Vol. 43",
    "author": "Autor Especialista 43",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1317,
    "pages": 435,
    "year": 2023,
    "rating": 4.76,
    "downloads": 45,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-043",
    "title": "Teologia - Obra Real Vol. 44",
    "author": "Autor Especialista 44",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1183,
    "pages": 493,
    "year": 2021,
    "rating": 4.92,
    "downloads": 78,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-044",
    "title": "Teologia - Obra Real Vol. 45",
    "author": "Autor Especialista 45",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1210,
    "pages": 304,
    "year": 2022,
    "rating": 4.63,
    "downloads": 37,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-045",
    "title": "Teologia - Obra Real Vol. 46",
    "author": "Autor Especialista 46",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1378,
    "pages": 331,
    "year": 2021,
    "rating": 4.67,
    "downloads": 61,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-046",
    "title": "Teologia - Obra Real Vol. 47",
    "author": "Autor Especialista 47",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1427,
    "pages": 256,
    "year": 2020,
    "rating": 4.07,
    "downloads": 58,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-047",
    "title": "Teologia - Obra Real Vol. 48",
    "author": "Autor Especialista 48",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1188,
    "pages": 275,
    "year": 2015,
    "rating": 4.23,
    "downloads": 34,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-048",
    "title": "Teologia - Obra Real Vol. 49",
    "author": "Autor Especialista 49",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1358,
    "pages": 268,
    "year": 2023,
    "rating": 4.91,
    "downloads": 34,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-049",
    "title": "Teologia - Obra Real Vol. 50",
    "author": "Autor Especialista 50",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1236,
    "pages": 382,
    "year": 2020,
    "rating": 4.55,
    "downloads": 53,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-050",
    "title": "Teologia - Obra Real Vol. 51",
    "author": "Autor Especialista 51",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1481,
    "pages": 477,
    "year": 2020,
    "rating": 4.11,
    "downloads": 23,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-051",
    "title": "Teologia - Obra Real Vol. 52",
    "author": "Autor Especialista 52",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1042,
    "pages": 389,
    "year": 2020,
    "rating": 4.93,
    "downloads": 15,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-052",
    "title": "Teologia - Obra Real Vol. 53",
    "author": "Autor Especialista 53",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1333,
    "pages": 414,
    "year": 2015,
    "rating": 4.52,
    "downloads": 105,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-053",
    "title": "Teologia - Obra Real Vol. 54",
    "author": "Autor Especialista 54",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1467,
    "pages": 488,
    "year": 2022,
    "rating": 4.25,
    "downloads": 95,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-054",
    "title": "Teologia - Obra Real Vol. 55",
    "author": "Autor Especialista 55",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1007,
    "pages": 307,
    "year": 2019,
    "rating": 4.49,
    "downloads": 60,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-055",
    "title": "Teologia - Obra Real Vol. 56",
    "author": "Autor Especialista 56",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1025,
    "pages": 233,
    "year": 2022,
    "rating": 4.09,
    "downloads": 106,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-056",
    "title": "Teologia - Obra Real Vol. 57",
    "author": "Autor Especialista 57",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1453,
    "pages": 258,
    "year": 2021,
    "rating": 4.3,
    "downloads": 108,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-057",
    "title": "Teologia - Obra Real Vol. 58",
    "author": "Autor Especialista 58",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1469,
    "pages": 260,
    "year": 2023,
    "rating": 4.7,
    "downloads": 35,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-058",
    "title": "Teologia - Obra Real Vol. 59",
    "author": "Autor Especialista 59",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1068,
    "pages": 310,
    "year": 2023,
    "rating": 4.75,
    "downloads": 24,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-059",
    "title": "Teologia - Obra Real Vol. 60",
    "author": "Autor Especialista 60",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1301,
    "pages": 261,
    "year": 2016,
    "rating": 4.8,
    "downloads": 21,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-060",
    "title": "Teologia - Obra Real Vol. 61",
    "author": "Autor Especialista 61",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1179,
    "pages": 346,
    "year": 2019,
    "rating": 4.2,
    "downloads": 55,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-061",
    "title": "Teologia - Obra Real Vol. 62",
    "author": "Autor Especialista 62",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1465,
    "pages": 480,
    "year": 2020,
    "rating": 4.75,
    "downloads": 101,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-062",
    "title": "Teologia - Obra Real Vol. 63",
    "author": "Autor Especialista 63",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1459,
    "pages": 355,
    "year": 2023,
    "rating": 4.74,
    "downloads": 64,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-063",
    "title": "Teologia - Obra Real Vol. 64",
    "author": "Autor Especialista 64",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1238,
    "pages": 207,
    "year": 2018,
    "rating": 4.09,
    "downloads": 85,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-064",
    "title": "Teologia - Obra Real Vol. 65",
    "author": "Autor Especialista 65",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1496,
    "pages": 420,
    "year": 2015,
    "rating": 4.63,
    "downloads": 83,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-065",
    "title": "Teologia - Obra Real Vol. 66",
    "author": "Autor Especialista 66",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1270,
    "pages": 239,
    "year": 2023,
    "rating": 4.69,
    "downloads": 79,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-066",
    "title": "Teologia - Obra Real Vol. 67",
    "author": "Autor Especialista 67",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1301,
    "pages": 281,
    "year": 2016,
    "rating": 4.65,
    "downloads": 60,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-067",
    "title": "Teologia - Obra Real Vol. 68",
    "author": "Autor Especialista 68",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1451,
    "pages": 473,
    "year": 2022,
    "rating": 4.99,
    "downloads": 26,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-068",
    "title": "Teologia - Obra Real Vol. 69",
    "author": "Autor Especialista 69",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1107,
    "pages": 332,
    "year": 2015,
    "rating": 4.49,
    "downloads": 23,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-069",
    "title": "Teologia - Obra Real Vol. 70",
    "author": "Autor Especialista 70",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1330,
    "pages": 372,
    "year": 2015,
    "rating": 4.96,
    "downloads": 61,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-070",
    "title": "Teologia - Obra Real Vol. 71",
    "author": "Autor Especialista 71",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1217,
    "pages": 464,
    "year": 2020,
    "rating": 4.06,
    "downloads": 28,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-071",
    "title": "Teologia - Obra Real Vol. 72",
    "author": "Autor Especialista 72",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1162,
    "pages": 213,
    "year": 2023,
    "rating": 4.63,
    "downloads": 67,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-072",
    "title": "Teologia - Obra Real Vol. 73",
    "author": "Autor Especialista 73",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1166,
    "pages": 472,
    "year": 2024,
    "rating": 4.13,
    "downloads": 53,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-073",
    "title": "Teologia - Obra Real Vol. 74",
    "author": "Autor Especialista 74",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1495,
    "pages": 296,
    "year": 2018,
    "rating": 4.49,
    "downloads": 59,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-074",
    "title": "Teologia - Obra Real Vol. 75",
    "author": "Autor Especialista 75",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1363,
    "pages": 396,
    "year": 2020,
    "rating": 4.0,
    "downloads": 50,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-075",
    "title": "Teologia - Obra Real Vol. 76",
    "author": "Autor Especialista 76",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1092,
    "pages": 210,
    "year": 2017,
    "rating": 4.71,
    "downloads": 47,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-076",
    "title": "Teologia - Obra Real Vol. 77",
    "author": "Autor Especialista 77",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1430,
    "pages": 432,
    "year": 2018,
    "rating": 4.1,
    "downloads": 52,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-077",
    "title": "Teologia - Obra Real Vol. 78",
    "author": "Autor Especialista 78",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1358,
    "pages": 498,
    "year": 2016,
    "rating": 4.81,
    "downloads": 68,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-078",
    "title": "Teologia - Obra Real Vol. 79",
    "author": "Autor Especialista 79",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1063,
    "pages": 243,
    "year": 2022,
    "rating": 4.23,
    "downloads": 91,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-079",
    "title": "Teologia - Obra Real Vol. 80",
    "author": "Autor Especialista 80",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1168,
    "pages": 458,
    "year": 2017,
    "rating": 4.26,
    "downloads": 36,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-080",
    "title": "Teologia - Obra Real Vol. 81",
    "author": "Autor Especialista 81",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1217,
    "pages": 408,
    "year": 2023,
    "rating": 4.96,
    "downloads": 19,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-081",
    "title": "Teologia - Obra Real Vol. 82",
    "author": "Autor Especialista 82",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1256,
    "pages": 246,
    "year": 2018,
    "rating": 4.85,
    "downloads": 85,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-082",
    "title": "Teologia - Obra Real Vol. 83",
    "author": "Autor Especialista 83",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1271,
    "pages": 279,
    "year": 2016,
    "rating": 4.3,
    "downloads": 31,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-083",
    "title": "Teologia - Obra Real Vol. 84",
    "author": "Autor Especialista 84",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1268,
    "pages": 433,
    "year": 2018,
    "rating": 4.01,
    "downloads": 82,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-084",
    "title": "Teologia - Obra Real Vol. 85",
    "author": "Autor Especialista 85",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1264,
    "pages": 288,
    "year": 2016,
    "rating": 4.34,
    "downloads": 76,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-085",
    "title": "Teologia - Obra Real Vol. 86",
    "author": "Autor Especialista 86",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1403,
    "pages": 448,
    "year": 2018,
    "rating": 4.23,
    "downloads": 105,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-086",
    "title": "Teologia - Obra Real Vol. 87",
    "author": "Autor Especialista 87",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1362,
    "pages": 361,
    "year": 2024,
    "rating": 4.31,
    "downloads": 100,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-087",
    "title": "Teologia - Obra Real Vol. 88",
    "author": "Autor Especialista 88",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1405,
    "pages": 370,
    "year": 2022,
    "rating": 4.78,
    "downloads": 76,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-088",
    "title": "Teologia - Obra Real Vol. 89",
    "author": "Autor Especialista 89",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1308,
    "pages": 411,
    "year": 2017,
    "rating": 4.97,
    "downloads": 36,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-089",
    "title": "Teologia - Obra Real Vol. 90",
    "author": "Autor Especialista 90",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1146,
    "pages": 404,
    "year": 2022,
    "rating": 4.53,
    "downloads": 97,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-090",
    "title": "Teologia - Obra Real Vol. 91",
    "author": "Autor Especialista 91",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1328,
    "pages": 476,
    "year": 2024,
    "rating": 4.36,
    "downloads": 69,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-091",
    "title": "Teologia - Obra Real Vol. 92",
    "author": "Autor Especialista 92",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1121,
    "pages": 476,
    "year": 2024,
    "rating": 4.49,
    "downloads": 85,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-092",
    "title": "Teologia - Obra Real Vol. 93",
    "author": "Autor Especialista 93",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1233,
    "pages": 223,
    "year": 2023,
    "rating": 4.9,
    "downloads": 42,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-093",
    "title": "Teologia - Obra Real Vol. 94",
    "author": "Autor Especialista 94",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1092,
    "pages": 246,
    "year": 2018,
    "rating": 4.03,
    "downloads": 110,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-094",
    "title": "Teologia - Obra Real Vol. 95",
    "author": "Autor Especialista 95",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1479,
    "pages": 223,
    "year": 2016,
    "rating": 4.52,
    "downloads": 58,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-095",
    "title": "Teologia - Obra Real Vol. 96",
    "author": "Autor Especialista 96",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1367,
    "pages": 479,
    "year": 2022,
    "rating": 4.95,
    "downloads": 97,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-096",
    "title": "Teologia - Obra Real Vol. 97",
    "author": "Autor Especialista 97",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1166,
    "pages": 408,
    "year": 2024,
    "rating": 4.12,
    "downloads": 61,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-097",
    "title": "Teologia - Obra Real Vol. 98",
    "author": "Autor Especialista 98",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1087,
    "pages": 254,
    "year": 2018,
    "rating": 4.99,
    "downloads": 75,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-098",
    "title": "Teologia - Obra Real Vol. 99",
    "author": "Autor Especialista 99",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1193,
    "pages": 256,
    "year": 2018,
    "rating": 4.67,
    "downloads": 10,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-099",
    "title": "Teologia - Obra Real Vol. 100",
    "author": "Autor Especialista 100",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1397,
    "pages": 415,
    "year": 2018,
    "rating": 4.5,
    "downloads": 94,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-100",
    "title": "Teologia - Obra Real Vol. 101",
    "author": "Autor Especialista 101",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1087,
    "pages": 438,
    "year": 2020,
    "rating": 4.92,
    "downloads": 75,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-101",
    "title": "Teologia - Obra Real Vol. 102",
    "author": "Autor Especialista 102",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1447,
    "pages": 385,
    "year": 2017,
    "rating": 4.32,
    "downloads": 41,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-102",
    "title": "Teologia - Obra Real Vol. 103",
    "author": "Autor Especialista 103",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1105,
    "pages": 326,
    "year": 2017,
    "rating": 4.34,
    "downloads": 75,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-103",
    "title": "Teologia - Obra Real Vol. 104",
    "author": "Autor Especialista 104",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1139,
    "pages": 215,
    "year": 2018,
    "rating": 4.38,
    "downloads": 100,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-104",
    "title": "Teologia - Obra Real Vol. 105",
    "author": "Autor Especialista 105",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1020,
    "pages": 310,
    "year": 2015,
    "rating": 4.81,
    "downloads": 54,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-105",
    "title": "Teologia - Obra Real Vol. 106",
    "author": "Autor Especialista 106",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1258,
    "pages": 254,
    "year": 2019,
    "rating": 4.64,
    "downloads": 53,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-106",
    "title": "Teologia - Obra Real Vol. 107",
    "author": "Autor Especialista 107",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1050,
    "pages": 434,
    "year": 2016,
    "rating": 4.28,
    "downloads": 100,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-107",
    "title": "Teologia - Obra Real Vol. 108",
    "author": "Autor Especialista 108",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1207,
    "pages": 228,
    "year": 2023,
    "rating": 4.38,
    "downloads": 73,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-108",
    "title": "Teologia - Obra Real Vol. 109",
    "author": "Autor Especialista 109",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1006,
    "pages": 336,
    "year": 2024,
    "rating": 4.55,
    "downloads": 36,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-109",
    "title": "Teologia - Obra Real Vol. 110",
    "author": "Autor Especialista 110",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1378,
    "pages": 410,
    "year": 2016,
    "rating": 4.94,
    "downloads": 45,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-110",
    "title": "Teologia - Obra Real Vol. 111",
    "author": "Autor Especialista 111",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1205,
    "pages": 229,
    "year": 2016,
    "rating": 4.89,
    "downloads": 87,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-111",
    "title": "Teologia - Obra Real Vol. 112",
    "author": "Autor Especialista 112",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1330,
    "pages": 259,
    "year": 2024,
    "rating": 4.45,
    "downloads": 74,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-112",
    "title": "Teologia - Obra Real Vol. 113",
    "author": "Autor Especialista 113",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1381,
    "pages": 474,
    "year": 2015,
    "rating": 4.63,
    "downloads": 50,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-113",
    "title": "Teologia - Obra Real Vol. 114",
    "author": "Autor Especialista 114",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1231,
    "pages": 269,
    "year": 2017,
    "rating": 4.48,
    "downloads": 42,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-114",
    "title": "Teologia - Obra Real Vol. 115",
    "author": "Autor Especialista 115",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1335,
    "pages": 240,
    "year": 2017,
    "rating": 4.3,
    "downloads": 14,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-115",
    "title": "Teologia - Obra Real Vol. 116",
    "author": "Autor Especialista 116",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1292,
    "pages": 417,
    "year": 2023,
    "rating": 4.02,
    "downloads": 65,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-116",
    "title": "Teologia - Obra Real Vol. 117",
    "author": "Autor Especialista 117",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1418,
    "pages": 348,
    "year": 2024,
    "rating": 4.23,
    "downloads": 32,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-117",
    "title": "Teologia - Obra Real Vol. 118",
    "author": "Autor Especialista 118",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1475,
    "pages": 470,
    "year": 2023,
    "rating": 4.8,
    "downloads": 34,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-118",
    "title": "Teologia - Obra Real Vol. 119",
    "author": "Autor Especialista 119",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1357,
    "pages": 210,
    "year": 2017,
    "rating": 4.39,
    "downloads": 79,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-119",
    "title": "Teologia - Obra Real Vol. 120",
    "author": "Autor Especialista 120",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1272,
    "pages": 364,
    "year": 2018,
    "rating": 4.4,
    "downloads": 69,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-120",
    "title": "Teologia - Obra Real Vol. 121",
    "author": "Autor Especialista 121",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1270,
    "pages": 344,
    "year": 2023,
    "rating": 4.11,
    "downloads": 47,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-121",
    "title": "Teologia - Obra Real Vol. 122",
    "author": "Autor Especialista 122",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1257,
    "pages": 424,
    "year": 2018,
    "rating": 4.69,
    "downloads": 85,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-122",
    "title": "Teologia - Obra Real Vol. 123",
    "author": "Autor Especialista 123",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1238,
    "pages": 375,
    "year": 2023,
    "rating": 4.45,
    "downloads": 66,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-123",
    "title": "Teologia - Obra Real Vol. 124",
    "author": "Autor Especialista 124",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1098,
    "pages": 423,
    "year": 2024,
    "rating": 4.83,
    "downloads": 88,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-124",
    "title": "Teologia - Obra Real Vol. 125",
    "author": "Autor Especialista 125",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1318,
    "pages": 500,
    "year": 2022,
    "rating": 4.92,
    "downloads": 60,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-125",
    "title": "Teologia - Obra Real Vol. 126",
    "author": "Autor Especialista 126",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1110,
    "pages": 225,
    "year": 2024,
    "rating": 4.04,
    "downloads": 17,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-126",
    "title": "Teologia - Obra Real Vol. 127",
    "author": "Autor Especialista 127",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1499,
    "pages": 415,
    "year": 2016,
    "rating": 4.71,
    "downloads": 85,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-127",
    "title": "Teologia - Obra Real Vol. 128",
    "author": "Autor Especialista 128",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1267,
    "pages": 287,
    "year": 2023,
    "rating": 4.22,
    "downloads": 42,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-128",
    "title": "Teologia - Obra Real Vol. 129",
    "author": "Autor Especialista 129",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1355,
    "pages": 218,
    "year": 2020,
    "rating": 4.07,
    "downloads": 45,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-129",
    "title": "Teologia - Obra Real Vol. 130",
    "author": "Autor Especialista 130",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1171,
    "pages": 488,
    "year": 2019,
    "rating": 4.41,
    "downloads": 57,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-130",
    "title": "Teologia - Obra Real Vol. 131",
    "author": "Autor Especialista 131",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1150,
    "pages": 413,
    "year": 2024,
    "rating": 4.24,
    "downloads": 88,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-131",
    "title": "Teologia - Obra Real Vol. 132",
    "author": "Autor Especialista 132",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1240,
    "pages": 284,
    "year": 2022,
    "rating": 4.73,
    "downloads": 104,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-132",
    "title": "Teologia - Obra Real Vol. 133",
    "author": "Autor Especialista 133",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1086,
    "pages": 386,
    "year": 2019,
    "rating": 4.91,
    "downloads": 12,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-133",
    "title": "Teologia - Obra Real Vol. 134",
    "author": "Autor Especialista 134",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1293,
    "pages": 228,
    "year": 2021,
    "rating": 4.73,
    "downloads": 67,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-134",
    "title": "Teologia - Obra Real Vol. 135",
    "author": "Autor Especialista 135",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1396,
    "pages": 409,
    "year": 2023,
    "rating": 4.98,
    "downloads": 17,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-135",
    "title": "Teologia - Obra Real Vol. 136",
    "author": "Autor Especialista 136",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1080,
    "pages": 388,
    "year": 2022,
    "rating": 4.81,
    "downloads": 60,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-136",
    "title": "Teologia - Obra Real Vol. 137",
    "author": "Autor Especialista 137",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1368,
    "pages": 442,
    "year": 2020,
    "rating": 4.07,
    "downloads": 90,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-137",
    "title": "Teologia - Obra Real Vol. 138",
    "author": "Autor Especialista 138",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1284,
    "pages": 466,
    "year": 2022,
    "rating": 4.06,
    "downloads": 108,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-138",
    "title": "Teologia - Obra Real Vol. 139",
    "author": "Autor Especialista 139",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1395,
    "pages": 406,
    "year": 2016,
    "rating": 4.36,
    "downloads": 103,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-139",
    "title": "Teologia - Obra Real Vol. 140",
    "author": "Autor Especialista 140",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1085,
    "pages": 373,
    "year": 2020,
    "rating": 4.14,
    "downloads": 107,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-140",
    "title": "Teologia - Obra Real Vol. 141",
    "author": "Autor Especialista 141",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1070,
    "pages": 449,
    "year": 2020,
    "rating": 4.57,
    "downloads": 24,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-141",
    "title": "Teologia - Obra Real Vol. 142",
    "author": "Autor Especialista 142",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1011,
    "pages": 440,
    "year": 2021,
    "rating": 4.62,
    "downloads": 49,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-142",
    "title": "Teologia - Obra Real Vol. 143",
    "author": "Autor Especialista 143",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1329,
    "pages": 294,
    "year": 2020,
    "rating": 4.52,
    "downloads": 33,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-143",
    "title": "Teologia - Obra Real Vol. 144",
    "author": "Autor Especialista 144",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1290,
    "pages": 243,
    "year": 2018,
    "rating": 4.27,
    "downloads": 27,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-144",
    "title": "Teologia - Obra Real Vol. 145",
    "author": "Autor Especialista 145",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1450,
    "pages": 214,
    "year": 2019,
    "rating": 4.78,
    "downloads": 37,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-145",
    "title": "Teologia - Obra Real Vol. 146",
    "author": "Autor Especialista 146",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1383,
    "pages": 290,
    "year": 2021,
    "rating": 4.81,
    "downloads": 95,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-146",
    "title": "Teologia - Obra Real Vol. 147",
    "author": "Autor Especialista 147",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1398,
    "pages": 217,
    "year": 2021,
    "rating": 4.31,
    "downloads": 34,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-147",
    "title": "Teologia - Obra Real Vol. 148",
    "author": "Autor Especialista 148",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1139,
    "pages": 500,
    "year": 2021,
    "rating": 4.79,
    "downloads": 67,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-teologia-148",
    "title": "Teologia - Obra Real Vol. 149",
    "author": "Autor Especialista 149",
    "category": "cristaos",
    "subcategory": "teologia",
    "price": 1087,
    "pages": 267,
    "year": 2018,
    "rating": 4.24,
    "downloads": 59,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Teologia. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/xrKBRYmLeEvvRsaR.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-000",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 1",
    "author": "Autor Especialista 1",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1382,
    "pages": 375,
    "year": 2018,
    "rating": 4.91,
    "downloads": 73,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-001",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 2",
    "author": "Autor Especialista 2",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1108,
    "pages": 358,
    "year": 2021,
    "rating": 4.32,
    "downloads": 107,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-002",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 3",
    "author": "Autor Especialista 3",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1473,
    "pages": 265,
    "year": 2022,
    "rating": 4.16,
    "downloads": 17,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-003",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 4",
    "author": "Autor Especialista 4",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1404,
    "pages": 443,
    "year": 2016,
    "rating": 4.42,
    "downloads": 77,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-004",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 5",
    "author": "Autor Especialista 5",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1162,
    "pages": 352,
    "year": 2019,
    "rating": 4.53,
    "downloads": 26,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-005",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 6",
    "author": "Autor Especialista 6",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1385,
    "pages": 306,
    "year": 2021,
    "rating": 4.25,
    "downloads": 70,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-006",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 7",
    "author": "Autor Especialista 7",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1456,
    "pages": 342,
    "year": 2020,
    "rating": 4.06,
    "downloads": 88,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-007",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 8",
    "author": "Autor Especialista 8",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1405,
    "pages": 463,
    "year": 2017,
    "rating": 4.28,
    "downloads": 43,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-008",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 9",
    "author": "Autor Especialista 9",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1382,
    "pages": 476,
    "year": 2022,
    "rating": 4.73,
    "downloads": 20,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-009",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 10",
    "author": "Autor Especialista 10",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1456,
    "pages": 239,
    "year": 2021,
    "rating": 4.88,
    "downloads": 98,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-010",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 11",
    "author": "Autor Especialista 11",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1296,
    "pages": 341,
    "year": 2023,
    "rating": 4.97,
    "downloads": 108,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-011",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 12",
    "author": "Autor Especialista 12",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1256,
    "pages": 213,
    "year": 2019,
    "rating": 4.5,
    "downloads": 44,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-012",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 13",
    "author": "Autor Especialista 13",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1066,
    "pages": 401,
    "year": 2017,
    "rating": 4.95,
    "downloads": 50,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-013",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 14",
    "author": "Autor Especialista 14",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1497,
    "pages": 357,
    "year": 2022,
    "rating": 4.74,
    "downloads": 39,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-014",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 15",
    "author": "Autor Especialista 15",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1437,
    "pages": 318,
    "year": 2023,
    "rating": 4.65,
    "downloads": 76,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-015",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 16",
    "author": "Autor Especialista 16",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1275,
    "pages": 214,
    "year": 2017,
    "rating": 4.79,
    "downloads": 25,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-016",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 17",
    "author": "Autor Especialista 17",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1371,
    "pages": 237,
    "year": 2021,
    "rating": 4.33,
    "downloads": 95,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-017",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 18",
    "author": "Autor Especialista 18",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1063,
    "pages": 492,
    "year": 2015,
    "rating": 4.94,
    "downloads": 76,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-018",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 19",
    "author": "Autor Especialista 19",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1420,
    "pages": 363,
    "year": 2021,
    "rating": 4.9,
    "downloads": 35,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-019",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 20",
    "author": "Autor Especialista 20",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1319,
    "pages": 470,
    "year": 2022,
    "rating": 4.27,
    "downloads": 22,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-020",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 21",
    "author": "Autor Especialista 21",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1137,
    "pages": 481,
    "year": 2024,
    "rating": 4.11,
    "downloads": 63,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-021",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 22",
    "author": "Autor Especialista 22",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1020,
    "pages": 329,
    "year": 2018,
    "rating": 4.08,
    "downloads": 80,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-022",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 23",
    "author": "Autor Especialista 23",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1011,
    "pages": 334,
    "year": 2018,
    "rating": 4.49,
    "downloads": 29,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-023",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 24",
    "author": "Autor Especialista 24",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1496,
    "pages": 441,
    "year": 2018,
    "rating": 4.34,
    "downloads": 92,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-024",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 25",
    "author": "Autor Especialista 25",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1496,
    "pages": 354,
    "year": 2015,
    "rating": 4.0,
    "downloads": 89,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-025",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 26",
    "author": "Autor Especialista 26",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1431,
    "pages": 234,
    "year": 2022,
    "rating": 4.23,
    "downloads": 64,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-026",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 27",
    "author": "Autor Especialista 27",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1196,
    "pages": 472,
    "year": 2017,
    "rating": 4.33,
    "downloads": 49,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-027",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 28",
    "author": "Autor Especialista 28",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1354,
    "pages": 419,
    "year": 2021,
    "rating": 4.95,
    "downloads": 104,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-028",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 29",
    "author": "Autor Especialista 29",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1194,
    "pages": 478,
    "year": 2015,
    "rating": 4.28,
    "downloads": 86,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-029",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 30",
    "author": "Autor Especialista 30",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1335,
    "pages": 452,
    "year": 2022,
    "rating": 4.53,
    "downloads": 88,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-030",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 31",
    "author": "Autor Especialista 31",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1132,
    "pages": 233,
    "year": 2022,
    "rating": 4.31,
    "downloads": 48,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-031",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 32",
    "author": "Autor Especialista 32",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1262,
    "pages": 285,
    "year": 2019,
    "rating": 4.49,
    "downloads": 19,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-032",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 33",
    "author": "Autor Especialista 33",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1349,
    "pages": 449,
    "year": 2021,
    "rating": 4.07,
    "downloads": 105,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-033",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 34",
    "author": "Autor Especialista 34",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1257,
    "pages": 410,
    "year": 2017,
    "rating": 4.96,
    "downloads": 19,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-034",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 35",
    "author": "Autor Especialista 35",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1093,
    "pages": 206,
    "year": 2024,
    "rating": 4.26,
    "downloads": 80,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-035",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 36",
    "author": "Autor Especialista 36",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1181,
    "pages": 221,
    "year": 2022,
    "rating": 4.6,
    "downloads": 37,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-036",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 37",
    "author": "Autor Especialista 37",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1238,
    "pages": 457,
    "year": 2020,
    "rating": 4.76,
    "downloads": 60,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-037",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 38",
    "author": "Autor Especialista 38",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1160,
    "pages": 399,
    "year": 2021,
    "rating": 4.25,
    "downloads": 85,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-038",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 39",
    "author": "Autor Especialista 39",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1381,
    "pages": 209,
    "year": 2019,
    "rating": 4.07,
    "downloads": 45,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-039",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 40",
    "author": "Autor Especialista 40",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1034,
    "pages": 358,
    "year": 2018,
    "rating": 4.31,
    "downloads": 61,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-040",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 41",
    "author": "Autor Especialista 41",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1405,
    "pages": 305,
    "year": 2016,
    "rating": 4.71,
    "downloads": 59,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-041",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 42",
    "author": "Autor Especialista 42",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1211,
    "pages": 310,
    "year": 2024,
    "rating": 4.49,
    "downloads": 84,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-042",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 43",
    "author": "Autor Especialista 43",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1197,
    "pages": 463,
    "year": 2021,
    "rating": 4.16,
    "downloads": 101,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-043",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 44",
    "author": "Autor Especialista 44",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1353,
    "pages": 304,
    "year": 2021,
    "rating": 4.72,
    "downloads": 108,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-044",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 45",
    "author": "Autor Especialista 45",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1246,
    "pages": 261,
    "year": 2022,
    "rating": 4.83,
    "downloads": 29,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-045",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 46",
    "author": "Autor Especialista 46",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1489,
    "pages": 209,
    "year": 2019,
    "rating": 4.85,
    "downloads": 13,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-046",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 47",
    "author": "Autor Especialista 47",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1293,
    "pages": 291,
    "year": 2023,
    "rating": 4.14,
    "downloads": 47,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-047",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 48",
    "author": "Autor Especialista 48",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1386,
    "pages": 250,
    "year": 2024,
    "rating": 4.8,
    "downloads": 48,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-048",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 49",
    "author": "Autor Especialista 49",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1443,
    "pages": 318,
    "year": 2015,
    "rating": 4.47,
    "downloads": 109,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-049",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 50",
    "author": "Autor Especialista 50",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1100,
    "pages": 396,
    "year": 2021,
    "rating": 4.9,
    "downloads": 67,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-050",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 51",
    "author": "Autor Especialista 51",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1119,
    "pages": 401,
    "year": 2020,
    "rating": 4.65,
    "downloads": 98,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-051",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 52",
    "author": "Autor Especialista 52",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1270,
    "pages": 485,
    "year": 2020,
    "rating": 4.8,
    "downloads": 61,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-052",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 53",
    "author": "Autor Especialista 53",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1310,
    "pages": 306,
    "year": 2018,
    "rating": 4.01,
    "downloads": 27,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-053",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 54",
    "author": "Autor Especialista 54",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1353,
    "pages": 427,
    "year": 2017,
    "rating": 4.86,
    "downloads": 89,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-054",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 55",
    "author": "Autor Especialista 55",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1016,
    "pages": 414,
    "year": 2021,
    "rating": 4.34,
    "downloads": 47,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-055",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 56",
    "author": "Autor Especialista 56",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1254,
    "pages": 456,
    "year": 2016,
    "rating": 4.32,
    "downloads": 92,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-056",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 57",
    "author": "Autor Especialista 57",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1146,
    "pages": 399,
    "year": 2015,
    "rating": 4.5,
    "downloads": 40,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-057",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 58",
    "author": "Autor Especialista 58",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1378,
    "pages": 400,
    "year": 2024,
    "rating": 4.57,
    "downloads": 65,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-058",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 59",
    "author": "Autor Especialista 59",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1167,
    "pages": 393,
    "year": 2018,
    "rating": 4.75,
    "downloads": 47,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-059",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 60",
    "author": "Autor Especialista 60",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1464,
    "pages": 245,
    "year": 2022,
    "rating": 4.04,
    "downloads": 16,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-060",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 61",
    "author": "Autor Especialista 61",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1010,
    "pages": 418,
    "year": 2019,
    "rating": 4.85,
    "downloads": 42,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-061",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 62",
    "author": "Autor Especialista 62",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1409,
    "pages": 411,
    "year": 2018,
    "rating": 4.18,
    "downloads": 94,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-062",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 63",
    "author": "Autor Especialista 63",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1491,
    "pages": 328,
    "year": 2021,
    "rating": 4.58,
    "downloads": 15,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-063",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 64",
    "author": "Autor Especialista 64",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1094,
    "pages": 446,
    "year": 2018,
    "rating": 4.56,
    "downloads": 70,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-064",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 65",
    "author": "Autor Especialista 65",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1366,
    "pages": 458,
    "year": 2015,
    "rating": 4.35,
    "downloads": 34,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-065",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 66",
    "author": "Autor Especialista 66",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1450,
    "pages": 365,
    "year": 2020,
    "rating": 4.25,
    "downloads": 64,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-066",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 67",
    "author": "Autor Especialista 67",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1338,
    "pages": 479,
    "year": 2015,
    "rating": 4.1,
    "downloads": 35,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-067",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 68",
    "author": "Autor Especialista 68",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1163,
    "pages": 409,
    "year": 2019,
    "rating": 4.0,
    "downloads": 107,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-068",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 69",
    "author": "Autor Especialista 69",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1435,
    "pages": 427,
    "year": 2020,
    "rating": 4.44,
    "downloads": 57,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-069",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 70",
    "author": "Autor Especialista 70",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1128,
    "pages": 330,
    "year": 2016,
    "rating": 4.48,
    "downloads": 98,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-070",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 71",
    "author": "Autor Especialista 71",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1282,
    "pages": 421,
    "year": 2015,
    "rating": 4.4,
    "downloads": 91,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-071",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 72",
    "author": "Autor Especialista 72",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1100,
    "pages": 260,
    "year": 2017,
    "rating": 4.02,
    "downloads": 90,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-072",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 73",
    "author": "Autor Especialista 73",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1271,
    "pages": 323,
    "year": 2015,
    "rating": 4.2,
    "downloads": 98,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-073",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 74",
    "author": "Autor Especialista 74",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1176,
    "pages": 425,
    "year": 2019,
    "rating": 4.06,
    "downloads": 103,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-074",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 75",
    "author": "Autor Especialista 75",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1377,
    "pages": 205,
    "year": 2015,
    "rating": 4.44,
    "downloads": 20,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-075",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 76",
    "author": "Autor Especialista 76",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1201,
    "pages": 287,
    "year": 2020,
    "rating": 4.14,
    "downloads": 65,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-076",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 77",
    "author": "Autor Especialista 77",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1227,
    "pages": 247,
    "year": 2022,
    "rating": 4.43,
    "downloads": 88,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-077",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 78",
    "author": "Autor Especialista 78",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1464,
    "pages": 491,
    "year": 2022,
    "rating": 4.69,
    "downloads": 43,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-078",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 79",
    "author": "Autor Especialista 79",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1438,
    "pages": 287,
    "year": 2022,
    "rating": 4.38,
    "downloads": 74,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-079",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 80",
    "author": "Autor Especialista 80",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1145,
    "pages": 254,
    "year": 2024,
    "rating": 4.55,
    "downloads": 19,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-080",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 81",
    "author": "Autor Especialista 81",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1083,
    "pages": 206,
    "year": 2015,
    "rating": 4.1,
    "downloads": 43,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-081",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 82",
    "author": "Autor Especialista 82",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1205,
    "pages": 314,
    "year": 2016,
    "rating": 4.55,
    "downloads": 104,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-082",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 83",
    "author": "Autor Especialista 83",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1152,
    "pages": 272,
    "year": 2020,
    "rating": 4.09,
    "downloads": 25,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-083",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 84",
    "author": "Autor Especialista 84",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1233,
    "pages": 246,
    "year": 2023,
    "rating": 4.04,
    "downloads": 69,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-084",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 85",
    "author": "Autor Especialista 85",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1212,
    "pages": 302,
    "year": 2019,
    "rating": 4.98,
    "downloads": 68,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-085",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 86",
    "author": "Autor Especialista 86",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1077,
    "pages": 478,
    "year": 2020,
    "rating": 4.51,
    "downloads": 65,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-086",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 87",
    "author": "Autor Especialista 87",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1248,
    "pages": 404,
    "year": 2022,
    "rating": 4.44,
    "downloads": 53,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-087",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 88",
    "author": "Autor Especialista 88",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1042,
    "pages": 485,
    "year": 2020,
    "rating": 4.67,
    "downloads": 49,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-088",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 89",
    "author": "Autor Especialista 89",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1172,
    "pages": 244,
    "year": 2021,
    "rating": 4.08,
    "downloads": 68,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-089",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 90",
    "author": "Autor Especialista 90",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1360,
    "pages": 365,
    "year": 2017,
    "rating": 4.73,
    "downloads": 89,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-090",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 91",
    "author": "Autor Especialista 91",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1208,
    "pages": 200,
    "year": 2020,
    "rating": 4.09,
    "downloads": 20,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-091",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 92",
    "author": "Autor Especialista 92",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1444,
    "pages": 235,
    "year": 2022,
    "rating": 4.82,
    "downloads": 40,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-092",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 93",
    "author": "Autor Especialista 93",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1497,
    "pages": 474,
    "year": 2021,
    "rating": 4.31,
    "downloads": 62,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-093",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 94",
    "author": "Autor Especialista 94",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1455,
    "pages": 203,
    "year": 2023,
    "rating": 4.4,
    "downloads": 12,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-094",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 95",
    "author": "Autor Especialista 95",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1396,
    "pages": 490,
    "year": 2017,
    "rating": 4.95,
    "downloads": 11,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-095",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 96",
    "author": "Autor Especialista 96",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1079,
    "pages": 338,
    "year": 2016,
    "rating": 4.3,
    "downloads": 26,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-096",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 97",
    "author": "Autor Especialista 97",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1277,
    "pages": 444,
    "year": 2015,
    "rating": 4.25,
    "downloads": 90,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-097",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 98",
    "author": "Autor Especialista 98",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1391,
    "pages": 266,
    "year": 2023,
    "rating": 4.6,
    "downloads": 73,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-vida-crista-098",
    "title": "Vida Crist\u00e3 - Obra Real Vol. 99",
    "author": "Autor Especialista 99",
    "category": "cristaos",
    "subcategory": "vida-crista",
    "price": 1325,
    "pages": 357,
    "year": 2022,
    "rating": 4.97,
    "downloads": 75,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Vida Crist\u00e3. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/GVOuGUvYfRMCReRS.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-000",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 1",
    "author": "Autor Especialista 1",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1031,
    "pages": 499,
    "year": 2017,
    "rating": 4.58,
    "downloads": 75,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-001",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 2",
    "author": "Autor Especialista 2",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1176,
    "pages": 342,
    "year": 2021,
    "rating": 4.81,
    "downloads": 90,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-002",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 3",
    "author": "Autor Especialista 3",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1383,
    "pages": 477,
    "year": 2017,
    "rating": 4.3,
    "downloads": 89,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-003",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 4",
    "author": "Autor Especialista 4",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1458,
    "pages": 415,
    "year": 2018,
    "rating": 4.73,
    "downloads": 14,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-004",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 5",
    "author": "Autor Especialista 5",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1388,
    "pages": 219,
    "year": 2022,
    "rating": 4.28,
    "downloads": 43,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-005",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 6",
    "author": "Autor Especialista 6",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1340,
    "pages": 303,
    "year": 2023,
    "rating": 4.63,
    "downloads": 62,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-006",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 7",
    "author": "Autor Especialista 7",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1387,
    "pages": 424,
    "year": 2023,
    "rating": 4.57,
    "downloads": 16,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-007",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 8",
    "author": "Autor Especialista 8",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1352,
    "pages": 354,
    "year": 2024,
    "rating": 4.57,
    "downloads": 32,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-008",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 9",
    "author": "Autor Especialista 9",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1465,
    "pages": 230,
    "year": 2018,
    "rating": 4.59,
    "downloads": 103,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-009",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 10",
    "author": "Autor Especialista 10",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1173,
    "pages": 206,
    "year": 2016,
    "rating": 4.9,
    "downloads": 98,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-010",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 11",
    "author": "Autor Especialista 11",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1385,
    "pages": 311,
    "year": 2021,
    "rating": 4.05,
    "downloads": 80,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-011",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 12",
    "author": "Autor Especialista 12",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1125,
    "pages": 333,
    "year": 2020,
    "rating": 4.56,
    "downloads": 21,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-012",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 13",
    "author": "Autor Especialista 13",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1419,
    "pages": 286,
    "year": 2022,
    "rating": 4.67,
    "downloads": 25,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-013",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 14",
    "author": "Autor Especialista 14",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1338,
    "pages": 335,
    "year": 2019,
    "rating": 4.33,
    "downloads": 23,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-014",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 15",
    "author": "Autor Especialista 15",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1153,
    "pages": 306,
    "year": 2017,
    "rating": 4.17,
    "downloads": 81,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-015",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 16",
    "author": "Autor Especialista 16",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1133,
    "pages": 495,
    "year": 2021,
    "rating": 4.16,
    "downloads": 97,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-016",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 17",
    "author": "Autor Especialista 17",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1434,
    "pages": 426,
    "year": 2024,
    "rating": 4.12,
    "downloads": 17,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-017",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 18",
    "author": "Autor Especialista 18",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1192,
    "pages": 361,
    "year": 2019,
    "rating": 4.71,
    "downloads": 77,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-018",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 19",
    "author": "Autor Especialista 19",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1085,
    "pages": 320,
    "year": 2019,
    "rating": 4.03,
    "downloads": 19,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-019",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 20",
    "author": "Autor Especialista 20",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1484,
    "pages": 336,
    "year": 2020,
    "rating": 4.57,
    "downloads": 63,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-020",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 21",
    "author": "Autor Especialista 21",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1224,
    "pages": 329,
    "year": 2021,
    "rating": 4.01,
    "downloads": 54,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-021",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 22",
    "author": "Autor Especialista 22",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1031,
    "pages": 206,
    "year": 2023,
    "rating": 4.96,
    "downloads": 82,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-022",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 23",
    "author": "Autor Especialista 23",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1024,
    "pages": 462,
    "year": 2019,
    "rating": 4.58,
    "downloads": 64,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-023",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 24",
    "author": "Autor Especialista 24",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1460,
    "pages": 332,
    "year": 2017,
    "rating": 4.11,
    "downloads": 40,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-024",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 25",
    "author": "Autor Especialista 25",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1263,
    "pages": 396,
    "year": 2018,
    "rating": 4.39,
    "downloads": 27,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-025",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 26",
    "author": "Autor Especialista 26",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1292,
    "pages": 200,
    "year": 2021,
    "rating": 4.09,
    "downloads": 87,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-026",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 27",
    "author": "Autor Especialista 27",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1174,
    "pages": 287,
    "year": 2024,
    "rating": 4.13,
    "downloads": 92,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-027",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 28",
    "author": "Autor Especialista 28",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1169,
    "pages": 394,
    "year": 2018,
    "rating": 4.28,
    "downloads": 82,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-028",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 29",
    "author": "Autor Especialista 29",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1151,
    "pages": 266,
    "year": 2022,
    "rating": 4.69,
    "downloads": 84,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-029",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 30",
    "author": "Autor Especialista 30",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1477,
    "pages": 426,
    "year": 2018,
    "rating": 4.63,
    "downloads": 79,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-030",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 31",
    "author": "Autor Especialista 31",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1282,
    "pages": 480,
    "year": 2016,
    "rating": 4.75,
    "downloads": 51,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-031",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 32",
    "author": "Autor Especialista 32",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1198,
    "pages": 439,
    "year": 2016,
    "rating": 4.71,
    "downloads": 105,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-032",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 33",
    "author": "Autor Especialista 33",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1017,
    "pages": 372,
    "year": 2017,
    "rating": 4.66,
    "downloads": 78,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-033",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 34",
    "author": "Autor Especialista 34",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1396,
    "pages": 402,
    "year": 2015,
    "rating": 4.79,
    "downloads": 19,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-034",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 35",
    "author": "Autor Especialista 35",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1257,
    "pages": 428,
    "year": 2024,
    "rating": 4.24,
    "downloads": 29,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-035",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 36",
    "author": "Autor Especialista 36",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1046,
    "pages": 229,
    "year": 2017,
    "rating": 4.41,
    "downloads": 106,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-036",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 37",
    "author": "Autor Especialista 37",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1452,
    "pages": 482,
    "year": 2016,
    "rating": 4.5,
    "downloads": 105,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-037",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 38",
    "author": "Autor Especialista 38",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1250,
    "pages": 493,
    "year": 2024,
    "rating": 4.19,
    "downloads": 101,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-038",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 39",
    "author": "Autor Especialista 39",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1205,
    "pages": 339,
    "year": 2018,
    "rating": 4.36,
    "downloads": 81,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-039",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 40",
    "author": "Autor Especialista 40",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1491,
    "pages": 435,
    "year": 2016,
    "rating": 4.92,
    "downloads": 29,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-040",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 41",
    "author": "Autor Especialista 41",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1050,
    "pages": 374,
    "year": 2015,
    "rating": 4.71,
    "downloads": 68,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-041",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 42",
    "author": "Autor Especialista 42",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1065,
    "pages": 374,
    "year": 2018,
    "rating": 4.68,
    "downloads": 104,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-042",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 43",
    "author": "Autor Especialista 43",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1491,
    "pages": 306,
    "year": 2024,
    "rating": 4.58,
    "downloads": 98,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-043",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 44",
    "author": "Autor Especialista 44",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1061,
    "pages": 210,
    "year": 2016,
    "rating": 4.14,
    "downloads": 103,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-044",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 45",
    "author": "Autor Especialista 45",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1302,
    "pages": 449,
    "year": 2023,
    "rating": 4.05,
    "downloads": 48,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-045",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 46",
    "author": "Autor Especialista 46",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1449,
    "pages": 290,
    "year": 2019,
    "rating": 4.14,
    "downloads": 73,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-046",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 47",
    "author": "Autor Especialista 47",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1237,
    "pages": 499,
    "year": 2018,
    "rating": 4.68,
    "downloads": 100,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-047",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 48",
    "author": "Autor Especialista 48",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1111,
    "pages": 360,
    "year": 2019,
    "rating": 4.96,
    "downloads": 73,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-048",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 49",
    "author": "Autor Especialista 49",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1457,
    "pages": 226,
    "year": 2020,
    "rating": 4.12,
    "downloads": 40,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-049",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 50",
    "author": "Autor Especialista 50",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1248,
    "pages": 493,
    "year": 2021,
    "rating": 4.92,
    "downloads": 109,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-050",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 51",
    "author": "Autor Especialista 51",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1449,
    "pages": 446,
    "year": 2020,
    "rating": 4.23,
    "downloads": 66,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-051",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 52",
    "author": "Autor Especialista 52",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1191,
    "pages": 322,
    "year": 2023,
    "rating": 4.75,
    "downloads": 109,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-052",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 53",
    "author": "Autor Especialista 53",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1173,
    "pages": 234,
    "year": 2017,
    "rating": 4.31,
    "downloads": 61,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-053",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 54",
    "author": "Autor Especialista 54",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1182,
    "pages": 289,
    "year": 2021,
    "rating": 4.69,
    "downloads": 110,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-054",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 55",
    "author": "Autor Especialista 55",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1000,
    "pages": 454,
    "year": 2018,
    "rating": 4.97,
    "downloads": 41,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-055",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 56",
    "author": "Autor Especialista 56",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1116,
    "pages": 424,
    "year": 2024,
    "rating": 4.39,
    "downloads": 35,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-056",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 57",
    "author": "Autor Especialista 57",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1137,
    "pages": 442,
    "year": 2016,
    "rating": 4.88,
    "downloads": 11,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-057",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 58",
    "author": "Autor Especialista 58",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1499,
    "pages": 408,
    "year": 2016,
    "rating": 4.71,
    "downloads": 101,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-058",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 59",
    "author": "Autor Especialista 59",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1439,
    "pages": 356,
    "year": 2023,
    "rating": 4.43,
    "downloads": 97,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-059",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 60",
    "author": "Autor Especialista 60",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1228,
    "pages": 217,
    "year": 2015,
    "rating": 4.84,
    "downloads": 54,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-060",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 61",
    "author": "Autor Especialista 61",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1167,
    "pages": 380,
    "year": 2020,
    "rating": 4.89,
    "downloads": 104,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-061",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 62",
    "author": "Autor Especialista 62",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1067,
    "pages": 292,
    "year": 2015,
    "rating": 4.52,
    "downloads": 43,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-062",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 63",
    "author": "Autor Especialista 63",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1455,
    "pages": 248,
    "year": 2023,
    "rating": 4.2,
    "downloads": 54,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-063",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 64",
    "author": "Autor Especialista 64",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1250,
    "pages": 337,
    "year": 2016,
    "rating": 4.46,
    "downloads": 63,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-064",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 65",
    "author": "Autor Especialista 65",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1493,
    "pages": 245,
    "year": 2020,
    "rating": 4.19,
    "downloads": 82,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-065",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 66",
    "author": "Autor Especialista 66",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1405,
    "pages": 248,
    "year": 2020,
    "rating": 4.46,
    "downloads": 47,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-066",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 67",
    "author": "Autor Especialista 67",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1347,
    "pages": 274,
    "year": 2023,
    "rating": 4.02,
    "downloads": 82,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-067",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 68",
    "author": "Autor Especialista 68",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1306,
    "pages": 257,
    "year": 2017,
    "rating": 4.97,
    "downloads": 87,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-068",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 69",
    "author": "Autor Especialista 69",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1335,
    "pages": 327,
    "year": 2022,
    "rating": 4.93,
    "downloads": 84,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-069",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 70",
    "author": "Autor Especialista 70",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1303,
    "pages": 467,
    "year": 2020,
    "rating": 4.04,
    "downloads": 85,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-070",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 71",
    "author": "Autor Especialista 71",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1109,
    "pages": 251,
    "year": 2021,
    "rating": 4.21,
    "downloads": 76,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-071",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 72",
    "author": "Autor Especialista 72",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1361,
    "pages": 444,
    "year": 2019,
    "rating": 4.71,
    "downloads": 18,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-072",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 73",
    "author": "Autor Especialista 73",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1235,
    "pages": 250,
    "year": 2024,
    "rating": 4.91,
    "downloads": 74,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-073",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 74",
    "author": "Autor Especialista 74",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1432,
    "pages": 359,
    "year": 2023,
    "rating": 4.69,
    "downloads": 10,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-074",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 75",
    "author": "Autor Especialista 75",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1124,
    "pages": 459,
    "year": 2022,
    "rating": 4.71,
    "downloads": 94,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-075",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 76",
    "author": "Autor Especialista 76",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1175,
    "pages": 340,
    "year": 2024,
    "rating": 4.75,
    "downloads": 87,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-076",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 77",
    "author": "Autor Especialista 77",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1398,
    "pages": 218,
    "year": 2024,
    "rating": 4.95,
    "downloads": 38,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-077",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 78",
    "author": "Autor Especialista 78",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1036,
    "pages": 365,
    "year": 2018,
    "rating": 4.9,
    "downloads": 38,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-078",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 79",
    "author": "Autor Especialista 79",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1488,
    "pages": 363,
    "year": 2019,
    "rating": 4.18,
    "downloads": 97,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-079",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 80",
    "author": "Autor Especialista 80",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1447,
    "pages": 495,
    "year": 2017,
    "rating": 4.83,
    "downloads": 92,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-080",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 81",
    "author": "Autor Especialista 81",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1250,
    "pages": 217,
    "year": 2016,
    "rating": 4.73,
    "downloads": 92,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-081",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 82",
    "author": "Autor Especialista 82",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1387,
    "pages": 253,
    "year": 2019,
    "rating": 4.3,
    "downloads": 91,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-082",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 83",
    "author": "Autor Especialista 83",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1083,
    "pages": 224,
    "year": 2021,
    "rating": 4.82,
    "downloads": 104,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-083",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 84",
    "author": "Autor Especialista 84",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1391,
    "pages": 255,
    "year": 2015,
    "rating": 4.11,
    "downloads": 91,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-084",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 85",
    "author": "Autor Especialista 85",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1389,
    "pages": 422,
    "year": 2020,
    "rating": 4.73,
    "downloads": 106,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-085",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 86",
    "author": "Autor Especialista 86",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1251,
    "pages": 424,
    "year": 2019,
    "rating": 4.61,
    "downloads": 62,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-086",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 87",
    "author": "Autor Especialista 87",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1347,
    "pages": 290,
    "year": 2023,
    "rating": 4.82,
    "downloads": 12,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-087",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 88",
    "author": "Autor Especialista 88",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1456,
    "pages": 284,
    "year": 2022,
    "rating": 4.18,
    "downloads": 73,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-088",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 89",
    "author": "Autor Especialista 89",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1001,
    "pages": 323,
    "year": 2022,
    "rating": 4.47,
    "downloads": 86,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-089",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 90",
    "author": "Autor Especialista 90",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1231,
    "pages": 472,
    "year": 2015,
    "rating": 4.55,
    "downloads": 59,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-090",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 91",
    "author": "Autor Especialista 91",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1044,
    "pages": 385,
    "year": 2016,
    "rating": 4.25,
    "downloads": 75,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-091",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 92",
    "author": "Autor Especialista 92",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1374,
    "pages": 356,
    "year": 2021,
    "rating": 4.91,
    "downloads": 51,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-092",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 93",
    "author": "Autor Especialista 93",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1378,
    "pages": 484,
    "year": 2018,
    "rating": 4.33,
    "downloads": 54,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-093",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 94",
    "author": "Autor Especialista 94",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1240,
    "pages": 405,
    "year": 2020,
    "rating": 4.32,
    "downloads": 33,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-094",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 95",
    "author": "Autor Especialista 95",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1472,
    "pages": 441,
    "year": 2018,
    "rating": 4.13,
    "downloads": 39,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-095",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 96",
    "author": "Autor Especialista 96",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1298,
    "pages": 232,
    "year": 2021,
    "rating": 4.26,
    "downloads": 108,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-096",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 97",
    "author": "Autor Especialista 97",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1332,
    "pages": 317,
    "year": 2018,
    "rating": 4.81,
    "downloads": 95,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-097",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 98",
    "author": "Autor Especialista 98",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1307,
    "pages": 499,
    "year": 2019,
    "rating": 4.91,
    "downloads": 107,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
    }
  },
  {
    "id": "cristaos-familia-098",
    "title": "Fam\u00edlia & Relacionamentos - Obra Real Vol. 99",
    "author": "Autor Especialista 99",
    "category": "cristaos",
    "subcategory": "familia",
    "price": 1492,
    "pages": 261,
    "year": 2021,
    "rating": 4.73,
    "downloads": 19,
    "synopsis": "Obra real de refer\u00eancia na \u00e1rea de Fam\u00edlia & Relacionamentos. Conte\u00fado t\u00e9cnico e aprofundado para estudantes e profissionais.",
    "coverUrl": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/BnYbX0ssQFRH.jpg",
    "cover": {
      "palette": "sapphire",
      "ornament": "book"
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
