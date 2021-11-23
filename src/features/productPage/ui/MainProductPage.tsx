import { ProductCard } from "./components/ProductCard"
import { useProductPageStore } from "./store/useProductPageStore"

export function MainProductPage({ id }: { id: string }) {
  const productPageStore = useProductPageStore(id)

  if (productPageStore.isLoading) {
    return <h1>Loading...</h1>
  }

  if (!productPageStore.viewModel) {
    return null
  }

  return <ProductCard viewModel={productPageStore.viewModel} />
}
