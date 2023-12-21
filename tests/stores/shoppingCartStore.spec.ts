import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { createApp } from 'vue';
import { useShoppingCartStore } from '~/stores/shoppingCartStore';
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

const cartSampleData = [
    { product: productSampleInfo, amount: 3, isChecked: true },
    { product: productSampleInfo2, amount: 1, isChecked: false },
];

const app = createApp({});

describe('항목의 갯수를 불러왔을 때, 카트의 품목의 갯수가 3개라면', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    app.use(createPinia());

    const store = useShoppingCartStore();
    store.cartSampleInfo.cartList = cartSampleData;
    it('3을 반환해야 한다.', () => {
        expect(store.getNumberOfCartItem()).toBe(2);
    });
});

describe('카트 삭제 기능 확인', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    app.use(createPinia());

    const store = useShoppingCartStore();

    describe('store에 품목이 2개 있을때', () => {
        store.cartSampleInfo.cartList = cartSampleData;
        it('store에 품목이 2개 있을때 하나를 삭제하면 1개가 남아 있어야 한다.', () => {
            store.deleteItem('12356');
            expect(store.cartSampleInfo.cartList.length).toBe(1);
            const remainItem = store.cartSampleInfo.cartList.at(0);
            expect(remainItem).toBeDefined();
            expect(remainItem!.product.productId).toBe('12357');
        });
    });
});

describe('카트 체크된 상품번호 가져오기 기능 확인', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    app.use(createPinia());

    const store = useShoppingCartStore();

    describe('체크 된 아이템 들을 가져올 때, 올바른 갯수를 반환해야 한다.', () => {
        store.cartSampleInfo.cartList = cartSampleData;
        it('1을 반환해야 한다.', () => {
            expect(store.getCheckedItemIds().size).toBe(1);
        });
    });
});
