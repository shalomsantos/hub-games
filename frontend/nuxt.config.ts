// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
  ],
  vuetify: {
    moduleOptions: {
      treeshaking: true,
      importComposables: true,
      styles: 'sass', 
      autoImport: true,
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
