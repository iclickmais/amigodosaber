import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { buildWhatsAppLink } from "@/lib/payment-info";

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
        .order("created_at", { ascending: false }),
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

    const decorate = async (r: {
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
      proof_path?: string | null;
      proof_name?: string | null;
      proof_mime?: string | null;
      proof_uploaded_at?: string | null;
    }) => {
      let proofUrl: string | null = null;
      if (r.proof_path) {
        const { data: signed } = await supabaseAdmin.storage
          .from("payment-proofs")
          .createSignedUrl(r.proof_path, 60 * 60);
        proofUrl = signed?.signedUrl ?? null;
      }
      return {
        ...r,
        proofUrl,
        student: studentMap.get(r.student_id) ?? { surname: "—", phone: "—" },
      };
    };

    return {
      pending: await Promise.all((pending ?? []).map(decorate)),
      recent: await Promise.all((approved ?? []).map(decorate)),
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
      const { error: updateError } = await supabaseAdmin
        .from("access_grants")
        .update({ expires_at: expiresAt })
        .eq("id", existing.id);
      if (updateError) throw new Error(`Falha ao atualizar acesso: ${updateError.message}`);
    } else {
      const { error: insertError } = await supabaseAdmin.from("access_grants").insert({
        student_id: req.student_id,
        kind: req.kind,
        track_slug: req.track_slug,
        sector_slug: req.sector_slug,
        expires_at: expiresAt,
      });
      if (insertError) throw new Error(`Falha ao criar acesso: ${insertError.message}`);
    }

    // Criar as notificações antes de confirmar o pedido. Se esta etapa falhar,
    // o pagamento não é marcado como aprovado e o administrador vê o erro.
    if (req.status === "pending") {
      const { data: student } = await supabaseAdmin
        .from("students")
        .select("surname, phone")
        .eq("id", req.student_id)
        .single();
      if (!student) throw new Error("Aluno do pedido não encontrado");

      const whatsappUrl = buildWhatsAppLink({
        studentName: student.surname,
        studentPhone: student.phone,
        kind: req.kind,
        trackName: req.track_name,
        sectorName: req.sector_name,
        amountKz: req.amount_kz,
      });
      const notificationRows = [
        {
          student_id: req.student_id,
          notification_type: "payment_approved",
          title: "Acesso liberado!",
          body: `O seu acesso a ${req.sector_name} foi aprovado. Já pode entrar na sala de aula e começar a estudar.`,
          status: "pending",
          channel: "in_app",
          metadata: { request_id: req.id, kind: req.kind, track_slug: req.track_slug, sector_slug: req.sector_slug },
        },
        {
          student_id: req.student_id,
          notification_type: "payment_approved",
          title: "Confirmação do Amigo do Saber",
          body: `O seu acesso a ${req.sector_name} foi aprovado. Toque para falar connosco pelo WhatsApp.`,
          status: "pending",
          channel: "whatsapp",
          delivery_url: whatsappUrl,
          metadata: { request_id: req.id, kind: req.kind, track_slug: req.track_slug, sector_slug: req.sector_slug },
        },
      ];
      const { error: notificationError } = await supabaseAdmin.from("notifications").insert(notificationRows);
      if (notificationError) throw new Error(`Falha ao criar notificação de aprovação: ${notificationError.message}`);
    }

    const { error: statusError } = await supabaseAdmin
      .from("payment_requests")
      .update({ status: "approved" })
      .eq("id", req.id);
    if (statusError) throw new Error(`Falha ao atualizar status do pedido: ${statusError.message}`);

    return { ok: true, notificationQueued: req.status === "pending" };
  });

export const adminRejectPayment = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => DecideSchema.parse(input))
  .handler(async ({ data }) => {
    assertAdmin(data.adminPhone);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    
    // Primeiro, remover qualquer acesso que possa existir para este sector/estudante (em caso de revogação)
    const { data: req } = await supabaseAdmin
      .from("payment_requests")
      .select("student_id, kind, track_slug, sector_slug")
      .eq("id", data.requestId)
      .single();
    
    if (req) {
      await supabaseAdmin
        .from("access_grants")
        .delete()
        .eq("student_id", req.student_id)
        .eq("kind", req.kind)
        .eq("track_slug", req.track_slug)
        .eq("sector_slug", req.sector_slug);
    }

    const { error: statusError } = await supabaseAdmin
      .from("payment_requests")
      .update({ status: "rejected" })
      .eq("id", data.requestId);
    
    if (statusError) throw new Error(`Falha ao rejeitar pedido: ${statusError.message}`);
    
    return { ok: true };
  });
