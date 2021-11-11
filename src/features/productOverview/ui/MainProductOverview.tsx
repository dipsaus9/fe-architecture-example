import { ProductOverview } from "./components/ProductOverview"
import { useProductOverviewStore } from "./store/useProductOverviewStore"

export function MainProductOverview() {
  const { isLoading, data } = useProductOverviewStore()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (!data) {
    return null
  }

  return <ProductOverview products={data} />
}
