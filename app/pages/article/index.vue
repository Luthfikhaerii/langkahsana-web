<script setup lang="ts">
import axios from 'axios';
import ArticleDisplay from '~/components/card/ArticleDisplay.vue';

// DATA DETAIL (hero section)
const updated = {
    id: 9,
    title: "Menjelajah Tebing Keraton: Spot Sunrise Terbaik di Bandung",
    date: "22 Februari 2026",
    description: "Pengalaman menikmati sunrise dari Tebing Keraton dengan pemandangan hutan berkabut.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    category: "Catatan Perjalanan",
    content: [
        { type: "TEXT", value: "Tebing Keraton menjadi salah satu destinasi paling populer untuk menikmati sunrise dengan pemandangan lautan kabut hutan pinus." },
        { type: "IMAGE", value: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
        { type: "TEXT", value: "Perjalanan dimulai pukul 4 pagi. Jalur menuju spot tidak terlalu sulit dan cocok untuk semua kalangan." }
    ]
};

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
        image: "https://assets.telkomsel.com/public/2025-03/Ternyata-Ini-Top-5-Gunung-Tertinggi-di-Indonesia.jpg",
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
];

// SEARCH, SORT, FILTER ID
const search = ref("");
const sort = ref("newest");
const idFilter = ref(1);

// COMPUTED FILTERING
const filteredArticles = computed(() => {
    let result = [...articles];

    // SEARCH
    if (search.value.trim() !== "") {
        const keyword = search.value.toLowerCase();
        result = result.filter((item) =>
            item.title.toLowerCase().includes(keyword) ||
            item.description.toLowerCase().includes(keyword) ||
            item.category.toLowerCase().includes(keyword)
        );
    }

    // FILTER BY ID ≥ value
    if (sort.value == 'newest') {
        result = result.filter((item) => item.id >= 1);
    } else {
        result = result.filter((item) => item.id >= 2);
    }

    return result;
});

// HANDLERS
const onSearchHandler = (e: any) => {
    search.value = e.target.value;
};

const nextId = () => idFilter.value++;
const prevId = () => { if (idFilter.value > 1) idFilter.value--; };
</script>

<template>
    <!-- HERO ARTICLE -->
    <section class="max-w-6xl px-4 md:px-8 mx-auto pt-24">
        <div class="pb-8">
            <h2 class="text-3xl font-bold text-black">News Article</h2>
            <p>Catatan perjalanan dan tips trik</p>
        </div>

        <ArticleDisplay :image="updated.image" :title="updated.title" :description="updated.description"
            :category="updated.category" />
    </section>

    <!-- LIST ARTICLES -->
    <section class="pt-16 relative bg-[#FAFAFA] z-30 pb-16">
        <div class="mx-auto max-w-6xl px-4 md:px-8">

            <h2 class="text-3xl font-bold text-black">All Articles</h2>

            <!-- FILTER CONTROLS -->
            <div class="w-full mb-8 flex flex-col sm:flex-row justify-between items-end gap-8">

                <!-- Search -->
                <div class="relative w-96">
                    <span class="absolute left-3 top-2.5 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                        </svg>
                    </span>
                    <input type="text" placeholder="Search..." v-model="search" @input="onSearchHandler"
                        class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
                </div>

                <!-- Sort -->
                <div class="w-full sm:w-48">
                    <label class="block mb-2 text-sm font-medium text-gray-700">Sort by</label>
                    <select v-model="sort" class="w-full px-4 py-2 border rounded-xl shadow-sm">
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>

            </div>

            <!-- ARTICLE GRID -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <CardArticle v-for="value in filteredArticles" :key="value.id" :title="value.title"
                    :description="value.description" :date="value.date" :image="value.image"
                    :category="value.category" />
            </div>
        </div>
    </section>
</template>

<style>
.pagination-container {
    display: flex;
    column-gap: 10px;
}

.paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
}

.paginate-buttons:hover {
    background-color: #d8d8d8;
}

.active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
}

.active-page:hover {
    background-color: #2988c8;
}
</style>
