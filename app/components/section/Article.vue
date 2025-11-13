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
</script>
<template>
    <section class="bg-[#FAFAFA] pb-16 px-16">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
            <div class="flex justify-between items-center mb-8 w-full">
                <h2 class="text-2xl font-bold text-black mr-4">
                    ARTICLE
                </h2>
                    <div class="flex-1 h-px bg-gray-200"></div>
                <button class="text-langkahsana hover:text-gray-700 transition-colors duration-200 flex items-center gap-2 ml-4">
                    <span class="font-medium text-langkahsana">View All</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="langkahsana">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <CardArticle />
                <CardArticle />
                <CardArticle />
            </div>
        </div>
    </section>
</template>
