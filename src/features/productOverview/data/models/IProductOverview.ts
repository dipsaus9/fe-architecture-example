export interface IProductOverviewResponse {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface IProductOverview {
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
