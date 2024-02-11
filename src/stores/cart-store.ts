import { ProductProps } from '@/utils/data/products';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import * as cartInMemory from './helpers/cart-in-memory';

export type ProductCartProps = ProductProps & {
  quantity: number;
};

type StateProps = {
  products: Array<ProductCartProps>;
  totalItems: number;
  totalPrice: number;
  hasItems: boolean;
  add: (product: ProductProps) => void;
  remove: (productId: string) => void;
  reset: () => void;
};

function getUpdatedCartData(
  products: Array<ProductCartProps>,
): Pick<StateProps, 'totalItems' | 'totalPrice' | 'hasItems'> {
  return {
    totalItems: products.reduce((total, product) => total + product.quantity, 0),
    totalPrice: products.reduce((total, product) => total + product.price * product.quantity, 0),
    hasItems: Boolean(products.length),
  };
}

export const useCartStore = create(
  persist<StateProps>(
    (set) => ({
      products: [],
      totalItems: 0,
      totalPrice: 0,
      hasItems: false,
      add: (product) => {
        return set((state) => {
          const products = cartInMemory.add(state.products, product);

          return {
            products,
            ...getUpdatedCartData(products),
          };
        });
      },
      remove: (productId) => {
        return set((state) => {
          const products = cartInMemory.remove(state.products, productId);

          return {
            products,
            ...getUpdatedCartData(products),
          };
        });
      },
      reset: () => {
        return set(() => {
          return {
            products: [],
            totalItems: 0,
            totalPrice: 0,
            hasItems: false,
          };
        });
      },
    }),
    {
      name: 'orders:cart',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
