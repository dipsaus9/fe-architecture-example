import { IAddToCartProduct } from "../models/IAddToCartProduct"

import { IAddProductToCartRequest } from "@/features/shared/data/services/cart-service"

export function mapProductToCart(
  product: IAddToCartProduct
): IAddProductToCartRequest {
  return {
    ...product,
    quantity: 1,
  }
}
