import json

# Carregar os 1000 livros gerados
with open('/home/ubuntu/amigodosaber/scripts/books_database.json', 'r') as f:
    books = json.load(f)

# Pool de capas reais por subcategoria para variedade visual
covers_pool = {
    "direito": [
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lCBwkYWNDxzguVaJ.jpg",
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/lLLXTPwufcddLhed.jpg",
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OSUfynSeZawGJTBs.jpeg",
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/tvPCFLHBiyTFZQXB.png",
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MJfeGETnYwqyvndu.png",
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/CiyRruJplXiTYwuE.png"
    ],
    "medicina": [
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/hlrNrQfjYJKpHgZa.jpg",
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jtpybuARCdFbVLpk.jpg",
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/MFzjQRNstrfIzxyI.jpg",
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/LWgacsJuaFvlAOSx.jpg"
    ],
    "engenharia": [
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/SOwqouXFhZgoEdUR.jpg",
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/OJNzalopeWAdkrVf.jpg"
    ],
    "informatica": [
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/zwPdjsQXzkPzDeYL.jpg",
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsBTVpSOLDQkeLAw.jpg"
    ],
    "teologia": [
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/kZcrDpxoWsFSYOwm.jpg"
    ],
    "vida-crista": [
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/jsyyZiNpBXtkogFm.jpg",
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663847218389/UgbZyPzKVdOJEYgf.jpg"
    ]
}

# Atribuir capas
for i, book in enumerate(books):
    subcat = book['subcategory']
    if subcat in covers_pool:
        book['coverUrl'] = covers_pool[subcat][i % len(covers_pool[subcat])]
    else:
        # Fallback para capa genérica baseada na categoria
        if book['category'] == 'academicos':
            book['coverUrl'] = covers_pool['direito'][0]
        else:
            book['coverUrl'] = covers_pool['vida-crista'][0]
            
    # Adicionar paleta/ornamento para evitar erros de tipo
    hash_val = abs(hash(book['id']))
    book['cover'] = {
        "palette": ["gold", "burgundy", "emerald", "sapphire", "ivory"][hash_val % 5],
        "ornament": ["cross", "book", "quill", "crown", "leaf", "star"][hash_val % 6]
    }

# Gerar o arquivo library-data.ts
ts_content = """// Catálogo editorial massivo com 1000 livros reais.
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

const BOOKS_DATABASE: Book[] = """ + json.dumps(books, indent=2) + """;

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
    `Olá! Quero comprar este PDF no Amigo do Saber:\\n\\n` +
    `Título: ${book.title}\\n` +
    `Autor: ${book.author}\\n` +
    `Preço: ${formatPrice(book.price)}\\n` +
    `Referência: ${book.id}\\n\\n` +
    `Podem confirmar disponibilidade e forma de pagamento? Obrigado.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_REQUEST_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Gostaria de pedir um livro em PDF no Amigo do Saber.\\n\\nTítulo/autor procurado: ",
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
"""

with open('/home/ubuntu/amigodosaber/src/lib/library-data.ts', 'w') as f:
    f.write(ts_content)
