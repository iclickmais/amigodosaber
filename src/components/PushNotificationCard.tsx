import { useEffect, useState } from "react";
import { Bell, BellOff, CheckCircle2, Smartphone } from "lucide-react";
import { disablePushNotifications, getPushPublicKey, getPushStatus, registerPushSubscription } from "@/lib/push.functions";

function base64ToBytes(value: string) {
  const padding = "=".repeat((4 - (value.length % 4)) % 4);
  const base64 = (value + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = window.atob(base64);
  return Uint8Array.from([...raw].map((char) => char.charCodeAt(0)));
}

export function PushNotificationCard({ studentId }: { studentId: string }) {
  const [enabled, setEnabled] = useState(false);
  const [configured, setConfigured] = useState(true);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    getPushStatus({ data: { studentId } }).then((result) => {
      setEnabled(result.enabled);
      setConfigured(result.configured);
    }).catch(() => {});
  }, [studentId]);

  async function enable() {
    setBusy(true);
    setMessage(null);
    try {
      if (!("Notification" in window) || !("serviceWorker" in navigator) || !("PushManager" in window)) {
        throw new Error("Este navegador não suporta notificações push.");
      }
      const permission = await Notification.requestPermission();
      if (permission !== "granted") throw new Error("Permissão não concedida. Podes activá-la nas definições do navegador.");
      const { publicKey } = await getPushPublicKey();
      if (!publicKey) throw new Error("As notificações ainda não foram configuradas no servidor. Adiciona as chaves VAPID no ambiente de produção.");
      const registration = await navigator.serviceWorker.ready;
      const existing = await registration.pushManager.getSubscription();
      const subscription = existing ?? await registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: base64ToBytes(publicKey) as BufferSource });
      const json = subscription.toJSON();
      if (!json.endpoint || !json.keys?.p256dh || !json.keys.auth) throw new Error("Não foi possível obter a subscrição deste dispositivo.");
      await registerPushSubscription({ data: { studentId, endpoint: json.endpoint, keys: { p256dh: json.keys.p256dh, auth: json.keys.auth }, userAgent: navigator.userAgent } });
      setEnabled(true);
      setConfigured(true);
      setMessage("Lembretes activados neste dispositivo.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Não foi possível activar os lembretes.");
    } finally {
      setBusy(false);
    }
  }

  async function disable() {
    setBusy(true);
    setMessage(null);
    try {
      await disablePushNotifications({ data: { studentId } });
      setEnabled(false);
      setMessage("Lembretes desligados. Podes voltar a activá-los quando quiseres.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Não foi possível desligar os lembretes.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="mt-8 rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${enabled ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300" : "bg-gold/15 text-gold"}`}>
          {enabled ? <Bell className="h-5 w-5" /> : <Smartphone className="h-5 w-5" />}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2"><h2 className="font-serif text-xl">Lembretes de estudo</h2>{enabled && <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-300"><CheckCircle2 className="h-3 w-3" /> Activos</span>}</div>
          <p className="mt-1 text-sm text-muted-foreground">Recebe um lembrete quando ficares dois dias sem estudar, para proteger o teu ritmo.</p>
        </div>
      </div>
      {!configured && <p className="mt-4 rounded-xl border border-gold/30 bg-gold/5 p-3 text-xs text-muted-foreground">O servidor ainda precisa das chaves VAPID para enviar notificações quando o navegador estiver fechado.</p>}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {enabled ? <button type="button" onClick={disable} disabled={busy} className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-muted disabled:opacity-50"><BellOff className="h-4 w-4" /> {busy ? "A actualizar…" : "Desligar lembretes"}</button> : <button type="button" onClick={enable} disabled={busy} className="inline-flex items-center gap-2 rounded-xl bg-gold px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:brightness-110 disabled:opacity-50"><Bell className="h-4 w-4" /> {busy ? "A activar…" : "Activar lembretes"}</button>}
        {message && <span className="text-xs text-muted-foreground">{message}</span>}
      </div>
    </section>
  );
}
