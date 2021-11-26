import type { ICartProductViewModel } from "../store/ICartProductViewModel"

interface ICartProductProps {
  viewModel: ICartProductViewModel
}

export function CartProduct({ viewModel }: ICartProductProps) {
  return <h3>{viewModel.title}</h3>
}
