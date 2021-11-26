import type { IProductOverviewProductViewModel } from "./IProductOverviewProductViewModel"

import type { IProduct } from "@/features/product-overview/data"
import { formatCurrency } from "@/features/shared/ui/helpers/formatCurrency"
import type { Translate } from "@/features/shared/ui/hooks/useTranslation"

interface ICreateProductOverviewProductViewModelProps {
  product: IProduct
  t: Translate
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
    price: formatCurrency(product.price),
  }
}
