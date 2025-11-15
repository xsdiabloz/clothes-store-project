import z from "zod";

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ShoppingCartTypes = {
  id: number;
  title: string;
};

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartStoreType = {
  cart: CartItemType[];
  hasHydrated: boolean | undefined;
};

export type CartStoreActionsType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;
};
