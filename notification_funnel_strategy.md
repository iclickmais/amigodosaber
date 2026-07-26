# Estratégia de Funil de Notificações para o Amigo do Saber

## Objetivo

Implementar um serviço de notificações push graduais no aplicativo Amigo do Saber para converter utilizadores das 3 aulas gratuitas em assinantes pagantes, utilizando um funil de vendas estratégico.

## Análise do Contexto

O aplicativo Amigo do Saber oferece 3 aulas gratuitas como introdução ao seu conteúdo. A base de dados Supabase inclui tabelas `students`, `lessons`, `progress` e `payment_requests`, que são essenciais para monitorizar o progresso do utilizador e o estado dos pagamentos. A plataforma Manus WebDev para aplicações móveis oferece suporte a notificações push do lado do servidor, o que simplifica a implementação [1].

## Estratégia do Funil de Vendas via Notificações

O funil de vendas será implementado através de uma sequência de notificações push, cada uma com um gatilho e uma mensagem específicos, desenhadas para guiar o utilizador desde a fase de experimentação gratuita até à subscrição paga.

### Fases e Gatilhos das Notificações

A tabela abaixo detalha as fases do funil, os gatilhos para cada notificação, a mensagem proposta e o objetivo estratégico.

| Fase do Funil | Gatilho da Notificação | Mensagem Proposta | Objetivo Estratégico |
|---|---|---|---|
| **1. Início da Jornada** | Utilizador completa a **primeira aula gratuita** | "Parabéns por completar a sua primeira aula no Amigo do Saber! Continue a aprender e a crescer." | Reforço positivo, incentivar a continuidade. |
| **2. Engajamento Intermédio** | Utilizador completa a **segunda aula gratuita** | "Excelente progresso! Faltam apenas algumas aulas para desbloquear todo o potencial do Amigo do Saber. Explore os nossos planos de assinatura." | Destacar o progresso, introduzir a ideia de subscrição, criar antecipação. |
| **3. Ponto Crítico (Fim do Gratuito)** | Utilizador completa a **terceira (última) aula gratuita** | "Chegou ao fim das suas aulas gratuitas! Para continuar a sua jornada de conhecimento e aceder a todo o nosso conteúdo exclusivo, assine já o Amigo do Saber." | Chamada clara para ação, enfatizar o valor do acesso total. |
| **4. Reengajamento (Inatividade)** | Utilizador completou 3 aulas gratuitas, não subscreveu e está inativo por **2-3 dias** | "Sentimos a sua falta! Não deixe o seu progresso parar. O Amigo do Saber tem muito mais para oferecer. Assine hoje e continue a aprender!" | Reengajar utilizadores inativos, criar senso de urgência. |
| **5. Recuperação de Carrinho** | Utilizador iniciou um pedido de pagamento (`payment_requests.status = 'pending'`) mas não o concluiu por **X horas/dias** | "A sua jornada de conhecimento está à espera! Notamos que iniciou um pedido de pagamento. Complete-o agora para desbloquear acesso ilimitado." | Lembrar o utilizador de completar a compra. |

### Considerações Técnicas

*   **Serviço de Notificações:** Será utilizada a funcionalidade de "Push Notifications: Server-side delivery" mencionada na skill `webdev-readme-mobile-backend` [1]. Isso implica a criação de endpoints no backend (tRPC procedures) para enviar as notificações.
*   **Monitorização de Progresso:** A tabela `progress` será usada para rastrear as aulas concluídas pelos alunos. A lógica `isFreeLesson` em `src/lib/study.functions.ts` é um ponto de partida para identificar quando as aulas gratuitas são concluídas.
*   **Monitorização de Pagamentos:** A tabela `payment_requests` será utilizada para identificar pedidos de pagamento pendentes e acionar notificações de recuperação de carrinho.
*   **Agendamento:** Será necessário um mecanismo de agendamento (cron job ou similar) no backend para verificar periodicamente os gatilhos de inatividade e pedidos de pagamento abandonados e enviar as notificações correspondentes.
*   **Identificação do Utilizador:** As notificações serão direcionadas a `student_id`s específicos, garantindo que cada utilizador receba mensagens relevantes ao seu estado no funil.

## Próximos Passos

1.  **Implementar a lógica de notificação no backend:** Criar funções e endpoints tRPC para enviar notificações com base nos gatilhos definidos.
2.  **Integrar com o frontend:** Garantir que o aplicativo móvel está configurado para receber e exibir notificações push.
3.  **Configurar o agendamento:** Estabelecer tarefas agendadas para monitorizar os gatilhos de inatividade e pagamento.
4.  **Testar:** Realizar testes exaustivos para garantir que as notificações são enviadas corretamente e no momento certo.

## Referências

[1] Manus AI. (2026). *webdev-readme-mobile-backend SKILL.md*. Disponível em `/home/ubuntu/skills/webdev-readme-mobile-backend/SKILL.md`
