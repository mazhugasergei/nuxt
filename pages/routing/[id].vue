<script lang="ts" setup>
const route = useRoute()

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === "string" && /^\d+$/.test(route.params.id)
  },
})
</script>

<template>
  <main>
    <header>
      <h1>Congrats!</h1>
      <p>Your params are valid</p>
    </header>
    <article>
      <section>
        <Card>
          <CardContent>
            <p>
              id: <samp>{{ route.params.id }}</samp>
            </p>
          </CardContent>
        </Card>
      </section>
    </article>
  </main>
</template>
