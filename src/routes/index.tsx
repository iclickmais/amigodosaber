import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, GraduationCap, Cross, Landmark, BookOpenCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import cardAcademicos from "@/assets/card-academicos.jpg";
import cardCristaos from "@/assets/card-cristaos.jpg";
import cardConcurso from "@/assets/card-concurso.jpg";
import cardPreparatorio from "@/assets/card-preparatorio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amigo do Saber — Biblioteca, Fé, Concursos e Preparatório" },
      {
        name: "description",
        content:
          "Quatro caminhos num só lugar: livros acadêmicos, obras cristãs, preparação para concursos públicos e para o ingresso na universidade.",
      },
      { property: "og:title", content: "Amigo do Saber — Biblioteca, Fé, Concursos e Preparatório" },
      {
        property: "og:description",
        content: "Quatro caminhos num só lugar: livros acadêmicos, obras cristãs, preparação para concursos públicos e para o ingresso na universidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

type CardDef = {
  to: string;
  params?: Record<string, string>;
  eyebrow: string;
  title: string;
  italic: string;
  description: string;
  image: string;
  icon: typeof GraduationCap;
  accent: "gold" | "burgundy" | "emerald" | "parchment";
};

const cards: CardDef[] = [
  {
    to: "/categoria/$slug",
    params: { slug: "academicos" },
    eyebrow: "Coleção I",
    title: "Acadêmicos",
    italic: "saber",
    description:
      "Catálogo com PDFs de Direito, Medicina, Engenharia, Economia, Psicologia — mais de 25 áreas. Compre via WhatsApp.",
    image: cardAcademicos,
    icon: GraduationCap,
    accent: "gold",
  },
  {
    to: "/categoria/$slug",
    params: { slug: "cristaos" },
    eyebrow: "Coleção II",
    title: "Cristãos",
    italic: "fé",
    description:
      "Catálogo de PDFs: Bíblias de estudo, teologia sistemática, vida cristã, pregação — compre e receba via WhatsApp.",
    image: cardCristaos,
    icon: Cross,
    accent: "burgundy",
  },
  {
    to: "/concurso",
    eyebrow: "Sala de aula",
    title: "Concursos",
    italic: "público",
    description:
      "Aulas e questionários por sector: Saúde, Educação, Justiça, Forças Armadas e mais — preparação séria para o Estado.",
    image: cardConcurso,
    icon: Landmark,
    accent: "emerald",
  },
  {
    to: "/preparatorio",
    eyebrow: "Universidade",
    title: "Preparatório",
    italic: "acesso",
    description:
      "Exame de acesso por faculdade e curso: disciplinas revistas, matéria condensada e questões modelo do ingresso.",
    image: cardPreparatorio,
    icon: BookOpenCheck,
    accent: "parchment",
  },
];

const accentRing: Record<CardDef["accent"], string> = {
  gold: "hover:border-gold/70",
  burgundy: "hover:border-burgundy",
  emerald: "hover:border-emerald-500/60",
  parchment: "hover:border-parchment/60",
};

const accentText: Record<CardDef["accent"], string> = {
  gold: "text-gold",
  burgundy: "text-parchment",
  emerald: "text-emerald-300",
  parchment: "text-parchment",
};

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="relative flex flex-1 flex-col">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.13_78/0.08),transparent_60%)]" />

        <div className="relative mx-auto flex w-full max-w-[1500px] flex-1 flex-col px-4 pb-6 pt-3 sm:px-6 sm:pb-8 sm:pt-4 lg:px-8">
          <header className="mb-4 text-center sm:mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold">
              Escolha o seu caminho
            </div>
            <h1 className="mt-3 font-serif text-2xl leading-tight sm:text-3xl lg:text-4xl">
              Quatro portas, uma <span className="text-gradient-gold italic">biblioteca</span>.
            </h1>
          </header>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => {
              const Icon = c.icon;
              const linkProps = c.params
                ? { to: c.to, params: c.params }
                : { to: c.to };
              return (
                <Link
                  key={c.title}
                  {...(linkProps as { to: string })}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-500 hover:shadow-glow min-h-[200px] sm:min-h-[280px] ${accentRing[c.accent]}`}
                >
                  <img
                    src={c.image}
                    alt=""
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="absolute inset-0 h-full w-full object-cover opacity-55 transition-all duration-700 group-hover:scale-[1.06] group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.12_0.012_60/0.35)_0%,oklch(0.12_0.012_60/0.6)_45%,oklch(0.10_0.012_60/0.95)_100%)]" />

                  <div className="relative flex flex-1 flex-col justify-end p-4 sm:p-5 lg:p-6">
                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-sm transition-colors group-hover:border-gold/60 group-hover:bg-gold/20 sm:right-5 sm:top-5">
                      <ArrowUpRight className={`h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${accentText[c.accent]}`} />
                    </div>

                    <div className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] ${accentText[c.accent]}`}>
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.6} />
                      {c.eyebrow}
                    </div>

                    <h2 className="mt-2 font-serif leading-[1.05] text-foreground text-[clamp(1.25rem,5vw,2.5rem)]">
                      <span className="block break-words hyphens-auto">{c.title}</span>
                      <span className={`block italic ${accentText[c.accent]} text-[0.72em]`}>
                        · {c.italic}
                      </span>
                    </h2>

                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {c.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer inline na homepage para mobile */}
      <footer className="border-t border-border/40 px-4 py-8 sm:hidden">
        <div className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Amigo do Saber · Feito com dedicação em Luanda
        </div>
      </footer>
    </div>
  );
}
