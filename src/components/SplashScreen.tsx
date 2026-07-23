import { useEffect, useState } from "react";
import bandeiraAngola from "@/assets/bandeira-angola.jpg";

const SEEN_KEY = "angopdf.splash-seen";

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) {
      setVisible(false);
      return;
    }

    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 2200);
    const t3 = setTimeout(() => setPhase(3), 3600);
    const t4 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(SEEN_KEY, "1");
    }, 4400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (!visible) return <>{children}</>;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0806] transition-opacity duration-700 ${
        phase === 3 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Imagem da bandeira de Angola */}
      <div
        className={`relative transition-all duration-1000 ease-out ${
          phase >= 0 ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        {/* Bandeira com efeito de pulsação e brilho */}
        <div
          className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
          style={{
            animation: phase >= 0 ? "flagPulse 3s ease-in-out infinite" : "none",
          }}
        >
          <img
            src={bandeiraAngola}
            alt="Bandeira de Angola"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Brilho dourado atrás da bandeira */}
        <div
          className="absolute inset-0 -z-10 rounded-3xl opacity-30 blur-2xl"
          style={{
            background: "radial-gradient(circle, rgba(255,204,0,0.5) 0%, transparent 70%)",
            animation: phase >= 0 ? "splashGlow 3s ease-in-out infinite" : "none",
          }}
        />
      </div>

      {/* Texto "Angola Conta Contigo" */}
      <div
        className={`mt-8 sm:mt-10 text-center transition-all duration-700 ${
          phase >= 2
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <p
          className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-wide"
          style={{
            background: "linear-gradient(135deg, #FFCC00 0%, #f5e6a3 50%, #FFCC00 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Angola Conta Contigo
        </p>
        <p className="mt-2 text-[11px] sm:text-xs tracking-[0.3em] uppercase text-white/40">
          Amigo do Saber
        </p>
      </div>

      {/* Loader sutil */}
      <div
        className={`mt-6 transition-all duration-500 ${
          phase >= 1 ? "opacity-60" : "opacity-0"
        }`}
      >
        <div className="flex items-center gap-1.5">
          <div
            className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>

      {/* CSS keyframes inline */}
      <style>{`
        @keyframes flagPulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.02); filter: brightness(1.1); }
        }
        @keyframes splashGlow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}
