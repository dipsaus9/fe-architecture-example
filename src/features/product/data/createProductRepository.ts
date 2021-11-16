import { mapProductsResponse } from "./mappers/mapProductResponse"
import { IProduct, IProductResponse } from "./models/IProduct"

import { ICancellablePromise } from "@/features/shared/data/api/ICancellablePromise"
import { IService } from "@/features/shared/data/api/IService"
import { withCancelToken } from "@/features/shared/data/api/withCancelToken"

export function createProductRepository(service: IService) {
  return (id: string): ICancellablePromise<IProduct> => {
    const request = service
      .get<IProductResponse>({
        endPoint: `/products/${id}`,
      })
      .then((response) => mapProductsResponse(response))

    return withCancelToken(request, service.cancel)
  }
}
