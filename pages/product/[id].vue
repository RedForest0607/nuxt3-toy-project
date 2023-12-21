<script setup lang="ts">
import { useRoute } from '#app';

const productId = ref({});

onBeforeMount(async () => {
    const route = useRoute();
    const { data } = await useFetch(() => `/api/product/${route.params.id}`, {
        method: 'get',
    });
    if (data.value != null) {
        productId.value = data.value.productId;
    }
    // study 필요
});

const productData = computed(() => {
    return productId;
});

console.log(productData);
</script>

<template>
    <div class="card card-side bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
        <div class="card-body">
            <h2 class="card-title">{{ productData }}</h2>
            <p>{{ productData }}</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Watch</button>
            </div>
        </div>
    </div>
</template>
