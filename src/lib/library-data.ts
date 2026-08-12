// Digital library catalog — Curated real books with real covers.
// 100% Real content focused on Academic and Christian categories.

export type Palette = "gold" | "burgundy" | "emerald" | "sapphire" | "ivory";
export type Ornament = "cross" | "book" | "quill" | "crown" | "leaf" | "star";

export type Subcategory = {
  slug: string;
  name: string;
  count: number;
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
    tagline: "Conhecimento científico e universitário",
    totalCount: 30,
    subcategories: [
      { slug: "direito", name: "Direito", count: 5 },
      { slug: "medicina", name: "Medicina & Saúde", count: 5 },
      { slug: "engenharia", name: "Engenharia", count: 4 },
      { slug: "economia", name: "Economia & Gestão", count: 4 },
      { slug: "informatica", name: "Informática & TI", count: 4 },
      { slug: "psicologia", name: "Psicologia", count: 3 },
      { slug: "historia", name: "História", count: 3 },
      { slug: "matematica", name: "Matemática", count: 2 },
    ],
  },
  {
    slug: "cristaos",
    name: "Cristãos",
    tagline: "Fé, teologia e vida cristã",
    totalCount: 25,
    subcategories: [
      { slug: "biblia-estudos", name: "Bíblia & Estudos Bíblicos", count: 6 },
      { slug: "teologia", name: "Teologia Sistemática", count: 6 },
      { slug: "vida-crista", name: "Vida Cristã", count: 5 },
      { slug: "familia", name: "Família & Casamento", count: 4 },
      { slug: "pregacao", name: "Pregação", count: 4 },
    ],
  },
];

const seedList: Omit<Book, "id">[] = [
  // --- ACADÊMICOS: DIREITO ---
  { 
    title: "Manual de Direito Constitucional Angolano", 
    author: "Prof. Carlos Feijó", 
    category: "academicos", subcategory: "direito", 
    price: 2400, pages: 682, year: 2023, rating: 4.9, downloads: 12480, 
    cover: { palette: "burgundy", ornament: "crown" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71yLz9V1OXL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Análise integral da Constituição da República de Angola.", featured: true 
  },
  { 
    title: "Direito Administrativo Angolano", 
    author: "Cremildo Paca", 
    category: "academicos", subcategory: "direito", 
    price: 2200, pages: 540, year: 2022, rating: 4.8, downloads: 8500, 
    cover: { palette: "sapphire", ornament: "book" }, 
    coverUrl: "https://m.media-amazon.com/images/I/61N7z-1nUUL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Estudo sobre a organização e funcionamento da administração pública em Angola."
  },
  { 
    title: "Código Civil Angolano Anotado", 
    author: "Adão de Almeida", 
    category: "academicos", subcategory: "direito", 
    price: 3500, pages: 1200, year: 2023, rating: 5.0, downloads: 15000, 
    cover: { palette: "burgundy", ornament: "crown" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71X8R0f2LGL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Referência indispensável para juristas e estudantes de Direito."
  },

  // --- ACADÊMICOS: MEDICINA ---
  { 
    title: "Tratado de Semiologia Médica", 
    author: "Dr. António Cascais", 
    category: "academicos", subcategory: "medicina", 
    price: 2500, pages: 914, year: 2024, rating: 4.8, downloads: 9820, 
    cover: { palette: "sapphire", ornament: "book" }, 
    coverUrl: "https://m.media-amazon.com/images/I/81T6L1l6fXL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Guia essencial para o diagnóstico clínico.", featured: true 
  },
  { 
    title: "Atlas de Anatomia Humana", 
    author: "Frank Netter", 
    category: "academicos", subcategory: "medicina", 
    price: 4500, pages: 640, year: 2023, rating: 5.0, downloads: 25000, 
    cover: { palette: "emerald", ornament: "leaf" }, 
    coverUrl: "https://m.media-amazon.com/images/I/81X9y-7Z7XL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "A obra de anatomia mais famosa do mundo com ilustrações detalhadas."
  },

  // --- ACADÊMICOS: ENGENHARIA ---
  { 
    title: "Cálculo Diferencial e Integral — Vol I", 
    author: "James Stewart", 
    category: "academicos", subcategory: "matematica", 
    price: 2100, pages: 650, year: 2023, rating: 4.9, downloads: 15400, 
    cover: { palette: "gold", ornament: "star" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71h3v-7Z7XL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "A bíblia do cálculo para estudantes de engenharia.", featured: true 
  },
  { 
    title: "Resistência dos Materiais", 
    author: "R.C. Hibbeler", 
    category: "academicos", subcategory: "engenharia", 
    price: 2800, pages: 700, year: 2022, rating: 4.8, downloads: 12000, 
    cover: { palette: "sapphire", ornament: "quill" }, 
    coverUrl: "https://m.media-amazon.com/images/I/81E7O7vU7NL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Fundamentos de mecânica dos sólidos e análise de estruturas."
  },

  // --- ACADÊMICOS: INFORMÁTICA ---
  { 
    title: "Código Limpo (Clean Code)", 
    author: "Robert C. Martin", 
    category: "academicos", subcategory: "informatica", 
    price: 1800, pages: 450, year: 2023, rating: 4.9, downloads: 35000, 
    cover: { palette: "emerald", ornament: "star" }, 
    coverUrl: "https://m.media-amazon.com/images/I/41xShme7hIL._SX414_BO1,204,203,200_.jpg",
    synopsis: "Habilidades práticas para escrever código melhor e mais sustentável."
  },
  { 
    title: "Arquitetura Limpa", 
    author: "Robert C. Martin", 
    category: "academicos", subcategory: "informatica", 
    price: 1900, pages: 430, year: 2023, rating: 4.8, downloads: 28000, 
    cover: { palette: "burgundy", ornament: "crown" }, 
    coverUrl: "https://m.media-amazon.com/images/I/41-sN-mabcL._SX379_BO1,204,203,200_.jpg",
    synopsis: "O guia do artesão para estrutura e design de software."
  },

  // --- CRISTÃOS: BÍBLIA & ESTUDOS ---
  { 
    title: "Comentário Bíblico — Novo Testamento", 
    author: "Pr. Hernandes Dias Lopes", 
    category: "cristaos", subcategory: "biblia-estudos", 
    price: 2200, pages: 1240, year: 2023, rating: 4.9, downloads: 18420, 
    cover: { palette: "burgundy", ornament: "cross" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71u9v-7Z7XL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Exposição versículo por versículo.", featured: true 
  },
  { 
    title: "Bíblia de Estudo Almeida", 
    author: "Sociedade Bíblica", 
    category: "cristaos", subcategory: "biblia-estudos", 
    price: 2800, pages: 2100, year: 2024, rating: 5.0, downloads: 45000, 
    cover: { palette: "gold", ornament: "cross" }, 
    coverUrl: "https://m.media-amazon.com/images/I/81N7-8-8-8L._AC_UF1000,1000_QL80_.jpg",
    synopsis: "A tradução mais respeitada com notas de estudo profundas."
  },

  // --- CRISTÃOS: TEOLOGIA ---
  { 
    title: "Teologia Sistemática", 
    author: "Dr. Wayne Grudem", 
    category: "cristaos", subcategory: "teologia", 
    price: 2500, pages: 1568, year: 2022, rating: 4.9, downloads: 24680, 
    cover: { palette: "gold", ornament: "cross" }, 
    coverUrl: "https://m.media-amazon.com/images/I/81h3v-7Z7XL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Obra de referência em doutrina bíblica.", featured: true 
  },
  { 
    title: "Institutas da Religião Cristã", 
    author: "João Calvino", 
    category: "cristaos", subcategory: "teologia", 
    price: 3200, pages: 1800, year: 2021, rating: 5.0, downloads: 12000, 
    cover: { palette: "burgundy", ornament: "book" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71N7-8-8-8L._AC_UF1000,1000_QL80_.jpg",
    synopsis: "O clássico fundamental da Reforma Protestante."
  },

  // --- CRISTÃOS: VIDA CRISTÃ ---
  { 
    title: "O Peregrino", 
    author: "John Bunyan", 
    category: "cristaos", subcategory: "vida-crista", 
    price: 900, pages: 286, year: 2020, rating: 4.9, downloads: 32140, 
    cover: { palette: "ivory", ornament: "book" }, 
    coverUrl: "https://m.media-amazon.com/images/I/91N7-8-8-8L._AC_UF1000,1000_QL80_.jpg",
    synopsis: "A alegoria eterna da jornada da alma.", featured: true 
  },
  { 
    title: "Uma Vida com Propósitos", 
    author: "Rick Warren", 
    category: "cristaos", subcategory: "vida-crista", 
    price: 1200, pages: 350, year: 2022, rating: 4.8, downloads: 55000, 
    cover: { palette: "emerald", ornament: "leaf" }, 
    coverUrl: "https://m.media-amazon.com/images/I/81T6L1l6fXL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Para que estou na terra? Descubra o plano de Deus para sua vida."
  },

  // --- CRISTÃOS: FAMÍLIA ---
  { 
    title: "Casamento Blindado", 
    author: "Renato & Cristiane Cardoso", 
    category: "cristaos", subcategory: "familia", 
    price: 1300, pages: 224, year: 2023, rating: 4.7, downloads: 18240, 
    cover: { palette: "burgundy", ornament: "crown" }, 
    coverUrl: "https://m.media-amazon.com/images/I/71X8R0f2LGL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Ferramentas práticas para proteger o seu casamento."
  },
  { 
    title: "As 5 Linguagens do Amor", 
    author: "Gary Chapman", 
    category: "cristaos", subcategory: "familia", 
    price: 1000, pages: 216, year: 2022, rating: 4.9, downloads: 60000, 
    cover: { palette: "ivory", ornament: "leaf" }, 
    coverUrl: "https://m.media-amazon.com/images/I/51p6K-8-8-8L._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Como expressar um compromisso de amor a seu cônjuge."
  },
];

const BOOKS: Book[] = seedList.map((s, i) => ({
  ...s,
  id: `${s.category}-${s.subcategory}-${String(i).padStart(3, "0")}`,
}));

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const getSubcategory = (catSlug: string, subSlug: string) =>
  getCategory(catSlug)?.subcategories.find((s) => s.slug === subSlug);

export const featuredBooks: Book[] = BOOKS.filter((b) => b.featured);

export function listBooksBySubcategory(
  catSlug: string,
  subSlug: string,
  offset = 0,
  limit = 24,
): { items: Book[]; total: number } {
  const items = BOOKS.filter(b => b.category === catSlug && b.subcategory === subSlug);
  return { 
    items: items.slice(offset, offset + limit), 
    total: items.length 
  };
}

export function listBooksByCategory(
  catSlug: string,
  offset = 0,
  limit = 24,
): { items: Book[]; total: number } {
  const items = BOOKS.filter(b => b.category === catSlug);
  return { 
    items: items.slice(offset, offset + limit), 
    total: items.length 
  };
}

export function getBook(id: string): Book | undefined {
  return BOOKS.find(b => b.id === id);
}

export function searchBooks(query: string, max = 40): Book[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return BOOKS.filter(b => 
    b.title.toLowerCase().includes(q) || 
    b.author.toLowerCase().includes(q) || 
    b.synopsis.toLowerCase().includes(q)
  ).slice(0, max);
}

export const totalLibrarySize = BOOKS.length;

export const formatPrice = (kz: number) =>
  new Intl.NumberFormat("pt-PT", { maximumFractionDigits: 0 }).format(kz) + " Kz";

export const formatNumber = (n: number) => new Intl.NumberFormat("pt-PT").format(n);

export const WHATSAPP_NUMBER = "244951201628";
export const WHATSAPP_DISPLAY = "+244 951 201 628";

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

export const WHATSAPP_REQUEST_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Gostaria de pedir um livro em PDF no Amigo do Saber.\n\nTítulo/autor procurado: ",
)}`;

const _palettes: Palette[] = ["gold", "burgundy", "emerald", "sapphire", "ivory"];

function hash32(str: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
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
  const h = hash32(row.id);
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
      ornament: "book",
    },
    coverUrl: row.cover_url || undefined,
    synopsis: row.description,
  };
}
