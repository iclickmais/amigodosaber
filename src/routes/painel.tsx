import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useStudent } from "@/hooks/use-student";
import { getStudentPanel } from "@/lib/panel.functions";
import { getRevisionQueue } from "@/lib/revision.functions";
import { getStudyPlans, type TodayPlan } from "@/lib/plan.functions";
import { listEdicts, type EdictRow } from "@/lib/edicts.functions";
import { countOfflineLessons } from "@/lib/offline-cache";
import {
  GraduationCap, Trophy, BookOpen, Bell, CheckCircle2, XCircle, Clock, LogOut,
  Sparkles, Calendar, WifiOff, Timer, Megaphone, Flame, Zap,
} from "lucide-react";
import { getGameStats } from "@/lib/gamification";

export const Route = createFileRoute("/painel")({
  head: () => ({
    meta: [
      { title: "O meu painel — Amigo do Saber" },
      { name: "description", content: "Progresso, plano de estudo diário, revisão dos erros e editais abertos." },
      { property: "og:title", content: "Painel do aluno — Amigo do Saber" },
      { property: "og:description", content: "O teu coach diário: plano, revisão e progresso." },
    ],
  }),
  component: PanelPage,
});

const SEEN_KEY = "angopdf.seen-approvals";

function readSeen(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(SEEN_KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function writeSeen(ids: string[]) {
  window.localStorage.setItem(SEEN_KEY, JSON.stringify(ids));
}

type PanelData = Awaited<ReturnType<typeof getStudentPanel>>;

function PanelPage() {
  const { student, hydrated, clear } = useStudent();
  const navigate = useNavigate();
  const [data, setData] = useState<PanelData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [seen, setSeen] = useState<Set<string>>(new Set());
  const [dueCount, setDueCount] = useState(0);
  const [plans, setPlans] = useState<TodayPlan[]>([]);
  const [edicts, setEdicts] = useState<EdictRow[]>([]);
  const [offlineCount, setOfflineCount] = useState(0);

  useEffect(() => {
    if (!hydrated) return;
    if (!student) {
      navigate({ to: "/entrar" });
      return;
    }
    setSeen(readSeen());
    getStudentPanel({ data: { studentId: student.id } })
      .then(setData)
      .catch((e) => setError(e instanceof Error ? e.message : "Falha ao carregar"));
    getRevisionQueue({ data: { studentId: student.id } })
      .then((r) => setDueCount(r.totalDue))
      .catch(() => {});
    getStudyPlans({ data: { studentId: student.id } })
      .then(setPlans)
      .catch(() => {});
    listEdicts()
      .then((rows) => setEdicts(rows.slice(0, 4)))
      .catch(() => {});
    countOfflineLessons().then(setOfflineCount);
  }, [hydrated, student, navigate]);

  const newApprovals = useMemo(() => {
    if (!data) return [];
    return data.requests.filter((r) => r.status === "approved" && !seen.has(r.id));
  }, [data, seen]);

  function markAllSeen() {
    if (!data) return;
    const ids = data.requests.filter((r) => r.status !== "pending").map((r) => r.id);
    writeSeen(ids);
    setSeen(new Set(ids));
  }

  if (!hydrated || !student) {
    return (
      <div className="min-h-screen">
        <SiteHeader />
        <div className="mx-auto max-w-md px-4 py-24 text-center text-sm text-muted-foreground">A carregar…</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
              <GraduationCap className="h-6 w-6" />
            </span>
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl">Olá, {student.surname}</h1>
              <p className="text-xs text-muted-foreground">{student.phone}</p>
            </div>
          </div>
          <button
            onClick={() => { clear(); navigate({ to: "/" }); }}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground hover:border-burgundy hover:text-burgundy"
          >
            <LogOut className="h-3.5 w-3.5" /> Terminar sessão
          </button>
        </header>

        {error && (
          <p className="mb-6 rounded-lg border border-burgundy/40 bg-burgundy/10 p-3 text-sm text-burgundy">{error}</p>
        )}

        {newApprovals.length > 0 && (
          <div className="mb-6 rounded-2xl border border-gold/50 bg-gold/10 p-5">
            <div className="mb-3 flex items-center gap-2 text-gold">
              <Bell className="h-5 w-5" />
              <h2 className="font-serif text-lg">Novidade — pagamento aprovado!</h2>
            </div>
            <ul className="space-y-2 text-sm">
              {newApprovals.map((r) => (
                <li key={r.id} className="rounded-lg border border-gold/30 bg-background/50 p-3">
                  <p className="font-medium text-foreground">{r.track_name} — {r.sector_name}</p>
                  <p className="text-xs text-muted-foreground">
                    {r.kind === "concurso" ? "Concurso" : "Preparatório"} · 3 meses de acesso liberado
                  </p>
                </li>
              ))}
            </ul>
            <button
              onClick={markAllSeen}
              className="mt-3 rounded-full bg-gold px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90"
            >
              Marcar como visto
            </button>
          </div>
        )}

        {/* Widgets de destaque */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {/* Level & XP */}
          {(() => {
            const stats = getGameStats();
            const xpProgress = stats.xp % 100;
            return (
              <div className="rounded-2xl border border-gold/30 bg-gold/5 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-gold">
                  <Zap className="h-5 w-5" />
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Nível {stats.level}</span>
                </div>
                <p className="mt-1 font-serif text-2xl">{stats.xp} XP</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border/60">
                  <div className="h-full bg-gold transition-all duration-500" style={{ width: `${xpProgress}%` }} />
                </div>
                <p className="mt-1 text-[10px] text-muted-foreground">Próximo nível: {100 - xpProgress} XP</p>
              </div>
            );
          })()}

          {/* Streak */}
          {(() => {
            const stats = getGameStats();
            return (
              <div className="rounded-2xl border border-orange-400/30 bg-orange-400/5 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-orange-400">
                  <Flame className="h-5 w-5" />
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Streak</span>
                </div>
                <p className="mt-1 font-serif text-2xl">{stats.streak}</p>
                <p className="mt-1 text-[10px] text-muted-foreground">
                  {stats.streak === 0 ? "Começa hoje!" : stats.streak >= 7 ? "Incrível!" : "Dias seguidos"}
                </p>
              </div>
            );
          })()}

          <Link
            to="/revisao"
            className="rounded-2xl border border-gold/30 bg-gold/5 p-4 sm:p-5 transition-colors hover:border-gold"
          >
            <div className="flex items-center gap-2 text-gold">
              <Sparkles className="h-5 w-5" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Revisões hoje</span>
            </div>
            <p className="mt-2 font-serif text-3xl">{dueCount}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {dueCount === 0 ? "Fila em dia — bom trabalho." : "Repetição espaçada"}
            </p>
          </Link>

          <div className="rounded-2xl border border-border bg-card p-4 sm:p-5">
            <div className="flex items-center gap-2 text-gold">
              <WifiOff className="h-5 w-5" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Aulas offline</span>
            </div>
            <p className="mt-2 font-serif text-3xl">{offlineCount}</p>
            <p className="mt-1 text-xs text-muted-foreground">Guardadas neste dispositivo</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 sm:p-5">
            <div className="flex items-center gap-2 text-gold">
              <BookOpen className="h-5 w-5" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Aulas concluídas</span>
            </div>
            <p className="mt-2 font-serif text-3xl">{data?.completedLessons.length ?? 0}</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 sm:p-5">
            <div className="flex items-center gap-2 text-gold">
              <Trophy className="h-5 w-5" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Quizzes</span>
            </div>
            <p className="mt-2 font-serif text-3xl">{data?.attempts.length ?? 0}</p>
          </div>
        </div>

        {/* Plano diário */}
        {plans.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-3 flex items-center gap-2 font-serif text-xl">
              <Calendar className="h-5 w-5 text-gold" /> O meu plano
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {plans.map((p) => (
                <div key={`${p.kind}-${p.trackSlug}-${p.sectorSlug}`} className="rounded-2xl border border-gold/30 bg-card p-5">
                  <p className="text-xs uppercase tracking-widest text-gold">
                    {p.kind === "concurso" ? "Concurso" : "Preparatório"} · {p.trackName}
                  </p>
                  <h3 className="mt-1 font-serif text-lg">{p.sectorName}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Faltam <span className="text-gold">{p.daysLeft}</span> dias · {p.progressPct}% concluído
                  </p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border/60">
                    <div className="h-full bg-gold" style={{ width: `${p.progressPct}%` }} />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Hoje</p>
                  {p.todayItems.length === 0 ? (
                    <p className="mt-1 text-sm text-gold">Sector concluído — parabéns!</p>
                  ) : (
                    <ul className="mt-1 space-y-1">
                      {p.todayItems.map((it) => (
                        <li key={`${it.moduleSlug}-${it.lessonSlug}`}>
                          <Link
                            to="/aula/$kind/$track/$sector/$module/$lesson"
                            params={{
                              kind: p.kind, track: p.trackSlug, sector: p.sectorSlug,
                              module: it.moduleSlug, lesson: it.lessonSlug,
                            }}
                            className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground hover:bg-gold/5 hover:text-gold"
                          >
                            <BookOpen className="h-3.5 w-3.5" /> {it.lessonTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                    to="/simulado/$kind/$track/$sector"
                    params={{ kind: p.kind, track: p.trackSlug, sector: p.sectorSlug }}
                    className="mt-3 inline-flex items-center gap-1 text-xs text-gold hover:underline"
                  >
                    <Timer className="h-3 w-3" /> Fazer simulado
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Editais */}
        {edicts.length > 0 && (
          <section className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-serif text-xl">
                <Megaphone className="h-5 w-5 text-gold" /> Editais abertos
              </h2>
              <Link to="/editais" className="text-xs text-gold hover:underline">Ver todos</Link>
            </div>
            <ul className="space-y-2">
              {edicts.map((e) => (
                <li key={e.id} className="rounded-xl border border-border bg-card p-3">
                  <p className="text-xs uppercase tracking-widest text-gold">
                    {e.kind === "concurso" ? "Concurso" : "Preparatório"} · {e.track_slug}
                  </p>
                  <p className="mt-0.5 font-serif text-base">{e.title}</p>
                  {e.deadline && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      Prazo: {new Date(e.deadline).toLocaleDateString("pt-PT")}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {data && (
          <>
            <Section title="Meus acessos" icon={<CheckCircle2 className="h-5 w-5 text-gold" />}>
              {data.grants.length === 0 ? (
                <EmptyRow>Ainda sem acessos aprovados. Envie um pagamento e aguarde a aprovação.</EmptyRow>
              ) : (
                <ul className="space-y-2">
                  {data.grants.map((g) => {
                    const expired = g.expires_at && new Date(g.expires_at) < new Date();
                    return (
                      <li key={g.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-background p-3 text-sm">
                        <div>
                          <p className="font-medium">
                            {g.kind === "concurso" ? "Concurso" : "Preparatório"} · {g.track_slug} / {g.sector_slug}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {expired ? "Expirado" : g.expires_at ? `Expira em ${new Date(g.expires_at).toLocaleDateString("pt-PT")}` : "Sem prazo"}
                          </p>
                        </div>
                        <span className={`rounded-full border px-3 py-1 text-xs ${expired ? "border-burgundy/40 text-burgundy" : "border-gold/40 text-gold"}`}>
                          {expired ? "Expirado" : "Activo"}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </Section>

            <Section title="Melhores notas por aula" icon={<Trophy className="h-5 w-5 text-gold" />}>
              {data.bestByLesson.length === 0 ? (
                <EmptyRow>Nenhum quiz submetido. As suas notas aparecem aqui automaticamente.</EmptyRow>
              ) : (
                <ul className="space-y-2">
                  {data.bestByLesson.map((a) => {
                    const pct = Math.round((a.score / a.total) * 100);
                    return (
                      <li key={a.id} className="rounded-lg border border-border bg-background p-3">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm font-medium">{a.lesson?.title ?? "Aula"}</p>
                          <span className={`text-sm font-serif ${pct >= 60 ? "text-gold" : "text-burgundy"}`}>
                            {a.score}/{a.total} · {pct}%
                          </span>
                        </div>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border/60">
                          <div className={`h-full ${pct >= 60 ? "bg-gold" : "bg-burgundy"}`} style={{ width: `${pct}%` }} />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </Section>

            <Section title="Histórico recente" icon={<Clock className="h-5 w-5 text-gold" />}>
              {data.attempts.length === 0 ? (
                <EmptyRow>Sem tentativas ainda.</EmptyRow>
              ) : (
                <ul className="space-y-1.5 text-sm">
                  {data.attempts.slice(0, 10).map((a) => {
                    const pct = Math.round((a.score / a.total) * 100);
                    const ok = pct >= 60;
                    return (
                      <li key={a.id} className="flex items-center justify-between gap-2 rounded-lg border border-border/60 bg-background/60 px-3 py-2">
                        <span className="flex items-center gap-2 truncate">
                          {ok ? <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" /> : <XCircle className="h-4 w-4 shrink-0 text-burgundy" />}
                          <span className="truncate">{a.lesson?.title ?? "Quiz"}</span>
                        </span>
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {a.score}/{a.total} · {new Date(a.taken_at).toLocaleDateString("pt-PT")}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </Section>
          </>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 flex items-center gap-2 font-serif text-xl">{icon}{title}</h2>
      {children}
    </section>
  );
}

function EmptyRow({ children }: { children: React.ReactNode }) {
  return <p className="rounded-lg border border-dashed border-border p-4 text-sm text-muted-foreground">{children}</p>;
}
