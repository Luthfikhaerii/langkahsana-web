<script setup lang="ts">
const { image, title, description, category } = defineProps({
    image: String,
    title: String,
    description: String,
    category: String
})
</script>
<template>
    <div class="relative w-full max-w-7xl h-[400px] rounded-sm overflow-hidden shadow-lg cursor-pointer group">
        <!-- Background image -->
        <img :src="image" alt="news image"
            class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />

        <!-- Gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <!-- Text content -->
        <div class="absolute bottom-0 p-6 text-white">
            <h2 class="text-2xl font-bold mb-2 leading-tight">
                {{ title }}
            </h2>
            <p class="text-sm text-gray-200 mb-3">
                {{ description }}
            </p>
            <p class="text-xs text-orange-400 uppercase font-semibold tracking-wide">
                {{ category }}
            </p>
        </div>
    </div>
</template>
