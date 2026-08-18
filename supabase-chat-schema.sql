-- =====================================================
-- CHAT SYSTEM — Sala de Bate-papo em Tempo Real
-- Execute este script no SQL Editor do Supabase:
--   https://app.supabase.com/project/lbfxlmkngvwrlafgudck/sql
-- =====================================================

-- 1. CHAT_MESSAGES
CREATE TABLE IF NOT EXISTS public.chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for fast message retrieval
CREATE INDEX IF NOT EXISTS chat_messages_created_at_idx ON public.chat_messages(created_at ASC);

-- 2. STUDENT_PRESENCE (para mostrar quem está online)
CREATE TABLE IF NOT EXISTS public.student_presence (
  student_id UUID PRIMARY KEY REFERENCES public.students(id) ON DELETE CASCADE,
  last_seen_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  is_online BOOLEAN NOT NULL DEFAULT true
);

-- Index for fast online status check
CREATE INDEX IF NOT EXISTS student_presence_online_idx ON public.student_presence(is_online) WHERE is_online = true;

-- =====================================================
-- RLS (Row Level Security)
-- =====================================================

-- Enable RLS
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_presence ENABLE ROW LEVEL SECURITY;

-- Policies for chat_messages: Everyone can read, authenticated students can insert
CREATE POLICY "Allow public read chat messages" ON public.chat_messages FOR SELECT USING (true);
CREATE POLICY "Allow student insert chat messages" ON public.chat_messages FOR INSERT WITH CHECK (true);

-- Policies for student_presence: Everyone can read, students can update their own
CREATE POLICY "Allow public read presence" ON public.student_presence FOR SELECT USING (true);
CREATE POLICY "Allow student update presence" ON public.student_presence FOR ALL USING (true);

-- =====================================================
-- REALTIME
-- =====================================================

-- Enable Realtime for chat_messages
ALTER PUBLICATION supabase_realtime ADD TABLE public.chat_messages;
ALTER PUBLICATION supabase_realtime ADD TABLE public.student_presence;

-- =====================================================
-- VIEW FOR CHAT (para esconder o telefone)
-- =====================================================
CREATE OR REPLACE VIEW public.chat_messages_with_profiles AS
SELECT 
  m.id,
  m.content,
  m.created_at,
  s.surname as author_name,
  s.id as author_id,
  p.is_online as author_online
FROM public.chat_messages m
JOIN public.students s ON m.student_id = s.id
LEFT JOIN public.student_presence p ON s.id = p.student_id;
