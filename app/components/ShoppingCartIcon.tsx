"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import useCartStore from "../stores/cartStore";

const ShoppingCartIcon = () => {
  const { cart, hasHydrated } = useCartStore();
  if (!hasHydrated) return null;

  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full h-4 w-4 flex justify-center items-center font-medium text-xs">
        {cart.reduce((acc, item) => item.quantity + acc, 0)}
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
