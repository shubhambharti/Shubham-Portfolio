import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/ajax/libs/pdf.js": {
        target: "https://cdnjs.cloudflare.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ajax\/libs\/pdf.js/, ""),
      },
    },
  },
});
