import { mapProductsResponse } from "./mappers/mapProductsResponse"

import { fakeStoreService } from "@/features/shared/data/FakeStore"

export function getProducts() {
  return fakeStoreService
    .getProducts()
    .then((response) => mapProductsResponse(response))
}
