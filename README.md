# Portfolio Site Build

Module 6 pulls previous lessons into one portfolio site: home, projects, blog, and contact — built with Astro, Svelte islands, and vanilla-extract.

[![Astro](https://img.shields.io/badge/Astro-7.2.0-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Svelte](https://img.shields.io/badge/Svelte-5.56.8-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev)
[![vanilla-extract](https://img.shields.io/badge/vanilla--extract-1.21.2-FFF176?logo=css3&logoColor=333)](https://vanilla-extract.style)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![ESLint](https://img.shields.io/badge/ESLint-10.8.0-4B32C3?logo=eslint&logoColor=white)](https://eslint.org)
[![Prettier](https://img.shields.io/badge/Prettier-3.9.6-F7B93E?logo=prettier&logoColor=333)](https://prettier.io)
[![Bun](https://img.shields.io/badge/Bun-runtime-000000?logo=bun&logoColor=white)](https://bun.sh)

## Prerequisites

- [Bun](https://bun.sh) (preferred)
- Node.js 22+ (for ESLint / tooling)

## Getting Started

```bash
bun install
bun run dev
```

Site: `http://localhost:4321`

```bash
bun run build    # astro check + build
bun run preview  # preview production build
```

## Scripts

| Script         | Command                                 |
| -------------- | --------------------------------------- |
| `dev`          | `astro dev`                             |
| `build`        | `astro check && astro build`            |
| `preview`      | `astro preview`                         |
| `lint`         | `eslint .`                              |
| `lint:fix`     | `eslint . --fix`                        |
| `format`       | `prettier --write . --experimental-cli` |
| `format:check` | `prettier --check . --experimental-cli` |
| `prepare`      | `husky` (install git hooks)             |

## Tech Stack

- **Astro 7** — pages, layouts, Content Collections, sitemap, font provider (Inter via Fontsource)
- **Svelte 5** — client islands (`ContactForm`, `Toaster` + `svelte-sonner`)
- **vanilla-extract** — type-safe CSS in `*.css.ts` (Vite plugin in `astro.config.mjs`)
- **TypeScript** — strict Astro tsconfig + `@astrojs/check`
- **ESLint** — `eslint-plugin-astro`, `eslint-plugin-svelte`, `@antebudimir/eslint-plugin-vanilla-extract`, `typescript-eslint`
- **Prettier** — `prettier-plugin-astro` + `prettier-plugin-svelte`; scripts use `--experimental-cli`
- **Husky + lint-staged** — pre-commit runs format/lint on staged files, then `astro check`
- **Fallow** — `.fallowrc.json` for duplicate / complexity health checks

## Content Collections

Defined in `src/content.config.ts`:

| Collection | Source                       | Notes                                 |
| ---------- | ---------------------------- | ------------------------------------- |
| `blog`     | `src/content/blog/**/*.md`   | Tags from `blog-tags.ts`, author refs |
| `features` | `src/content/features.json`  | Home feature cards                    |
| `projects` | `src/content/projects.yaml`  | Project links + images                |
| `authors`  | remote JSONPlaceholder users | Fetched at build                      |

Blog helpers / pagination: `src/lib/blog.ts`.

## Project Structure

```text
src/
├── assets/                 # images (e.g. project thumbnails)
├── components/
│   ├── blog/               # cards, pagination, tags, author, hero
│   ├── home/               # features + projects sections
│   ├── ui/                 # Link, Header, FormattedDate, card styles
│   ├── ContactForm.svelte  # Svelte island
│   ├── Toaster.svelte      # Svelte island
│   ├── Connect.astro
│   └── Hero.astro
├── content/
│   ├── blog/               # markdown posts
│   ├── blog-tags.ts
│   ├── features.json
│   └── projects.yaml
├── content.config.ts       # collection schemas + loaders
├── layouts/                # Layout, Nav, Footer, BaseHead (+ .css.ts)
├── lib/                    # blog helpers
├── pages/
│   ├── index.astro
│   ├── projects.astro
│   ├── 404.astro / 500.astro
│   └── blog/               # list, page, tag/[tag] pagination
└── styles/                 # variables, reset, utilities, keyframes, list
```

Co-located `*.css.ts` sits next to components/layouts that use them.

## Quality Hooks

Pre-commit (`.husky/pre-commit`):

1. `bunx lint-staged` — Prettier + ESLint `--fix` on staged files (`lint-staged.config.ts`)
2. `bunx astro check` — whole-project type check
