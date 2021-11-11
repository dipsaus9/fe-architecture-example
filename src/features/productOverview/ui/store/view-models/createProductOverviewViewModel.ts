import { IProductOverviewViewModel } from "./IProductOverviewViewModel"

import { IProductOverview } from "@/features/productOverview/data/models/IProductOverview"

export function createProductOverviewViewModel(
  products: IProductOverview[]
): IProductOverviewViewModel[] {
  return products.map((product) => ({
    ...product,
    price: `${product.price.currency} ${product.price.value}`,
  }))
}
