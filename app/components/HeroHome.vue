<template>
  <div class="relative w-full h-screen overflow-hidden mb-16">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('/images/gunung1.jpg')"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
    </div>

    <!-- Content Container -->
     <div class="flex relative items-center jutify-between h-full w-full">
    <div class="relative z-10 h-full flex items-center max-w-6xl mx-auto w-full">
      <div class="container mx-auto px-6 md:px-8 lg:px-8">
        <div class="max-w-3xl">
          <!-- Location Badge -->
          <div class="flex items-center gap-2 mb-2">
            <span class="text-white text-sm font-light tracking-wide">
              Bandung, Indonesia
            </span>
          </div>

          <!-- Main Heading -->
          <h1 class="text-white text-5xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4">
            Dari Langkah<br />Jadi Cerita
          </h1>

          <!-- Subtitle -->
          <p class="text-white text-lg md:text-xl mb-6 font-light max-w-xl">
            Discover thousands of beautiful places around the world with wonderful experiences you can imagine.
          </p>

          <!-- CTA Button -->
          <button class="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
            Explore Now
          </button>
        </div>
      </div>
          <!-- Destination Cards -->
    <div class="relative right-6 flex gap-4 z-20">
      <!-- Card 1 -->
      <div class="relative w-48 h-56 rounded-md overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <img 
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80" 
          alt="Destination" 
          class="w-full h-full object-cover"
        />
        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <div class="flex items-start gap-2 text-white">
            <svg class="w-4 h-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <div>
              <p class="font-semibold">Gunung Padang</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="relative w-48 h-56 rounded-md overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80" 
          alt="Destination" 
          class="w-full h-full object-cover"
        />
        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <div class="flex items-start gap-2 text-white">
            <svg class="w-4 h-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <div>
              <p class="font-semibold">Puncak Sangar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>


    </div>
  </div>
</template>

<script setup>
// Jika Anda ingin menambahkan data dinamis atau logic, tambahkan di sini
// Contoh:
// const destinations = ref([
//   { id: 1, name: 'The Location Name', country: 'Country', image: '...' },
//   { id: 2, name: 'The Location Name', country: 'Country', image: '...' }
// ])
</script>

<style scoped>
/* Custom styles jika diperlukan */
</style>