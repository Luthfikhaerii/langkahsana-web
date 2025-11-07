<script setup>
const getArticle = async () => {
    try {
        const res = await axios.get(config.public.URL_API + "/article", {
            params: {
                page: 1,
                limit: 4
            }
        })
        articles.value = res.data.data
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}
</script>
<template>
    <section class="bg-[#FAFAFA] pt-8 pb-16 px-16">
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between items-center mb-8 w-full">
                <h2 class="text-2xl font-bold text-black mr-4">
                    ARTICLE
                </h2>
                    <div class="flex-1 h-px bg-gray-300"></div>
                <button class="text-langkahsana hover:text-gray-700 transition-colors duration-200 flex items-center gap-2 ml-4">
                    <span class="font-medium text-langkahsana">View All</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="langkahsana">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                        alt="Tips Mendaki" class="w-full h-56 object-cover" />
                    <div class="p-6 text-left">
                        <span
                            class="inline-block bg-[#EAF3EE] text-[#1E584C] text-sm font-semibold px-3 py-1 rounded-full mb-3">
                            Tips & Tricks
                        </span>
                        <h3 class="text-lg font-semibold mb-2">
                            Tips Mendaki Gunung untuk Pemula
                        </h3>
                        <div class="flex items-center text-xs text-gray-600 mb-2">
                            <Icon name="mdi:calendar-month-outline" size="16" /> <span class="ml-2">25 Oktober
                                2025</span>
                        </div>
                        <p class="mb-4 text-sm text-gray-600">
                            Panduan lengkap bagi kamu yang baru memulai hobi hiking. Dari
                            persiapan fisik hingga perlengkapan yang wajib dibawa.
                        </p>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
                        alt="Gunung Semeru" class="w-full h-56 object-cover" />
                    <div class="p-6 text-left">
                        <span
                            class="inline-block bg-[#EAF3EE] text-[#1E584C] text-sm font-semibold px-3 py-1 rounded-full mb-3">
                            Trip Report
                        </span>
                        <h3 class="text-lg font-semibold mb-2">
                            Pengalaman Mendaki Gunung Semeru
                        </h3>
                        <div class="flex items-center text-xs text-gray-600 mb-2">
                            <Icon name="mdi:calendar-month-outline" size="16" /> <span class="ml-2">20 Oktober
                                2025</span>
                        </div>
                        <p class="mb-4 text-sm text-gray-600">
                            Catatan perjalanan mendaki Mahameru, atap Pulau Jawa yang menawan
                            dengan segala tantangan dan keindahannya.
                        </p>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80"
                        alt="Perlengkapan Hiking" class="w-full h-56 object-cover" />
                    <div class="p-6 text-left">
                        <span
                            class="inline-block bg-[#EAF3EE] text-[#1E584C] text-sm font-semibold px-3 py-1 rounded-full mb-3">
                            Tips & Tricks
                        </span>
                        <h3 class="text-lg font-semibold mb-2">
                            Perlengkapan Wajib untuk Hiking
                        </h3>
                        <div class="flex items-center text-xs text-gray-600 mb-2">
                            <Icon name="mdi:calendar-month-outline" size="16" /> <span class="ml-2">15 Oktober
                                2025</span>
                        </div>
                        <p class="mb-4 text-sm text-gray-600">
                            Daftar lengkap perlengkapan yang harus kamu bawa saat mendaki
                            gunung agar perjalanan lebih aman dan nyaman.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
