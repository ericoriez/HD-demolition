<script setup>
const phone = '+33689537322'
const siteUrl = 'https://hd-demolition.fr/'

/** JSON-LD Entreprise (tu as déjà un schema sur index, ici on le remet car page services = importante SEO) */
const businessLd = {
  "@context": "https://schema.org",
  "@type": "ConstructionCompany",
  "name": "HD Démolition",
  "url": siteUrl,
  "logo": `${siteUrl}logo.svg`,
  "image": `${siteUrl}HERO.webp`,
  "telephone": "+33689537322",
  "email": "contact@hd-demolition.fr",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chambéry",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Savoie (73)" },
    { "@type": "AdministrativeArea", "name": "Haute-Savoie (74)" },
    { "@type": "AdministrativeArea", "name": "Ain (01)" },
    { "@type": "AdministrativeArea", "name": "Isère (38)" }
  ],
  "description": "Entreprise de démolition, terrassement et dallage béton à Chambéry (Savoie 73). Location de bennes et évacuation de gravats. Intervention 73, 74, 01, 38. Devis gratuit.",
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

/** JSON-LD FAQPage (SEO + rich results) */
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Intervenez-vous uniquement à Chambéry ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous sommes basés à Chambéry et intervenons en Savoie (73) et selon les chantiers en Haute-Savoie (74), Ain (01) et Isère (38)."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte une démolition en Savoie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le tarif dépend du volume à démolir, de l’accès, des matériaux et de l’évacuation. Le plus simple : appelez-nous et envoyez 2-3 photos pour une estimation rapide."
      }
    },
    {
      "@type": "Question",
      "name": "Faites-vous l’évacuation et le dépôt des gravats ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Nous assurons le chargement, le transport, le tri et le dépôt en centre agréé pour un chantier propre et conforme."
      }
    },
    {
      "@type": "Question",
      "name": "Quel volume de benne choisir pour des gravats ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cela dépend de la surface et de l’épaisseur (dalle, mur, déblais). Nous vous conseillons au téléphone en 2 minutes selon votre chantier."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on faire terrassement + dalle béton avec la même entreprise ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, et c’est souvent plus efficace : préparation du terrain, compactage et dallage béton en continuité, avec un seul interlocuteur."
      }
    }
  ]
}

useHead({
  title: 'Services – Démolition & Terrassement à Chambéry (73) | HD Démolition',
  meta: [
    {
      name: 'description',
      content:
          'Démolition, terrassement, dallage béton à Chambéry (Savoie 73). Location de bennes et évacuation de gravats. Intervention Savoie, Haute-Savoie, Ain, Isère. Devis gratuit, appel direct.'
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Services – HD Démolition (Chambéry / Savoie)' },
    {
      property: 'og:description',
      content:
          'Entreprise de démolition, terrassement et dallage béton à Chambéry (73). Benne & évacuation de gravats. Devis gratuit.'
    },
    { property: 'og:url', content: `${siteUrl}services` }
  ],
  link: [{ rel: 'canonical', href: `${siteUrl}services` }],
  script: [
    { type: 'application/ld+json', children: JSON.stringify(businessLd) },
    { type: 'application/ld+json', children: JSON.stringify(faqLd) }
  ]
})
</script>

<template>
  <!-- HERO -->
  <section class="bg-brand-dark text-brand-light py-16 sm:py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="text-center">

        <div class="inline-block">

          <h1 class="font-extrabold leading-[1.05] text-2xl sm:text-3xl md:text-5xl xl:text-6xl">
            NOS <span class="text-brand-orange">SERVICES</span>
          </h1>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange  to-brand-dark"></div>

        </div>

        <p class="mt-8 text-white/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg">
          Nous réalisons des travaux de <strong>démolition</strong>, <strong>terrassement</strong> et
          <strong>dallage béton</strong> à Chambéry et en Savoie, pour particuliers et professionnels.
          Chaque intervention est étudiée selon l’accès, le volume et les contraintes du terrain.
        </p>

        <p class="mt-4 text-white/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg">
          Nous assurons également la <strong>pose de bennes pour gravats et déchets de chantier</strong>,
          avec organisation du dépôt et de la reprise. Objectif : un chantier maîtrisé, propre et prêt à
          poursuivre les travaux dans de bonnes conditions.
        </p>

        <div class="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#demolition" class="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition">DÉMOLITION</a>
          <a href="#terrassement" class="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition">TERRASSEMENT</a>
          <a href="#dallage" class="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition">DALLAGE</a>
          <a href="#bennes" class="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition">BENNES</a>
          <a href="#gravats" class="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition">GRAVATS</a>
        </div>

      </div>
    </div>
  </section>

  <!-- SERVICES DÉTAILLÉS -->
  <section class="bg-brand-darkSoft text-brand-light py-16 sm:py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-6">

      <!-- DÉMOLITION -->
      <div id="demolition" class="mt-2 scroll-mt-40 text-center">

        <img
            src="~/assets/icons/boule.svg"
            class="mx-auto h-28 sm:h-32 md:h-36 w-auto mb-2"
            alt="Icône démolition"
        />

        <div class="inline-block">

          <h2 class="text-2xl md:text-4xl font-extrabold">
            DÉMOLITION
          </h2>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-dark/50 to-brand-darkSoft"></div>

        </div>

        <div class="mt-10 rounded-xl border border-white/10 bg-black/20 p-6 md:p-8 text-left max-w-4xl mx-auto">
          <p class="text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg">
            Nous réalisons des <strong>travaux de démolition partielle ou complète</strong> pour les particuliers
            et les professionnels : dépose de cloisons, démolition de murs, dalles, garages, annexes et structures
            à déposer avant rénovation ou réaménagement.
          </p>

          <p class="mt-4 text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg">
            Chaque intervention est préparée pour garantir un chantier <strong>sécurisé</strong> et maîtrisé :
            analyse de l’accès, protection des zones à conserver, gestion des nuisances et organisation de la zone de
            travail. Selon le projet, nous assurons aussi l’<strong>évacuation des gravats</strong> et le tri des matériaux.
          </p>

          <ul class="mt-6 space-y-2 text-white/80 text-sm sm:text-base">
            <li>• Démolition intérieure / extérieure (partielle ou totale)</li>
            <li>• Dépose avant rénovation, extension ou remise à plat du terrain</li>
            <li>• Gestion des gravats et évacuation possible selon prestation</li>
          </ul>
        </div>

      </div>

      <!-- TERRASSEMENT -->
      <div id="terrassement" class="mt-20 scroll-mt-40 text-center">

        <img
            src="~/assets/icons/pelle.svg"
            class="mx-auto h-28 sm:h-32 md:h-36 w-auto mb-2"
            alt="Icône terrassement"
        />

        <div class="inline-block">

          <h2 class="text-2xl md:text-4xl font-extrabold">
            TERRASSEMENT
          </h2>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-dark/50 to-brand-darkSoft"></div>

        </div>

        <div class="mt-10 rounded-xl border border-white/10 bg-black/20 p-6 md:p-8 text-left max-w-4xl mx-auto">
          <p class="text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg">
            Le terrassement est la base d’un chantier réussi. Nous préparons votre terrain pour obtenir une
            surface <strong>stable</strong>, <strong>niveau</strong> et adaptée à la suite : dalle béton, accès véhicules,
            aménagement extérieur ou création de plateforme.
          </p>

          <p class="mt-4 text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg">
            Nous intervenons pour le <strong>décaissement</strong>, le <strong>nivellement</strong> et l’organisation des déblais,
            en prenant en compte les contraintes de pente, d’accès et de sol. Objectif : un terrain propre,
            prêt à recevoir l’ouvrage prévu et un chantier fluide.
          </p>

          <ul class="mt-6 space-y-2 text-white/80 text-sm sm:text-base">
            <li>• Décaissement, mise à niveau, préparation de plateforme</li>
            <li>• Préparation avant dallage béton et accès chantier</li>
            <li>• Gestion et évacuation des déblais selon besoin</li>
          </ul>
        </div>

      </div>

      <!-- DALLAGE -->
      <div id="dallage" class="mt-20 scroll-mt-40 text-center">
        <img
            src="~/assets/icons/toupi.svg"
            class="mx-auto h-28 sm:h-32 md:h-36 w-auto mb-2"
            alt="Icône dallage béton"
        />

        <div class="inline-block">
          <h2 class="text-2xl md:text-4xl font-extrabold">
            DALLAGE BÉTON
          </h2>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-dark/50 to-brand-darkSoft"></div>
        </div>

        <div class="mt-10 rounded-xl border border-white/10 bg-black/20 p-6 md:p-8 text-left max-w-4xl mx-auto">
          <p class="text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg">
            Nous réalisons des <strong>dalles béton</strong> pour garages, terrasses, abris, cours et zones de circulation.
            Une dalle durable dépend surtout d’une préparation sérieuse : support stable, compactage et mise en forme
            adaptée à l’usage (piéton, véhicule, charges).
          </p>

          <p class="mt-4 text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg">
            En combinant <strong>terrassement + dallage</strong>, vous gagnez en simplicité : un seul interlocuteur,
            un chantier plus cohérent et une meilleure maîtrise des délais.
          </p>

          <ul class="mt-6 space-y-2 text-white/80 text-sm sm:text-base">
            <li>• Dalles pour terrasse, garage, accès et plateformes</li>
            <li>• Préparation du support (niveau, stabilité) selon projet</li>
            <li>• Possibilité de prestation complète avec terrassement</li>
          </ul>
        </div>
      </div>

      <!-- BENNES -->
      <div id="bennes" class="mt-20 scroll-mt-40 text-center">
        <img
            src="~/assets/icons/benne.svg"
            class="mx-auto h-28 sm:h-32 md:h-36 w-auto mb-2"
            alt="Icône location de bennes"
        />

        <div class="inline-block">
          <h2 class="text-2xl md:text-4xl font-extrabold">
            LOCATION DE BENNES
          </h2>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-dark/50 to-brand-darkSoft"></div>
        </div>

        <div class="mt-10 rounded-xl border border-white/10 bg-black/20 p-6 md:p-8 text-left max-w-4xl mx-auto">
          <p class="text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg">
            La location de benne est la solution la plus simple pour garder un chantier propre.
            Nous proposons la <strong>livraison et l’enlèvement</strong> de bennes adaptées aux gravats et déchets de chantier,
            avec une organisation claire : dépôt, durée, reprise.
          </p>

          <p class="mt-4 text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg">
            Nous vous aidons à choisir le volume selon votre besoin (dalle, démolition, rénovation),
            afin d’éviter les erreurs classiques : benne trop petite, trop de rotations, ou chargement non adapté.
          </p>

          <ul class="mt-6 space-y-2 text-white/80 text-sm sm:text-base">
            <li>• Benne gravats / chantier : dépôt et reprise planifiés</li>
            <li>• Conseil volume selon votre surface et votre type de déchets</li>
            <li>• Solution idéale en complément d’une démolition ou rénovation</li>
          </ul>
        </div>
      </div>

      <!-- GRAVATS -->
      <div id="gravats" class="mt-20 scroll-mt-40 text-center">
        <img
            src="~/assets/icons/camion-gravat.svg"
            class="mx-auto h-28 sm:h-32 md:h-36 w-auto mb-2"
            alt="Icône évacuation de gravats"
        />

        <div class="inline-block">
          <h2 class="text-2xl md:text-4xl font-extrabold">
            ÉVACUATION DE GRAVATS
          </h2>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-dark/50 to-brand-darkSoft"></div>
        </div>

        <div class="mt-10 rounded-xl border border-white/10 bg-black/20 p-6 md:p-8 text-left max-w-4xl mx-auto">
          <p class="text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg">
            Nous assurons l’<strong>évacuation des gravats</strong> après démolition, rénovation ou terrassement :
            chargement, transport et dépôt en filière adaptée. Résultat : un chantier propre, sécurisé,
            et conforme.
          </p>

          <p class="mt-4 text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg">
            Cette prestation est souvent demandée lorsque l’accès est compliqué ou que le volume devient important.
            Nous organisons l’enlèvement pour limiter l’encombrement et accélérer la remise en état.
          </p>

          <ul class="mt-6 space-y-2 text-white/80 text-sm sm:text-base">
            <li>• Enlèvement gravats et déblais après chantier</li>
            <li>• Chargement, transport et dépôt en centre agréé</li>
            <li>• Intervention Chambéry / Savoie + 74 / 01 / 38 selon chantier</li>
          </ul>
        </div>
      </div>

    </div>
  </section>

  <!-- CTA UNIQUE EN BAS -->
  <section class="bg-brand-dark text-brand-light py-16 sm:py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="text-center">

        <div class="inline-block">
          <h2 class="font-extrabold text-brand-orange text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight">
            DEMANDE DE <span class="text-brand-orange">DEVIS</span>
          </h2>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-dark/50 to-brand-dark"></div>
        </div>

        <p class="mt-8 text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          Expliquez-nous votre besoin (commune, accès, type de chantier) et nous revenons vers vous rapidement.
        </p>

        <div class="mt-10">
          <NuxtLink
              to="/contact"
              class="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-brand-orange px-8 sm:px-14 py-3 text-base sm:text-xl font-semibold text-white/85 hover:opacity-90 transition"
          >
            DEMANDE DE DEVIS
          </NuxtLink>
        </div>

        <p class="mt-6 text-white/70 text-sm">
          Devis gratuit • Chantier propre • Intervention rapide
        </p>

      </div>
    </div>
  </section>
</template>