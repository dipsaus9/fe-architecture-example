import { mapProductResponse } from "./mappers/mapProductResponse"

import { fakeStoreService } from "@/features/shared/data/FakeStore"

export function getProductById(id: string) {
  return fakeStoreService
    .getProduct(id)
    .then((response) => mapProductResponse(response))
}
