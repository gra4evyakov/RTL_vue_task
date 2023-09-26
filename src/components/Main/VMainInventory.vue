<template>
  <div class="inventory">
    <button
      v-for="item in props.cells"
      :key="item"
      class="inventory__cell"
      @click="emits('toggleNavigation', item)"
    >
      <v-main-inventory-item v-if="props.inventory[item - 1]" :item="props.inventory[item - 1]" />
    </button>
  </div>
</template>

<script setup lang="ts">
import VMainInventoryItem from '@/components/Main/VMainInventoryItem.vue'

interface InventoryItem {
  id: number
  color: string
  quantity: number
}

interface Inventory {
  [key: number]: InventoryItem
}

const emits = defineEmits(['toggleNavigation'])

const props = defineProps<{
  cells: number
  inventory: Inventory
}>()
</script>

<style scoped>
.inventory {
  width: 525px;
  height: 500px;

  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
}

.inventory__cell {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  border: var(--border);
  border-top: 0;

  color: inherit;
  background: transparent;
}

.inventory__cell + .inventory__cell {
  border-left: 0;
}

.inventory__cell:first-child {
  border-left: 0;
}

.inventory__cell:nth-child(5n) {
  border-right: 0;
}

.inventory__cell:nth-last-child(-n + 5) {
  border-bottom: 0;
}
</style>
