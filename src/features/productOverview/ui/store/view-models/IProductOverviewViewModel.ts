export interface IProductOverviewViewModel {
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
