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

  function onLessonClick(e: React.MouseEvent, moduleSlug: string, lessonSlug: string) {
    if (!student) {
      e.preventDefault();
      navigate({ to: "/entrar" });
      return;
    }
    if (!hasAccess) {
      e.preventDefault();
      setShowPay(true);
      return;
    }
    // has access → deixa o Link navegar
    void moduleSlug; void lessonSlug;
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

      <div className="space-y-3">
        {modules.map((mod, i) => {
          const isOpen = openMod === mod.slug;
          return (
            <div
              key={mod.slug}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                onClick={() => setOpenMod(isOpen ? null : mod.slug)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-gold/5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 font-serif text-gold">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-serif text-lg text-foreground">{mod.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {mod.lessons.length} aulas
                  </div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <ul className="border-t border-border/60 divide-y divide-border/40">
                  {mod.lessons.map((lesson) => {
                    const locked = !hasAccess;
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
                          onClick={(e) => onLessonClick(e, mod.slug, lesson.slug)}
                          className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
                            locked
                              ? "text-muted-foreground/70 hover:bg-gold/5"
                              : "text-muted-foreground hover:bg-gold/5 hover:text-gold"
                          }`}
                        >
                          {locked ? (
                            <Lock className="h-4 w-4 shrink-0 text-muted-foreground" />
                          ) : (
                            <PlayCircle className="h-4 w-4 shrink-0 text-gold" />
                          )}
                          <span className="flex-1">{lesson.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>

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
