<script setup lang="ts">
const scrollY = ref(0)

function handleScroll() {
  scrollY.value = window.scrollY
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
<template>
  <section
    class="relative bg-cover bg-center h-[100vh] flex items-center justify-center text-white  pt-20 z-10"
  >
  <div 
      class="absolute inset-0 bg-cover bg-center bg-[url('~/assets/images/hero2.jpg')] "
      :style="{transform: `translateY(${scrollY * 0.5}px)`}"
    ></div>
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Content -->
    <div class="relative z-10 text-center max-w-4xl px-4" :style="{transform: `translateY(${scrollY * 0.3}px)`}">
      <h1 class="text-4xl md:text-6xl font-bold leading-tight" >
       DARI LANGKAH JADI CERITA
       <br/>
        
      </h1>
      <p class="mt-4 text-lg md:text-xl text-gray-200">
        Exploring Indonesia is an unforgettable adventure.
      </p>

      <!-- Form -->
      <div
        class="mt-6 m-auto w-3/12 bg-langkahsana rounded-xl shadow-xl flex justify-center items-center  p-4 gap-4 text-black font-semibold text-center"
      >
      <p class="font-semibold text-white">Temukan Event</p>
      </div>
    </div>
  </section>
</template>
