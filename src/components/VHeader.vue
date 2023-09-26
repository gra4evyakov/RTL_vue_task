<template>
  <header class="header">
    <img class="header__logo" src="/blur.jpg" alt="logo">
    <div class="header__info">
      <uiSkeleton />
    </div>
  </header>
</template>

<script setup lang="ts">
import uiSkeleton from '@/components/_ui/uiSkeleton.vue'
</script>

<style scoped>
.header {
  grid-area: Header;

  padding: 18px 14px 24px;

  border-radius: var(--border-radius);
  border: var(--border);
  background-color: var(--bg-section)
}
.header__logo {
  width: 100%;
  margin-bottom: 20px;
  border-radius: var(--border-radius);
}

.header__info {
  display: flex;
  justify-content: center;
}
</style>
