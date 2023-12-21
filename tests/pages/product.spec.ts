// import { createPinia, setActivePinia } from 'pinia';
// import { beforeEach, describe, expect, it } from 'vitest';
// import { createApp } from 'vue';
// import { useShoppingCartStore } from '~/stores/shoppingCartStore';
// import { fetch } from "ofetch";
//
// const app = createApp({});
//
// describe('상품의 정보에 대해서 조회하는 페이지 접근 시', () => {
//     beforeEach(() => {
//         setActivePinia(createPinia());
//     });
//     app.use(createPinia());
//
//     const store = useShoppingCartStore();
//
//     it('상품 정보를 prisma를 통해서 db에서 불러 온다면 올바른 상품 정보가 불러와져야 한다', async () => {
//         const { data } = await fetch('/api/product/12346', {
//             method: 'get',
//         });
//
//         expect({ data }).toBe('샘플상품');
//     });
// });
