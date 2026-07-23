import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { listEdicts, type EdictRow } from "@/lib/edicts.functions";
import { Calendar, ExternalLink, Megaphone, Loader2 } from "lucide-react";

export const Route = createFileRoute("/editais")({
  head: () => ({
    meta: [
      { title: "Editais e concursos abertos | Amigo do Saber" },
      { name: "description", content: "Lista dos concursos públicos e provas de acesso abertas em Angola. Prazos, ministérios e links oficiais." },
      { property: "og:title", content: "Editais abertos — Amigo do Saber" },
      { property: "og:description", content: "Todos os concursos abertos, num só lugar. Datas, ministérios e links directos." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: EdictsPage,
});

function daysUntil(iso: string | null): number | null {
  if (!iso) return null;
  const d = new Date(iso + "T23:59:59").getTime();
  return Math.ceil((d - Date.now()) / (1000 * 60 * 60 * 24));
}

function EdictsPage() {
  const [rows, setRows] = useState<EdictRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "concurso" | "preparatorio">("all");

  useEffect(() => {
    listEdicts()
      .then(setRows)
      .finally(() => setLoading(false));
  }, []);

  const visible = rows.filter((r) => filter === "all" || r.kind === filter);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <header className="mb-6 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
            <Megaphone className="h-6 w-6" />
          </span>
          <div>
            <h1 className="font-serif text-3xl">Editais abertos</h1>
            <p className="text-xs text-muted-foreground">
              Concursos públicos e provas de acesso divulgados.
            </p>
          </div>
        </header>

        <div className="mb-6 flex gap-2 overflow-x-auto">
          {([
            ["all", "Todos"],
            ["concurso", "Concurso público"],
            ["preparatorio", "Preparatório"],
          ] as const).map(([id, label]) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-xs transition-colors ${
                filter === id
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-border text-muted-foreground hover:border-gold hover:text-gold"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {loading && (
          <div className="flex items-center justify-center gap-2 py-16 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin text-gold" /> A carregar…
          </div>
        )}

        {!loading && visible.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            Sem editais publicados por enquanto. Volta em breve — actualizamos assim que houver novidades.
          </div>
        )}

        <ul className="space-y-3">
          {visible.map((e) => {
            const days = daysUntil(e.deadline);
            return (
              <li key={e.id} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-gold">
                      {e.kind === "concurso" ? "Concurso público" : "Preparatório"} · {e.track_slug}
                      {e.sector_slug ? ` / ${e.sector_slug}` : ""}
                    </p>
                    <h2 className="mt-1 font-serif text-xl">{e.title}</h2>
                  </div>
                  {e.deadline && (
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs ${
                        days === null
                          ? "border-border text-muted-foreground"
                          : days < 0
                          ? "border-burgundy/40 text-burgundy"
                          : days <= 7
                          ? "border-burgundy/40 bg-burgundy/10 text-burgundy"
                          : "border-gold/40 bg-gold/10 text-gold"
                      }`}
                    >
                      <Calendar className="h-3 w-3" />
                      {days !== null && days >= 0
                        ? `Encerra em ${days} dias`
                        : `Encerrou em ${new Date(e.deadline).toLocaleDateString("pt-PT")}`}
                    </span>
                  )}
                </div>
                {e.description_md && (
                  <p className="mt-3 whitespace-pre-wrap text-sm text-muted-foreground">
                    {e.description_md}
                  </p>
                )}
                {e.source_url && (
                  <a
                    href={e.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs text-gold hover:underline"
                  >
                    <ExternalLink className="h-3 w-3" /> Ver edital oficial
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          <Link to="/concurso" className="text-gold hover:underline">
            Explorar sectores
          </Link>{" "}
          para começar a estudar.
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}
