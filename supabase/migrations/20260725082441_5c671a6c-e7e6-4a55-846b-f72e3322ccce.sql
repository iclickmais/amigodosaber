ALTER TABLE public.payment_requests DROP CONSTRAINT IF EXISTS payment_requests_status_check;
UPDATE public.payment_requests SET status = 'approved' WHERE status = 'confirmed';
UPDATE public.payment_requests SET status = 'rejected' WHERE status = 'cancelled';
ALTER TABLE public.payment_requests ADD CONSTRAINT payment_requests_status_check CHECK (status IN ('pending','approved','rejected'));