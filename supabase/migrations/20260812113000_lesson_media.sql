-- Recursos multimédia opcionais associados às aulas preparadas.
CREATE TABLE IF NOT EXISTS public.lesson_media (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  media_type TEXT NOT NULL CHECK (media_type IN ('audio', 'video')),
  title TEXT NOT NULL,
  description TEXT,
  media_url TEXT NOT NULL,
  thumbnail_url TEXT,
  duration_seconds INT,
  sort_order INT NOT NULL DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS lesson_media_lesson_idx ON public.lesson_media(lesson_id, published, sort_order);
GRANT SELECT ON public.lesson_media TO anon, authenticated;
GRANT ALL ON public.lesson_media TO service_role;
ALTER TABLE public.lesson_media ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Published lesson media are public" ON public.lesson_media;
CREATE POLICY "Published lesson media are public" ON public.lesson_media
  FOR SELECT TO anon, authenticated USING (published = true);
