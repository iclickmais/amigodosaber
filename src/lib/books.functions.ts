import { createServerFn } from "@tanstack/react-start";

const ADMIN_PHONE = "+244921346544";

export type BookRow = {
  id: string;
  title: string;
  author: string;
  category_slug: string;
  subcategory_slug: string;
  price_kz: number;
  cover_url: string | null;
  description: string;
  tags: string[];
  relevance: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

async function publicClient() {
  const { createClient } = await import("@supabase/supabase-js");
  const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
  return createClient(process.env.SUPABASE_URL!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

export const listBooks = createServerFn({ method: "GET" })
  .inputValidator(
    (input: { category?: string; subcategory?: string; limit?: number; offset?: number }) => input,
  )
  .handler(async ({ data }): Promise<{ items: BookRow[]; total: number }> => {
    const supabase = await publicClient();
    let q = supabase
      .from("books")
      .select("*", { count: "exact" })
      .eq("is_published", true)
      .order("relevance", { ascending: false })
      .order("created_at", { ascending: false });
    if (data.category) q = q.eq("category_slug", data.category);
    if (data.subcategory) q = q.eq("subcategory_slug", data.subcategory);
    const offset = data.offset ?? 0;
    const limit = Math.min(data.limit ?? 48, 200);
    q = q.range(offset, offset + limit - 1);
    const { data: rows, count, error } = await q;
    if (error) throw new Error(error.message);
    return { items: (rows ?? []) as BookRow[], total: count ?? 0 };
  });

export const getBookById = createServerFn({ method: "GET" })
  .inputValidator((input: { id: string }) => input)
  .handler(async ({ data }): Promise<BookRow | null> => {
    const supabase = await publicClient();
    const { data: row, error } = await supabase
      .from("books")
      .select("*")
      .eq("id", data.id)
      .eq("is_published", true)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return (row as BookRow | null) ?? null;
  });

export const adminListBooks = createServerFn({ method: "GET" })
  .inputValidator((input: { adminPhone: string }) => input)
  .handler(async ({ data }): Promise<BookRow[]> => {
    if (data.adminPhone !== ADMIN_PHONE) throw new Error("Não autorizado.");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows, error } = await supabaseAdmin
      .from("books")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(500);
    if (error) throw new Error(error.message);
    return (rows ?? []) as BookRow[];
  });

export const adminCreateBook = createServerFn({ method: "POST" })
  .inputValidator(
    (input: {
      adminPhone: string;
      title: string;
      author: string;
      category_slug: string;
      subcategory_slug: string;
      price_kz: number;
      cover_url?: string;
      description?: string;
      relevance?: number;
    }) => input,
  )
  .handler(async ({ data }): Promise<{ id: string }> => {
    if (data.adminPhone !== ADMIN_PHONE) throw new Error("Não autorizado.");
    if (!data.title.trim()) throw new Error("Título obrigatório.");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row, error } = await supabaseAdmin
      .from("books")
      .insert({
        title: data.title.trim(),
        author: data.author.trim(),
        category_slug: data.category_slug,
        subcategory_slug: data.subcategory_slug,
        price_kz: Math.max(0, Math.round(data.price_kz)),
        cover_url: data.cover_url?.trim() || null,
        description: data.description?.trim() ?? "",
        relevance: data.relevance ?? 0,
        is_published: true,
      })
      .select("id")
      .single();
    if (error) throw new Error(error.message);
    return { id: row.id as string };
  });

export const adminDeleteBook = createServerFn({ method: "POST" })
  .inputValidator((input: { adminPhone: string; id: string }) => input)
  .handler(async ({ data }): Promise<{ ok: true }> => {
    if (data.adminPhone !== ADMIN_PHONE) throw new Error("Não autorizado.");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("books").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
