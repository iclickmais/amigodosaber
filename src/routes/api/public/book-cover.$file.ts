import { createFileRoute } from "@tanstack/react-router";

// Serve real book cover photos stored in the private "book-covers" bucket.
export const Route = createFileRoute("/api/public/book-cover/$file")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const file = String(params.file ?? "");
        if (!file || file.includes("/") || file.includes("..")) {
          return new Response("Not found", { status: 404 });
        }
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data, error } = await supabaseAdmin.storage.from("book-covers").download(file);
        if (error || !data) return new Response("Not found", { status: 404 });
        const buffer = await data.arrayBuffer();
        return new Response(buffer, {
          status: 200,
          headers: {
            "content-type": data.type || "image/jpeg",
            "cache-control": "public, max-age=31536000, immutable",
          },
        });
      },
    },
  },
});
