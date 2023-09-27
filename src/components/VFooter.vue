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
import uiButton from '@/components/_ui/uiButton.vue'
</script>

<style scoped>
.footer {
  position: relative;

  padding: 18px 68px 18px 18px;

  border: var(--border);
  border-radius: var(--border-radius);
  background-color: var(--bg-section);

  grid-area: Footer;
}

.skeleton {
  height: 100%;

  border-radius: var(--border-radius);
  background-color: var(--bg-skeleton);
}

.actions {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
