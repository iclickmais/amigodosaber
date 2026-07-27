/**
 * Notification Scheduler
 * 
 * This module handles the scheduling and execution of notification funnel tasks.
 * It monitors:
 * 1. Lesson completion triggers
 * 2. Inactivity reminders (every 6 hours)
 * 3. Abandoned payment reminders (every 6 hours)
 * 4. Sending pending notifications
 * 
 * Integration with Manus Scheduled Tasks:
 * Use manus-config to set up recurring tasks that call these endpoints.
 */

import { createServerFn } from "@tanstack/react-start";

/**
 * Main notification funnel job
 * Should be called every 6 hours via scheduled task
 */
export const runNotificationFunnelJob = createServerFn({ method: "POST" })
  .handler(async () => {
    const {
      checkAndQueueInactivityNotifications,
      checkAndQueueAbandonedPaymentNotifications,
      sendPendingNotifications,
    } = await import("@/lib/notifications.functions");

    const results = {
      inactivityQueued: 0,
      abandonedQueued: 0,
      sent: 0,
      errors: [] as string[],
    };

    try {
      // Step 1: Check for inactivity (3 days threshold)
      console.log("[Notification Scheduler] Checking for inactivity...");
      const inactivityResult = await checkAndQueueInactivityNotifications({
        data: { inactivityThresholdDays: 3 },
      });


      if (inactivityResult.success) {
        results.inactivityQueued = inactivityResult.notificationsQueued;
        console.log(
          `[Notification Scheduler] Inactivity check: ${inactivityResult.notificationsQueued} notifications queued`
        );
      } else {
        results.errors.push(`Inactivity check failed: ${inactivityResult.message}`);
        console.error(
          `[Notification Scheduler] Inactivity check failed: ${inactivityResult.message}`
        );
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      results.errors.push(`Inactivity check error: ${errorMsg}`);
      console.error("[Notification Scheduler] Inactivity check error:", error);
    }

    try {
      // Step 2: Check for abandoned payments (24 hours threshold)
      console.log("[Notification Scheduler] Checking for abandoned payments...");
      const abandonedResult = await checkAndQueueAbandonedPaymentNotifications({
        data: { abandonmentThresholdHours: 24 },
      });


      if (abandonedResult.success) {
        results.abandonedQueued = abandonedResult.notificationsQueued;
        console.log(
          `[Notification Scheduler] Abandoned payment check: ${abandonedResult.notificationsQueued} notifications queued`
        );
      } else {
        results.errors.push(`Abandoned payment check failed: ${abandonedResult.message}`);
        console.error(
          `[Notification Scheduler] Abandoned payment check failed: ${abandonedResult.message}`
        );
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      results.errors.push(`Abandoned payment check error: ${errorMsg}`);
      console.error("[Notification Scheduler] Abandoned payment check error:", error);
    }

    try {
      // Step 3: Send all pending notifications
      console.log("[Notification Scheduler] Sending pending notifications...");
      const sendResult = await sendPendingNotifications();

      if (sendResult.success) {
        results.sent = sendResult.notificationsSent;
        console.log(
          `[Notification Scheduler] Sent ${sendResult.notificationsSent} notifications`
        );
      } else {
        results.errors.push(`Send notifications failed: ${sendResult.message}`);
        console.error(`[Notification Scheduler] Send notifications failed: ${sendResult.message}`);
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      results.errors.push(`Send notifications error: ${errorMsg}`);
      console.error("[Notification Scheduler] Send notifications error:", error);
    }

    console.log("[Notification Scheduler] Job completed:", results);

    return {
      success: results.errors.length === 0,
      results,
      timestamp: new Date().toISOString(),
    };
  });

/**
 * Health check endpoint for the notification scheduler
 * Use this to verify the scheduler is working
 */
export const notificationSchedulerHealthCheck = createServerFn({ method: "GET" })
  .handler(async () => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    try {
      // Check if notifications table exists and is accessible
      const { data, error } = await supabaseAdmin
        .from("notifications")
        .select("COUNT(*)")
        .limit(1);

      if (error) {
        return {
          status: "error",
          message: `Cannot access notifications table: ${error.message}`,
          timestamp: new Date().toISOString(),
        };
      }

      // Get statistics
      const { data: pendingCount } = await supabaseAdmin
        .from("notifications")
        .select("id", { count: "exact" })
        .eq("status", "pending");

      const { data: sentCount } = await supabaseAdmin
        .from("notifications")
        .select("id", { count: "exact" })
        .eq("status", "sent");

      return {
        status: "ok",
        message: "Notification scheduler is healthy",
        statistics: {
          pendingNotifications: pendingCount?.length ?? 0,
          sentNotifications: sentCount?.length ?? 0,
        },
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      return {
        status: "error",
        message: `Health check failed: ${errorMsg}`,
        timestamp: new Date().toISOString(),
      };
    }
  });

// Configuration for scheduled tasks.
// Endpoint: POST /api/runNotificationFunnelJob
// Suggested schedule: every 6 hours. Retry on failure: true, 3 attempts.
// Other options: every 4 hours, every 12 hours, daily at 09:00,
// or twice a day at 09:00 and 18:00.
// Cron syntax reference: https://crontab.guru/


export const NOTIFICATION_SCHEDULER_CONFIG = {
  name: "Notification Funnel Job",
  description: "Monitors and sends notification funnel messages to drive conversions",
  endpoint: "/api/runNotificationFunnelJob",
  method: "POST",
  schedule: "0 */6 * * *", // Every 6 hours
  timezone: "UTC",
  retryOnFailure: true,
  retryAttempts: 3,
  timeout: 300, // 5 minutes in seconds
};

/**
 * Manual trigger for testing
 * Call this to manually trigger the notification funnel job
 */
export const triggerNotificationFunnelJobManually = createServerFn({ method: "POST" })
  .handler(async () => {
    console.log("[Manual Trigger] Starting notification funnel job...");
    return await runNotificationFunnelJob();
  });

export {};
