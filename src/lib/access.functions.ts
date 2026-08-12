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
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      await supabaseAdmin.from("payment_requests").insert({
        student_id: data.studentId,
        kind: data.kind,
        track_slug: data.trackSlug,
        sector_slug: data.sectorSlug,
        track_name: found.track.name,
        sector_name: found.sector.name,
        amount_kz: amount,
      });
    } catch (err) {
      console.warn("Supabase requestPayment fallback:", err);
    }
    return { ok: true, amount };
  });
