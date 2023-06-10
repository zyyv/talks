<script lang='ts' setup>
const Intergrations = [
  { name: 'Vite', link: '/integrations/vite', icon: 'i-logos-vitejs' },
  { name: 'Nuxt', link: '/integrations/nuxt', icon: 'i-logos-nuxt-icon' },
  { name: 'Astro', link: '/integrations/astro', icon: 'i-logos-astro-icon dark:invert' },
  { name: 'Svelte', secondary: '(Scoped)', link: '/integrations/svelte-scoped', icon: 'i-logos-svelte-icon' },
  { name: 'Webpack', link: '/integrations/webpack', icon: 'i-logos-webpack' },
  { name: 'CDN Runtime', link: '/integrations/runtime', icon: 'i-logos-javascript' },
  { name: 'CLI', link: '/integrations/cli', icon: 'i-carbon-terminal' },
  { name: 'PostCSS', link: '/integrations/postcss', icon: 'i-logos-postcss' },
  { name: 'ESLint', link: '/integrations/eslint', icon: 'i-logos-eslint' },
  { name: 'VSCode', link: '/integrations/vscode', icon: 'i-logos-visual-studio-code' },

]

function linkTo(link: string) {
  const host = 'https://unocss.dev'
  window.open(host + link, '_blank')
}
</script>

<template>
  <div grid="~ cols-5" gap-8 w-fit ma mt-10>
    <div
      v-for="{ name, icon, link } in Intergrations" :key="name"
      bg-gray-950
      w-30 h-30 rd-4 flex flex-col items-center justify-center gap-2 b
      b-transparent
      hover:b="$vp-c-brand" transition cursor-pointer
      @click="linkTo(link)"
    >
      <div text-10 :class="icon" />
      <div>{{ name }}</div>
    </div>
  </div>
</template>
