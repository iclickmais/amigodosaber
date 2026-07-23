import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { searchBooks, formatPrice, type Book } from "@/lib/library-data";

type Props = {
  variant?: "hero" | "compact";
  autoFocus?: boolean;
  onNavigate?: () => void;
};

export function SearchAutocomplete({ variant = "hero", autoFocus, onNavigate }: Props) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const [visible, setVisible] = useState(8);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const results = useMemo<Book[]>(() => {
    const q = query.trim();
    if (q.length < 2) return [];
    return searchBooks(q, 40);
  }, [query]);

  const shown = results.slice(0, visible);

  useEffect(() => {
    setHighlight(0);
    setVisible(8);
  }, [query]);


  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const go = (book: Book) => {
    setOpen(false);
    setQuery("");
    onNavigate?.();
    navigate({ to: "/livro/$id", params: { id: book.id } });
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || shown.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => {
        const next = Math.min(h + 1, shown.length - 1);
        if (next >= shown.length - 2 && shown.length < results.length) {
          setVisible((v) => Math.min(v + 8, results.length));
        }
        return next;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const pick = shown[highlight];
      if (pick) go(pick);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const onListScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 120) {
      if (shown.length < results.length) {
        setVisible((v) => Math.min(v + 8, results.length));
      }
    }
  };


  const isHero = variant === "hero";

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        className={
          isHero
            ? "flex max-w-2xl items-center gap-2 rounded-full border border-border bg-card/60 p-1.5 backdrop-blur-xl"
            : "flex items-center gap-2 rounded-full border border-border bg-card/80 p-1.5"
        }
      >
        <div className="pl-3">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <input
          autoFocus={autoFocus}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKey}
          placeholder="Título, autor, matéria..."
          className="flex-1 bg-transparent px-2 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          aria-label="Buscar livro"
          aria-autocomplete="list"
          aria-expanded={open && results.length > 0}
        />
        {query && (
          <button
            type="button"
            aria-label="Limpar"
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {open && query.trim().length >= 2 && (
        <div
          ref={listRef}
          onScroll={onListScroll}
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-2 max-h-[70vh] overflow-y-auto rounded-2xl border border-border/70 bg-popover/95 p-1 shadow-2xl backdrop-blur-xl"
        >
          {results.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-muted-foreground">
              Nenhum título encontrado. Peça pelo WhatsApp.
            </div>
          ) : (
            <>
              {shown.map((b, i) => (
                <button
                  key={b.id}
                  role="option"
                  aria-selected={i === highlight}
                  onMouseEnter={() => setHighlight(i)}
                  onClick={() => go(b)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors ${
                    i === highlight ? "bg-gold/10" : "hover:bg-muted/40"
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    PDF
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium text-foreground">
                      {b.title}
                    </div>
                    <div className="truncate text-xs text-muted-foreground">
                      {b.author} · {b.subcategory}
                    </div>
                  </div>
                  <div className="shrink-0 text-xs font-medium text-gold">
                    {formatPrice(b.price)}
                  </div>
                </button>
              ))}
              {shown.length < results.length && (
                <div className="px-4 py-2 text-center text-[11px] uppercase tracking-wider text-muted-foreground">
                  Role para ver mais
                </div>
              )}
            </>
          )}
        </div>
      )}

    </div>
  );
}
