<script setup lang="ts">
import { IconArrowNarrowRight } from "@tabler/icons-vue"
import { onMounted, ref } from "vue"

const showContent = ref(false)
const showButton = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    showContent.value = true

    // Delay agar konten muncul dulu, tombol belakangan
    setTimeout(() => (showButton.value = true), 700)
  })
})
</script>

<template>
  <section class="min-h-screen flex flex-col items-center justify-center text-center px-4">
    <div class="flex flex-col items-center space-y-6">
      <!-- Judul & Deskripsi -->
      <transition
        appear
        enter-active-class="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        enter-from-class="opacity-0 translate-y-10"
        enter-to-class="opacity-100 translate-y-0"
      >
        <div v-if="showContent" class="space-y-3">
          <h1 class="text-3xl md:text-5xl font-bold md:font-extrabold tracking-tight">
            Find Your Next Adventure
          </h1>
          <p class="text-sm md:text-base text-gray-300 max-w-md mx-auto leading-relaxed">
            Tired of the same old routine? Let us spark some excitement into your day.
          </p>
        </div>
      </transition>

      <!-- Tombol -->
      <div class="h-10 md:h-12 flex items-center justify-center">
        <transition
          appear
          enter-active-class="transition-transform transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          enter-from-class="opacity-0 translate-y-4 scale-95"
          enter-to-class="opacity-100 translate-y-0 scale-100"
        >
          <button
            v-if="showButton"
            class="cursor-pointer group bg-[#00FF87] text-black font-semibold px-6 py-2 rounded-md shadow-lg flex items-center gap-2 hover:bg-[#00E67A] hover:scale-[1.03] active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00FF87]/50"
          >
            <span>Generate Activity</span>
            <IconArrowNarrowRight class="w-5 h-5 text-black animate-slideRight" stroke-width="2" />
          </button>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slideRight {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(6px);
  }
}

.animate-slideRight {
  animation: slideRight 1.2s ease-in-out infinite;
}
</style>
