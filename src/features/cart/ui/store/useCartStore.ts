import { useQuery } from "react-query"

import { getCart } from "../../data"

import { createCartViewModel } from "./createCartViewModel"

import { useTranslation } from "@/features/shared/ui/hooks/useTranslation"

const QUERY_KEY = "cart"

export function useCartStore() {
  const { t } = useTranslation()

  const { data, isLoading } = useQuery(QUERY_KEY, getCart)

  return createCartViewModel({ t, cart: data, isLoading })
}
