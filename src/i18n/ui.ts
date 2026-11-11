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
    label: 'Navegación principal',
    home: 'Inicio',
  },
  hero: {
    eyebrow: 'Portfolio',
    title: 'Oscar',
    subtitle: 'Bailarín',
  },
  legal: {
    privacy: 'Privacidad',
    cookies: 'Cookies',
    notice: 'Aviso legal',
  },
  footer: {
    legalLabel: 'Información legal',
    rights: 'Todos los derechos reservados.',
  },
  form: {
    title: 'Contacto',
    name: 'Nombre',
    email: 'Correo electrónico',
    message: 'Mensaje',
    send: 'Enviar',
    honeypot: 'No rellenes este campo.',
  },
  pendingCopy: 'Contenido pendiente de redacción.',
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
    label: 'Navegació principal',
    home: 'Inici',
  },
  hero: {
    eyebrow: 'Portfolio',
    title: 'Oscar',
    subtitle: 'Ballarí',
  },
  legal: {
    privacy: 'Privacitat',
    cookies: 'Cookies',
    notice: 'Avís legal',
  },
  footer: {
    legalLabel: 'Informació legal',
    rights: 'Tots els drets reservats.',
  },
  form: {
    title: 'Contacte',
    name: 'Nom',
    email: 'Correu electrònic',
    message: 'Missatge',
    send: 'Envia',
    honeypot: 'No omplis aquest camp.',
  },
  pendingCopy: 'Contingut pendent de redacció.',
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
    label: 'Main navigation',
    home: 'Home',
  },
  hero: {
    eyebrow: 'Portfolio',
    title: 'Oscar',
    subtitle: 'Dancer',
  },
  legal: {
    privacy: 'Privacy',
    cookies: 'Cookies',
    notice: 'Legal notice',
  },
  footer: {
    legalLabel: 'Legal information',
    rights: 'All rights reserved.',
  },
  form: {
    title: 'Contact',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    honeypot: 'Leave this field empty.',
  },
  pendingCopy: 'Content pending.',
};

export const ui: Record<Locale, Translation> = { es, ca, en };
