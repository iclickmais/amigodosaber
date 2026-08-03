import { useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { registerStudent } from "@/lib/study.functions";
import { adminLogin } from "@/lib/admin.functions";
import { useStudent } from "@/hooks/use-student";
import { buildWelcomeWhatsAppLink } from "@/lib/payment-info";
import { GraduationCap, MessageCircle } from "lucide-react";

const ADMIN_PHONE_DIGITS = "921346544";
const ADMIN_KEY = "angopdf.admin";

function isAdminPhone(raw: string): boolean {
  const digits = raw.replace(/\D/g, "");
  return digits.endsWith(ADMIN_PHONE_DIGITS);
}

export const Route = createFileRoute("/entrar")({
  validateSearch: (s: Record<string, unknown>) => ({
    next: typeof s.next === "string" ? s.next : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Entrar — Sala de aula | Amigo do Saber" },
      { name: "description", content: "Registe o seu apelido e número de telefone para começar a usar a aplicação." },
      { property: "og:title", content: "Entrar — Amigo do Saber" },
      { property: "og:description", content: "Registo obrigatório: apelido e telefone." },
    ],
  }),
  component: EntrarPage,
});

function safeNext(next: string | undefined): string {
  if (!next) return "/";
  if (!next.startsWith("/") || next.startsWith("//")) return "/";
  if (next.startsWith("/entrar")) return "/";
  return next;
}

function EntrarPage() {
  const navigate = useNavigate();
  const search = Route.useSearch();
  const { student, save, hydrated } = useStudent();
  const [phone, setPhone] = useState("");
  const [surname, setSurname] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [welcome, setWelcome] = useState<{ name: string; phone: string } | null>(null);

  const nextPath = safeNext(search.next);

  // Já entrou uma vez? Vai directo para o destino pretendido — sem repetir apelido/número.
  if (hydrated && student && !welcome) {
    const isAdmin =
      typeof window !== "undefined" && window.localStorage.getItem(ADMIN_KEY);
    navigate({ to: isAdmin ? "/admin" : nextPath });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const result = await registerStudent({ data: { phone, surname } });
      save(result);
      if (isAdminPhone(phone)) {
        try {
          const { phone: adminPhone } = await adminLogin({
            data: { adminPhone: phone },
          });
          window.localStorage.setItem(ADMIN_KEY, adminPhone);
          navigate({ to: "/admin" });
          return;
        } catch {
          // Se não for admin válido, cai no destino normal
        }
      }
      navigate({ to: nextPath });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha ao registar");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-md px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-gold/30 bg-card p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
              <GraduationCap className="h-6 w-6" />
            </span>
            <div>
              <h1 className="font-serif text-2xl">Registo</h1>
              <p className="text-xs text-muted-foreground">
                Registo obrigatório para usar a aplicação
              </p>
            </div>
          </div>
          <p className="mb-6 text-xs text-muted-foreground">
            Usamos o seu apelido e telefone para o contactar via WhatsApp quando pedir um livro,
            se inscrever num concurso ou preparatório, e para guardar o seu progresso.
          </p>

          {student ? (
            <p className="text-sm text-muted-foreground">A redireccionar para o seu painel…</p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">
                  Número de telefone
                </span>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+244 923 456 789"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">
                  Apelido
                </span>
                <input
                  type="text"
                  required
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  placeholder="Dos Santos"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                />
              </label>
              {error && (
                <p className="rounded-lg border border-burgundy/40 bg-burgundy/10 px-3 py-2 text-xs text-burgundy">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-gold px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "A entrar..." : "Entrar na sala"}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Sem palavra-passe. O seu número identifica-o.
              </p>
            </form>
          )}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
