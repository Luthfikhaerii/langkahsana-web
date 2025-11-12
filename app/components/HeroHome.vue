<script setup lang="ts">
const scrollY = ref(0)

function handleScroll() {
  scrollY.value = window.scrollY
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
<template>
  <section class="relative bg-cover bg-center h-[90vh] flex flex-col items-center justify-center text-white z-10">
    <div class="absolute inset-0 bg-cover bg-center bg-[url('/images/hero2.jpg')] "
      :style="{ transform: `translateY(${scrollY * 0.5}px)` }"></div>
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Content -->
    <div class="relative z-10 text-center flex justify-center items-center w-full px-4 h-full"
      :style="{ transform: `translateY(${scrollY * 0.3}px)` }">

      <h1 class="text-8xl font-extrabold text-center leading-[0.9] max-w-4xl diss">
        "DARI LANGKAH" JADI CERITA
        <br />
      </h1>

    </div>
    <div class="w-full pb-4 mx-w-6 px-8">
      <div class="flex justify-between w-full items-center relative">
        <p>
          Bandung, Indonesia
        </p>
        <p class=" text-sm text-end text-gray-200">
          Exploring Indonesia is an unforgettable adventure.
        </p>
      </div>
    </div>
  </section>
</template>
<style lang="css" scoped>
</style>