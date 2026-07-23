// Guarded service worker registration.
// Follows Lovable's PWA skill: never register in dev, preview, iframes, or when ?sw=off.

const APP_SW_PATH = "/sw.js";

function isRefusedContext(): { refused: boolean; reason?: string } {
  if (typeof window === "undefined") return { refused: true, reason: "ssr" };
  if (!import.meta.env.PROD) return { refused: true, reason: "dev" };
  try {
    if (window.self !== window.top) return { refused: true, reason: "iframe" };
  } catch {
    return { refused: true, reason: "iframe" };
  }
  const host = window.location.hostname;
  const refusedHost =
    host.startsWith("id-preview--") ||
    host.startsWith("preview--") ||
    host === "lovableproject.com" ||
    host.endsWith(".lovableproject.com") ||
    host === "lovableproject-dev.com" ||
    host.endsWith(".lovableproject-dev.com") ||
    host === "beta.lovable.dev" ||
    host.endsWith(".beta.lovable.dev");
  if (refusedHost) return { refused: true, reason: "lovable-preview" };
  const params = new URLSearchParams(window.location.search);
  if (params.get("sw") === "off") return { refused: true, reason: "kill-switch" };
  return { refused: false };
}

async function unregisterMatching() {
  if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;
  try {
    const regs = await navigator.serviceWorker.getRegistrations();
    await Promise.all(
      regs
        .filter((r) => {
          const url = r.active?.scriptURL || r.installing?.scriptURL || r.waiting?.scriptURL || "";
          return url.endsWith(APP_SW_PATH);
        })
        .map((r) => r.unregister()),
    );
  } catch {
    // ignore
  }
}

export function registerAppServiceWorker() {
  if (typeof window === "undefined") return;
  const gate = isRefusedContext();
  if (gate.refused) {
    void unregisterMatching();
    return;
  }
  if (!("serviceWorker" in navigator)) return;
  // Dynamic import so workbox-window is only loaded in browser production.
  void import("workbox-window").then(({ Workbox }) => {
    const wb = new Workbox(APP_SW_PATH);
    wb.register().catch((err) => {
      // eslint-disable-next-line no-console
      console.warn("[sw] registration failed", err);
    });
  });
}
