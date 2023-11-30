<script setup lang="ts">
const item = {
    id: 12345,
    name: '상품',
};
</script>

<template>
    <div class="p-5">
        <ProductCard :item="item" />
    </div>
</template>
