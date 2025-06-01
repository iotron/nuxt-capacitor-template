export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  nitro: {
    output: {
      publicDir: '.output/public'
    }
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Nuxt Capacitor App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})