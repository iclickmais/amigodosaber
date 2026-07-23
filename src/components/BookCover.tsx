import type { Book } from "@/lib/library-data";

const paletteStyles: Record<Book["cover"]["palette"], string> = {
  gold: "bg-[linear-gradient(160deg,oklch(0.42_0.08_78),oklch(0.22_0.04_60))] text-[oklch(0.88_0.14_82)]",
  burgundy:
    "bg-[linear-gradient(160deg,oklch(0.32_0.12_22),oklch(0.16_0.06_20))] text-[oklch(0.88_0.05_60)]",
  emerald:
    "bg-[linear-gradient(160deg,oklch(0.32_0.08_155),oklch(0.16_0.04_150))] text-[oklch(0.88_0.08_100)]",
  sapphire:
    "bg-[linear-gradient(160deg,oklch(0.28_0.09_255),oklch(0.14_0.05_260))] text-[oklch(0.88_0.06_90)]",
  ivory:
    "bg-[linear-gradient(160deg,oklch(0.82_0.03_82),oklch(0.66_0.04_78))] text-[oklch(0.22_0.04_40)]",
};

const ornaments: Record<Book["cover"]["ornament"], string> = {
  cross: "✝",
  book: "❦",
  quill: "✒",
  crown: "♛",
  leaf: "❧",
  star: "✦",
};

export function BookCover({
  book,
  className = "",
}: {
  book: Book;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[2/3] w-full overflow-hidden rounded-sm shadow-book ${paletteStyles[book.cover.palette]} ${className}`}
    >
      {/* Spine highlight */}
      <div className="absolute inset-y-0 left-0 w-1.5 bg-black/40" />
      <div className="absolute inset-y-0 left-1.5 w-px bg-white/10" />

      {/* Ornament border */}
      <div className="absolute inset-3 border border-current/25" />
      <div className="absolute inset-4 border border-current/15" />

      <div className="relative flex h-full flex-col items-center justify-between p-5 text-center">
        <div className="text-2xl opacity-70">{ornaments[book.cover.ornament]}</div>

        <div className="flex flex-1 flex-col items-center justify-center gap-3">
          <div className="text-[10px] uppercase tracking-[0.25em] opacity-60">
            Biblioteca
          </div>
          <h3
            className="font-serif text-base leading-tight sm:text-lg"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
          >
            {book.title}
          </h3>
          <div className="h-px w-8 bg-current/40" />
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">
            {book.author}
          </p>
        </div>

        <div className="text-xs opacity-60">{book.year}</div>
      </div>

      {/* Sheen */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_40%,rgba(255,255,255,0.06)_50%,transparent_60%)]" />
    </div>
  );
}
