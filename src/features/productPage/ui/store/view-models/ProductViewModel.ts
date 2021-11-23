export interface IProductViewModel {
  id: string
  link: string
  linkText: string
  title: string
  description: string
  price: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface ILoadingProductViewModel {
  isLoading: true
  loadingText: string
}

export type ProductViewModel =
  | { viewModel: IProductViewModel; isLoading: false }
  | ILoadingProductViewModel
