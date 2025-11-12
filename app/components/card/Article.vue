<script setup lang="ts">
const { title, date, description, image } = defineProps([
    'title',
    'date',
    'description',
    'image'
])
</script>
<template>
    <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition duration-300">
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
            alt="Gunung Semeru" class="w-full h-56 object-cover" />
        <div class="p-4 text-left">
            <span
                class="inline-block bg-[#EAF3EE] text-[#1E584C] text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
                Trip Report
            </span>
            <h3 class="text-base font-semibold mb-2">
                Pengalaman Mendaki Gunung Semeru
            </h3>
            <div class="flex items-center text-xs text-gray-600 mb-2">
                <Icon name="mdi:calendar-month-outline" size="16" /> <span class="ml-2">20 Oktober
                    2025</span>
            </div>
            <p class="mb-4 text-sm text-gray-600 line-clamp-2">
                Catatan perjalanan mendaki Mahameru, atap Pulau Jawa yang menawan
                dengan segala tantangan dan keindahannya.
            </p>
        </div>
    </div>
</template>