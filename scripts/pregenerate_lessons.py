import os
import json

# A simplified taxonomy based on study-tracks.ts to generate a comprehensive SQL seed
TRACKS = [
    {"kind": "concurso", "slug": "minint", "name": "Ministério do Interior", "sectors": ["policia-nacional", "sme", "sic", "spcb", "sef"]},
    {"kind": "concurso", "slug": "minsa", "name": "Ministério da Saúde", "sectors": ["enfermagem", "medicina", "tecnicos-diagnostico", "farmacia", "administracao-hospitalar"]},
    {"kind": "concurso", "slug": "mined", "name": "Ministério da Educação", "sectors": ["primario", "secundario-1", "secundario-2", "tecnico"]},
    {"kind": "concurso", "slug": "minjusdh", "name": "Ministério da Justiça", "sectors": ["magistratura", "registos-notariado", "prisional"]},
    {"kind": "concurso", "slug": "minfin", "name": "Ministério das Finanças", "sectors": ["agt", "tesouro", "inspeccao"]},
    {"kind": "preparatorio", "slug": "saude", "name": "Ciências da Saúde", "sectors": ["medicina", "enfermagem", "farmacia", "psicologia"]},
    {"kind": "preparatorio", "slug": "engenharias", "name": "Engenharias", "sectors": ["civil", "informatica", "mecanica", "electrotecnia"]},
]

MODULES = [
    {"slug": "portugues", "title": "Língua Portuguesa"},
    {"slug": "matematica", "title": "Raciocínio Lógico-Matemático"},
    {"slug": "constituicao", "title": "Constituição da República"},
    {"slug": "especifico", "title": "Conhecimentos Específicos"}
]

LESSONS = [
    {"slug": "intro", "title": "Introdução e Conceitos Base"},
    {"slug": "fundamentos", "title": "Fundamentos e Teoria"},
    {"slug": "pratica", "title": "Casos Práticos e Exercícios"}
]

def generate_lesson_content(track_name, sector_slug, module_title, lesson_title):
    sector_name = sector_slug.replace("-", " ").title()
    return f"""## Introdução
Esta aula de **{lesson_title}** faz parte do módulo de **{module_title}** para o curso de **{sector_name}** no âmbito do **{track_name}**. 
O domínio deste conteúdo é fundamental para o sucesso no exame de admissão e para a futura prática profissional.

## Conceitos fundamentais
- **Definição de {lesson_title}:** Explicação técnica e enquadramento no sistema angolano.
- **Importância do Módulo:** Como o conteúdo de {module_title} se relaciona com as exigências da carreira.
- **Base Normativa:** Referências à legislação e regulamentos vigentes em Angola.

## Aprofundamento
O estudo de {lesson_title} exige atenção aos detalhes técnicos e à aplicação prática. No contexto de {sector_name}, é crucial compreender os procedimentos operacionais e a ética profissional.

## Exemplos resolvidos
1. **Caso Prático:** Análise de uma situação real em {sector_name}.
   - *Resolução:* Aplicação direta dos conceitos de {module_title}.
2. **Questão de Exame:** Pergunta típica de concursos anteriores.
   - *Explicação:* Porquê esta é a resposta correta de acordo com a norma.

## Resumo
- Revisão dos pontos essenciais de {lesson_title}.
- Destaque para os erros comuns em provas.
- Sugestão de leitura complementar.

## Glossário
- **Termo Técnico 1:** Significado no contexto de {track_name}.
- **Termo Técnico 2:** Definição operacional para {sector_name}.
"""

def main():
    lessons_to_insert = []
    
    for track in TRACKS:
        for sector_slug in track["sectors"]:
            for module in MODULES:
                for lesson in LESSONS:
                    content = generate_lesson_content(
                        track["name"], 
                        sector_slug, 
                        module["title"], 
                        lesson["title"]
                    )
                    
                    lessons_to_insert.append({
                        "track_kind": track["kind"],
                        "track_slug": track["slug"],
                        "sector_slug": sector_slug,
                        "module_slug": module["slug"],
                        "lesson_slug": lesson["slug"],
                        "title": lesson["title"],
                        "content_md": content
                    })
    
    with open("/home/ubuntu/amigodosaber/supabase/pregenerated_lessons.sql", "w") as f:
        f.write("DELETE FROM public.lessons;\n\n")
        for l in lessons_to_insert:
            title = l["title"].replace("'", "''")
            content = l["content_md"].replace("'", "''")
            sql = f"INSERT INTO public.lessons (track_kind, track_slug, sector_slug, module_slug, lesson_slug, title, content_md) VALUES ('{l['track_kind']}', '{l['track_slug']}', '{l['sector_slug']}', '{l['module_slug']}', '{l['lesson_slug']}', '{title}', '{content}');\n"
            f.write(sql)
            
    print(f"Geradas {len(lessons_to_insert)} aulas em /home/ubuntu/amigodosaber/supabase/pregenerated_lessons.sql")

if __name__ == "__main__":
    main()
