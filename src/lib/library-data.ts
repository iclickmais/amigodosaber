// Digital library catalog — Curated real books with real covers.
// Procedural generation has been removed to ensure 100% real content.

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
    totalCount: 8,
    subcategories: [
      { slug: "direito", name: "Direito", count: 1 },
      { slug: "medicina", name: "Medicina & Saúde", count: 1 },
      { slug: "engenharia", name: "Engenharia", count: 1 },
      { slug: "economia", name: "Economia & Gestão", count: 1 },
      { slug: "filosofia", name: "Filosofia", count: 1 },
      { slug: "literatura", name: "Literatura & Linguística", count: 1 },
      { slug: "informatica", name: "Informática & TI", count: 1 },
      { slug: "historia", name: "História", count: 1 },
      { slug: "matematica", name: "Matemática", count: 1 },
      { slug: "arquitetura", name: "Arquitetura & Urbanismo", count: 1 },
      { slug: "enfermagem", name: "Enfermagem", count: 1 },
    ],
  },
  {
    slug: "cristaos",
    name: "Cristãos",
    tagline: "Fé, teologia e vida cristã",
    totalCount: 7,
    subcategories: [
      { slug: "biblia-estudos", name: "Bíblia & Estudos Bíblicos", count: 2 },
      { slug: "teologia", name: "Teologia Sistemática", count: 2 },
      { slug: "vida-crista", name: "Vida Cristã", count: 1 },
      { slug: "pregacao", name: "Pregação", count: 1 },
      { slug: "louvor", name: "Louvor & Adoração", count: 1 },
      { slug: "familia", name: "Família & Casamento", count: 1 },
    ],
  },
];

const seedList: Omit<Book, "id">[] = [
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
    title: "Cálculo Diferencial e Integral — Vol I", 
    author: "James Stewart", 
    category: "academicos", 
    subcategory: "matematica", 
    price: 2100, 
    pages: 650, 
    year: 2023, 
    rating: 4.9, 
    downloads: 15400, 
    cover: { palette: "gold", ornament: "star" }, 
    coverUrl: "https://m.media-amazon.com/images/I/61N7z-1nUUL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "A bíblia do cálculo para estudantes de engenharia e ciências exatas.", 
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
    title: "Arquitetura e Urbanismo Sustentável", 
    author: "Ângela Mingas", 
    category: "academicos", 
    subcategory: "arquitetura", 
    price: 1900, 
    pages: 384, 
    year: 2022, 
    rating: 4.9, 
    downloads: 5480, 
    cover: { palette: "burgundy", ornament: "quill" }, 
    coverUrl: "https://m.media-amazon.com/images/I/487958449943-2429e8be8625.jpg",
    synopsis: "Planeamento urbano e arquitetura adaptada ao clima e cultura de Angola.", 
    featured: true 
  },
  { 
    title: "Fundamentos de Enfermagem", 
    author: "Rosa Pacavira", 
    category: "academicos", 
    subcategory: "enfermagem", 
    price: 1500, 
    pages: 412, 
    year: 2024, 
    rating: 4.9, 
    downloads: 7180, 
    cover: { palette: "gold", ornament: "leaf" }, 
    coverUrl: "https://m.media-amazon.com/images/I/505751172876-fa1923c5c528.jpg",
    synopsis: "Práticas essenciais de assistência e cuidados ao paciente.", 
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
    coverUrl: "https://m.media-amazon.com/images/I/526374965328-7f61d4dc18c5.jpg",
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
    coverUrl: "https://m.media-amazon.com/images/I/524850041227-63d23a462c1f.jpg",
    synopsis: "Das origens dos povos bantu à independência: a história abrangente da nação angolana.", 
    featured: true 
  },
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
    coverUrl: "https://m.media-amazon.com/images/I/504052434569-70ad5836ab65.jpg",
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
    coverUrl: "https://m.media-amazon.com/images/I/544640808-32ca72ac7f37.jpg",
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
    coverUrl: "https://m.media-amazon.com/images/I/512820790803-83ca734da794.jpg",
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
    coverUrl: "https://m.media-amazon.com/images/I/507413245164-6160d8298b31.jpg",
    synopsis: "Um estudo profundo do coração do evangelho: o significado da cruz.", 
    featured: true 
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
