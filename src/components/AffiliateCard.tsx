import { useEffect, useMemo, useState } from "react";
import { Check, Copy, Gift, Share2, Users } from "lucide-react";
import { getAffiliateDashboard } from "@/lib/affiliate.functions";

interface Props {
  studentId: string;
}

export function AffiliateCard({ studentId }: Props) {
  const [data, setData] = useState<Awaited<ReturnType<typeof getAffiliateDashboard>> | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAffiliateDashboard({ data: { studentId } })
      .then(setData)
      .catch((err) => setError(err instanceof Error ? err.message : "Não foi possível carregar o convite."));
  }, [studentId]);

  const inviteUrl = useMemo(() => {
    if (!data || typeof window === "undefined") return "";
    return `${window.location.origin}${data.referralPath}`;
  }, [data]);

  async function copyInvite() {
    if (!inviteUrl) return;
    await navigator.clipboard.writeText(inviteUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  async function shareInvite() {
    if (!inviteUrl) return;
    if (navigator.share) {
      await navigator.share({
        title: "Amigo do Saber",
        text: "Vem estudar comigo no Amigo do Saber.",
        url: inviteUrl,
      }).catch(() => {});
      return;
    }
    await copyInvite();
  }

  if (error) return null;
  if (!data) {
    return <div className="mt-8 h-28 animate-pulse rounded-2xl border border-border bg-card" aria-hidden="true" />;
  }

  return (
    <section className="mt-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-card to-gold/5 p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-300">
            <Gift className="h-4 w-4" /> Programa Amigo
          </p>
          <h2 className="mt-2 font-serif text-2xl">Aprende e convida</h2>
          <p className="mt-1 max-w-xl text-sm text-muted-foreground">
            Partilha o teu convite. Cada amigo que se regista fica associado ao teu perfil e pode gerar recompensa depois da aprovação do pagamento.
          </p>
        </div>
        <div className="rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-right">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Saldo de recompensa</p>
          <p className="mt-1 font-serif text-2xl text-gold">{data.reward_balance_kz.toLocaleString("pt-PT")} Kz</p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3">
          <span className="shrink-0 text-xs text-muted-foreground">Código</span>
          <code className="truncate text-sm font-semibold text-foreground">{data.code}</code>
        </div>
        <button
          type="button"
          onClick={copyInvite}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-gold hover:text-gold"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copiado" : "Copiar convite"}
        </button>
        <button
          type="button"
          onClick={shareInvite}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
        >
          <Share2 className="h-4 w-4" /> Partilhar
        </button>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        <Metric icon={<Users className="h-4 w-4" />} label="Cliques" value={data.clicks} />
        <Metric icon={<Users className="h-4 w-4" />} label="Registos" value={data.registered_referrals} />
        <Metric icon={<Check className="h-4 w-4" />} label="Aprovados" value={data.approved_referrals} />
      </div>
    </section>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="rounded-xl border border-border bg-background/40 p-3">
      <div className="flex items-center gap-1.5 text-gold">{icon}<span className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span></div>
      <p className="mt-1 font-serif text-2xl">{value}</p>
    </div>
  );
}
