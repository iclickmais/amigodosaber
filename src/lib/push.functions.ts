import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const StudentSchema = z.object({ studentId: z.string().uuid() });
const SubscriptionSchema = z.object({
  studentId: z.string().uuid(),
  endpoint: z.string().url(),
  keys: z.object({ p256dh: z.string().min(10), auth: z.string().min(5) }),
  userAgent: z.string().max(500).optional(),
});

function vapidConfig() {
  return {
    publicKey: process.env.VAPID_PUBLIC_KEY,
    privateKey: process.env.VAPID_PRIVATE_KEY,
    subject: process.env.VAPID_SUBJECT || "mailto:suporte@amigodosaber.com",
  };
}

export const getPushPublicKey = createServerFn({ method: "GET" }).handler(async () => {
  return { publicKey: vapidConfig().publicKey ?? null };
});

export const registerPushSubscription = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => SubscriptionSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const db = supabaseAdmin as any;
    const { error: subscriptionError } = await db
      .from("push_subscriptions")
      .upsert(
        {
          student_id: data.studentId,
          endpoint: data.endpoint,
          p256dh: data.keys.p256dh,
          auth: data.keys.auth,
          user_agent: data.userAgent ?? null,
          enabled: true,
          last_seen_at: new Date().toISOString(),
        },
        { onConflict: "endpoint" },
      );
    if (subscriptionError) throw new Error(subscriptionError.message);

    const { error: preferenceError } = await db
      .from("notification_preferences")
      .upsert(
        { student_id: data.studentId, push_enabled: true, updated_at: new Date().toISOString() },
        { onConflict: "student_id" },
      );
    if (preferenceError) throw new Error(preferenceError.message);
    return { enabled: true };
  });

export const disablePushNotifications = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => StudentSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const db = supabaseAdmin as any;
    await db.from("push_subscriptions").update({ enabled: false }).eq("student_id", data.studentId);
    await db.from("notification_preferences").upsert(
      { student_id: data.studentId, push_enabled: false, updated_at: new Date().toISOString() },
      { onConflict: "student_id" },
    );
    return { enabled: false };
  });

export const getPushStatus = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => StudentSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const db = supabaseAdmin as any;
    const { data: preference } = await db
      .from("notification_preferences")
      .select("push_enabled, inactivity_reminders")
      .eq("student_id", data.studentId)
      .maybeSingle();
    return {
      enabled: Boolean(preference?.push_enabled),
      inactivityReminders: preference?.inactivity_reminders !== false,
      configured: Boolean(vapidConfig().publicKey),
    };
  });

export async function sendPushNotification(
  supabaseAdmin: any,
  studentId: string,
  payload: { title: string; body: string; url?: string },
) {
  const config = vapidConfig();
  if (!config.publicKey || !config.privateKey) return { sent: 0, configured: false };
  const { data: subscriptions } = await supabaseAdmin
    .from("push_subscriptions")
    .select("id, endpoint, p256dh, auth")
    .eq("student_id", studentId)
    .eq("enabled", true);
  if (!subscriptions?.length) return { sent: 0, configured: true };

  const webPushModule = await import("web-push");
  const webPush = webPushModule.default ?? webPushModule;
  webPush.setVapidDetails(config.subject, config.publicKey, config.privateKey);
  let sent = 0;
  for (const subscription of subscriptions) {
    try {
      await webPush.sendNotification(
        {
          endpoint: subscription.endpoint,
          keys: { p256dh: subscription.p256dh, auth: subscription.auth },
        },
        JSON.stringify({ ...payload, icon: "/icon-512.png", badge: "/favicon.png" }),
      );
      sent += 1;
    } catch (error: any) {
      const statusCode = error?.statusCode;
      if (statusCode === 404 || statusCode === 410) {
        await supabaseAdmin.from("push_subscriptions").update({ enabled: false }).eq("id", subscription.id);
      }
    }
  }
  return { sent, configured: true };
}
