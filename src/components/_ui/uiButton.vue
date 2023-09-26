<template>
    <button class="btn" :class="{[`btn-${color}`]: color, 'btn-icon': icon}" :type="type">
        <slot name="icon"></slot>
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
interface Props {
    color?: 'primary' | 'danger'
    icon?: boolean
    type?: 'button' | 'submit' | 'reset'
}

const { color, icon, type } = withDefaults(defineProps<Props>(), {
  color: 'primary',
  icon: false,
  type: 'button',
})

</script>

<style scoped>
.btn {
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2D2D2D;
    border: none;
    border-radius: 8px;
}

.btn-primary {
    background-color: var(--btn-primary);
}

.btn-danger {
    color: #FFFFFF;
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