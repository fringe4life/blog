# How to Request a README Update (AI Runnable)

Provide ONLY this file in future sessions to have the AI re-scan and update `README.md` without giving full repo context.

## What the AI will do

- Re-scan these sources: `package.json`, `astro.config.mjs`, `svelte.config.js`, `tsconfig.json`, `eslint.config.js`, `prettier.config.mjs`, `lint-staged.config.ts`, `.husky/pre-commit`, `.fallowrc.json`, `src/content.config.ts`, `src/content/blog-tags.ts`, `src/lib/blog.ts`, `src/data/`.
- **Scan current folder structure** using these commands:
  - `list_dir` on `src/` to get top-level structure
  - `list_dir` on `src/pages/` to get Astro routes
  - `list_dir` on `src/components/` (and `blog/`, `home/`, `ui/`) for components
  - `list_dir` on `src/layouts/` for layout shells
  - `list_dir` on `src/content/` for content collections sources
  - `list_dir` on `src/styles/` for vanilla-extract tokens/utilities
  - `list_dir` on `src/lib/` and `src/data/` for helpers / site data
  - Use `glob_file_search` with patterns like `src/pages/**/*.astro` for routes
  - Use `glob_file_search` with patterns like `src/**/*.css.ts` for style modules
  - Use `glob_file_search` with patterns like `src/**/*.svelte` for interactive islands
- Update sections in `README.md`:
  - Tech stack badges (sync versions from `package.json` dependencies / key devDeps)
  - Prerequisites and Getting Started (Bun)
  - Available scripts from `package.json`
  - Tech stack and configuration notes (Astro, Svelte islands, vanilla-extract, Content Collections, ESLint, Prettier, Husky, lint-staged, Fallow)
  - Content collections overview (from `src/content.config.ts`)
  - **Project Structure section** — completely regenerate based on current folder structure
- Keep wording concise, match existing style, do not over-explain.
- **Badge versions**: Extract versions from `package.json` and update all badge URLs accordingly.
- **Project Structure**: Must reflect current organization (`pages/`, `components/{blog,home,ui}/`, `layouts/`, `content/`, `styles/`, `.css.ts` co-location).

## Rules

- Use Bun commands where possible (`bun run`, `bunx`).
- Reflect lint/format standards from `eslint.config.js` + `prettier.config.mjs` (Astro + Svelte + vanilla-extract). Note Prettier `--experimental-cli` in scripts.
- Mention pre-commit: Husky runs `lint-staged` then `astro check` (see `.husky/pre-commit`, `lint-staged.config.ts`).
- Mention Fallow config in `.fallowrc.json` if still present (duplicate / health checks).
- Styles: `@vanilla-extract/css` via Vite plugin in `astro.config.mjs`; style modules are `*.css.ts`.
- Interactive UI: Svelte 5 islands (`ContactForm.svelte`, `Toaster.svelte`) via `@astrojs/svelte`.
- Content: Astro Content Collections — blog (markdown), features (JSON), projects (YAML), authors (remote fetch).
- Keep tech stack badges in sync with `package.json` versions (extract from dependencies).
- Preserve existing README headings and tone, only patch relevant sections.
- No env block required unless `.env*` / runtime secrets appear later (static site today).
- Do not change license wording if a license section exists.

## Quick prompt you can paste

Copy this into the chat with this file attached:

```
Please update README.md based on the codebase. Keep sections accurate and concise, prefer Bun commands, sync scripts from package.json, include Astro + Svelte + vanilla-extract + Content Collections notes, mention ESLint/Prettier/Husky/lint-staged (astro check on pre-commit), and regenerate Project Structure from the current src/ tree. Keep headings and tone.
```

## Post-update

- Run Prettier: `bun run format`
- Generate commit message: see `git-commit-msg.md` and run AI to produce message under 140 chars.
