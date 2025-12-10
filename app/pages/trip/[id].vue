
<script setup>
import { ref, computed } from 'vue'

const route = useRoute()
const id = route.params.id

const trips = [
    {
        id: 1,
        title: "Sunrise Hike Gunung Putri",
        location: "Lembang, Bandung",
        date: "12 Januari 2026",
        meet_point: "Alun-Alun Bandung",
        duration: "04.30–10.30",
        kuota: "30 peserta",
        price: "Rp 150.000",
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
        price: "Rp 175.000",
        status: false,
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
        price: "Rp 160.000",
        status: false,
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
    {
        id: 4,
        title: "Hiking Bukit Bintang Bandung",
        location: "Cimenyan, Bandung",
        date: "2 Februari 2026",
        meet_point: "Trans Studio Mall Bandung",
        duration: "05.30–13.00",
        kuota: "35 peserta",
        price: "Rp 170.000",
        status: false,
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=60",
        description:
            "Menelusuri jalur hijau menuju Bukit Bintang dengan pemandangan kota Bandung dari ketinggian.",
        content: [
            {
                type: "IMAGE",
                value:
                    "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=900&q=60"
            },
            {
                type: "TEXT",
                value:
                    "Bukit Bintang terkenal dengan hutan pinus yang asri dan spot view city light Bandung."
            }
        ],
        include: ["Tiket masuk", "Transport lokal", "Makan siang", "Air mineral", "P3K"],
        exclude: ["Kopi", "Sarung tangan", "Raincoat"]
    },
    {
        id: 5,
        title: "One Day Trip Gunung Manglayang",
        location: "Cileunyi, Bandung",
        date: "9 Februari 2026",
        meet_point: "Bandung Trade Center",
        duration: "06.00–15.00",
        kuota: "35 peserta",
        price: "Rp 190.000",
        status: false,
        image:
            "https://img.freepik.com/free-photo/mount-batur_1385-1771.jpg?semt=ais_hybrid&w=740&q=80",
        description:
            "Pendakian yang cukup menantang menuju puncak Manglayang dengan hutan yang masih asri.",
        content: [
            {
                type: "IMAGE",
                value:
                    "https://images.unsplash.com/photo-1455218873509-8097305ee378?auto=format&fit=crop&w=900&q=60"
            },
            {
                type: "TEXT",
                value:
                    "Gunung Manglayang memiliki jalur menanjak namun menawarkan suasana hutan yang rimbun dan sejuk."
            }
        ],
        include: ["Tiket masuk", "Snack", "Air mineral", "Guide", "P3K"],
        exclude: ["Kopi", "Obat pribadi", "Ponco"]
    },
    {
        id: 6,
        title: "Sunset Hike Bukit Moko",
        location: "Bandung Timur",
        date: "15 Februari 2026",
        meet_point: "Lotek Kalipah Apo Bandung",
        duration: "12.00–19.00",
        kuota: "25 peserta",
        price: "Rp 160.000",
        status: false,
        image:
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=60",
        description:
            "Menikmati sunset dari Bukit Moko dan suasana sejuk hutan pinus sepanjang jalur.",
        content: [
            {
                type: "IMAGE",
                value:
                    "https://images.unsplash.com/photo-1500048993834-e096f7d436d0?auto=format&fit=crop&w=900&q=60"
            },
            {
                type: "TEXT",
                value:
                    "Bukit Moko terkenal dengan pemandangan matahari terbenam dan area hutan pinus yang fotogenik."
            }
        ],
        include: ["Tiket masuk", "Snack", "Air mineral", "Parkir", "P3K"],
        exclude: ["Jas hujan", "Kopi", "Senter"]
    },
    {
        id: 7,
        title: "Adventure Trip Curug Omas Trekking",
        location: "Taman Hutan Raya Dago, Bandung",
        date: "21 Februari 2026",
        meet_point: "ITB Gate",
        duration: "07.00–15.30",
        kuota: "35 peserta",
        price: "Rp 180.000",
        status: false,
        image:
            "https://awsimages.detik.net.id/community/media/visual/2022/12/10/gunung-semeru-erupsi_11.jpeg?w=600&q=90",
        description:
            "Trekking menyusuri jalur hutan Tahura menuju Curug Omas dengan spot foto alam yang menarik.",
        content: [
            {
                type: "IMAGE",
                value:
                    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=60"
            },
            {
                type: "TEXT",
                value:
                    "Curug Omas berada di area Tahura yang dipenuhi jalur hutan rindang dan sungai alami yang indah."
            }
        ],
        include: ["Tiket masuk", "Transport lokal", "Makan siang", "Guide", "P3K"],
        exclude: ["Camilan pribadi", "Kopi", "Ponco"]
    },
    {
        id: 8,
        title: "Hiking Batu Kuda Manglayang",
        location: "Bandung – Cileunyi",
        date: "1 Maret 2026",
        meet_point: "Terminal Cicaheum Bandung",
        duration: "06.00–13.00",
        kuota: "30 peserta",
        price: "Rp 155.000",
        status: false,
        image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=60",
        description:
            "Hiking ringan ke Batu Kuda dengan view hutan pinus dan udara sejuk khas Manglayang.",
        content: [
            {
                type: "IMAGE",
                value:
                    "https://images.unsplash.com/photo-1500048993834-e096f7d436d0?auto=format&fit=crop&w=900&q=60"
            },
            {
                type: "TEXT",
                value:
                    "Area Batu Kuda terkenal dengan hutan pinus luas dan spot duduk santai berbentuk batu menyerupai kuda."
            }
        ],
        include: ["Tiket masuk", "Air mineral", "Snack", "Guide", "P3K"],
        exclude: ["Jas hujan", "Sarung tangan", "Topi"]
    },
    {
        id: 9,
        title: "One Day Trip Patahan Lembang Trek",
        location: "Lembang, Bandung",
        date: "8 Maret 2026",
        meet_point: "Stasiun Bandung",
        duration: "07.00–16.00",
        kuota: "peserta",
        price: "Rp 200.000",
        status: false,
        image:
            "https://pict.sindonews.net/dyn/850/pena/news/2024/09/17/156/1456851/10-gunung-terindah-di-indonesia-untuk-mendaki-nomor-2-punya-padang-edelweis-fso.jpg",
        description:
            "Trip edukasi dan trekking melihat langsung Patahan Lembang dengan jalur hutan yang menyegarkan.",
        content: [
            {
                type: "IMAGE",
                value:
                    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=60"
            },
            {
                type: "TEXT",
                value:
                    "Patahan Lembang adalah situs geologi unik yang dikelilingi hutan dan tebing alami yang mempesona."
            }
        ],
        include: ["Tiket masuk", "Transport lokal", "Makan siang", "Guide", "P3K"],
        exclude: ["Raincoat", "Camilan pribadi", "Kopi"]
    }
];


// Sample data - ganti dengan data dari API/Prisma
const trip = ref({
  id: 1,
  title: "Explore Bromo Sunrise - 3D2N Adventure",
  date: new Date("2024-12-15"),
  location: "Gunung Bromo, Jawa Timur",
  meet_point: "Stasiun Malang",
  kuota: 15,
  price: 1500000,
  image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&q=80",
  contents: [
    { id: 1, id_trip: 1, type: "description", content: "Nikmati keindahan sunrise di Gunung Bromo dengan paket perjalanan 3 hari 2 malam. Trip ini cocok untuk kamu yang ingin menikmati keindahan alam Indonesia dengan budget yang terjangkau." },
    { id: 2, id_trip: 1, type: "description", content: "Kami akan mengunjungi spot-spot terbaik di kawasan Bromo termasuk Bukit Teletubbies, Pasir Berbisik, dan tentu saja sunrise dari viewpoint terbaik." },
    { id: 3, id_trip: 1, type: "itinerary", content: "Hari 1: Berkumpul di meeting point|Perjalanan menuju Bromo|Check-in hotel|Istirahat" },
    { id: 4, id_trip: 1, type: "itinerary", content: "Hari 2: Sunrise hunting 03.00|Eksplorasi kawah Bromo|Bukit Teletubbies|Pasir Berbisik|Kembali ke hotel" },
    { id: 5, id_trip: 1, type: "itinerary", content: "Hari 3: Check-out hotel|Wisata air terjun Madakaripura|Perjalanan pulang" },
    { id: 6, id_trip: 1, type: "include", content: "Transportasi PP AC|Akomodasi hotel 2 malam|Makan 6x|Tour guide profesional|Tiket masuk wisata|Dokumentasi" },
    { id: 7, id_trip: 1, type: "exclude", content: "Pengeluaran pribadi|Tip guide (optional)|Asuransi perjalanan|Makanan di luar paket" },
  ]
})

const activeTab = ref("description")

const uniqueContentTypes = computed(() => {
  return [...new Set(trip.value.contents.map(c => c.type))]
})

const filteredContents = computed(() => {
  return trip.value.contents.filter(c => c.type === activeTab.value)
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID').format(price)
}

const formatContentType = (type) => {
  const types = {
    'description': 'Deskripsi',
    'itinerary': 'Itinerary',
    'include': 'Termasuk',
    'exclude': 'Tidak Termasuk'
  }
  return types[type] || type
}

const parseList = (content) => {
  return content.split('|')
}

onMounted(()=>{
  trip.value = trips[id]
})
</script>
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Image -->
    <div class="relative h-[40vh] w-full overflow-hidden">
      <img
        :src="trip.image"
        :alt="trip.title"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">
            {{ trip.title }}
          </h1>
          <div class="flex items-center gap-4 text-white/90">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{{ trip.location }}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{{ formatDate(trip.date) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Content -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Trip Info Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white rounded-lg p-6 shadow-sm">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Kuota Peserta</p>
                  <p class="text-xl font-bold text-gray-900">{{ trip.kuota }} Orang</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg p-6 shadow-sm">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Meeting Point</p>
                  <p class="text-lg font-semibold text-gray-900">{{ trip.meet_point }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Trip Contents -->
          <div class="bg-white rounded-lg shadow-sm overflow-hidden">
            <div class="border-b border-gray-200">
              <div class="flex gap-4 px-6">
                <button
                  v-for="contentType in uniqueContentTypes"
                  :key="contentType"
                  @click="activeTab = contentType"
                  :class="[
                    'py-4 px-2 border-b-2 font-medium text-sm transition-colors',
                    activeTab === contentType
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  ]"
                >
                  {{ formatContentType(contentType) }}
                </button>
              </div>
            </div>

            <div class="p-6">
              <div v-for="content in filteredContents" :key="content.id" class="mb-6 last:mb-0">
                <div v-if="content.type === 'description'" class="prose max-w-none">
                  <p class="text-gray-700 leading-relaxed">{{ content.content }}</p>
                </div>
                <div v-else-if="content.type === 'itinerary'" class="space-y-2">
                  <div v-for="(item, index) in parseList(content.content)" :key="index" class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700">{{ item }}</span>
                  </div>
                </div>
                <div v-else-if="content.type === 'include'" class="space-y-2">
                  <div v-for="(item, index) in parseList(content.content)" :key="index" class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700">{{ item }}</span>
                  </div>
                </div>
                <div v-else-if="content.type === 'exclude'" class="space-y-2">
                  <div v-for="(item, index) in parseList(content.content)" :key="index" class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700">{{ item }}</span>
                  </div>
                </div>
                <div v-else-if="content.type === 'image'" class="rounded-lg overflow-hidden">
                  <img :src="content.content" alt="Trip content" class="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Sidebar - Booking Card -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-lg p-6 sticky top-4">
            <div class="mb-6">
              <p class="text-sm text-gray-500 mb-1">Harga per orang</p>
              <p class="text-3xl font-bold text-gray-900">
                Rp {{ formatPrice(trip.price) }}
              </p>
            </div>

            <div class="space-y-4 mb-6">
              <div class="flex justify-between items-center py-3 border-b border-gray-100">
                <span class="text-gray-600">Tanggal Keberangkatan</span>
                <span class="font-semibold text-gray-900">{{ formatDate(trip.date) }}</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-gray-100">
                <span class="text-gray-600">Sisa Kuota</span>
                <span class="font-semibold text-green-600">{{ trip.kuota }} slot</span>
              </div>
            </div>

            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-3">
              Daftar Sekarang
            </button>
            
            <button class="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Hubungi Kami
            </button>

            <div class="mt-6 pt-6 border-t border-gray-200">
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Pembayaran Aman</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-600 mt-2">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Konfirmasi Instan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
