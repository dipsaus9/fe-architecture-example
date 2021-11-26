import { Cart } from "./components/Cart"
import { useCartStore } from "./store/useCartStore"

export function MainCart() {
  const cartStore = useCartStore()

  if (cartStore.isLoading) {
    return <h2>{cartStore.loadingText}</h2>
  }

  return <Cart viewModel={cartStore.viewModel} />
}
