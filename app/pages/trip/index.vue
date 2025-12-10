<script setup lang="ts">
import axios from 'axios';
import { useTrips } from '~/composables/useTrip';

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



const config = useRuntimeConfig()
const page = ref(1)
const limit = ref(12)
const search = ref('')

const sortType = ref('newest') // default pilihan

const options = [
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'a-z', label: 'A → Z' },
    { value: 'z-a', label: 'Z → A' }
]

// const { data: trips } = await useAsyncData(
//     () => `trip-${page}-${search}`,
//     () => axios.get(config.public.URL_API + "/trip", {
//         params: {
//             page: page.value,
//             limit: limit.value,
//             search: search.value
//         }
//     }).then(res => res.data.data),
//     {
//         watch: [page, search]
//     }
// )

const sort = ref('newest')

const onSearchHandler = (e: any) => {
    const keyword = e.target.value
    console.log('Search:', keyword)
    // panggil fungsi filter atau emit ke parent
}



</script>
<template>
    <div class="pt-24">
        <SectionSlider />
    </div>
    <Slider />
    <section class="py-16 relative bg-[#FAFAFA] z-30">
        <div class="mx-auto max-w-7xl px-4 md:px-8">
            <h2 class="text-3xl font-bold text-black mr-4">
                All Events & Trip
            </h2>
            <div
                class="w-full mb-8 flex flex-col sm:flex-row justify-between items-end  sm:items-end gap-8 max-w-screen-xl mx-auto">
                <!-- Search Bar -->
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

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <CardTrip v-for="trip in trips" :key="trip.id" :id="trip.id" :title="trip.title" :date="trip.date"
                    :status="trip.status" :price="trip.price" :image="trip.image" :location="trip.location"
                    :duration="trip.duration" :kuota="trip.kuota" :description="trip.description" />
            </div>
            <div class="mt-8 w-full flex justify-center">
                <Pagination />
            </div>
        </div>
    </section>
</template>