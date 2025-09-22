<script setup lang="ts">
import axios from 'axios';

const page = ref(0)
const limit = 12
const search = ref('')

//SSR Fetch
// const { data: articles } = await useAsyncData(
//     () => `articles-${page}-${limit}-${search}`,
//     () => axios.get(process.env.URL_API + '/api/article', {
//         params: {
//             page, limit, search
//         }
//     }).then(res => res.data.data),
//     {
//         watch: [page, search]
//     }
// )
</script>
<template>
    <HeroCustom src="/images/hero1.jpg" />
    <section class="py-24 px-28 relative bg-white z-30 min-h-screen">
        <div class="text-center w-full mx-auto mb-8 flex justify-between ">
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
    <div class="grid grid-cols-4 gap-10">
        <CardArticle/>
        <CardArticle/>
        <CardArticle/>
        <CardArticle/>
        <CardArticle/>
        <CardArticle/>
    </div>
        <!-- <div class="">
            <div v-for="article in articles" :key="article.id">
                <p>{{ article.title }}</p>
                <p>{{ article.date }}</p>
            </div>
        </div> -->
    </section>
</template>