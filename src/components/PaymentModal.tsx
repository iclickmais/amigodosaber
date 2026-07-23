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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="payment-modal-inner relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-[20px] sm:rounded-[24px] border border-gold/30 bg-[#1A1614] shadow-[0_0_50px_-12px_rgba(212,175,55,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-1 text-muted-foreground transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="px-6 pt-6 sm:px-8 sm:pt-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-gold">
            <Lock className="h-3 w-3" /> Acesso pago
          </div>
          <h2 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-3xl">
            {kindLabel} — {sectorName}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Aulas e questionários deste sector. Validade: <span className="text-gold font-medium">{validityLabel(kind)}</span>.
          </p>
        </div>

        <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6 px-6 pb-6 sm:px-8 sm:pb-8">
          <div className="flex items-center justify-between rounded-2xl border border-gold/20 bg-white/[0.03] px-6 py-5">
            <span className="text-sm text-muted-foreground">Valor a pagar</span>
            <span className="font-serif text-3xl text-gold">{formatKz(amount)}</span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Transferência bancária</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Banco</dt>
                <dd className="font-semibold text-white">{PAYMENT_INFO.bank}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Titular</dt>
                <dd className="font-semibold text-white">{PAYMENT_INFO.holder}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-muted-foreground">IBAN</dt>
                <dd className="flex items-center gap-2 overflow-hidden">
                  <code className="truncate font-mono text-[13px] text-white/90">{PAYMENT_INFO.iban}</code>
                  <button
                    onClick={copyIban}
                    className="flex-shrink-0 rounded-lg border border-white/10 bg-white/5 p-2 text-muted-foreground transition-all hover:border-gold/50 hover:text-gold active:scale-95"
                    aria-label="Copiar IBAN"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground/70">
              Qualquer banco pode transferir para este IBAN.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-white/5 bg-white/[0.01] p-5">
            {[
              `Faça a transferência de ${formatKz(amount)}.`,
              "Envie o comprovativo pelo WhatsApp abaixo.",
              "O acesso é liberado após confirmação."
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 text-xs text-muted-foreground/80">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-[10px] font-bold text-gold">
                  {i + 1}
                </span>
                <p className="pt-0.5">{step}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-2">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-gold py-4 text-sm font-bold text-[#1A1614] transition-all hover:scale-[1.02] hover:shadow-[0_8px_20px_-8px_rgba(212,175,55,0.5)] active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              Enviar comprovativo ({PAYMENT_INFO.whatsapp})
            </a>
            <p className="text-center text-[10px] leading-relaxed text-muted-foreground/60">
              A mensagem vai pré-preenchida com o seu nome, telefone e curso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
