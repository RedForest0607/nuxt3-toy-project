import type { Product } from '~/pages/product/types/Product';

export interface Cart {
    cartId: string;
    userId: string;
    cartList: { product: Product; amount: number; isChecked: boolean }[];
}
