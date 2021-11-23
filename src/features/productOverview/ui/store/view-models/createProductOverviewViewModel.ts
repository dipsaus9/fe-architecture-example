import { createProductOverviewProductViewModel } from "./createProductOverviewProductViewModel"
import type { ProductOverviewViewModel } from "./IProductOverviewViewModel"

import type { IProduct } from "@/features/productOverview/data"

interface ICreateProductOverviewViewModelProps {
  products: IProduct[] | undefined
  t: (key: string) => string
  isLoading: boolean
}

export function createProductOverviewViewModel({
  products,
  t,
  isLoading,
}: ICreateProductOverviewViewModelProps): ProductOverviewViewModel {
  if (!products || isLoading) {
    return {
      isLoading: true,
      title: t("First test title"),
      loadingText: t("Loading..."),
    }
  }

  return {
    isLoading: false,
    viewModel: {
      title: t("First test title"),
      products: products.map((product) =>
        createProductOverviewProductViewModel({ product, t })
      ),
    },
  }
}
