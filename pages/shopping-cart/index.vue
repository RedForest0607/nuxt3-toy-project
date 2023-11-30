<script setup lang="ts">
import { useProductStore } from '~/stores/productStore';

const totalPrice = reactive({ value: 0 });
const store = useProductStore();
const checkedItemList = reactive(store.getCheckedItem());
const { cartSampleInfo } = storeToRefs(store);

function modifyCheckedList(event: any) {
    store.modifyIsChecked(event.target.id);
    checkedItemList.has(event.target.id) ? checkedItemList.delete(event.target.id) : checkedItemList.add(event.target.id);
}

watch(checkedItemList, () => {
    totalPrice.value = store.getTotalPrice();
});

onMounted(() => {
    store.getCheckedItem();
    totalPrice.value = store.getTotalPrice();
});

function deleteItem(productId: string) {
    store.deleteItem(productId);
}
</script>

<template>
    <div class="overflow-x-auto">
        <table class="table">
            <caption>
                shopping cart
            </caption>
            <!-- head -->
            <thead>
                <tr>
                    <th id="checkAll">
                        <label>
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </th>
                    <th id="productName">상품명</th>
                    <th id="amount">수량</th>
                    <th id="price">가격</th>
                    <th id="blank"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in cartSampleInfo.cartList" :key="product.product.productId" :itemid="product.product.productId">
                    <th id="checkBox">
                        <label>
                            <input
                                :id="product.product.productId"
                                v-model="checkedItemList"
                                type="checkbox"
                                :value="product.product.productId"
                                class="checkbox"
                                @change="modifyCheckedList($event)"
                            />
                        </label>
                    </th>
                    <td>
                        <div class="flex items-center gap-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img src="https://picsum.photos/400/200" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">{{ product.product.productName }}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="badge badge-ghost badge-sm">{{ product.amount }}</span>
                    </td>
                    <td>{{ product.product.productPrice }} 원</td>
                    <th id="delete button">
                        <button class="btn btn-ghost btn-xs" @click="deleteItem(product.product.productId)">delete</button>
                    </th>
                </tr>
            </tbody>
            <!-- foot -->
            <tfoot>
                <tr>
                    <th id="blank"></th>
                    <th id="price">가격</th>
                    <th id="blank"></th>
                    <th id="totalPrice" class="price">{{ totalPrice.value }} 원</th>
                    <th id="blank"></th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<style>
.price {
    font-size: 20px;
    color: white;
}
</style>
