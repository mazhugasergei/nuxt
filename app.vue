<script lang="ts" setup>
import "@/assets/main.scss"

useHead({
  meta: [{ name: "description", content: "Nuxt learning notes by Mazhuga Sergei." }],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Nuxt App` : "Nuxt App"
  },

  script: [
    {
      // src: "https://third-party-script.com",
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: "bodyClose",
    },
  ],
})

useSeoMeta({
  description: "Nuxt learning notes by Mazhuga Sergei.",
  ogDescription: "Nuxt learning notes by Mazhuga Sergei.",
  ogImage: "./images/logo.png",
  twitterCard: "summary_large_image",
})
</script>

<template>
  <NuxtRouteAnnouncer />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
