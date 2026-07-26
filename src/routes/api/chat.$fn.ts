import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { sendChatMessage, getChatMessages, updateStudentPresence, getOnlineStudents } from "@/lib/chat.functions";

export const Route = createFileRoute("/api/chat/$fn")({
  server: {
    handlers: {
      POST: async ({ params, request }) => {
        const fn = params.fn;
        const body = await request.json();

        switch (fn) {
          case "sendMessage":
            return new Response(JSON.stringify(await sendChatMessage(body)), {
              headers: { "Content-Type": "application/json" },
            });
          case "getMessages":
            return new Response(JSON.stringify(await getChatMessages(body)), {
              headers: { "Content-Type": "application/json" },
            });
          case "updatePresence":
            return new Response(JSON.stringify(await updateStudentPresence(body)), {
              headers: { "Content-Type": "application/json" },
            });
          case "getOnlineStudents":
            return new Response(JSON.stringify(await getOnlineStudents(body)), {
              headers: { "Content-Type": "application/json" },
            });
          default:
            return new Response("Not Found", { status: 404 });
        }
      },
    },
  },
});
