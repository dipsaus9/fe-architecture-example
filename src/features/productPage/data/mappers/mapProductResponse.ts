import type { IProduct } from "../models/IProduct"

import type { IProductResponse } from "@/features/shared/data/services/fake-store"

export function mapProductResponse(response: IProductResponse): IProduct {
  return {
    ...response,
    price: {
      currency: "$",
      value: response.price,
    },
  }
}
