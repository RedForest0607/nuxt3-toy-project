<script lang="ts" setup>
defineProps<{
    item: any;
}>();
function checkStockValue(event: any) {
    if (event.target.value < 0) {
        alert('수량이 0 보다 작습니다.');
        event.target.value = 0;
    }
}
</script>

<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
            <NuxtLink to="/product/{{ item.id }}">
                <img src="https://picsum.photos/400/200" alt="Shoes" />
            </NuxtLink>
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{ item.name }}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="card-actions pt-6 justify-end">
                <div class="box-border relative">
                    <div class="qty pt-6">수량</div>
                </div>
                <div class="box-border space-x-4">
                    <input class="input input-bordered bottom-0 input-primary w-20 max-w-xs" type="number" min="0" @change="checkStockValue($event)" />
                    <button class="btn btn-primary">장바구니 담기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.qty {
    font-size: 15px;
}
</style>
