// Dados de pagamento manual — Amigo do Saber
export const PAYMENT_INFO = {
  iban: "0040 0000 4040 6279 1012 5",
  holder: "Fausto Silva",
  bank: "BAI",
  whatsapp: "+244 951 201 628",
  whatsappRaw: "244951201628",
  academicYear: "2026/2027",
} as const;

export function priceFor(kind: "concurso" | "preparatorio"): number {
  return kind === "concurso" ? 1000 : 2000;
}

export function validityLabel(_kind: "concurso" | "preparatorio"): string {
  return "3 meses de acesso";
}

export const ACCESS_DURATION_DAYS = 90;

export function formatKz(n: number): string {
  return new Intl.NumberFormat("pt-PT").format(n) + " Kz";
}

export function buildWhatsAppLink(params: {
  studentName: string;
  studentPhone: string;
  kind: "concurso" | "preparatorio";
  trackName: string;
  sectorName: string;
  amountKz: number;
}): string {
  const kindLabel = params.kind === "concurso" ? "Concurso Público" : "Preparatório";
  const msg =
    `Olá! Enviei o comprovativo de pagamento para *Amigo do Saber*.\n\n` +
    `👤 Nome: ${params.studentName}\n` +
    `📱 Telefone: ${params.studentPhone}\n` +
    `📚 Curso: ${kindLabel} — ${params.trackName} / ${params.sectorName}\n` +
    `💰 Valor: ${formatKz(params.amountKz)}\n\n` +
    `IBAN: ${PAYMENT_INFO.iban}\n` +
    `Titular: ${PAYMENT_INFO.holder} (${PAYMENT_INFO.bank})\n\n` +
    `Segue em anexo o comprovativo. Obrigado!`;
  return `https://wa.me/${PAYMENT_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
}
