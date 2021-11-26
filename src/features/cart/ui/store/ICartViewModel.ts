import type { ICartProductViewModel } from "./ICartProductViewModel"

export interface ICartViewModel {
  title: string
  isEmptyCart: true
  products: ICartProductViewModel[]
}
