<script setup>
// const getArticle = async () => {
//     try {
//         const res = await axios.get(config.public.URL_API + "/article", {
//             params: {
//                 page: 1,
//                 limit: 4
//             }
//         })
//         articles.value = res.data.data
//         console.log(res.data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// DATA ARTICLES
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
    <section class="bg-[#FAFAFA] pb-16">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
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
            <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <CardArticle v-for="value in articles" :key="value.id" :title="value.title"
                    :description="value.description" :date="value.date" :image="value.image"
                    :category="value.category" />
            </div>
        </div>
    </section>
</template>
