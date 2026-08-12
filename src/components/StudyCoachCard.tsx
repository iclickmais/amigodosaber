import { useEffect, useState } from "react";
import { Brain, CalendarDays, Clock3, Sparkles } from "lucide-react";
import { generatePersonalizedPlan, getStudyPreferences, type TodayPlan } from "@/lib/plan.functions";

interface Props {
  studentId: string;
  plans: TodayPlan[];
}

export function StudyCoachCard({ studentId, plans }: Props) {
  const [dailyMinutes, setDailyMinutes] = useState(30);
  const [targetDate, setTargetDate] = useState("");
  const [goal, setGoal] = useState<"progress" | "exam" | "revision">("progress");
  const [preferredTime, setPreferredTime] = useState<"morning" | "afternoon" | "evening" | "flexible">("flexible");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [advice, setAdvice] = useState<string[]>([]);
  const [source, setSource] = useState<"ia" | "local">("local");
  const [remainingLessons, setRemainingLessons] = useState<number | null>(null);
  const [lessonsPerDay, setLessonsPerDay] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const first = plans[0];
    if (first && !selectedPlan) setSelectedPlan(`${first.kind}|${first.trackSlug}|${first.sectorSlug}`);
    getStudyPreferences({ data: { studentId } }).then((saved) => {
      if (!saved) return;
      setDailyMinutes(saved.dailyMinutes);
      setTargetDate(saved.targetDate ?? "");
      setGoal(saved.goal);
      setPreferredTime(saved.preferredTime);
      setAdvice(saved.aiPlan);
    }).catch(() => {});
  }, [plans, selectedPlan, studentId]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const selected = plans.find((plan) => `${plan.kind}|${plan.trackSlug}|${plan.sectorSlug}` === selectedPlan);
    if (!selected) {
      setMessage("Cria primeiro um plano de estudo no painel para o coach o personalizar.");
      return;
    }
    setLoading(true);
    setMessage(null);
    try {
      const result = await generatePersonalizedPlan({
        data: {
          studentId,
          dailyMinutes,
          targetDate: targetDate || null,
          goal,
          preferredTime,
          kind: selected.kind as "concurso" | "preparatorio",
          trackSlug: selected.trackSlug,
          sectorSlug: selected.sectorSlug,
        },
      });
      setAdvice(result.advice);
      setSource(result.source);
      setRemainingLessons(result.remainingLessons);
      setLessonsPerDay(result.lessonsPerDay);
      setMessage(result.source === "ia" ? "Plano personalizado pela IA e guardado." : "Plano guardado com recomendações instantâneas.");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Não foi possível gerar o plano.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mt-8 rounded-3xl border border-violet-500/25 bg-gradient-to-br from-violet-500/10 via-card to-gold/5 p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-600 dark:text-violet-300">
          <Brain className="h-5 w-5" />
        </span>
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300"><Sparkles className="h-3.5 w-3.5" /> Coach de estudo</p>
          <h2 className="mt-1 font-serif text-2xl">Um plano que cabe no teu dia</h2>
          <p className="mt-1 text-sm text-muted-foreground">Define o teu ritmo. A plataforma organiza a próxima sessão e guarda as recomendações no teu perfil.</p>
        </div>
      </div>

      {plans.length === 0 ? (
        <p className="mt-5 rounded-xl border border-border bg-background/40 p-4 text-sm text-muted-foreground">Ainda não tens um sector com plano ativo. Abre um concurso ou preparatório e define a data-alvo para começar.</p>
      ) : (
        <form onSubmit={submit} className="mt-5 space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Sector a personalizar</span>
            <select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-violet-500">
              {plans.map((plan) => <option key={`${plan.kind}|${plan.trackSlug}|${plan.sectorSlug}`} value={`${plan.kind}|${plan.trackSlug}|${plan.sectorSlug}`}>{plan.sectorName} · {plan.trackName}</option>)}
            </select>
          </label>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <label className="block"><span className="mb-1.5 block text-xs text-muted-foreground"><Clock3 className="mr-1 inline h-3.5 w-3.5" />Minutos por dia</span><input type="number" min={10} max={240} step={5} value={dailyMinutes} onChange={(e) => setDailyMinutes(Number(e.target.value))} className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-violet-500" /></label>
            <label className="block"><span className="mb-1.5 block text-xs text-muted-foreground"><CalendarDays className="mr-1 inline h-3.5 w-3.5" />Data-alvo</span><input type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-violet-500" /></label>
            <label className="block"><span className="mb-1.5 block text-xs text-muted-foreground">Objetivo</span><select value={goal} onChange={(e) => setGoal(e.target.value as typeof goal)} className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-violet-500"><option value="progress">Progresso constante</option><option value="exam">Preparar a prova</option><option value="revision">Revisão espaçada</option></select></label>
            <label className="block"><span className="mb-1.5 block text-xs text-muted-foreground">Melhor horário</span><select value={preferredTime} onChange={(e) => setPreferredTime(e.target.value as typeof preferredTime)} className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-violet-500"><option value="flexible">Flexível</option><option value="morning">Manhã</option><option value="afternoon">Tarde</option><option value="evening">Noite</option></select></label>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-500 disabled:opacity-50"> <Sparkles className="h-4 w-4" /> {loading ? "A preparar…" : "Personalizar o meu plano"}</button>
            {message && <span className="text-xs text-muted-foreground">{message}</span>}
          </div>
        </form>
      )}

      {advice.length > 0 && (
        <div className="mt-5 rounded-2xl border border-violet-500/20 bg-background/40 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2"><p className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-300">Próximos passos</p><span className="text-[10px] text-muted-foreground">{source === "ia" ? "Personalizado com IA" : "Recomendação instantânea"}{remainingLessons !== null && ` · ${remainingLessons} aulas por concluir`}{lessonsPerDay !== null && ` · ${lessonsPerDay}/dia`}</span></div>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">{advice.map((item, index) => <li key={`${item}-${index}`} className="flex gap-2 text-sm text-muted-foreground"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-xs font-semibold text-violet-600 dark:text-violet-300">{index + 1}</span>{item}</li>)}</ul>
        </div>
      )}
    </section>
  );
}
