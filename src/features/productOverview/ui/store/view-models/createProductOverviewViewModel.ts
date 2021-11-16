import { createProductOverviewProductViewModel } from "./createProductOverviewProductViewModel"
import { IProductOverviewViewModel } from "./IProductOverviewViewModel.1"

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
    products: products.map((product) =>
      createProductOverviewProductViewModel(product)
    ),
  }
}
