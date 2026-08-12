-- Amigo do Saber 2.0: referrals, personalized plans and web push subscriptions.

CREATE TABLE IF NOT EXISTS public.affiliates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID NOT NULL UNIQUE REFERENCES public.students(id) ON DELETE CASCADE,
  code TEXT NOT NULL UNIQUE,
  clicks INTEGER NOT NULL DEFAULT 0,
  registered_referrals INTEGER NOT NULL DEFAULT 0,
  approved_referrals INTEGER NOT NULL DEFAULT 0,
  reward_balance_kz INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.affiliate_referrals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  affiliate_id UUID NOT NULL REFERENCES public.affiliates(id) ON DELETE CASCADE,
  referred_student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  code TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'registered' CHECK (status IN ('registered', 'approved', 'rejected')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  converted_at TIMESTAMPTZ,
  UNIQUE (affiliate_id, referred_student_id)
);

CREATE INDEX IF NOT EXISTS affiliate_referrals_student_idx
  ON public.affiliate_referrals(referred_student_id);
CREATE INDEX IF NOT EXISTS affiliate_referrals_status_idx
  ON public.affiliate_referrals(status, created_at DESC);

CREATE TABLE IF NOT EXISTS public.study_profiles (
  student_id UUID NOT NULL PRIMARY KEY REFERENCES public.students(id) ON DELETE CASCADE,
  daily_minutes INTEGER NOT NULL DEFAULT 30 CHECK (daily_minutes BETWEEN 10 AND 240),
  target_date DATE,
  goal TEXT NOT NULL DEFAULT 'progress' CHECK (goal IN ('progress', 'exam', 'revision')),
  preferred_time TEXT NOT NULL DEFAULT 'flexible' CHECK (preferred_time IN ('morning', 'afternoon', 'evening', 'flexible')),
  ai_plan JSONB NOT NULL DEFAULT '[]'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.push_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  endpoint TEXT NOT NULL UNIQUE,
  p256dh TEXT NOT NULL,
  auth TEXT NOT NULL,
  user_agent TEXT,
  enabled BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_seen_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS push_subscriptions_student_idx
  ON public.push_subscriptions(student_id, enabled);

CREATE TABLE IF NOT EXISTS public.notification_preferences (
  student_id UUID NOT NULL PRIMARY KEY REFERENCES public.students(id) ON DELETE CASCADE,
  push_enabled BOOLEAN NOT NULL DEFAULT false,
  inactivity_reminders BOOLEAN NOT NULL DEFAULT true,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.affiliates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.affiliate_referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.push_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notification_preferences ENABLE ROW LEVEL SECURITY;

GRANT ALL ON public.affiliates TO service_role;
GRANT ALL ON public.affiliate_referrals TO service_role;
GRANT ALL ON public.study_profiles TO service_role;
GRANT ALL ON public.push_subscriptions TO service_role;
GRANT ALL ON public.notification_preferences TO service_role;
