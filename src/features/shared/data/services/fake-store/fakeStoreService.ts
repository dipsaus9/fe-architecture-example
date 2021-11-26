import { createHttpClient } from "../../createHttpClient"

import type { IProductResponse } from "./responses/IProductResponse"

const fakeStoreClient = createHttpClient("https://fakestoreapi.com")

export const fakeStoreService = {
  getProducts() {
    return fakeStoreClient.get<IProductResponse[]>("/products")
  },
  getProduct(id: string) {
    return fakeStoreClient.get<IProductResponse>(`/products/${id}`)
  },
}
