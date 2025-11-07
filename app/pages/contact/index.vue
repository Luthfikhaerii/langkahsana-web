<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  alert('Terima kasih! Pesan Anda telah terkirim.')
  
  // Reset form
  formData.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
<template>
    <HeroCustom title="CONTACT" desc="Exploring Indonesia is an unforgettable adventure." />
    <section class="bg-white py-8 px-16 relative z-20">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Left Side - Text Content -->
        <div class="space-y-6">
          <p class="text-gray-500 text-lg font-medium">Let's talk</p>
          
          <h2 class="text-5xl md:text-6xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            HOW CAN WE<br>HELP YOU?
          </h2>
          
          <p class="text-gray-600 text-lg max-w-xl leading-relaxed">
            We do conversations, not just contact forms. Get in touch to discuss our process, previous work, or media requests.
          </p>
        </div>

        <!-- Right Side - Contact Form -->
        <div class="bg-white">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name Field -->
            <div>
              <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                Nama Lengkap *
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input 
                  v-model="formData.name"
                  type="text" 
                  id="name"
                  required
                  placeholder="Masukkan nama Anda"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input 
                  v-model="formData.email"
                  type="email" 
                  id="email"
                  required
                  placeholder="nama@email.com"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <!-- Phone Field -->
            <div>
              <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                Nomor Telepon
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <input 
                  v-model="formData.phone"
                  type="tel" 
                  id="phone"
                  placeholder="+62 812-3456-7890"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <!-- Subject Field -->
            <div>
              <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">
                Subjek *
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <input 
                  v-model="formData.subject"
                  type="text" 
                  id="subject"
                  required
                  placeholder="Subjek pesan Anda"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <!-- Message Field -->
            <div>
              <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                Pesan *
              </label>
              <textarea 
                v-model="formData.message"
                id="message"
                rows="6" 
                required
                placeholder="Tulis pesan Anda di sini..."
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit" 
              class="w-full bg-gray-900 text-white font-semibold py-4 px-6 rounded-lg hover:bg-gray-800 transition duration-300 transform hover:scale-105 active:scale-95"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>



