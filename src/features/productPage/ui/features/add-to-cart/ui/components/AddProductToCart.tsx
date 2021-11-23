import type { IProductAddToCartViewModel } from "../store/IProductAddToCartViewModel"

interface IAddProductToCardProps {
  viewModel: IProductAddToCartViewModel
}

export function AddProductToCart({ viewModel }: IAddProductToCardProps) {
  return (
    <>
      <button type="button" onClick={() => viewModel.addToCart()}>
        {viewModel.addToCartTitle}
      </button>
      {viewModel.successMessage && <span>{viewModel.successMessage}</span>}
    </>
  )
}
