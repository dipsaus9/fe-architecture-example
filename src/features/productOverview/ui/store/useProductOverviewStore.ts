import { useQuery } from "react-query"

import { getProducts } from "../../data"

import { createProductOverviewViewModel } from "./view-models/createProductOverviewViewModel"

import { useTranslation } from "@/features/shared/ui/hooks/useTranslation"

const QUERY_KEY = "products"

export function useProductOverviewStore() {
  const { t } = useTranslation()

  const { isLoading, data } = useQuery(QUERY_KEY, getProducts)

  return createProductOverviewViewModel({
    products: data,
    isLoading,
    t,
  })
}
