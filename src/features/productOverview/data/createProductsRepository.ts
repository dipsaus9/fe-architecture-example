import { mapProductsResponse } from "./mappers/mapProductsResponse"
import { IProduct } from "./models/IProduct"

import { createFakeStoreService } from "@/features/shared/data/api/FakeStore"
import { withCancelToken } from "@/features/shared/data/api/withCancelToken"
import type { ICancellablePromise } from "@/features/shared/data/api/withCancelToken"

export function createProductsRepository(service = createFakeStoreService()) {
  return (): ICancellablePromise<IProduct[]> => {
    const request = service
      .getProducts()
      .then((response) => mapProductsResponse(response))

    return withCancelToken(request, service.cancel)
  }
}
