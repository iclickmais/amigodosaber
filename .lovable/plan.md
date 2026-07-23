
# Grande evolução: transformar aulas em ferramenta que faz passar

Cinco funcionalidades escolhidas: **offline (1)**, **simulado cronometrado (2)**, **revisão inteligente dos erros (3)**, **plano de estudo diário (7)** e **editais / concursos abertos (8)**.

## 1. Modo offline (PWA leve)

Objectivo: aluno abre uma aula uma vez e pode reler + fazer o quiz mesmo sem internet.

- Activar PWA com `vite-plugin-pwa` (`generateSW`, `NetworkFirst` para navegação, `CacheFirst` para assets com hash) seguindo a skill de PWA (registo só em produção, com kill-switch e `?sw=off`).
- Manifesto: nome "Amigo do Saber", ícone dourado, `display: standalone`.
- Cache automática das aulas visitadas + quizzes correspondentes (armazenados em IndexedDB via um pequeno helper). Ao abrir uma aula offline, o app lê do cache.
- Badge "Disponível offline" na aula quando já foi guardada. Botão "Guardar para offline" nas aulas ainda não vistas.
- Painel do aluno mostra quantas aulas estão guardadas no dispositivo.

## 2. Simulado cronometrado final

Objectivo: exame realista, próximo do concurso/exame de acesso.

- Novo botão em cada sector/curso: **"Simulado — 30 perguntas / 45 min"**.
- O simulado agrega perguntas dos quizzes já gerados desse sector (amostra aleatória; se ainda não há quizzes suficientes, gera à medida via IA com contexto de várias aulas).
- Cronómetro fixo no topo, entrega automática quando termina o tempo.
- No fim: nota, percentagem, tempo usado, correcção pergunta a pergunta com explicação, e comparação com a média dos alunos do mesmo sector.
- Guardado numa nova tabela `simulados_attempts` (link ao aluno + sector + score + tempo + respostas).

## 3. Revisão inteligente dos erros (repetição espaçada)

Objectivo: transformar cada erro numa nova oportunidade de aprender.

- Sempre que o aluno erra numa pergunta (quiz ou simulado), a pergunta entra numa fila pessoal de revisão numa nova tabela `revision_queue` (student, question_id/lesson_id, correct_streak, next_review_at).
- Algoritmo simples SM-2 encurtado: 1 dia → 3 dias → 7 dias → 21 dias. Acertar avança; errar volta ao início.
- Nova página **`/revisao`**: mostra "Tens X perguntas para rever hoje" e apresenta-as uma a uma, ao estilo flashcard, com explicação depois de responder.
- Badge no painel: "5 revisões pendentes" + notificação diária suave.

## 4. Plano de estudo diário personalizado

Objectivo: substituir "biblioteca de aulas" por "coach diário".

- Ao aprovar um pagamento, o aluno escolhe uma **data-alvo** (data prevista do concurso/exame). Se saltar, assumimos 60 dias.
- Nova tabela `study_plans` (student, kind, track_slug, sector_slug, target_date, created_at).
- Gerador automático: divide as aulas do sector pelos dias disponíveis (ex.: 40 aulas ÷ 45 dias = 1 aula/dia + 1 quiz).
- Painel mostra: **"Hoje: aula X + quiz + 3 revisões"**. Marca como feito quando conclui.
- Barra de progresso "faltam 32 dias / 62% concluído".

## 5. Editais e concursos abertos

Objectivo: dar razão para voltar todos os dias.

- Nova tabela `edicts` (id, kind, track_slug, sector_slug, title, description_md, deadline, source_url, published_at).
- Painel de administrador ganha secção **"Editais"** para adicionar/remover manualmente (o admin recebe e cola o edital).
- Página pública **`/editais`** com lista dos concursos abertos, filtrável por ministério; badge "Encerra em X dias".
- Card destacado nos sectores respectivos: "Concurso aberto — ver edital".
- Ao publicar um edital para um sector, todos os alunos com plano nesse sector vêem uma notificação no painel.

## Detalhes técnicos

**Novas tabelas (migração única):**

```text
simulado_attempts   ─ id, student_id, kind, track_slug, sector_slug,
                      score, total, duration_sec, answers jsonb, taken_at
revision_queue      ─ id, student_id, quiz_id, question_index, lesson_id,
                      streak, next_review_at, last_result, updated_at
study_plans         ─ id, student_id, kind, track_slug, sector_slug,
                      target_date, created_at   (unique por aluno+sector)
edicts              ─ id, kind, track_slug, sector_slug, title,
                      description_md, deadline, source_url, published_at
```

Cada tabela com RLS: aluno vê/edita apenas linhas com o seu `student_id` (revision_queue, simulado_attempts, study_plans). `edicts` público em leitura, escrita só admin.

**Server functions:**

- `startSimulado`, `submitSimulado` — em `src/lib/simulado.functions.ts`.
- `getRevisionQueue`, `submitRevisionCard` — em `src/lib/revision.functions.ts`. `submitAttempt` existente passa a criar entradas na revision_queue quando o aluno erra.
- `getStudyPlan`, `setStudyPlanTarget`, `getTodayPlan` — em `src/lib/plan.functions.ts`.
- `listEdicts`, `adminCreateEdict`, `adminDeleteEdict` — em `src/lib/edicts.functions.ts`.

**PWA:**

- `vite.config.ts` recebe `VitePWA` com `registerType: 'autoUpdate'`, `injectRegister: null`, `devOptions.enabled: false`.
- Novo `src/lib/pwa-register.ts` com os guards da skill (produção, não iframe, não hosts de preview, `?sw=off`).
- Novo `src/lib/offline-cache.ts` — helper simples IndexedDB para guardar `{lesson, quiz}` por sector.

**Rotas novas:**

```text
/simulado/$kind/$track/$sector      — página do simulado
/revisao                            — fila de revisão
/editais                            — lista pública
/editais/$id                        — detalhe do edital
```

**UI:**

- Cronómetro elegante dourado no simulado.
- Cartões flashcard-style em `/revisao`.
- Novos cartões no `/painel`: "Hoje", "Revisões pendentes", "Aulas guardadas offline", "Editais abertos".
- Componente `EdictCard` reutilizado em painel e página do sector.

## Ordem de entrega (uma única implementação)

1. Migração + grants + RLS para as 4 novas tabelas.
2. PWA (manifesto, plugin, registo com guards, offline-cache helper).
3. Simulado (server fn + rota + UI cronómetro).
4. Revisão espaçada (server fn + integração com `submitAttempt` + rota `/revisao`).
5. Plano diário (server fn + escolha de data no fluxo de aprovação + widget "Hoje" no painel).
6. Editais (server fn + UI admin + rota pública + card no sector).

Se soar bem, aprova e eu construo tudo numa entrega.
