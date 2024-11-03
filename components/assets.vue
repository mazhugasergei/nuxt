<script lang="ts" setup>
const img = useImage()
</script>

<template>
  <section>
    <h2>Assets</h2>
    <Card>
      <CardHeader>
        <CardTitle>NuxtImg</CardTitle>
        <CardDescription>npx nuxi module add image</CardDescription>
      </CardHeader>
      <CardContent>
        <NuxtImg
          :placeholder="img(`/images/logo.png`, { h: 10, f: 'png', blur: 3, q: 50 })"
          src="/images/logo.png"
          width="100"
          height="100"
        />
        <p>See <a href="https://image.nuxt.com/usage/nuxt-img" target="_blank">NuxtImg documentation</a>.</p>
      </CardContent>
    </Card>
  </section>
</template>
