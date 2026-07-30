/**
 * Integration points for notifications in study.functions.ts
 * 
 * This file documents where to add notification triggers in the existing
 * study.functions.ts file. Copy these code snippets into the appropriate
 * locations in study.functions.ts
 */

// ============================================================================
// INTEGRATION 1: Add to submitAttempt handler (after markMasteries call)
// Location: src/lib/study.functions.ts, around line 366
// ============================================================================

// After line 366 (after markMasteries call), add:

/*
    // Trigger notification if this is a free lesson (first module)
    const { trackLessonCompletion } = await import("@/lib/notifications.functions");
    
    // Find the lesson info from the quiz
    const { data: quizData } = await supabaseAdmin
      .from("quizzes")
      .select("lessons(track_kind, track_slug, sector_slug, module_slug, lesson_slug)")
      .eq("id", data.quizId)
      .single();
    
    if (quizData?.lessons) {
      const lesson = quizData.lessons as any;
      const sector = getSector(
        lesson.track_kind as TrackKind,
        lesson.track_slug,
        lesson.sector_slug
      );
      
      if (sector) {
        // Check if this lesson is in the first module (free for all)
        const firstModuleSlug = sector.sector.modules.length > 0 ? sector.sector.modules[0].slug : null;
        const isFirstModule = firstModuleSlug !== null && lesson.module_slug === firstModuleSlug;
        
        if (isFirstModule) {
          const allLessons = sector.sector.modules[0].lessons;
          const lessonIndex = allLessons.findIndex(l => l.slug === lesson.lesson_slug);
          await trackLessonCompletion({
            studentId: data.studentId,
            lessonIndex,
            sectorSlug: lesson.sector_slug,
          });
        }
      }
    }
*/

// ============================================================================
// INTEGRATION 2: Add notification type exports to study.functions.ts
// Location: At the top of src/lib/study.functions.ts, after imports
// ============================================================================

// Add this export:
/*
export { 
  NotificationType, 
  NotificationStatus,
  trackLessonCompletion,
  checkAndQueueInactivityNotifications,
  checkAndQueueAbandonedPaymentNotifications,
  sendPendingNotifications,
} from "@/lib/notifications.functions";
*/

// ============================================================================
// INTEGRATION 3: Add to payment request creation
// Location: In a new payment.functions.ts or similar
// ============================================================================

// When a payment request is created, also track it for abandoned payment notifications:

/*
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const createPaymentRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => PaymentRequestSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    
    // Create payment request
    const { data: paymentRequest, error } = await supabaseAdmin
      .from("payment_requests")
      .insert({
        student_id: data.studentId,
        kind: data.kind,
        track_slug: data.trackSlug,
        sector_slug: data.sectorSlug,
        track_name: data.trackName,
        sector_name: data.sectorName,
        amount_kz: data.amountKz,
        status: "pending",
      })
      .select()
      .single();
    
    if (error || !paymentRequest) {
      throw new Error(error?.message ?? "Failed to create payment request");
    }
    
    return paymentRequest;
  });
*/

// ============================================================================
// INTEGRATION 4: Scheduled job configuration
// Location: Backend scheduled task (e.g., in a cron job handler)
// ============================================================================

// This should be called periodically (e.g., every 6 hours):

/*
import {
  checkAndQueueInactivityNotifications,
  checkAndQueueAbandonedPaymentNotifications,
  sendPendingNotifications,
} from "@/lib/notifications.functions";

export async function runNotificationFunnelJob() {
  console.log("Running notification funnel job...");
  
  try {
    // Check for inactivity (3 days threshold)
    const inactivityResult = await checkAndQueueInactivityNotifications({
      inactivityThresholdDays: 3,
    });
    console.log(`Inactivity check: ${inactivityResult.notificationsQueued} notifications queued`);
    
    // Check for abandoned payments (24 hours threshold)
    const abandonedResult = await checkAndQueueAbandonedPaymentNotifications({
      abandonmentThresholdHours: 24,
    });
    console.log(`Abandoned payment check: ${abandonedResult.notificationsQueued} notifications queued`);
    
    // Send all pending notifications
    const sendResult = await sendPendingNotifications();
    console.log(`Sent ${sendResult.notificationsSent} notifications`);
    
    return {
      success: true,
      inactivityQueued: inactivityResult.notificationsQueued,
      abandonedQueued: abandonedResult.notificationsQueued,
      sent: sendResult.notificationsSent,
    };
  } catch (error) {
    console.error("Notification funnel job failed:", error);
    throw error;
  }
}
*/

// ============================================================================
// INTEGRATION 5: Frontend - Display notifications to user
// Location: In a component that shows notifications (e.g., NotificationCenter.tsx)
// ============================================================================

// Example component to fetch and display notifications:

/*
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { NotificationPayload } from "@/lib/notifications.functions";

export function NotificationCenter({ studentId }: { studentId: string }) {
  const [notifications, setNotifications] = useState<NotificationPayload[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .eq("student_id", studentId)
        .order("created_at", { ascending: false })
        .limit(10);

      if (error) {
        console.error("Failed to fetch notifications:", error);
      } else {
        setNotifications(data as NotificationPayload[]);
      }
      setLoading(false);
    };

    fetchNotifications();

    // Subscribe to real-time updates
    const subscription = supabase
      .channel(`notifications:${studentId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "notifications",
          filter: `student_id=eq.${studentId}`,
        },
        (payload) => {
          setNotifications((prev) => [payload.new as NotificationPayload, ...prev]);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [studentId]);

  if (loading) return <div>Loading notifications...</div>;

  return (
    <div className="space-y-2">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className="p-4 bg-blue-50 border border-blue-200 rounded-lg"
        >
          <h3 className="font-bold text-blue-900">{notif.title}</h3>
          <p className="text-blue-800">{notif.body}</p>
          <p className="text-xs text-blue-600 mt-2">
            {new Date(notif.created_at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
*/

export {};
