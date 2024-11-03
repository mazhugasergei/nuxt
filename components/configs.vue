<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
</script>

<template>
  <section>
    <h2>Configs</h2>

    <Card>
      <CardHeader>
        <CardTitle>Nuxt Config</CardTitle>
        <CardDescription>nuxt.config.ts</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <samp>runtimeConfig.apiSecret</samp>:
          <span><samp>undefined</samp> (only available server-side)</span>
        </p>
        <p>
          <samp>runtimeConfig.public.apiBase</samp>: <span>{{ runtimeConfig.public.apiBase }}</span>
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>App Config</CardTitle>
        <CardDescription>app.config.ts</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <samp>appConfig.title</samp>: <span>{{ appConfig.title }}</span>
        </p>
        <p>
          <samp>appConfig.theme</samp>: <span>{{ appConfig.theme }}</span>
        </p>
      </CardContent>
    </Card>
  </section>
</template>
