import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { setLocalStorageItem, getLocalStorageItem } from '@/services/localStorage'

interface BagItem {
  id: number
  color: string
  quantity: number
}

interface Bag {
  [key: number]: BagItem | null
}

const INVENTORY_LS_KEY = 'inventory_data'

export const useInventoryStore = defineStore('inventory', () => {
  const bag = ref<Bag>({
    0: {
      id: 1,
      color: 'green',
      quantity: 5
    },
    1: {
      id: 2,
      color: 'brown',
      quantity: 5
    },
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: {
      id: 3,
      color: 'purple',
      quantity: 5
    },
    8: null,
    9: null,
    10: null,
    11: null,
    12: null,
    13: null,
    14: null,
    15: null,
    16: null,
    17: null,
    18: null,
    19: null,
    20: null,
    21: null,
    22: null,
    23: null,
    24: null
  })

  const currentBag = computed(() => {
    const filteredBag: Bag = {}
    for (const key in bag.value) {
      const item = bag.value[key]
      if (item && item.quantity > 0) {
        filteredBag[key] = item
      }
    }
    return filteredBag
  })

  // LOCAL STORAGE
  const loadInventoryFromLocalStorage = () => {
    const savedInventoryData = getLocalStorageItem<Bag>(INVENTORY_LS_KEY)
    if (savedInventoryData) {
      bag.value = savedInventoryData
    }
  }

  const saveInventoryToLocalStorage = () => {
    setLocalStorageItem(INVENTORY_LS_KEY, bag.value)
  }

  loadInventoryFromLocalStorage()
  // LOCAL STORAGE

  const currentId = ref<number>(0)

  const currentItem = computed(() => {
    return bag.value[currentId.value - 1]
  })

  const changeCurrentId = (id: number) => {
    console.log(id)
    currentId.value = id
  }

  const changeItemPosition = (startIndex: number, targetIndex: number) => {
    if (startIndex === targetIndex) return
    
    const itemToMove = bag.value[startIndex - 1]
    const itemAtTarget = bag.value[targetIndex - 1]

    if (itemAtTarget) {
      bag.value[startIndex - 1] = itemAtTarget
    } else {
      bag.value[startIndex - 1] = null
    }
    bag.value[targetIndex - 1] = itemToMove

    saveInventoryToLocalStorage()
  }

  const removeItem = (quantity: number) => {
    if (currentId.value > 0 && bag.value[currentId.value - 1]) {
      bag.value[currentId.value - 1]!.quantity -= quantity
      saveInventoryToLocalStorage()
    }
  }

  return { currentBag, currentItem, changeCurrentId, removeItem, changeItemPosition }
})