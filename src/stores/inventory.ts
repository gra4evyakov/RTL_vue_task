import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { setLocalStorageItem, getLocalStorageItem } from '@/services/localStorage';

interface BagItem {
  id: number;
  color: string;
  quantity: number;
}

interface Bag {
  [key: number]: BagItem;
}

const INVENTORY_LS_KEY = 'inventory_data';

export const useInventoryStore = defineStore('inventory', () => {
  const bag : Ref<Bag> = ref([
    {
      id: 1,
      color: 'green',
      quantity: 5,
      position: 1
    },
    {
      id: 2,
      color: 'brown',
      quantity: 5,
      position: 2
    },
    {
      id: 3,
      color: 'purple',
      quantity: 5,
      position: 3
    }
  ])

  const loadInventoryFromLocalStorage = () => {
    const savedInventoryData = getLocalStorageItem(INVENTORY_LS_KEY);
    if (savedInventoryData) {
      bag.value = savedInventoryData;
    }
  };

  const saveInventoryToLocalStorage = () => {
    setLocalStorageItem(INVENTORY_LS_KEY, bag.value);
  };

  loadInventoryFromLocalStorage();

  const currentId = ref(0);

  const currentItem = computed(() => {
    return bag.value[currentId.value - 1];
  });

  const changeCurrentId = (id: number) => {
    console.log(id);
    currentId.value = id;
  };

  const removeItem = (quantity: number) => {
    if (currentId.value > 0 && bag.value[currentId.value - 1]) {
      bag.value[currentId.value - 1].quantity -= quantity;
      saveInventoryToLocalStorage();
    }
  };

  return { bag, currentItem, changeCurrentId, removeItem };
});
