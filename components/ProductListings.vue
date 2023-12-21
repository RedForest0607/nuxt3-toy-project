<script setup lang="ts">
import type { Product } from '~/types/Product';
import CustomModal from '~/components/CustomModal.vue';

const url = `/api/products/1`;
const { data } = useFetch<Product>(url, {
    method: 'get',
});

const isModalShow = ref(false);
const modalTitle = ref('');
const modalPassage = ref('');

function defineModal(title: string, passage: string): void {
    modalTitle.value = title;
    modalPassage.value = passage;
    changeModalVisibility();
}

function changeModalVisibility() {
    isModalShow.value = !isModalShow.value;
}
</script>

<template>
    <div class="grid grid-cols-2">
        <div v-for="item in data" :key="data?.productId">
            <ProductCard :item="item" @define-modal="defineModal" />
        </div>
    </div>
    <CustomModal v-if="isModalShow" :title="modalTitle" :passage="modalPassage" @is-show="changeModalVisibility" />
</template>
