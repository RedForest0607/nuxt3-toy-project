<script setup lang="ts">
useHead({
    title: 'Nuxt Sample Project',
    meta: [{ name: 'description', content: 'My amazing site.' }],
    bodyAttrs: {
        class: 'test',
    },
    script: [{ innerHTML: "console.log('Hello world')" }],
});
useSeoMeta({
    title: 'Nuxt Sample Project',
    ogTitle: 'Nuxt Sample Project',
    description: 'Sample Site to Test Nuxt Framework',
    ogDescription: 'Sample Site to Test Nuxt Framework.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
