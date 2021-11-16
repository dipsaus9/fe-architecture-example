export interface IProductViewModel {
  id: string
  url: string
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
