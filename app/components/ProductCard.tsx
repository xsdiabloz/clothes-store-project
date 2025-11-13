"use client";

import { FC } from "react";
import { ProductType } from "../types";

interface IProduct {
  product: ProductType;
}

const ProductCard: FC<IProduct> = ({ product }) => {
  return <div>ProductCard</div>;
};

export default ProductCard;
