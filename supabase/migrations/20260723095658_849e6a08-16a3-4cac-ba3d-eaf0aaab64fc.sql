CREATE TABLE public.books (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  author text NOT NULL DEFAULT '',
  category_slug text NOT NULL,
  subcategory_slug text NOT NULL,
  price_kz integer NOT NULL DEFAULT 0,
  cover_url text,
  description text NOT NULL DEFAULT '',
  tags text[] NOT NULL DEFAULT '{}',
  relevance integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.books TO anon;
GRANT SELECT ON public.books TO authenticated;
GRANT ALL ON public.books TO service_role;

ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published books"
  ON public.books FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE INDEX books_category_idx ON public.books (category_slug, subcategory_slug, relevance DESC, created_at DESC);

CREATE TRIGGER books_set_updated_at
  BEFORE UPDATE ON public.books
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
