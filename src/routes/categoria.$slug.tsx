import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BookOpenCheck, ChevronRight, Download, FileText, Loader2, PencilLine } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BookCard } from "@/components/BookCard";
import {
  formatNumber,
  getCategory,
  listBooksByCategory,
  listBooksBySubcategory,
  type Subcategory,
  type Book,
} from "@/lib/library-data";
import { kidsMaterials } from "@/lib/kids-materials";

const PAGE_SIZE = 24;

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    const cat = getCategory(params.slug);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.cat.name} — Amigo do Saber` },
          { name: "description", content: loaderData.cat.tagline },
          { property: "og:title", content: `${loaderData.cat.name} — Amigo do Saber` },
          { property: "og:description", content: loaderData.cat.tagline },
        ]
      : [{ title: "Categoria — Amigo do Saber" }],
  }),
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">Categoria não encontrada.</p>
    </div>
  ),
});

function CategoryPage() {
  const { cat } = Route.useLoaderData();
  const [subFilter, setSubFilter] = useState<string | null>(null);
  const [items, setItems] = useState<Book[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    const offset = page * PAGE_SIZE;
    const res = subFilter
      ? listBooksBySubcategory(cat.slug, subFilter, offset, PAGE_SIZE)
      : listBooksByCategory(cat.slug, offset, PAGE_SIZE);

    setItems((prev) => (page === 0 ? res.items : [...prev, ...res.items]));
    setTotal(res.total);
    setLoading(false);
  }, [cat.slug, subFilter, page]);

  const hasMore = items.length < total;

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.13_78/0.12),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-gold">
              Biblioteca
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold">{cat.name}</span>
          </nav>

          <div className="mt-4 flex flex-col justify-between gap-4 sm:gap-6 md:flex-row md:items-end">
            <div className="min-w-0">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
                <span className="text-gradient-gold italic">{cat.name}</span>
              </h1>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
                {cat.tagline}
              </p>
            </div>
            <div className="text-xs text-muted-foreground sm:text-sm">
              <span className="font-serif text-3xl text-gold sm:text-4xl">
                {formatNumber(total)}
              </span>{" "}
              PDFs disponíveis · {cat.subcategories.length} subcategorias
            </div>
          </div>
        </div>
      </section>

      {cat.slug === "infantil" && (
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="rounded-3xl border border-emerald-200/70 bg-emerald-50/70 p-5 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-700">
                  <BookOpenCheck className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em]">Materiais para imprimir</span>
                </div>
                <h2 className="mt-2 font-serif text-2xl text-emerald-950 sm:text-3xl">Aprender a ler e a escrever</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-emerald-900/75">
                  Fichas didácticas em português para praticar o traçado, as vogais, as sílabas e a compreensão de textos. Não são resumos nem jogos: são exercícios práticos para acompanhar o estudo da criança.
                </p>
              </div>
              <PencilLine className="hidden h-12 w-12 text-emerald-700/40 sm:block" />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {kidsMaterials.map((material) => (
                <article key={material.href} className="flex min-h-[230px] flex-col rounded-2xl border border-emerald-200 bg-white/80 p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] text-emerald-800/65">{material.pages}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg text-emerald-950">{material.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-5 text-emerald-950/70">{material.description}</p>
                  <div className="mt-3 border-t border-emerald-100 pt-3 text-[11px] text-emerald-800/70">
                    <div>{material.level}</div>
                    <div className="font-medium">Foco: {material.focus}</div>
                  </div>
                  <a href={material.href} target="_blank" rel="noreferrer" download className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-800">
                    <Download className="h-4 w-4" />
                    Abrir ficha PDF
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="font-serif text-xl sm:text-2xl">Navegar por subcategoria</h2>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2 sm:mt-6 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-4">
          <button
            onClick={() => {
              setSubFilter(null);
              setPage(0);
            }}
            className={`shrink-0 whitespace-nowrap rounded-xl border px-4 py-3 text-left text-sm transition-all ${
              subFilter === null
                ? "border-gold bg-gold/10 text-gold"
                : "border-border bg-card text-foreground hover:border-gold hover:bg-gold/5"
            }`}
          >
            <div className="font-medium">Todas</div>
          </button>
          {cat.subcategories.map((sub: Subcategory) => (
            <button
              key={sub.slug}
              onClick={() => {
                setSubFilter(sub.slug);
                setPage(0);
              }}
              className={`shrink-0 whitespace-nowrap rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                subFilter === sub.slug
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-border bg-card text-foreground hover:border-gold hover:bg-gold/5"
              }`}
            >
              <div className="font-medium">{sub.name}</div>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-2">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl">Catálogo</h2>
            <p className="mt-1 text-xs text-muted-foreground">Selecione um PDF para mais detalhes e comprar via WhatsApp</p>
          </div>
          <span className="text-xs text-muted-foreground">
            {formatNumber(items.length)} de {formatNumber(total)}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-5">
          {items.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {loading && items.length === 0 && (
          <div className="flex justify-center py-16">
            <Loader2 className="h-6 w-6 animate-spin text-gold" />
          </div>
        )}

        {!loading && items.length === 0 && (
          <div className="rounded-2xl border border-border/60 bg-card/40 p-10 text-center">
            <p className="font-serif text-lg text-foreground">
              Esta secção ainda não tem títulos publicados.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Voltamos em breve com novos PDFs. Enquanto isso, explora outras categorias.
            </p>
          </div>
        )}

        {hasMore && (
          <div className="mt-10 flex justify-center sm:mt-12">
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={loading}
              className="rounded-full border border-gold/40 px-8 py-3 text-sm text-gold transition-colors hover:bg-gold/10 disabled:opacity-50"
            >
              {loading ? "A carregar…" : "Carregar mais títulos"}
            </button>
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
