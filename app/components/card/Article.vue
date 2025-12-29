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
        class="overflow-hidden transition duration-300 hover:scale-2">
        <img :src="image" :alt="title" class="w-full h-56 object-cover rounded-lg" loading="lazy"/>
        <div class="py-4 text-left">
            <div class="flex items-center text-xs text-gray-600 mb-2">
                {{ date }}
            </div>
            <h3 class="text-base font-semibold mb-2">
                {{ title }}
            </h3>
            <p class=" text-sm text-gray-600 line-clamp-2">
                {{ description }}
            </p>
        </div>
    </div>
</template>