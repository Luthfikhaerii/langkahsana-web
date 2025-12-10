<script lang="ts" setup>
import axios from 'axios';

const config = useRuntimeConfig()
import { useRouter } from 'vue-router';
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const router = useRouter()
onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});


const trips = [
    {
        id: 1,
        title: "Sunrise Hike Gunung Putri",
        location: "Lembang, Bandung",
        date: "12 Januari 2026",
        meet_point: "Alun-Alun Bandung",
        duration: "04.30–10.30",
        kuota: "30 peserta",
        price: "Rp 35.000",
        status: true,
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",
        description:
            "Pendakian singkat menikmati sunrise lembut Gunung Putri dan panorama Lembang dari puncak.",
        content: [
            {
                type: "IMAGE",
                value:
                    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=60"
            },
            {
                type: "TEXT",
                value:
                    "Gunung Putri terkenal sebagai spot sunrise terbaik di Lembang dengan jalur yang ramah pemula."
            }
        ],
        include: ["Tiket masuk", "Parkir", "Snack pagi", "Air mineral", "P3K"],
        exclude: ["Jas hujan", "Sarung tangan", "Kopi"]
    },
    {
        id: 2,
        title: "One Day Trip Tebing Keraton",
        location: "Ciburial, Bandung",
        date: "18 Januari 2026",
        meet_point: "Gedung Sate Bandung",
        duration: "05.00–11.00",
        kuota: "35 peserta",
        price: "Rp 65.000",
        status: "Mudah",
        image:
            "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=900&q=60",
        description:
            "Menikmati hamparan hutan pinus dari ketinggian Tebing Keraton, cocok untuk foto dan healing.",
        content: [
            {
                type: "IMAGE",
                value:
                    "https://images.unsplash.com/photo-1500048993959-d85f468bb05f?auto=format&fit=crop&w=900&q=60"
            },
            {
                type: "TEXT",
                value:
                    "Tebing Keraton menawarkan pemandangan lautan kabut dan hutan pinus yang sangat fotogenik."
            }
        ],
        include: ["Tiket masuk", "Transport lokal", "Snack", "Guide", "P3K"],
        exclude: ["Kopi", "Makanan tambahan", "Payung"]
    },
    {
        id: 3,
        title: "Exploration Trip Gunung Batu",
        location: "Lembang, Bandung",
        date: "25 Januari 2026",
        meet_point: "Cihampelas Walk",
        duration: "06.00–14.00",
        kuota: "28 peserta",
        price: "Rp 50.000",
        status: "Mudah",
        image:
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=60",
        description:
            "Pendakian singkat ke Gunung Batu dengan jalur berbatu dan panorama Lembang yang luas.",
        content: [
            {
                type: "IMAGE",
                value:
                    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=60"
            },
            {
                type: "TEXT",
                value:
                    "Gunung Batu menyuguhkan jalur batuan besar dan view 360° area Lembang dari puncaknya."
            }
        ],
        include: ["Tiket masuk", "Air mineral", "Snack", "Parkir", "P3K"],
        exclude: ["Jas hujan", "Obat pribadi", "Topi"]
    },
];


const articles = [
    {
        id: 1,
        title: "Mendaki Gunung Putri: Jalur Pendek dengan Pemandangan Cantik",
        date: "12 Januari 2026",
        description: "Catatan perjalanan mendaki Gunung Putri Lembang, cocok untuk pemula.",
        image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
        category: "Catatan Perjalanan",
        content: [
            { type: "TEXT", value: "Gunung Putri menjadi salah satu destinasi favorit untuk hiking singkat." },
            { type: "IMAGE", value: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
            { type: "TEXT", value: "Trek tidak terlalu curam dan cocok untuk pemula maupun keluarga." }
        ]
    },
    {
        id: 2,
        title: "Pengalaman Sunrise di Puncak Bukit Bintang Bandung",
        date: "03 Februari 2026",
        description: "Melihat matahari terbit dari Bukit Bintang yang memukau.",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        category: "Catatan Perjalanan",
        content: [
            { type: "TEXT", value: "Perjalanan dimulai pukul 3 pagi untuk mengejar sunrise." },
            { type: "IMAGE", value: "httpsimages.unsplash.com/photo-1469474968028-56623f02e42e" },
            { type: "TEXT", value: "Cuaca sangat mendukung sehingga cahaya pagi terlihat sempurna." }
        ]
    },
    {
        id: 3,
        title: "Tips Mendaki di Musim Hujan Agar Tetap Aman",
        date: "15 Februari 2026",
        description: "Tips hiking saat kondisi cuaca tidak menentu.",
        image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
        category: "Tips & Trick",
        content: [
            { type: "TEXT", value: "Musim hujan bukan penghalang untuk naik gunung, asal persiapan matang." },
            { type: "IMAGE", value: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e" },
            { type: "TEXT", value: "Gunakan raincoat, waterproof bag, dan perhatikan kondisi jalur." }
        ]
    },
]

</script>
<template>
    <HeroHome />
    <Slider />

    <!-- Event Section -->
    <section class="bg-[#FAFAFA] pb-32 pt-16 relative z-10">
        <div class="max-w-7xl px-4 md:px-8 mx-auto">
            <div class="flex justify-between items-center mb-8 w-full">
                <div>
                    <h2 class="text-3xl font-bold text-black mr-4">
                        Events
                    </h2>
                    <p>Event terdekat yang mungkin anda tertarik</p>
                </div>
                <button
                    class="text-langkahsana hover:text-gray-700 transition-colors duration-200 flex items-center gap-2 ml-4">
                    <span class="font-medium text-langkahsana">View All</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="langkahsana">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <CardTrip v-for="trip in trips" :key="trip.id" :title="trip.title" :date="trip.date"
                    :status="trip.status" :id="trip.id" :price="trip.price" :image="trip.image" :location="trip.location"
                    :duration="trip.duration" :kuota="trip.kuota" :description="trip.description" />
            </div>
        </div>
    </section>


    <!-- Tagline Section -->
    <section class="w-full bg-gray-100 py-32 relative z-10">
        <div class="text-center pb-8 px-4 md:px-8">
            <h1 class="text-2xl md:text-4xl font-semibold leading-snug md:leading-snug max-w-4xl mx-auto text-gray-900">
                The go-to storytelling studio for global<br class="hidden md:block" />
                video production and animation.
            </h1>
            <p class="text-sm md:text-base text-gray-700 mt-3">
                Australia's leading video content agency
            </p>
        </div>
        <!-- Gambar hero -->
        <div class="w-full h-[280px] md:h-[380px] overflow-hidden max-w-7xl mx-auto px-4 md:px-8 mt-4 bg-gray-100">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"
                alt="Hero Image" class="w-full h-full object-cover rounded-lg" />
        </div>
    </section>
    
    <!-- About Section -->
    <section class="bg-gray-50 py-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 md:px-8 lg:px-8">
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
            <div class="col-span-2 relative overflow-hidden rounded-lg shadow-xl" data-aos="zoom-in">
              <img
                src="/images/gunung1.jpg"
                alt="Mountain Peak"
                class="w-full h-60 object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <!-- Gambar Kecil 1 -->
            <div class="relative overflow-hidden rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="150">
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
            <div class="relative overflow-hidden rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="300">
              <img
                src="/images/gunung2.webp"
                loading="lazy"
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

    <section class="bg-[#FAFAFA] pb-16">
        <div class="max-w-7xl mx-auto px-4 md:px-8">
            <div class="flex justify-between items-center mb-8 w-full">
                <div>
                    <h2 class="text-3xl font-bold text-black mr-4">
                        Articles
                    </h2>
                    <p>Beberapa article terbaru yang mungkin anda suka</p>
                </div>
                <button
                    class="text-langkahsana hover:text-gray-700 transition-colors duration-200 flex items-center gap-2 ml-4">
                    <span class="font-medium text-langkahsana">View All</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="langkahsana">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <CardArticle v-for="value in articles" :key="value.id" :title="value.title"
                    :description="value.description" :date="value.date" :image="value.image"
                    :category="value.category" />
            </div>
        </div>
    </section>
</template>