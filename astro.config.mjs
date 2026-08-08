// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://astro.build/config
export default defineConfig({
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
  site: "http://localhost:4321",
  session: false,
  vite: { plugins: [vanillaExtractPlugin()] },
});
