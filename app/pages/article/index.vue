<script setup lang="ts">
import axios from 'axios';

const page = ref(0)
const limit = 12
const search = ref('')

//SSR Fetch
const { data: articles } = await useAsyncData(
    () => `articles-${page}-${limit}-${search}`,
    () => axios.get(process.env.URL_API + '/api/article', {
        params: {
            page, limit, search
        }
    }).then(res => res.data.data),
    {
        watch: [page, search]
    }
)
</script>
<template>
    <div class="">
        <div v-for="article in articles" :key="article.id">
            <p>{{article.title }}</p>
            <p>{{ article.date }}</p>
        </div>
    </div>
</template>