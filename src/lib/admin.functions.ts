import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ADMIN_PHONE = "+244921346544";

function normalizePhone(raw: string): string {
  const digits = raw.replace(/[^\d]/g, "");
  if (digits.startsWith("244")) return "+" + digits;
  if (digits.length === 9) return "+244" + digits;
  return raw.startsWith("+") ? raw.replace(/\s|-/g, "") : "+" + digits;
}

function assertAdmin(phone: string) {
  if (normalizePhone(phone) !== ADMIN_PHONE) {
    throw new Error("Acesso negado");
  }
}

const AdminAuthSchema = z.object({ adminPhone: z.string() });

export const adminLogin = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AdminAuthSchema.parse(input))
  .handler(async ({ data }) => {
    assertAdmin(data.adminPhone);
    return { ok: true, phone: ADMIN_PHONE };
  });

export const adminOverview = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AdminAuthSchema.parse(input))
  .handler(async ({ data }) => {
    assertAdmin(data.adminPhone);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const [{ data: pending }, { data: approved }, { data: students }] = await Promise.all([
      supabaseAdmin
        .from("payment_requests")
        .select("*")
        .eq("status", "pending")
        .order("created_at", { ascending: false }),
      supabaseAdmin
        .from("payment_requests")
        .select("*")
        .in("status", ["approved", "rejected"])
        .order("created_at", { ascending: false })
        .limit(30),
      supabaseAdmin
        .from("students")
        .select("id, phone, surname, created_at")
        .order("created_at", { ascending: false })
        .limit(100),
    ]);

    // Join student info onto payment requests
    const ids = Array.from(
      new Set([...(pending ?? []), ...(approved ?? [])].map((r) => r.student_id)),
    );
    const studentMap = new Map<string, { surname: string; phone: string }>();
    if (ids.length) {
      const { data: rows } = await supabaseAdmin
        .from("students")
        .select("id, surname, phone")
        .in("id", ids);
      (rows ?? []).forEach((r) => studentMap.set(r.id, { surname: r.surname, phone: r.phone }));
    }

    const decorate = (r: {
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
    }) => ({
      ...r,
      student: studentMap.get(r.student_id) ?? { surname: "—", phone: "—" },
    });

    return {
      pending: (pending ?? []).map(decorate),
      recent: (approved ?? []).map(decorate),
      students: students ?? [],
    };
  });

const DecideSchema = z.object({
  adminPhone: z.string(),
  requestId: z.string().uuid(),
});

export const adminApprovePayment = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => DecideSchema.parse(input))
  .handler(async ({ data }) => {
    assertAdmin(data.adminPhone);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: req, error } = await supabaseAdmin
      .from("payment_requests")
      .select("*")
      .eq("id", data.requestId)
      .single();
    if (error || !req) throw new Error("Pedido não encontrado");

    // Concurso e Preparatório: 3 meses (90 dias) de acesso.
    const expiresAt = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString();

    // Upsert grant
    const { data: existing } = await supabaseAdmin
      .from("access_grants")
      .select("id")
      .eq("student_id", req.student_id)
      .eq("kind", req.kind)
      .eq("track_slug", req.track_slug)
      .eq("sector_slug", req.sector_slug)
      .maybeSingle();

    if (existing) {
      await supabaseAdmin
        .from("access_grants")
        .update({ expires_at: expiresAt })
        .eq("id", existing.id);
    } else {
      await supabaseAdmin.from("access_grants").insert({
        student_id: req.student_id,
        kind: req.kind,
        track_slug: req.track_slug,
        sector_slug: req.sector_slug,
        expires_at: expiresAt,
      });
    }

    await supabaseAdmin
      .from("payment_requests")
      .update({ status: "approved" })
      .eq("id", req.id);

    return { ok: true };
  });

export const adminRejectPayment = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => DecideSchema.parse(input))
  .handler(async ({ data }) => {
    assertAdmin(data.adminPhone);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    await supabaseAdmin
      .from("payment_requests")
      .update({ status: "rejected" })
      .eq("id", data.requestId);
    return { ok: true };
  });
