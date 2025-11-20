<!-- <template>
    <img src="~/assets/images/foto.jpg"/>
    <p class="text-3xl">Header</p>
</template>  -->

<script setup lang="ts">
import { ref } from "vue"

const isOpen = ref(false)
const scrolled = ref(false)
const route = useRoute()

const handleScroll = () => {
  if(route.path=='/'){
    scrolled.value = window.scrollY > 600
  }else{
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
  <nav :class="['x-10 top-0 min-w-screen h-16 z-50 fixed w-full flex items-center transition duration-200',scrolled? 'bg-white shadow-md border-b border-gray-200':'bg-transparent']">
    <div class="max-w-6xl flex flex-wrap items-center justify-between mx-auto py-2 px-8  w-full">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-2">
        <!-- <img src="" class="h-8" alt="Flowbite Logo" /> -->
        <span :class="['self-center text-2xl font-bold whitespace-nowrap',scrolled?'text-langkahsana':'text-white']">
          Langkahsana
        </span>
      </NuxtLink>

      <!-- Hamburger button (mobile) -->
      <button type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
        @click="isOpen = !isOpen">
        <svg v-if="!isOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Menu links -->
      <div :class="[
        'w-full md:block md:w-auto',
        isOpen ? 'block' : 'hidden'
      ]">
        <ul
          :class="['flex flex-col p-2 mt-4 font-medium border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0  rounded-full flex items-center  shadow-sm border-2 border-gray-50 backdrop-blur-md',scrolled?'bg-langkahsana/90 text-white':'bg-white/10']">
          <li>
            <NuxtLink to="/" class="block ml-6 py-2 px-3 text-white text-sm md:p-0"
              >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/article" class="block py-2 px-3 text-white text-sm md:p-0">
              Article
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/trip" class="block py-2 px-3 text-white text-sm md:p-0">
              Event
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="block py-2 px-3 text-white text-sm md:p-0 mr-6">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>