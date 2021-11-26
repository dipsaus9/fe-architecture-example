import { AddToCart } from "./components/AddToCart"
import { useAddToCartStore } from "./store/useAddToCartStore"

interface IMainAddToCartProps {
  productId: string
}

export function MainAddToCart({ productId }: IMainAddToCartProps) {
  const viewModel = useAddToCartStore(productId)

  return <AddToCart viewModel={viewModel} />
}
