import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getSector } from "@/lib/study-tracks";
import { SectorClassroom } from "@/components/SectorClassroom";

export const Route = createFileRoute("/preparatorio/$faculdade_/$curso")({
  loader: ({ params }) => {
    const found = getSector("preparatorio", params.faculdade, params.curso);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.sector.name} — ${loaderData.track.name} | Amigo do Saber` },
          { name: "description", content: `Preparação para ingresso em ${loaderData.sector.name}.` },
          { property: "og:title", content: `${loaderData.sector.name} — Sala de aula` },
          { property: "og:description", content: loaderData.sector.description },
        ]
      : [{ title: "Curso — Amigo do Saber" }],
  }),
  component: CursoPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">Curso não encontrado.</p>
    </div>
  ),
});

function CursoPage() {
  const { track, sector } = Route.useLoaderData();
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/preparatorio" className="hover:text-gold">Preparatório</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/preparatorio/$faculdade" params={{ faculdade: track.slug }} className="hover:text-gold">{track.name}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold">{sector.name}</span>
          </nav>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl">{sector.name}</h1>
          <p className="mt-1 text-muted-foreground">{sector.description}</p>
        </div>
      </section>

      <SectorClassroom
        kind="preparatorio"
        trackSlug={track.slug}
        sectorSlug={sector.slug}
        trackName={track.name}
        sectorName={sector.name}
        modules={sector.modules}
      />

      <SiteFooter />
    </div>
  );
}
