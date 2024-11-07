// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  runtimeConfig: {
    apiSecret: "top_secret",
    public: {
      apiBase: "https://jsonplaceholder.typicode.com",
    },
  },

  modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],
})
