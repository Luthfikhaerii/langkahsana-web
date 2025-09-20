<script setup lang="ts">
import axios from 'axios'
const route = useRoute()
const id = route.params.id

const { data } = await useAsyncData(
    () => `article-${id}`,
    () => axios.get(process.env.API_URL + '/api/article/'+id)
)
</script>
<template>
    <p>{{ id }}</p>
</template>