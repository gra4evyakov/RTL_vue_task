<template>
    <nav class="navigation">

    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>
.navigation {
    position: absolute;
    top: 0;
    right: 0;
    width: 250px;
    height: 100%;

    border-left: var(--border);
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    backdrop-filter: blur(15px);
}
</style>