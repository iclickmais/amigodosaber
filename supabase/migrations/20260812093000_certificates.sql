-- Certificados emitidos após a conclusão integral de um curso.
CREATE TABLE IF NOT EXISTS public.certificates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  kind text NOT NULL CHECK (kind IN ('concurso','preparatorio')),
  track_slug text NOT NULL,
  sector_slug text NOT NULL,
  certificate_code text NOT NULL UNIQUE,
  issued_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (student_id, kind, track_slug, sector_slug)
);

GRANT ALL ON public.certificates TO service_role;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
CREATE INDEX IF NOT EXISTS idx_certificates_student ON public.certificates(student_id);
