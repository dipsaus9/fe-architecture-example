import { IProductOverviewViewModel } from "./IProductOverviewViewModel"

import { IProduct } from "@/features/productOverview/data"

interface ICreateProductOverviewViewModelProps {
  products: IProduct[]
  t: (key: string) => string
}

export function createProductOverviewViewModel({
  products,
  t,
}: ICreateProductOverviewViewModelProps): IProductOverviewViewModel {
  return {
    title: t("First test title"),
    products: products.map((product) => ({
      ...product,
      price: `${product.price.currency} ${product.price.value}`,
    })),
  }
}
