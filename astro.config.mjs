// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// TODO: sustituir por el dominio final cuando esté disponible.
const SITE = 'https://example.com';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      // La 404 no pertenece al sitemap.
      filter: (page) => !page.endsWith('/404/'),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          ca: 'ca-ES',
          en: 'en-US',
        },
      },
    }),
  ],
});
