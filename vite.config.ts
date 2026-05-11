import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths"; // <--- Добавили импорт

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsconfigPaths(), // <--- Добавили плагин сюда (он заменит ручные настройки)
    tailwindcss(),
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tanstackStart({
      server: { entry: "server" },
    }),
    viteReact(),
  ],
});