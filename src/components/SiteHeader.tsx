import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Menu, X, GraduationCap, MessageSquare } from "lucide-react";
import { categories } from "@/lib/library-data";
import { SearchAutocomplete } from "@/components/SearchAutocomplete";
import { useStudent } from "@/hooks/use-student";
import logoAsset from "@/assets/amigo-do-saber-logo.png.asset.json";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { student } = useStudent();
  const isAdmin =
    typeof window !== "undefined" &&
    !!window.localStorage.getItem("angopdf.admin");

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:gap-8 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <img
            src={logoAsset.url}
            alt="Amigo do Saber"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 object-contain"
          />
          <span className="truncate font-serif text-xl tracking-tight">
            <span className="text-gold">Amigo</span>
            <span className="text-foreground"> do Saber</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to="/categoria/$slug"
              params={{ slug: cat.slug }}
              className="text-muted-foreground transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {cat.name}
            </Link>
          ))}
          <Link
            to="/concurso"
            className="text-muted-foreground transition-colors hover:text-gold"
            activeProps={{ className: "text-gold" }}
          >
            Concurso
          </Link>
          <Link
            to="/preparatorio"
            className="text-muted-foreground transition-colors hover:text-gold"
            activeProps={{ className: "text-gold" }}
          >
            Preparatório
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link
            to={isAdmin ? "/admin" : student ? "/painel" : "/entrar"}
            className="hidden items-center gap-2 rounded-full border border-gold/40 px-3 py-1.5 text-xs text-gold transition-colors hover:bg-gold/10 md:inline-flex"
          >
            <GraduationCap className="h-3.5 w-3.5" />
            {isAdmin ? "Admin" : student ? student.surname : "Entrar"}
          </Link>
          {student && (
            <Link
              to="/chat"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-gold hover:text-gold"
              title="Sala de Bate-papo"
            >
              <MessageSquare className="h-4 w-4" />
            </Link>
          )}
          <button
            aria-label={searchOpen ? "Fechar busca" : "Pesquisar"}
            onClick={() => setSearchOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-gold hover:text-gold"
          >
            {searchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
          </button>
          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-gold hover:text-gold md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="mx-auto max-w-3xl px-4 py-3 sm:px-6">
            <SearchAutocomplete
              variant="compact"
              autoFocus
              onNavigate={() => setSearchOpen(false)}
            />
          </div>
        </div>
      )}

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to="/categoria/$slug"
                params={{ slug: cat.slug }}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-gold/5 hover:text-gold"
                activeProps={{ className: "text-gold bg-gold/5" }}
              >
                {cat.name}
              </Link>
            ))}
            <Link
              to="/concurso"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-gold/5 hover:text-gold"
              activeProps={{ className: "text-gold bg-gold/5" }}
            >
              Concurso
            </Link>
            <Link
              to="/preparatorio"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-gold/5 hover:text-gold"
              activeProps={{ className: "text-gold bg-gold/5" }}
            >
              Preparatório
            </Link>
            <Link
              to="/entrar"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-gold transition-colors hover:bg-gold/5"
            >
              Entrar
            </Link>
            {student && (
              <Link
                to="/chat"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-gold/5 hover:text-gold"
              >
                <MessageSquare className="h-5 w-5" />
                Sala de Bate-papo
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
