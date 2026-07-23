import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, FileText, MessageCircle, Shield, Loader2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BookCover } from "@/components/BookCover";
import { BookCard } from "@/components/BookCard";
import {
  formatNumber,
  formatPrice,
  getCategory,
  getSubcategory,
  dbBookToDisplay,
  whatsappCheckoutUrl,
  type Book,
} from "@/lib/library-data";
import { getBookById, listBooks } from "@/lib/books.functions";

export const Route = createFileRoute("/livro/$id")({
  head: () => ({
    meta: [{ title: "Livro — Amigo do Saber" }],
  }),
  component: BookPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">Livro não encontrado.</p>
    </div>
  ),
});

function BookPage() {
  const { id } = Route.useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [related, setRelated] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setMissing(false);
    void getBookById({ data: { id } })
      .then(async (row) => {
        if (!alive) return;
        if (!row) {
          setMissing(true);
          setBook(null);
          setRelated([]);
          return;
        }
        const display = dbBookToDisplay(row);
        setBook(display);
        try {
          const res = await listBooks({
            data: {
              category: row.category_slug,
              subcategory: row.subcategory_slug,
              limit: 6,
            },
          });
          if (!alive) return;
          setRelated(
            res.items
              .filter((r) => r.id !== row.id)
              .slice(0, 5)
              .map(dbBookToDisplay),
          );
        } catch {
          if (alive) setRelated([]);
        }
      })
      .catch(() => {
        if (alive) setMissing(true);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <SiteHeader />
        <div className="flex justify-center py-24">
          <Loader2 className="h-6 w-6 animate-spin text-gold" />
        </div>
        <SiteFooter />
      </div>
    );
  }

  if (missing || !book) {
    throw notFound();
  }

  const cat = getCategory(book.category);
  const sub = getSubcategory(book.category, book.subcategory);
  const checkoutUrl = whatsappCheckoutUrl(book);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <nav className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-gold">Biblioteca</Link>
          <ChevronRight className="h-3 w-3" />
          {cat && (
            <Link
              to="/categoria/$slug"
              params={{ slug: cat.slug }}
              className="hover:text-gold"
            >
              {cat.name}
            </Link>
          )}
          {sub && (
            <>
              <ChevronRight className="h-3 w-3" />
              <span>{sub.name}</span>
            </>
          )}
        </nav>

        <div className="mt-6 grid gap-8 sm:mt-8 sm:gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
          <div className="mx-auto w-full max-w-[220px] sm:max-w-[280px] lg:sticky lg:top-24 lg:self-start">
            <div className="shadow-glow">
              <BookCover book={book} />
            </div>
          </div>

          <div className="min-w-0">
            {sub && (
              <div className="text-xs uppercase tracking-[0.25em] text-gold">
                {sub.name}
              </div>
            )}
            <h1 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {book.title}
            </h1>
            {book.author && (
              <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                por {book.author}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:gap-6">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <FileText className="h-4 w-4" />
                PDF
              </span>
            </div>

            <div className="mt-6 rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/5 to-gold/10 p-5 sm:mt-8 sm:p-8 shadow-lg shadow-gold/10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-gold font-medium">Preço</p>
                  <div className="font-serif text-4xl text-gold sm:text-5xl mt-1">
                    {formatPrice(book.price)}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground mb-1">Pagamento seguro</p>
                  <p className="text-xs text-gold font-medium">via WhatsApp</p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-gold flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-gold/30 hover:scale-[1.02]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Comprar via WhatsApp
                </a>
              </div>

              <div className="mt-5 rounded-lg bg-white/5 p-4 border border-gold/20">
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                    <span>Após confirmar o pagamento, enviamos o PDF pelo WhatsApp</span>
                  </div>
                  <div className="flex items-start gap-2 ml-6">
                    <span className="text-gold">✓</span>
                    <span>Entrega rápida e segura</span>
                  </div>
                  <div className="flex items-start gap-2 ml-6">
                    <span className="text-gold">✓</span>
                    <span>Suporte direto no WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>

            {book.synopsis && (
              <div className="mt-8 sm:mt-10">
                <h2 className="font-serif text-xl sm:text-2xl">Sobre este livro</h2>
                <p className="mt-3 whitespace-pre-line leading-relaxed text-muted-foreground">
                  {book.synopsis}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl">Também nesta secção</h2>
          <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-5">
            {related.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
          <div className="mt-4 text-xs text-muted-foreground">
            {formatNumber(related.length)} títulos relacionados
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
