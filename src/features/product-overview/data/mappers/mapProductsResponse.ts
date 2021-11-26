import type { IProduct } from "../models/IProduct"

import { mapCurrencyResponse } from "@/features/shared/data/helpers/mapCurrencyResponse"
import type { IProductResponse } from "@/features/shared/data/services/fake-store"

export function mapProductsResponse(response: IProductResponse[]): IProduct[] {
  return response.map((item) => ({
    ...item,
    id: String(item.id),
    price: mapCurrencyResponse(item.price),
  }))
}
