import { IProductAddToCartViewModel } from "./IProductAddToCartViewModel"

import { IProduct } from "@/features/product/data/models"
import { ICancellablePromise } from "@/features/shared/data/api/ICancellablePromise"

interface ICreateAddToCartViewModelProps {
  t: (key: string) => string
  productId: string
  addProductToCard: (id: string) => ICancellablePromise<IProduct>
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
