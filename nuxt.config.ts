// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  pages: true,

  css: ['./assets/css/main.css'],

  sitemap: {
    siteUrl: 'https://hd-demolition.fr'
  },

  robots: {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    sitemap: 'https://hd-demolition.fr/sitemap.xml'
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },

      title: 'HD Démolition – Démolition & Terrassement en Savoie',

      meta: [
        {
          name: 'description',
          content:
              'HD Démolition : démolition, terrassement, dallage béton, location de bennes et évacuation de gravats en Savoie, Haute-Savoie, Ain et Isère. Devis gratuit.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],

      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href:
              'https://fonts.googleapis.com/css2?family=Inter:wght@400&family=Montserrat:wght@600;700;800&display=swap'
        }
      ]
    }
  }
})