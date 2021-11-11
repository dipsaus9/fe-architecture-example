export interface IProductViewModel {
  id: number
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

export interface IProductOverviewViewModel {
  title: string
  products: IProductViewModel[]
}
