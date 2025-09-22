<script lang="ts" setup>
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
    <HeroHome />
    <section class="py-24 px-28 bg-gray-50 relative z-30 bg-white">
        <!-- Heading -->
        <div class="text-center w-full mx-auto mb-8 flex justify-between">
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
        <div class="flex justify-between gap-6 place-items-center">
            <div v-for="tour in tours" :key="tour.id"
                class="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg group">
                <!-- Background image -->
                <img src="/images/hero2.jpg" :alt="tour.title"
                    class="w-full h-96 object-cover group-hover:scale-105 transition duration-300" />

                <!-- Overlay top -->
                <div class="absolute top-4 left-4 bg-white/80 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
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
    <section class="px-28 z-30 bg-white relative">
        <!-- Heading -->
        <div class="max-w-5xl mx-auto text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900">Indonesian tourism</h2>
            <p class="mt-4 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, libero. Extraordinary natural
                beauty, enjoy the rich culture, <br>
                and experience the friendliness of the local people. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Accusamus, veniam.
            </p>
        </div>

        <!-- Grid -->
        <div class="grid md:grid-cols-5 gap-6 w-full mx-auto ">
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
        <div class="text-center w-full mx-auto mb-8 flex justify-between items-start">
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
        <div class="flex justify-between gap-6 mx-auto">
            <!-- Card 1 -->
            <div class="relative rounded-2xl overflow-hidden shadow-lg w-72">
                <img src="/images/hero2.jpg" alt="Bromo"
                    class="w-72 h-48 object-cover relative z-40 rounded-xl">
                <div class="bg-white px-6 pt-4 pb-6">
                    <p class="text-[10px] text-gray-300">Senin, 12 September 2025</p>
                    <h3 class="text-base font-semibold text-gray-800 mb-2 line-clamp-2">Bromo Tengger Tour dfsd dsfdf
                        sdfsd</h3>
                    <p class="text-xs text-gray-400 line-clamp-2">Bromo Tengger Tour Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Voluptatem, tempore?</p>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="relative rounded-2xl overflow-hidden shadow-lg w-72">
                <img src="/images/hero2.jpg" alt="Bromo"
                    class="w-72 h-48 object-cover relative z-40 rounded-xl">
                <div class="bg-white px-6 pt-4 pb-6">
                    <p class="text-[10px] text-gray-300">Senin, 12 September 2025</p>
                    <h3 class="text-base font-semibold text-gray-800 mb-2 line-clamp-2">Bromo Tengger Tour dfsd dsfdf
                        sdfsd</h3>
                    <p class="text-xs text-gray-400 line-clamp-2">Bromo Tengger Tour Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Voluptatem, tempore?</p>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="relative rounded-2xl overflow-hidden shadow-lg w-72">
                <img src="/images/hero2.jpg" alt="Bromo"
                    class="w-72 h-48 object-cover relative z-40 rounded-xl">
                <div class="bg-white px-6 pt-4 pb-6">
                    <p class="text-[10px] text-gray-300">Senin, 12 September 2025</p>
                    <h3 class="text-base font-semibold text-gray-800 mb-2 line-clamp-2">Bromo Tengger Tour dfsd dsfdf
                        sdfsd</h3>
                    <p class="text-xs text-gray-400 line-clamp-2">Bromo Tengger Tour Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Voluptatem, tempore?</p>
                </div>
            </div>
            <div class="relative rounded-2xl overflow-hidden shadow-lg w-72">
                <img src="/images/hero2.jpg" alt="Bromo"
                    class="w-72 h-48 object-cover relative z-40 rounded-xl">
                <div class="bg-white px-6 pt-4 pb-6">
                    <p class="text-[10px] text-gray-300">Senin, 12 September 2025</p>
                    <h3 class="text-base font-semibold text-gray-800 mb-2 line-clamp-2">Bromo Tengger Tour dfsd dsfdf
                        sdfsd</h3>
                    <p class="text-xs text-gray-400 line-clamp-2">Bromo Tengger Tour Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Voluptatem, tempore?</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-10">
            <button class="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                View more
            </button>
        </div>
    </section>


</template>