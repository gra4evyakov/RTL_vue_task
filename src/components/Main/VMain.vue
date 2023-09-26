<template>
  <main class="main">
    <v-main-inventory
      :cells="25"
      :inventory="inventory.bag"
      @toggle-navigation="navigationToggle"
    />
    <v-main-navigation 
      v-if="navigationStatus" 
      @close="navigationToggle"
    >
      <ui-card 
        :item="inventory.currentItem" 
        @delete-item="dialogToggle" 
      />
      <ui-dialog 
        v-if="dialogStatus" 
        @close="dialogToggle" 
        @submit="inventory.removeItem" 
      />
    </v-main-navigation>
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

const navigationToggle = (id: number) => {
  if(id) inventory.changeCurrentId(id)
  navigationStatus.value = !navigationStatus.value
}

const dialogToggle = () => {
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
