import type { Configuration } from "lint-staged";

const config: Configuration = {
  "*.{js,mjs,cjs,ts,json,astro,svelte}": "prettier --write --experimental-cli",
  "*.{js,mjs,cjs,ts,astro,svelte}": "eslint --fix",
};

export default config;
