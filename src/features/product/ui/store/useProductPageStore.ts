import { useQuery } from "react-query"

import { getProductById } from "../../data"

import { createProductViewModel } from "./view-models/createProductViewModel"

const QUERY_KEY = "product"

export function useProductPageStore(productId: string) {
  const { isLoading, data } = useQuery([QUERY_KEY, productId], () =>
    getProductById(productId)
  )

  const viewModel = data ? createProductViewModel(data) : null

  return {
    isLoading,
    data: viewModel,
  }
}
