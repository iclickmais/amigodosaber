import { useEffect, useState } from "react";
import { Headphones, PlayCircle, Video, Volume2 } from "lucide-react";
import { getLessonMedia, type LessonMedia } from "@/lib/media.functions";
import type { TrackKind } from "@/lib/study-tracks";

interface Props {
  studentId: string;
  kind: TrackKind;
  trackSlug: string;
  sectorSlug: string;
  moduleSlug: string;
  lessonSlug: string;
}

export function LessonMediaPlayer(props: Props) {
  const [media, setMedia] = useState<LessonMedia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getLessonMedia({ data: props }).then((result) => {
      if (!cancelled) setMedia(result.media);
    }).catch(() => {
      if (!cancelled) setMedia([]);
    }).finally(() => {
      if (!cancelled) setLoading(false);
    });
    return () => { cancelled = true; };
  }, [props.kind, props.trackSlug, props.sectorSlug, props.moduleSlug, props.lessonSlug, props.studentId]);

  if (loading || media.length === 0) return null;

  return (
    <section className="my-8 rounded-2xl border border-sky-500/20 bg-sky-500/[0.06] p-4 sm:p-5" aria-labelledby="media-title">
      <div className="flex items-center gap-2"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/15 text-sky-600 dark:text-sky-300"><Headphones className="h-4 w-4" /></span><div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-300">Aprende também a ouvir e ver</p><h2 id="media-title" className="font-serif text-xl">Conteúdo multimédia</h2></div></div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {media.map((item) => <article key={item.id} className="overflow-hidden rounded-xl border border-border bg-card">
          {item.media_type === "video" ? <div className="aspect-video bg-black"><video controls preload="metadata" poster={item.thumbnail_url ?? undefined} className="h-full w-full" aria-label={item.title}><source src={item.media_url} /></video></div> : <div className="flex items-center gap-3 border-b border-border bg-gradient-to-r from-sky-500/10 to-transparent p-4"><Volume2 className="h-5 w-5 text-sky-600 dark:text-sky-300" /><audio controls preload="metadata" className="min-w-0 flex-1" aria-label={item.title}><source src={item.media_url} /></audio></div>}
          <div className="p-4"><p className="flex items-center gap-2 text-sm font-semibold">{item.media_type === "video" ? <Video className="h-4 w-4 text-sky-500" /> : <PlayCircle className="h-4 w-4 text-sky-500" />}{item.title}</p>{item.description && <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>}</div>
        </article>)}
      </div>
    </section>
  );
}
