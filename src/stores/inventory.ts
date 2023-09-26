import { ref } from 'vue'
import { defineStore } from 'pinia'

interface BagItem {
  id: number
  color: string
  quantity: number
}

interface Bag {
  [key: number]: BagItem
}

export const useInventoryStore = defineStore('inventory', () => {

  const bag : Ref<Bag> = ref([
    {
      id: 1,
      color: 'green',
      quantity: 5
    },
    {
      id: 2,
      color: 'brown',
      quantity: 5
    },
    {
      id: 3,
      color: 'purple',
      quantity: 5
    }
  ])

  const removeItem = (id: number) => {
    bag.value = bag.value.filter(item => item.id !== id)
  }

  return { bag, removeItem }
})
