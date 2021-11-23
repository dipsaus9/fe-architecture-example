import { useQuery } from "react-query"

import { getProductById } from "../../data"

import { createProductViewModel } from "./view-models/createProductViewModel"

import { useTranslation } from "@/features/shared/ui/hooks/useTranslation"

const QUERY_KEY = "product"

export function useProductPageStore(productId: string) {
  const { isLoading, data } = useQuery([QUERY_KEY, productId], () =>
    getProductById(productId)
  )

  const { t } = useTranslation()

  return createProductViewModel({ product: data, isLoading, t })
}
