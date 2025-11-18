<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

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
    status: "Mudah",
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


// const getTrip = async () => {
//   try {
//     const res = await axios.get(config.public.URL_API + "/trip", {
//       params: {
//         page: 1,
//         limit: 3
//       }
//     })
//     trips.value = res.data.data
//     console.log(trips.value)
//   } catch (error) {
//     console.log(error)
//   }
// }

const onClickTrip = () => {
  alert("sfdsf")
}
</script>
<template>
  <section class="bg-[#FAFAFA] pb-16 pt-16 relative z-10">
    <div class="max-w-6xl px-4 md:px-8 mx-auto">
      <div class="flex justify-between items-center mb-8 w-full">
        <h2 class="text-2xl font-bold text-black mr-4">
          Events
        </h2>
        <div class="flex-1 h-px bg-gray-200"></div>
        <button @onclick="onClickTrip"
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
        <div v-for="trip in trips" :key="trip.id"
          class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
          <div class="relative">
            <img :src="trip.image" :alt="trip.title" class="h-48 w-full object-cover" />
          </div>

          <div class="p-5 flex flex-col justify-between h-[320px]">
            <div>
              <h3 class="font-semibold text-lg">{{ trip.title }}</h3>
              <ul class="text-sm text-gray-600 mt-2 space-y-1">
                <li class="flex items-center gap-2">
                  <Icon name="mdi:map-marker-outline" size="16" /> {{ trip.location }}
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="mdi:calendar-month-outline" size="16" /> {{ trip.date }}
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="mdi:clock-outline" size="16" /> {{ trip.duration }}
                </li>
                <li class="flex items-center gap-2">
                  <Icon name="mdi:account-group-outline" size="16" /> {{ trip.kuota }}
                </li>
              </ul>

              <p class="text-sm text-gray-700 mt-3 leading-relaxed">
                {{ trip.description }}
              </p>
            </div>

            <div class="flex justify-between items-center mt-4">
              <span class="font-semibold text-gray-800">{{ trip.price }}</span>
              <button class="bg-green-700 text-white text-sm px-4 py-2 rounded-md hover:bg-green-800 transition">
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optional tambahan styling */
</style>
