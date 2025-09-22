<script setup lang="ts">
const {src,title,desc} = defineProps(['src','title','desc'])
const scrollY = ref(0)

function handleScroll() {
  scrollY.value = window.scrollY
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
<template>
  <section
    class="relative bg-red-200 bg-center h-[60vh] flex items-center justify-center text-white  pt-20 z-10"
  >
  <div 
      class="absolute inset-0 bg-cover bg-center h-[60vh] bg-[url('/images/hero2.jpg')] "
      :style="{transform: `translateY(${scrollY * 0.5}px)`}"
    ></div>
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Content -->
    <div class="relative z-10 text-center max-w-4xl px-4" :style="{transform: `translateY(${scrollY * 0.3}px)`}">
      <h1 class="text-4xl font-bold leading-tight" >
       ARTIKEL & CATATAN PERJALANAN
       <br/>
        
      </h1>
      <p class="mt-4 text-lg md:text-xl text-gray-200">
        Exploring Indonesia is an unforgettable adventure.
      </p>
    </div>
  </section>
</template>