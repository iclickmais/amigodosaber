from pathlib import Path

project = Path('/home/ubuntu/amigodosaber')
source = project / 'supabase/pregenerated_lessons.sql'
target = project / 'supabase/migrations/20260814143000_upgrade_prepared_lessons.sql'

lines = source.read_text().splitlines()
out = [
    '-- Actualiza as aulas pré-preparadas para o padrão pedagógico rico.',
    '-- Migração idempotente: não apaga progresso, tentativas, quizzes ou alunos.',
    'BEGIN;',
]

for line in lines:
    if line.startswith('--') or line in {'BEGIN;', 'COMMIT;', 'DELETE FROM public.quizzes;', 'DELETE FROM public.lessons;'}:
        continue
    if line.startswith('INSERT INTO public.lessons'):
        out.append(line)
    elif line == "');":
        out.append(") ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_md = EXCLUDED.content_md;")
    elif line.strip():
        out.append(line)

out.append('COMMIT;')
target.write_text('\n'.join(out) + '\n')
print(f'created {target} with {sum(1 for line in out if line.startswith("INSERT INTO public.lessons"))} upserts')
