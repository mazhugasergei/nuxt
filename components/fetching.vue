<script lang="ts" setup>
import { LoaderCircle } from "lucide-vue-next"

const { data, pending, error, status, clear, refresh } = await useFetch("https://jsonplaceholder.typicode.com/todos", {
  server: false,
  // lazy: true,
  // immediate: false,
  // cache: "no-cache",
  // pick: ["id", "title"],
  transform: (data) => {
    return data.map(({ id, title }) => ({ id, title }))
  },
})

onUnmounted(clear)
</script>

<template>
  <section>
    <h2>Fetching</h2>
    <!-- <Card>
      <CardHeader>
        <CardTitle>Options cheat sheet</CardTitle>
        <CardDescription>useFetch, useAsyncData</CardDescription>
      </CardHeader>
      <CardContent>
        <img src="/fetch-cheatsheet.png" alt="" />
      </CardContent>
    </Card> -->
    <Card>
      <CardHeader>
        <CardTitle>Example</CardTitle>
      </CardHeader>
      <CardContent>
        <code>
          <pre>
const { data, pending, error, status, clear, refresh } = useFetch("https://jsonplaceholder.typicode.com/todos", {
  server: false,
  // lazy: true,
  // immediate: false,
  // cache: "no-cache",
  // pick: ["id", "title"],
  transform: (data) => {
    return data.map(({ id, title }) => ({ id, title }))
  },
})</pre
          >
        </code>
        <p>Result:</p>
        <code>
          <pre v-if="data">{{ JSON.stringify(data.slice(0, 3), null, 2) }}</pre>
          <div v-if="pending" class="flex justify-center"><LoaderCircle size="18" class="animate-spin" /></div>
          <pre v-if="error">{{ JSON.stringify(error, null, 2) }}</pre>
        </code>
      </CardContent>
    </Card>
  </section>
</template>
