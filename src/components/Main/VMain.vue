<template>
  <main class="main">
    <v-main-inventory :cells="25" :inventory="inventory.bag" @toggle-navigation="navigationToggle"/>
    <v-main-navigation v-if="navigationStatus" />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useInventoryStore } from '@/stores/inventory';

import VMainInventory from '@/components/Main/VMainInventory.vue'
import VMainNavigation from './VMainNavigation.vue';

const navigationStatus = ref(false)
const inventory = useInventoryStore()

const navigationToggle = () => {
  navigationStatus.value = !navigationStatus.value
}
</script>

<style scoped>
.main {
  position: relative;
  grid-area: Main;

  outline: var(--border);
  border-radius: var(--border-radius);
  background-color: var(--bg-section);
}
</style>
