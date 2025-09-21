// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports:{
    autoImport:true
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: '~/tailwind.config.ts', // Adjust path as needed
  },
  // components:{
  //   dirs:[
  //     {
  //       path:'~/components',
  //       pathPrefix:false
  //     }
  //   ]
  // }
})