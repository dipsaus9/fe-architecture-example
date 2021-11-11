import { IProduct, IProductResponse } from "../models/IProduct"

export function mapProductsResponse(response: IProductResponse[]): IProduct[] {
  return response.map((item) => ({
    ...item,
    price: {
      currency: "$",
      value: item.price,
    },
  }))
}
