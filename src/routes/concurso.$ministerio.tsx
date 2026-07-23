import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getTrack, type Sector, type Module } from "@/lib/study-tracks";
import { ministryLogos } from "@/lib/ministry-logos";


export const Route = createFileRoute("/concurso/$ministerio")({
  loader: ({ params }) => {
    const track = getTrack("concurso", params.ministerio);
    if (!track) throw notFound();
    return { track };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.track.name} — Concurso | Amigo do Saber` },
          { name: "description", content: `${loaderData.track.tagline} ${loaderData.track.sectors.length} sectores.` },
          { property: "og:title", content: `${loaderData.track.name} — Concurso Público` },
          { property: "og:description", content: loaderData.track.tagline },
        ]
      : [{ title: "Concurso — Amigo do Saber" }],
  }),
  component: MinisterioPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">Ministério não encontrado.</p>
    </div>
  ),
});

function MinisterioPage() {
  const { track } = Route.useLoaderData();
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/concurso" className="hover:text-gold">Concurso</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold">{track.name}</span>
          </nav>
          <div className="mt-4 flex items-center gap-4">
            {ministryLogos[track.slug] ? (
              <img
                src={ministryLogos[track.slug]}
                alt={`Insígnia ${track.name}`}
                className="h-16 w-auto max-w-[200px] object-contain"
                loading="lazy"
              />
            ) : (
              <div className="text-4xl sm:text-5xl">{track.icon}</div>
            )}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-serif text-3xl sm:text-5xl">{track.name}</h1>
                {(track.slug === "minint" || track.slug === "minsa" || track.slug === "mined") && (
                  <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold">
                    Concurso 2026/2027
                  </span>
                )}
              </div>
              <p className="mt-1 text-muted-foreground">{track.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="font-serif text-xl sm:text-3xl">Escolha um sector</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {track.sectors.map((sector: Sector) => (
            <Link
              key={sector.slug}
              to="/concurso/$ministerio/$sector"
              params={{ ministerio: track.slug, sector: sector.slug }}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-gold"
            >
              <div className="font-serif text-xl text-foreground">{sector.name}</div>
              <p className="mt-1 text-sm text-muted-foreground">{sector.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-gold">
                <span>{sector.modules.length} módulos · {sector.modules.reduce((s: number, m: Module) => s + m.lessons.length, 0)} aulas</span>
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
