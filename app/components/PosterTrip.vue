<script setup lang="ts">
const {src} = defineProps(['src'])
</script>
<template>
    <img :src="src" alt="poster" class="h-[80vh] w-auto"/>
</template>