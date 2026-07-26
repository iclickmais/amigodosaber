-- =====================================================
-- NOTIFICATIONS TABLE — Funil de Vendas via Push
-- Execute este script no SQL Editor do Supabase:
--   https://app.supabase.com/project/ewwmxuxfrnoknklncwjy/sql
-- =====================================================

-- Create notifications table
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  notification_type TEXT NOT NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS notifications_student_idx ON public.notifications(student_id);
CREATE INDEX IF NOT EXISTS notifications_status_idx ON public.notifications(status);
CREATE INDEX IF NOT EXISTS notifications_type_idx ON public.notifications(notification_type);
CREATE INDEX IF NOT EXISTS notifications_created_at_idx ON public.notifications(created_at DESC);

-- Create a composite index for common queries
CREATE INDEX IF NOT EXISTS notifications_student_status_idx 
  ON public.notifications(student_id, status);

-- Enable RLS on notifications table
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Create policies for notifications
CREATE POLICY IF NOT EXISTS "Students can view their own notifications" 
  ON public.notifications FOR SELECT 
  USING (true); -- Allow public read for now; can be restricted later

-- Add comment to table
COMMENT ON TABLE public.notifications IS 'Stores push notifications for the sales funnel (free → paid conversion)';
COMMENT ON COLUMN public.notifications.notification_type IS 'Type of notification: first_lesson_completed, second_lesson_completed, third_lesson_completed, inactivity_reminder, abandoned_payment';
COMMENT ON COLUMN public.notifications.status IS 'Status of notification: pending, sent, failed, delivered';

-- =====================================================
-- VERIFY — List the notifications table
-- =====================================================
SELECT tablename FROM pg_tables WHERE schemaname = 'public' AND tablename = 'notifications';
