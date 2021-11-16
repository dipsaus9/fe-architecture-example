import { IProduct, IProductResponse } from "../models/IProduct"

export function mapProductsResponse(response: IProductResponse): IProduct {
  return {
    ...response,
    price: {
      currency: "$",
      value: response.price,
    },
  }
}
