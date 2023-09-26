<template>
  <nav class="navigation">
    <slot />
    <div class="actions">
      <uiButton icon @click="emits('close')">
        <template #icon>
          <svgClose />
        </template>
      </uiButton>
    </div>
  </nav>
</template>

<script setup lang="ts">
import svgClose from '@/components/_icons/svgClose.vue'
import uiButton from '@/components/_ui/uiButton.vue'

const emits = defineEmits(['close'])
</script>

<style scoped>
.navigation {
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;

  border-left: var(--border);
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  backdrop-filter: blur(15px);
}

.actions {
  position: absolute;
  right: 8px;
  top: 8px;
}
</style>
