<script setup lang="ts">
const admin = true
</script>
<template>
    <slot v-if="admin" />
    <p v-else>bukan admin</p>

</template>