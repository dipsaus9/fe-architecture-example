import { ProductCard } from "./components/ProductCard"
import { useProductPageStore } from "./store/useProductPageStore"

export function MainProductPage({ id }: { id: string }) {
  const { isLoading, data } = useProductPageStore(id)

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (!data) {
    return null
  }

  return <ProductCard viewModel={data} />
}
