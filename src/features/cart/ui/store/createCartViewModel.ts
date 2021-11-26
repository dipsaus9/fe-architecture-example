import type { ICart } from "../../data"

import type { ICartEmptyViewModel } from "./ICartEmptyViewModel"
import type { ICartLoadingViewMode } from "./ICartLoadingViewMode"
import type { ICartViewModel } from "./ICartViewModel"

import type { Translate } from "@/features/shared/ui/hooks/useTranslation"

interface ICreateCartViewModelProps {
  t: Translate
  cart: ICart | null | undefined
  isLoading: boolean
}

export type CartViewModel =
  | ICartLoadingViewMode
  | { isLoading: false; viewModel: ICartEmptyViewModel }
  | { isLoading: false; viewModel: ICartViewModel }

export function createCartViewModel({
  t,
  cart,
  isLoading,
}: ICreateCartViewModelProps): CartViewModel {
  if (isLoading) {
    return {
      isLoading: true,
      loadingText: t("Loading..."),
    }
  }

  if (!cart || !cart.products.length) {
    return {
      isLoading: false,
      viewModel: {
        title: t("Cart is empty"),
        isEmptyCart: false,
      },
    }
  }

  return {
    isLoading: false,
    viewModel: {
      title: t("Cart title"),
      isEmptyCart: true,
      products: cart.products,
    },
  }
}
