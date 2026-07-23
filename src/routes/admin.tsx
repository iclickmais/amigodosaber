import { useState, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  adminLogin,
  adminOverview,
  adminApprovePayment,
  adminRejectPayment,
} from "@/lib/admin.functions";
import {
  listEdicts,
  adminCreateEdict,
  adminDeleteEdict,
  type EdictRow,
} from "@/lib/edicts.functions";
import { formatKz } from "@/lib/payment-info";
import { ShieldCheck, Check, X, Phone, User, Clock, Megaphone, Trash2, Plus, Loader2 } from "lucide-react";

const ADMIN_KEY = "angopdf.admin";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Painel do Administrador | Amigo do Saber" },
      { name: "description", content: "Área restrita para gestão de pagamentos e utilizadores." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

interface PaymentRow {
  id: string;
  student_id: string;
  kind: string;
  track_slug: string;
  sector_slug: string;
  track_name: string;
  sector_name: string;
  amount_kz: number;
  status: string;
  created_at: string;
  student: { surname: string; phone: string };
}

interface StudentRow {
  id: string;
  phone: string;
  surname: string;
  created_at: string;
}

interface Overview {
  pending: PaymentRow[];
  recent: PaymentRow[];
  students: StudentRow[];
}

function AdminPage() {
  const [adminPhone, setAdminPhone] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(ADMIN_KEY);
  });
  const [phoneInput, setPhoneInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Overview | null>(null);
  const [tab, setTab] = useState<"pending" | "recent" | "students" | "edicts" | "books">("pending");

  const load = useCallback(async (phone: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await adminOverview({ data: { adminPhone: phone } });
      setData(res as Overview);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Falha");
    } finally {
      setLoading(false);
    }
  }, []);

  async function onLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { phone } = await adminLogin({ data: { adminPhone: phoneInput } });
      window.localStorage.setItem(ADMIN_KEY, phone);
      setAdminPhone(phone);
      await load(phone);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Falha");
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    window.localStorage.removeItem(ADMIN_KEY);
    setAdminPhone(null);
    setData(null);
  }

  async function approve(id: string) {
    if (!adminPhone) return;
    await adminApprovePayment({ data: { adminPhone, requestId: id } });
    await load(adminPhone);
  }

  async function reject(id: string) {
    if (!adminPhone) return;
    await adminRejectPayment({ data: { adminPhone, requestId: id } });
    await load(adminPhone);
  }

  // Auto load on mount if we have stored phone
  if (adminPhone && !data && !loading && !error) {
    void load(adminPhone);
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <div className="flex-1">
            <h1 className="font-serif text-2xl">Painel do Administrador</h1>
            <p className="text-xs text-muted-foreground">
              Aprovar pagamentos e gerir alunos
            </p>
          </div>
          {adminPhone && (
            <button
              onClick={logout}
              className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground hover:border-gold hover:text-gold"
            >
              Sair
            </button>
          )}
        </div>

        {!adminPhone ? (
          <form
            onSubmit={onLogin}
            className="mx-auto max-w-md space-y-4 rounded-3xl border border-gold/30 bg-card p-8"
          >
            <label className="block">
              <span className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">
                Número de administrador
              </span>
              <input
                type="tel"
                required
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                placeholder="+244 ..."
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
              className="w-full rounded-full bg-gold px-4 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "A entrar..." : "Entrar no painel"}
            </button>
          </form>
        ) : (
          <>
            <div className="mb-6 flex gap-2 overflow-x-auto">
              {(
                [
                  ["pending", `Pendentes (${data?.pending.length ?? 0})`],
                  ["recent", "Histórico"],
                  ["students", `Alunos (${data?.students.length ?? 0})`],
                  ["edicts", "Editais"],
                  ["books", "Livros"],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => setTab(id)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs transition-colors ${
                    tab === id
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {loading && <p className="text-sm text-muted-foreground">A carregar…</p>}
            {error && (
              <p className="rounded-lg border border-burgundy/40 bg-burgundy/10 px-3 py-2 text-xs text-burgundy">
                {error}
              </p>
            )}

            {data && tab === "pending" && (
              <div className="space-y-3">
                {data.pending.length === 0 && (
                  <p className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
                    Sem pedidos pendentes.
                  </p>
                )}
                {data.pending.map((r) => (
                  <PaymentCard
                    key={r.id}
                    row={r}
                    onApprove={() => approve(r.id)}
                    onReject={() => reject(r.id)}
                  />
                ))}
              </div>
            )}

            {data && tab === "recent" && (
              <div className="space-y-3">
                {data.recent.length === 0 && (
                  <p className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
                    Nada no histórico ainda.
                  </p>
                )}
                {data.recent.map((r) => (
                  <PaymentCard key={r.id} row={r} />
                ))}
              </div>
            )}

            {data && tab === "students" && (
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <table className="w-full text-sm">
                  <thead className="bg-muted/30 text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3">Apelido</th>
                      <th className="px-4 py-3">Telefone</th>
                      <th className="px-4 py-3">Registado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.students.map((s) => (
                      <tr key={s.id} className="border-t border-border/60">
                        <td className="px-4 py-3">{s.surname}</td>
                        <td className="px-4 py-3 font-mono text-xs">{s.phone}</td>
                        <td className="px-4 py-3 text-xs text-muted-foreground">
                          {new Date(s.created_at).toLocaleString("pt-PT")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {adminPhone && tab === "edicts" && <EdictsPanel adminPhone={adminPhone} />}
          </>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}

function PaymentCard({
  row,
  onApprove,
  onReject,
}: {
  row: PaymentRow;
  onApprove?: () => void;
  onReject?: () => void;
}) {
  const statusColor =
    row.status === "approved"
      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-500"
      : row.status === "rejected"
        ? "border-burgundy/40 bg-burgundy/10 text-burgundy"
        : "border-gold/40 bg-gold/10 text-gold";

  return (
    <div className="rounded-2xl border border-border bg-card p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-2 text-sm">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">{row.student.surname}</span>
            <Phone className="ml-2 h-4 w-4 text-muted-foreground" />
            <span className="font-mono text-xs">{row.student.phone}</span>
          </div>
          <p className="text-sm">
            <span className="text-muted-foreground">
              {row.kind === "concurso" ? "Concurso" : "Preparatório"} —
            </span>{" "}
            {row.track_name} / {row.sector_name}
          </p>
          <p className="mt-1 text-xs text-gold">
            Duração ao aprovar: 3 meses de acesso
          </p>
          <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {new Date(row.created_at).toLocaleString("pt-PT")}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-base font-medium text-gold">
            {formatKz(row.amount_kz)}
          </span>
          <span
            className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider ${statusColor}`}
          >
            {row.status}
          </span>
        </div>
      </div>
      {(onApprove || onReject) && (
        <div className="mt-4 flex gap-2">
          {onApprove && (
            <button
              onClick={onApprove}
              className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-4 py-2 text-xs font-medium text-white hover:bg-emerald-500"
            >
              <Check className="h-3.5 w-3.5" /> Aprovar
            </button>
          )}
          {onReject && (
            <button
              onClick={onReject}
              className="inline-flex items-center gap-1 rounded-full border border-burgundy/40 px-4 py-2 text-xs text-burgundy hover:bg-burgundy/10"
            >
              <X className="h-3.5 w-3.5" /> Rejeitar
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function EdictsPanel({ adminPhone }: { adminPhone: string }) {
  const [rows, setRows] = useState<EdictRow[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    kind: "concurso" as "concurso" | "preparatorio",
    trackSlug: "",
    sectorSlug: "",
    title: "",
    descriptionMd: "",
    deadline: "",
    sourceUrl: "",
  });

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setRows(await listEdicts());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Falha");
    } finally {
      setLoading(false);
    }
  }, []);

  if (rows === null && !loading && !error) {
    void load();
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      await adminCreateEdict({
        data: {
          adminPhone,
          kind: form.kind,
          trackSlug: form.trackSlug.trim(),
          sectorSlug: form.sectorSlug.trim() || null,
          title: form.title.trim(),
          descriptionMd: form.descriptionMd,
          deadline: form.deadline || null,
          sourceUrl: form.sourceUrl.trim() || null,
        },
      });
      setForm({
        kind: form.kind,
        trackSlug: form.trackSlug,
        sectorSlug: "",
        title: "",
        descriptionMd: "",
        deadline: "",
        sourceUrl: "",
      });
      setShowForm(false);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha ao publicar");
    } finally {
      setSaving(false);
    }
  }

  async function remove(id: string) {
    if (!window.confirm("Remover este edital?")) return;
    await adminDeleteEdict({ data: { adminPhone, id } });
    await load();
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {rows ? `${rows.length} edital(is) publicados` : "A carregar…"}
        </p>
        <button
          onClick={() => setShowForm((v) => !v)}
          className="inline-flex items-center gap-1 rounded-full bg-gold px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90"
        >
          <Plus className="h-3.5 w-3.5" /> Novo edital
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={submit}
          className="space-y-3 rounded-2xl border border-gold/30 bg-card p-5"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="text-xs">
              <span className="mb-1 block uppercase tracking-wider text-muted-foreground">Tipo</span>
              <select
                value={form.kind}
                onChange={(e) => setForm({ ...form, kind: e.target.value as typeof form.kind })}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              >
                <option value="concurso">Concurso público</option>
                <option value="preparatorio">Preparatório</option>
              </select>
            </label>
            <label className="text-xs">
              <span className="mb-1 block uppercase tracking-wider text-muted-foreground">
                Prazo (opcional)
              </span>
              <input
                type="date"
                value={form.deadline}
                onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              />
            </label>
            <label className="text-xs">
              <span className="mb-1 block uppercase tracking-wider text-muted-foreground">
                Track slug
              </span>
              <input
                required
                value={form.trackSlug}
                onChange={(e) => setForm({ ...form, trackSlug: e.target.value })}
                placeholder="ex: administracao-publica"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              />
            </label>
            <label className="text-xs">
              <span className="mb-1 block uppercase tracking-wider text-muted-foreground">
                Sector slug (opcional)
              </span>
              <input
                value={form.sectorSlug}
                onChange={(e) => setForm({ ...form, sectorSlug: e.target.value })}
                placeholder="ex: assistente-tecnico"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              />
            </label>
          </div>
          <label className="block text-xs">
            <span className="mb-1 block uppercase tracking-wider text-muted-foreground">Título</span>
            <input
              required
              minLength={3}
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
            />
          </label>
          <label className="block text-xs">
            <span className="mb-1 block uppercase tracking-wider text-muted-foreground">
              Descrição
            </span>
            <textarea
              rows={4}
              value={form.descriptionMd}
              onChange={(e) => setForm({ ...form, descriptionMd: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
            />
          </label>
          <label className="block text-xs">
            <span className="mb-1 block uppercase tracking-wider text-muted-foreground">
              Link oficial (URL)
            </span>
            <input
              type="url"
              value={form.sourceUrl}
              onChange={(e) => setForm({ ...form, sourceUrl: e.target.value })}
              placeholder="https://..."
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
            />
          </label>
          {error && (
            <p className="rounded-lg border border-burgundy/40 bg-burgundy/10 px-3 py-2 text-xs text-burgundy">
              {error}
            </p>
          )}
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-1 rounded-full bg-gold px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
            >
              {saving ? <Loader2 className="h-3 w-3 animate-spin" /> : <Check className="h-3 w-3" />}
              Publicar
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-full border border-border px-4 py-2 text-xs text-muted-foreground"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      {loading && (
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" /> A carregar…
        </p>
      )}

      {rows && rows.length === 0 && !showForm && (
        <div className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          <Megaphone className="mx-auto mb-2 h-5 w-5 text-gold" />
          Ainda não publicaste nenhum edital.
        </div>
      )}

      <ul className="space-y-2">
        {rows?.map((e) => (
          <li key={e.id} className="rounded-2xl border border-border bg-card p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-gold">
                  {e.kind === "concurso" ? "Concurso" : "Preparatório"} · {e.track_slug}
                  {e.sector_slug ? ` / ${e.sector_slug}` : " (geral)"}
                </p>
                <p className="mt-1 text-sm font-medium">{e.title}</p>
                {e.deadline && (
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Prazo: {new Date(e.deadline).toLocaleDateString("pt-PT")}
                  </p>
                )}
              </div>
              <button
                onClick={() => remove(e.id)}
                className="rounded-full border border-burgundy/40 p-2 text-burgundy hover:bg-burgundy/10"
                aria-label="Remover edital"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
