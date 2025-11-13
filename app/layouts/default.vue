<script setup lang="ts">
import HeaderFixed from '~/components/HeaderFixed.vue';

const router = useRoute()
</script>
<template>
    <div class="min-h-screen flex flex-col">
        <Header v-if="router.path=='/'" />
        <HeaderFixed v-else />
        <div class="flex-1 bg-[#FAFAFA]">
            <slot />
        </div>
        <Footer />
    </div>

</template>