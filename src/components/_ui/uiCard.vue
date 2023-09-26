<template>
  <div class="card">
    <div class="card-image">
      <svgItem size="large" :color="item.color" />
    </div>
    <div class="card-content">
      <uiSkeleton />
    </div>
    <div class="card-action">
      <uiButton @click="deleteItem" color="danger">Удалить предмет</uiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import svgItem from '../_icons/svgItem.vue'
import uiButton from './uiButton.vue'
import uiSkeleton from './uiSkeleton.vue'

const emits = defineEmits(['deleteItem'])

interface InventoryItem {
  id: number
  color: string
  quantity: number
  position: number
}

const { item } = defineProps<{ item: InventoryItem }>()

const deleteItem = () => {
  emits('deleteItem')
}
</script>

<style scoped>
.card {
  padding: 15px 15px 18px 15px;
  height: 100%;

  display: grid;
  grid-template-rows: min-content 1fr min-content;
  row-gap: 16px;
}

.card-image {
  margin: 0 auto;
  padding: 40px 0 15px;
}

.card-content {
  position: relative;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

card-content::before,
.card-content::after {
  position: absolute;
  width: 100%;
  height: 1px;
  content: '';
  display: block;
  background-color: var(--border-color);
}

.card-content::before {
  top: 0;
}

.card-content::after {
  bottom: 0;
}
</style>
