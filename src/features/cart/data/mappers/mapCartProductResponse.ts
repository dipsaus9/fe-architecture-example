import type { ICartProduct } from "../models/ICartProduct"

import type { ICartProductResponse } from "@/features/shared/data/services/cart-service"

export function mapCartProductResponse(
  product: ICartProductResponse
): ICartProduct {
  return {
    ...product,
  }
}
