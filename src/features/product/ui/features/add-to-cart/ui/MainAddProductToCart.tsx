import { AddProductToCard } from "./components/AddProductToCard"
import { useProductAddToCartStore } from "./store/useProductAddToCartStore"

export function MainAddProductToCart({ id }: { id: string }) {
  const { data } = useProductAddToCartStore(id)

  return <AddProductToCard viewModel={data} />
}
