import { mapProductResponseToProductCart } from "./mappers/mapProductResponseToProductCart"
import type { ICart } from "./models/ICart"

import { cartService } from "@/features/shared/data/services/cart-service"
import { fakeStoreService } from "@/features/shared/data/services/fake-store"

export async function getCart(): Promise<ICart | null> {
  const cart = cartService.getCart()

  if (!cart) {
    return null
  }

  const products = await Promise.all(
    cart.products.map((product) =>
      fakeStoreService
        .getProduct(product.id)
        .then((productResponse) =>
          mapProductResponseToProductCart(productResponse, product)
        )
    )
  )

  return {
    products,
  }
}
