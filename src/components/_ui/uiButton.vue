<template>
    <button class="btn" :class="{[`btn-${color}`]: color, 'btn-icon': icon}">
        <slot name="icon"></slot>
    </button>
</template>

<script setup lang="ts">
defineProps({
    color: {
        type: String,
        default: 'primary'
    },
    icon: {
        type: Boolean,
        default: false
    }
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