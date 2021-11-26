import { IProductOverviewProductViewModel } from "./IProductOverviewProductViewModel"

export interface ILoadingProductOverviewViewModel {
  isLoading: true
  loadingText: string
  title: string
}

export interface IProductOverviewViewModel {
  title: string
  productsViewModel: IProductOverviewProductViewModel[]
}

export type ProductOverviewViewModel =
  | {
      isLoading: false
      viewModel: IProductOverviewViewModel
    }
  | ILoadingProductOverviewViewModel
