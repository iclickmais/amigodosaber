import { useEffect, useState } from "react";
import {
  X, Copy, Check, MessageCircle, Lock, Crown, BookOpen, Target,
  Rocket, Shield, ChevronRight, CheckCircle2, Upload, FileCheck, AlertCircle,
} from "lucide-react";
import { PAYMENT_INFO, priceFor, validityLabel, formatKz, buildWhatsAppLink } from "@/lib/payment-info";
import { requestPayment, submitPaymentProof } from "@/lib/access.functions";
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
  const [step, setStep] = useState<"paywall" | "details">("paywall");
  const [requestId, setRequestId] = useState<string | null>(null);
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [proofSubmitting, setProofSubmitting] = useState(false);
  const [proofMessage, setProofMessage] = useState<string | null>(null);
  const amount = priceFor(kind);
  const kindLabel = kind === "concurso" ? "Concurso Público" : "Preparatório";

  useEffect(() => {
    if (!open) return;
    setStep("paywall");
    setRequestId(null);
    setProofFile(null);
    setProofMessage(null);
  }, [open]);

  const handleInitiatePayment = async () => {
    try {
      const result = await requestPayment({
        data: { studentId: student.id, kind, trackSlug, sectorSlug },
      });
      setRequestId(result.requestId);
      setStep("details");
    } catch (error) {
      console.error("Erro ao iniciar pagamento:", error);
      setProofMessage(error instanceof Error ? error.message : "Não foi possível iniciar o pagamento.");
    }
  };

  const handleProofSubmit = async () => {
    if (!requestId || !proofFile) {
      setProofMessage("Selecione um comprovativo antes de enviar.");
      return;
    }
    if (proofFile.size > 5 * 1024 * 1024) {
      setProofMessage("O ficheiro deve ter no máximo 5 MB.");
      return;
    }
    const allowed = ["image/jpeg", "image/png", "image/webp", "application/pdf"] as const;
    if (!(allowed as readonly string[]).includes(proofFile.type)) {
      setProofMessage("Formato não suportado. Use JPG, PNG, WEBP ou PDF.");
      return;
    }

    setProofSubmitting(true);
    setProofMessage(null);
    try {
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = () => reject(new Error("Não foi possível ler o ficheiro."));
        reader.readAsDataURL(proofFile);
      });
      await submitPaymentProof({
        data: {
          requestId,
          studentId: student.id,
          fileName: proofFile.name,
          mimeType: proofFile.type as (typeof allowed)[number],
          base64,
        },
      });
      setProofMessage("Comprovativo recebido. A nossa equipa irá confirmar o pagamento.");
    } catch (error) {
      setProofMessage(error instanceof Error ? error.message : "Não foi possível enviar o comprovativo.");
    } finally {
      setProofSubmitting(false);
    }
  };

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
    navigator.clipboard
      .writeText(PAYMENT_INFO.iban.replace(/\s/g, ""))
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-[#0f0d0b] sm:rounded-[24px] rounded-t-[24px] border border-gold/20 shadow-[0_-8px_50px_-10px_rgba(212,175,55,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        {/* ===== STEP 1: Paywall Hero ===== */}
        {step === "paywall" && (
          <div className="px-6 pt-10 pb-8 sm:px-8 sm:pt-12">
            {/* Top badge */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 flex items-center justify-center border border-gold/30">
                  <Crown className="h-7 w-7 text-gold" />
                </div>
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full border border-gold/20 animate-pulse" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-center font-serif text-2xl sm:text-3xl text-white leading-tight">
              Acesso Total
            </h2>
            <p className="text-center mt-2 text-sm text-muted-foreground">
              {kindLabel} — <span className="text-foreground font-medium">{sectorName}</span>
            </p>

            {/* Price card */}
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/[0.03] border border-gold/25 p-6 text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Investimento único</p>
              <p className="mt-2 font-serif text-4xl sm:text-5xl text-gold">{formatKz(amount)}</p>
              <p className="mt-1 text-xs text-muted-foreground">{validityLabel(kind)}</p>
            </div>

            {/* Benefits grid */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { icon: BookOpen, text: "Todas as aulas" },
                { icon: Target, text: "Todos os quizzes" },
                { icon: Rocket, text: "Simulados completos" },
                { icon: Shield, text: "Suporte via WhatsApp" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                    <b.icon className="h-4 w-4 text-gold" />
                  </div>
                  <span className="text-xs text-foreground">{b.text}</span>
                </div>
              ))}
            </div>

            {/* Key message */}
            <div className="mt-5 rounded-xl border border-gold/15 bg-gold/[0.04] p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-gold mt-0.5" />
                <div>
                  <p className="text-sm text-foreground font-medium">
                    Estuda na tua ordem
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    Podes pular aulas e avançar livremente, sem precisar seguir roboticamente. Todas as aulas deste sector ficam desbloqueadas de imediato.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA — duas opções */}
            <button
              onClick={handleInitiatePayment}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gold py-4 text-sm font-bold text-[#0f0d0b] transition-all hover:shadow-[0_8px_20px_-8px_rgba(212,175,55,0.5)] active:scale-[0.98]"
            >
              Fazer pagamento
              <ChevronRight className="h-4 w-4" />
            </button>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                requestPayment({
                  data: { studentId: student.id, kind, trackSlug, sectorSlug },
                }).catch(() => {});
              }}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-600/10 py-4 text-sm font-bold text-emerald-400 transition-all hover:bg-emerald-600/20 active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>

            <p className="mt-3 text-center text-[10px] text-muted-foreground/50">
              Pagamento por transferência bancária ou apoio directo por WhatsApp
            </p>

          </div>
        )}

        {/* ===== STEP 2: Payment Details ===== */}
        {step === "details" && (
          <div className="px-6 pt-10 pb-8 sm:px-8 sm:pt-12">
            {/* Back button */}
            <button
              onClick={() => setStep("paywall")}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-gold transition-colors mb-4"
            >
              <ChevronRight className="h-3 w-3 rotate-180" /> Voltar
            </button>

            <h3 className="font-serif text-xl text-white">Dados de pagamento</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Transferência bancária — qualquer banco em Angola
            </p>

            {/* Bank details card */}
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Crown className="h-4 w-4 text-gold" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
                  Transferência bancária
                </span>
              </div>
              <dl className="space-y-3 text-sm">
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
                      className={`flex-shrink-0 rounded-lg border p-2 transition-all active:scale-95 ${
                        copied
                          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                          : "border-white/10 bg-white/5 text-muted-foreground hover:border-gold/50 hover:text-gold"
                      }`}
                      aria-label="Copiar IBAN"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Steps */}
            <div className="mt-6 space-y-3 rounded-2xl border border-white/5 bg-white/[0.01] p-5">
              {[
                `Faça a transferência de ${formatKz(amount)} para o IBAN acima.`,
                "Envie o comprovativo aqui ou pelo WhatsApp abaixo.",
                "O acesso é activado após confirmação (até 24h).",
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-3 text-xs text-muted-foreground/80">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-[10px] font-bold text-gold">
                    {i + 1}
                  </span>
                  <p className="pt-0.5">{s}</p>
                </div>
              ))}
            </div>

            {/* Upload direto do comprovativo */}
            <div className="mt-6 rounded-2xl border border-gold/20 bg-gold/[0.04] p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                  <Upload className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Enviar comprovativo no site</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    O comprovativo fica associado a este pedido e aparece imediatamente no painel do administrador.
                  </p>
                </div>
              </div>
              <label className="mt-4 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-white/15 bg-black/20 px-4 py-3 transition-colors hover:border-gold/50">
                <FileCheck className="h-5 w-5 shrink-0 text-gold" />
                <span className="min-w-0 flex-1 truncate text-xs text-muted-foreground">
                  {proofFile ? proofFile.name : "Escolher JPG, PNG, WEBP ou PDF"}
                </span>
                <input
                  type="file"
                  className="sr-only"
                  accept="image/jpeg,image/png,image/webp,application/pdf"
                  onChange={(event) => {
                    setProofFile(event.target.files?.[0] ?? null);
                    setProofMessage(null);
                  }}
                />
              </label>
              <button
                type="button"
                onClick={handleProofSubmit}
                disabled={!proofFile || proofSubmitting || !requestId}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-gold/30 bg-gold/10 py-3 text-sm font-bold text-gold transition-colors hover:bg-gold/20 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {proofSubmitting ? "A enviar…" : "Enviar comprovativo"}
                <Upload className="h-4 w-4" />
              </button>
              {proofMessage && (
                <p className={`mt-3 flex items-start gap-2 text-xs leading-relaxed ${proofMessage.startsWith("Comprovativo") ? "text-emerald-400" : "text-amber-300"}`}>
                  <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  {proofMessage}
                </p>
              )}
              <p className="mt-2 text-center text-[10px] text-muted-foreground/60">Máximo de 5 MB.</p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-emerald-600 py-4 text-sm font-bold text-white transition-all hover:shadow-[0_8px_20px_-8px_rgba(22,163,74,0.5)] active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              Enviar comprovativo
            </a>
            <p className="mt-3 text-center text-[10px] leading-relaxed text-muted-foreground/60">
              WhatsApp: {PAYMENT_INFO.whatsapp}
              <br />
              A mensagem vai pré-preenchida com os seus dados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
