<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

const isOpen = ref(false)
const scrolled = ref(true)
const route = useRoute()

const handleScroll = () => {
  if (route.path == '/') {
    scrolled.value = window.scrollY > 600
  } else {
    scrolled.value = window.scrollY > 300
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="fixed top-0 w-full z-50 p-4">
    <div
      :class="[
        'max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-xl backdrop-blur-md shadow-lg transition duration-200 bg-langkahsana'
      ]"
    >

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-2">
        <span class="text-2xl font-bold text-white">Langkahsana</span>
      </NuxtLink>

      <!-- Hamburger (mobile) -->
      <button
        class="md:hidden p-2 text-white"
        @click="isOpen = !isOpen"
      >
        <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Desktop menu -->
      <ul class="hidden md:flex md:space-x-8 text-white text-md font-medium">
        <li><NuxtLink to="/" class="hover:text-gray-300">Home</NuxtLink></li>
        <li><NuxtLink to="/article" class="hover:text-gray-300">Article</NuxtLink></li>
        <li><NuxtLink to="/trip" class="hover:text-gray-300">Event</NuxtLink></li>
        <li><NuxtLink to="/contact" class="hover:text-gray-300">Contact</NuxtLink></li>
      </ul>
    </div>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden mt-3 bg-langkahsana rounded-xl shadow-xl px-6 py-4">
      <ul class="flex flex-col space-y-3 text-white text-md font-medium">
        <li><NuxtLink @click="isOpen = false" to="/">Home</NuxtLink></li>
        <li><NuxtLink @click="isOpen = false" to="/article">Article</NuxtLink></li>
        <li><NuxtLink @click="isOpen = false" to="/trip">Event</NuxtLink></li>
        <li><NuxtLink @click="isOpen = false" to="/contact">Contact</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>
