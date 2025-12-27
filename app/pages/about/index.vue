<script setup>
    import { ref, onMounted } from 'vue'
    
    const team = ref([
      {
        name: 'Rizki Mahendra',
        role: 'Founder & Lead Guide',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        bio: 'Pendaki sejak 2015 dengan pengalaman 100+ gunung di Indonesia'
      },
      {
        name: 'Sari Widiastuti',
        role: 'Content & Education',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
        bio: 'Lulusan Geografi UI, passionate tentang pendidikan lingkungan'
      },
      {
        name: 'Andi Prasetyo',
        role: 'Operations Manager',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
        bio: 'Specialist logistik dan koordinasi trip berskala besar'
      },
      {
        name: 'Maya Kusuma',
        role: 'Community Manager',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
        bio: 'Menghubungkan ribuan pendaki dalam satu komunitas solid'
      }
    ])
    
    const isVisible = ref(false)
    
    onMounted(() => {
      setTimeout(() => {
        isVisible.value = true
      }, 100)
    })
    </script>
    
    <template>
      <div class="min-h-screen bg-stone-50">
        <!-- Our Story Section -->
        <section class="py-24 bg-stone-50">
          <div class="max-w-6xl mx-auto px-6">
            <div class="grid md:grid-cols-2 gap-16 items-center">
              <div class="space-y-6">
                <div class="inline-block">
                  <span class="text-sm font-bold text-amber-600 uppercase tracking-widest border-2 border-amber-600 px-4 py-2">
                    Cerita Kami
                  </span>
                </div>
                <h2 class="text-5xl font-black text-emerald-900 leading-tight">
                  Dari Hobi Menjadi Gerakan
                </h2>
                <div class="space-y-4 text-stone-700 leading-relaxed">
                  <p>
                    LangkahSana lahir dari kecintaan sekelompok pendaki terhadap alam Indonesia dan kegelisahan akan minimnya pemahaman geografi di kalangan masyarakat umum.
                  </p>
                  <p>
                    Kami memulai dengan trip kecil-kecilan di sekitar Bandung pada tahun 2018. Setiap pendakian, kami tidak hanya fokus mencapai puncak, tapi juga mempelajari formasi geologis, ekosistem lokal, dan sejarah tempat yang kami kunjungi.
                  </p>
                  <p>
                    Kini, LangkahSana telah berkembang menjadi komunitas dengan ratusan anggota aktif. Kami rutin mengadakan trip edukasi, workshop geografi, dan program konservasi alam bersama masyarakat lokal.
                  </p>
                  <p class="font-semibold text-emerald-800">
                    Setiap langkah adalah pembelajaran. Setiap puncak adalah pencapaian bersama.
                  </p>
                </div>
              </div>
              <div class="relative">
                <div class="absolute -top-6 -left-6 w-full h-full border-4 border-amber-400 rounded-md"></div>
                <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80" 
                     alt="Hiking Community" 
                     class="relative rounded-md shadow-2xl w-full h-[500px] object-cover"/>
                <div class="absolute -bottom-8 -right-8 bg-emerald-900 text-white p-6 rounded-md shadow-xl">
                  <div class="text-4xl font-black mb-1">2018</div>
                  <div class="text-sm font-semibold uppercase tracking-wide">Established</div>
                </div>
              </div>
            </div>
          </div>
        </section>
    
        <!-- Team Section -->
        <section class="py-24 bg-stone-50">
          <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
              <span class="text-sm font-bold text-amber-600 uppercase tracking-widest border-2 border-amber-600 px-4 py-2 inline-block">
                Tim Kami
              </span>
              <h2 class="text-5xl font-black text-emerald-900 mt-6 mb-6">Orang-Orang di Balik LangkahSana</h2>
              <p class="text-stone-600 text-lg max-w-2xl mx-auto">
                Dipimpin oleh pendaki berpengalaman dan educator passionate tentang alam Indonesia
              </p>
            </div>
    
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div v-for="(member, index) in team" :key="index" 
                   class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img :src="member.image" :alt="member.name" 
                       class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"/>
                  <div class="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 class="text-xl font-bold text-emerald-900 mb-1">{{ member.name }}</h3>
                <p class="text-amber-600 font-semibold text-sm mb-3 uppercase tracking-wide">{{ member.role }}</p>
                <p class="text-stone-600 text-sm leading-relaxed">{{ member.bio }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </template>
    
    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&display=swap');
    
    * {
      font-family: 'Montserrat', sans-serif;
    }
    
    @keyframes spin-slow {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    
    .animate-spin-slow {
      animation: spin-slow 20s linear infinite;
    }
    
    .animation-delay-100 {
      animation-delay: 100ms;
    }
    
    .animation-delay-200 {
      animation-delay: 200ms;
    }
    
    .animation-delay-300 {
      animation-delay: 300ms;
    }
    </style>