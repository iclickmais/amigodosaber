import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock3, Share2 } from "lucide-react";
import { getNewsPost, newsPosts } from "@/lib/news-data";

export const Route = createFileRoute("/noticias/$slug")({
  head: ({ params }) => {
    const post = getNewsPost(params.slug);
    return {
      meta: [
        { title: post ? `${post.title} | Amigo do Saber` : "Artigo não encontrado | Amigo do Saber" },
        { name: "description", content: post?.excerpt ?? "Conteúdo de estudo e preparação do Amigo do Saber." },
        ...(post ? [{ name: "keywords", content: post.keywords.join(", ") }] : []),
      ],
    };
  },
  component: NewsArticlePage,
});

function NewsArticlePage() {
  const { slug } = Route.useParams();
  const post = getNewsPost(slug);
  if (!post) {
    return <main className="mx-auto min-h-screen max-w-3xl px-4 py-24 text-center"><h1 className="font-serif text-3xl">Artigo não encontrado</h1><Link to="/noticias" className="mt-5 inline-flex text-sm text-gold hover:underline">Voltar às notícias</Link></main>;
  }
  const related = newsPosts.filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 2);

  async function share() {
    const url = window.location.href;
    if (navigator.share) await navigator.share({ title: post.title, text: post.excerpt, url });
    else await navigator.clipboard?.writeText(url);
  }

  return (
    <main className="min-h-screen">
      <article className="mx-auto max-w-3xl px-4 py-12 sm:py-20">
        <Link to="/noticias" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-gold"><ArrowLeft className="h-3.5 w-3.5" /> Todas as notícias</Link>
        <div className="mt-10 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-gold"><span>{post.category}</span><span className="h-1 w-1 rounded-full bg-gold/60" /><span className="inline-flex items-center gap-1 text-muted-foreground"><CalendarDays className="h-3 w-3" />{new Date(post.publishedAt).toLocaleDateString("pt-PT")}</span><span className="inline-flex items-center gap-1 text-muted-foreground"><Clock3 className="h-3 w-3" />{post.readTime}</span></div>
        <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{post.excerpt}</p>
        <button onClick={share} className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground hover:border-gold hover:text-gold"><Share2 className="h-3.5 w-3.5" /> Partilhar artigo</button>
        <div className="mt-12 space-y-6 border-t border-border pt-10 text-base leading-8 text-foreground/90">{post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </article>
      {related.length > 0 && <section className="mx-auto max-w-3xl border-t border-border px-4 py-10"><h2 className="font-serif text-2xl">Continue a estudar</h2><div className="mt-4 grid gap-3 sm:grid-cols-2">{related.map((item) => <Link key={item.slug} to="/noticias/$slug" params={{ slug: item.slug }} className="rounded-2xl border border-border bg-card p-4 hover:border-gold/50"><p className="text-sm font-medium">{item.title}</p><p className="mt-2 text-xs text-muted-foreground">{item.readTime} de leitura</p></Link>)}</div></section>}
    </main>
  );
}
