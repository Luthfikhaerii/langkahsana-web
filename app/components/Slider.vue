<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Gambar dummy eksternal
const images = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', // pantai
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470', // gunung
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308', // kota malam
    'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1', // salju
]

const current = ref(0)
let interval

const nextSlide = () => {
    current.value = (current.value + 1) % images.length
}

onMounted(() => {
    interval = setInterval(nextSlide, 4000) // ganti slide tiap 4 detik
})

onUnmounted(() => {
    clearInterval(interval)
})
</script>

<template>
    <section class="w-full px-4 md:px-8 mx-auto max-w-7xl">
        <div class="pb-8">
            <h2 class="text-3xl font-bold text-black mr-4">
                Discover The Best Experience
            </h2>
            <p>Event terbaru yang sedang diadakan</p>
        </div>
        <div class="relative max-w-7xl mx-auto overflow-hidden rounded-sm shadow-xl">
            <div class="max-w-7xl mx-auto overflow-hidden">
                <!-- Container Slide -->
                <div class="flex transition-transform duration-700 ease-in-out"
                    :style="{ transform: `translateX(-${current * 100}%)` }">
                    <div v-for="(img, index) in images" :key="index"
                        class="max-w-7xl w-full h-[250px] md:h-[250px] flex-shrink-0">
                        <img :src="img" alt="carousel image" class="object-cover w-full h-full" />
                    </div>
                </div>

                <!-- Dots indicator -->
                <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <button v-for="(img, index) in images" :key="index"
                        class="w-3 h-3 rounded-full transition-all duration-300"
                        :class="current === index ? 'bg-white scale-110' : 'bg-gray-400/60 hover:bg-white/70'"
                        @click="current = index"></button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section:hover {
    cursor: pointer;
}
</style>