import { createStorageClient } from "../../createLocalStorageClient"

import type { IAddProductToCartRequest } from "./requests/IAddProductToCartRequest"
import type { ICartResponse } from "./responses/ICartResponse"

const localStorageClient = createStorageClient("cart")

export const cartService = {
  getCart() {
    return localStorageClient.get<ICartResponse>()
  },
  addToCart(product: IAddProductToCartRequest) {
    const currentCart = this.getCart()

    const newProducts = [product]

    if (currentCart?.products) {
      newProducts.concat(currentCart.products)
    }

    return localStorageClient.set<ICartResponse>({
      ...currentCart,
      products: newProducts,
    })
  },
}
