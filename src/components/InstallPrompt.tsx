import { useEffect, useState } from "react";
import { Download, X, Share } from "lucide-react";

const DISMISS_KEY = "amigodosaber.install-dismissed";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    // iOS Safari
    (window.navigator as unknown as { standalone?: boolean }).standalone === true
  );
}

function isIos(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [open, setOpen] = useState(false);
  const [ios, setIos] = useState(false);

  useEffect(() => {
    if (isStandalone()) return;
    if (localStorage.getItem(DISMISS_KEY)) return;

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setOpen(true);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);

    const onInstalled = () => {
      setOpen(false);
      localStorage.setItem(DISMISS_KEY, "1");
    };
    window.addEventListener("appinstalled", onInstalled);

    // iOS não dispara beforeinstallprompt — mostrar instruções manuais.
    let t: ReturnType<typeof setTimeout> | undefined;
    if (isIos()) {
      setIos(true);
      t = setTimeout(() => setOpen(true), 1500);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
      if (t) clearTimeout(t);
    };
  }, []);

  if (!open) return null;

  const dismiss = () => {
    setOpen(false);
    localStorage.setItem(DISMISS_KEY, "1");
  };

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    const choice = await deferred.userChoice;
    if (choice.outcome === "accepted") localStorage.setItem(DISMISS_KEY, "1");
    setDeferred(null);
    setOpen(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[10000] p-3 sm:p-4">
      <div className="mx-auto flex max-w-md flex-col gap-3 rounded-2xl border border-border bg-card/95 p-4 shadow-2xl backdrop-blur">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Download className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">
              Instalar o Amigo do Saber
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {ios
                ? "Toque em Partilhar e depois em “Adicionar ao ecrã principal” para instalar a app."
                : "Instale a app no seu telemóvel para estudar mais rápido e sem internet."}
            </p>
          </div>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Fechar"
            className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex gap-2">
          {ios ? (
            <div className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-3 py-2 text-xs text-muted-foreground">
              <Share className="h-4 w-4" /> Partilhar → Adicionar ao ecrã principal
            </div>
          ) : (
            <button
              type="button"
              onClick={install}
              className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Instalar agora
            </button>
          )}
          <button
            type="button"
            onClick={dismiss}
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Agora não
          </button>
        </div>
      </div>
    </div>
  );
}
