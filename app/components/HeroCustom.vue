<script setup lang="ts">
const {title,desc} = defineProps(['title','desc'])
const scrollY = ref(0)

function handleScroll() {
  scrollY.value = window.scrollY
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
<template>
  <section
    class="relative bg-red-200 bg-center h-[40vh] flex items-center justify-center text-white z-10"
  >
  <div 
      class="absolute inset-0 bg-cover bg-center h-[40vh] bg-[url('/images/hero2.jpg')] "
      :style="{transform: `translateY(${scrollY * 0.5}px)`}"
    ></div>
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="absolute bottom-0 left-0 right-0 p-8">
        <div class="max-w-6xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-2">
            {{ title }}
          </h1>
          <div class="flex items-center gap-4 text-white/90">
            <div class="flex items-center gap-2">
              <span>{{ desc }}</span>
            </div>
          </div>
        </div>
        </div>
  </section>
</template>
