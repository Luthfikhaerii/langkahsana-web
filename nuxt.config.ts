// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports:{
    autoImport:true
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
  // components:{
  //   dirs:[
  //     {
  //       path:'~/components',
  //       pathPrefix:false
  //     }
  //   ]
  // }
})