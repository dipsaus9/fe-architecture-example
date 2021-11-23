import { AddProductToCart } from "./components/AddProductToCart"
import { useProductAddToCartStore } from "./store/useProductAddToCartStore"

export function MainAddProductToCart({ id }: { id: string }) {
  const addToCartStore = useProductAddToCartStore(id)

  return <AddProductToCart viewModel={addToCartStore.viewModel} />
}
