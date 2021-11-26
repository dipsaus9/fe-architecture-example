import { createStorageClient } from "../../createLocalStorageClient"
import { fakeStoreService } from "../fake-store"

import type { ICartResponse } from "./responses/ICartResponse"

const localStorageClient = createStorageClient("cart")

export const cartService = {
  getCart() {
    return localStorageClient.get<ICartResponse>()
  },
  async addToCart(productId: string) {
    const currentCart = this.getCart()

    if (!currentCart) {
      localStorageClient.set<ICartResponse>({
        products: [{ id: productId, quantity: 1 }],
      })

      return this.getCart()
    }

    localStorageClient.set<ICartResponse>(
      await formatNewCart(currentCart, productId)
    )

    return this.getCart()
  },
}

async function formatNewCart(cart: ICartResponse, productId: string) {
  const product = await fakeStoreService.getProduct(productId)

  const hasProductInCart = cart.products.some(
    (productInCart) => productInCart.id === String(product.id)
  )

  if (hasProductInCart) {
    const newCart = { ...cart }

    const productInCartIndex = cart.products.findIndex(
      (productInCart) => productInCart.id === String(product.id)
    )

    newCart.products[productInCartIndex] = {
      ...cart.products[productInCartIndex],
      quantity: cart.products[productInCartIndex].quantity + 1,
    }

    return newCart
  }

  return {
    products: [...cart.products, { id: productId, quantity: 1 }],
  }
}
