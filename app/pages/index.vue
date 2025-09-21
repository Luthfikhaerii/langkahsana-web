<script lang="ts" setup>
const tours = [
    {
        id: 1,
        title: "Bali Tour Package",
        days: "7 Days",
        date: "23 AUGUST - 29 AUGUST",
        price: "$285",
        rating: "4.9",
        image: "https://source.unsplash.com/400x500/?bali,forest",
    },
    {
        id: 2,
        title: "Java Tour Package",
        days: "5 Days",
        date: "23 AUGUST - 27 AUGUST",
        price: "$218",
        rating: "4.9",
        image: "https://source.unsplash.com/400x500/?mountain,river",
    },
    {
        id: 3,
        title: "Solo Tour Package",
        days: "3 Days",
        date: "23 AUGUST - 25 AUGUST",
        price: "$163",
        rating: "4.9",
        image: "https://source.unsplash.com/400x500/?palm,road",
    },
];


function navigate() {
    navigateTo({
        name: 'article-id',
        params: {
            id: 1
        },
        // name:'admin-article-id',
        // query: {
        //     name:"apa",
        //     location:"apa"
        // }
    })
}
</script>
<template>
    <div class="">
        <HeroHome />
        <section class="py-16 px-20 bg-gray-50 ">
            <!-- Heading -->
            <div class="text-center px-10 w-full mx-auto mb-12 flex justify-between">
                <h2 class="text-5xl font-bold mt-2">
                    Article & Catatan Perjalanan
                </h2>
                <div>
                    <p class="text-lg text-gray-600 mt-4">
                        Our tourist destinations offer an unrivaled blend of natural beauty
                    </p>
                    <p class="text-lg text-start text-gray-600">
                        and cultural richness
                    </p>
                </div>

            </div>

            <!-- Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                <div v-for="tour in tours" :key="tour.id"
                    class="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg group">
                    <!-- Background image -->
                    <img :src="tour.image" :alt="tour.title"
                        class="w-full h-96 object-cover group-hover:scale-105 transition duration-300" />

                    <!-- Overlay top -->
                    <div
                        class="absolute top-4 left-4 bg-white/80 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                        {{ tour.days }}
                    </div>
                    <div
                        class="absolute top-4 right-4 bg-white/80 text-gray-800 text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1">
                        ⭐ {{ tour.rating }}
                    </div>

                    <!-- Overlay bottom -->
                    <div
                        class="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                        <p class="text-sm">{{ tour.date }}</p>
                        <div class="flex justify-between items-center mt-1">
                            <h3 class="font-semibold">{{ tour.title }}</h3>
                            <span class="font-bold">{{ tour.price }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Button -->
            <div class="flex justify-center mt-10">
                <button class="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                    View more
                </button>
            </div>
        </section>
    </div>

</template>