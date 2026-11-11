// Mapa de locales, rutas traducibles y disponibilidad por idioma.
// Fuente única de verdad para el enrutado i18n (ver `astro.config.mjs`).
export const locales = ['es', 'ca', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export const routeKeys = ['home', 'privacy', 'cookies', 'legal'] as const;
export type RouteKey = (typeof routeKeys)[number];

// Todas las rutas terminan en `/` (trailingSlash: 'always').
export const routes: Record<RouteKey, Record<Locale, string>> = {
  home: { es: '/', ca: '/ca/', en: '/en/' },
  privacy: { es: '/privacidad/', ca: '/ca/privacitat/', en: '/en/privacy/' },
  cookies: { es: '/cookies/', ca: '/ca/cookies/', en: '/en/cookies/' },
  legal: {
    es: '/aviso-legal/',
    ca: '/ca/avis-legal/',
    en: '/en/legal-notice/',
  },
};

// Idiomas en los que existe cada ruta. La Fase 4 (SEO) lo usa para excluir
// del sitemap y del hreflang las páginas sin traducir.
export const routeLocales: Record<RouteKey, readonly Locale[]> = {
  home: locales,
  privacy: locales,
  cookies: locales,
  legal: locales,
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
