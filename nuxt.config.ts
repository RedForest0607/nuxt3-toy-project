// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-vitest'],
    vite: {
        esbuild: {
            drop: ['console'],
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    ssr: true,
});
