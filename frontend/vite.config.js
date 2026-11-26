import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // also listen on 127.0.0.1 / LAN IP, not just "localhost"
    // Forward /api calls to the Express backend
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
