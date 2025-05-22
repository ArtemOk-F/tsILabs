// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // из "@/..." → "<project_root>/src/..."
      "@": resolve(__dirname, "src"),
    },
    // по умолчанию Vite уже резолвит .ts, .tsx, .js, .jsx
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
  },
});
