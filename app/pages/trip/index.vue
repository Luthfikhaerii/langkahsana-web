<script setup lang="ts">
import axios from 'axios';
import { useTrips } from '~/composables/useTrip';
const { trips, fetchTrips, error, loading } = useTrips()
const page = ref(0)
const limit = ref(0)
const search = ref('')

const sortType = ref('newest') // default pilihan

const options = [
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'a-z', label: 'A → Z' },
    { value: 'z-a', label: 'Z → A' }
]

watch([page, search], async () => {
    fetchTrips({ page: page.value, limit: limit.value, search: search.value })
}, {
    immediate: true
})
</script>
<template>
    <HeroCustom src="/images/hero1.jpg" />
    <section class="py-24 px-28 relative bg-white z-30 min-h-screen">
        <div class="text-center w-full mx-auto mb-8 flex justify-between ">
            <h2 class="text-4xl font-bold">
                List Event
            </h2>
            <div>
                <p class="text-base text-gray-600">
                    Our tourist destinations offer an unrivaled blend of natural beauty
                </p>
                <p class="text-base text-start text-gray-600">
                    and cultural richness
                </p>
            </div>

        </div>
        <div class="w-full mb-8 flex justify-between items-end">

            <input type="text" placeholder="search..."
                class="w-96 px-4 py-2 h-10  border rounded-xl border-gray-400 shadow-md" />

            <div class="w-48">
                <label for="sort" class="block mb-2 text-sm font-medium text-gray-700">
                    Sort by
                </label>
                <select id="sort" v-model="sortType"
                    class="w-full px-4 py-2 border rounded-xl border-gray-400 shadow-md rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm">
                    <option v-for="option in options" :key="option.value" :value="option.value">
                        {{ option.label }}
                    </option>
                </select>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-10">
            <CardArticle />
            <CardArticle />
            <CardArticle />
            <CardArticle />
            <CardArticle />
            <CardArticle />
        </div>
        <div class="mt-16 w-full flex justify-center">
            <Pagination />
        </div>
        <!-- <div class="">
            <div v-for="article in articles" :key="article.id">
                <p>{{ article.title }}</p>
                <p>{{ article.date }}</p>
            </div>
        </div> -->
    </section>
</template>