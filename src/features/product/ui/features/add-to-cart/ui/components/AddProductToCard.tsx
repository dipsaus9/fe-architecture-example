import { IProductAddToCartViewModel } from "../store/IProductAddToCartViewModel"

export function AddProductToCard({
  viewModel,
}: {
  viewModel: IProductAddToCartViewModel
}) {
  return (
    <>
      <button type="button" onClick={() => viewModel.addToCart()}>
        Add to cart
      </button>
      {viewModel.successMessage && <span>{viewModel.successMessage}</span>}
    </>
  )
}
