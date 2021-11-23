import { mapProductResponse } from "./mappers/mapProductResponse"

import { fakeStoreService } from "@/features/shared/data/FakeStore"

export async function getProductById(id: string) {
  const product = await fakeStoreService.getProduct(id)

  return mapProductResponse(product)
}
