import { useEffect, useState } from "react";

const SEEN_KEY = "angopdf.splash-seen";

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    // Se já viu o splash, não mostrar
    if (sessionStorage.getItem(SEEN_KEY)) {
      setVisible(false);
      return;
    }

    // Phase 0: bandeira aparece (0–800ms)
    const t1 = setTimeout(() => setPhase(1), 800);
    // Phase 1: texto aparece (800–2400ms)
    const t2 = setTimeout(() => setPhase(2), 2400);
    // Phase 2: fade out (2400–3600ms)
    const t3 = setTimeout(() => setPhase(3), 3600);
    // Phase 3: remover
    const t4 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(SEEN_KEY, "1");
    }, 4200);

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
      {/* Bandeira de Angola animada */}
      <div
        className={`relative transition-all duration-1000 ease-out ${
          phase >= 0 ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        {/* Bandeira CSS pura */}
        <div className="w-52 h-32 sm:w-64 sm:h-40 relative overflow-hidden rounded-lg shadow-2xl shadow-black/50">
          {/* Faixa superior preta */}
          <div
            className="absolute top-0 left-0 w-full h-1/2 bg-black"
            style={{
              animation: phase >= 0 ? "flagWave 2s ease-in-out infinite" : "none",
            }}
          />
          {/* Faixa inferior vermelha */}
          <div
            className="absolute bottom-0 left-0 w-full h-1/2"
            style={{
              background: "linear-gradient(180deg, #cc092f 0%, #e30613 100%)",
              animation: phase >= 0 ? "flagWave 2s ease-in-out infinite reverse" : "none",
            }}
          />
          {/* Emblema central — catana + estrela + engrenagem simplificado */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative"
              style={{
                animation: phase >= 1 ? "emblemGlow 2s ease-in-out infinite" : "none",
              }}
            >
              {/* Estrela */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                className="drop-shadow-lg"
              >
                <polygon
                  points="14,2 17.5,10 26,10 19,15.5 22,24 14,19 6,24 9,15.5 2,10 10.5,10"
                  fill="#FFCC00"
                  stroke="#cc9900"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Brilho atrás da bandeira */}
        <div
          className="absolute inset-0 -z-10 rounded-3xl opacity-30 blur-xl"
          style={{
            background: "radial-gradient(circle, rgba(255,204,0,0.4) 0%, transparent 70%)",
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
        @keyframes flagWave {
          0%, 100% { transform: skewY(0deg) scaleX(1); }
          25% { transform: skewY(-1deg) scaleX(0.99); }
          75% { transform: skewY(1deg) scaleX(0.99); }
        }
        @keyframes emblemGlow {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(255,204,0,0.3)); }
          50% { filter: drop-shadow(0 0 12px rgba(255,204,0,0.7)); }
        }
        @keyframes splashGlow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
