import type { ICartEmptyViewModel } from "../store/ICartEmptyViewModel"
import type { ICartViewModel } from "../store/ICartViewModel"

import { CartProduct } from "./CartProduct"

interface ICartProps {
  viewModel: ICartViewModel | ICartEmptyViewModel
}

export function Cart({ viewModel }: ICartProps) {
  return (
    <>
      <h2>{viewModel.title}</h2>
      {viewModel.isEmptyCart &&
        viewModel.products.map((product) => (
          <CartProduct key={product.id} viewModel={product} />
        ))}
    </>
  )
}
