<script setup>
// ======================================
// DUMMY DATA
// ======================================
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
      { type: "IMAGE", value: "https://images.unsplash.com/photo-1469474968028-56623f02e42e" },
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
  {
    id: 4,
    title: "Tracking Ringan di Tebing Keraton Lembang",
    date: "01 Maret 2026",
    description: "Salah satu spot paling ikonik dengan pemandangan lembah berkabut.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    category: "Catatan Perjalanan",
    content: [
      { type: "TEXT", value: "Tebing Keraton menawarkan keindahan hutan pinus yang menenangkan." },
      { type: "IMAGE", value: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e" },
      { type: "TEXT", value: "Sangat cocok untuk hiking ringan dan foto-foto." }
    ]
  },
  {
    id: 5,
    title: "Checklist Barang Wajib Dibawa Saat Hiking",
    date: "10 Maret 2026",
    description: "Daftar lengkap perlengkapan yang harus selalu dibawa.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    category: "Tips & Trick",
    content: [
      { type: "TEXT", value: "Penting untuk membawa barang sesuai kebutuhan perjalanan." },
      { type: "IMAGE", value: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1" },
      { type: "TEXT", value: "Mulai dari P3K, jaket, headlamp, hingga makanan ringan." }
    ]
  },
  {
    id: 6,
    title: "Pendakian Santai ke Curug Omas Maribaya",
    date: "05 April 2026",
    description: "Catatan perjalanan menuju curug indah di area Maribaya.",
    image: "https://statik.tempo.co/data/2020/06/29/id_948799/948799_720.jpg",
    category: "Catatan Perjalanan",
    content: [
      { type: "TEXT", value: "Curug Omas menawarkan suasana hutan basah yang segar." },
      { type: "IMAGE", value: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e" },
      { type: "TEXT", value: "Jalur relatif landai sehingga cocok untuk trekking keluarga." }
    ]
  },
  {
    id: 7,
    title: "Cara Memilih Sepatu Hiking yang Nyaman",
    date: "18 April 2026",
    description: "Tips memilih sepatu yang aman dan nyaman untuk hiking jarak pendek maupun panjang.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    category: "Tips & Trick",
    content: [
      { type: "TEXT", value: "Sepatu hiking adalah investasi penting untuk keselamatan kaki." },
      { type: "IMAGE", value: "https://images.unsplash.com/photo-1500534623283-312aade485b7" },
      { type: "TEXT", value: "Prioritaskan grip bagus, waterproof, dan ukuran yang pas." }
    ]
  },
  {
    id: 8,
    title: "Menjelajah Gunung Burangrang: Jalur Menantang Namun Memuaskan",
    date: "03 Mei 2026",
    description: "Pengalaman melalui jalur berbatu dan terjal menuju puncak Burangrang.",
    image: "https://assets.telkomsel.com/public/2025-03/Ternyata-Ini-Top-5-Gunung-Tertinggi-di-Indonesia.jpg?VersionId=H1ZootrJUk1U9bYhiudJPOwxwk1lNh2r",
    category: "Catatan Perjalanan",
    content: [
      { type: "TEXT", value: "Burangrang termasuk jalur yang cukup teknis dan menantang." },
      { type: "IMAGE", value: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
      { type: "TEXT", value: "Namun pemandangan puncaknya benar-benar memuaskan." }
    ]
  },
  {
    id: 9,
    title: "Teknik Bernafas Agar Tidak Cepat Lelah Saat Mendaki",
    date: "15 Mei 2026",
    description: "Cara mengatur tempo tubuh agar stamina lebih stabil.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    category: "Tips & Trick",
    content: [
      { type: "TEXT", value: "Teknik pernapasan sangat memengaruhi performa saat hiking." },
      { type: "IMAGE", value: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
      { type: "TEXT", value: "Gunakan pola inhale 2 langkah – exhale 2 langkah untuk kestabilan." }
    ]
  }
]


const articles3 = [
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
            { type: "IMAGE", value: "https://images.unsplash.com/photo-1469474968028-56623f02e42e" },
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
    }
];

// ======================================
// MENGAMBIL ID DARI ROUTER
// ======================================
const route = useRoute()
const id = 3

// Ambil artikel berdasarkan ID
const article = articles.find(a => a.id === id)

// ======================================
// FORMAT TANGGAL
// ======================================
const formatDate = (dateString) => {
  return dateString // sudah format "12 Januari 2026"
}
</script>

<template>
  <div v-if="article" class="min-h-screen bg-white relative z-10 pt-16">
    <!-- Article Header -->
    <article class="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <!-- Category & Date -->
      <div class="flex items-center gap-4 mb-4">
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
          {{ article.category }}
        </span>

        <span class="text-gray-500 text-sm flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
          {{ formatDate(article.date) }}
        </span>
      </div>

      <!-- Title -->
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        {{ article.title }}
      </h1>

      <!-- Description -->
      <p class="text-xl text-gray-600 mb-8 leading-relaxed">
        {{ article.description }}
      </p>

      <!-- Featured Image -->
      <div class="mb-12 rounded-md overflow-hidden">
        <img :src="article.image" :alt="article.title" class="w-full h-auto" />
      </div>

      <!-- Article Content -->
      <div class="prose prose-lg max-w-none">
        <div v-for="(content, index) in article.content" :key="index" class="mb-8">

          <div v-if="content.type === 'TEXT'" class="text-gray-800 leading-relaxed text-lg mb-6">
            <p>{{ content.value }}</p>
          </div>

          <figure v-else-if="content.type === 'IMAGE'" class="my-8 rounded-md overflow-hidden">
            <img :src="content.value" alt="Article image" class="w-full h-auto" />
          </figure>

        </div>
      </div>
    </article>

    <!-- Related Articles -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CardArticle
            v-for="value in articles3"
            :key="value.id"
            :title="value.title"
            :description="value.description"
            :date="value.date"
            :image="value.image"
            :category="value.category"
          />
        </div>
      </div>
    </section>
  </div>

  <!-- Jika ID tidak ditemukan -->
  <div v-else class="p-20 text-center text-gray-500 text-xl">
    Artikel tidak ditemukan.
  </div>
</template>
