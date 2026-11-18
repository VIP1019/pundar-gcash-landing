import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Vite's index.html transformer — injects SEO/OG/Twitter tags into the static
// <head> so we don't depend on TanStack Start's HeadContent (SSR-only).
function injectMetaTags(): Plugin {
  return {
    name: "inject-meta-tags",
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        const meta = `
    <meta name="description" content="Pundar is the everyday money app for Filipinos powered by Stellar. Send instantly, split bills, join Paluwagan Circles, and grow your money." />
    <meta name="author" content="Pundar" />
    <meta property="og:title" content="Pundar — Your everyday money app" />
    <meta property="og:description" content="Send, Pay, Save, and Grow. Powered by Stellar Blockchain." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://pundar.site" />
    <meta property="og:site_name" content="PUNDAR" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@PundarApp" />
    <meta name="twitter:domain" content="pundar.site" />
    <link rel="icon" href="/logo.png" type="image/png" />
    <title>Pundar — Send, Save, Grow on Stellar</title>`;
        return html.replace(/<title>[\s\S]*?<\/title>/, meta.trim());
      },
    },
  };
}

export default defineConfig({
  base: process.env.BASE_URL || (process.env.GITHUB_PAGES ? "/pundar-gcash-landing/" : "/"),
  plugins: [injectMetaTags(), react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
