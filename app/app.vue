<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="sticky top-0 z-50 bg-brand-darkSoft/95 backdrop-blur">
      <div class="relative mx-auto max-w-8xl px-10 py-2 flex items-center justify-center md:justify-between text-brand-light">



      <!-- BLOC GAUCHE : LOGO -->
        <NuxtLink
            to="/"
            class="flex flex-col items-center gap-1 text-center
         md:flex-row md:items-center md:gap-5 md:text-left"
        >
          <img
              src="/logo2.png"
              alt="HD Démolition"
              class="h-[64px] w-auto md:h-[96px]"
          />

          <span class="font-extrabold tracking-wide leading-none text-xl md:text-3xl">
    <span class="text-brand-orange">HD</span> DÉMOLITION
  </span>
        </NuxtLink>

        <!-- MOBILE : TEL + BURGER -->
        <div class="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 md:hidden">


        <a
              href="tel:0689537322"
              class="flex items-center justify-center h-10 w-10 rounded-lg bg-black/20 text-brand-orange"
              aria-label="Appeler"
          >
            📞
          </a>

          <button
              type="button"
              class="flex items-center justify-center h-10 w-10 rounded-lg bg-black/20 text-brand-light"
              aria-label="Ouvrir le menu"
              @click="mobileMenuOpen = !mobileMenuOpen"
          >
            ☰
          </button>
        </div>

        <!-- BLOC DROIT : NAV + TEL -->
        <div class="hidden md:flex items-center gap-10">

          <nav class="flex items-center gap-10 text-[20px] font-semibold">
            <NuxtLink
                to="/"
                class="hover:text-brand-orange transition"
                active-class="text-brand-orange"
            >
              Accueil
            </NuxtLink>

            <NuxtLink
                to="/services"
                class="hover:text-brand-orange transition"
                active-class="text-brand-orange"
            >
              Services
            </NuxtLink>

            <NuxtLink
                to="/a-propos"
                class="hover:text-brand-orange transition"
                active-class="text-brand-orange"
            >
              À propos
            </NuxtLink>

            <NuxtLink
                to="/contact"
                class="hover:text-brand-orange transition"
                active-class="text-brand-orange"
            >
              Contact
            </NuxtLink>
          </nav>

          <!-- Téléphone -->
          <a
              href="tel:0689537322"
              class="flex items-center gap-2 text-brand-orange font-semibold text-[20px]"
          >
            📞 06 89 53 73 22
          </a>

        </div>

      </div>




      <!-- MENU MOBILE -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-white/10 bg-brand-darkSoft">
        <nav class="mx-auto max-w-8xl px-6 py-8 grid grid-cols-2 gap-x-10 gap-y-6 place-items-center text-brand-light font-semibold text-center">

        <NuxtLink
              to="/"
              class="hover:text-brand-orange"
              @click="mobileMenuOpen = false"
          >
            Accueil
          </NuxtLink>

          <NuxtLink
              to="/services"
              class="hover:text-brand-orange"
              @click="mobileMenuOpen = false"
          >
            Services
          </NuxtLink>

          <NuxtLink
              to="/a-propos"
              class="hover:text-brand-orange"
              @click="mobileMenuOpen = false"
          >
            À propos
          </NuxtLink>

          <NuxtLink
              to="/contact"
              class="hover:text-brand-orange"
              @click="mobileMenuOpen = false"
          >
            Contact
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <NuxtPage />
    </main>

    <footer class="bg-brand-darkSoft text-brand-light border-t border-white/10">
      <div class="mx-auto max-w-8xl px-10 py-12">
        <div class="grid gap-10 md:grid-cols-3 md:gap-0">

          <!-- Col 1 : Marque -->
          <div class="text-center flex flex-col items-center">
            <div class="flex items-center gap-4 justify-center">
              <img src="/logo2.png" alt="HD Démolition" class="h-14 w-auto" />
              <div class="font-extrabold text-lg leading-tight">
                <span class="text-brand-orange">HD</span> DÉMOLITION
              </div>
            </div>

            <p class="mt-4 text-sm text-white/70 max-w-sm">
              Démolition, terrassement, dallage. Location de bennes & évacuation de gravats.
            </p>
          </div>

          <!-- Col 2 : Contact -->
          <div class="md:border-l md:border-white/15 md:px-10 text-center flex flex-col items-center">
            <h3 class="text-sm font-semibold tracking-wide text-white/90">CONTACT</h3>
            <ul class="mt-4 space-y-3 text-sm text-white/70 flex flex-col items-center">
              <li>
                <a class="hover:text-brand-orange" href="tel:0689537322">📞 06 89 53 73 22</a>
              </li>
              <li>
                <a class="hover:text-brand-orange" href="mailto:contact@hd-demolition.fr">✉️ contact@hd-demolition.fr</a>
              </li>
              <li>📍 Chambéry</li>
            </ul>
          </div>

          <!-- Col 3 : Zone -->
          <div class="md:border-l md:border-white/15 md:px-10 text-center flex flex-col items-center">
            <h3 class="text-sm font-semibold tracking-wide text-white/90">ZONE D’INTERVENTION</h3>
            <p class="mt-4 text-sm text-white/70">
              Savoie • Haute-Savoie • Ain • Isère
            </p>
          </div>

        </div>

        <div class="mt-10 border-t border-white/10 pt-6 text-xs text-white/50 text-center">
          © {{ new Date().getFullYear() }} HD Démolition • Mentions légales • Politique de confidentialité • Créé par E. Oriez
        </div>
      </div>
    </footer>
  </div>
</template>
