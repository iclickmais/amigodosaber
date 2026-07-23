import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { concursoTracks, totalSectors } from "@/lib/study-tracks";
import { ministryLogos } from "@/lib/ministry-logos";
import { ChevronRight, Sparkles } from "lucide-react";


export const Route = createFileRoute("/concurso/")({
  head: () => ({
    meta: [
      { title: "Concurso Público — Preparação completa | Amigo do Saber" },
      { name: "description", content: `Prepare-se para concursos públicos em Angola. ${totalSectors("concurso")} sectores cobertos com aulas e questionários gerados por IA.` },
      { property: "og:title", content: "Concurso Público — Amigo do Saber" },
      { property: "og:description", content: "Preparação completa para todos os concursos públicos angolanos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConcursoIndex,
});

function ConcursoIndex() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.13_78/0.12),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold">
            <Sparkles className="h-3 w-3" /> Sala de aula digital
          </div>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-gradient-gold italic">Concurso Público</span>
            <br />
            <span className="text-foreground">preparação séria, para todos.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            <span className="text-gold">MININT, MINSA e MED</span> já disponíveis para 2026/2027. Aulas completas e questionários organizados por ministério e sector. Acesso de <span className="text-gold">3 meses</span> por sector (1000 Kz). Estude no seu ritmo — o seu progresso fica guardado.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {concursoTracks.map((track) => (
            <Link
              key={track.slug}
              to="/concurso/$ministerio"
              params={{ ministerio: track.slug }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-gold hover:shadow-glow"
            >
              {ministryLogos[track.slug] ? (
                <img
                  src={ministryLogos[track.slug]}
                  alt={`Insígnia ${track.name}`}
                  className="h-12 w-auto max-w-[140px] object-contain object-left brightness-0 invert"
                  loading="lazy"
                />
              ) : (
                <div className="text-4xl">{track.icon}</div>
              )}
              <div className="mt-4 flex items-center gap-2">
                <h3 className="font-serif text-2xl text-foreground">{track.name}</h3>
                {(track.slug === "minint" || track.slug === "minsa" || track.slug === "mined") && (
                  <span className="rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gold">
                    2026/2027
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{track.tagline}</p>
              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="text-gold">{track.sectors.length} sectores</span>
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
