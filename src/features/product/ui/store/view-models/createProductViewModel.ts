import { IProductViewModel } from "./IProductViewModel"

import { IProduct } from "@/features/productOverview/data"

export function createProductViewModel(product: IProduct): IProductViewModel {
  return {
    ...product,
    id: String(product.id),
    url: `/product/${product.id}`,
    price: `${product.price.currency} ${product.price.value}`,
  }
}
