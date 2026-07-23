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

export interface EdictRow {
  id: string;
  kind: string;
  track_slug: string;
  sector_slug: string | null;
  title: string;
  description_md: string;
  deadline: string | null;
  source_url: string | null;
  published_at: string;
}

// Público — usado no site e no painel do aluno.
export const listEdicts = createServerFn({ method: "GET" }).handler(async (): Promise<EdictRow[]> => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data } = await supabaseAdmin
    .from("edicts")
    .select("*")
    .order("published_at", { ascending: false })
    .limit(100);
  return (data ?? []) as EdictRow[];
});

const CreateSchema = z.object({
  adminPhone: z.string(),
  kind: z.enum(["concurso", "preparatorio"]),
  trackSlug: z.string().min(1),
  sectorSlug: z.string().optional().nullable(),
  title: z.string().min(3),
  descriptionMd: z.string().default(""),
  deadline: z.string().optional().nullable(),
  sourceUrl: z.string().url().optional().nullable(),
});

export const adminCreateEdict = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => CreateSchema.parse(input))
  .handler(async ({ data }) => {
    assertAdmin(data.adminPhone);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: inserted, error } = await supabaseAdmin
      .from("edicts")
      .insert({
        kind: data.kind,
        track_slug: data.trackSlug,
        sector_slug: data.sectorSlug ?? null,
        title: data.title,
        description_md: data.descriptionMd,
        deadline: data.deadline ?? null,
        source_url: data.sourceUrl ?? null,
      })
      .select("*")
      .single();
    if (error) throw new Error(error.message);
    return inserted as EdictRow;
  });

const DeleteSchema = z.object({
  adminPhone: z.string(),
  id: z.string().uuid(),
});

export const adminDeleteEdict = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => DeleteSchema.parse(input))
  .handler(async ({ data }) => {
    assertAdmin(data.adminPhone);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    await supabaseAdmin.from("edicts").delete().eq("id", data.id);
    return { ok: true };
  });

// Editais para um sector específico — usado nas páginas de sector.
const BySectorSchema = z.object({
  kind: z.enum(["concurso", "preparatorio"]),
  trackSlug: z.string(),
  sectorSlug: z.string(),
});

export const listEdictsForSector = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => BySectorSchema.parse(input))
  .handler(async ({ data }): Promise<EdictRow[]> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows } = await supabaseAdmin
      .from("edicts")
      .select("*")
      .eq("kind", data.kind)
      .eq("track_slug", data.trackSlug)
      .or(`sector_slug.eq.${data.sectorSlug},sector_slug.is.null`)
      .order("published_at", { ascending: false });
    return (rows ?? []) as EdictRow[];
  });
