<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const trips = [
  {
    id: 1,
    title: "Gunung Semeru",
    location: "Jawa Timur",
    date: "15–17 November 2025",
    duration: "3 Hari 2 Malam",
    participants: "12/20 peserta",
    price: "Rp 1.200.000",
    status: "Sulit",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",
    description:
      "Pendakian ke Mahameru, puncak tertinggi di Pulau Jawa dengan pemandangan kawah Jonggring Saloko yang memukau.",
  },
  {
    id: 2,
    title: "Gunung Rinjani",
    location: "Lombok, NTB",
    date: "22–25 November 2025",
    duration: "4 Hari 3 Malam",
    participants: "8/15 peserta",
    price: "Rp 1.500.000",
    status: "Sulit",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=60",
    description:
      "Jelajahi keindahan Danau Segara Anak dan nikmati sunrise dari puncak gunung tertinggi kedua di Indonesia.",
  },
  {
    id: 3,
    title: "Gunung Prau",
    location: "Jawa Tengah",
    date: "5–6 Desember 2025",
    duration: "2 Hari 1 Malam",
    participants: "15/25 peserta",
    price: "Rp 450.000",
    status: "Mudah",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=60",
    description:
      "Pendakian santai dengan pemandangan sunrise spektakuler dan bukit-bukit teletubbies yang ikonik.",
  },
];

const getTrip = async () => {
  try {
    const res = await axios.get(config.public.URL_API + "/trip", {
      params: {
        page: 1,
        limit: 3
      }
    })
    trips.value = res.data.data
    console.log(trips.value)
  } catch (error) {
    console.log(error)
  }
}

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
          class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
          <div class="relative">
            <img :src="trip.image" :alt="trip.title" class="h-48 w-full object-cover" />
            <span class="absolute top-3 right-3 text-xs px-2 py-1 rounded-md text-white" :class="{
              'bg-red-500': trip.status === 'Sulit',
              'bg-yellow-500': trip.status === 'Sedang',
              'bg-green-500': trip.status === 'Mudah',
            }">
              {{ trip.status }}
            </span>
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
                  <Icon name="mdi:account-group-outline" size="16" /> {{ trip.participants }}
                </li>
              </ul>

              <p class="text-sm text-gray-700 mt-3 leading-relaxed">
                {{ trip.description }}
              </p>
            </div>

            <div class="flex justify-between items-center mt-4">
              <span class="font-semibold text-gray-800">{{ trip.price }}</span>
              <button class="bg-green-700 text-white text-sm px-4 py-2 rounded-md hover:bg-green-800 transition">
                Daftar
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
