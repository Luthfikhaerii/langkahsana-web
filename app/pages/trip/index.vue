<script setup lang="ts">
import axios from 'axios';
const trips = ref<any>([])
const loading = ref(false)
const page = ref(0)
const limit = ref(0)

watch([page, limit], async () => {
    loading.value = true
    try {
        const res = await axios.get(process.env.URL_API + '/api/trip')
        trips.value = res.data.data
    } catch (err) {
        console.log(err)
    } finally {
        loading.value = false
    }

}, {
    immediate: true
})
</script>
<template>
    <div>
        <div v-for="trip in trips" :key="trip.id">
            <p>{{ trip.title }}</p>
            <p>{{ trip.date }}</p>
        </div>
    </div>
</template>