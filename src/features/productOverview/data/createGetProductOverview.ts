import { mapProductOverviewResponse } from "./mappers/mapProductOverviewResponse"
import {
  IProductOverview,
  IProductOverviewResponse,
} from "./models/IProductOverview"

import { IService } from "@/features/shared/data/api/IService"

export const createGetProductOverview =
  (
    service: IService<IProductOverviewResponse[]>
  ): (() => Promise<IProductOverview[]>) =>
  async () => {
    const response = await service.performRequest({
      endPoint: "/products",
    })

    return mapProductOverviewResponse(response)
  }
