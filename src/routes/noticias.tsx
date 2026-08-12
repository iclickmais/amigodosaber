import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock3, Newspaper } from "lucide-react";
import { newsPosts } from "@/lib/news-data";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias e dicas de estudo para concursos | Amigo do Saber" },
      { name: "description", content: "Dicas de estudo, organização, editais e carreira para quem se prepara para concursos e exames." },
      { name: "keywords", content: "concursos Angola, dicas de estudo, preparação para concursos, editais" },
      { property: "og:title", content: "Notícias e dicas de estudo | Amigo do Saber" },
      { property: "og:description", content: "Conteúdo prático para estudar melhor e acompanhar a sua preparação." },
    ],
  }),
  component: NewsIndexPage,
});

function NewsIndexPage() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-border/70 bg-gradient-to-b from-gold/[0.08] to-transparent px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold"><Newspaper className="h-4 w-4" /> Amigo do Saber · Conteúdo</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">Estude com mais clareza. Prepare-se com propósito.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">Guias práticos sobre estudo, concursos e carreira para ajudar você a criar constância e tomar decisões com base no edital oficial.</p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {newsPosts.map((post, index) => (
            <article key={post.slug} className={`group rounded-3xl border p-6 transition-colors hover:border-gold/50 ${index === 0 ? "border-gold/30 bg-gold/[0.04] md:col-span-2" : "border-border bg-card"}`}>
              <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-gold">
                <span>{post.category}</span><span className="h-1 w-1 rounded-full bg-gold/60" />
                <span className="inline-flex items-center gap-1 text-muted-foreground"><CalendarDays className="h-3 w-3" />{new Date(post.publishedAt).toLocaleDateString("pt-PT")}</span>
                <span className="inline-flex items-center gap-1 text-muted-foreground"><Clock3 className="h-3 w-3" />{post.readTime}</span>
              </div>
              <h2 className={`mt-4 font-serif leading-tight group-hover:text-gold ${index === 0 ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{post.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
              <Link to="/noticias/$slug" params={{ slug: post.slug }} className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-gold hover:underline">Ler artigo <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
