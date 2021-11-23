import type { IProduct } from "../models/IProduct"

import type { IProductResponse } from "@/features/shared/data/FakeStore"

export function mapProductsResponse(response: IProductResponse[]): IProduct[] {
  return response.map((item) => ({
    ...item,
    price: {
      currency: "$",
      value: item.price,
    },
  }))
}
