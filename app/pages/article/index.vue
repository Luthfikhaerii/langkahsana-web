<script setup lang="ts">
import axios from 'axios';
import { VueAwesomePaginate } from 'vue-awesome-paginate';

const env = useRuntimeConfig()
const search = ref('')
// const sort = ref('desc')

const options = [
    { value: 'desc', label: 'Newest' },
    { value: 'esc', label: 'Oldest' }
]

const sort = ref('newest')

const onSearchHandler = (e: any) => {
    const keyword = e.target.value
    console.log('Search:', keyword)
    // panggil fungsi filter atau emit ke parent
}

// const onSearchHandler = (e: Event) => {
//     console.log('jalan aja')
//     setTimeout(() => {
//         console.log('masuk')
//         const target = e.target as HTMLInputElement
//         search.value = target.value
//     }, 1000);
// }


// const { data: articles, error } = await useAsyncData(
//     () => `articles-${page}-${search}`,
//     () => axios.get(env.public.URL_API + "/article", {
//         params: {
//             page: 1,
//             limit: 4,
//             search: search.value
//         }
//     }
//     ).then(res => res.data),
//     {
//         watch: [page, search]
//     }
// )
// if (error.value) {
//     console.log(error.value)
// }


</script>
<template>
    <HeroCustom title="ARTIKEL" desc="Exploring Indonesia is an unforgettable adventure."/>
    <section class="py-8 px-16 relative bg-[#FAFAFA] z-30">
        <div class="mx-auto max-w-6xl">
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
            <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <CardArticle />
                <CardArticle />
                <CardArticle />
                <CardArticle />
                <CardArticle />
                <CardArticle />
                <!-- <CardArticle v-for="value in articles.data" :key="value.id" :title="value.title"
                :description="value.description" :date="new Date(value.date)" :image="value.image" /> -->
            </div>
            <div class="mt-16 w-full flex justify-center">

            </div>

        </div>
    </section>
</template>

<style>
.pagination-container {
    display: flex;

    column-gap: 10px;
}

.paginate-buttons {
    height: 40px;

    width: 40px;

    border-radius: 5px;

    cursor: pointer;

    background-color: rgb(242, 242, 242);

    border: 1px solid rgb(217, 217, 217);

    color: black;
}

.paginate-buttons:hover {
    background-color: #d8d8d8;
}

.active-page {
    background-color: #3498db;

    border: 1px solid #3498db;

    color: white;
}

.active-page:hover {
    background-color: #2988c8;
}
</style>