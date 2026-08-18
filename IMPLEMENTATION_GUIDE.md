# Guia de Implementação — Sistema de Notificações do Funil de Vendas

## Resumo Executivo

Este guia fornece instruções passo-a-passo para implementar o sistema de notificações push graduais no Amigo do Saber. O sistema monitora o progresso do utilizador e envia notificações estratégicas para converter utilizadores das 3 aulas gratuitas em assinantes pagantes.

## Arquivos Criados

Os seguintes arquivos foram criados e devem ser integrados no projeto:

1. **`notification_funnel_strategy.md`** — Estratégia de negócio e design do funil
2. **`supabase-notifications-migration.sql`** — Schema da base de dados para notificações
3. **`src/lib/notifications.functions.ts`** — Lógica principal de notificações
4. **`src/lib/notification-scheduler.ts`** — Agendador de tarefas
5. **`src/lib/study.functions.notifications-integration.ts`** — Pontos de integração com código existente

## Passo 1: Criar a Tabela de Notificações no Supabase

### 1.1 Executar a Migration

1. Aceda a [Supabase Dashboard](https://app.supabase.com/project/lbfxlmkngvwrlafgudck/sql)
2. Clique em "SQL Editor" no menu lateral
3. Clique em "New Query"
4. Copie o conteúdo de `supabase-notifications-migration.sql`
5. Cole no editor e clique em "Run"

### 1.2 Verificar a Tabela

Após executar a migration, verifique que a tabela foi criada:

```sql
SELECT * FROM public.notifications LIMIT 1;
```

## Passo 2: Integrar o Código de Notificações

### 2.1 Copiar os Arquivos

```bash
# Os arquivos já foram criados em:
# - src/lib/notifications.functions.ts
# - src/lib/notification-scheduler.ts
# - src/lib/study.functions.notifications-integration.ts
```

### 2.2 Atualizar `src/lib/study.functions.ts`

Siga as instruções em `src/lib/study.functions.notifications-integration.ts` para adicionar os gatilhos de notificação:

**Integração 1:** Após a chamada a `markMasteries` (linha ~366), adicione:

```typescript
// Trigger notification if this is one of the first 3 free lessons
const { trackLessonCompletion } = await import("@/lib/notifications.functions");

// Find the lesson index within the sector
const { getLesson, getSector } = await import("@/lib/study-tracks");

// Get lesson info from the quiz
const { data: quizData } = await supabaseAdmin
  .from("quizzes")
  .select("lessons(track_kind, track_slug, sector_slug, module_slug, lesson_slug)")
  .eq("id", data.quizId)
  .single();

if (quizData?.lessons) {
  const lesson = quizData.lessons as any;
  const sector = getSector(
    lesson.track_kind as TrackKind,
    lesson.track_slug,
    lesson.sector_slug
  );
  
  if (sector) {
    const allLessons = sector.sector.modules.flatMap(m => m.lessons);
    const lessonIndex = allLessons.findIndex(l => l.slug === lesson.lesson_slug);
    
    // Only trigger notification for first 3 free lessons
    if (lessonIndex >= 0 && lessonIndex < 3) {
      await trackLessonCompletion({
        studentId: data.studentId,
        lessonIndex,
        sectorSlug: lesson.sector_slug,
      });
    }
  }
}
```

## Passo 3: Configurar o Agendador de Tarefas

### 3.1 Usar Manus Config para Agendar Tarefas

```bash
# Aceda ao projeto e execute:
manus-config schedule
```

### 3.2 Adicionar Tarefa Agendada

Crie uma nova tarefa com as seguintes configurações:

| Campo | Valor |
|-------|-------|
| **Nome** | Notification Funnel Job |
| **Endpoint** | POST /api/runNotificationFunnelJob |
| **Schedule** | `0 */6 * * *` (a cada 6 horas) |
| **Retry** | Ativado, 3 tentativas |
| **Timeout** | 300 segundos |

### 3.3 Alternativas de Agendamento

Se preferir um agendamento diferente, use estas expressões cron:

- **A cada 4 horas:** `0 */4 * * *`
- **A cada 12 horas:** `0 */12 * * *`
- **Diariamente às 9 AM:** `0 9 * * *`
- **Diariamente às 9 AM e 6 PM:** `0 9,18 * * *`

## Passo 4: Criar Endpoints da API

### 4.1 Adicionar Rotas tRPC (Opcional)

Se o projeto usa tRPC, adicione estas rotas em `server/routers.ts`:

```typescript
import { publicProcedure, router } from "./_core/trpc";
import { runNotificationFunnelJob } from "@/lib/notification-scheduler";

export const appRouter = router({
  // ... existing routes
  
  notifications: router({
    runFunnelJob: publicProcedure.mutation(async () => {
      return await runNotificationFunnelJob();
    }),
    
    healthCheck: publicProcedure.query(async () => {
      const { notificationSchedulerHealthCheck } = await import(
        "@/lib/notification-scheduler"
      );
      return await notificationSchedulerHealthCheck();
    }),
  }),
});
```

## Passo 5: Testar o Sistema

### 5.1 Teste Manual

```bash
# Trigger manual do job de notificações
curl -X POST http://localhost:3000/api/runNotificationFunnelJob

# Health check
curl http://localhost:3000/api/notificationSchedulerHealthCheck
```

### 5.2 Verificar Notificações na Base de Dados

```sql
-- Ver todas as notificações
SELECT * FROM public.notifications ORDER BY created_at DESC;

-- Ver notificações pendentes
SELECT * FROM public.notifications WHERE status = 'pending';

-- Ver notificações por tipo
SELECT notification_type, COUNT(*) as count 
FROM public.notifications 
GROUP BY notification_type;
```

## Passo 6: Implementar Frontend (Opcional)

### 6.1 Componente de Notificações

Crie um componente para exibir notificações ao utilizador:

```typescript
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { NotificationPayload } from "@/lib/notifications.functions";

export function NotificationCenter({ studentId }: { studentId: string }) {
  const [notifications, setNotifications] = useState<NotificationPayload[]>([]);

  useEffect(() => {
    // Fetch initial notifications
    const fetchNotifications = async () => {
      const { data } = await supabase
        .from("notifications")
        .select("*")
        .eq("student_id", studentId)
        .order("created_at", { ascending: false })
        .limit(10);

      if (data) setNotifications(data as NotificationPayload[]);
    };

    fetchNotifications();

    // Subscribe to real-time updates
    const subscription = supabase
      .channel(`notifications:${studentId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "notifications",
          filter: `student_id=eq.${studentId}`,
        },
        (payload) => {
          setNotifications((prev) => [payload.new as NotificationPayload, ...prev]);
        }
      )
      .subscribe();

    return () => subscription.unsubscribe();
  }, [studentId]);

  return (
    <div className="space-y-2">
      {notifications.map((notif) => (
        <div key={notif.id} className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-bold">{notif.title}</h3>
          <p>{notif.body}</p>
        </div>
      ))}
    </div>
  );
}
```

## Passo 7: Monitorização e Manutenção

### 7.1 Logs

Monitore os logs do backend para erros:

```bash
# Ver logs do agendador
tail -f /var/log/notification-scheduler.log
```

### 7.2 Métricas

Use o health check para monitorizar o sistema:

```bash
# Verificar status do agendador
curl http://localhost:3000/api/notificationSchedulerHealthCheck
```

### 7.3 Limpeza de Dados

Periodicamente, arquive notificações antigas:

```sql
-- Arquivar notificações com mais de 90 dias
DELETE FROM public.notifications 
WHERE created_at < NOW() - INTERVAL '90 days' 
AND status IN ('sent', 'delivered', 'failed');
```

## Fluxo de Notificações

```
┌─────────────────────────────────────────────────────────────┐
│ Utilizador Completa Aula Gratuita                           │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────────┐
        │ trackLessonCompletion()    │
        │ (Triggered in submitAttempt)│
        └────────────┬───────────────┘
                     │
                     ▼
        ┌────────────────────────────┐
        │ Insert Notification        │
        │ Status: PENDING            │
        └────────────┬───────────────┘
                     │
                     ▼
        ┌────────────────────────────────────────┐
        │ Scheduled Job (Every 6 Hours)          │
        │ runNotificationFunnelJob()             │
        └────────────┬───────────────────────────┘
                     │
        ┌────────────┴────────────┬────────────────────┐
        │                         │                    │
        ▼                         ▼                    ▼
  ┌──────────────┐    ┌──────────────────┐    ┌──────────────────┐
  │ Check        │    │ Check Abandoned  │    │ Send Pending     │
  │ Inactivity   │    │ Payments         │    │ Notifications    │
  └──────┬───────┘    └────────┬─────────┘    └────────┬─────────┘
         │                     │                       │
         └─────────────────────┴───────────────────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Update Status: SENT  │
                    └──────────────────────┘
```

## Troubleshooting

### Problema: Notificações não estão sendo enviadas

**Solução:**
1. Verifique se a tabela `notifications` foi criada: `SELECT * FROM public.notifications;`
2. Verifique se o agendador está configurado: `manus-config schedule`
3. Verifique os logs do backend para erros
4. Teste manualmente: `curl -X POST http://localhost:3000/api/runNotificationFunnelJob`

### Problema: Erro "notifications table not found"

**Solução:**
1. Execute novamente a migration SQL
2. Verifique se o Supabase está conectado corretamente
3. Verifique as variáveis de ambiente: `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY`

### Problema: Notificações estão sendo duplicadas

**Solução:**
1. Verifique se o agendador está sendo executado múltiplas vezes
2. Ajuste o intervalo de agendamento (aumentar de 6 para 12 horas)
3. Verifique a lógica de deduplicação em `checkAndQueueInactivityNotifications()`

## Próximas Melhorias

1. **Integração com Serviço de Push Real:** Integrar com Firebase Cloud Messaging (FCM) ou similar para enviar notificações reais ao dispositivo
2. **Personalização de Mensagens:** Usar dados do utilizador (nome, progresso) para personalizar as mensagens
3. **A/B Testing:** Testar diferentes mensagens e cronogramas para otimizar conversões
4. **Analytics:** Rastrear taxa de abertura, cliques e conversões de notificações
5. **Segmentação Avançada:** Criar segmentos de utilizadores baseados em comportamento e enviar notificações específicas

## Referências

- [Supabase Documentation](https://supabase.com/docs)
- [Manus WebDev Backend Guide](https://docs.manus.im/webdev-readme-mobile-backend)
- [Cron Expression Syntax](https://crontab.guru/)
- [Push Notifications Best Practices](https://www.apptentive.com/blog/push-notification-best-practices/)

## Suporte

Para questões ou problemas, contacte o suporte técnico do Manus em [help.manus.im](https://help.manus.im).
