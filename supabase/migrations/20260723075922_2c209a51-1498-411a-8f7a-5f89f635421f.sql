
-- 1) simulado_attempts
CREATE TABLE public.simulado_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  kind TEXT NOT NULL,
  track_slug TEXT NOT NULL,
  sector_slug TEXT NOT NULL,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  duration_sec INTEGER NOT NULL,
  answers JSONB NOT NULL DEFAULT '[]'::jsonb,
  taken_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.simulado_attempts TO service_role;
ALTER TABLE public.simulado_attempts ENABLE ROW LEVEL SECURITY;
CREATE INDEX simulado_attempts_student_idx ON public.simulado_attempts(student_id, taken_at DESC);
CREATE INDEX simulado_attempts_sector_idx ON public.simulado_attempts(kind, track_slug, sector_slug);

-- 2) revision_queue
CREATE TABLE public.revision_queue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  quiz_id UUID NOT NULL REFERENCES public.quizzes(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  question_index INTEGER NOT NULL,
  streak INTEGER NOT NULL DEFAULT 0,
  next_review_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_result TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(student_id, quiz_id, question_index)
);
GRANT ALL ON public.revision_queue TO service_role;
ALTER TABLE public.revision_queue ENABLE ROW LEVEL SECURITY;
CREATE INDEX revision_queue_due_idx ON public.revision_queue(student_id, next_review_at);

-- 3) study_plans
CREATE TABLE public.study_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  kind TEXT NOT NULL,
  track_slug TEXT NOT NULL,
  sector_slug TEXT NOT NULL,
  target_date DATE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(student_id, kind, track_slug, sector_slug)
);
GRANT ALL ON public.study_plans TO service_role;
ALTER TABLE public.study_plans ENABLE ROW LEVEL SECURITY;

-- 4) edicts (públicos)
CREATE TABLE public.edicts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  kind TEXT NOT NULL,
  track_slug TEXT NOT NULL,
  sector_slug TEXT,
  title TEXT NOT NULL,
  description_md TEXT NOT NULL DEFAULT '',
  deadline DATE,
  source_url TEXT,
  published_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.edicts TO anon, authenticated;
GRANT ALL ON public.edicts TO service_role;
ALTER TABLE public.edicts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Editais são públicos"
  ON public.edicts FOR SELECT
  TO anon, authenticated
  USING (true);
CREATE INDEX edicts_track_idx ON public.edicts(kind, track_slug, sector_slug);
CREATE INDEX edicts_published_idx ON public.edicts(published_at DESC);

-- Trigger de updated_at para study_plans
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;
CREATE TRIGGER study_plans_set_updated_at
  BEFORE UPDATE ON public.study_plans
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER revision_queue_set_updated_at
  BEFORE UPDATE ON public.revision_queue
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
