<template>
  <main class="main">
    <VMainInventory
      :cells="25"
      :inventory="inventory.currentBag"
      @toggle-navigation="toggleNavigation"
      @change-item-position="inventory.changeItemPosition"
    />
    <VMainNavigation v-if="navigationStatus" @close="toggleNavigation">
      <ui-card :item="inventory.currentItem" @delete-item="toggleDialog" />
      <ui-dialog v-if="dialogStatus" @close="toggleDialog" @submit="inventory.removeItem" />
    </VMainNavigation>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useInventoryStore } from '@/stores/inventory'

import VMainInventory from '@/components/Main/VMainInventory.vue'
import VMainNavigation from './VMainNavigation.vue'

import uiCard from '../_ui/uiCard.vue'
import UiDialog from '../_ui/uiDialog.vue'

const inventory = useInventoryStore()
const navigationStatus = ref(false)
const dialogStatus = ref(false)

const toggleNavigation = (id: number) => {
  if (id) inventory.changeCurrentId(id)
  navigationStatus.value = !navigationStatus.value
}

const toggleDialog = () => {
  dialogStatus.value = !dialogStatus.value
}
</script>

<style scoped>
.main {
  position: relative;
  grid-area: Main;

  overflow: hidden;

  outline: var(--border);
  border-radius: var(--border-radius);
  background-color: var(--bg-section);
}
</style>
