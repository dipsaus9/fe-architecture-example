import { createHttpClient } from "../httpClient"

import type { IAddProductToCart } from "./models/IAddProductToCart"
import { IProductResponse } from "./models/IProductResponse"

export type FakeStoreService = {
  getProducts: () => Promise<IProductResponse[]>
  getProduct: (productId: string) => Promise<IProductResponse>
  addToCart: (cartLine: IAddProductToCart) => Promise<IProductResponse>
  cancel: () => void
}

export function createFakeStoreService(
  httpClient = createHttpClient()
): FakeStoreService {
  const fakeStoreClient = httpClient("https://fakestoreapi.com")

  return {
    getProducts() {
      return fakeStoreClient.get("/products")
    },
    getProduct(id) {
      return fakeStoreClient.get(`/products/${id}`)
    },
    addToCart(product) {
      return fakeStoreClient.post("/carts", {
        body: product,
      })
    },
    cancel() {
      fakeStoreClient.cancel()
    },
  }
}
