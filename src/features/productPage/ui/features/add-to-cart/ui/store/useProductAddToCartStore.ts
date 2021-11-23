import { useState } from "react"

import { addProductToCard } from "../../data"

import { createAddToCartViewModel } from "./createAddToCartViewModel"

import { useTranslation } from "@/features/shared/ui/hooks/useTranslation"

export function useProductAddToCartStore(productId: string) {
  const { t } = useTranslation()
  const [showSuccess, setShowSuccess] = useState(false)

  return createAddToCartViewModel({
    t,
    productId,
    addProductToCard,
    setShowSuccess,
    showSuccess,
  })
}
