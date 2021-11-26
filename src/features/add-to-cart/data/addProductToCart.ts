import { mapProductToCart } from "./mappers/mapProductToCart"
import type { IAddToCartProduct } from "./models/IAddToCartProduct"

import { cartService } from "@/features/shared/data/services/cart-service"

export function addProductToCart(product: IAddToCartProduct) {
  const cart = mapProductToCart(product)

  return cartService.addToCart(cart)
}
