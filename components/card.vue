<script lang="ts" setup></script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  overflow-y: auto;
  background: #222;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 1rem;
}
</style>
