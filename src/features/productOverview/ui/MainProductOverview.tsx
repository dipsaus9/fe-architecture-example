import { ProductOverview } from "./components/ProductOverview"
import { useProductOverviewStore } from "./store/useProductOverviewStore"

export function MainProductOverview() {
  const productOverviewStore = useProductOverviewStore()

  if (productOverviewStore.isLoading) {
    return <h1>{productOverviewStore.loadingText}</h1>
  }

  if (!productOverviewStore.viewModel) {
    return null
  }

  return <ProductOverview viewModel={productOverviewStore.viewModel} />
}
