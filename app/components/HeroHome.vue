<template>
  <div class="relative w-full h-[100vh] overflow-hidden mb-16">

    <!-- Background Image with Enhanced Parallax -->
    <div 
      class="absolute inset-0 bg-cover bg-center will-change-transform"
      :class="{ 'animate-scale-in': mounted }"
      :style="{ 
        transform: `translateY(${scrollY * 0.5}px) scale(${1.1 + (scrollY * 0.0001)})`,
        backgroundImage: `url('${slide.image}')`,
        opacity: mounted ? 1 : 0,
        transition: 'transform 0.1s ease-out'
      }"
    >
      <!-- Gradient Overlay with Parallax -->
      <div 
        class="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80"
        :style="{ 
          transform: `translateY(${scrollY * 0.2}px)`,
          transition: 'transform 0.1s ease-out'
        }"
      ></div>
    </div>

    <!-- Main Content with Counter Parallax -->
    <div 
      class="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-8"
      :style="{ 
        transform: `translateY(${scrollY * -0.2}px)`,
        opacity: Math.max(0, 1 - scrollY / 400)
      }"
    >
      <div class="text-center max-w-5xl">
        <!-- Title -->
        <h2 
          class="text-white text-3xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4 transition-all duration-1000"
          :class="{ 
            'opacity-0 translate-y-8': !mounted,
            'opacity-100 translate-y-0': mounted 
          }"
          :style="{ 
            transitionDelay: '300ms',
            transform: `translateY(${scrollY * -0.15}px)`
          }"
        >
          {{ slide.title }}
        </h2>

        <!-- Big Highlight Text -->
        <h1 
          class="text-white text-6xl md:text-8xl lg:text-7xl font-bold tracking-tight mb-8 transition-all duration-1000"
          :class="{ 
            'opacity-0 translate-y-12': !mounted,
            'opacity-100 translate-y-0': mounted 
          }"
          :style="{ 
            transitionDelay: '600ms',
            transform: `translateY(${scrollY * -0.25}px)`
          }"
        >
          {{ slide.highlight }}
        </h1>

        <!-- Subtitle Link -->
        
         <a href="#"
          class="inline-flex items-center gap-2 text-sm tracking-widest hover:gap-4 transition-all duration-300 text-white"
          :class="{ 
            'opacity-0 translate-y-8': !mounted,
            'opacity-100 translate-y-0': mounted 
          }"
          :style="{ 
            transitionDelay: '900ms',
            transform: `translateY(${scrollY * -0.3}px)`
          }"
        >
          {{ slide.subtitle }}
          <span>→</span>
        </a>
      </div>
    </div>

    <!-- Bottom Gradient - FIXED POSITION (tidak ikut parallax) -->
    <div class="h-[10vh] w-full bg-gradient-to-t from-white via-white/30 to-transparent absolute bottom-0 z-30 pointer-events-none">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)
const mounted = ref(false)

const slide = {
  id: 1,
  title: 'The call of the',
  highlight: 'LANGKAH JADI CERITA',
  subtitle: 'SEE WHOLE JOURNEY',
  image: '/images/Hero.jpg'
}

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Trigger animation setelah component mounted
  setTimeout(() => {
    mounted.value = true
  }, 100)
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

@keyframes scale-in {
  from {
    transform: scale(1.2);
    opacity: 0;
  }
  to {
    transform: scale(1.1);
    opacity: 1;
  }
}

.animate-scale-in {
  animation: scale-in 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Smooth hardware acceleration */
.will-change-transform {
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>