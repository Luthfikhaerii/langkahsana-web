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

const {data:trips} = await useAsyncData(
    ()=> `trip-${page}-${search}`,
    ()=> axios.get(config.public.URL_API+"/trip",{
        params:{
            page:page.value,
            limit:limit.value,
            search:search.value
        }
    }).then(res=>res.data.data),
    {
        watch:[page,search]
    }
)



</script>
<template>
    <HeroCustom src="/images/hero1.jpg" />
    <section class="py-24 px-28 relative bg-white z-30 min-h-screen">
        <div class="w-full mb-8 flex justify-between items-end max-w-screen-xl mx-auto">

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
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CardTrip />
        </div>
        <div class="mt-16 w-full flex justify-center">
            <Pagination />
        </div>
    </section>
</template>