import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({

  // imo you dont need to change that
  ssr: false,

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    './app/assets/css/tailwind.css',
    'notivue/notification.css',
    'notivue/animations.css'
  ],
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    'shadcn-nuxt',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  shadcn: {
    prefix: '',
    componentDir: '@/components/ui'
  }
});