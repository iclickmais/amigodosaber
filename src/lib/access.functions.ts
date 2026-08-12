import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSector, type TrackKind } from "@/lib/study-tracks";
import { priceFor } from "@/lib/payment-info";

const AccessKeySchema = z.object({
  studentId: z.string().uuid(),
  kind: z.enum(["concurso", "preparatorio"]),
  trackSlug: z.string(),
  sectorSlug: z.string(),
});

export interface AccessStatus {
  hasAccess: boolean;
  expiresAt: string | null;
}

export async function checkAccess(
  studentId: string,
  kind: TrackKind,
  trackSlug: string,
  sectorSlug: string,
): Promise<AccessStatus> {
  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data } = await supabaseAdmin
      .from("access_grants")
      .select("expires_at")
      .eq("student_id", studentId)
      .eq("kind", kind)
      .eq("track_slug", trackSlug)
      .eq("sector_slug", sectorSlug)
      .maybeSingle();
    if (!data) return { hasAccess: false, expiresAt: null };
    if (data.expires_at && new Date(data.expires_at).getTime() < Date.now()) {
      return { hasAccess: false, expiresAt: data.expires_at };
    }
    return { hasAccess: true, expiresAt: data.expires_at };
  } catch (err) {
    console.warn("Supabase checkAccess fallback:", err);
    return { hasAccess: false, expiresAt: null };
  }
}

export const getAccessStatus = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AccessKeySchema.parse(input))
  .handler(async ({ data }): Promise<AccessStatus> => {
    return checkAccess(data.studentId, data.kind as TrackKind, data.trackSlug, data.sectorSlug);
  });

export const requestPayment = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AccessKeySchema.parse(input))
  .handler(async ({ data }) => {
    const found = getSector(data.kind as TrackKind, data.trackSlug, data.sectorSlug);
    if (!found) throw new Error("Sector não encontrado");
    const amount = priceFor(data.kind);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: request, error } = await supabaseAdmin
      .from("payment_requests")
      .insert({
        student_id: data.studentId,
        kind: data.kind,
        track_slug: data.trackSlug,
        sector_slug: data.sectorSlug,
        track_name: found.track.name,
        sector_name: found.sector.name,
        amount_kz: amount,
      })
      .select("id, amount_kz, status")
      .single();
    if (error || !request) throw new Error(error?.message ?? "Não foi possível criar o pedido de pagamento");
    return { ok: true, amount, requestId: request.id, status: request.status };
  });

const PaymentProofSchema = z.object({
  requestId: z.string().uuid(),
  studentId: z.string().uuid(),
  fileName: z.string().min(1).max(180),
  mimeType: z.enum(["image/jpeg", "image/png", "image/webp", "application/pdf"]),
  base64: z.string().min(32).max(7_000_000),
});

export const submitPaymentProof = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => PaymentProofSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: request, error: requestError } = await supabaseAdmin
      .from("payment_requests")
      .select("id, student_id, status")
      .eq("id", data.requestId)
      .eq("student_id", data.studentId)
      .single();
    if (requestError || !request) throw new Error("Pedido de pagamento não encontrado");
    if (request.status !== "pending") throw new Error("Este pedido já foi processado");

    const extension = data.mimeType === "application/pdf" ? "pdf" : data.mimeType.split("/")[1];
    const path = `${data.studentId}/${data.requestId}-${Date.now()}.${extension}`;
    const buffer = Buffer.from(data.base64.replace(/^data:[^;]+;base64,/, ""), "base64");
    if (buffer.length === 0 || buffer.length > 5 * 1024 * 1024) {
      throw new Error("O comprovativo deve ter entre 1 byte e 5 MB");
    }

    const { error: uploadError } = await supabaseAdmin.storage
      .from("payment-proofs")
      .upload(path, buffer, { contentType: data.mimeType, upsert: true });
    if (uploadError) throw new Error(`Falha ao guardar comprovativo: ${uploadError.message}`);

    const { error: updateError } = await supabaseAdmin
      .from("payment_requests")
      .update({
        proof_path: path,
        proof_name: data.fileName,
        proof_mime: data.mimeType,
        proof_uploaded_at: new Date().toISOString(),
      })
      .eq("id", data.requestId)
      .eq("student_id", data.studentId);
    if (updateError) {
      await supabaseAdmin.storage.from("payment-proofs").remove([path]);
      throw new Error(`Falha ao registar comprovativo: ${updateError.message}`);
    }
    return { ok: true, requestId: data.requestId };
  });
