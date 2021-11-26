import { createProductOverviewProductViewModel } from "./createProductOverviewProductViewModel"
import type { ProductOverviewViewModel } from "./IProductOverviewViewModel"

import type { IProduct } from "@/features/product-overview/data"
import type { Translate } from "@/features/shared/ui/hooks/useTranslation"

interface ICreateProductOverviewViewModelProps {
  products: IProduct[] | undefined
  t: Translate
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
      productsViewModel: products.map((product) =>
        createProductOverviewProductViewModel({ product, t })
      ),
    },
  }
}
