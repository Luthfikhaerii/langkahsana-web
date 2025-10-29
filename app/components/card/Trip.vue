<script setup lang="ts">
const { title, date, status, price, image } = defineProps([
    'title',
    'date',
    'status',
    'price',
    'image'
])
</script>
<template>
    <div class="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg group">
        <!-- Background image -->
        <img src="/images/hero2.jpg" :alt="title" class="w-full h-96 object-cover group-hover:scale-105 transition duration-300" />

        <!-- Overlay top -->
        <div class="absolute top-4 left-4 bg-white/80 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
            {{ status }}
        </div>

        <!-- Overlay bottom -->
        <div class="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
            <p class="text-sm">{{ date?.toLocaleDateString('id-ID', {
                weekday: "long", // "Senin"
                year: "numeric", // "2025"
                month: "long", // "September"
                day: "numeric" // "26"
            }) }}</p>
            <div class="flex justify-between items-center mt-1">
                <h3 class="font-semibold">{{ title }}</h3>
                <span class="font-bold">{{ price }}</span>
            </div>
        </div>
    </div>
</template>