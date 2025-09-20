<script setup lang="ts">

</script>

<template>
    <div class="min-h-screen flex flex-col">
        <Header />
        <div class="flex-1">
            <slot />
        </div>
        <Footer />
    </div>

</template>