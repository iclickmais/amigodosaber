CREATE TABLE public.access_grants (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id) on delete cascade,
  kind text not null check (kind in ('concurso','preparatorio')),
  track_slug text not null,
  sector_slug text not null,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  unique (student_id, kind, track_slug, sector_slug)
);
GRANT SELECT ON public.access_grants TO authenticated;
GRANT ALL ON public.access_grants TO service_role;
ALTER TABLE public.access_grants ENABLE ROW LEVEL SECURITY;
CREATE INDEX idx_access_grants_student ON public.access_grants(student_id);

CREATE TABLE public.payment_requests (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id) on delete cascade,
  kind text not null check (kind in ('concurso','preparatorio')),
  track_slug text not null,
  sector_slug text not null,
  track_name text not null,
  sector_name text not null,
  amount_kz integer not null,
  status text not null default 'pending' check (status in ('pending','confirmed','cancelled')),
  created_at timestamptz not null default now()
);
GRANT SELECT ON public.payment_requests TO authenticated;
GRANT ALL ON public.payment_requests TO service_role;
ALTER TABLE public.payment_requests ENABLE ROW LEVEL SECURITY;
CREATE INDEX idx_payment_requests_student ON public.payment_requests(student_id);