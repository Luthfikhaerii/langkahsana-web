<script setup lang="ts">
import axios from 'axios';
import { useTrips } from '~/composables/useTrip';
const { trips, fetchTrips, error, loading } = useTrips()
const page = ref(0)
const limit = ref(0)
const search = ref('')

watch([page, search], async () => {
    fetchTrips({ page: page.value, limit: limit.value, search: search.value })
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