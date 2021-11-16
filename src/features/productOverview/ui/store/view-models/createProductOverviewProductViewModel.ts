import { IProductOverviewProductViewModel } from "./IProductOverviewProductViewModel"

import { IProduct } from "@/features/productOverview/data"

export function createProductOverviewProductViewModel(
  product: IProduct
): IProductOverviewProductViewModel {
  return {
    ...product,
    url: `/product/${product.id}`,
    price: `${product.price.currency} ${product.price.value}`,
  }
}
