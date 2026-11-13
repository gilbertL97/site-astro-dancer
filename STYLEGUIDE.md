# Guía de estilos

CSS nativo sin framework. Arquitectura por **cascade layers** (orden fijo):

```css
@layer reset, tokens, base, layout, components, utilities;
```

| Capa         | Vive en                    | Contiene                                                                         |
| ------------ | -------------------------- | -------------------------------------------------------------------------------- |
| `reset`      | `src/styles/reset.css`     | Reset mínimo, todo con `:where()` (especificidad 0)                              |
| `tokens`     | `src/styles/tokens.css`    | Única fuente de verdad: custom properties                                        |
| `base`       | `src/styles/base.css`      | Elementos HTML (`body`, `h1`-`h6`, `a`, `:focus-visible`)                        |
| `layout`     | `src/styles/layout.css`    | Primitivas: `.container`, `.stack`, `.cluster`, `.grid`, `.sidebar`, `.switcher` |
| `components` | `<style>` de cada `.astro` | Estilos con ámbito, **siempre envueltos en `@layer components`**                 |
| `utilities`  | `src/styles/utilities.css` | Solo `.visually-hidden`, `.skip-link`, `.flow`, `.text-center`                   |

`src/styles/index.css` declara el orden e importa todo. Astro/Vite lo resuelve
en compilación: **no queda ningún `@import` en cascada en el CSS servido**.
Los estilos globales viven únicamente en `src/styles/`; nada global en componentes.

## Tokens (`tokens.css`)

- **Color** (paleta «Velvet Night»: `#E2CFEA`, `#A06CD5`, `#6247AA`, `#102B3F`,
  `#062726`): semánticos, nunca literales fuera de `tokens.css`. El violeta
  puro no alcanza 4.5:1 sobre oscuro (medido 4.22), así que primario y texto
  atenuado usan tintes derivados verificados. Bordes en violeta al 45%
  según el DESIGN.md del mockup. Tema oscuro por defecto
  (`color-scheme: dark light` + `light-dark()`); `data-theme="light|dark"`
  lo impone.
- **Claro/oscuro**: `color-scheme: light dark` + `light-dark()`: el SO decide por
  defecto. `data-theme="light|dark"` en `<html>` impone un tema manualmente.
- **Tipo fluida**: `--text-xs` … `--text-5xl` con `clamp()`; interlineados
  `--leading-*`; pesos `--font-weight-*`.
- **Espaciado**: `--space-xs` … `--space-3xl`.
- **Tracking**: `--tracking-tight: -0.02em` (display), `--tracking-wide: 0.08em`
  (etiquetas mono en mayúsculas).
- **Formas** (según `docs/mockup-lmen/.../DESIGN.md`, sin curvas burbuja):
  `--radius-sm` en botones/inputs/badges, `--radius-md` en tarjetas,
  `--radius-pill` solo en puntos de estado.
- **Sombras**: sin dropshadows sobre tonos oscuros; `--shadow-glow`
  (halo violeta) para foco interactivo.
- **Tiempos**: `--duration-fast|normal|slow` + `--ease-out`.
- **Z-index con nombre**: `--z-behind|base|sticky|header|overlay|modal|toast|skip`.
- **Táctil**: `--size-touch: 2.75rem` (44px).
- **Breakpoints** (documentados, solo cuando el fluido no basta):
  `40rem` (640px) · `48rem` (768px) · `64rem` (1024px) · `80rem` (1280px).

## Convenciones

- **BEM simplificado**: `.card`, `.card__title`, `.card--featured`.
  Variantes de estado con `data-*`: `.card[data-selected='true']`.
- **Baja especificidad**: clases y `:where()`; sin IDs, sin `!important`,
  sin anidar más de 2 niveles. Stylelint lo impone
  (`selector-max-id: 0`, `selector-max-specificity: 0,3,0`,
  `selector-max-compound-selectors: 3`, `max-nesting-depth: 2`).
- **Propiedades lógicas siempre**: `margin-inline`, `padding-block`,
  `inset-inline-start` (nada de `left`/`right` físicos).
- **Responsive**: mobile-first; `clamp()`/`min()`/`max()` y
  `auto-fit`/`minmax()` antes que media queries; `@container` en componentes.
- **Accesibilidad**: `:focus-visible` global con contraste, `prefers-reduced-motion`
  respetado en base, contraste AA, táctil mínimo 44px.
- **Movimiento**: las duraciones se consumen vía tokens para que
  `prefers-reduced-motion` las neutralice de forma centralizada.

## Ejemplo de componente

```astro
---
// Card.astro
---

<article class="card card--featured" data-selected="false">
  <h3 class="card__title">Título</h3>
  <p class="card__text">Texto.</p>
</article>

<style>
  @layer components {
    .card {
      padding: var(--space-lg);
      background-color: var(--color-bg-muted);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
    }

    .card__title {
      font-size: var(--text-xl);
      color: var(--color-text);
    }

    .card--featured {
      border-color: var(--color-primary);
    }

    .card[data-selected='true'] {
      box-shadow: var(--shadow-md);
    }
  }
</style>
```

## Fuentes

Autoalojadas en `public/fonts/` (subconjunto latino, `font-display: swap`):

- Display: Syne 700/800 (`--font-display`).
- Texto: Plus Jakarta Sans 400/500/600/700 (`--font-sans`).
- Mono/etiquetas: Space Grotesk 500/700 (`--font-mono`).

`src/styles/fonts.css` solo declara `@font-face` (sin capa). Sin `size-adjust`
por ahora: se medirá en la Fase 7 para no empeorar el CLS con aproximaciones.
