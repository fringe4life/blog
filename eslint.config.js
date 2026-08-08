import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import svelte from "eslint-plugin-svelte";
import vanillaExtract from "@antebudimir/eslint-plugin-vanilla-extract";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";
import svelteConfig from "./svelte.config.js";

export default defineConfig(
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      ".astro/**",
      ".fallow/**",
      "public/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...svelte.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".svelte"],
        parser: tseslint.parser,
        svelteConfig,
      },
    },
  },
  {
    files: ["**/*.css.ts"],
    extends: [vanillaExtract.configs.recommended],
    rules: {
      // Existing styles don't follow concentric order; keep useful VE rules only.
      "vanilla-extract/concentric-order": "off",
      "vanilla-extract/alphabetical-order": "off",
    },
  },
  ...svelte.configs.prettier,
  eslintConfigPrettier,
);
