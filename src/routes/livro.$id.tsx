import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, Download, FileText, MessageCircle, Shield, Star } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BookCover } from "@/components/BookCover";
import { BookCard } from "@/components/BookCard";
import {
  formatNumber,
  formatPrice,
  getBook,
  getCategory,
  getSubcategory,
  listBooksBySubcategory,
  whatsappCheckoutUrl,
  type Book,
} from "@/lib/library-data";

export const Route = createFileRoute("/livro/$id")({
  loader: ({ params }) => {
    const book = getBook(params.id);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.book.title} — ${loaderData.book.author}` },
          { name: "description", content: loaderData.book.synopsis },
          {
            property: "og:title",
            content: `${loaderData.book.title} — Amigo do Saber`,
          },
          { property: "og:description", content: loaderData.book.synopsis },
        ]
      : [{ title: "Livro — Amigo do Saber" }],
  }),
  component: BookPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">Livro não encontrado.</p>
    </div>
  ),
});

function BookPage() {
  const { book } = Route.useLoaderData();
  const cat = getCategory(book.category);
  const sub = getSubcategory(book.category, book.subcategory);
  const related = listBooksBySubcategory(book.category, book.subcategory, 0, 6)
    .items.filter((b: Book) => b.id !== book.id)
    .slice(0, 5);

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
            <div className="text-xs uppercase tracking-[0.25em] text-gold">
              {sub?.name}
            </div>
            <h1 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {book.title}
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">por {book.author}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:gap-6">
              <span className="flex items-center gap-1.5 text-gold">
                <Star className="h-4 w-4 fill-current" strokeWidth={0} />
                <span className="font-medium">{book.rating}</span>
                <span className="text-muted-foreground">/ 5</span>
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Download className="h-4 w-4" />
                {formatNumber(book.downloads)} descargas
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <FileText className="h-4 w-4" />
                {book.pages} pág · PDF
              </span>
              <span className="text-muted-foreground">{book.year}</span>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-5 sm:mt-8 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div className="font-serif text-3xl text-gold sm:text-4xl">
                  {formatPrice(book.price)}
                </div>
                <div className="text-xs text-muted-foreground">
                  Pagamento único · Descarga imediata
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-gold flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Comprar via WhatsApp
                </a>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Shield className="h-3.5 w-3.5 text-gold" />
                Sem cadastro · Checkout directo no WhatsApp
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <h2 className="font-serif text-xl sm:text-2xl">Sinopse</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {book.synopsis}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Esta obra faz parte do acervo curado da Biblioteca Digital, com mais
                de {formatNumber(cat?.totalCount ?? 0)} títulos na categoria{" "}
                {cat?.name.toLowerCase()}. Cada PDF é revisto para garantir qualidade
                de leitura em qualquer dispositivo.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-4">
              <Fact label="Formato" value="PDF" />
              <Fact label="Páginas" value={String(book.pages)} />
              <Fact label="Idioma" value="Português" />
              <Fact label="Publicado" value={String(book.year)} />
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl">Leitores também compraram</h2>
          <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-5">
            {related.map((b: Book) => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-4">
      <div className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 font-serif text-lg text-foreground">{value}</div>
    </div>
  );
}
