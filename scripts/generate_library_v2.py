"""Compatibilidade: o catálogo deve ser gerado apenas a partir de registos reais.

Use scripts/generate_library_openlibrary.py para recolher livros com título,
autor e cover_id bibliográficos. Este wrapper impede a regressão para o antigo
gerador sintético.
"""
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
if __name__ == "__main__":
    subprocess.run(["python3", "scripts/generate_library_openlibrary.py"], cwd=ROOT, check=True)
