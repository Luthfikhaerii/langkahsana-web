<script setup lang="ts">
import axios from 'axios';
import { VueAwesomePaginate } from 'vue-awesome-paginate';

const env = useRuntimeConfig()
const page = ref(1)
const limit = 12
const search = ref('')
const sort = ref('desc')

const options = [
    { value: 'desc', label: 'Newest' },
    { value: 'esc', label: 'Oldest' }
]

const onClickHandler = (current: number) => {
    page.value = current
};

const onSearchHandler = (e: Event) => {
    console.log('jalan aja')
    setTimeout(() => {
        console.log('masuk')
        const target = e.target as HTMLInputElement
        search.value = target.value
    }, 1000);
}

const { data: articles, error } = await useAsyncData(
    () => `articles-${page}-${search}`,
    () => axios.get(env.public.URL_API + "/article", {
        params: {
            page: 1,
            limit: 4,
            search: search.value
        }
    }
    ).then(res => res.data),
    {
        watch: [page, search]
    }
)
if (error.value) {
    console.log(error.value)
}


</script>
<template>
    <HeroCustom src="/images/hero1.jpg" />
    <section class="py-24 px-28 relative bg-white z-30 min-h-screen ">
        <div class="text-center w-full mx-auto mb-8 flex justify-between max-w-screen-xl">
            <h2 class="text-4xl font-bold">
                Kumpulan Artikel
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
        <div class="w-full mb-8 flex justify-between items-end max-w-screen-xl mx-auto">
            <input type="text" placeholder="search..." @input="e=>onSearchHandler(e)"
                class="w-96 px-4 py-2 h-10  border rounded-xl border-gray-400 shadow-md" />
            <div class="w-48">
                <label for="sort" class="block mb-2 text-sm font-medium text-gray-700">
                    Sort by
                </label>
                <select id="sort" v-model="sort"
                    class="w-full px-4 py-2 border rounded-xl border-gray-400 shadow-md rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm">
                    <option v-for="option in options" :key="option.value" :value="option.value">
                        {{ option.label }}
                    </option>
                </select>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-10 max-w-screen-xl mx-auto">
            <CardArticle v-for="value in articles.data" :key="value.id" :title="value.title"
                :description="value.description" :date="new Date(value.date)" :image="value.image" />
        </div>
        <div class="mt-16 w-full flex justify-center">
            <VueAwesomePaginate :total-items="articles?.total" :items-per-page="12" :max-pages-shown="3" v-model="page"
                @click="onClickHandler" />
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