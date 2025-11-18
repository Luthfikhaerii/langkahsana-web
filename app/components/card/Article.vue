<script setup lang="ts">
const { id, title, date, description, image, category } = defineProps([
    'id',
    'title',
    'date',
    'description',
    'image',
    'category'
])
</script>
<template>
    <div :onclick="() => useRouter().push('/article/' + id)"
        class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition duration-300">
        <img :src="category" :alt="image" class="w-full h-56 object-cover" />
        <div class="p-4 text-left">
            <span class="inline-block bg-[#EAF3EE] text-[#1E584C] text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
                {{ category }}
            </span>
            <h3 class="text-base font-semibold mb-2">
                {{ title }}
            </h3>
            <div class="flex items-center text-xs text-gray-600 mb-2">
                {{ date }}
            </div>
            <p class="mb-4 text-sm text-gray-600 line-clamp-2">
                {{ description }}
            </p>
        </div>
    </div>
</template>