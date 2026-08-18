import { useState, Fragment } from "react";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import type { QuizPayload } from "@/lib/study.functions";
import { submitAttempt } from "@/lib/study.functions";
import { useStudent } from "@/hooks/use-student";
import { Link } from "@tanstack/react-router";
import { addQuizXp, getMotivationalMessage } from "@/lib/gamification";
import { GamificationToast } from "@/components/GamificationToast";

interface Props {
  quiz: QuizPayload;
}

export function QuizRunner({ quiz }: Props) {
  const { student } = useStudent();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<{ score: number; total: number } | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<{ reward: string; message: string; type: "xp" | "level-up" | "streak" | "badge" } | null>(null);

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
        // Gamificação: adicionar XP
        const passed = score / quiz.questions.length >= 0.6;
        const result = addQuizXp(score, quiz.questions.length);
        const msg = passed
          ? getMotivationalMessage("quiz-pass")
          : getMotivationalMessage("quiz-fail");
        setToast({
          reward: result.reward,
          message: msg,
          type: result.newStats.level > Math.floor((result.newStats.xp - (passed ? 50 : 15)) / 100) ? "level-up" : "xp",
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
    <Fragment>
    <div className="rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-8">
      <h2 className="font-serif text-xl sm:text-2xl text-foreground">Questionário — {quiz.questions.length} perguntas</h2>

      {submitted && (
        <div className={`mt-6 sm:mt-8 animate-in fade-in slide-in-from-top-4 duration-500 rounded-2xl border p-5 sm:p-8 text-center shadow-2xl ${
          submitted.score / submitted.total >= 0.6
            ? "border-emerald-500/40 bg-emerald-500/10 shadow-emerald-500/5"
            : "border-burgundy/40 bg-burgundy/10 shadow-burgundy/5"
        }`}>
          <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-background border-4 border-current mb-4">
            {submitted.score / submitted.total >= 0.6 ? (
              <CheckCircle2 className="h-10 w-10 text-emerald-500" />
            ) : (
              <XCircle className="h-10 w-10 text-burgundy" />
            )}
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">O teu desempenho</p>
          <p className="mt-2 font-serif text-4xl sm:text-6xl text-foreground">
            {submitted.score}<span className="text-2xl text-muted-foreground mx-1">/</span>{submitted.total}
          </p>
          <div className="mt-4 space-y-2">
            <p className={`text-lg font-serif ${submitted.score / submitted.total >= 0.6 ? "text-emerald-500" : "text-burgundy"}`}>
              {submitted.score / submitted.total >= 0.6
                ? "Incrível! Dominaste esta aula."
                : "Quase lá! Precisas de 60% para concluir."}
            </p>
            <p className="text-sm text-muted-foreground mx-auto">
              {submitted.score / submitted.total >= 0.6
                ? "O teu progresso foi registado e estás mais perto do teu objectivo."
                : "Recomendamos que releias a matéria e respondas novamente ao questionário."}
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button 
              onClick={reset} 
              className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-6 py-2.5 text-sm font-medium transition-all hover:bg-white/10 active:scale-95"
            >
              <RotateCcw className="h-4 w-4" /> Tentar de novo
            </button>
            {!student && (
              <Link 
                to="/entrar" 
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gold/20"
              >
                Guardar progresso
              </Link>
            )}
          </div>
          {saving && <p className="mt-4 text-[10px] uppercase tracking-widest text-gold animate-pulse">A sincronizar com a nuvem…</p>}
        </div>
      )}

      {error && <p className="mt-4 rounded-lg border border-burgundy/40 bg-burgundy/10 p-3 text-xs text-burgundy">{error}</p>}

      <ol className="mt-6 space-y-6">
        {quiz.questions.map((q, i) => {
          const chosen = answers[i];
          return (
            <li key={i} className="rounded-xl border border-border/60 bg-background p-4 sm:p-5">
              <p className="font-serif text-base sm:text-lg text-foreground">
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
    {toast && (
      <GamificationToast
        reward={toast.reward}
        message={toast.message}
        type={toast.type}
        onDismiss={() => setToast(null)}
      />
    )}
    </Fragment>
  );
}
