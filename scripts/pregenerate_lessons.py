import os
import json
import requests
import sys

# Mocking the taxonomy to avoid complex imports
# This is a simplified version of study-tracks.ts
CONCURSO_TRACKS = [
    {
        "slug": "minint",
        "name": "MININT",
        "sectors": [
            {"slug": "policia-nacional", "name": "Polícia Nacional"},
            {"slug": "servico-prisional", "name": "Serviço Prisional"},
            {"slug": "proteccao-civil", "name": "Protecção Civil e Bombeiros"},
            {"slug": "migracao-estrangeiros", "name": "Serviço de Migração e Estrangeiros"}
        ]
    },
    {
        "slug": "minjus",
        "name": "MINJUSDH",
        "sectors": [
            {"slug": "registos-notariado", "name": "Registos e Notariado"},
            {"slug": "identificacao-civil", "name": "Identificação Civil e Criminal"}
        ]
    }
]

MODULES = [
    {"slug": "portugues", "title": "Língua Portuguesa"},
    {"slug": "matematica", "title": "Raciocínio Lógico-Matemático"},
    {"slug": "constituicao", "title": "Constituição da República"},
    {"slug": "administracao", "title": "Administração Pública"}
]

LESSONS = [
    {"slug": "intro", "title": "Introdução e Conceitos Base"},
    {"slug": "fundamentos", "title": "Fundamentos e Teoria"},
    {"slug": "pratica", "title": "Casos Práticos e Exercícios"}
]

def generate_lesson_content(track_name, sector_name, module_title, lesson_title):
    return f"""## Introdução
Esta aula de **{lesson_title}** faz parte do módulo de **{module_title}** para o concurso do **{track_name} ({sector_name})**. 
O domínio deste conteúdo é fundamental para garantir uma pontuação competitiva no exame de admissão.

## Conceitos fundamentais
- **Conceito 1:** Definição técnica aplicada ao contexto angolano.
- **Conceito 2:** Importância estratégica na administração pública.
- **Conceito 3:** Base legal e normativa vigente.

## Aprofundamento
O estudo detalhado de {lesson_title} exige a compreensão da legislação angolana e dos procedimentos operacionais padrão do {sector_name}.

## Exemplos resolvidos
1. **Questão de Exame:** Como se aplica o princípio X no caso Y?
   - *Resolução:* De acordo com a Lei nº Z...
2. **Questão Prática:** Procedimento correto em situação de emergência...

## Resumo
- Ponto 1: Revisão da base legal.
- Ponto 2: Procedimentos operacionais.
- Ponto 3: Ética e Deontologia.

## Glossário
- **Termo A:** Definição técnica.
- **Termo B:** Significado jurídico/operacional.
"""

def main():
    lessons_to_insert = []
    
    for track in CONCURSO_TRACKS:
        for sector in track["sectors"]:
            for module in MODULES:
                for lesson in LESSONS:
                    content = generate_lesson_content(
                        track["name"], 
                        sector["name"], 
                        module["title"], 
                        lesson["title"]
                    )
                    
                    lessons_to_insert.append({
                        "track_kind": "concurso",
                        "track_slug": track["slug"],
                        "sector_slug": sector["slug"],
                        "module_slug": module["slug"],
                        "lesson_slug": lesson["slug"],
                        "title": lesson["title"],
                        "content_md": content
                    })
    
    # Save to a SQL file for manual import or use via API if keys were available
    with open("/home/ubuntu/amigodosaber/supabase/pregenerated_lessons.sql", "w") as f:
        f.write("DELETE FROM public.lessons WHERE track_kind = 'concurso';\n\n")
        for l in lessons_to_insert:
            # Escape single quotes for SQL
            title = l["title"].replace("'", "''")
            content = l["content_md"].replace("'", "''")
            sql = f"INSERT INTO public.lessons (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md) VALUES ('{l['track_kind']}', '{l['track_slug']}', '{l['sector_slug']}', '{l['module_slug']}', '{l['lesson_slug']}', '{title}', '{content}');\n"
            f.write(sql)
            
    print(f"Geradas {len(lessons_to_insert)} aulas em /home/ubuntu/amigodosaber/supabase/pregenerated_lessons.sql")

if __name__ == "__main__":
    main()
