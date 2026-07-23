import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { preparatorioTracks, totalSectors } from "@/lib/study-tracks";
import { ChevronRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/preparatorio/")({
  head: () => ({
    meta: [
      { title: "Preparatório universitário — Ingresso na universidade | Amigo do Saber" },
      { name: "description", content: `Prepare-se para o exame de acesso à universidade em Angola. ${totalSectors("preparatorio")} cursos cobertos com aulas e simulados.` },
      { property: "og:title", content: "Preparatório — Amigo do Saber" },
      { property: "og:description", content: "Preparação completa para ingresso em qualquer curso universitário angolano." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PreparatorioIndex,
});

function PreparatorioIndex() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.36_0.11_25/0.15),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-parchment/30 bg-parchment/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-parchment">
            <Sparkles className="h-3 w-3" /> Ingresso na universidade
          </div>
          <h1 className="mt-4 font-serif text-3xl sm:text-5xl lg:text-7xl leading-[1.05]">
            <span className="italic text-parchment">Preparatório</span>
            <br />
            <span className="text-foreground">um curso, um caminho.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Aulas por disciplina para cada curso universitário. Escolha o seu curso e comece já a rever a matéria do exame de acesso.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {preparatorioTracks.map((track) => (
            <Link
              key={track.slug}
              to="/preparatorio/$faculdade"
              params={{ faculdade: track.slug }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-gold hover:shadow-glow"
            >
              <div className="text-4xl">{track.icon}</div>
              <h3 className="mt-4 font-serif text-2xl text-foreground">{track.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{track.tagline}</p>
              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="text-gold">{track.sectors.length} cursos</span>
                <ChevronRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
