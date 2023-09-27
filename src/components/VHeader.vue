<template>
  <header class="header">
    <img class="header-logo" src="/blur.jpg" alt="logo" />
    <div class="header-info">
      <ui-skeleton />
    </div>
  </header>
</template>

<script setup lang="ts">
import uiSkeleton from '@/components/_ui/uiSkeleton.vue'
</script>

<style scoped>
.header {
  padding: 18px 14px 24px;

  border: var(--border);
  border-radius: var(--border-radius);
  background-color: var(--bg-section);

  grid-area: Header;
}

.header-logo {
  width: 100%;
  margin-bottom: 20px;

  border-radius: var(--border-radius);
}

.header-info {
  display: flex;
  justify-content: center;
}
</style>
