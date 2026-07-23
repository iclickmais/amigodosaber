import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, GraduationCap, Cross, Landmark, BookOpenCheck, Flame, Zap, Trophy, Crown } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import cardAcademicos from "@/assets/card-academicos.jpg";
import cardCristaos from "@/assets/card-cristaos.jpg";
import cardConcurso from "@/assets/card-concurso.jpg";
import cardPreparatorio from "@/assets/card-preparatorio.jpg";
import { useStudent } from "@/hooks/use-student";
import { useEffect, useState } from "react";

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
      "Aulas e questionários por sector: MININT, MINSA, MED e tantos outros — preparação séria para o Estado.",
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
  const { student, hydrated } = useStudent();
  const [streak, setStreak] = useState(0);
  const [xp, setXp] = useState(0);

  // Carregar streak/XP do localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("angopdf.game-stats");
      if (raw) {
        const stats = JSON.parse(raw);
        setStreak(stats.streak ?? 0);
        setXp(stats.xp ?? 0);
      }
    } catch {}
  }, []);

  const level = Math.floor(xp / 100) + 1;
  const xpProgress = xp % 100;

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <SiteHeader />

      <main className="relative flex flex-1 flex-col overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.13_78/0.08),transparent_60%)]" />

        <div className="relative mx-auto flex w-full max-w-[1500px] flex-1 flex-col px-4 pb-4 pt-3 sm:px-6 sm:pb-6 sm:pt-4 lg:px-8">
          {/* Header */}
          <header className="mb-3 text-center sm:mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold">
              Escolha o seu caminho
            </div>
            <h1 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl lg:text-4xl">
              Quatro portas, uma <span className="text-gradient-gold italic">biblioteca</span>.
            </h1>
          </header>

          {/* Gamificação — barra de XP e streak (só para alunos logados) */}
          {hydrated && student && (
            <div className="mb-3 flex items-center gap-4 rounded-xl border border-gold/20 bg-gold/5 px-4 py-2 max-w-md mx-auto">
              {/* Streak */}
              <div className="flex items-center gap-1.5">
                <Flame className="h-4 w-4 text-orange-400" />
                <span className="text-sm font-bold text-orange-300">{streak}</span>
                <span className="text-[10px] text-muted-foreground">dias</span>
              </div>
              {/* XP & Level */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] text-muted-foreground">
                    Nível {level} · {xp} XP
                  </span>
                  <Trophy className="h-3 w-3 text-gold" />
                </div>
                <div className="h-1.5 rounded-full bg-border/60 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gold transition-all duration-500"
                    style={{ width: `${xpProgress}%` }}
                  />
                </div>
              </div>
              {/* Info badge */}
              <Zap className="h-4 w-4 text-gold shrink-0" />
            </div>
          )}

          {/* Banner de pagamento (só para alunos logados) */}
          {hydrated && student && (
            <div className="mb-3 max-w-md mx-auto">
              <div className="flex items-center gap-2 rounded-xl border border-gold/15 bg-gold/[0.04] px-3 py-2">
                <Crown className="h-4 w-4 text-gold shrink-0" />
                <p className="text-[11px] leading-relaxed text-muted-foreground">
                  Com o pagamento, <span className="text-gold font-medium">todas as aulas ficam desbloqueadas</span>. Estuda na tua ordem — podes pular aulas e avançar livremente.
                </p>
              </div>
            </div>
          )}

          {/* Cards — 4 visíveis sem scroll */}
          <div className="grid min-h-0 flex-1 grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {cards.map((c) => {
              const Icon = c.icon;
              const linkProps = c.params
                ? { to: c.to, params: c.params }
                : { to: c.to };
              return (
                <Link
                  key={c.title}
                  {...(linkProps as { to: string })}
                  className={`group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-500 hover:shadow-glow ${accentRing[c.accent]}`}
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
    </div>
  );
}
