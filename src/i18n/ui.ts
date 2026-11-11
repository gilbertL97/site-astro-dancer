import type { Locale } from './routing';

// Español como referencia de forma: `ca` y `en` deben tener
// exactamente las mismas claves (lo impone `Record<Locale, Translation>`).
const es = {
  // TODO(Fase 5): nombre artístico y textos definitivos.
  siteName: 'Oscar',
  tagline: 'Bailarín',
  skipLink: 'Saltar al contenido principal',
  languageSelectorLabel: 'Idioma',
  languageNames: {
    es: 'Español',
    ca: 'Català',
    en: 'English',
  },
  nav: {
    home: 'Inicio',
  },
  hero: {
    eyebrow: 'Portfolio',
    title: 'Oscar',
    subtitle: 'Bailarín',
  },
};

export type Translation = typeof es;

const ca: Translation = {
  siteName: 'Oscar',
  tagline: 'Ballarí',
  skipLink: 'Salta al contingut principal',
  languageSelectorLabel: 'Idioma',
  languageNames: {
    es: 'Español',
    ca: 'Català',
    en: 'English',
  },
  nav: {
    home: 'Inici',
  },
  hero: {
    eyebrow: 'Portfolio',
    title: 'Oscar',
    subtitle: 'Ballarí',
  },
};

const en: Translation = {
  siteName: 'Oscar',
  tagline: 'Dancer',
  skipLink: 'Skip to main content',
  languageSelectorLabel: 'Language',
  languageNames: {
    es: 'Español',
    ca: 'Català',
    en: 'English',
  },
  nav: {
    home: 'Home',
  },
  hero: {
    eyebrow: 'Portfolio',
    title: 'Oscar',
    subtitle: 'Dancer',
  },
};

export const ui: Record<Locale, Translation> = { es, ca, en };
