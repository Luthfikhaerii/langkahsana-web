<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>

<template>
  <section class="bg-gray-50 pb-16 overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 md:px-8 lg:px-8">
      <!-- Layout Menyamping -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <!-- Bagian Kiri - Konten Text -->
        <div class="space-y-6" data-aos="fade-right">

          <!-- Heading -->
          <h2 class="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Embrace The Call Of The 
            <span class="relative inline-block">
              Mountains
              <svg class="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 5 150 5 198 10" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </span>
          </h2>

          <!-- Deskripsi -->
          <p class="text-base md:text-lg text-gray-700 leading-relaxed">
            Discover how reconnecting with nature can recharge your mind, body, and spirit. Experience the breathtaking beauty of mountain trails, pristine forests, and serene lakesides that will transform your perspective on adventure.
          </p>

          <!-- CTA Button -->
          <div class="pt-4">
            <button class="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Your Journey
            </button>
          </div>
        </div>

        <!-- Bagian Kanan - Gambar Grid -->
        <div class="relative" data-aos="fade-left">
          <!-- Grid Layout Gambar -->
          <div class="grid grid-cols-2 gap-4">
            <!-- Gambar Besar -->
            <div class="col-span-2 relative overflow-hidden rounded-xl shadow-xl" data-aos="zoom-in">
              <img
                src="/images/gunung1.jpg"
                alt="Mountain Peak"
                class="w-full h-60 object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <!-- Gambar Kecil 1 -->
            <div class="relative overflow-hidden rounded-xl shadow-lg" data-aos="zoom-in" data-aos-delay="150">
              <img
                src="/images/hero1.jpg"
                alt="Forest Trail"
                class="w-full h-28 object-cover hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                <p class="text-white text-sm font-semibold">Forest Trail</p>
              </div>
            </div>

            <!-- Gambar Kecil 2 -->
            <div class="relative overflow-hidden rounded-2xl shadow-lg" data-aos="zoom-in" data-aos-delay="300">
              <img
                src="/images/gunung2.webp"
                alt="Lakeside Camp"
                class="w-full h-28 object-cover hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                <p class="text-white text-sm font-semibold">Lakeside</p>
              </div>
            </div>
          </div>

          <!-- Decorative Element -->
          <div class="absolute -top-8 -right-8 w-32 h-32 bg-amber-400 rounded-full opacity-20 blur-3xl"></div>
          <div class="absolute -bottom-8 -left-8 w-40 h-40 rounded-full opacity-20 blur-3xl"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom animations jika diperlukan */
</style>