interface IProduct {
  productId: string
  quantity: number
}

export interface IAddProductToCart {
  userId: number
  date: string
  products: IProduct[]
}
