<template>
  <div class="relative w-full h-[100vh] overflow-hidden mb-16">

    <!-- Background Image with Parallax -->
    <div 
      class="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-75"
      :style="{ 
        transform: `translateY(${scrollY * 0.3}px)`,
        backgroundImage: `url('${slide.image}')`
      }"
    >
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80"></div>
    </div>

    <!-- Main Content -->
    <div 
      class="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-8 transition-all duration-75"
      :style="{ 
        transform: `translateY(${scrollY * -0.1}px)`,
        opacity: Math.max(0, 1 - scrollY / 300)
      }"
    >
      <div class="text-center max-w-5xl">
        <!-- Title -->
        <h2 class="text-white text-3xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4">
          {{ slide.title }}
        </h2>

        <!-- Big Highlight Text -->
        <h1 class="text-white text-6xl md:text-8xl lg:text-7xl font-bold tracking-tight mb-8">
          {{ slide.highlight }}
        </h1>

        <!-- Subtitle Link -->
        <a
          href="#"
          class="inline-flex items-center gap-2 text-white text-sm tracking-widest hover:gap-4 transition-all duration-300"
        >
          {{ slide.subtitle }}
          <span>→</span>
        </a>
      </div>
    </div>

          <div class="h-[10vh] w-full bg-gradient-to-t from-white via-white/30 to-transparent absolute bottom-0 z-30">

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)

const slide = {
  id: 1,
  title: 'The call of the',
  highlight: 'LANGKAH JADI CERITA',
  subtitle: 'SEE WHOLE SERIES',
  image: '/images/Hero.jpg'
}

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.writing-mode-vertical {
  writing-mode: vertical-rl;
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 1s ease-in-out infinite;
}
</style>>