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
  // image: {
  //   domains: ['source.unsplash.com', 'images.unsplash.com', 'mycdn.com'],
  // }
  // components:{
  //   dirs:[
  //     {
  //       path:'~/components',
  //       pathPrefix:false
  //     }
  //   ]
  // }
})