<template>
  <div class="min-h-screen">
    <header class="border-b p-4">
      <div class="mx-auto max-w-6xl flex items-center justify-between">
        <div class="font-bold">HD Démolition</div>

        <nav class="flex gap-6">
          <NuxtLink
              to="/"
              class="hover:text-orange-500"
              active-class="text-orange-500 font-semibold"
          >
            Accueil
          </NuxtLink>

          <NuxtLink
              to="/services"
              class="hover:text-orange-500"
              active-class="text-orange-500 font-semibold"
          >
            Services
          </NuxtLink>

          <NuxtLink
              to="/a-propos"
              class="hover:text-orange-500"
              active-class="text-orange-500 font-semibold"
          >
            À propos
          </NuxtLink>

          <NuxtLink
              to="/contact"
              class="hover:text-orange-500"
              active-class="text-orange-500 font-semibold"
          >
            Contact
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main class="mx-auto max-w-6xl p-4">
      <NuxtPage />
    </main>

    <footer class="border-t p-4">
      <div class="mx-auto max-w-6xl text-sm">
        © {{ new Date().getFullYear() }} HD Démolition
      </div>
    </footer>
  </div>
</template>
