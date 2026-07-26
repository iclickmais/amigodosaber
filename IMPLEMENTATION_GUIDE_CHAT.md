# Guia de Implementação — Sala de Bate-papo

## Resumo Executivo

Este guia detalha a implementação de uma sala de bate-papo em tempo real para o aplicativo Amigo do Saber, permitindo que os usuários conversem entre si usando apenas seus apelidos, com um indicador de presença online. A solução prioriza a privacidade do usuário e a simplicidade de uso.

## Arquivos Criados

Os seguintes arquivos foram criados e devem ser integrados ao projeto:

1.  **`supabase-chat-schema.sql`** — Schema da base de dados para mensagens de chat e presença de usuários.
2.  **`src/lib/chat.functions.ts`** — Funções de backend para enviar mensagens, obter histórico, atualizar presença e listar usuários online.
3.  **`src/routes/api/chat.$fn.ts`** — Rota de API para expor as funções de chat via HTTP POST.
4.  **`src/routes/chat.tsx`** — Rota de frontend para a sala de bate-papo.
5.  **`src/components/chat-room.tsx`** — Componente React para a interface da sala de bate-papo.

## Passo 1: Atualizar o Schema do Supabase

### 1.1 Executar a Migration

1.  Aceda ao seu [Supabase Dashboard](https://app.supabase.com/project/ewwmxuxfrnoknklncwjy/sql).
2.  Clique em "SQL Editor" no menu lateral.
3.  Clique em "New Query".
4.  Copie o conteúdo de `supabase-chat-schema.sql`.
5.  Cole no editor e clique em "Run".

**Nota:** Eu já atualizei o arquivo `supabase-schema.sql` no seu repositório com as novas tabelas de chat e presença. No entanto, é crucial que você execute o `supabase-chat-schema.sql` diretamente no seu ambiente Supabase para criar as tabelas e as políticas de RLS.

### 1.2 Verificar as Tabelas e Views

Após executar a migration, verifique se as tabelas e a view foram criadas:

```sql
SELECT tablename FROM pg_tables WHERE schemaname = 'public' AND (tablename = 'chat_messages' OR tablename = 'student_presence');
SELECT viewname FROM pg_views WHERE schemaname = 'public' AND viewname = 'chat_messages_with_profiles';
```

## Passo 2: Integrar o Código do Chat

Os arquivos `src/lib/chat.functions.ts`, `src/routes/api/chat.$fn.ts`, `src/routes/chat.tsx` e `src/components/chat-room.tsx` já foram adicionados ao seu projeto.

### 2.1 Integração do Frontend

O componente `ChatRoom` (`src/components/chat-room.tsx`) já está configurado para ser a página `/chat` através do arquivo `src/routes/chat.tsx`. Para que os usuários possam aceder à sala de bate-papo, você precisará adicionar um link ou botão de navegação em alguma parte da interface do seu aplicativo, por exemplo, no menu principal ou numa barra de navegação.

Exemplo de como adicionar um link (em um componente React/TanStack Router):

```typescript jsx
import { Link } from "@tanstack/react-router";

// ... dentro do seu componente de navegação
<Link to="/chat" className="[&.active]:font-bold">
  Sala de Bate-papo
</Link>
```

### 2.2 Autenticação e Apelido

O chat utiliza o `useAuth()` para obter o `studentId` (que é o `openId` do usuário) e o `surname` para exibir o nome do autor da mensagem. Certifique-se de que o usuário esteja autenticado para poder enviar mensagens e que o `surname` esteja preenchido na tabela `students`.

## Passo 3: Testar o Sistema

### 3.1 Aceder à Sala de Bate-papo

1.  Inicie o seu aplicativo localmente.
2.  Navegue para a rota `/chat` (ou clique no link que você adicionou).
3.  Faça login com um usuário.
4.  Comece a enviar mensagens.

### 3.2 Testar Presença Online

1.  Abra o aplicativo em múltiplas abas ou dispositivos com diferentes usuários logados.
2.  Observe a lista de usuários online na barra lateral.
3.  Feche uma das abas/dispositivos e veja se o usuário desaparece da lista de online.

### 3.3 Verificar Mensagens no Supabase

Você pode verificar as mensagens diretamente na tabela `chat_messages` do Supabase:

```sql
SELECT * FROM public.chat_messages ORDER BY created_at DESC;
```

E a presença:

```sql
SELECT * FROM public.student_presence;
```

## Passo 4: Monitorização e Manutenção

### 4.1 Logs

Monitore os logs do seu backend para quaisquer erros relacionados ao chat ou à presença.

### 4.2 Limpeza de Dados

Considere implementar uma política de retenção para mensagens de chat antigas, caso o volume de dados se torne muito grande. Exemplo:

```sql
-- Excluir mensagens com mais de 1 ano
DELETE FROM public.chat_messages WHERE created_at < NOW() - INTERVAL '1 year';
```

## Próximas Melhorias

1.  **Canais de Chat:** Implementar diferentes canais ou grupos de chat (ex: por turma, por tópico).
2.  **Notificações de Novas Mensagens:** Adicionar notificações push para novas mensagens quando o aplicativo estiver em segundo plano.
3.  **Carregamento Infinito:** Otimizar o carregamento de mensagens para grandes volumes de histórico (infinite scroll).
4.  **Emojis e Anexos:** Adicionar suporte a emojis e envio de arquivos/imagens.
5.  **Moderação:** Ferramentas de moderação para administradores.

## Referências

-   [Supabase Realtime Documentation](https://supabase.com/docs/guides/realtime)
-   [TanStack Router Documentation](https://tanstack.com/router/latest)

## Suporte

Para questões ou problemas, contacte o suporte técnico do Manus em [help.manus.im](https://help.manus.im).
