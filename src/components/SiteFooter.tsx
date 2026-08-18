import { MessageCircle } from "lucide-react";
import { WHATSAPP_DISPLAY, WHATSAPP_REQUEST_URL } from "@/lib/library-data";
export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img
              src="/favicon.png"
              alt="Amigo do Saber"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="font-serif text-lg">
              <span className="text-gold">Amigo</span>
              <span className="text-foreground"> do Saber</span>
            </span>
          </div>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Aulas, livros e questionários para quem quer aprender — do concurso público
            à universidade, num só lugar.
          </p>

            <a
              href={WHATSAPP_REQUEST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm text-gold transition-colors hover:bg-gold/20"
            >
              <MessageCircle className="h-4 w-4" />
              Peça o seu livro no WhatsApp — {WHATSAPP_DISPLAY}
            </a>
          </div>

          <div>
            <h4 className="font-serif text-sm text-gold">Catálogo</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Acadêmicos</li>
              <li>Cristãos</li>
              <li>Bíblias &amp; Bíblias de Estudo</li>
              <li>Lançamentos</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm text-gold">Pedidos &amp; Ajuda</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={WHATSAPP_REQUEST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>Como comprar</li>
              <li>Termos de uso</li>
              <li>Publique connosco</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Amigo do Saber · Feito com dedicação em Luanda
        </div>
      </div>
    </footer>
  );
}
