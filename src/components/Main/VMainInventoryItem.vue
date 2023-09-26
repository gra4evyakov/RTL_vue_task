<template>
  <div class="item">
    <svgItem class="item__icon" :color="item?.color" />
    <div class="item__quantity">
      {{ item?.quantity }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import svgItem from '@/components/_icons/svgItem.vue'

interface InventoryItem {
  id: number
  color: string
  quantity: number
}

const { item } = defineProps<{
  item: InventoryItem | null
}>()
</script>

<style scoped>
.item__quantity {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2px 4px;
  border-left: var(--border);
  border-top: var(--border);
  border-radius: 6px 0px 0px 0px;

  font-size: 10px;
}
</style>
