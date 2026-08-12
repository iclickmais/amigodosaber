-- Checkout com upload de comprovativo
ALTER TABLE public.payment_requests
  ADD COLUMN IF NOT EXISTS proof_path text,
  ADD COLUMN IF NOT EXISTS proof_name text,
  ADD COLUMN IF NOT EXISTS proof_mime text,
  ADD COLUMN IF NOT EXISTS proof_uploaded_at timestamptz;

CREATE INDEX IF NOT EXISTS idx_payment_requests_proof
  ON public.payment_requests(proof_uploaded_at)
  WHERE proof_path IS NOT NULL;

-- Comprovativos são privados e só podem ser lidos pelo service_role através do backend.
INSERT INTO storage.buckets (id, name, public)
VALUES ('payment-proofs', 'payment-proofs', false)
ON CONFLICT (id) DO UPDATE SET public = false;

GRANT ALL ON public.payment_requests TO service_role;

COMMENT ON COLUMN public.payment_requests.proof_path IS 'Caminho privado do comprovativo no Storage.';
COMMENT ON COLUMN public.payment_requests.proof_name IS 'Nome original do ficheiro enviado pelo aluno.';
COMMENT ON COLUMN public.payment_requests.proof_mime IS 'Tipo MIME validado do comprovativo.';
COMMENT ON COLUMN public.payment_requests.proof_uploaded_at IS 'Data/hora em que o comprovativo foi recebido.';
