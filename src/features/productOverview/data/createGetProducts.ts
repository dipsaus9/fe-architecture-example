import { mapProductsResponse } from "./mappers/mapProductsResponse"
import { IProduct, IProductResponse } from "./models/IProduct"

import { IService } from "@/features/shared/data/api/IService"

export const createGetProducts =
  (service: IService<IProductResponse[]>): (() => Promise<IProduct[]>) =>
  async () => {
    const response = await service({
      endPoint: "/products",
    })

    return mapProductsResponse(response)
  }
