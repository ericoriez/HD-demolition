<template>
  <section class="relative w-full min-h-[90vh] overflow-hidden bg-brand-dark text-brand-light">

  <!-- Background image -->
    <img
        src="/HERO.png"
        alt=""
        class="absolute inset-0 h-full w-full object-cover"
    />

    <!-- Overlay + dégradé gauche -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent"></div>

    <!-- Content -->
    <div class="relative mx-auto max-w-8xl px-10 py-16 md:py-24">
      <div class="max-w-xl">
        <h1 class="font-extrabold leading-[1.05] text-4xl md:text-6xl">
          <span class="block">ENTREPRISE DE</span>
          <span class="block text-brand-orange">DÉMOLITION</span>
          <span class="block">&amp;</span>
          <span class="block text-brand-orange">TERRASSEMENT</span>
        </h1>

        <div class="mt-5 h-1 w-20 bg-brand-orange"></div>

        <p class="mt-6 text-sm md:text-base font-semibold text-white/90">
          Démolition • Terrassement • Dallage
        </p>

        <p class="mt-2 text-sm md:text-base text-white/85">
          Location de bennes &amp; évacuation de gravats
        </p>

        <div class="mt-8">
          <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-xl bg-brand-orange px-6 py-3 font-semibold text-black hover:opacity-90 transition"
          >
            DEMANDE DE DEVIS
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>