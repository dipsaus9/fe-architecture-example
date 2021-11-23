import type { ProductViewModel } from "./ProductViewModel"

import type { IProduct } from "@/features/productPage/data/models"

interface ICreateProductViewModelProps {
  product: IProduct | undefined
  t: (key: string) => string
  isLoading: boolean
}

export function createProductViewModel({
  product,
  isLoading,
  t,
}: ICreateProductViewModelProps): ProductViewModel {
  if (isLoading || !product) {
    return {
      isLoading: true,
      loadingText: t("Loading..."),
    }
  }

  return {
    isLoading: false,
    viewModel: {
      ...product,
      id: String(product.id),
      link: `/product/${product.id}`,
      linkText: t("Naar product pagina"),
      price: `${product.price.currency} ${product.price.value}`,
    },
  }
}
