"""Compatibilidade: encaminha para o gerador bibliográfico real.

O catálogo não deve ser preenchido com combinações de títulos, autores ou capas
genéricas. Para regenerar, execute `scripts/generate_library_openlibrary.py`.
"""
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
if __name__ == "__main__":
    subprocess.run(["python3", "scripts/generate_library_openlibrary.py"], cwd=ROOT, check=True)
