import { mapProductsResponse } from "./mappers/mapProductsResponse"

import { fakeStoreService } from "@/features/shared/data/FakeStore"

export async function getProducts() {
  const products = await fakeStoreService.getProducts()

  return mapProductsResponse(products)
}
