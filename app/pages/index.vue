<script setup>
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ConstructionCompany",
  "name": "HD Démolition",
  "url": "https://hd-demolition.fr/",
  "logo": "https://hd-demolition.fr/logo.svg",
  "image": "https://hd-demolition.fr/HERO.webp",
  "telephone": "+33689537322",
  "email": "contact@hd-demolition.fr",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chambéry",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Savoie" },
    { "@type": "AdministrativeArea", "name": "Haute-Savoie" },
    { "@type": "AdministrativeArea", "name": "Ain" },
    { "@type": "AdministrativeArea", "name": "Isère" }
  ],
  "description": "Entreprise de démolition, terrassement et dallage béton. Location de bennes et évacuation de gravats. Intervention en Savoie, Haute-Savoie, Ain et Isère. Devis gratuit.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Prestations",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Démolition" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Terrassement" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dallage béton" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Location de bennes" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Évacuation de gravats" } }
    ]
  }
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(jsonLd)
    }
  ]
})
</script>

<template>
  <section class="relative w-full
  min-h-[55vh]
  sm:min-h-[70vh]
  lg:min-h-[88vh]
  bg-black overflow-hidden text-brand-light">
    <img
        src="/HERO.webp"
        alt="Chantier de démolition et terrassement – HD Démolition"
        width="1440"
        height="650"
        class="absolute inset-0 h-full w-full
         object-contain
         sm:object-cover sm:object-[60%_center]
         lg:object-center"
        fetchpriority="high"
        loading="eager"
        decoding="async"
    />

    <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25 sm:from-black/85 sm:via-black/60 lg:to-transparent"></div>
    <div class="relative mx-auto max-w-7xl
  px-6 sm:px-8 lg:px-10
  py-1 sm:py-1 md:py-1 lg:py-1">
      <div class="min-h-[54vh] max-[360px]:min-h-[54vh] sm:min-h-[72vh] lg:min-h-[88vh] flex items-center">
        <div class="max-w-xl w-full ml-0 sm:ml-2 lg:ml-20">
          <h1 class="font-extrabold leading-[1.05] text-2xl sm:text-3xl md:text-5xl xl:text-6xl">
            <span class="block">ENTREPRISE DE</span>
            <span class="block text-brand-orange">DÉMOLITION</span>
            <span class="block">&amp;</span>
            <span class="block text-brand-orange break-words">TERRASSEMENT</span>
          </h1>

          <div class="mt-6 h-1.5 w-1/2 bg-gradient-to-r from-brand-orange to-black/60"></div>

          <p class="mt-6 text-sm sm:text-base lg:text-2xl font-semibold text-white/90">
            Démolition • Terrassement • Dallage
          </p>

          <p class="mt-2 text-sm sm:text-base lg:text-2xl font-semibold text-white/90">
            Location de bennes • Évacuation de gravats
          </p>

          <div class="mt-8">
            <NuxtLink
                to="/contact"
                class="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-brand-orange px-8 sm:px-14 py-3 text-base sm:text-xl font-semibold text-white/85 hover:opacity-90 transition"
            >
              DEMANDE DE DEVIS
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION SERVICE -->
  <section class="bg-brand-darkSoft text-brand-light py-16 sm:py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-6">

      <!-- Titre -->
      <div class="text-center">
        <div class="inline-block">

          <h2 class="text-2xl md:text-4xl font-extrabold">
            NOS <span class="text-brand-orange">SERVICES</span>
          </h2>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-dark/50 to-brand-darkSoft"></div>

        </div>
      </div>

      <!-- GRID UNIQUE -->
      <div class="mt-14 grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-6">

        <!-- 3 du haut -->
        <NuxtLink to="/services#demolition" class="card-service md:col-span-2">
          <div class="flex flex-col lg:flex-row items-center xl:items-center gap-3 lg:gap-4 mb-4 text-center lg:text-left">

          <img
                src="~/assets/icons/boule.svg"
                alt=""
                class="h-14 xl:h-20 w-auto"
            />
            <h3 class="text-lg xl:text-xl font-semibold text-brand-orange leading-tight">
              DÉMOLITION
            </h3>
          </div>

          <p class="text-sm text-white/80">
            Démolition partielle ou complète, intervention sécurisée et chantier propre.
          </p>
        </NuxtLink>

        <NuxtLink to="/services#terrassement" class="card-service md:col-span-2">
          <div class="flex flex-col lg:flex-row items-center xl:items-center gap-3 lg:gap-4 mb-4 text-center lg:text-left">

          <img
                src="~/assets/icons/pelle.svg"
                alt="Icône terrassement"
                class="h-14 xl:h-20 w-auto"
            />
            <h3 class="text-lg xl:text-xl font-semibold text-brand-orange leading-tight">
              TERRASSEMENT
            </h3>
          </div>

          <p class="text-sm text-white/80">
            Préparation de terrain, nivellement et fondations pour maisons, extensions et aménagements extérieurs.
          </p>
        </NuxtLink>

        <NuxtLink to="/services#dallage" class="card-service md:col-span-2">
          <div class="flex flex-col lg:flex-row items-center xl:items-center gap-3 lg:gap-4 mb-4 text-center lg:text-left">

          <img
                src="~/assets/icons/toupi.svg"
                alt="Icône dallage béton"
                class="h-14 xl:h-20 w-auto"
            />
            <h3 class="text-lg xl:text-xl font-semibold text-brand-orange leading-tight">
              DALLAGE BÉTON
            </h3>
          </div>

          <p class="text-sm text-white/80">
            Réalisation de dalles béton pour garages, terrasses, accès véhicules.
          </p>
        </NuxtLink>

        <!-- 2 du bas -->
        <NuxtLink to="/services#bennes" class="card-service md:col-span-2 md:col-start-2">
          <div class="flex flex-col lg:flex-row items-center xl:items-center gap-3 lg:gap-4 mb-4 text-center lg:text-left">

          <img
                src="~/assets/icons/benne.svg"
                alt="Icône location de bennes"
                class="h-14 xl:h-20 w-auto"
            />
            <h3 class="text-lg xl:text-xl font-semibold text-brand-orange leading-tight">
              LOCATION DE BENNES
            </h3>
          </div>

          <p class="text-sm text-white/80">
            Livraison et enlèvement de bennes adaptées aux gravats et déchets de chantier.
          </p>
        </NuxtLink>

        <NuxtLink to="/services#gravats" class="card-service md:col-span-2">
          <div class="flex flex-col lg:flex-row items-center xl:items-center gap-3 lg:gap-4 mb-4 text-center lg:text-left">

          <img
                src="~/assets/icons/camion-gravat.svg"
                alt="Icône évacuation de gravats"
                class="h-14 xl:h-20 w-auto"
            />
            <h3 class="text-lg xl:text-xl font-semibold text-brand-orange leading-tight">
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
  <section class="bg-brand-dark text-brand-light py-16 sm:py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-6">

      <!-- Titre -->
      <div class="text-center">
        <div class="inline-block">

          <h2 class="text-2xl md:text-4xl font-extrabold">
            POURQUOI <span class="text-brand-orange">NOUS CHOISIR</span>
          </h2>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-dark/50 to-brand-dark/60"></div>

        </div>
      </div>

      <!-- Texte -->
      <p class="mt-10 text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
        Basée en Savoie, <span class="text-brand-orange font-semibold">HD DÉMOLITION</span> accompagne
        particuliers et professionnels dans leurs projets de démolition et terrassement avec rigueur,
        réactivité et respect des normes de sécurité.
      </p>

      <!-- Liste -->
      <div class="mt-12 flex justify-center px-2 sm:px-0">
        <ul class="space-y-6 text-left max-w-md w-full">
          <li class="flex items-center gap-4">
            <img src="~/assets/icons/check.svg" alt="" class="h-6 w-6 shrink-0" />
            <span class="text-base sm:text-lg font-semibold text-white/90">Intervention rapide</span>
          </li>

          <li class="flex items-center gap-4">
            <img src="~/assets/icons/check.svg" alt="" class="h-6 w-6 shrink-0" />
            <span class="text-base sm:text-lg font-semibold text-white/90">Devis gratuit et sans engagement</span>
          </li>

          <li class="flex items-center gap-4">
            <img src="~/assets/icons/check.svg" alt="" class="h-6 w-6 shrink-0" />
            <span class="text-base sm:text-lg font-semibold text-white/90">Chantiers propres et sécurisés</span>
          </li>

          <li class="flex items-center gap-4">
            <img src="~/assets/icons/check.svg" alt="" class="h-6 w-6 shrink-0" />
            <span class="text-base sm:text-lg font-semibold text-white/90">Évacuation des gravats en centre agréé</span>
          </li>
        </ul>
      </div>


    </div>
  </section>

  <!-- SECTION NOS REALISATIONS -->
  <section class="bg-brand-darkSoft text-brand-light py-16 sm:py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-6">

      <!-- Titre -->
      <div class="text-center">
        <div class="inline-block">

          <h2 class="text-2xl md:text-4xl font-extrabold">
            NOS <span class="text-brand-orange">RÉALISATIONS</span>
          </h2>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-dark/50 to-brand-darkSoft"></div>

        </div>

        <p class="mt-6 text-white/80 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
          Exemples de chantiers réalisés.
        </p>
      </div>

      <!-- Chantier 1 -->
      <div class="mt-16">
        <h3 class="text-xl font-semibold mb-6 text-center text-white/90">
          Création d’une cour stabilisée et drainée
        </h3>

        <div class="grid gap-6 md:grid-cols-2">

          <!-- AVANT -->
          <div class="relative overflow-hidden rounded-xl group">
            <img
                src="/photos/avant1.jpg"
                alt="Avant terrassement cour"
                class="w-full h-64 sm:h-72 md:h-80 object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
            />

            <span class="absolute top-3 left-3 bg-brand-orange text-white font-bold text-xs md:text-sm px-4 py-1.5 rounded-md shadow-lg">
            AVANT
          </span>
          </div>

          <!-- APRES -->
          <div class="relative overflow-hidden rounded-xl group">
            <img
                src="/photos/apres1.jpg"
                alt="Après terrassement cour"
                class="w-full h-64 sm:h-72 md:h-80 object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
            />

            <span class="absolute top-3 left-3 bg-brand-orange text-white font-bold text-xs md:text-sm px-4 py-1.5 rounded-md shadow-lg">
            APRÈS
          </span>
          </div>

        </div>
      </div>

      <!-- Chantier 2 -->
      <div class="mt-20">
        <h3 class="text-xl font-semibold mb-6 text-center text-white/90">
          Du terrain en friche à une plateforme prête à aménager
        </h3>

        <div class="grid gap-6 md:grid-cols-2">

          <!-- AVANT -->
          <div class="relative overflow-hidden rounded-xl group">
            <img
                src="/photos/avant2.jpg"
                alt="Avant préparation terrain"
                class="w-full h-64 sm:h-72 md:h-80 object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
            />

            <span class="absolute top-3 left-3 bg-brand-orange text-white font-bold text-xs md:text-sm px-4 py-1.5 rounded-md shadow-lg">
            AVANT
          </span>
          </div>

          <!-- APRES -->
          <div class="relative overflow-hidden rounded-xl group">
            <img
                src="/photos/apres2.jpg"
                alt="Après préparation terrain"
                class="w-full h-64 sm:h-72 md:h-80 object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
            />

            <span class="absolute top-3 left-3 bg-brand-orange text-white font-bold text-xs md:text-sm px-4 py-1.5 rounded-md shadow-lg">
            APRÈS
          </span>
          </div>

        </div>
      </div>

    </div>
  </section>

  <!-- SECTION CTA DEVIS -->
  <section class="bg-brand-dark text-brand-light py-16 sm:py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="text-center">

        <div class="inline-block">

          <h2 class="text-2xl md:text-4xl font-extrabold">
            BESOIN D’UN <span class="text-brand-orange">DEVIS</span> RAPIDE ?
          </h2>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-dark/50 to-brand-dark/60"></div>

        </div>

        <p class="mt-8 text-white/80 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg">
          Contactez <span class="text-brand-orange font-semibold">HD DÉMOLITION</span>
          pour une étude gratuite et sans engagement.
        </p>

        <div class="mt-10 flex flex-col items-center gap-4">
          <NuxtLink
              to="/contact"
              class="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-brand-orange px-10 py-3 text-base sm:text-lg font-semibold text-white/85 hover:opacity-90 transition"
          >
            DEMANDE DE DEVIS
          </NuxtLink>

          <a
              href="tel:+33689537322"
              class="inline-flex items-center gap-2 text-white/90 hover:text-brand-orange transition font-semibold"
              aria-label="Appeler le 06 89 53 73 22"
          >
      <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange/15">
        <img src="~/assets/icons/phone.svg" alt="" class="h-7 w-7 rounded-full" />
      </span>
            06 89 53 73 22
          </a>
        </div>

      </div>
    </div>
  </section>

</template>