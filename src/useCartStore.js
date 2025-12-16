import { create } from "zustand";
import { uid } from "react-uid";

export const useCartStore = create((set) => ({
  cart: {},
  products: [],

  fetchCart: async () => {
    const response = await fetch("https://fakestoreapi.com/carts/1");
    const data = await response.json();
    set((state) => ({
      cart: {
        ...state.cart,
        products: data.products.map((item) => ({
          ...item,
          isCompleted: false,
        })),
      },
    }));
  },

  fetchAllProducts: async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    set({ products: data });
  },

  addToCart: (productId) =>
    set((state) => ({
      cart: {
        ...state.cart,
        products: [
          ...(state.cart.products || []),
          { productId: productId, quantity: 1, isCompleted: false },
        ],
      },
    })),

  deleteItem: (itemId) =>
    set((state) => ({
      cart: {
        ...state.cart,
        products: state.cart.products.filter((item) => item.productId !== itemId),
      }
    })),

  deleteAllItems: () =>
    set((state) => ({
       cart: {
        ...state.cart,
        products: [],
      }
    })),

  completeCartItem: (itemId) =>
    set((state) => ({
      ...state.cart,
      cart: {
        products: state.cart.products.map((item) => {
          if (item.productId === itemId) {
            return {
              ...item,
              isCompleted: true,
            };
          }
          return item;
        }),
      },
    })),
}));
