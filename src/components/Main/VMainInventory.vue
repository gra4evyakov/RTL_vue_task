<template>
  <div class="inventory">
    <button
      v-for="cell in props.cells"
      :key="cell"
      class="inventory-cell"
      @click="toggleNavigation(cell)"
      draggable="true"
      @dragover.prevent
      @drop="dropItem(cell)"
      @dragstart="dragStart(cell)"
    >
      <VMainInventoryItem v-if="props.inventory[cell - 1]" :item="props.inventory[cell - 1]" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VMainInventoryItem from '@/components/Main/VMainInventoryItem.vue'

interface InventoryItem {
  id: number
  color: string
  quantity: number
}

interface Inventory {
  [key: number]: InventoryItem
}

const props = defineProps<{
  cells: number
  inventory: Inventory
}>()

const emits = defineEmits(['toggle-navigation', 'change-item-position'])

const toggleNavigation = (cell: number) => {
  if (!props.inventory[cell - 1]) return
  emits('toggle-navigation', cell)
}

const startIndex = ref(0)

const dragStart = (cell: number) => {
  startIndex.value = cell
}

const dropItem = (targetCell: number) => {
  emits('change-item-position', startIndex.value, targetCell)
}
</script>

<style scoped>
.inventory {
  width: 525px;
  height: 500px;

  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
}

.inventory-cell {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  border: var(--border);
  border-top: 0;

  color: inherit;
  background: transparent;
  cursor: pointer;
}

.inventory-cell:hover {
  background-color: var(--bg-hover);
}

.inventory-cell + .inventory-cell {
  border-left: 0;
}

.inventory-cell:first-child {
  border-left: 0;
}

.inventory-cell:nth-child(5n) {
  border-right: 0;
}

.inventory-cell:nth-last-child(-n + 5) {
  border-bottom: 0;
}
</style>
