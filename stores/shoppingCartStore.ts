import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { type Cart } from '~/types/Cart';
import { type Product } from '~/types/Product';

const productSampleInfo: Product = {
    productId: '12356',
    productName: '샘플상품',
    productPrice: 13000,
    stock: 3,
};
const productSampleInfo2: Product = {
    productId: '12357',
    productName: '샘플상품2',
    productPrice: 11000,
    stock: 5,
};

export const useShoppingCartStore = defineStore('shopping-cart', () => {
    const cartSampleInfo: Cart = reactive({
        cartId: '12345',
        userId: '67890',
        cartList: reactive([
            { product: productSampleInfo, amount: 3, isChecked: true },
            { product: productSampleInfo2, amount: 1, isChecked: false },
        ]),
    });

    function modifyIsChecked(productId: string) {
        const foundItem = cartSampleInfo.cartList.find(product => product.product.productId === productId);
        if (foundItem !== undefined) {
            foundItem.isChecked = !foundItem.isChecked;
        }
    }

    function getTotalPrice() {
        let totalPrice = 0;

        for (const cartItem of cartSampleInfo.cartList) {
            totalPrice = totalPrice + (cartItem.isChecked ? cartItem.amount * cartItem.product.productPrice : 0);
        }

        return totalPrice;
    }

    function deleteItem(productId: string) {
        cartSampleInfo.cartList = cartSampleInfo.cartList.filter(item => item.product.productId !== productId);
    }

    function getCheckedItemIds() {
        const checkedItem: Set<string> = new Set<string>();

        for (const cartItem of cartSampleInfo.cartList) {
            if (cartItem.isChecked) {
                checkedItem.add(cartItem.product.productId);
            }
        }

        return checkedItem;
    }

    function getNumberOfCartItem(): number {
        return cartSampleInfo.cartList.length;
    }

    function changeCartItemQty(productId: string, qty: number) {
        const cartItem = cartSampleInfo.cartList.find(item => item.product.productId === productId);
        if (cartItem) {
            cartItem.amount = qty;
        }
    }

    async function addProduct(productId: string, qty: number) {
        const cartItem = cartSampleInfo.cartList.find(item => item.product.productId === productId);
        if (cartItem) {
            cartItem.amount = cartItem.amount + qty;
        } else if (!cartItem) {
            const product = await useFetch(() => `/api/product/${productId}`, {
                method: 'get',
            });
            if (product.data.value != null) {
                cartSampleInfo.cartList.push({ product: toRaw(product.data.value), amount: qty, isChecked: true });
            }
        }
    }
    return { cartSampleInfo, modifyIsChecked, getNumberOfCartItem, deleteItem, getTotalPrice, getCheckedItemIds, changeCartItemQty, addProduct };
});
