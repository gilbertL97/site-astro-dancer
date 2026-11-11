import {
  defaultLocale,
  isLocale,
  routes,
  type Locale,
  type RouteKey,
} from './routing';
import { ui, type Translation } from './ui';

export function useTranslations(locale: Locale): Translation {
  return ui[locale] ?? ui[defaultLocale];
}

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0] ?? '';
  if (isLocale(segment) && segment !== defaultLocale) {
    return segment;
  }
  return defaultLocale;
}

export function getLocaleUrl(locale: Locale, key: RouteKey): string {
  return routes[key][locale];
}

// URL de la página equivalente en otro idioma. Si la ruta actual no está
// en el mapa (p. ej. una 404), cae al inicio del idioma destino, nunca al inicio
// del idioma actual. Sin redirección automática por Accept-Language en ningún caso.
export function getEquivalentUrl(
  pathname: string,
  from: Locale,
  to: Locale,
): string {
  if (from === to) {
    return pathname;
  }
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const keys = Object.keys(routes) as RouteKey[];
  for (const key of keys) {
    if (routes[key][from] === normalized) {
      return routes[key][to];
    }
  }
  return routes.home[to];
}

export function formatDate(locale: Locale, date: Date | string): string {
  const value = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(value);
}

export function formatNumber(locale: Locale, value: number): string {
  return new Intl.NumberFormat(locale).format(value);
}

export function formatCurrency(
  locale: Locale,
  value: number,
  currency = 'EUR',
): string {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(
    value,
  );
}
