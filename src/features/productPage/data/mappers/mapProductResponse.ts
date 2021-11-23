import type { IProduct } from "../models/IProduct"

import type { IProductResponse } from "@/features/shared/data/FakeStore"

export function mapProductResponse(response: IProductResponse): IProduct {
  return {
    ...response,
    price: {
      currency: "$",
      value: response.price,
    },
  }
}
