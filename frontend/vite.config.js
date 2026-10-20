import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// El proxy redirige /api/* hacia el backend de Express (puerto 3001)
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
});
