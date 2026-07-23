import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useStudent } from "@/hooks/use-student";
import { getSector, type TrackKind } from "@/lib/study-tracks";
import { startSimulado, submitSimulado, type SimuladoPayload } from "@/lib/simulado.functions";
import { CheckCircle2, XCircle, Timer, Loader2, Trophy, Lock } from "lucide-react";

export const Route = createFileRoute("/simulado/$kind/$track/$sector")({
  loader: ({ params }) => {
    const kind = params.kind as TrackKind;
    if (kind !== "concurso" && kind !== "preparatorio") throw notFound();
    const found = getSector(kind, params.track, params.sector);
    if (!found) throw notFound();
    return { kind, track: found.track, sector: found.sector };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `Simulado — ${loaderData.sector.name} | Amigo do Saber` : "Simulado — Amigo do Saber" },
      { name: "description", content: "Simulado cronometrado de 30 perguntas em 45 minutos." },
      { property: "og:title", content: "Simulado cronometrado — Amigo do Saber" },
      { property: "og:description", content: "Testa-te como no dia da prova." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SimuladoPage,
});

interface Result {
  score: number;
  total: number;
  durationSec: number;
  sectorAveragePct: number;
}

function SimuladoPage() {
  const { kind, track, sector } = Route.useLoaderData();
  const { student, hydrated } = useStudent();
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"idle" | "loading" | "running" | "done">("idle");
  const [payload, setPayload] = useState<SimuladoPayload | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [remaining, setRemaining] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const startedAtRef = useRef<number>(0);

  useEffect(() => {
    if (hydrated && !student) navigate({ to: "/entrar" });
  }, [hydrated, student, navigate]);

  useEffect(() => {
    if (phase !== "running") return;
    const t = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(t);
          void handleSubmit();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  async function begin() {
    if (!student) return;
    setPhase("loading");
    setError(null);
    try {
      const p = await startSimulado({
        data: { studentId: student.id, kind, trackSlug: track.slug, sectorSlug: sector.slug },
      });
      setPayload(p);
      setAnswers({});
      setRemaining(p.durationSec);
      startedAtRef.current = Date.now();
      setPhase("running");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Falha";
      if (msg.includes("ACCESS_REQUIRED")) setError("Precisa de acesso pago a este sector.");
      else if (msg.includes("SIMULADO_NEEDS_LESSONS")) setError("Abre e responde aos quizzes de algumas aulas primeiro — precisas de banco de perguntas para o simulado.");
      else setError(msg);
      setPhase("idle");
    }
  }

  async function handleSubmit() {
    if (!student || !payload) return;
    setPhase("loading");
    const duration = Math.round((Date.now() - startedAtRef.current) / 1000);
    const answerRows = payload.questions.map((q, i) => ({
      quiz_id: q.quiz_id,
      question_index: q.question_index,
      lesson_id: q.lesson_id,
      chosen: answers[i] ?? -1,
      correct: q.correct,
    }));
    try {
      const r = await submitSimulado({
        data: {
          studentId: student.id,
          kind,
          trackSlug: track.slug,
          sectorSlug: sector.slug,
          durationSec: duration,
          answers: answerRows,
        },
      });
      setResult(r);
      setPhase("done");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Falha ao guardar simulado");
      setPhase("running");
    }
  }

  const mmss = useMemo(() => {
    const m = Math.floor(remaining / 60).toString().padStart(2, "0");
    const s = (remaining % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }, [remaining]);

  const answered = Object.keys(answers).length;

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {phase === "running" && (
        <div className="sticky top-16 z-30 border-b border-gold/30 bg-background/90 backdrop-blur">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2 font-serif text-2xl text-gold">
              <Timer className="h-5 w-5" />
              <span className={remaining < 300 ? "text-burgundy" : ""}>{mmss}</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Respondidas <span className="text-gold">{answered}</span> / {payload?.questions.length}
            </div>
            <button
              onClick={handleSubmit}
              className="rounded-full bg-gold px-4 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90"
            >
              Terminar
            </button>
          </div>
        </div>
      )}

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Simulado cronometrado</p>
          <h1 className="mt-2 font-serif text-3xl sm:text-4xl">{sector.name}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            30 perguntas · 45 minutos · corrigido no fim com explicações.
          </p>
        </header>

        {error && (
          <div className="mb-6 rounded-xl border border-burgundy/40 bg-burgundy/10 p-4 text-sm text-burgundy">
            {error.includes("acesso pago") && <Lock className="mr-1 inline h-4 w-4" />}
            {error}
          </div>
        )}

        {phase === "idle" && (
          <div className="rounded-2xl border border-gold/30 bg-gold/5 p-8 text-center">
            <Timer className="mx-auto h-10 w-10 text-gold" />
            <h2 className="mt-3 font-serif text-2xl">Preparado para o simulado?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Assim que começares, o cronómetro dispara. Encontra um sítio calmo e responde como no dia da prova.
            </p>
            <button
              onClick={begin}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Começar simulado
            </button>
          </div>
        )}

        {phase === "loading" && (
          <div className="flex flex-col items-center gap-3 py-16 text-muted-foreground">
            <Loader2 className="h-8 w-8 animate-spin text-gold" />
            <p className="text-sm">A preparar o simulado…</p>
          </div>
        )}

        {phase === "running" && payload && (
          <ol className="space-y-4">
            {payload.questions.map((q, i) => (
              <li key={i} className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Pergunta {i + 1} · {q.lesson_title}
                </p>
                <p className="mt-2 font-serif text-lg">{q.q}</p>
                <div className="mt-3 space-y-2">
                  {q.options.map((opt, oi) => {
                    const chosen = answers[i] === oi;
                    return (
                      <button
                        key={oi}
                        onClick={() => setAnswers((prev) => ({ ...prev, [i]: oi }))}
                        className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-all ${
                          chosen
                            ? "border-gold bg-gold/10 text-foreground"
                            : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs ${
                            chosen ? "border-gold text-gold" : "border-border"
                          }`}
                        >
                          {String.fromCharCode(65 + oi)}
                        </span>
                        <span className="flex-1">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </li>
            ))}
            <button
              onClick={handleSubmit}
              className="mt-4 w-full rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Terminar e ver resultado
            </button>
          </ol>
        )}

        {phase === "done" && result && payload && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-gold/40 bg-gold/10 p-8 text-center">
              <Trophy className="mx-auto h-10 w-10 text-gold" />
              <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                Resultado do simulado
              </p>
              <p className="mt-2 font-serif text-6xl text-gold">
                {result.score}
                <span className="text-2xl text-muted-foreground"> / {result.total}</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {Math.round((result.score / result.total) * 100)}% ·{" "}
                {Math.floor(result.durationSec / 60)}m{result.durationSec % 60}s de {Math.floor(payload.durationSec / 60)}m
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                Média do sector: <span className="text-gold">{result.sectorAveragePct}%</span>
                {result.score / result.total > result.sectorAveragePct / 100
                  ? " — estás acima da média!"
                  : " — dá-lhe outra vez, tu consegues subir."}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <button
                  onClick={begin}
                  className="rounded-full border border-gold/40 px-5 py-2 text-xs text-gold hover:bg-gold/10"
                >
                  Novo simulado
                </button>
                <Link
                  to="/revisao"
                  className="rounded-full bg-gold px-5 py-2 text-xs font-medium text-primary-foreground hover:opacity-90"
                >
                  Rever os erros
                </Link>
              </div>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl">Correcção</h2>
              <ol className="space-y-3">
                {payload.questions.map((q, i) => {
                  const chosen = answers[i] ?? -1;
                  const ok = chosen === q.correct;
                  return (
                    <li key={i} className="rounded-xl border border-border bg-card p-5">
                      <p className="flex items-center gap-2 text-xs uppercase tracking-widest">
                        {ok ? (
                          <CheckCircle2 className="h-4 w-4 text-gold" />
                        ) : (
                          <XCircle className="h-4 w-4 text-burgundy" />
                        )}
                        <span className={ok ? "text-gold" : "text-burgundy"}>
                          {ok ? "Certa" : "Errada"} · {q.lesson_title}
                        </span>
                      </p>
                      <p className="mt-2 font-serif text-base">{q.q}</p>
                      <ul className="mt-2 space-y-1 text-sm">
                        {q.options.map((opt, oi) => (
                          <li
                            key={oi}
                            className={
                              oi === q.correct
                                ? "text-gold"
                                : oi === chosen
                                ? "text-burgundy"
                                : "text-muted-foreground"
                            }
                          >
                            {String.fromCharCode(65 + oi)}. {opt}
                            {oi === q.correct && " ✓"}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 rounded-lg border border-gold/20 bg-gold/5 p-3 text-xs text-muted-foreground">
                        <span className="text-gold">Explicação:</span> {q.explanation}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
