<script setup lang="ts">
import axios from 'axios'
const trip = ref<any>({})
const route = useRoute()
const {id} = route.params

async function fetchData(){
    try{
        const res = await axios.get(`/api/trip/${id}`)
        trip.value = res.data.data
    }catch(err){
        console.log(err)
    }
}

onMounted(()=>{
    fetchData()
})
</script>
<template>
    <div>
        <p>{{ trip.title }}</p>
    </div>
</template>