import { create } from "zustand";

export interface CartItem {
  id: number;
  title: string;
  slug: string;
  image: string;

  price: number;
  quantity: number;
  weight: number;
}

interface CartStore {
  items: CartItem[];

  addItem: (item: CartItem) => void;
  removeItem: (id: number, weight: number) => void;

  increaseQuantity: (id: number, weight: number) => void;
  decreaseQuantity: (id: number, weight: number) => void;

  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find(
        (i) => i.id === item.id && i.weight === item.weight
      );

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id && i.weight === item.weight
              ? {
                  ...i,
                  quantity: i.quantity + item.quantity,
                }
              : i
          ),
        };
      }

      return {
        items: [...state.items, item],
      };
    }),

  removeItem: (id, weight) =>
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.id === id && item.weight === weight)
      ),
    })),

  increaseQuantity: (id, weight) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.weight === weight
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      ),
    })),

    decreaseQuantity: (id, weight) =>
      set((state) => ({
        items: state.items.map((item) =>
          item.id === id &&
          item.weight === weight &&
          item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        ),
      })),

  clearCart: () =>
    set({
      items: [],
    }),
}));