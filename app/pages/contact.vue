<script setup lang="ts">
import { reactive, ref, computed } from "vue"

const phone = "+33689537322"
const phoneHref = "tel:+33689537322"
const emailTemp = "contact@hd-demolition.fr"
const WEB3FORMS_KEY = "4f141169-fbd6-44a9-aba2-a8f76104cb5a"

const siteUrl = "https://hd-demolition.fr/"

const canonical = `${siteUrl}contact`

const chantierOptions = [
  { value: "demolition", label: "Démolition" },
  { value: "terrassement", label: "Terrassement" },
  { value: "dallage", label: "Dallage béton" },
  { value: "bennes", label: "Location de bennes" },
  { value: "gravats", label: "Évacuation de gravats" },
  { value: "autre", label: "Autre (précisez dans message)" },
]

const form = reactive({
  name: "",
  phone: "",
  email: "",
  city: "",
  chantierType: "",
  message: "",
  consent: false,
  // honeypot
  website: "",
})

const isLoading = ref(false)
const status = ref<"idle" | "success" | "error">("idle")
const statusMessage = ref("")

const canSubmit = computed(() => {
  return (
      form.name.trim().length >= 2 &&
      form.phone.trim().length >= 6 &&
      form.email.trim().length >= 5 &&
      form.city.trim().length >= 2 &&
      form.chantierType.trim().length >= 1 &&
      form.message.trim().length >= 10 &&
      form.consent === true &&
      !isLoading.value
  )
})

function resetStatus() {
  status.value = "idle"
  statusMessage.value = ""
}

async function submitForm() {
  resetStatus()

  // Honeypot rempli => on stoppe (anti-spam) sans afficher d'erreur
  if (form.website && form.website.trim().length > 0) {
    status.value = "success"
    statusMessage.value = "Merci ! Votre demande a bien été envoyée."
    return
  }

  isLoading.value = true

  try {
    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: `Demande de devis – ${form.city} (${form.chantierType})`,
      from_name: "HD Démolition – Contact",
      replyto: form.email,
      botcheck: "",
      name: form.name,
      phone: form.phone,
      email: form.email,
      city: form.city,
      chantier_type: form.chantierType,
      message: form.message,
      consent: form.consent ? "Oui" : "Non",
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json().catch(() => null)

    if (res.ok && data?.success) {
      status.value = "success"
      statusMessage.value =
          "Demande envoyée ! On vous recontacte rapidement."

      // reset
      form.name = ""
      form.phone = ""
      form.email = ""
      form.city = ""
      form.chantierType = ""
      form.message = ""
      form.consent = false
      form.website = ""
    } else {
      status.value = "error"
      statusMessage.value =
          "Erreur lors de l’envoi. Réessayez ou appelez-nous directement."
    }
  } catch (e) {
    status.value = "error"
    statusMessage.value =
        "Impossible d’envoyer le message (réseau). Réessayez ou appelez-nous."
  } finally {
    isLoading.value = false
  }
}

useHead({
  title: "Contact – Devis Démolition & Terrassement à Chambéry (73) | HD Démolition",
  meta: [
    {
      name: "description",
      content:
          "Contactez HD Démolition à Chambéry (Savoie 73) : devis gratuit en démolition, terrassement, dallage béton, bennes, gravats. Intervention 73, 74, 01, 38. Téléphone prioritaire, réponse rapide.",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "Contact – HD Démolition (Chambéry / Savoie)" },
    {
      property: "og:description",
      content:
          "Devis gratuit : démolition, terrassement, dallage béton, bennes, gravats à Chambéry (73). Intervention 73/74/01/38. Appel direct.",
    },
    { property: "og:url", content: canonical },
  ],
  link: [{ rel: "canonical", href: canonical }],
})
</script>

<template>
  <!-- HERO -->
  <section class="bg-brand-dark text-brand-light py-16 sm:py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="text-center">
        <div class="inline-block">
          <h1 class="font-extrabold leading-[1.05] text-2xl sm:text-3xl md:text-5xl xl:text-6xl">
            CONTACT <span class="text-brand-orange">DEVIS</span>
          </h1>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange to-brand-dark"></div>
        </div>

        <p class="mt-8 text-white/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg">
          Besoin d’une <strong>démolition</strong>, d’un <strong>terrassement</strong>, d’un
          <strong>dallage béton</strong> ou d’une solution <strong>benne / gravats</strong> ?
          Décrivez votre chantier (commune, accès, type) et nous vous rappelons rapidement.
        </p>

        <p class="mt-4 text-white/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg">
          Intervention : <strong>Chambéry</strong>, <strong>Savoie (73)</strong> et selon chantier
          <strong>Haute-Savoie (74)</strong>, <strong>Ain (01)</strong>, <strong>Isère (38)</strong>.
          Priorité aux appels pour les demandes urgentes.
        </p>

        <div class="mt-10 flex flex-col sm:flex-row justify-center gap-3">
          <a
              :href="phoneHref"
              class="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-brand-orange px-8 sm:px-14 py-3 text-base sm:text-xl font-semibold text-white/85 hover:opacity-90 transition"
          >
            APPELER : 06 89 53 73 22
          </a>

          <a
              href="#form"
              class="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 sm:px-14 py-3 text-base sm:text-xl font-semibold hover:bg-white/10 transition scroll-mt-40"
          >
            DEMANDE ÉCRITE
          </a>
        </div>

      </div>
    </div>
  </section>

  <!-- FORMULAIRE + RASSURANCE -->
  <section class="bg-brand-darkSoft text-brand-light py-16 sm:py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <!-- RASSURANCE (style card services) -->
        <div class="lg:col-span-5">
          <div class="rounded-xl border border-white/10 bg-black/20 p-6 md:p-8">
            <div class="text-center">
              <div class="inline-block">
                <h2 class="text-2xl md:text-4xl font-extrabold">
                  DEVIS <span class="text-brand-orange">RAPIDE</span>
                </h2>
                <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-dark/50 to-brand-darkSoft"></div>
              </div>
            </div>

            <p class="mt-8 text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg">
              On répond vite parce que sur un chantier, le timing compte. Le plus efficace :
              <strong>un appel</strong> + quelques détails (commune, accès, volumes/surfaces).
            </p>

            <ul class="mt-6 space-y-2 text-white/80 text-sm sm:text-base">
              <li>• Devis gratuit et clair</li>
              <li>• Chantier propre, organisation maîtrisée</li>
              <li>• Possibilité évacuation / dépôt gravats</li>
              <li>• Zone : 73 / 74 / 01 / 38 selon chantier</li>
            </ul>

            <div class="mt-8">
              <a
                  :href="phoneHref"
                  class="inline-flex w-full items-center justify-center rounded-xl bg-brand-orange px-8 py-3 text-base sm:text-xl font-semibold text-white/85 hover:opacity-90 transition"
              >
                APPELER MAINTENANT
              </a>
            </div>

            <p class="mt-4 text-white/70 text-sm text-center">
              Réactivité • Devis gratuit • Travail propre
            </p>
          </div>
        </div>

        <!-- FORM -->
        <div class="lg:col-span-7">
          <div id="form" class="scroll-mt-40 text-center">
            <div class="inline-block">
              <h2 class="text-2xl md:text-4xl font-extrabold">
                DEMANDE DE <span class="text-brand-orange">DEVIS</span>
              </h2>
              <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-dark/50 to-brand-darkSoft"></div>
            </div>

            <p class="mt-8 text-white/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg">
              Formulaire simple (1 minute). Indiquez votre besoin et on vous recontacte rapidement.
            </p>



            <div class="mt-10 rounded-xl border border-white/10 bg-black/20 p-6 md:p-8 text-left max-w-4xl mx-auto">
              <form class="space-y-5" @submit.prevent="submitForm">
                <!-- Honeypot -->
                <div class="hidden" aria-hidden="true">
                  <label for="website">Website</label>
                  <input id="website" v-model="form.website" type="text" autocomplete="off" tabindex="-1" />
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <!-- Nom -->
                  <div>
                    <label for="name" class="block text-sm font-semibold text-white/85">Nom *</label>
                    <input
                        id="name"
                        v-model="form.name"
                        type="text"
                        autocomplete="name"
                        required
                        class="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-brand-light placeholder:text-white/40 outline-none focus:border-brand-orange/60 focus:ring-2 focus:ring-brand-orange/20"
                        placeholder="Votre nom"
                        @input="resetStatus"
                    />
                  </div>

                  <!-- Téléphone -->
                  <div>
                    <label for="phone" class="block text-sm font-semibold text-white/85">Téléphone *</label>
                    <input
                        id="phone"
                        v-model="form.phone"
                        type="tel"
                        inputmode="tel"
                        autocomplete="tel"
                        required
                        class="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-brand-light placeholder:text-white/40 outline-none focus:border-brand-orange/60 focus:ring-2 focus:ring-brand-orange/20"
                        placeholder="06…"
                        @input="resetStatus"
                    />
                    <p class="mt-1 text-xs text-white/60">On vous rappelle en priorité sur ce numéro.</p>
                  </div>

                  <!-- Email -->
                  <div>
                    <label for="email" class="block text-sm font-semibold text-white/85">Email *</label>
                    <input
                        id="email"
                        v-model="form.email"
                        type="email"
                        autocomplete="email"
                        required
                        class="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-brand-light placeholder:text-white/40 outline-none focus:border-brand-orange/60 focus:ring-2 focus:ring-brand-orange/20"
                        placeholder="votre@email.fr"
                        @input="resetStatus"
                    />
                  </div>

                  <!-- Ville -->
                  <div>
                    <label for="city" class="block text-sm font-semibold text-white/85">Commune / Ville *</label>
                    <input
                        id="city"
                        v-model="form.city"
                        type="text"
                        autocomplete="address-level2"
                        required
                        class="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-brand-light placeholder:text-white/40 outline-none focus:border-brand-orange/60 focus:ring-2 focus:ring-brand-orange/20"
                        placeholder="Chambéry, Aix-les-Bains…"
                        @input="resetStatus"
                    />
                  </div>

                  <!-- Type -->
                  <div class="sm:col-span-2">
                    <label for="chantierType" class="block text-sm font-semibold text-white/85">Type de chantier *</label>
                    <select
                        id="chantierType"
                        v-model="form.chantierType"
                        required
                        class="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-brand-light outline-none focus:border-brand-orange/60 focus:ring-2 focus:ring-brand-orange/20"
                        @change="resetStatus"
                    >
                      <option value="" disabled class="bg-brand-dark text-white">Choisir…</option>
                      <option v-for="opt in chantierOptions" :key="opt.value" :value="opt.label" class="bg-brand-dark text-white">
                        {{ opt.label }}
                      </option>
                    </select>
                  </div>

                  <!-- Message -->
                  <div class="sm:col-span-2">
                    <label for="message" class="block text-sm font-semibold text-white/85">Message *</label>
                    <textarea
                        id="message"
                        v-model="form.message"
                        rows="6"
                        required
                        class="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-brand-light placeholder:text-white/40 outline-none focus:border-brand-orange/60 focus:ring-2 focus:ring-brand-orange/20"
                        placeholder="Accès (camion/mini-pelle), volume/surface, contraintes, délai souhaité…"
                        @input="resetStatus"
                    ></textarea>
                    <p class="mt-1 text-xs text-white/60">
                      Minimum 10 caractères
                    </p>
                  </div>
                </div>

                <!-- RGPD -->
                <div class="rounded-xl border border-white/10 bg-white/5 p-4">
                  <label class="flex items-start gap-3">
                    <input
                        v-model="form.consent"
                        type="checkbox"
                        required
                        class="mt-1 h-4 w-4 rounded border-white/30 bg-transparent text-brand-orange focus:ring-brand-orange/30"
                        @change="resetStatus"
                    />
                    <span class="text-xs sm:text-sm text-white/75 leading-relaxed">
                      J’accepte que mes informations soient utilisées pour me recontacter au sujet de ma demande.
                      <span class="text-white/60">(Obligatoire – RGPD)</span>
                    </span>
                  </label>
                </div>

                <!-- CTA -->
                <div class="flex flex-col sm:flex-row gap-3">
                  <button
                      type="submit"
                      :disabled="!canSubmit"
                      class="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-brand-orange px-8 sm:px-14 py-3 text-base sm:text-xl font-semibold text-white/85 hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span v-if="isLoading">ENVOI EN COURS…</span>
                    <span v-else>ENVOYER</span>
                  </button>

                  <a
                      :href="phoneHref"
                      class="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 sm:px-14 py-3 text-base sm:text-xl font-semibold hover:bg-white/10 transition"
                  >
                    APPELER
                  </a>
                </div>

                <!-- STATUS -->
                <div v-if="status !== 'idle'" class="mt-8 max-w-4xl mx-auto text-left">
                  <div
                      v-if="status === 'success'"
                      class="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-100"
                  >
                    {{ statusMessage }}
                  </div>
                  <div
                      v-else
                      class="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-100"
                  >
                    {{ statusMessage }}
                  </div>
                </div>
              </form>
            </div>
          </div>


        </div>
      </div>
    </div>
  </section>

  <!-- CTA BAS (même esprit que services) -->
  <section class="bg-brand-dark text-brand-light py-16 sm:py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="text-center">
        <div class="inline-block">
          <h2 class="font-extrabold text-brand-orange text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight">
            APPEL RAPIDE = <span class="text-brand-orange">DEVIS RAPIDE</span>
          </h2>

          <div class="mt-4 h-1.5 w-full bg-gradient-to-r from-brand-orange via-brand-dark/50 to-brand-dark"></div>
        </div>

        <p class="mt-8 text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          Pour gagner du temps sur le chantier, le plus simple est d’appeler : commune + accès + type de travaux.
        </p>

        <div class="mt-10 flex flex-col sm:flex-row justify-center gap-3">
          <a
              :href="phoneHref"
              class="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-brand-orange px-8 sm:px-14 py-3 text-base sm:text-xl font-semibold text-white/85 hover:opacity-90 transition"
          >
            APPELER : 06 89 53 73 22
          </a>

          <a
              href="#form"
              class="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 sm:px-14 py-3 text-base sm:text-xl font-semibold hover:bg-white/10 transition scroll-mt-40"
          >
            ALLER AU FORMULAIRE
          </a>
        </div>

        <p class="mt-6 text-white/70 text-sm">
          Devis gratuit • Chantier propre • Intervention rapide
        </p>
      </div>
    </div>
  </section>
</template>