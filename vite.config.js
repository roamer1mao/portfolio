import { defineConfig } from "vite";

// project sites live under /<repo>/, so the deploy workflow passes BASE
export default defineConfig({
  base: process.env.BASE ?? "/",
});
