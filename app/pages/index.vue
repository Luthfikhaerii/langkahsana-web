<script lang="ts" setup>
import axios from 'axios';

const config = useRuntimeConfig()
const tours = [
    {
        id: 1,
        title: "Bali Tour Package",
        days: "7 Days",
        date: "23 AUGUST - 29 AUGUST",
        price: "$285",
        rating: "4.9",
        image: "/images/hero2.jpg",
    },
    {
        id: 2,
        title: "Java Tour Package",
        days: "5 Days",
        date: "23 AUGUST - 27 AUGUST",
        price: "$218",
        rating: "4.9",
        image: "/images/hero1.jpg",
    },
    {
        id: 3,
        title: "Solo Tour Package",
        days: "3 Days",
        date: "23 AUGUST - 25 AUGUST",
        price: "$163",
        rating: "4.9",
        image: "/images/hero2.jpg",
    },
];


const articles = ref<any[]>([])
const trips = ref<any[]>([])

const getArticle = async ()=>{
    try{
        const res = await axios.get(config.public.URL_API+"/article",{
            params:{
                page:1,
                limit:4
            }
        })
        articles.value = res.data.data
        console.log(res.data)
    }catch(error){
        console.log(error)
    }
}

const getTrip = async ()=>{
    try{
        const res = await axios.get(config.public.URL_API+"/trip",{
            params:{
                page:1,
                limit:3
            }
        })
        trips.value = res.data.data
        console.log(trips.value)
    }catch(error){
        console.log(error)
    }
}

onMounted(() => {
    getArticle()
    getTrip()
    console.log(trips.value)
    
    console.log('mounted')
})

</script>
<template>
    <HeroHome />
    <section class="py-24 px-28 bg-gray-50 relative z-30 bg-white">
        <!-- Heading -->
        <div class="text-center w-full mx-auto mb-8 flex justify-between max-w-screen-xl">
            <h2 class="text-4xl font-bold">
                Open Trip & Event
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

        <!-- Cards -->
        <div class="flex justify-between gap-6 place-items-center max-w-screen-xl">
            <CardTrip v-if="trips" v-for="trip in trips" :key="trip.id"
                :title="trip.title" 
                :date="trip.date" 
                status="OPEN" 
                :price="trip.price" 
                :image="trip.image"/>
        </div>

        <!-- Button -->
        <div class="flex justify-center mt-10">
            <button class="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                View more
            </button>
        </div>
    </section>
    <section class="px-28 z-30 bg-white relative">
        <!-- Heading -->
        <div class="max-w-5xl mx-auto text-center mb-12 max-w-screen-xl">
            <h2 class="text-4xl font-bold text-gray-900">Indonesian tourism</h2>
            <p class="mt-4 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, libero. Extraordinary natural
                beauty, enjoy the rich culture, <br>
                and experience the friendliness of the local people. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Accusamus, veniam.
            </p>
        </div>

        <!-- Grid -->
        <div class="grid md:grid-cols-5 gap-6 w-full mx-auto max-w-screen-xl">
            <!-- Card 1 -->
            <div class="relative rounded-2xl overflow-hidden col-span-3">
                <img src="/images/hero2.jpg" alt="Bromo" class="w-full h-64 object-cover">
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p class="text-sm text-gray-200">Bromo, East Java</p>
                    <h3 class="text-lg font-semibold text-white">Bromo Tengger Tour</h3>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="relative rounded-2xl overflow-hidden col-span-2">
                <img src="/images/hero2.jpg" alt="Bali" class="w-full h-64 object-cover">
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p class="text-sm text-gray-200">Denpasar, Bali</p>
                    <h3 class="text-lg font-semibold text-white">Bali Beach Tourism</h3>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="relative rounded-2xl overflow-hidden col-span-2">
                <img src="/images/hero2.jpg" alt="Lampung" class="w-full h-64 object-cover">
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p class="text-sm text-gray-200">Lampung, South Sumatra</p>
                    <h3 class="text-lg font-semibold text-white">Sumatra Tourism</h3>
                </div>
            </div>

            <!-- Card 4 -->
            <div class="relative rounded-2xl overflow-hidden col-span-3">
                <img src="/images/hero2.jpg" alt="Borobudur" class="w-full h-64 object-cover">
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p class="text-sm text-gray-200">Jogjakarta, Central Java</p>
                    <h3 class="text-lg font-semibold text-white">Borobudur Temple Tour</h3>
                </div>
            </div>
        </div>
    </section>
    <section class="px-28 py-24 bg-white">
        <!-- Heading -->
        <div class="text-center w-full mx-auto mb-8 flex justify-between items-start max-w-screen-xl">
            <div>
                <p class="text-base text-gray-600">
                    Our tourist destinations offer an unrivaled blend of natural beauty
                </p>
                <p class="text-base text-start text-gray-600">
                    and cultural richness
                </p>
            </div>

            <h2 class="text-3xl font-bold">
                Artikel & Catatan Perjalanan
            </h2>


        </div>

        <!-- Grid (3 Card) -->
        <div class="flex justify-between gap-6 mx-auto max-w-screen-xl">
            <CardArticle v-if="articles" v-for="article in articles" :key="article.id"
                :title="article.title" 
                :date="new Date(article.date)" 
                :description="article.description" 
                :image="article.image"/>
        </div>
        <div class="flex justify-center mt-10">
            <button class="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                View more
            </button>
        </div>
    </section>


</template>