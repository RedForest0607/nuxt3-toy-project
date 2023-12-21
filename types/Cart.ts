import type { Product } from '~/types/Product';

export interface Cart {
    cartId: string;
    userId: string;
    cartList: { product: Product; amount: number; isChecked: boolean }[];
}
