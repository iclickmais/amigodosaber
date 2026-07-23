import { Target } from "lucide-react";
import { getMotivation } from "@/lib/motivations";
import type { TrackKind } from "@/lib/study-tracks";

interface Props {
  kind: TrackKind;
  trackSlug: string;
  compact?: boolean;
}

export function MotivationBanner({ kind, trackSlug, compact = false }: Props) {
  const m = getMotivation(kind, trackSlug);
  return (
    <div
      className={`rounded-2xl border border-gold/30 bg-[linear-gradient(180deg,oklch(0.78_0.13_78/0.10),transparent)] ${
        compact ? "p-4" : "p-5 sm:p-6"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
          <Target className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
            Objectivo: {m.goal}
          </p>
          <p className={`mt-1 font-serif text-foreground ${compact ? "text-lg" : "text-xl"}`}>
            {m.title}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{m.message}</p>
        </div>
      </div>
    </div>
  );
}
