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

  <!-- SECTION SERVICE -->
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
          <div class="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4 mb-4 text-center md:text-left">

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
          <div class="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4 mb-4 text-center md:text-left">

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
          <div class="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4 mb-4 text-center md:text-left">

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
          <div class="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4 mb-4 text-center md:text-left">

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
          <div class="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4 mb-4 text-center md:text-left">

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
      <!-- Ligne conversion -->
      <div class="mt-16 text-center">
        <p class="text-white/80 font-semibold">
          Besoin d’un devis pour votre chantier ?
          Nous intervenons rapidement.
        </p>

      </div>

    </div>
  </section>

  <!-- SECTION POURQUOI NOUS CHOISIR -->
  <section class="bg-brand-dark text-brand-light py-20">
    <div class="mx-auto max-w-7xl px-6">

      <!-- Titre -->
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold">
          POURQUOI <span class="text-brand-orange">NOUS CHOISIR</span>
        </h2>
        <div class="mt-4 mx-auto h-1.5 w-28 bg-gradient-to-r from-brand-orange to-black/60"></div>
      </div>

      <!-- Texte -->
      <p class="mt-10 text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
        Basée en Savoie, <span class="text-brand-orange font-semibold">HD DÉMOLITION</span> accompagne
        particuliers et professionnels dans leurs projets de démolition et terrassement avec rigueur,
        réactivité et respect des normes de sécurité.
      </p>

      <!-- Liste -->
      <ul class="mt-12 space-y-6 w-full flex justify-center">
        <div class="space-y-6 text-left">

          <li class="flex items-center gap-4">
            <img src="~/assets/icons/check.svg" alt="" class="h-6 w-6 shrink-0" />
            <span class="text-lg font-semibold text-white/90">
        Intervention rapide
      </span>
          </li>

          <li class="flex items-center gap-4">
            <img src="~/assets/icons/check.svg" alt="" class="h-6 w-6 shrink-0" />
            <span class="text-lg font-semibold text-white/90">
        Devis gratuit et sans engagement
      </span>
          </li>

          <li class="flex items-center gap-4">
            <img src="~/assets/icons/check.svg" alt="" class="h-6 w-6 shrink-0" />
            <span class="text-lg font-semibold text-white/90">
        Chantiers propres et sécurisés
      </span>
          </li>

          <li class="flex items-center gap-4">
            <img src="~/assets/icons/check.svg" alt="" class="h-6 w-6 shrink-0" />
            <span class="text-lg font-semibold text-white/90">
        Évacuation des gravats en centre agréé
      </span>
          </li>

        </div>
      </ul>


    </div>
  </section>
  <!-- SECTION NOS REALISATIONS -->
  <section class="bg-brand-darkSoft text-brand-light py-24">
    <div class="mx-auto max-w-7xl px-6">

      <!-- Titre -->
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold">
          NOS <span class="text-brand-orange">RÉALISATIONS</span>
        </h2>
        <div class="mt-4 mx-auto h-1.5 w-28 bg-gradient-to-r from-brand-orange to-black/60"></div>
        <p class="mt-6 text-white/80 max-w-2xl mx-auto">
          Exemples de chantiers réalisés.
        </p>
      </div>

      <!-- Chantier 1 -->
      <div class="mt-16">
        <h3 class="text-xl font-semibold mb-6 text-center text-white/90">
          Terrassement cour privée
        </h3>

        <div class="grid gap-6 md:grid-cols-2">

          <!-- AVANT -->
          <div class="relative overflow-hidden rounded-xl group">
            <img
                src="/photos/avant1.jpg"
                alt="Avant terrassement cour"
                class="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
            />

            <span class="absolute top-3 left-3 bg-brand-orange text-black font-bold text-xs md:text-sm px-4 py-1.5 rounded-md shadow-lg">
            AVANT
          </span>
          </div>

          <!-- APRES -->
          <div class="relative overflow-hidden rounded-xl group">
            <img
                src="/photos/apres1.jpg"
                alt="Après terrassement cour"
                class="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
            />

            <span class="absolute top-3 left-3 bg-brand-orange text-black font-bold text-xs md:text-sm px-4 py-1.5 rounded-md shadow-lg">
            APRÈS
          </span>
          </div>

        </div>
      </div>

      <!-- Chantier 2 -->
      <div class="mt-20">
        <h3 class="text-xl font-semibold mb-6 text-center text-white/90">
          Préparation terrain
        </h3>

        <div class="grid gap-6 md:grid-cols-2">

          <!-- AVANT -->
          <div class="relative overflow-hidden rounded-xl group">
            <img
                src="/photos/avant2.jpg"
                alt="Avant préparation terrain"
                class="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
            />

            <span class="absolute top-3 left-3 bg-brand-orange text-black font-bold text-xs md:text-sm px-4 py-1.5 rounded-md shadow-lg">
            AVANT
          </span>
          </div>

          <!-- APRES -->
          <div class="relative overflow-hidden rounded-xl group">
            <img
                src="/photos/apres2.jpg"
                alt="Après préparation terrain"
                class="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
            />

            <span class="absolute top-3 left-3 bg-brand-orange text-black font-bold text-xs md:text-sm px-4 py-1.5 rounded-md shadow-lg">
            APRÈS
          </span>
          </div>

        </div>
      </div>

    </div>
  </section>

</template>