import { mapProductsResponse } from "./mappers/mapProductsResponse"

import { fakeStoreService } from "@/features/shared/data/services/fake-store"

export async function getProducts() {
  const products = await fakeStoreService.getProducts()

  return mapProductsResponse(products)
}
