import { mapProductResponse } from "./mappers/mapProductResponse"

import { fakeStoreService } from "@/features/shared/data/services/fake-store"

export async function getProductById(id: string) {
  const product = await fakeStoreService.getProduct(id)

  return mapProductResponse(product)
}
