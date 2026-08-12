/// <reference lib="webworker" />
import { clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";

declare const self: ServiceWorkerGlobalScope & {
  __WB_MANIFEST: Array<{ url: string; revision?: string | null }>;
};

precacheAndRoute(self.__WB_MANIFEST);
self.skipWaiting();
clientsClaim();

self.addEventListener("push", (event) => {
  let payload: { title?: string; body?: string; url?: string; icon?: string; badge?: string } = {};
  try {
    payload = event.data?.json() ?? {};
  } catch {
    payload = { body: event.data?.text() ?? "Tens uma nova mensagem do Amigo do Saber." };
  }

  event.waitUntil(
    self.registration.showNotification(payload.title ?? "Amigo do Saber", {
      body: payload.body ?? "Está na hora de retomar o teu estudo.",
      icon: payload.icon ?? "/icon-512.png",
      badge: payload.badge ?? "/favicon.png",
      data: { url: payload.url ?? "/painel" },
      tag: "amigo-do-saber-study",
    }),
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = new URL(event.notification.data?.url ?? "/painel", self.location.origin).href;
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      const existing = clientList.find((client) => "focus" in client);
      if (existing) {
        void existing.navigate(url);
        return existing.focus();
      }
      return self.clients.openWindow(url);
    }),
  );
});
