# [AGENTS.md](http://AGENTS.md)

\*\*Instructions for AI coding agents\*\* (Claude Code, Cursor, Copilot, Codex, etc.) working in this repository.

\*\*READ THIS ENTIRE FILE BEFORE MODIFYING ANYTHING.\*\* If any rule here contradicts a specific user request, \*\*ask for clarification before proceeding\*\*.

---

## 1. Project Overview

- \*\*Site Type:\*\* [corporate / blog / portfolio / documentation]
- \*\*Production Domain:\*\* [[https://yourdomain.com](https://yourdomain.com)]
- \*\*Languages:\*\* [es (default), en, pt]
- \*\*Hosting:\*\* [Cloudflare Pages / Netlify / Vercel]
- \*\*Package Manager:\*\* [npm / pnpm] (Always use the lockfile; \*\*NEVER\*\* mix package managers)
- \*\*Node Version:\*\* Current LTS, pinned in `.nvmrc` and `package.json` `engines`.

This is a \*\*100% static site\*\* built with \*\*Astro\*\* (latest stable version).

\*\*Priorities (in strict order):\*\* Security, Accessibility, SEO, Performance, Maintainability.

---

## 2. Golden Rules

1. \*\*Consult official Astro documentation\*\* before using any API. Do not guess from memory. If uncertain, state it explicitly.
2. \*\*Zero client-side JavaScript by default.\*\* Islands (`client:visible`, `client:idle`, etc.) are only allowed when strictly necessary and explicitly justified.
3. \*\*No new dependencies without strong justification.\*\* Prefer native HTML, CSS, and JS. If proposing a package, state its bundle size impact and maintenance burden.
4. \*\*Strict TypeScript\*\* (`astro/tsconfigs/strictest`). `astro check` MUST pass with zero errors and no unjustified `any` types.
5. \*\*Work in small, incremental phases.\*\* Upon completion, summarize changes, list all touched files, and provide exact verification commands.
6. \*\*Deliver COMPLETE files.\*\* NEVER use `...`, `// rest of the code`, or placeholders. Output the entire file content.
7. \*\*NEVER invent legal content, company data, or final translations.\*\* Mark missing content explicitly with `TODO(content)`.
8. \*\*NEVER\*\* commit secrets, `.env` files, or API keys to the repository.

---

## 3. Essential Commands

\`\`\`bash

npm run dev # Start development server

npm run build # Production build (outputs to dist/)

npm run preview # Preview the production build locally

npm run check # Astro type checking (must pass with 0 errors)

npm run lint # ESLint

npm run lint:css # Stylelint

npm run format # Prettier

npm run test:a11y # axe / pa11y accessibility audit on dist/

npm run test:links # Broken link checker on dist/

\`\`\`

\*\*Pre-completion checklist:\*\* Before marking any task as done, you MUST successfully run: `check`, `lint`, `lint:css`, and `build`.

---

## 4. Project Structure

\`\`\`text

/

├─ public/

│ ├─ \_headers # Security and cache headers

│ ├─ robots.txt

│ ├─ .well-known/security.txt

│ └─ og/ # Open Graph images per language

├─ src/

│ ├─ assets/ # Images and fonts processed by Astro

│ ├─ components/ # Reusable .astro components

│ ├─ content/ # Content Collections (one dir per language)

│ │ ├─ blog/es/ en/ pt/

│ ├─ i18n/

│ │ ├─ ui.ts # Typed translation dictionaries

│ │ ├─ routes.ts # Translated route map

│ │ └─ utils.ts # useTranslations(), getLocaleUrl()

│ ├─ layouts/BaseLayout.astro

│ ├─ pages/ # Default language has no prefix; others in /en, /pt...

│ ├─ styles/ # Global CSS architecture (see Section 6)

│ └─ content.config.ts

├─ .github/workflows/ # CI/CD pipelines

├─ astro.config.mjs

├─ [STYLEGUIDE.md](http://STYLEGUIDE.md)

└─ [AGENTS.md](http://AGENTS.md)

\`\`\`

---

## 5. Astro Configuration

- `site`: Must point to the final production domain (mandatory for canonical URLs and sitemap).
- `output: 'static'`, `trailingSlash: 'always'`, `build.format: 'directory'`, `compressHTML: true`. \*\*NEVER change the trailing slash policy\*\* once published.
- `i18n`: Configure `defaultLocale`, `locales`, and `routing.prefixDefaultLocale: false`.
- \*\*Integrations:\*\* `@astrojs/sitemap` (with locale mapping), `@astrojs/mdx`, `@astrojs/rss` (if a blog exists).
- \*\*Prefetch:\*\* Use `viewport` strategy. NEVER use `prefetchAll`.

---

## 6. CSS Architecture

\*\*Native CSS only, no frameworks.\*\* Inspired by ITCSS and CUBE CSS, strictly ordered using \*\*CSS Cascade Layers\*\*:

\`\`\`css

@layer reset, tokens, base, layout, components, utilities;

\`\`\`

\`\`\`text

src/styles/

├─ index.css # Declares @layer order and imports the rest

├─ reset.css # Minimal modern reset

├─ tokens.css # Design tokens (custom properties)

├─ base.css # HTML element styles

├─ layout.css # Primitives: .container, .stack, .cluster, .grid, .sidebar, .switcher

└─ utilities.css # Minimal utilities: .visually-hidden, .skip-link, .flow

\`\`\`

### CSS Rules

- \*\*Mandatory Tokens in `:root`:\*\* Semantic colors (`--color-bg`, `--color-text`, `--color-primary`, `--color-border`), fluid typography scale with `clamp()`, spacing scale (`--space-xs` … `--space-3xl`), radii, shadows, durations, and named z-indexes. \*\*Magic values (hex colors, raw pixels) are STRICTLY PROHIBITED\*\* outside of `tokens.css`.
- \*\*Light/Dark Theme:\*\* Use `color-scheme` and `light-dark()` (or `prefers-color-scheme`), with optional `data-theme` for manual override.
- \*\*Scope:\*\* Global styles live ONLY in `src/styles/`. Component styles go in the scoped `[[ORCA_RICH_MD:4d270567f7b237822f7169c041263f11:inline-html:%3Cstyle%3E]]` block of their `.astro` file and must use ONLY tokens.
- \*\*Low Specificity:\*\* Use class selectors and `:where()` in reset/base. NO IDs, NO `!important`, NO nesting deeper than 2 levels.
- \*\*Naming Convention:\*\* Simplified BEM (`.card`, `.card__title`, `.card--featured`) and `data-*` attributes for states/variants.
- \*\*Responsive:\*\* Mobile-first. Prefer `@container` queries, `clamp()`, `min()`, `max()`, and `auto-fit/minmax` over traditional media queries.
- \*\*Logical Properties:\*\* Use `margin-inline`, `padding-block`, `inset-inline-start` to support RTL without duplicating CSS.
- \*\*Accessibility in CSS:\*\* Clear `:focus-visible`, respect `prefers-reduced-motion`, ensure AA contrast, and maintain touch targets ≥ 44px.
- \*\*Performance:\*\* NO runtime cascading `@import`. Self-hosted fonts with `font-display: swap` and `size-adjust` to prevent CLS.
- \*\*Stylelint Enforcement:\*\* Must enforce property order, ban `!important`, limit specificity, and mandate variables for colors/spacing.

---

## 7. Internationalization (i18n)

- \*\*Typed Dictionaries:\*\* `src/i18n/ui.ts` MUST have the \*\*exact same keys\*\* across all languages. The TypeScript type MUST fail at compile time if a key is missing.
- \*\*Helpers:\*\* Use `useTranslations(locale)` and `getLocaleUrl(locale, path)` with fallback to the default locale.
- \*\*Route Mapping:\*\* Translated routes are managed via a central map (e.g., `/es/contacto` ↔ `/en/contact`).
- \*\*Language Selector:\*\* MUST link to the \*\*equivalent page\*\* in the target language, NEVER to the homepage.
- \*\*No Auto-Redirect:\*\* NEVER automatically redirect based on `Accept-Language`. At most, suggest a banner.
- \*\*HTML Attributes:\*\* Dynamic `[[ORCA_RICH_MD:4d270567f7b237822f7169c041263f11:inline-html:%3Chtml%20lang%3E]]`; add `dir="rtl"` if an RTL language is introduced.
- \*\*Formatting:\*\* Dates, numbers, and currency MUST use `Intl.*` APIs, never manual formatting.
- \*\*Untranslated Pages:\*\* MUST NOT be published as copies of the default language, and MUST NOT appear in the sitemap or hreflang tags.
- \*\*UI Text:\*\* NEVER hardcoded in component templates; ALWAYS retrieved via the dictionary.

---

## 8. Technical SEO

The `src/components/SEO.astro` component is the \*\*single source of truth\*\* for metadata. Every page MUST use it to generate:

- Unique `[[ORCA_RICH_MD:4d270567f7b237822f7169c041263f11:inline-html:%3Ctitle%3E]]` (50-60 chars) and unique `meta description` (120-160 chars).
- Absolute, self-referencing \*\*Canonical\*\* URL.
- Reciprocal \*\*hreflang\*\* tags for all languages, plus `x-default`.
- Open Graph and Twitter Cards, including `og:locale`, `og:locale:alternate`, and a 1200×630 image per language.
- \*\*JSON-LD:\*\* `Organization`, `WebSite`, `BreadcrumbList`, and `Article` (when applicable).

### Additional SEO Rules

- Exactly \*\*one `[[ORCA_RICH_MD:4d270567f7b237822f7169c041263f11:inline-html:%3Ch1%3E]]`\*\* per page. Use semantic HTML (`header`, `nav`, `main`, `article`, `footer`).
- `robots.txt` must reference the sitemap. Generate `sitemap-index.xml`. Include per-language RSS if a blog exists.
- Provide a \*\*real 404 page\*\* that returns a 404 HTTP status code.
- Direct 301 redirects (no chains) configured in `_redirects` or hosting config.
- Descriptive internal links (NEVER "click here") and breadcrumb navigation.
- \*\*Images:\*\* Use `[[ORCA_RICH_MD:4d270567f7b237822f7169c041263f11:inline-html:%3CImage%20%2F%3E]]` / `[[ORCA_RICH_MD:4d270567f7b237822f7169c041263f11:inline-html:%3CPicture%20%2F%3E]]` from `astro:assets`. Serve AVIF/WebP. ALWAYS provide `width` and `height`. Provide meaningful `alt` text (or `alt=""` if purely decorative). Use `loading="eager"` + `fetchpriority="high"` \*\*ONLY\*\* for the LCP image.

### Performance Targets

LCP < 2.5s · INP < 200ms · CLS < 0.1 · Lighthouse ≥ 95 (Mobile) for Performance, Accessibility, Best Practices, and SEO.

---

## 9. Security

- \*\*Headers:\*\* Configure in `public/_headers` (or `vercel.json`): HSTS, `X-Content-Type-Options: nosniff`, `frame-ancestors` / `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`, and a \*\*strict CSP without `unsafe-inline` for scripts\*\*. Set `Cache-Control: public, max-age=31536000, immutable` for `/_astro/*`.
- \*\*CSP Maintenance:\*\* Adapt the CSP to what the site actually loads. If adding a third-party resource, \*\*you MUST update the CSP in the exact same commit\*\*.
- \*\*Preview Environments:\*\* MUST include `X-Robots-Tag: noindex`.
- \*\*No Client-Side Secrets:\*\* Environment variables are only for CI/hosting. Any variable prefixed with `PUBLIC_` is considered public.
- \*\*Forms:\*\* Process via external service or serverless function. Include honeypot or Turnstile/hCaptcha, and enforce server-side validation.
- \*\*SRI:\*\* Always use `integrity` and `crossorigin` attributes on external scripts or stylesheets.
- \*\*Security.txt:\*\* Must exist at `/.well-known/security.txt`.
- \*\*Dependencies:\*\* Dependabot or Renovate must be active. Run `npm audit` in CI. Versions are pinned via the lockfile.
- \*\*XSS Prevention:\*\* NEVER use `set:html` or `innerHTML` with untrusted content.
- \*\*External Links:\*\* Links opening in a new tab MUST have `rel="noopener noreferrer"`.

---

## 10. Accessibility & Legal

- \*\*WCAG 2.2 AA Compliance:\*\* Skip link, visible focus indicators, full keyboard navigation, proper form labels, correct heading hierarchy, and sufficient color contrast.
- Respect `prefers-reduced-motion` and `prefers-color-scheme` media queries.
- \*\*Legal Pages:\*\* Privacy policy, cookie policy, and legal notice MUST be translated into all supported languages.
- \*\*Consent Banner:\*\* ONLY deploy if non-essential cookies are used. Strongly prefer cookie-less analytics (e.g., Plausible, Umami, Cloudflare Web Analytics).
- \*\*Third-Party Scripts:\*\* Defer loading or use Partytown. They MUST NOT be render-blocking.

---

## 11. CI/CD Pipeline

GitHub Actions workflow MUST execute in this exact order:

1. `npm ci`
2. `astro check`
3. ESLint + Stylelint + Prettier (`--check`)
4. `npm run build`
5. Broken link check on `dist/`
6. Lighthouse CI (enforcing thresholds from Section 8)
7. Accessibility audit (axe / pa11y)

\*\*Deployment:\*\* Automatic preview per PR. Production deploys only from `main`. The `main` branch is protected: mandatory PR reviews and all CI checks must be green.

---

## 12. Code Conventions

- \*\*Code Language:\*\* English (variables, functions, components, commits). \*\*Content Language:\*\* Respective locale.
- \*\*Naming:\*\* Components in `PascalCase.astro`; utilities in `camelCase.ts`; content files in [`kebab-case.md`](http://kebab-case.md).
- \*\*Typing:\*\* Component props MUST be typed using `interface Props`.
- \*\*Commits:\*\* Follow \*\*Conventional Commits\*\* (`feat:`, `fix:`, `docs:`, `chore:`, `perf:`, `refactor:`).
- \*\*Cleanliness:\*\* No dead code, no `console.log`, no `TODO` comments without an assigned owner or clear context.
- \*\*Scope:\*\* Small, focused changes. One PR = one specific purpose.

---

## 13. Definition of Done (DoD)

A task is ONLY considered complete when ALL of the following are true:

- \[ \] `check`, `lint`, `lint:css`, and `build` pass with zero errors or new warnings.
- \[ \] Functionality is verified in \*\*all\*\* supported languages (not just the default).
- \[ \] Canonical and hreflang tags are correct on all affected pages.
- \[ \] No CSS magic values were introduced; only design tokens were used.
- \[ \] No client-side JS was added without explicit, documented justification.
- \[ \] No accessibility regressions (keyboard navigation, focus states, contrast).
- \[ \] Security headers and CSP remain valid and updated for the new changes.
- \[ \] Documentation ([`STYLEGUIDE.md`](http://STYLEGUIDE.md), [`AGENTS.md`](http://AGENTS.md), or [`README.md`](http://README.md)) is updated if any convention changed.

---

## 14. Recommended Delivery Phases

1. \*\*Foundation:\*\* Project structure, Astro config, TypeScript, linters, and CI setup.
2. \*\*Design System:\*\* CSS layers, tokens, reset, base, layout, utilities, and [`STYLEGUIDE.md`](http://STYLEGUIDE.md).
3. \*\*i18n:\*\* Dictionaries, helpers, route mapping, language selector, and base layout.
4. \*\*SEO:\*\* `SEO.astro` component, sitemap, robots.txt, JSON-LD, and hreflang implementation.
5. \*\*Components & Pages:\*\* Header, footer, navigation, hero, cards, forms, 404, and legal pages.
6. \*\*Content:\*\* Content Collections per language and blog templates (if applicable).
7. \*\*Performance & A11y:\*\* Image/font optimization, Lighthouse audits, and axe/pa11y fixes.
8. \*\*Security:\*\* Headers, CSP tuning, SRI, and verification via [securityheaders.com](http://securityheaders.com).
9. \*\*Deployment:\*\* Domain setup, redirects, preview environments, launch checklist, and Search Console submission.

---

## 15. Agent Response Protocol

When executing tasks, you MUST adhere to this response format:

1. \*\*Before starting a phase:\*\* Confirm your understanding of the task and list any doubts or missing context (maximum 5 bullet points).
2. \*\*When multiple solutions exist:\*\* Propose ONE primary solution, justify why it is the best choice, and mention the discarded alternative in a single sentence.
3. \*\*Upon completion:\*\* Provide a brief summary, a complete list of created/modified files, and the exact terminal commands to verify the work.
4. \*\*Limitations:\*\* If you cannot execute a step (e.g., running Lighthouse locally), state it explicitly. NEVER claim a check passed without actually verifying it.
5. \*\*Code Output:\*\* ALWAYS output full, complete files. NEVER truncate code with `...` or comments like `// rest of the file`.

\`\`\`
