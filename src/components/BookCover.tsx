import { useState } from "react";
import type { Book } from "@/lib/library-data";

export function BookCover({
  book,
  className = "",
}: {
  book: Book;
  className?: string;
}) {
  const [imgError, setImgError] = useState(false);

  if (book.coverUrl && !imgError) {
    return (
      <div
        className={`relative aspect-[2/3] w-full overflow-hidden rounded-sm shadow-book bg-muted ${className}`}
      >
        <img
          src={book.coverUrl}
          alt={book.title}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={() => setImgError(true)}
        />
        {/* Spine highlight overlay even on real covers for consistency */}
        <div className="absolute inset-y-0 left-0 w-1 bg-black/20" />
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[2/3] w-full overflow-hidden rounded-sm border border-border bg-muted text-muted-foreground shadow-book ${className}`}
    >
      {/* Spine highlight */}
      <div className="absolute inset-y-0 left-0 w-1.5 bg-black/40" />
      <div className="absolute inset-y-0 left-1.5 w-px bg-white/10" />

      {/* Ornament border */}
      <div className="absolute inset-3 border border-current/25" />
      <div className="absolute inset-4 border border-current/15" />

      <div className="relative flex h-full flex-col items-center justify-between p-5 text-center">
        <div className="text-[10px] uppercase tracking-[0.2em] opacity-70">Capa indisponível</div>

        <div className="flex flex-1 flex-col items-center justify-center gap-3">
          <div className="text-[10px] uppercase tracking-[0.25em] opacity-60">
            Referência bibliográfica
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
