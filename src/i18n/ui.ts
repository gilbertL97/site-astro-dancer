import type { Locale } from './routing';

// Español como referencia de forma: `ca` y `en` deben tener
// exactamente las mismas claves (lo impone `Record<Locale, Translation>`).
// Traducciones ca/en en borrador, pendientes de revisión.
const es = {
  siteName: 'Lment',
  tagline: 'Bailarín',
  metaDescription:
    'Lment, bailarín cubano graduado en la Escuela Nacional de Danza de Cuba: ballet, contemporáneo, folclore, danzas urbanas y acrobacia.',
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
    title: 'Lment',
    subtitle: 'Bailarín cubano',
  },
  about: {
    title: 'Sobre mí',
    paragraphs: [
      'Me llamo Lment. Soy bailarín cubano graduado en la Escuela Nacional de Danza de Cuba.',
      'Estoy formado en ballet, contemporáneo, folclore, danzas urbanas y acrobacia.',
      'Como bailarín he trabajado con diferentes coreógrafos tanto en Cuba como en España; destaca el espectáculo «Soy de Cuba», representado por toda Europa.',
      'He ganado batallas de freestyle como Red Bull Dance Your Style (Cuba), Oyofe (España) o MAF Battle (España).',
      'He coreografiado y bailado para artistas como Bad Gyal o Rels B.',
      'Soy un joven creativo al que le atrae todo lo relacionado con el arte: moda, pintura, música.',
    ],
  },
  dances: {
    title: 'Danzas predominantes',
    items: ['Repa', 'Hip hop', 'Experimental', 'Salsa', 'Rumba', 'Yoruba'],
  },
  workshop: {
    title: 'Workshop',
    text: 'Imparto workshops de los estilos que me definen. Escríbeme y lo organizamos.',
    cta: 'Contáctame',
  },
  tutorials: {
    title: 'Tutoriales de coreografía',
    items: [{ title: 'Reparto' }, { title: 'Choreos Hip Hop' }],
  },
  marquee: [
    'Repa',
    'Hip hop',
    'Experimental',
    'Salsa',
    'Rumba',
    'Yoruba',
    'Red Bull Dance Your Style · Cuba',
    'Soy de Cuba · Gira europea',
    'Bad Gyal · Rels B',
  ],
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
  siteName: 'Lment',
  tagline: 'Ballarí',
  metaDescription:
    'Lment, ballarí cubà graduat a l’Escola Nacional de Dansa de Cuba: ballet, contemporani, folklore, danses urbanes i acrobàcia.',
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
    title: 'Lment',
    subtitle: 'Ballarí cubà',
  },
  about: {
    title: 'Sobre mi',
    paragraphs: [
      'Em dic Lment. Soc un ballarí cubà graduat a l’Escola Nacional de Dansa de Cuba.',
      'Estic format en ballet, contemporani, folklore, danses urbanes i acrobàcia.',
      'Com a ballarí he treballat amb diferents coreògrafs tant a Cuba com a Espanya; destaca l’espectacle «Soy de Cuba», representat per tot Europa.',
      'He guanyat batalles de freestyle com Red Bull Dance Your Style (Cuba), Oyofe (Espanya) o MAF Battle (Espanya).',
      'He coreografiat i ballat per a artistes com Bad Gyal o Rels B.',
      'Soc un jove creatiu atret per tot allò relacionat amb l’art: moda, pintura, música.',
    ],
  },
  dances: {
    title: 'Danses predominants',
    items: ['Repa', 'Hip hop', 'Experimental', 'Salsa', 'Rumba', 'Yoruba'],
  },
  workshop: {
    title: 'Workshop',
    text: 'Imparteixo workshops dels estils que em defineixen. Escriu-me i ho organitzem.',
    cta: 'Contacta’m',
  },
  tutorials: {
    title: 'Tutorials de coreografia',
    items: [{ title: 'Reparto' }, { title: 'Choreos Hip Hop' }],
  },
  marquee: [
    'Repa',
    'Hip hop',
    'Experimental',
    'Salsa',
    'Rumba',
    'Yoruba',
    'Red Bull Dance Your Style · Cuba',
    'Soy de Cuba · Gira europea',
    'Bad Gyal · Rels B',
  ],
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
  siteName: 'Lment',
  tagline: 'Dancer',
  metaDescription:
    'Lment, Cuban dancer graduated from the Cuban National Dance School: ballet, contemporary, folklore, urban dance and acrobatics.',
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
    title: 'Lment',
    subtitle: 'Cuban dancer',
  },
  about: {
    title: 'About me',
    paragraphs: [
      'My name is Lment. I am a Cuban dancer graduated from the Cuban National Dance School.',
      'I am trained in ballet, contemporary, folklore, urban dance and acrobatics.',
      'As a dancer I have worked with different choreographers both in Cuba and in Spain, most notably the show “Soy de Cuba”, performed all over Europe.',
      'I have won freestyle battles such as Red Bull Dance Your Style (Cuba), Oyofe (Spain) and MAF Battle (Spain).',
      'I have choreographed and danced for artists such as Bad Gyal and Rels B.',
      'I am a young creative drawn to everything art-related: fashion, painting, music.',
    ],
  },
  dances: {
    title: 'Main styles',
    items: ['Repa', 'Hip hop', 'Experimental', 'Salsa', 'Rumba', 'Yoruba'],
  },
  workshop: {
    title: 'Workshop',
    text: 'I teach workshops in the styles that define me. Get in touch and let’s set one up.',
    cta: 'Contact me',
  },
  tutorials: {
    title: 'Choreography tutorials',
    items: [{ title: 'Reparto' }, { title: 'Choreos Hip Hop' }],
  },
  marquee: [
    'Repa',
    'Hip hop',
    'Experimental',
    'Salsa',
    'Rumba',
    'Yoruba',
    'Red Bull Dance Your Style · Cuba',
    'Soy de Cuba · European tour',
    'Bad Gyal · Rels B',
  ],
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
