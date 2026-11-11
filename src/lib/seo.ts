import {
  defaultLocale,
  locales,
  routeLocales,
  routes,
  type Locale,
  type RouteKey,
} from '../i18n/routing';

// TODO(Fase 9): sustituir por el dominio final (mismo valor que `site` en astro.config.mjs).
export const FALLBACK_SITE = 'https://example.com/';

export function resolveSite(astroSite: URL | undefined): URL {
  return astroSite ?? new URL(FALLBACK_SITE);
}

export function toAbsolute(site: URL, path: string): string {
  return new URL(path, site).href;
}

export function findRouteKey(pathname: string): RouteKey | undefined {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const keys = Object.keys(routes) as RouteKey[];
  return keys.find((key) =>
    (Object.values(routes[key]) as string[]).includes(normalized),
  );
}

export interface AlternateLink {
  hreflang: string;
  href: string;
}

const HREFLANG: Record<Locale, string> = {
  es: 'es-ES',
  ca: 'ca-ES',
  en: 'en-US',
};

const OG_LOCALE: Record<Locale, string> = {
  es: 'es_ES',
  ca: 'ca_ES',
  en: 'en_US',
};

// Alternos recíprocos + x-default. Solo incluye los idiomas donde la ruta
// existe (routeLocales); las páginas sin traducir quedan fuera del hreflang.
export function getAlternateLinks(
  site: URL,
  pathname: string,
): AlternateLink[] {
  const key = findRouteKey(pathname);
  if (key === undefined) {
    return [];
  }
  const links = routeLocales[key].map((locale) => ({
    hreflang: HREFLANG[locale],
    href: toAbsolute(site, routes[key][locale]),
  }));
  links.push({
    hreflang: 'x-default',
    href: toAbsolute(site, routes[key][defaultLocale]),
  });
  return links;
}

export function ogLocale(locale: Locale): string {
  return OG_LOCALE[locale];
}

export function alternateOgLocales(locale: Locale): string[] {
  return locales
    .filter((item) => item !== locale)
    .map((item) => OG_LOCALE[item]);
}
