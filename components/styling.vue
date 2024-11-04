<script lang="ts" setup>
const isActive = ref(true)
const color = ref("green")
</script>

<template>
  <section>
    <h2>Styling</h2>
    <Card>
      <CardHeader>
        <CardTitle>Dynamic classes</CardTitle>
        <CardDescription>Watch variable state</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          isActive: <samp>{{ isActive }}</samp>
        </p>
        <p>
          <span>Faded out when not active -> </span>
          <samp class="dynamic" :class="{ active: isActive }">some text</samp>
        </p>
        <samp
          >{{ `
          <p class="dynamic" :class="{ active: isActive }">some text</p>
          ` }}</samp
        >
        <button @click="isActive = !isActive">Toggle active</button>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Dynamic styles with <samp>v-bind</samp></CardTitle>
        <CardDescription>Uses variable value in styles</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <samp class="v-bind">some text</samp>
        </p>
        <p><span>Type color value -> </span> <input type="text" v-model="color" /></p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Third Party Libraries And Modules</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          See the
          <a href="https://nuxt.com/docs/getting-started/styling#third-party-libraries-and-modules" target="_blank"
            >documentation</a
          >.
        </p>
        <div class="bg-[#444] text-center font-bold rounded-lg p-2 my-2">This one is styled using Tailwind</div>
        <p>
          <samp
            >{{ `
            <div class="bg-[#444] text-center font-bold rounded-lg p-2 mt-2">This one is styled using Tailwind</div>
            ` }}</samp
          >
        </p>
      </CardContent>
    </Card>
  </section>
</template>

<style lang="scss" scoped>
.dynamic {
  &:not(.active) {
    opacity: 0.5;
  }
}
.v-bind {
  background: v-bind(color);
}
</style>
