<template>
    <HeroCustom src="/images/hero1.jpg" />
    <section class="py-24 px-28 relative bg-white z-30 min-h-screen">
        <div class="grid grid-cols-2 gap-10 max-w-screen-xl mx-auto">

            <div>
                <div class="mb-6">
                    <h2 class="text-4xl font-bold mb-2">
                        Contact
                    </h2>
                    <p class="text-base text-gray-600">
                        Our tourist destinations offer an unrivaled blend of natural beauty
                    </p>
                    <p class="text-base text-start text-gray-600">
                        and cultural richness
                    </p>

                </div>
                <div class="space-y-4">
                    <div>
                        <label class="mb-2 font-semibold" for="name">Nama lengkap</label>
                        <input type="text" placeholder="name..." id="name"
                            class="w-96 px-4 py-2 h-10  border rounded-xl border-gray-400 shadow-md block" />
                    </div>
                    <div>
                        <label class="mb-2 font-semibold" for="email">Email</label>
                        <input type="text" placeholder="name..." id="email"
                            class="w-96 px-4 py-2 h-10  border rounded-xl border-gray-400 shadow-md block" />
                    </div>
                    <div>
                        <label class="mb-2 font-semibold" for="message">Pesan</label>
                        <textarea type="text" placeholder="name..." id="message"
                            class="w-96 px-4 py-2   border rounded-xl border-gray-400 shadow-md block">
                    </textarea>
                    </div>
                    <button class="bg-langkahsana font-semibold text-white px-4 py-2 rounded-lg shadow-sm">Submit</button>
                </div>
            </div>
            <img src="/images/hero2.jpg" class="rounded-lg"/>
        </div>
    </section>
</template>