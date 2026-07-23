
-- Students table (phone-based identity, no Supabase auth)
CREATE TABLE public.students (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  phone TEXT NOT NULL UNIQUE,
  surname TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.students TO service_role;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
-- No public policies: only server functions (service_role) can read/write.

-- Cached AI-generated lessons, shared across all students
CREATE TABLE public.lessons (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  track_kind TEXT NOT NULL,           -- 'concurso' | 'preparatorio'
  track_slug TEXT NOT NULL,           -- e.g. 'minint' or 'medicina'
  sector_slug TEXT NOT NULL,          -- e.g. 'policia-nacional' or 'matematica'
  module_slug TEXT NOT NULL,
  lesson_slug TEXT NOT NULL,
  title TEXT NOT NULL,
  content_md TEXT NOT NULL,
  generated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (track_kind, track_slug, sector_slug, module_slug, lesson_slug)
);
GRANT SELECT ON public.lessons TO anon, authenticated;
GRANT ALL ON public.lessons TO service_role;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Lessons are public" ON public.lessons FOR SELECT TO anon, authenticated USING (true);

-- Cached AI-generated quizzes, one per lesson
CREATE TABLE public.quizzes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE UNIQUE,
  questions JSONB NOT NULL,           -- [{ q, options: [4], correct: 0-3, explanation }]
  generated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.quizzes TO anon, authenticated;
GRANT ALL ON public.quizzes TO service_role;
ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Quizzes are public" ON public.quizzes FOR SELECT TO anon, authenticated USING (true);

-- Quiz attempts (private per student, server-only access)
CREATE TABLE public.attempts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  quiz_id UUID NOT NULL REFERENCES public.quizzes(id) ON DELETE CASCADE,
  score INT NOT NULL,
  total INT NOT NULL,
  answers JSONB NOT NULL,
  taken_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX attempts_student_idx ON public.attempts(student_id, taken_at DESC);
GRANT ALL ON public.attempts TO service_role;
ALTER TABLE public.attempts ENABLE ROW LEVEL SECURITY;

-- Progress tracking (private per student)
CREATE TABLE public.progress (
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  completed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (student_id, lesson_id)
);
GRANT ALL ON public.progress TO service_role;
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;
