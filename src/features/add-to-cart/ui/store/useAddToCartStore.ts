import { useState } from "react"

import { useMutation } from "react-query"

import { addProductToCart } from "../../data"

import { createAddToCartViewModel } from "./createAddToCartViewModel"

import { useTranslation } from "@/features/shared/ui/hooks/useTranslation"

export function useAddToCartStore(productId: string) {
  const { t } = useTranslation()
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const mutation = useMutation(() => addProductToCart(productId))

  return createAddToCartViewModel({
    t,
    mutation,
    showError,
    showSuccess,
    setShowError,
    setShowSuccess,
  })
}
