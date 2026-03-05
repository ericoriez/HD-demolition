<script setup>
const siteUrl = 'https://hd-demolition.fr/'
const canonical = `${siteUrl}a-propos`

useHead({
  title: 'À propos – Entreprise de Démolition & Terrassement à Chambéry | HD Démolition',
  meta: [
    {
      name: 'description',
      content:
          "Découvrez HD Démolition : entreprise locale basée à Chambéry (Savoie). Démolition, terrassement, dallage béton, bennes et évacuation de gravats. Intervention 73/74/01/38 selon chantier.",
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'À propos – HD Démolition (Chambéry / Savoie)' },
    { property: 'og:description', content: 'Entreprise locale à Chambéry : démolition, terrassement, dallage béton, bennes et gravats. Devis gratuit.' },
    { property: 'og:url', content: canonical },
  ],
  link: [{ rel: 'canonical', href: canonical }],
})
</script>

<template>
  <!-- HERO / INTRO -->
  <section class="bg-brand-dark text-brand-light py-16 sm:py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="text-center">

        <div class="inline-block">
          <h1 class="font-extrabold leading-[1.05] text-2xl sm:text-3xl md:text-5xl xl:text-6xl">
            À <span class="text-brand-orange">PROPOS</span>
          </h1>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange to-brand-dark"></div>
        </div>

        <p class="mt-8 text-white/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg">
          <span class="text-brand-orange font-semibold">HD Démolition</span> est une entreprise locale
          basée à <strong>Chambéry</strong>, au cœur de la <strong>Savoie (73)</strong>.
          Nous intervenons auprès des particuliers et des professionnels avec une exigence simple :
          travailler avec rigueur, respecter les lieux et assurer un chantier maîtrisé du début à la fin.
        </p>

        <p class="mt-4 text-white/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg">
          Notre priorité n’est pas seulement d’exécuter les travaux, mais de garantir une organisation claire,
          une communication directe et un résultat propre, prêt pour la suite du projet.
        </p>

      </div>
    </div>
  </section>

  <!-- NOTRE APPROCHE -->
  <section class="bg-brand-darkSoft text-brand-light py-16 sm:py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-6">

      <div class="text-center">
        <div class="inline-block">
          <h2 class="text-2xl md:text-4xl font-extrabold">
            NOTRE <span class="text-brand-orange">APPROCHE</span>
          </h2>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-dark/50 to-brand-darkSoft"></div>
        </div>

        <p class="mt-6 text-white/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg">
          Chaque chantier est différent. Nous prenons le temps d’analyser votre besoin (accès, volumes, contraintes,
          délais) pour proposer une intervention adaptée, sans surprises.
        </p>
      </div>

      <div class="mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
        <div class="rounded-xl border border-white/10 bg-black/20 p-6 md:p-8 text-left">
          <h3 class="text-lg xl:text-xl font-semibold text-brand-orange leading-tight">
            Sécurité & préparation
          </h3>
          <p class="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
            Organisation de la zone de travail, protection des zones à conserver et méthode d’intervention maîtrisée.
            Objectif : travailler proprement et en sécurité.
          </p>
        </div>

        <div class="rounded-xl border border-white/10 bg-black/20 p-6 md:p-8 text-left">
          <h3 class="text-lg xl:text-xl font-semibold text-brand-orange leading-tight">
            Chantier propre
          </h3>
          <p class="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
            Tri, évacuation et dépôt en filières adaptées lorsque c’est nécessaire, pour limiter l’encombrement
            et vous laisser un chantier net, prêt à poursuivre.
          </p>
        </div>

        <div class="rounded-xl border border-white/10 bg-black/20 p-6 md:p-8 text-left">
          <h3 class="text-lg xl:text-xl font-semibold text-brand-orange leading-tight">
            Réactivité & clarté
          </h3>
          <p class="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
            Devis gratuit, échanges simples, et un suivi clair. Vous savez ce qui est prévu, dans quel ordre,
            et à quel moment.
          </p>
        </div>
      </div>

      <div class="mt-16 text-center">
        <p class="text-white/80 font-semibold">
          Besoin d’un avis rapide sur votre chantier ?
          Appelez-nous et envoyez 2–3 photos pour une première estimation.
        </p>
      </div>

    </div>
  </section>

  <!-- POURQUOI NOUS FAIRE CONFIANCE -->
  <section class="bg-brand-dark text-brand-light py-16 sm:py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-6">

      <div class="text-center">
        <div class="inline-block">
          <h2 class="text-2xl md:text-4xl font-extrabold">
            POURQUOI NOUS <span class="text-brand-orange">FAIRE CONFIANCE</span>
          </h2>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-dark/50 to-brand-dark/60"></div>
        </div>

        <p class="mt-6 text-white/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg">
          Nous intervenons avec une exigence simple : faire les choses correctement, dans le respect des lieux,
          des accès et des règles de sécurité. Pas de blabla, du concret.
        </p>
      </div>

      <div class="mt-12 flex justify-center px-2 sm:px-0">
        <ul class="space-y-6 text-left max-w-md w-full">
          <li class="flex items-center gap-4">
            <img src="~/assets/icons/check.svg" alt="" class="h-6 w-6 shrink-0" />
            <span class="text-base sm:text-lg font-semibold text-white/90">Devis gratuit et sans engagement</span>
          </li>

          <li class="flex items-center gap-4">
            <img src="~/assets/icons/check.svg" alt="" class="h-6 w-6 shrink-0" />
            <span class="text-base sm:text-lg font-semibold text-white/90">Chantiers sécurisés et organisés</span>
          </li>

          <li class="flex items-center gap-4">
            <img src="~/assets/icons/check.svg" alt="" class="h-6 w-6 shrink-0" />
            <span class="text-base sm:text-lg font-semibold text-white/90">Travail propre, finitions nettes</span>
          </li>

          <li class="flex items-center gap-4">
            <img src="~/assets/icons/check.svg" alt="" class="h-6 w-6 shrink-0" />
            <span class="text-base sm:text-lg font-semibold text-white/90">Évacuation des gravats en centre agréé</span>
          </li>

          <li class="flex items-center gap-4">
            <img src="~/assets/icons/check.svg" alt="" class="h-6 w-6 shrink-0" />
            <span class="text-base sm:text-lg font-semibold text-white/90">Réactivité & communication claire</span>
          </li>
        </ul>
      </div>

    </div>
  </section>

  <!-- ZONE D’INTERVENTION -->
  <section class="bg-brand-darkSoft text-brand-light py-16 sm:py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-6">

      <div class="text-center">
        <div class="inline-block">
          <h2 class="text-2xl md:text-4xl font-extrabold">
            ZONE <span class="text-brand-orange">D’INTERVENTION</span>
          </h2>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-dark/50 to-brand-darkSoft"></div>
        </div>

        <p class="mt-6 text-white/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg">
          Basés à <strong>Chambéry</strong>, nous intervenons principalement en
          <strong>Savoie (73)</strong>. Selon les chantiers, nous nous déplaçons également en
          <strong>Haute-Savoie (74)</strong>, <strong>Ain (01)</strong> et <strong>Isère (38)</strong>.
        </p>
      </div>

      <div class="mt-12 grid gap-6 sm:gap-8 md:grid-cols-4">
        <div class="rounded-xl border border-white/10 bg-black/20 p-6 text-center">
          <h3 class="text-lg font-semibold text-brand-orange">Savoie</h3>
          <p class="mt-2 text-sm text-white/80">Chambéry • Aix-les-Bains • Albertville…</p>
        </div>

        <div class="rounded-xl border border-white/10 bg-black/20 p-6 text-center">
          <h3 class="text-lg font-semibold text-brand-orange">Haute-Savoie</h3>
          <p class="mt-2 text-sm text-white/80">Annecy • Rumilly • La Roche-sur-Foron…</p>
        </div>

        <div class="rounded-xl border border-white/10 bg-black/20 p-6 text-center">
          <h3 class="text-lg font-semibold text-brand-orange">Ain</h3>
          <p class="mt-2 text-sm text-white/80">Belley • Ambérieu-en-Bugey…</p>
        </div>

        <div class="rounded-xl border border-white/10 bg-black/20 p-6 text-center">
          <h3 class="text-lg font-semibold text-brand-orange">Isère</h3>
          <p class="mt-2 text-sm text-white/80">Grenoble • Voiron • Pontcharra…</p>
        </div>
      </div>

      <div class="mt-14 text-center">
        <p class="text-white/70 text-sm">
          Vous n’êtes pas sûr que l’on se déplace ? Appelez-nous : on vous répond rapidement.
        </p>
      </div>

    </div>
  </section>

  <!-- CTA FINAL -->
  <section class="bg-brand-dark text-brand-light py-16 sm:py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="text-center">

        <div class="inline-block">
          <h2 class="text-2xl md:text-4xl font-extrabold">
            UN PROJET ? <span class="text-brand-orange">PARLONS-EN</span>
          </h2>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-dark/50 to-brand-dark/60"></div>
        </div>

        <p class="mt-8 text-white/80 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg">
          Décrivez-nous votre besoin (commune, accès, type de chantier). Nous vous répondons rapidement
          avec une proposition claire et un devis gratuit.
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

        <p class="mt-6 text-white/70 text-sm">
          Devis gratuit • Chantier propre • Intervention rapide
        </p>

      </div>
    </div>
  </section>
</template>