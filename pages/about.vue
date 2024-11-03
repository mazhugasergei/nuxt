<script lang="ts" setup>
const title = "about"
const capitalTitle = title.charAt(0).toUpperCase() + title.slice(1)
</script>

<template>
  <Head>
    <Title>{{ capitalTitle }}</Title>
  </Head>
  <main>
    <header>
      <h1>{{ capitalTitle }}</h1>
      <p>This is the {{ title }} page</p>
    </header>
    <article>
      <section>
        <Card>
          <CardContent>
            <div>💡 See the <samp>pages</samp> folder for Nuxt routing</div>
            <div>
              ...or visit my personal website at
              <a href="https://mazhugasergei.github.io">mazhugasergei.github.io</a> to see the actual "about me" page.
            </div>
          </CardContent>
        </Card>
      </section>
    </article>
  </main>
</template>
