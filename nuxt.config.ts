// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Langkahsana', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.jpg' },
      ],
    },
  },
  imports: {
    autoImport: true
  },
  googleFonts: {
    families: {
      'Rubik+Distressed': true,
      'Funnel+Sans': true,
    },
    display: 'swap',
    preconnect: true,
    preload: true,
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/google-fonts', '@nuxt/icon'],
  tailwindcss: {
    configPath: '~/tailwind.config.ts', // Adjust path as needed
  },
  runtimeConfig: {
    public: {
      URL_API: process.env.URL_API || 'http://localhost:8000/api'
    }
  },
})