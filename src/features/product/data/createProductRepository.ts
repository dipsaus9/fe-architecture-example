import { mapProductResponse } from "./mappers/mapProductResponse"
import { IProduct } from "./models/IProduct"

import { createFakeStoreService } from "@/features/shared/data/api/FakeStore"
import { withCancelToken } from "@/features/shared/data/api/withCancelToken"
import type { ICancellablePromise } from "@/features/shared/data/api/withCancelToken"

export function createProductRepository(service = createFakeStoreService()) {
  return (id: string): ICancellablePromise<IProduct> => {
    const request = service
      .getProduct(id)
      .then((response) => mapProductResponse(response))

    return withCancelToken(request, service.cancel)
  }
}
