import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, Loader2, Sparkles, Lock, WifiOff } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getLesson, type TrackKind } from "@/lib/study-tracks";
import { getOrGenerateLesson, getOrGenerateQuiz, type QuizPayload } from "@/lib/study.functions";
import { LessonMarkdown } from "@/components/LessonMarkdown";
import { QuizRunner } from "@/components/QuizRunner";
import { useStudent } from "@/hooks/use-student";
import { PaymentModal } from "@/components/PaymentModal";
import { MotivationBanner } from "@/components/MotivationBanner";
import { OfflineLessonToggle } from "@/components/OfflineLessonToggle";
import {
  offlineKey,
  readLessonOffline,
  saveLessonOffline,
  updateQuizOffline,
} from "@/lib/offline-cache";


export const Route = createFileRoute(
  "/aula/$kind/$track/$sector/$module/$lesson",
)({
  loader: ({ params }) => {
    const kind = params.kind as TrackKind;
    if (kind !== "concurso" && kind !== "preparatorio") throw notFound();
    const found = getLesson(kind, params.track, params.sector, params.module, params.lesson);
    if (!found) throw notFound();
    return { ...found, kind };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.lesson.title} — Sala de aula | Amigo do Saber` },
          { name: "description", content: `Aula sobre ${loaderData.lesson.title} — ${loaderData.sector.name}.` },
          { property: "og:title", content: `${loaderData.lesson.title} — Amigo do Saber` },
          { property: "og:description", content: `Aula completa sobre ${loaderData.lesson.title}.` },
        ]
      : [{ title: "Aula — Amigo do Saber" }],
  }),
  component: AulaPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">Aula não encontrada.</p>
    </div>
  ),
});

function AulaPage() {
  const { kind, track, sector, module: mod, lesson } = Route.useLoaderData();
  const { student, hydrated } = useStudent();
  const [content, setContent] = useState<{ id: string; title: string; content_md: string } | null>(null);
  const [loadingLesson, setLoadingLesson] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [needsPayment, setNeedsPayment] = useState(false);
  const [showPayModal, setShowPayModal] = useState(false);
  const [quiz, setQuiz] = useState<QuizPayload | null>(null);
  const [loadingQuiz, setLoadingQuiz] = useState(false);
  const [servedFromCache, setServedFromCache] = useState(false);

  const cacheKey = offlineKey({
    kind,
    trackSlug: track.slug,
    sectorSlug: sector.slug,
    moduleSlug: mod.slug,
    lessonSlug: lesson.slug,
  });

  useEffect(() => {
    if (!hydrated) return;
    let cancelled = false;
    setLoadingLesson(true);
    setError(null);
    setContent(null);
    setQuiz(null);
    setNeedsPayment(false);
    setServedFromCache(false);

    if (!student) {
      setLoadingLesson(false);
      setError("Precisa de entrar com o seu número e apelido para abrir esta aula.");
      return;
    }

    getOrGenerateLesson({
      data: {
        kind,
        trackSlug: track.slug,
        sectorSlug: sector.slug,
        moduleSlug: mod.slug,
        lessonSlug: lesson.slug,
        studentId: student.id,
      },
    })
      .then((res) => {
        if (cancelled) return;
        setContent(res);
        // Guarda a aula em cache offline automaticamente.
        void saveLessonOffline({
          key: cacheKey,
          lessonId: res.id,
          title: res.title,
          content_md: res.content_md,
          quiz: null,
          kind,
          trackSlug: track.slug,
          sectorSlug: sector.slug,
          moduleSlug: mod.slug,
          lessonSlug: lesson.slug,
        });
      })
      .catch(async (err) => {
        if (cancelled) return;
        const msg = err instanceof Error ? err.message : "Falha ao carregar aula";
        if (msg.includes("ACCESS_REQUIRED")) {
          setNeedsPayment(true);
          setShowPayModal(true);
          return;
        }
        // Falha de rede → tenta cache offline
        const cached = await readLessonOffline(cacheKey);
        if (cached) {
          setContent({ id: cached.lessonId, title: cached.title, content_md: cached.content_md });
          setServedFromCache(true);
          if (cached.quiz) setQuiz(cached.quiz as QuizPayload);
        } else {
          setError(msg);
        }
      })
      .finally(() => {
        if (!cancelled) setLoadingLesson(false);
      });
    return () => {
      cancelled = true;
    };
  }, [hydrated, student, kind, track.slug, sector.slug, mod.slug, lesson.slug, cacheKey]);


  async function startQuiz() {
    if (!content) return;
    setLoadingQuiz(true);
    setError(null);
    try {
      const q = await getOrGenerateQuiz({ data: { lessonId: content.id } });
      setQuiz(q);
      // Guarda o quiz junto da aula no cache offline.
      void updateQuizOffline(cacheKey, q);
      setTimeout(() => {
        document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } catch (err) {
      // Se falhou por rede, tenta cache
      const cached = await readLessonOffline(cacheKey);
      if (cached?.quiz) {
        setQuiz(cached.quiz as QuizPayload);
      } else {
        setError(err instanceof Error ? err.message : "Falha ao carregar quiz");
      }
    } finally {
      setLoadingQuiz(false);
    }
  }

  const parentTo = kind === "concurso" ? "/concurso/$ministerio/$sector" : "/preparatorio/$faculdade/$curso";
  const parentParams = kind === "concurso"
    ? { ministerio: track.slug, sector: sector.slug }
    : { faculdade: track.slug, curso: sector.slug };

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="border-b border-border/60 bg-[linear-gradient(180deg,oklch(0.18_0.03_150/0.35),transparent)]">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Link to={kind === "concurso" ? "/concurso" : "/preparatorio"} className="hover:text-gold">
              {kind === "concurso" ? "Concurso" : "Preparatório"}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={parentTo as string} params={parentParams as never} className="hover:text-gold">
              {sector.name}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold">{lesson.title}</span>
          </nav>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gold">{mod.title}</p>
          <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl">{lesson.title}</h1>
            {content && (
              <OfflineLessonToggle
                kind={kind}
                trackSlug={track.slug}
                sectorSlug={sector.slug}
                moduleSlug={mod.slug}
                lessonSlug={lesson.slug}
                lesson={content}
                quiz={quiz}
              />
            )}
          </div>
          {servedFromCache && (
            <p className="mt-3 inline-flex items-center gap-1 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs text-gold">
              <WifiOff className="h-3 w-3" /> Aula servida do cache offline
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-6">
          <MotivationBanner kind={kind} trackSlug={track.slug} compact />
        </div>
        {loadingLesson && (
          <div className="flex flex-col items-center gap-3 py-16 text-muted-foreground">
            <Loader2 className="h-8 w-8 animate-spin text-gold" />
            <p className="font-serif text-lg">O professor está a preparar a aula…</p>
            <p className="text-xs">Isto pode demorar até 30 segundos na primeira vez.</p>
          </div>
        )}
        {needsPayment && !loadingLesson && student && (
          <div className="rounded-2xl border border-gold/40 bg-gold/5 p-6 text-center">
            <Lock className="mx-auto h-8 w-8 text-gold" />
            <h2 className="mt-3 font-serif text-2xl">Acesso pago necessário</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Para abrir as aulas de <span className="text-foreground">{sector.name}</span> é necessário confirmar o pagamento.
            </p>
            <button
              onClick={() => setShowPayModal(true)}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              <Lock className="h-4 w-4" /> Ver dados de pagamento
            </button>
          </div>
        )}
        {error && !loadingLesson && !needsPayment && (
          <div className="rounded-xl border border-burgundy/40 bg-burgundy/10 p-4 text-sm text-burgundy">
            {error}
            {!student && (
              <div className="mt-3">
                <Link to="/entrar" className="inline-flex rounded-full bg-gold px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90">
                  Entrar / Registar
                </Link>
              </div>
            )}
          </div>
        )}
        {content && (
          <>
            <LessonMarkdown source={content.content_md} />
            <div className="mt-12 rounded-2xl border border-gold/30 bg-gold/5 p-6 text-center">
              <Sparkles className="mx-auto h-6 w-6 text-gold" />
              <h2 className="mt-3 font-serif text-2xl">Testar conhecimento</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                10 perguntas geradas a partir desta aula.
              </p>
              <button
                onClick={startQuiz}
                disabled={loadingQuiz}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
              >
                {loadingQuiz ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> A preparar…</>
                ) : (
                  <>Começar quiz</>
                )}
              </button>
            </div>

          </>
        )}

        {quiz && (
          <div id="quiz" className="mt-12">
            <QuizRunner quiz={quiz} />
          </div>
        )}
      </section>
      {student && (
        <PaymentModal
          open={showPayModal}
          onClose={() => setShowPayModal(false)}
          student={student}
          kind={kind}
          trackSlug={track.slug}
          sectorSlug={sector.slug}
          trackName={track.name}
          sectorName={sector.name}
        />
      )}
      <SiteFooter />
    </div>
  );
}
