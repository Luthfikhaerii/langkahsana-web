<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 800, // durasi animasi (ms)
    once: true,    // hanya animasi sekali saat muncul
  });
});
</script>

<template>
  <section class="bg-[#E7E5D8] text-black mt-8 text-center overflow-hidden">
    <div class="w-full mx-auto" data-aos="fade-up">
      <!-- Subheading -->
      <p class="text-sm md:text-base font-medium mb-4 pt-16 uppercase tracking-wider">
        Hiking Adventure 2024 Journey Insights
      </p>

      <!-- Heading utama -->
      <h1
        class="text-3xl md:text-6xl font-extrabold leading-tight flex flex-wrap justify-center items-center gap-3 mb-6 max-w-5xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <span>EMBRACE</span>
        <img
          src="/images/gunung1.jpg"
          alt="Nature"
          class="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover border-2 border-white shadow-md"
        />
        <span>THE CALL</span>
        <br class="hidden md:block" />
        <span>OF THE MOUNTAINS</span>
      </h1>

      <!-- Deskripsi -->
      <p
        class="text-sm md:text-base text-gray-700 mb-8 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Discover how reconnecting with nature can recharge your mind, body, and spirit.
      </p>
    </div>

    <!-- 3 Gambar Berjejer -->
    <div
      class="mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full"
    >
      <img
        src="/images/gunung1.jpg"
        alt="Forest Trail"
        class="w-full h-72 object-cover shadow-md hover:scale-105 transition-transform duration-500"
        data-aos="zoom-in"
      />
      <img
        src="/images/hero1.jpg"
        alt="Mountain Hike"
        class="w-full h-72 object-cover shadow-md hover:scale-105 transition-transform duration-500"
        data-aos="zoom-in"
        data-aos-delay="150"
      />
      <img
        src="/images/gunung2.webp"
        alt="Lakeside Camp"
        class="w-full h-72 object-cover shadow-md hover:scale-105 transition-transform duration-500"
        data-aos="zoom-in"
        data-aos-delay="300"
      />
    </div>
  </section>
</template>
