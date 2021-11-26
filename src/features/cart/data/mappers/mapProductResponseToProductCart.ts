import type { ICartProduct } from "../models/ICartProduct"

import type { ICartProductResponse } from "@/features/shared/data/services/cart-service"
import type { IProductResponse } from "@/features/shared/data/services/fake-store"

export function mapProductResponseToProductCart(
  productResponse: IProductResponse,
  product: ICartProductResponse
): ICartProduct {
  return {
    ...productResponse,
    id: String(product.id),
    quantity: product.quantity,
  }
}
