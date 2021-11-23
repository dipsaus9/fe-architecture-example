import type { IProductOverviewProductViewModel } from "./IProductOverviewProductViewModel"

import type { IProduct } from "@/features/productOverview/data"

interface ICreateProductOverviewProductViewModelProps {
  product: IProduct
  t: (key: string) => string
}

export function createProductOverviewProductViewModel({
  product,
  t,
}: ICreateProductOverviewProductViewModelProps): IProductOverviewProductViewModel {
  return {
    ...product,
    id: String(product.id),
    link: `/product/${product.id}`,
    linkTitle: t("Naar product pagina"),
    price: `${product.price.currency} ${product.price.value}`,
  }
}
