<!-- <template>
    <img src="~/assets/images/foto.jpg"/>
    <p class="text-3xl">Header</p>
</template>  -->

<script setup lang="ts">
import { ref } from "vue"

const isOpen = ref(false)
</script>

<template>
  <nav class=" px-10 top-0 min-w-screen h-20 z-50 fixed w-full flex items-center bg-transparent">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-full">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-2">
        <!-- <img src="" class="h-8" alt="Flowbite Logo" /> -->
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
          LANGKAHSANA
        </span>
      </NuxtLink>

      <!-- Hamburger button (mobile) -->
      <button
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
        @click="isOpen = !isOpen"
      >
        <svg
          v-if="!isOpen"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Menu links -->
      <div
        :class="[
          'w-full md:block md:w-auto',
          isOpen ? 'block' : 'hidden'
        ]"
      >
        <ul
          class="flex flex-col md:p-0 mt-4 font-medium border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-50 rounded-full h-12 flex items-center bg-white/10 shadow-sm border-2 border-gray-50 backdrop-blur-md"
        >
          <li>
            <NuxtLink
              to="/"
              class="block ml-6 py-2 px-3 text-langkahsana md:p-0"
              exact-active-class="text-langkahsana"
              active-class="text-langkahsana"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="block py-2 px-3 text-white md:p-0">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/article"
              class="block py-2 px-3 text-white md:p-0"
            >
              Services
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/trip"
              class="block py-2 px-3 text-white md:p-0"
            >
              Pricing
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="block py-2 px-3 text-white md:p-0 mr-6"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>