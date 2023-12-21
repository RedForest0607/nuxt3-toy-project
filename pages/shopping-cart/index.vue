<script setup lang="ts">
import { useShoppingCartStore } from '~/stores/shoppingCartStore';

const totalPrice = ref(0);
const store = useShoppingCartStore();
const checkedItemList = reactive(store.getCheckedItemIds());
const { cartSampleInfo } = storeToRefs(store);

watch(checkedItemList, () => {
    setTotalPrice();
});

onMounted(() => {
    store.getCheckedItemIds();
    setTotalPrice();
});

function modifyCheckedList(e: any) {
    store.modifyIsChecked(e.target.id);
    checkedItemList.has(e.target.id) ? checkedItemList.delete(e.target.id) : checkedItemList.add(e.target.id);
}

function deleteItem(productId: string) {
    store.deleteItem(productId);
    setTotalPrice();
}

function changeCartItemQty(productId: string, e: any) {
    store.changeCartItemQty(productId, e.target.value);
    setTotalPrice();
}

function setTotalPrice() {
    totalPrice.value = store.getTotalPrice();
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
                        <input
                            class="badge badge-ghost badge-sm w-10 h-10"
                            type="number"
                            min="0"
                            :value="product.amount"
                            @change="changeCartItemQty(product.product.productId, $event)"
                        />
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
                    <th id="totalPrice" class="price">{{ totalPrice.toString() }} 원</th>
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
input {
    text-align: right;
}
</style>
