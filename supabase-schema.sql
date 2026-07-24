-- =====================================================
-- AMIGO DO SABER — Supabase Schema Completo
-- Execute este script no SQL Editor do Supabase:
--   https://app.supabase.com/project/ewwmxuxfrnoknklncwjy/sql
-- =====================================================

-- 1. STUDENTS (a tabela principal — causa do erro)
CREATE TABLE IF NOT EXISTS public.students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phone TEXT NOT NULL UNIQUE,
  surname TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. LESSONS
CREATE TABLE IF NOT EXISTS public.lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  track_kind TEXT NOT NULL,
  track_slug TEXT NOT NULL,
  sector_slug TEXT NOT NULL,
  module_slug TEXT NOT NULL,
  lesson_slug TEXT NOT NULL,
  title TEXT NOT NULL,
  content_md TEXT NOT NULL,
  generated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS lessons_unique_slug_idx
  ON public.lessons (track_kind, track_slug, sector_slug, module_slug, lesson_slug);

-- 3. QUIZZES
CREATE TABLE IF NOT EXISTS public.quizzes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID NOT NULL UNIQUE REFERENCES public.lessons(id) ON DELETE CASCADE,
  questions JSONB NOT NULL,
  generated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 4. ATTEMPTS
CREATE TABLE IF NOT EXISTS public.attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  quiz_id UUID NOT NULL REFERENCES public.quizzes(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  answers JSONB NOT NULL,
  taken_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS attempts_student_idx ON public.attempts(student_id);
CREATE INDEX IF NOT EXISTS attempts_quiz_idx ON public.attempts(quiz_id);

-- 5. PROGRESS
CREATE TABLE IF NOT EXISTS public.progress (
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  completed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (student_id, lesson_id)
);

-- 6. ACCESS_GRANTS
CREATE TABLE IF NOT EXISTS public.access_grants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  kind TEXT NOT NULL,
  track_slug TEXT NOT NULL,
  sector_slug TEXT NOT NULL,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS access_grants_student_idx ON public.access_grants(student_id);

-- 7. PAYMENT_REQUESTS
CREATE TABLE IF NOT EXISTS public.payment_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  kind TEXT NOT NULL,
  track_slug TEXT NOT NULL,
  sector_slug TEXT NOT NULL,
  track_name TEXT NOT NULL,
  sector_name TEXT NOT NULL,
  amount_kz INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS payment_requests_student_idx ON public.payment_requests(student_id);
CREATE INDEX IF NOT EXISTS payment_requests_status_idx ON public.payment_requests(status);

-- 8. BOOKS
CREATE TABLE IF NOT EXISTS public.books (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT '',
  category_slug TEXT NOT NULL,
  subcategory_slug TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  price_kz INTEGER NOT NULL DEFAULT 0,
  relevance INTEGER NOT NULL DEFAULT 0,
  tags TEXT[] NOT NULL DEFAULT '{}',
  cover_url TEXT,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS books_category_idx ON public.books(category_slug);

-- 9. EDICTS
CREATE TABLE IF NOT EXISTS public.edicts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  kind TEXT NOT NULL,
  track_slug TEXT NOT NULL,
  sector_slug TEXT,
  title TEXT NOT NULL,
  description_md TEXT NOT NULL DEFAULT '',
  deadline TIMESTAMPTZ,
  source_url TEXT,
  published_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS edicts_kind_idx ON public.edicts(kind);

-- 10. REVISION_QUEUE
CREATE TABLE IF NOT EXISTS public.revision_queue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  quiz_id UUID NOT NULL REFERENCES public.quizzes(id) ON DELETE CASCADE,
  question_index INTEGER NOT NULL,
  streak INTEGER NOT NULL DEFAULT 0,
  next_review_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_result TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS revision_queue_student_idx ON public.revision_queue(student_id);
CREATE UNIQUE INDEX IF NOT EXISTS revision_queue_unique_idx
  ON public.revision_queue (student_id, quiz_id, question_index);

-- 11. SIMULADO_ATTEMPTS
CREATE TABLE IF NOT EXISTS public.simulado_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  kind TEXT NOT NULL,
  track_slug TEXT NOT NULL,
  sector_slug TEXT NOT NULL,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  duration_sec INTEGER NOT NULL,
  answers JSONB NOT NULL DEFAULT '{}',
  taken_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS simulado_attempts_student_idx ON public.simulado_attempts(student_id);

-- 12. STUDY_PLANS
CREATE TABLE IF NOT EXISTS public.study_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  kind TEXT NOT NULL,
  track_slug TEXT NOT NULL,
  sector_slug TEXT NOT NULL,
  target_date DATE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (student_id, kind, track_slug, sector_slug)
);

-- =====================================================
-- RLS (Row Level Security) — permitir acesso completo
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.access_grants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payment_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.edicts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.revision_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.simulado_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_plans ENABLE ROW LEVEL SECURITY;

-- Allow authenticated service role to access everything
-- (O service_role key bypasses RLS automaticamente no Supabase)
-- Para queries anónimas (leitura pública de books, edicts, lessons):
CREATE POLICY IF NOT EXISTS "Public read books" ON public.books FOR SELECT USING (true);
CREATE POLICY IF NOT EXISTS "Public read edicts" ON public.edicts FOR SELECT USING (true);
CREATE POLICY IF NOT EXISTS "Public read published books" ON public.books FOR SELECT USING (is_published = true);

-- =====================================================
-- VERIFICAR — listar todas as tabelas criadas
-- =====================================================
SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename;
