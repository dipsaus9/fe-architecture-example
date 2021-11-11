import { getProducts, IProductOverview } from "../../data"

import { createProductOverviewViewModel } from "./view-models/createProductOverviewViewModel"
import { IProductOverviewViewModel } from "./view-models/IProductOverviewViewModel"

import { useStore } from "@/features/shared/data/ui/useStore"

export function useProductOverviewStore() {
  return useStore<IProductOverview[], IProductOverviewViewModel[]>(
    getProducts,
    createProductOverviewViewModel
  )
}
