"""Generate a real-book catalog from Open Library records.

The previous generator used synthetic titles and repeated generic covers. This
script replaces that approach with bibliographic records returned by Open
Library and keeps only records with a real cover_id, title and author.
"""
from __future__ import annotations

import json
import re
import time
from pathlib import Path
from typing import Any

import requests

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "src/lib/library-data.ts"

# Balanced targets: 10,000 records in total, all selected from real records
# with a cover id. Search terms are broad enough to obtain many editions.
TARGETS = {
    "direito": ("Direito", 1200, ["law", "constitutional law", "criminal law", "administrative law"]),
    "medicina": ("Medicina", 1200, ["medicine", "anatomy", "clinical medicine", "nursing"]),
    "engenharia": ("Engenharia", 800, ["engineering", "civil engineering", "mechanical engineering", "electrical engineering"]),
    "informatica": ("Informática & TI", 800, ["computer science", "programming", "software engineering", "information technology"]),
    "economia": ("Economia & Gestão", 500, ["economics", "business", "finance", "management"]),
    "psicologia": ("Psicologia", 250, ["psychology", "cognitive psychology", "clinical psychology"]),
    "historia": ("História & Filosofia", 250, ["history", "philosophy", "world history"]),
    "teologia": ("Teologia", 1200, ["theology", "biblical studies", "christian theology", "christianity"]),
    "vida-crista": ("Vida Cristã", 1000, ["christian life", "devotional", "prayer", "discipleship"]),
    "familia": ("Família & Relacionamentos", 800, ["family", "marriage", "parenting", "relationships"]),
    "caligrafia": ("Caligrafia", 400, ["handwriting", "calligraphy", "penmanship"]),
    "colorir": ("Colorir", 600, ["coloring books", "children coloring", "activity books"]),
    "desenho": ("Desenho", 400, ["drawing", "how to draw", "art instruction"]),
    "leitura": ("Leitura Infantil", 300, ["juvenile fiction", "children stories", "picture books"]),
    "alfabetizacao": ("Alfabetização", 300, ["early learning", "phonics", "alphabet", "reading children"]),
}

CATEGORY_META = {
    "academicos": ("Académicos", "Biblioteca bibliográfica para estudantes e profissionais", ["direito", "medicina", "engenharia", "informatica", "economia", "psicologia", "historia"]),
    "cristaos": ("Cristãos", "Fé, teologia e vida cristã", ["teologia", "vida-crista", "familia"]),
    "infantil": ("Amigo Kids", "Aprender e brincar com materiais infantis", ["caligrafia", "colorir", "desenho", "leitura", "alfabetizacao"]),
}

PALETTES = ["gold", "burgundy", "emerald", "sapphire", "ivory"]


def slug(value: str) -> str:
    value = value.lower().strip()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")[:80] or "book"


def clean_author(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def get_json(session: requests.Session, url: str, params: dict[str, Any]) -> dict[str, Any]:
    for attempt in range(4):
        try:
            response = session.get(url, params=params, timeout=30)
            response.raise_for_status()
            return response.json()
        except Exception:
            if attempt == 3:
                raise
            time.sleep(1.5 * (attempt + 1))
    raise RuntimeError("unreachable")


def fetch_records() -> list[dict[str, Any]]:
    session = requests.Session()
    session.headers.update({"User-Agent": "AmigoDoSaberCatalog/1.0 (educational catalog)"})
    books: list[dict[str, Any]] = []
    seen: set[str] = set()

    for subcategory, (display_name, target, terms) in TARGETS.items():
        collected = 0
        # Query several subjects and pages. Editions are retained only when
        # they have a distinct Open Library work key and a matching cover.
        for term in terms:
            if collected >= target:
                break
            for page in range(1, 31):
                if collected >= target:
                    break
                data = get_json(
                    session,
                    "https://openlibrary.org/search.json",
                    {
                        "q": f"subject:{term}",
                        "page": page,
                        "limit": 100,
                        "fields": "key,title,author_name,first_publish_year,cover_i,isbn,publisher,subject",
                    },
                )
                docs = data.get("docs") or []
                if not docs:
                    break
                for doc in docs:
                    key = doc.get("key")
                    cover_id = doc.get("cover_i")
                    title = str(doc.get("title") or "").strip()
                    authors = [clean_author(str(x)) for x in (doc.get("author_name") or []) if str(x).strip()]
                    if not key or not cover_id or not title or not authors:
                        continue
                    if key in seen:
                        continue
                    seen.add(key)
                    authors_text = ", ".join(authors[:3])
                    isbn_values = [str(x) for x in (doc.get("isbn") or []) if str(x).strip()]
                    publisher_values = [str(x) for x in (doc.get("publisher") or []) if str(x).strip()]
                    year = doc.get("first_publish_year")
                    try:
                        year = int(year) if year else 0
                    except (TypeError, ValueError):
                        year = 0
                    books.append(
                        {
                            "id": f"ol-{slug(key)}",
                            "title": title,
                            "author": authors_text,
                            "category": "academicos" if subcategory in {"direito", "medicina", "engenharia", "informatica", "economia", "psicologia", "historia"} else "cristaos" if subcategory in {"teologia", "vida-crista", "familia"} else "infantil",
                            "subcategory": subcategory,
                            "price": 800,
                            "pages": 0,
                            "year": year,
                            "rating": 0,
                            "downloads": 0,
                            "synopsis": f"Registo bibliográfico de {title}, de {authors_text}. Consulte a edição e os direitos de utilização antes de disponibilizar o ficheiro.",
                            "coverUrl": f"https://covers.openlibrary.org/b/id/{int(cover_id)}-L.jpg",
                            "cover": {"palette": PALETTES[len(books) % len(PALETTES)], "ornament": "book"},
                            "source": "Open Library",
                            "sourceKey": key,
                            "isbn": isbn_values[:3],
                            "publisher": publisher_values[:3],
                        }
                    )
                    collected += 1
                    if collected >= target:
                        break
                # Be polite to a public service.
                time.sleep(0.15)
        if collected < target:
            raise RuntimeError(f"Não foi possível obter {target} registos com capa para {subcategory}; obtidos {collected}.")
        print(f"{subcategory}: {collected}")
    return books


def write_ts(books: list[dict[str, Any]]) -> None:
    categories: list[dict[str, Any]] = []
    for category_slug, (name, tagline, subcategories) in CATEGORY_META.items():
        items = []
        for subcategory in subcategories:
            count = sum(1 for book in books if book["subcategory"] == subcategory)
            items.append({"slug": subcategory, "name": TARGETS[subcategory][0], "count": count})
        categories.append({"slug": category_slug, "name": name, "tagline": tagline, "totalCount": sum(item["count"] for item in items), "subcategories": items})

    template = r'''// Catálogo de livros reais obtidos de registos bibliográficos do Open Library.
export type Palette = "gold" | "burgundy" | "emerald" | "sapphire" | "ivory";
export type Ornament = "cross" | "book" | "quill" | "crown" | "leaf" | "star";
export type Subcategory = { slug: string; name: string; count: number };
export type Category = { slug: string; name: string; tagline: string; totalCount: number; subcategories: Subcategory[] };
export type Book = {
  id: string; title: string; author: string; category: string; subcategory: string;
  price: number; pages: number; year: number; rating: number; downloads: number;
  cover: { palette: Palette; ornament: Ornament }; coverUrl?: string; synopsis: string;
  featured?: boolean; source?: string; sourceKey?: string; isbn?: string[]; publisher?: string[];
};
export const categories: Category[] = __CATEGORIES__;
const BOOKS_DATABASE: Book[] = __BOOKS__;
export const featuredBooks = BOOKS_DATABASE.slice(0, 30);
export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
export const getSubcategory = (categorySlug: string, subcategorySlug: string) => getCategory(categorySlug)?.subcategories.find((subcategory) => subcategory.slug === subcategorySlug);
export function listBooksBySubcategory(categorySlug: string, subcategorySlug: string, offset = 0, limit = 24) { const items = BOOKS_DATABASE.filter((book) => book.category === categorySlug && book.subcategory === subcategorySlug); return { items: items.slice(offset, offset + limit), total: items.length }; }
export function listBooksByCategory(categorySlug: string, offset = 0, limit = 24) { const items = BOOKS_DATABASE.filter((book) => book.category === categorySlug); return { items: items.slice(offset, offset + limit), total: items.length }; }
export function getBook(id: string): Book | undefined { return BOOKS_DATABASE.find((book) => book.id === id); }
export function searchBooks(query: string, max = 50): Book[] { const normalizedQuery = query.trim().toLowerCase(); if (!normalizedQuery) return []; return BOOKS_DATABASE.filter((book) => [book.title, book.author, book.synopsis].some((value) => value.toLowerCase().includes(normalizedQuery))).slice(0, max); }
export const totalLibrarySize = BOOKS_DATABASE.length;
export const formatPrice = (kz: number) => new Intl.NumberFormat("pt-PT", { maximumFractionDigits: 0 }).format(kz) + " Kz";
export const formatNumber = (value: number) => new Intl.NumberFormat("pt-PT").format(value);
export const WHATSAPP_NUMBER = "244951201628";
export const WHATSAPP_DISPLAY = "+244 951 201 628";
export function whatsappCheckoutUrl(book: Book): string { const message = `Olá! Quero comprar este PDF no Amigo do Saber:\n\nTítulo: ${book.title}\nAutor: ${book.author}\nPreço: ${formatPrice(book.price)}\nReferência: ${book.id}\n\nPodem confirmar disponibilidade e forma de pagamento? Obrigado.`; return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`; }
export const WHATSAPP_REQUEST_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de pedir um livro em PDF no Amigo do Saber.\n\nTítulo/autor procurado: ")}`;
'''
    OUTPUT.write_text(
        template.replace("__CATEGORIES__", json.dumps(categories, ensure_ascii=False, indent=2)).replace("__BOOKS__", json.dumps(books, ensure_ascii=False, indent=2))
        + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    records = fetch_records()
    if len(records) != 10000:
        raise RuntimeError(f"Esperados 10.000 registos, obtidos {len(records)}")
    write_ts(records)
    print(f"Total de livros reais com capa: {len(records)}")
