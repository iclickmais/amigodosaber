import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useStudent } from "@/hooks/use-student";
import { getRevisionQueue, submitRevisionCard, type RevisionCard } from "@/lib/revision.functions";
import { CheckCircle2, XCircle, RotateCcw, BookOpen, Sparkles, Loader2 } from "lucide-react";

export const Route = createFileRoute("/revisao")({
  head: () => ({
    meta: [
      { title: "Revisão dos meus erros — Amigo do Saber" },
      { name: "description", content: "Revisão espaçada das perguntas que erraste. Estuda com o método mais eficaz." },
      { property: "og:title", content: "Revisão inteligente — Amigo do Saber" },
      { property: "og:description", content: "As tuas perguntas erradas, na dose certa, no dia certo." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: RevisionPage,
});

function RevisionPage() {
  const { student, hydrated } = useStudent();
  const navigate = useNavigate();
  const [cards, setCards] = useState<RevisionCard[]>([]);
  const [totalDue, setTotalDue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!hydrated) return;
    if (!student) {
      navigate({ to: "/entrar" });
      return;
    }
    setLoading(true);
    getRevisionQueue({ data: { studentId: student.id } })
      .then((r) => {
        setCards(r.cards);
        setTotalDue(r.totalDue);
      })
      .catch((e) => setError(e instanceof Error ? e.message : "Falha"))
      .finally(() => setLoading(false));
  }, [hydrated, student, navigate]);

  const card = cards[index];

  async function respond(correct: boolean) {
    if (!card) return;
    setSaving(true);
    try {
      await submitRevisionCard({ data: { cardId: card.id, correct } });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Falha");
    } finally {
      setSaving(false);
    }
    // avança para o próximo
    if (index + 1 >= cards.length) {
      setDone(true);
    } else {
      setIndex(index + 1);
      setChosen(null);
      setRevealed(false);
    }
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <header className="mb-6 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
            <Sparkles className="h-6 w-6" />
          </span>
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl">Revisão inteligente</h1>
            <p className="text-xs text-muted-foreground">
              As tuas perguntas erradas voltam à dose certa. Método de repetição espaçada.
            </p>
          </div>
        </header>

        {error && (
          <p className="mb-6 rounded-lg border border-burgundy/40 bg-burgundy/10 p-3 text-sm text-burgundy">{error}</p>
        )}

        {loading && (
          <div className="flex items-center justify-center gap-2 py-16 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin text-gold" /> A carregar…
          </div>
        )}

        {!loading && cards.length === 0 && (
          <div className="rounded-2xl border border-gold/30 bg-gold/5 p-8 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-gold" />
            <h2 className="mt-3 font-serif text-2xl">Sem revisões hoje</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {totalDue > 0
                ? `Tens ${totalDue} pergunta(s) noutro dia. Vamos abrir uma aula nova?`
                : "Boa! Vamos fazer mais quizzes para alimentar a fila?"}
            </p>
            <Link
              to="/painel"
              className="mt-4 inline-flex rounded-full bg-gold px-5 py-2 text-xs font-medium text-primary-foreground hover:opacity-90"
            >
              Voltar ao painel
            </Link>
          </div>
        )}

        {!loading && done && (
          <div className="rounded-2xl border border-gold/40 bg-gold/10 p-8 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-gold" />
            <h2 className="mt-3 font-serif text-2xl">Revisão concluída!</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Revisão diária feita. Volta amanhã — o cérebro consolida melhor com espaçamento.
            </p>
            <Link
              to="/painel"
              className="mt-4 inline-flex rounded-full bg-gold px-5 py-2 text-xs font-medium text-primary-foreground hover:opacity-90"
            >
              Ver painel
            </Link>
          </div>
        )}

        {!loading && !done && card && (
          <div className="rounded-2xl border border-border bg-card p-4 sm:p-6">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
              <span>
                Cartão {index + 1} / {cards.length}
              </span>
              {card.lesson ? (
                <Link
                  to="/aula/$kind/$track/$sector/$module/$lesson"
                  params={{
                    kind: card.lesson.track_kind,
                    track: card.lesson.track_slug,
                    sector: card.lesson.sector_slug,
                    module: card.lesson.module_slug,
                    lesson: card.lesson.lesson_slug,
                  }}
                  className="flex items-center gap-1 text-gold hover:underline"
                >
                  <BookOpen className="h-3 w-3" />
                  {card.lesson.title}
                </Link>
              ) : (
                <span className="flex items-center gap-1 text-gold">
                  <BookOpen className="h-3 w-3" /> Aula
                </span>
              )}
            </div>
            <p className="font-serif text-lg sm:text-xl text-foreground">{card.question.q}</p>
            <div className="mt-4 space-y-2">
              {card.question.options.map((opt, oi) => {
                const isChosen = chosen === oi;
                const isCorrect = revealed && oi === card.question.correct;
                const isWrong = revealed && isChosen && oi !== card.question.correct;
                return (
                  <button
                    key={oi}
                    disabled={revealed}
                    onClick={() => setChosen(oi)}
                    className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-all ${
                      isCorrect
                        ? "border-gold bg-gold/15 text-foreground"
                        : isWrong
                        ? "border-burgundy bg-burgundy/15 text-foreground"
                        : isChosen
                        ? "border-gold/60 bg-gold/5 text-foreground"
                        : "border-border text-muted-foreground hover:border-gold/50"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs ${
                        isChosen || isCorrect ? "border-gold text-gold" : "border-border"
                      }`}
                    >
                      {String.fromCharCode(65 + oi)}
                    </span>
                    <span className="flex-1">{opt}</span>
                    {isCorrect && <CheckCircle2 className="h-4 w-4 text-gold" />}
                    {isWrong && <XCircle className="h-4 w-4 text-burgundy" />}
                  </button>
                );
              })}
            </div>

            {revealed && (
              <p className="mt-4 rounded-lg border border-gold/20 bg-gold/5 p-3 text-xs">
                <span className="text-gold">Explicação:</span>{" "}
                <span className="text-muted-foreground">{card.question.explanation}</span>
              </p>
            )}

            {!revealed ? (
              <button
                onClick={() => setRevealed(true)}
                disabled={chosen === null}
                className="mt-5 w-full rounded-full bg-gold px-4 py-3 text-sm font-medium text-primary-foreground disabled:opacity-40"
              >
                Ver resposta
              </button>
            ) : (
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => respond(false)}
                  disabled={saving}
                  className="flex items-center justify-center gap-2 rounded-full border border-burgundy/40 px-4 py-3 text-sm text-burgundy hover:bg-burgundy/10 disabled:opacity-50"
                >
                  <RotateCcw className="h-4 w-4" /> Ainda não sei
                </button>
                <button
                  onClick={() => respond(chosen === card.question.correct)}
                  disabled={saving}
                  className="flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
                >
                  <CheckCircle2 className="h-4 w-4" /> Marcar aprendida
                </button>
              </div>
            )}
          </div>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}
