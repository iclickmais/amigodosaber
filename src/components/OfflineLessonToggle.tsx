import { useEffect, useState } from "react";
import { Download, CheckCircle2, Loader2 } from "lucide-react";
import {
  offlineKey,
  readLessonOffline,
  saveLessonOffline,
  removeOfflineLesson,
} from "@/lib/offline-cache";

interface Props {
  kind: string;
  trackSlug: string;
  sectorSlug: string;
  moduleSlug: string;
  lessonSlug: string;
  lesson: { id: string; title: string; content_md: string } | null;
  quiz: unknown | null;
}

export function OfflineLessonToggle({
  kind,
  trackSlug,
  sectorSlug,
  moduleSlug,
  lessonSlug,
  lesson,
  quiz,
}: Props) {
  const [saved, setSaved] = useState<boolean | null>(null);
  const [busy, setBusy] = useState(false);
  const key = offlineKey({ kind, trackSlug, sectorSlug, moduleSlug, lessonSlug });

  useEffect(() => {
    readLessonOffline(key).then((r) => setSaved(!!r));
  }, [key]);

  async function toggle() {
    if (!lesson) return;
    setBusy(true);
    try {
      if (saved) {
        await removeOfflineLesson(key);
        setSaved(false);
      } else {
        await saveLessonOffline({
          key,
          lessonId: lesson.id,
          title: lesson.title,
          content_md: lesson.content_md,
          quiz: quiz ?? null,
          kind,
          trackSlug,
          sectorSlug,
          moduleSlug,
          lessonSlug,
        });
        setSaved(true);
      }
    } finally {
      setBusy(false);
    }
  }

  if (saved === null || !lesson) return null;

  return (
    <button
      onClick={toggle}
      disabled={busy}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-colors ${
        saved
          ? "border-gold/40 bg-gold/10 text-gold"
          : "border-border text-muted-foreground hover:border-gold hover:text-gold"
      }`}
    >
      {busy ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : saved ? (
        <CheckCircle2 className="h-3.5 w-3.5" />
      ) : (
        <Download className="h-3.5 w-3.5" />
      )}
      {saved ? "Guardada offline" : "Guardar para offline"}
    </button>
  );
}
