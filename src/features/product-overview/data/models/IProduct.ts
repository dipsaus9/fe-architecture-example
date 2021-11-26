import type { ICurrency } from "@/features/shared/data/helpers/mapCurrencyResponse"

export interface IProduct {
  id: string
  title: string
  price: ICurrency
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}
