<script setup lang="ts">
const { title, date, description, image } = defineProps([
    'title',
    'date',
    'description',
    'image'
])
</script>
<template>
    <div class="relative rounded-2xl overflow-hidden shadow-lg w-72">
        <img :src="image" :alt="title" class="w-72 h-48 object-cover relative z-40 rounded-xl">
        <div class="bg-white px-6 pt-4 pb-6">
            <p class="text-[10px] text-gray-400">{{ date?.toLocaleDateString('id-ID', {
                weekday: "long", // "Senin"
                year: "numeric", // "2025"
                month: "long", // "September"
                day: "numeric" // "26"
                }) }}</p>
            <h3 class="leading-sm text-base font-semibold text-gray-800 my-2 line-clamp-2">{{ title }}</h3>
            <p class="text-xs text-gray-500 line-clamp-2" v-html="description"></p>
        </div>
    </div>
</template>