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
      <div class="max-w-xl mt-10 md:mt-16 ml-4 md:ml-20">
        <h1 class="font-extrabold leading-[1.05] text-4xl md:text-6xl">
          <span class="block">ENTREPRISE DE</span>
          <span class="block text-brand-orange">DÉMOLITION</span>
          <span class="block">&amp;</span>
          <span class="block text-brand-orange">TERRASSEMENT</span>
        </h1>

        <div class="mt-6 h-1.5 w-1/2 bg-gradient-to-r from-brand-orange to-black/60"></div>

        <p class="mt-6 text-sm md:text-2xl font-semibold text-white/90">
          Démolition • Terrassement • Dallage
        </p>

        <p class="mt-2 text-sm md:text-2xl font-semibold text-white/85">
          Location de bennes • Évacuation de gravats
        </p>

        <div class="mt-8">
          <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-xl bg-brand-orange px-14 py-3 text-xl font-semibold text-white/85 hover:opacity-90 transition"
          >
            DEMANDE DE DEVIS
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-brand-darkSoft text-brand-light py-20">
    <div class="mx-auto max-w-7xl px-6">

      <!-- Titre -->
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold">
          NOS <span class="text-brand-orange">SERVICES</span>
        </h2>
        <div class="mt-4 mx-auto h-1.5 w-28 bg-gradient-to-r from-brand-orange to-black/60"></div>
      </div>

      <!-- GRID UNIQUE -->
      <div class="mt-14 grid gap-8 md:grid-cols-6">

        <!-- 3 du haut -->
        <NuxtLink to="/services#demolition" class="card-service md:col-span-2">
          <div class="flex items-center gap-4 mb-4">
            <img
                src="~/assets/icons/boule.svg"
                alt=""
                class="h-14 md:h-20 w-auto"
            />
            <h3 class="text-lg md:text-xl font-semibold text-brand-orange">
              DÉMOLITION
            </h3>
          </div>

          <p class="text-sm text-white/80">
            Démolition partielle ou complète, intervention sécurisée et chantier propre.
          </p>
        </NuxtLink>

        <NuxtLink to="/services#terrassement" class="card-service md:col-span-2">
          <div class="flex items-center gap-4 mb-4">
            <img
                src="~/assets/icons/pelle.svg"
                alt="Icône terrassement"
                class="h-14 md:h-20 w-auto"
            />
            <h3 class="text-xl font-semibold text-brand-orange">
              TERRASSEMENT
            </h3>
          </div>

          <p class="text-sm text-white/80">
            Préparation de terrain, nivellement et fondations pour maisons, extensions et aménagements extérieurs.
          </p>
        </NuxtLink>

        <NuxtLink to="/services#dallage" class="card-service md:col-span-2">
          <div class="flex items-center gap-4 mb-4">
            <img
                src="~/assets/icons/toupi.svg"
                alt="Icône dallage béton"
                class="h-14 md:h-20 w-auto"
            />
            <h3 class="text-xl font-semibold text-brand-orange">
              DALLAGE BÉTON
            </h3>
          </div>

          <p class="text-sm text-white/80">
            Réalisation de dalles béton pour garages, terrasses, accès véhicules.
          </p>
        </NuxtLink>

        <!-- 2 du bas -->
        <NuxtLink to="/services#bennes" class="card-service md:col-span-2 md:col-start-2">
          <div class="flex items-center gap-4 mb-4">
            <img
                src="~/assets/icons/benne.svg"
                alt="Icône location de bennes"
                class="h-14 md:h-20 w-auto"
            />
            <h3 class="text-xl font-semibold text-brand-orange">
              LOCATION DE BENNES
            </h3>
          </div>

          <p class="text-sm text-white/80">
            Livraison et enlèvement de bennes adaptées aux gravats et déchets de chantier.
          </p>
        </NuxtLink>

        <NuxtLink to="/services#gravats" class="card-service md:col-span-2">
          <div class="flex items-center gap-4 mb-4">
            <img
                src="~/assets/icons/camion-gravat.svg"
                alt="Icône évacuation de gravats"
                class="h-14 md:h-20 w-auto"
            />
            <h3 class="text-xl font-semibold text-brand-orange">
              ÉVACUATION DE GRAVATS
            </h3>
          </div>

          <p class="text-sm text-white/80">
            Chargement, transport et dépôt en centre agréé pour un chantier propre et conforme.
          </p>
        </NuxtLink>

      </div>

    </div>
  </section>



</template>