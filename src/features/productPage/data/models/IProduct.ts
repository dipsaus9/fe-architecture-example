export interface IProduct {
  id: number
  title: string
  price: {
    currency: string
    value: number
  }
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}
