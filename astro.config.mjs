// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import cloudflare from "@astrojs/cloudflare";
import { satteri } from "@astrojs/markdown-satteri";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    prerenderEnvironment: "node",
    imageService: "compile", // Sharp at build → real resized avif/webp
  }),
  integrations: [svelte(), sitemap()],
  experimental: {
    contentIntellisense: true,
    clientPrerender: true,
    incrementalBuild: true,
  },
  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.fontsource(),
      weights: [400, 700],
      styles: ["normal"],
      subsets: ["latin"],
    },
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  site: "https://mod-6.coinnich09.workers.dev",
  session: false,
  // Astro 7 default processor is Sätteri (Rust). Shiki still highlights fences.
  markdown: {
    processor: satteri({
      features: {
        math: true,
      },
    }),
    syntaxHighlight: {
      type: "shiki",
      excludeLangs: ["mermaid"],
    },
    shikiConfig: {
      theme: "catppuccin-latte",
      wrap: true,
    },
  },
  vite: { plugins: [vanillaExtractPlugin()] },
});
