import { getProducts, IProduct } from "../../data"

import { createProductOverviewViewModel } from "./view-models/createProductOverviewViewModel"
import { IProductOverviewViewModel } from "./view-models/IProductOverviewViewModel"

import { useStore } from "@/features/shared/data/ui/useStore"

export function useProductOverviewStore() {
  const { t } = useTranslation()

  return useStore<IProduct[], IProductOverviewViewModel>(
    getProducts,
    (products: IProduct[]) => createProductOverviewViewModel({ t, products })
  )
}

// Temporary example
function useTranslation() {
  return {
    t: (key: string) => key,
  }
}
