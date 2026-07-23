import { useEffect, useState } from "react";
import { Sparkles, Trophy, Flame } from "lucide-react";

interface Props {
  reward: string;
  message?: string;
  type: "xp" | "level-up" | "streak" | "badge";
  onDismiss?: () => void;
}

export function GamificationToast({ reward, message, type, onDismiss }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animate in
    const t1 = setTimeout(() => setVisible(true), 50);
    // Auto dismiss
    const t2 = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onDismiss?.(), 400);
    }, 3500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDismiss]);

  const bgClass =
    type === "level-up"
      ? "border-gold/60 bg-gold/15 shadow-gold/20"
      : type === "streak"
      ? "border-orange-400/40 bg-orange-400/10 shadow-orange-400/10"
      : type === "badge"
      ? "border-emerald-400/40 bg-emerald-400/10 shadow-emerald-400/10"
      : "border-gold/30 bg-gold/5 shadow-gold/10";

  const Icon =
    type === "level-up" ? Trophy : type === "streak" ? Flame : Sparkles;

  return (
    <div
      className={`fixed top-20 left-1/2 z-[9999] -translate-x-1/2 w-[90vw] max-w-sm rounded-2xl border backdrop-blur-md px-5 py-4 text-center transition-all duration-400 shadow-xl ${
        bgClass
      } ${
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-8 scale-95"
      }`}
    >
      <div className="flex items-center justify-center gap-2 mb-1">
        <Icon className="h-5 w-5 text-gold" />
        <span className="font-serif text-lg font-bold text-gold">{reward}</span>
      </div>
      {message && (
        <p className="text-xs text-muted-foreground mt-1">{message}</p>
      )}
    </div>
  );
}
