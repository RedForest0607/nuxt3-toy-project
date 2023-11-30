<script setup lang="ts">
const props = defineProps({
    // eslint-disable-next-line vue/require-prop-types
    text: {
        Type: String,
        required: true,
    },
});
</script>

<template>
    <h1 class="leading-relaxed font-primary font-extrabold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4">{{ props.text }}</h1>
</template>
