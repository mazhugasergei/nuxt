<script lang="ts" setup>
const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
]
</script>

<template>
  <header>
    <a href="https://mazhugasergei.github.io" class="logo">Mazhuga Sergei</a>

    <nav>
      <ul>
        <li v-for="route in routes" :key="route.path">
          <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  background: var(--background);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.0625rem solid #333;
  padding: 1rem 0;
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}

.logo {
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem;
  margin: -0.5rem;
}

nav {
  ul {
    display: flex;
    gap: 0.25rem;
    a {
      font-size: 0.9rem;
      border-radius: 0.5rem;
      transition: 0.1s;
      padding: 0.5rem 0.75rem;
      &:hover {
        background: #ffffff30;
      }
    }
  }
}
</style>
