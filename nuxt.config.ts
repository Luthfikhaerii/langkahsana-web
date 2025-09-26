// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports:{
    autoImport:true
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxt/image'],
  tailwindcss: {
    configPath: '~/tailwind.config.ts', // Adjust path as needed
  },
  runtimeConfig: {
    public: {
      URL_API: process.env.URL_API || 'http://localhost:8000/api'
    }
  },
})