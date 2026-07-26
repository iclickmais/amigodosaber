import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Schema for sending a chat message.
 */
const SendMessageSchema = z.object({
  studentId: z.string().uuid(),
  content: z.string().min(1).max(500),
});

/**
 * Server function to send a chat message.
 */
export const sendChatMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => SendMessageSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("chat_messages").insert({
      student_id: data.studentId,
      content: data.content,
    });

    if (error) {
      console.error("Failed to send chat message:", error);
      throw new Error(error.message);
    }

    return { success: true };
  });

/**
 * Schema for fetching chat messages.
 */
const GetMessagesSchema = z.object({
  limit: z.number().int().min(1).max(100).default(50),
  offset: z.number().int().min(0).default(0),
});

/**
 * Server function to get chat messages with author info.
 */
export const getChatMessages = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => GetMessagesSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: messages, error } = await supabaseAdmin
      .from("chat_messages_with_profiles")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(data.limit)
      .offset(data.offset);

    if (error) {
      console.error("Failed to fetch chat messages:", error);
      throw new Error(error.message);
    }

    return messages.reverse(); // Return in chronological order
  });

/**
 * Schema for updating student presence.
 */
const UpdatePresenceSchema = z.object({
  studentId: z.string().uuid(),
  isOnline: z.boolean().default(true),
});

/**
 * Server function to update student presence.
 */
export const updateStudentPresence = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => UpdatePresenceSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("student_presence").upsert(
      {
        student_id: data.studentId,
        last_seen_at: new Date().toISOString(),
        is_online: data.isOnline,
      },
      { onConflict: "student_id" }
    );

    if (error) {
      console.error("Failed to update student presence:", error);
      throw new Error(error.message);
    }

    return { success: true };
  });

/**
 * Schema for getting online students.
 */
const GetOnlineStudentsSchema = z.object({
  limit: z.number().int().min(1).max(100).default(50),
});

/**
 * Server function to get a list of online students.
 */
export const getOnlineStudents = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => GetOnlineStudentsSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: onlineStudents, error } = await supabaseAdmin
      .from("student_presence")
      .select("student_id, students(surname)")
      .eq("is_online", true)
      .limit(data.limit);

    if (error) {
      console.error("Failed to fetch online students:", error);
      throw new Error(error.message);
    }

    return onlineStudents.map((s: any) => ({
      studentId: s.student_id,
      surname: s.students.surname,
    }));
  });
