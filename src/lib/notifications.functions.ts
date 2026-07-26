import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Notification types for the funnel
 */
export enum NotificationType {
  FIRST_LESSON_COMPLETED = "first_lesson_completed",
  SECOND_LESSON_COMPLETED = "second_lesson_completed",
  THIRD_LESSON_COMPLETED = "third_lesson_completed",
  INACTIVITY_REMINDER = "inactivity_reminder",
  ABANDONED_PAYMENT = "abandoned_payment",
}

/**
 * Notification status
 */
export enum NotificationStatus {
  PENDING = "pending",
  SENT = "sent",
  FAILED = "failed",
  DELIVERED = "delivered",
}

/**
 * Notification payload structure
 */
export interface NotificationPayload {
  id: string;
  student_id: string;
  notification_type: NotificationType;
  title: string;
  body: string;
  status: NotificationStatus;
  sent_at: string | null;
  created_at: string;
}

/**
 * Track when a lesson is completed and trigger appropriate notification
 */
const LessonCompletionSchema = z.object({
  studentId: z.string().uuid(),
  lessonIndex: z.number().int().min(0),
  sectorSlug: z.string(),
});

export const trackLessonCompletion = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LessonCompletionSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Determine notification type based on lesson index
    let notificationType: NotificationType | null = null;
    let title = "";
    let body = "";

    if (data.lessonIndex === 0) {
      notificationType = NotificationType.FIRST_LESSON_COMPLETED;
      title = "Parabéns! 🎉";
      body = "Completou a sua primeira aula no Amigo do Saber! Continue a aprender e a crescer.";
    } else if (data.lessonIndex === 1) {
      notificationType = NotificationType.SECOND_LESSON_COMPLETED;
      title = "Excelente Progresso! 📚";
      body = "Faltam apenas algumas aulas para desbloquear todo o potencial do Amigo do Saber. Explore os nossos planos de assinatura.";
    } else if (data.lessonIndex === 2) {
      notificationType = NotificationType.THIRD_LESSON_COMPLETED;
      title = "Fim das Aulas Gratuitas 🔓";
      body = "Chegou ao fim das suas aulas gratuitas! Para continuar a sua jornada de conhecimento, assine já o Amigo do Saber.";
    }

    if (!notificationType) {
      return { success: false, message: "Lesson index out of free range" };
    }

    // Insert notification into database
    const { data: notification, error } = await supabaseAdmin
      .from("notifications")
      .insert({
        student_id: data.studentId,
        notification_type: notificationType,
        title,
        body,
        status: NotificationStatus.PENDING,
      })
      .select()
      .single();

    if (error || !notification) {
      console.error("Failed to create notification:", error);
      return { success: false, message: error?.message ?? "Failed to create notification" };
    }

    // Queue the notification to be sent (this will be handled by a scheduled job)
    return { success: true, notificationId: notification.id };
  });

/**
 * Check for inactivity and queue reminder notifications
 * This should be called by a scheduled job
 */
const InactivityCheckSchema = z.object({
  inactivityThresholdDays: z.number().int().min(1).default(3),
});

export const checkAndQueueInactivityNotifications = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InactivityCheckSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Find students who:
    // 1. Have completed 3 free lessons (lesson_index >= 2)
    // 2. Have NOT subscribed (no active access_grant)
    // 3. Have NOT received an inactivity reminder in the last 24 hours
    // 4. Have been inactive for X days

    const thresholdDate = new Date();
    thresholdDate.setDate(thresholdDate.getDate() - data.inactivityThresholdDays);

    // Get all students who completed 3 lessons
    const { data: completedStudents } = await supabaseAdmin
      .from("progress")
      .select("student_id")
      .order("completed_at", { ascending: false });

    if (!completedStudents || completedStudents.length === 0) {
      return { success: true, notificationsQueued: 0 };
    }

    // Group by student_id and count completed lessons
    const studentLessonCounts = new Map<string, number>();
    completedStudents.forEach((record: any) => {
      const count = (studentLessonCounts.get(record.student_id) ?? 0) + 1;
      studentLessonCounts.set(record.student_id, count);
    });

    // Filter students with 3+ completed lessons
    const candidateStudents = Array.from(studentLessonCounts.entries())
      .filter(([_, count]) => count >= 3)
      .map(([studentId, _]) => studentId);

    if (candidateStudents.length === 0) {
      return { success: true, notificationsQueued: 0 };
    }

    // Check which students have active subscriptions
    const { data: activeSubscriptions } = await supabaseAdmin
      .from("access_grants")
      .select("student_id")
      .in("student_id", candidateStudents)
      .gt("expires_at", new Date().toISOString());

    const subscribedStudentIds = new Set(
      (activeSubscriptions ?? []).map((grant: any) => grant.student_id)
    );

    // Filter out subscribed students
    const unsubscribedStudents = candidateStudents.filter(
      (id) => !subscribedStudentIds.has(id)
    );

    // Check for recent inactivity reminders
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);

    const { data: recentReminders } = await supabaseAdmin
      .from("notifications")
      .select("student_id")
      .eq("notification_type", NotificationType.INACTIVITY_REMINDER)
      .gt("created_at", oneDayAgo.toISOString())
      .in("student_id", unsubscribedStudents);

    const recentReminderStudentIds = new Set(
      (recentReminders ?? []).map((notif: any) => notif.student_id)
    );

    // Final list: unsubscribed students without recent reminders
    const finalCandidates = unsubscribedStudents.filter(
      (id) => !recentReminderStudentIds.has(id)
    );

    if (finalCandidates.length === 0) {
      return { success: true, notificationsQueued: 0 };
    }

    // Insert inactivity reminder notifications
    const notifications = finalCandidates.map((studentId) => ({
      student_id: studentId,
      notification_type: NotificationType.INACTIVITY_REMINDER,
      title: "Sentimos a sua falta! 👋",
      body: "Não deixe o seu progresso parar. O Amigo do Saber tem muito mais para oferecer. Assine hoje e continue a aprender!",
      status: NotificationStatus.PENDING,
    }));

    const { error } = await supabaseAdmin
      .from("notifications")
      .insert(notifications);

    if (error) {
      console.error("Failed to queue inactivity notifications:", error);
      return { success: false, message: error.message };
    }

    return { success: true, notificationsQueued: notifications.length };
  });

/**
 * Check for abandoned payment requests and queue reminder notifications
 */
const AbandonedPaymentCheckSchema = z.object({
  abandonmentThresholdHours: z.number().int().min(1).default(24),
});

export const checkAndQueueAbandonedPaymentNotifications = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AbandonedPaymentCheckSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Find payment requests that are:
    // 1. Status = 'pending'
    // 2. Created more than X hours ago
    // 3. No recent abandoned payment reminder has been sent

    const thresholdDate = new Date();
    thresholdDate.setHours(thresholdDate.getHours() - data.abandonmentThresholdHours);

    const { data: abandonedPayments } = await supabaseAdmin
      .from("payment_requests")
      .select("id, student_id, track_name, sector_name")
      .eq("status", "pending")
      .lt("created_at", thresholdDate.toISOString());

    if (!abandonedPayments || abandonedPayments.length === 0) {
      return { success: true, notificationsQueued: 0 };
    }

    // Check for recent abandoned payment reminders
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);

    const { data: recentReminders } = await supabaseAdmin
      .from("notifications")
      .select("student_id")
      .eq("notification_type", NotificationType.ABANDONED_PAYMENT)
      .gt("created_at", oneDayAgo.toISOString())
      .in(
        "student_id",
        abandonedPayments.map((p: any) => p.student_id)
      );

    const recentReminderStudentIds = new Set(
      (recentReminders ?? []).map((notif: any) => notif.student_id)
    );

    // Filter out students who already received a reminder
    const finalCandidates = abandonedPayments.filter(
      (payment: any) => !recentReminderStudentIds.has(payment.student_id)
    );

    if (finalCandidates.length === 0) {
      return { success: true, notificationsQueued: 0 };
    }

    // Insert abandoned payment reminder notifications
    const notifications = finalCandidates.map((payment: any) => ({
      student_id: payment.student_id,
      notification_type: NotificationType.ABANDONED_PAYMENT,
      title: "A sua jornada de conhecimento está à espera! ⏳",
      body: `Notamos que iniciou um pedido de pagamento para ${payment.track_name} - ${payment.sector_name}. Complete-o agora para desbloquear acesso ilimitado.`,
      status: NotificationStatus.PENDING,
    }));

    const { error } = await supabaseAdmin
      .from("notifications")
      .insert(notifications);

    if (error) {
      console.error("Failed to queue abandoned payment notifications:", error);
      return { success: false, message: error.message };
    }

    return { success: true, notificationsQueued: notifications.length };
  });

/**
 * Send pending notifications (to be called by a scheduled job)
 */
export const sendPendingNotifications = createServerFn({ method: "POST" })
  .handler(async () => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Get all pending notifications
    const { data: pendingNotifications } = await supabaseAdmin
      .from("notifications")
      .select("id, student_id, title, body")
      .eq("status", NotificationStatus.PENDING)
      .limit(100);

    if (!pendingNotifications || pendingNotifications.length === 0) {
      return { success: true, notificationsSent: 0 };
    }

    // In a real implementation, this would call a push notification service
    // For now, we'll just mark them as sent
    const notificationIds = pendingNotifications.map((n: any) => n.id);

    const { error } = await supabaseAdmin
      .from("notifications")
      .update({ status: NotificationStatus.SENT, sent_at: new Date().toISOString() })
      .in("id", notificationIds);

    if (error) {
      console.error("Failed to update notification status:", error);
      return { success: false, message: error.message };
    }

    console.log(`Sent ${pendingNotifications.length} notifications`);
    return { success: true, notificationsSent: pendingNotifications.length };
  });
