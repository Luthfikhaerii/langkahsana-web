<script setup lang="ts">
const auth = true
</script>
<template>
    <slot v-if="auth" />
    <p v-else>belum login</p>

</template>