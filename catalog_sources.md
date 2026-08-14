# Fonte bibliográfica do catálogo

O catálogo real foi recolhido da API pública do Open Library:

- API de pesquisa: https://openlibrary.org/search.json
- CDN de capas: https://covers.openlibrary.org/b/id/{cover_id}-L.jpg

O script `scripts/generate_library_openlibrary.py` conserva, por livro, o `sourceKey` do Open Library, o autor, o título, o ano, ISBN quando disponível, editora quando disponível e o `cover_id` correspondente. A validação realizada em 14 de agosto de 2026 confirmou 10.000 URLs de capa e uma amostra de 20/20 respostas HTTP com tipo `image/*`.

O catálogo é bibliográfico. A existência de um registo ou capa não concede licença para disponibilizar ou vender o PDF; os direitos de autor e a autorização de distribuição devem ser verificados antes de anexar qualquer ficheiro.
