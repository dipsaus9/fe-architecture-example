import { IProductAddToCartViewModel } from "./IProductAddToCartViewModel"

import type { IProduct } from "@/features/product/data/models"

interface ICreateAddToCartViewModelProps {
  t: (key: string) => string
  productId: string
  addProductToCard: (id: string) => Promise<IProduct>
  showSuccess: boolean
  setShowSuccess: (value: boolean) => void
}

export function createAddToCartViewModel({
  t,
  productId,
  addProductToCard,
  showSuccess,
  setShowSuccess,
}: ICreateAddToCartViewModelProps): IProductAddToCartViewModel {
  return {
    title: t("title"),
    successMessage: showSuccess ? t("Success") : null,
    addToCart: () => {
      addProductToCard(productId)
        .then(() => setShowSuccess(true))
        .then(() => {
          setTimeout(() => {
            setShowSuccess(false)
          }, 1000)
        })
    },
  }
}
