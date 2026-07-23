import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getTrack, type Sector, type Module } from "@/lib/study-tracks";

export const Route = createFileRoute("/preparatorio/$faculdade")({
  loader: ({ params }) => {
    const track = getTrack("preparatorio", params.faculdade);
    if (!track) throw notFound();
    return { track };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.track.name} — Preparatório | Amigo do Saber` },
          { name: "description", content: `${loaderData.track.tagline} ${loaderData.track.sectors.length} cursos.` },
          { property: "og:title", content: `${loaderData.track.name} — Preparatório` },
          { property: "og:description", content: loaderData.track.tagline },
        ]
      : [{ title: "Preparatório — Amigo do Saber" }],
  }),
  component: FaculdadePage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">Faculdade não encontrada.</p>
    </div>
  ),
});

function FaculdadePage() {
  const { track } = Route.useLoaderData();
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/preparatorio" className="hover:text-gold">Preparatório</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold">{track.name}</span>
          </nav>
          <div className="mt-4 flex items-center gap-4">
            <div className="text-5xl">{track.icon}</div>
            <div>
              <h1 className="font-serif text-3xl sm:text-5xl">{track.name}</h1>
              <p className="mt-1 text-muted-foreground">{track.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="font-serif text-xl sm:text-3xl">Escolha o seu curso</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {track.sectors.map((sector: Sector) => (
            <Link
              key={sector.slug}
              to="/preparatorio/$faculdade/$curso"
              params={{ faculdade: track.slug, curso: sector.slug }}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-gold"
            >
              <div className="font-serif text-xl text-foreground">{sector.name}</div>
              <p className="mt-1 text-sm text-muted-foreground">{sector.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-gold">
                <span>{sector.modules.length} disciplinas · {sector.modules.reduce((s: number, m: Module) => s + m.lessons.length, 0)} aulas</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
