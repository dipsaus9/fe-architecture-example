import type { IAddToCartViewModel } from "../store/IAddToCartViewModel"

interface IAddToCartProps {
  viewModel: IAddToCartViewModel
}

export function AddToCart({ viewModel }: IAddToCartProps) {
  return (
    <>
      <button
        type="button"
        onClick={viewModel.onClick}
        disabled={viewModel.isLoading}
      >
        {viewModel.buttonText}
      </button>
      {viewModel.showError && <span>{viewModel.errorMessage}</span>}
      {viewModel.showSuccess && <span>{viewModel.successMessage}</span>}
    </>
  )
}
