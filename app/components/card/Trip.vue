<script setup lang="ts">
const { title, date, status, price, image,location,duration,kuota,description } = defineProps([
  'title',
  'date',
  'status',
  'price',
  'image',
  'location',
  'duration',
  'kuota',
  'description'
])


</script>
<template>
  <div class="bg-white rounded-md shadow-sm overflow-hidden hover:shadow-md transition">
    <div class="relative">
      <img :src="image" :alt="title" class="h-48 w-full object-cover" />
    </div>

    <div class="p-5 flex flex-col justify-between h-[320px]">
      <div>
        <h3 class="font-semibold text-lg">{{ title }}</h3>
        <ul class="text-sm text-gray-600 mt-2 space-y-1">
          <li class="flex items-center gap-2">
            <Icon name="mdi:map-marker-outline" size="16" /> {{ location }}
          </li>
          <li class="flex items-center gap-2">
            <Icon name="mdi:calendar-month-outline" size="16" /> {{ date }}
          </li>
          <li class="flex items-center gap-2">
            <Icon name="mdi:clock-outline" size="16" /> {{ duration }}
          </li>
          <li class="flex items-center gap-2">
            <Icon name="mdi:account-group-outline" size="16" /> {{ kuota }}
          </li>
        </ul>

        <p class="text-sm text-gray-700 mt-3 leading-relaxed">
          {{ description }}
        </p>
      </div>

      <div class="flex justify-between items-center mt-4">
        <span class="font-semibold text-gray-800">{{ price }}</span>
        <button class="bg-green-700 text-white text-sm px-4 py-2 rounded-md hover:bg-green-800 transition">
          Detail
        </button>
      </div>
    </div>
  </div>
</template>