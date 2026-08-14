"""Compatibilidade para regenerar as aulas a partir da taxonomia oficial.

A fonte de verdade é scripts/generate_lessons_seed.ts, que usa
src/lib/study-tracks.ts e src/lib/lesson-builder.ts. Este wrapper existe para
que comandos antigos não voltem a gerar uma taxonomia reduzida ou conteúdo
superficial.
"""

from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]

if __name__ == "__main__":
    subprocess.run(
        ["pnpm", "dlx", "tsx", "scripts/generate_lessons_seed.ts"],
        cwd=ROOT,
        check=True,
    )
