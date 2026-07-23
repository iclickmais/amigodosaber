import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { PlayCircle, ChevronDown, Lock, Timer, Calendar, Megaphone, CheckCircle2, Loader2 } from "lucide-react";
import type { Module } from "@/lib/study-tracks";
import { useStudent } from "@/hooks/use-student";
import { getAccessStatus } from "@/lib/access.functions";
import { PaymentModal } from "@/components/PaymentModal";
import { MotivationBanner } from "@/components/MotivationBanner";
import { priceFor, formatKz } from "@/lib/payment-info";
import { setStudyPlanTarget, getStudyPlans } from "@/lib/plan.functions";
import { listEdictsForSector, type EdictRow } from "@/lib/edicts.functions";

interface Props {
  kind: "concurso" | "preparatorio";
  trackSlug: string;
  sectorSlug: string;
  trackName: string;
  sectorName: string;
  modules: Module[];
}

export function SectorClassroom({
  kind,
  trackSlug,
  sectorSlug,
  trackName,
  sectorName,
  modules,
}: Props) {
  const [openMod, setOpenMod] = useState<string | null>(modules[0]?.slug ?? null);
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [showPay, setShowPay] = useState(false);
  const { student, hydrated } = useStudent();
  const navigate = useNavigate();

  // Study plan
  const [targetDate, setTargetDate] = useState<string>("");
  const [savedTarget, setSavedTarget] = useState<string | null>(null);
  const [savingTarget, setSavingTarget] = useState(false);
  const [targetJustSaved, setTargetJustSaved] = useState(false);

  // Sector edicts
  const [edicts, setEdicts] = useState<EdictRow[]>([]);

  useEffect(() => {
    if (!hydrated || !student) {
      setHasAccess(false);
      return;
    }
    let cancelled = false;
    getAccessStatus({ data: { studentId: student.id, kind, trackSlug, sectorSlug } })
      .then((s) => {
        if (!cancelled) setHasAccess(s.hasAccess);
      })
      .catch(() => {
        if (!cancelled) setHasAccess(false);
      });
    return () => {
      cancelled = true;
    };
  }, [hydrated, student, kind, trackSlug, sectorSlug]);

  // Carrega plano actual + editais quando estudante entra
  useEffect(() => {
    if (!hydrated || !student) return;
    let cancelled = false;
    getStudyPlans({ data: { studentId: student.id } })
      .then((plans) => {
        if (cancelled) return;
        const mine = plans.find(
          (p) => p.kind === kind && p.trackSlug === trackSlug && p.sectorSlug === sectorSlug,
        );
        if (mine) {
          setSavedTarget(mine.targetDate);
          setTargetDate(mine.targetDate);
        }
      })
      .catch(() => {});
    listEdictsForSector({ data: { kind, trackSlug, sectorSlug } })
      .then((rows) => {
        if (!cancelled) setEdicts(rows);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [hydrated, student, kind, trackSlug, sectorSlug]);

  async function saveTarget() {
    if (!student || !targetDate) return;
    setSavingTarget(true);
    try {
      await setStudyPlanTarget({
        data: { studentId: student.id, kind, trackSlug, sectorSlug, targetDate },
      });
      setSavedTarget(targetDate);
      setTargetJustSaved(true);
      setTimeout(() => setTargetJustSaved(false), 2500);
    } catch {
      // ignore — botão volta a ficar activo
    } finally {
      setSavingTarget(false);
    }
  }

  const amount = priceFor(kind);
  const todayIso = new Date().toISOString().slice(0, 10);

  function onLessonClick(e: React.MouseEvent, isLocked: boolean) {
    if (!student) {
      e.preventDefault();
      navigate({ to: "/entrar" });
      return;
    }
    if (isLocked) {
      e.preventDefault();
      setShowPay(true);
      return;
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6">
        <MotivationBanner kind={kind} trackSlug={trackSlug} />
        <p className="mt-3 text-xs text-muted-foreground">
          Cada aula tem <span className="text-gold">quiz de 10 perguntas</span> para avaliação. Acesso: <span className="text-gold">3 meses</span>.
        </p>
      </div>

      {hydrated && !student && (
        <div className="mb-8 rounded-2xl border border-gold/30 bg-gold/5 p-5 text-sm">
          <p className="text-foreground">
            <span className="font-serif text-lg text-gold">Entre na sala.</span>{" "}
            Registe-se com o seu número e apelido para guardar o seu progresso e desbloquear as aulas.
          </p>
          <Link
            to="/entrar"
            className="mt-3 inline-flex rounded-full bg-gold px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90"
          >
            Entrar / Registar
          </Link>
        </div>
      )}

      {hydrated && student && hasAccess === false && (
        <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-gold/40 bg-gold/5 p-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Lock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <div>
              <p className="font-serif text-lg text-foreground">Sala fechada — {formatKz(amount)}</p>
              <p className="text-xs text-muted-foreground">
                Confirme o pagamento para abrir todas as aulas e questionários deste sector.
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowPay(true)}
            className="shrink-0 rounded-full bg-gold px-5 py-2 text-xs font-medium text-primary-foreground hover:opacity-90"
          >
            Pagar acesso
          </button>
        </div>
      )}

      <div className="space-y-4">
        {modules.map((mod, midx) => {
          const isOpen = openMod === mod.slug;
          return (
            <div
              key={mod.slug}
              className={`overflow-hidden rounded-[24px] border transition-all duration-300 ${
                isOpen ? "border-gold/30 bg-card ring-1 ring-gold/10" : "border-border bg-card/40"
              }`}
            >
              <button
                onClick={() => setOpenMod(isOpen ? null : mod.slug)}
                className="flex w-full items-center gap-5 px-6 py-5 text-left transition-colors hover:bg-gold/[0.03]"
              >
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 font-serif text-xl transition-all ${
                  isOpen ? "border-gold bg-gold/10 text-gold" : "border-gold/20 text-gold/40"
                }`}>
                  {midx + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-serif text-xl text-foreground sm:text-2xl">{mod.title}</div>
                  <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <PlayCircle className="h-3 w-3" /> {mod.lessons.length} aulas
                    </span>
                  </div>
                </div>
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-muted/20 transition-transform ${isOpen ? "rotate-180 bg-gold/10 text-gold" : ""}`}>
                  <ChevronDown className="h-5 w-5" />
                </div>
              </button>
              
              {isOpen && (
                <div className="border-t border-border/60 bg-black/10 px-4 py-4 sm:px-6">
                  <ul className="space-y-3">
                    {mod.lessons.map((lesson, lidx) => {
                      const globalIndex = modules.slice(0, midx).reduce((acc, curr) => acc + curr.lessons.length, 0) + lidx;
                      const isFree = globalIndex < 3;
                      const locked = !hasAccess && !isFree;

                      return (
                        <li key={lesson.slug}>
                          <Link
                            to="/aula/$kind/$track/$sector/$module/$lesson"
                            params={{
                              kind,
                              track: trackSlug,
                              sector: sectorSlug,
                              module: mod.slug,
                              lesson: lesson.slug,
                            }}
                            onClick={(e) => onLessonClick(e, locked)}
                            className={`group relative flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all duration-300 ${
                              locked
                                ? "border-border/40 bg-card/40 opacity-70"
                                : "border-border bg-card hover:border-gold/50 hover:bg-gold/[0.02] hover:shadow-lg hover:shadow-gold/5"
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 transition-transform group-hover:scale-110 ${
                                locked 
                                  ? "border-border/40 bg-muted/20 text-muted-foreground" 
                                  : isFree 
                                    ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-500"
                                    : "border-gold/30 bg-gold/5 text-gold"
                              }`}>
                                {locked ? <Lock className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <p className={`text-sm font-semibold tracking-tight ${locked ? "text-muted-foreground" : "text-foreground"}`}>
                                    {lesson.title}
                                  </p>
                                  {isFree && !hasAccess && (
                                    <span className="rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-500 border border-emerald-500/20">
                                      Grátis
                                    </span>
                                  )}
                                </div>
                                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground/70">
                                  Aula {globalIndex + 1}
                                </p>
                              </div>
                            </div>
                            <div className={`flex h-9 w-9 items-center justify-center rounded-full transition-all ${
                              locked 
                                ? "bg-muted/10 text-muted-foreground/40" 
                                : "bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary-foreground"
                            }`}>
                              {locked ? <Lock className="h-4 w-4" /> : <ChevronRight className="h-5 w-5" />}
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Extras — plano, simulado e editais (só faz sentido com sessão) */}
      {hydrated && student && (
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {/* Plano de estudo */}
          <div className="rounded-2xl border border-gold/30 bg-gold/5 p-5">
            <div className="flex items-center gap-2 text-gold">
              <Calendar className="h-5 w-5" />
              <h3 className="font-serif text-lg">Plano de estudo</h3>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Escolhe a data da prova e distribuímos as aulas dia a dia no teu painel.
            </p>
            <label className="mt-3 block text-xs uppercase tracking-widest text-muted-foreground">
              Data da prova
            </label>
            <input
              type="date"
              min={todayIso}
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              disabled={!hasAccess}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground disabled:opacity-50"
            />
            <button
              onClick={saveTarget}
              disabled={
                !hasAccess ||
                !targetDate ||
                savingTarget ||
                targetDate === savedTarget
              }
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 disabled:opacity-40"
            >
              {savingTarget ? (
                <>
                  <Loader2 className="h-3 w-3 animate-spin" /> A guardar…
                </>
              ) : targetJustSaved ? (
                <>
                  <CheckCircle2 className="h-3 w-3" /> Plano guardado
                </>
              ) : savedTarget ? (
                "Actualizar plano"
              ) : (
                "Criar meu plano"
              )}
            </button>
            {!hasAccess && (
              <p className="mt-2 text-[11px] text-muted-foreground">
                Disponível após confirmação do pagamento.
              </p>
            )}
            {savedTarget && (
              <p className="mt-2 text-[11px] text-gold">
                Plano activo. Vê o dia a dia em{" "}
                <Link to="/painel" className="underline">o meu painel</Link>.
              </p>
            )}
          </div>

          {/* Simulado */}
          <div className="rounded-2xl border border-gold/30 bg-card p-5">
            <div className="flex items-center gap-2 text-gold">
              <Timer className="h-5 w-5" />
              <h3 className="font-serif text-lg">Simulado cronometrado</h3>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              30 perguntas em 45 minutos com correcção e explicação. Os erros vão automaticamente para a revisão.
            </p>
            {hasAccess ? (
              <Link
                to="/simulado/$kind/$track/$sector"
                params={{ kind, track: trackSlug, sector: sectorSlug }}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90"
              >
                <Timer className="h-3.5 w-3.5" /> Fazer simulado
              </Link>
            ) : (
              <button
                onClick={() => setShowPay(true)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-xs text-gold hover:bg-gold/10"
              >
                <Lock className="h-3.5 w-3.5" /> Desbloquear
              </button>
            )}
          </div>

          {/* Editais */}
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-gold">
              <Megaphone className="h-5 w-5" />
              <h3 className="font-serif text-lg">Editais deste sector</h3>
            </div>
            {edicts.length === 0 ? (
              <p className="mt-2 text-xs text-muted-foreground">
                Nenhum edital aberto neste momento. Publicamos aqui assim que sair.
              </p>
            ) : (
              <ul className="mt-3 space-y-2">
                {edicts.slice(0, 3).map((ed) => (
                  <li key={ed.id} className="rounded-lg border border-border/60 bg-background/50 p-2">
                    <p className="text-sm text-foreground line-clamp-2">{ed.title}</p>
                    {ed.deadline && (
                      <p className="mt-0.5 text-[11px] text-muted-foreground">
                        Prazo: {new Date(ed.deadline).toLocaleDateString("pt-PT")}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            )}
            <Link
              to="/editais"
              className="mt-3 inline-block text-xs text-gold hover:underline"
            >
              Ver todos os editais →
            </Link>
          </div>
        </div>
      )}



      {student && (
        <PaymentModal
          open={showPay}
          onClose={() => setShowPay(false)}
          student={student}
          kind={kind}
          trackSlug={trackSlug}
          sectorSlug={sectorSlug}
          trackName={trackName}
          sectorName={sectorName}
        />
      )}
    </section>
  );
}
