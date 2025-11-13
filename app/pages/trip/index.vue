<script setup lang="ts">
import axios from 'axios';
import { useTrips } from '~/composables/useTrip';

const config = useRuntimeConfig()
const page = ref(1)
const limit = ref(12)
const search = ref('')

const sortType = ref('newest') // default pilihan

const options = [
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'a-z', label: 'A → Z' },
    { value: 'z-a', label: 'Z → A' }
]

const { data: trips } = await useAsyncData(
    () => `trip-${page}-${search}`,
    () => axios.get(config.public.URL_API + "/trip", {
        params: {
            page: page.value,
            limit: limit.value,
            search: search.value
        }
    }).then(res => res.data.data),
    {
        watch: [page, search]
    }
)

const sort = ref('newest')

const onSearchHandler = (e: any) => {
    const keyword = e.target.value
    console.log('Search:', keyword)
    // panggil fungsi filter atau emit ke parent
}



</script>
<template>
    <div class="pt-16">
        <SectionSlider/>
    </div>
    <section class="py-8 relative bg-[#FAFAFA] z-30 ">
        <div class="mx-auto max-w-6xl px-4 md:py-8">
            <div
                class="w-full mb-8 flex flex-col sm:flex-row justify-between items-end  sm:items-end gap-8 max-w-screen-xl mx-auto">
                <!-- Search Bar -->
                <div class="relative w-96">
                    <span class="absolute left-3 top-2.5 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                        </svg>
                    </span>
                    <input type="text" placeholder="Search..." v-model="search" @input="onSearchHandler"
                        class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
                </div>

                <!-- Sort Dropdown -->
                <div class="w-full sm:w-48">
                    <label for="sort" class="block mb-2 text-sm font-medium text-gray-700">
                        Sort by
                    </label>
                    <select id="sort" v-model="sort"
                        class="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all">
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <CardTrip />
                <CardTrip />
                <CardTrip />
                <CardTrip />
                <CardTrip />
                <CardTrip />
            </div>
            <div class="mt-16 w-full flex justify-center">
                <Pagination />
            </div>
        </div>
    </section>
</template>