export interface IProductAddToCartViewModel {
  title: string
  successMessage: string | null
  addToCartTitle: string
  addToCart: () => void
}
