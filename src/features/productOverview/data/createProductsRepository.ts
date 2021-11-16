import { mapProductsResponse } from "./mappers/mapProductsResponse"
import { IProduct, IProductResponse } from "./models/IProduct"

import { ICancellablePromise } from "@/features/shared/data/api/ICancellablePromise"
import { IService } from "@/features/shared/data/api/IService"
import { withCancelToken } from "@/features/shared/data/api/withCancelToken"

export function createProductsRepository(service: IService) {
  return (): ICancellablePromise<IProduct[]> => {
    const request = service
      .get<IProductResponse[]>({
        endPoint: "/products",
      })
      .then((response) => mapProductsResponse(response))

    return withCancelToken(request, service.cancel)
  }
}
