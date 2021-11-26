export interface IAddToCartViewModel {
  buttonText: string
  onClick: () => void
  showSuccess: boolean
  showError: boolean
  isLoading: boolean
  successMessage: string
  errorMessage: string
}
