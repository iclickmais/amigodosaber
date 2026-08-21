// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [
      VitePWA({
        strategies: "injectManifest",
        srcDir: "src",
        registerType: "autoUpdate",
        injectRegister: null,
        filename: "sw.ts",
        devOptions: { enabled: false },
        manifest: false,
        injectManifest: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,woff2}"],
          // O catálogo real com mais de 10.000 livros gera um bundle superior ao limite padrão do Workbox.
          // Mantemos a PWA activa e permitimos precache até 16 MiB, acima do maior bundle actual.
          maximumFileSizeToCacheInBytes: 16 * 1024 * 1024,
        },
      }),
    ],
  },
});
