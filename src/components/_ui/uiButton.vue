<template>
  <button class="btn" :class="buttonClass" :type="buttonType">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ButtonProps {
  color?: 'primary' | 'danger'
  icon?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const { color, icon, type } = withDefaults(defineProps<ButtonProps>(), {
  color: 'primary',
  icon: false,
  type: 'button'
})

const buttonClass = computed(() => ({
  'btn-icon': icon,
  [`btn-${color}`]: color
}))
const buttonType = type
</script>

<style scoped>
.btn {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2d2d2d;
  border: none;
  border-radius: 8px;
}

.btn-primary {
  background-color: var(--btn-primary);
}

.btn-danger {
  color: #ffffff;
  background-color: var(--btn-danger);
}

.btn-icon {
  padding: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
}
</style>
