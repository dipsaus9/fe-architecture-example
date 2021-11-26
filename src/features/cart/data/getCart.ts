import { mapCartResponse } from "./mappers/mapCartResponse"

import { cartService } from "@/features/shared/data/services/cart-service"

export function getCart() {
  const cart = cartService.getCart()

  if (!cart) {
    return null
  }

  return mapCartResponse(cart)
}
