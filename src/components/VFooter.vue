<template>
  <footer class="footer">
    <div class="skeleton"></div>
    <div class="actions">
      <ui-button icon>
        <template #icon>
          <svg-close />
        </template>
      </ui-button>
    </div>
  </footer>
</template>

<script setup lang="ts">
import svgClose from '@/components/_icons/svgClose.vue'
import uiButton from './_ui/uiButton.vue'
</script>

<style scoped>
.footer {
  grid-area: Footer;
  position: relative;
  padding: 18px 68px 18px 18px;
  border-radius: var(--border-radius);
  border: var(--border);
  background-color: var(--bg-section);
}

.skeleton {
  height: 100%;
  border-radius: var(--border-radius);
  background-color: var(--bg-skeleton);
}

.actions {
  position: absolute;
  right: 8px;
  top: 8px;
}
</style>
