<script setup>
// Dummy data sesuai model Prisma
const article = ref({
    "id": 1,
    "title": "Perjalanan Menuju Puncak Rinjani",
    "description": "Catatan perjalanan tiga hari mendaki Gunung Rinjani di Lombok, menembus awan dan menikmati keindahan Danau Segara Anak.",
    "date": "2025-10-12T06:00:00Z",
    "image": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
    "contents": [
     
      {
        "id": 2,
        "id_article": 1,
        "type": "description",
        "content": "Pendakian dimulai dari Sembalun dengan udara pagi yang sejuk. Jalur menanjak cukup panjang, namun setiap langkah terbayar dengan pemandangan menakjubkan. Dari puncak, kami menyaksikan matahari terbit di atas lautan awan — momen yang tak terlupakan."
      },
       {
        "id": 1,
        "id_article": 1,
        "type": "image",
        "content": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
      }
    ]
  })

  // Fungsi format tanggal
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>
<template>
    <HeroCustom title="READ ARTIKEL" desc="Exploring Indonesia is an unforgettable adventure."/>
  <div class="min-h-screen bg-white relative z-10">
    <!-- Article Header -->
    <article class="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <!-- Category & Date -->
      <div class="flex items-center gap-4 mb-4">
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
          Travel Tips
        </span>
        <span class="text-gray-500 text-sm flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
      <div class="mb-12 rounded-xl overflow-hidden">
        <img 
          :src="article.image" 
          :alt="article.title"
          class="w-full h-auto"
        />
      </div>

      <!-- Article Content -->
      <div class="prose prose-lg max-w-none">
        <div v-for="content in article.contents" :key="content.id" class="mb-8">
          <!-- Description/Text Content -->
          <div v-if="content.type === 'description'" class="text-gray-800 leading-relaxed text-lg mb-6">
            <p class="whitespace-pre-line">{{ content.content }}</p>
          </div>

          <!-- Image -->
          <figure v-else-if="content.type === 'image'" class="my-8 rounded-xl overflow-hidden">
            <img :src="content.content" alt="Article image" class="w-full h-auto" />
          </figure>
        </div>
      </div>
    </article>

    <!-- Related Articles -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a v-for="i in 3" :key="i" href="#" class="group">
            <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80" 
                alt="Related article"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="p-5">
                <span class="text-xs text-gray-500">Travel Tips</span>
                <h3 class="font-bold text-gray-900 mt-2 mb-2 group-hover:text-blue-600 transition-colors">
                  10 Tips Mendaki Gunung untuk Pemula
                </h3>
                <p class="text-sm text-gray-600 line-clamp-2">
                  Panduan lengkap untuk kamu yang baru pertama kali mendaki gunung...
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
