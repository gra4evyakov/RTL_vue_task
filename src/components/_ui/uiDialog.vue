<template>
  <form class="dialog" @submit.prevent="submit(inputValue)">
    <input
      class="dialog-input"
      v-model="inputValue"
      placeholder="Введите количество"
      type="text"
      required
    />
    <div class="dialog-actions">
      <uiButton @click="close">Отмена</uiButton>
      <uiButton type="submit" color="danger">Подтвердить</uiButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import uiButton from './uiButton.vue'

const emits = defineEmits(['close', 'submit'])

const inputValue = ref('')

const close = () => {
  emits('close')
}

const submit = (value: string) => {
  emits('submit', value)
  close()
}
</script>

<style scoped>
.dialog {
  position: absolute;
  bottom: 0;
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 20px;
  width: 100%;
  padding: 18px;
  backdrop-filter: blur(15px);
  background: var(--bg-section);
  border-top: var(--border);
}

.dialog-input {
  padding: 11px;
  border: var(--border);
  border-radius: 4px;
  background: var(--bg-section);
  color: inherit;
}

.dialog-actions {
  display: flex;
  gap: 10px;
}
</style>
