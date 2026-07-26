# Relatório de Análise Técnica — Amigo do Saber

Realizei uma auditoria completa no código-fonte, infraestrutura e integrações do aplicativo. Identifiquei problemas críticos que afetam a experiência do utilizador, a integridade dos dados e a descoberta de novas funcionalidades.

## Problemas Críticos Identificados

### 1. Spam de Pedidos de Pagamento (Bug de Lógica)
No componente `PaymentModal.tsx`, a função `requestPayment` é disparada automaticamente via `useEffect` sempre que o modal é aberto (linhas 36-42).
*   **Impacto:** Se um utilizador abrir e fechar o modal várias vezes apenas para consultar o preço ou o IBAN, o sistema cria múltiplos pedidos de pagamento pendentes na base de dados.
*   **Consequência:** Poluição da área administrativa e dificuldade para o administrador validar qual é o pedido real.

### 2. Falta de Visibilidade da Sala de Chat
Embora a rota `/chat` e o componente `ChatRoom` tenham sido implementados com sucesso, não existe nenhum link de acesso na navegação principal (`SiteHeader.tsx`).
*   **Impacto:** Os utilizadores não conseguem encontrar ou entrar na sala de chat a menos que digitem o URL manualmente.
*   **Sugestão:** Adicionar um ícone de "Mensagens" ou link "Chat" no cabeçalho e no menu mobile.

### 3. Inconsistência de Tipos (Supabase)
O arquivo `src/integrations/supabase/types.ts` está desatualizado. Ele não contém as definições para as novas tabelas de `chat_messages`, `student_presence` e `notifications`.
*   **Impacto:** O compilador TypeScript pode apresentar erros ou avisos, e o desenvolvimento futuro nestas áreas será mais propenso a bugs por falta de autocompletar e validação de tipos.

### 4. Políticas de RLS Restritivas
As tabelas `students`, `attempts` e `progress` têm o RLS ativado, mas não possuem políticas que permitam a leitura/escrita direta pelo cliente autenticado (apenas via `service_role` no servidor).
*   **Impacto:** Se o frontend tentar ler dados diretamente do Supabase (como no componente de Chat ou Notificações sugerido), as queries falharão silenciosamente ou retornarão zero resultados.

## Tabela de Prioridades e Correções

| Problema | Prioridade | Sugestão de Correção |
|---|---|---|
| **Spam de Pagamentos** | Alta | Mover `requestPayment` para o clique do botão "Confirmar Pagamento" ou "Enviar Comprovativo". |
| **Acesso ao Chat** | Alta | Inserir link `<Link to="/chat">` no `SiteHeader.tsx` ao lado do nome do utilizador. |
| **RLS do Supabase** | Média | Adicionar políticas SQL para permitir que alunos vejam os seus próprios registos. |
| **Tipos TS** | Baixa | Gerar novamente os tipos do Supabase usando a CLI ou atualizar manualmente. |

## Próximos Passos Recomendados

1.  **Corrigir o `PaymentModal`:** Evitar a criação automática de pedidos.
2.  **Atualizar Navegação:** Tornar o Chat e as Notificações visíveis para o utilizador final.
3.  **Sincronizar Tipos:** Garantir que o ambiente de desenvolvimento reflete o schema atual da base de dados.

---
**Análise realizada por:** Manus AI
**Data:** 26 de Julho de 2026
