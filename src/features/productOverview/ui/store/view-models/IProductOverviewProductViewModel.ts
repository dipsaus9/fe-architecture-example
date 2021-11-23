export interface IProductOverviewProductViewModel {
  id: string
  link: string
  linkTitle: string
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
