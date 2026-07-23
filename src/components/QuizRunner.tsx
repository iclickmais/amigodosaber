import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import type { QuizPayload } from "@/lib/study.functions";
import { submitAttempt } from "@/lib/study.functions";
import { useStudent } from "@/hooks/use-student";
import { Link } from "@tanstack/react-router";

interface Props {
  quiz: QuizPayload;
}

export function QuizRunner({ quiz }: Props) {
  const { student } = useStudent();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<{ score: number; total: number } | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit() {
    setError(null);
    const arr = quiz.questions.map((_, i) => answers[i] ?? -1);
    const score = quiz.questions.reduce((s, q, i) => (arr[i] === q.correct ? s + 1 : s), 0);
    setSubmitted({ score, total: quiz.questions.length });

    if (student) {
      setSaving(true);
      try {
        await submitAttempt({
          data: {
            studentId: student.id,
            quizId: quiz.id,
            answers: arr.map((a) => (a >= 0 ? a : 0)),
          },
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Falha ao guardar tentativa");
      } finally {
        setSaving(false);
      }
    }
  }

  function reset() {
    setAnswers({});
    setSubmitted(null);
    setError(null);
  }

  const allAnswered = Object.keys(answers).length === quiz.questions.length;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="font-serif text-2xl text-foreground">Quiz — {quiz.questions.length} perguntas</h2>

      {submitted && (
        <div className={`mt-6 rounded-xl border p-5 text-center ${
          submitted.score / submitted.total >= 0.6
            ? "border-gold/40 bg-gold/10"
            : "border-burgundy/40 bg-burgundy/10"
        }`}>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Resultado</p>
          <p className="mt-2 font-serif text-5xl text-gold">
            {submitted.score} <span className="text-2xl text-muted-foreground">/ {submitted.total}</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {submitted.score / submitted.total >= 0.6
              ? "Aula concluída — bom trabalho!"
              : "Rever a matéria e tentar de novo."}
          </p>
          {!student && (
            <p className="mt-3 text-xs text-muted-foreground">
              <Link to="/entrar" className="text-gold underline">Entre</Link> para guardar o seu progresso.
            </p>
          )}
          {saving && <p className="mt-2 text-xs text-muted-foreground">A guardar…</p>}
          <button onClick={reset} className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-xs text-gold hover:bg-gold/10">
            <RotateCcw className="h-3 w-3" /> Refazer
          </button>
        </div>
      )}

      {error && <p className="mt-4 rounded-lg border border-burgundy/40 bg-burgundy/10 p-3 text-xs text-burgundy">{error}</p>}

      <ol className="mt-6 space-y-6">
        {quiz.questions.map((q, i) => {
          const chosen = answers[i];
          return (
            <li key={i} className="rounded-xl border border-border/60 bg-background p-5">
              <p className="font-serif text-lg text-foreground">
                <span className="mr-2 text-gold">{i + 1}.</span>
                {q.q}
              </p>
              <div className="mt-4 space-y-2">
                {q.options.map((opt, oi) => {
                  const isChosen = chosen === oi;
                  const isCorrect = submitted && oi === q.correct;
                  const isWrong = submitted && isChosen && oi !== q.correct;
                  return (
                    <button
                      key={oi}
                      disabled={!!submitted}
                      onClick={() => setAnswers((prev) => ({ ...prev, [i]: oi }))}
                      className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-all ${
                        isCorrect
                          ? "border-gold bg-gold/15 text-foreground"
                          : isWrong
                          ? "border-burgundy bg-burgundy/15 text-foreground"
                          : isChosen
                          ? "border-gold/60 bg-gold/5 text-foreground"
                          : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
                      }`}
                    >
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs ${
                        isChosen || isCorrect ? "border-gold text-gold" : "border-border"
                      }`}>
                        {String.fromCharCode(65 + oi)}
                      </span>
                      <span className="flex-1">{opt}</span>
                      {isCorrect && <CheckCircle2 className="h-4 w-4 text-gold" />}
                      {isWrong && <XCircle className="h-4 w-4 text-burgundy" />}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <p className="mt-3 rounded-lg border border-gold/20 bg-gold/5 p-3 text-xs text-muted-foreground">
                  <span className="font-medium text-gold">Explicação:</span> {q.explanation}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      {!submitted && (
        <button
          onClick={onSubmit}
          disabled={!allAnswered}
          className="mt-8 w-full rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground disabled:opacity-40"
        >
          {allAnswered ? "Submeter respostas" : `Responder às restantes (${quiz.questions.length - Object.keys(answers).length})`}
        </button>
      )}
    </div>
  );
}
