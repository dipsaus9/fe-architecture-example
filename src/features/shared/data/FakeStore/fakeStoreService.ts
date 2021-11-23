import { createHttpClient } from "../api/httpClient"

import type { IAddProductToCart } from "./models/IAddProductToCart"
import type { IProductResponse } from "./models/IProductResponse"

const fakeStoreClient = createHttpClient("https://fakestoreapi.com")

export const fakeStoreService = {
  getProducts() {
    return fakeStoreClient.get<IProductResponse[]>("/products")
  },
  getProduct(id: string) {
    return fakeStoreClient.get<IProductResponse>(`/products/${id}`)
  },
  addToCart(product: IAddProductToCart) {
    return fakeStoreClient.post<IProductResponse>("/carts", {
      body: product,
    })
  },
}
