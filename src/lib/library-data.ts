// Catálogo editorial com livros reais e capas locais verificadas.
// Os PDFs só devem ser disponibilizados quando houver autorização/licença de distribuição.

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
    tagline: "Obras reais para estudo universitário e profissional",
    totalCount: 5,
    subcategories: [
      { slug: "direito", name: "Direito", count: 3 },
      { slug: "medicina", name: "Medicina & Saúde", count: 1 },
      { slug: "informatica", name: "Informática & TI", count: 1 },
    ],
  },
  {
    slug: "cristaos",
    name: "Cristãos",
    tagline: "Fé, teologia e vida cristã",
    totalCount: 2,
    subcategories: [
      { slug: "teologia", name: "Teologia Sistemática", count: 1 },
      { slug: "vida-crista", name: "Vida Cristã", count: 1 },
    ],
  },
];

const seedList: Omit<Book, "id">[] = [
  {
    title: "Constituição da República de Angola: Enquadramento Dogmático — A Nossa Visão (Volume 3)",
    author: "Carlos Maria Feijó (coord.)",
    category: "academicos",
    subcategory: "direito",
    price: 2400,
    pages: 0,
    year: 2023,
    rating: 4.9,
    downloads: 0,
    cover: { palette: "burgundy", ornament: "crown" },
    coverUrl: "/covers/constituicao-angola-volume-3.jpg",
    synopsis: "Obra jurídica real sobre o enquadramento dogmático da Constituição da República de Angola.",
    featured: true,
  },
  {
    title: "Vade Mecum Saraiva — Tradicional (37.ª edição, 2024)",
    author: "Saraiva Jur",
    category: "academicos",
    subcategory: "direito",
    price: 3500,
    pages: 0,
    year: 2024,
    rating: 4.9,
    downloads: 0,
    cover: { palette: "sapphire", ornament: "book" },
    coverUrl: "/covers/vade-mecum-saraiva-2024.jpg",
    synopsis: "Compilação jurídica real da Editora Saraiva Jur, edição tradicional de 2024.",
    featured: true,
  },
  {
    title: "Manual de Direito Administrativo",
    author: "Carlos Feijó",
    category: "academicos",
    subcategory: "direito",
    price: 2800,
    pages: 0,
    year: 2023,
    rating: 4.8,
    downloads: 0,
    cover: { palette: "sapphire", ornament: "quill" },
    coverUrl: "/covers/manual-direito-administrativo.jpeg",
    synopsis: "Manual jurídico real de Direito Administrativo, publicado pela Lello & Companhia.",
  },
  {
    title: "Atlas de Anatomia Humana",
    author: "Frank H. Netter, MD",
    category: "academicos",
    subcategory: "medicina",
    price: 4500,
    pages: 0,
    year: 2023,
    rating: 5.0,
    downloads: 0,
    cover: { palette: "emerald", ornament: "leaf" },
    coverUrl: "/covers/atlas-netter.jpg",
    synopsis: "Atlas de anatomia real de Frank H. Netter, referência para estudantes e profissionais de saúde.",
    featured: true,
  },
  {
    title: "Código Limpo: Habilidades Práticas do Agile Software",
    author: "Robert C. Martin",
    category: "academicos",
    subcategory: "informatica",
    price: 1800,
    pages: 0,
    year: 2023,
    rating: 4.9,
    downloads: 0,
    cover: { palette: "emerald", ornament: "star" },
    coverUrl: "/covers/codigo-limpo.jpg",
    synopsis: "Livro real sobre práticas de engenharia de software e desenvolvimento de código sustentável.",
    featured: true,
  },
  {
    title: "Teologia Sistemática Atual e Exaustiva",
    author: "Wayne Grudem",
    category: "cristaos",
    subcategory: "teologia",
    price: 3200,
    pages: 0,
    year: 2022,
    rating: 4.9,
    downloads: 0,
    cover: { palette: "sapphire", ornament: "cross" },
    coverUrl: "/covers/teologia-sistematica-wayne-grudem.jpg",
    synopsis: "Obra real de Wayne Grudem sobre doutrina e teologia sistemática.",
    featured: true,
  },
  {
    title: "O Peregrino",
    author: "John Bunyan",
    category: "cristaos",
    subcategory: "vida-crista",
    price: 1200,
    pages: 0,
    year: 2020,
    rating: 4.9,
    downloads: 0,
    cover: { palette: "ivory", ornament: "book" },
    coverUrl: "/covers/o-peregrino.jpg",
    synopsis: "Clássico real de John Bunyan sobre a jornada espiritual cristã.",
    featured: true,
  },
];

const BOOKS: Book[] = seedList.map((book, index) => ({
  ...book,
  id: `${book.category}-${book.subcategory}-${String(index).padStart(3, "0")}`,
}));

export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);

export const getSubcategory = (categorySlug: string, subcategorySlug: string) =>
  getCategory(categorySlug)?.subcategories.find((subcategory) => subcategory.slug === subcategorySlug);

export const featuredBooks = BOOKS.filter((book) => book.featured);

export function listBooksBySubcategory(categorySlug: string, subcategorySlug: string, offset = 0, limit = 24) {
  const items = BOOKS.filter((book) => book.category === categorySlug && book.subcategory === subcategorySlug);
  return { items: items.slice(offset, offset + limit), total: items.length };
}

export function listBooksByCategory(categorySlug: string, offset = 0, limit = 24) {
  const items = BOOKS.filter((book) => book.category === categorySlug);
  return { items: items.slice(offset, offset + limit), total: items.length };
}

export function getBook(id: string): Book | undefined {
  return BOOKS.find((book) => book.id === id);
}

export function searchBooks(query: string, max = 40): Book[] {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [];
  return BOOKS.filter((book) =>
    [book.title, book.author, book.synopsis].some((value) => value.toLowerCase().includes(normalizedQuery)),
  ).slice(0, max);
}

export const totalLibrarySize = BOOKS.length;

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
