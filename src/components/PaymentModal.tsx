import { useEffect, useState } from "react";
import { X, Copy, Check, MessageCircle, Lock } from "lucide-react";
import { PAYMENT_INFO, priceFor, validityLabel, formatKz, buildWhatsAppLink } from "@/lib/payment-info";
import { requestPayment } from "@/lib/access.functions";
import type { StudentSession } from "@/hooks/use-student";

interface Props {
  open: boolean;
  onClose: () => void;
  student: StudentSession;
  kind: "concurso" | "preparatorio";
  trackSlug: string;
  sectorSlug: string;
  trackName: string;
  sectorName: string;
}

export function PaymentModal({
  open,
  onClose,
  student,
  kind,
  trackSlug,
  sectorSlug,
  trackName,
  sectorName,
}: Props) {
  const [copied, setCopied] = useState(false);
  const amount = priceFor(kind);
  const kindLabel = kind === "concurso" ? "Concurso Público" : "Preparatório";

  useEffect(() => {
    if (!open) return;
    // regista o pedido (não bloqueia se falhar)
    requestPayment({
      data: { studentId: student.id, kind, trackSlug, sectorSlug },
    }).catch(() => {});
  }, [open, student.id, kind, trackSlug, sectorSlug]);

  if (!open) return null;

  const waLink = buildWhatsAppLink({
    studentName: student.surname,
    studentPhone: student.phone,
    kind,
    trackName,
    sectorName,
    amountKz: amount,
  });

  function copyIban() {
    navigator.clipboard.writeText(PAYMENT_INFO.iban.replace(/\s/g, "")).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-gold/40 bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="border-b border-border/60 bg-[linear-gradient(180deg,oklch(0.78_0.13_78/0.12),transparent)] px-6 py-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold">
            <Lock className="h-3 w-3" /> Acesso pago
          </div>
          <h2 className="mt-3 font-serif text-2xl text-foreground">
            {kindLabel} — {sectorName}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Aulas e questionários deste sector. Validade: <span className="text-gold">{validityLabel(kind)}</span>.
          </p>
        </div>

        <div className="space-y-5 px-6 py-5 text-sm">
          <div className="flex items-baseline justify-between rounded-xl border border-gold/30 bg-gold/5 px-4 py-3">
            <span className="text-muted-foreground">Valor a pagar</span>
            <span className="font-serif text-2xl text-gold">{formatKz(amount)}</span>
          </div>

          <div className="rounded-xl border border-border bg-background/50 p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Transferência bancária</p>
            <dl className="mt-3 space-y-2">
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted-foreground">Banco</dt>
                <dd className="font-medium text-foreground">{PAYMENT_INFO.bank}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted-foreground">Titular</dt>
                <dd className="font-medium text-foreground">{PAYMENT_INFO.holder}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted-foreground">IBAN</dt>
                <dd className="flex items-center gap-2">
                  <code className="font-mono text-xs text-foreground">{PAYMENT_INFO.iban}</code>
                  <button
                    onClick={copyIban}
                    className="rounded-md border border-border p-1 text-muted-foreground hover:border-gold hover:text-gold"
                    aria-label="Copiar IBAN"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </dd>
              </div>
            </dl>
            <p className="mt-3 text-xs text-muted-foreground">
              Qualquer banco pode transferir para este IBAN.
            </p>
          </div>

          <ol className="space-y-2 rounded-xl border border-border bg-background/30 p-4 text-xs text-muted-foreground">
            <li><span className="text-gold">1.</span> Faça a transferência de {formatKz(amount)}.</li>
            <li><span className="text-gold">2.</span> Envie o comprovativo pelo WhatsApp abaixo.</li>
            <li><span className="text-gold">3.</span> O acesso é liberado após confirmação.</li>
          </ol>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            Enviar comprovativo ({PAYMENT_INFO.whatsapp})
          </a>
          <p className="text-center text-[11px] text-muted-foreground">
            A mensagem vai pré-preenchida com o seu nome, telefone e curso.
          </p>
        </div>
      </div>
    </div>
  );
}
