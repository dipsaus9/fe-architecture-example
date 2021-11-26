import type { UseMutationResult } from "react-query"

import type { IAddToCartViewModel } from "./IAddToCartViewModel"

import type { Translate } from "@/features/shared/ui/hooks/useTranslation"

interface ICreateAddToCartViewModelProps {
  t: Translate
  showSuccess: boolean
  showError: boolean
  setShowSuccess: (state: boolean) => void
  setShowError: (state: boolean) => void
  mutation: UseMutationResult<void, unknown, void, unknown>
}

export function createAddToCartViewModel({
  t,
  mutation,
  setShowSuccess,
  showSuccess,
  setShowError,
  showError,
}: ICreateAddToCartViewModelProps): IAddToCartViewModel {
  return {
    buttonText: t("Add to cart"),
    onClick: async () => {
      try {
        setShowError(false)

        await mutation.mutateAsync()

        setShowSuccess(true)

        setTimeout(() => {
          setShowSuccess(false)
        }, 1000)
      } catch {
        setShowSuccess(false)
        setShowError(true)
      }
    },
    isLoading: mutation.isLoading,
    showSuccess,
    successMessage: t("Add to cart success"),
    errorMessage: t("Add to cart error"),
    showError,
  }
}
