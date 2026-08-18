import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const StudentSchema = z.object({ studentId: z.string().uuid() });
const ReferralSchema = z.object({ referralCode: z.string().trim().min(3).max(32) });

function slugifySurname(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toUpperCase()
    .slice(0, 6) || "AMIGO";
}

function makeCode(surname: string): string {
  const suffix = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `${slugifySurname(surname)}-${suffix}`;
}

export async function recordAffiliateRegistration(
  supabaseAdmin: any,
  referredStudentId: string,
  referralCode?: string,
) {
  if (!referralCode) return { recorded: false };
  const code = referralCode.trim().toUpperCase();
  const { data: affiliate } = await (supabaseAdmin as any)
    .from("affiliates")
    .select("id, student_id")
    .eq("code", code)
    .maybeSingle();
  if (!affiliate || affiliate.student_id === referredStudentId) return { recorded: false };

  const { data: referral, error } = await (supabaseAdmin as any)
    .from("affiliate_referrals")
    .insert({
      affiliate_id: affiliate.id,
      referred_student_id: referredStudentId,
      code,
      status: "registered",
    })
    .select("id")
    .maybeSingle();

  if (error?.code === "23505") return { recorded: false, duplicate: true };
  if (error) throw new Error(`Falha ao guardar referência: ${error.message}`);
  if (referral) {
    const { data: current } = await (supabaseAdmin as any)
      .from("affiliates")
      .select("registered_referrals")
      .eq("id", affiliate.id)
      .single();
    await (supabaseAdmin as any)
      .from("affiliates")
      .update({ registered_referrals: (current?.registered_referrals ?? 0) + 1 })
      .eq("id", affiliate.id);
  }
  return { recorded: Boolean(referral) };
}

export const ensureAffiliateProfile = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => StudentSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: current } = await (supabaseAdmin as any)
      .from("affiliates")
      .select("id, code")
      .eq("student_id", data.studentId)
      .maybeSingle();
    if (current) return current;

    const { data: student } = await (supabaseAdmin as any)
      .from("students")
      .select("surname")
      .eq("id", data.studentId)
      .single();
    if (!student) throw new Error("Aluno não encontrado");

    for (let attempt = 0; attempt < 3; attempt += 1) {
      const { data: created, error } = await (supabaseAdmin as any)
        .from("affiliates")
        .insert({ student_id: data.studentId, code: makeCode(student.surname) })
        .select("id, code")
        .single();
      if (!error && created) return created;
      if (error?.code !== "23505") throw new Error(error?.message ?? "Falha ao criar código");
    }
    throw new Error("Não foi possível criar um código único");
  });

export const getAffiliateDashboard = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => StudentSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const profile = await ensureAffiliateProfile({ data });
    const { data: affiliate } = await (supabaseAdmin as any)
      .from("affiliates")
      .select("id, code, clicks, registered_referrals, approved_referrals, reward_balance_kz, created_at")
      .eq("student_id", data.studentId)
      .single();
    if (!affiliate) throw new Error("Perfil de afiliado não encontrado");

    const { data: referrals } = await (supabaseAdmin as any)
      .from("affiliate_referrals")
      .select("id, status, created_at, converted_at, students!affiliate_referrals_referred_student_id_fkey(surname)")
      .eq("affiliate_id", affiliate.id)
      .order("created_at", { ascending: false })
      .limit(20);

    return {
      ...affiliate,
      profile,
      referralPath: `/entrar?ref=${encodeURIComponent(affiliate.code)}`,
      referrals: (referrals ?? []).map((row: any) => ({
        id: row.id,
        status: row.status,
        createdAt: row.created_at,
        convertedAt: row.converted_at,
        surname: row.students?.surname ?? "Novo aluno",
      })),
    };
  });

export const recordReferralClick = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ReferralSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: affiliate } = await (supabaseAdmin as any)
      .from("affiliates")
      .select("id, clicks")
      .eq("code", data.referralCode.toUpperCase())
      .maybeSingle();
    if (!affiliate) return { recorded: false };
    const { error } = await (supabaseAdmin as any)
      .from("affiliates")
      .update({ clicks: affiliate.clicks + 1 })
      .eq("id", affiliate.id);
    return { recorded: !error };
  });
