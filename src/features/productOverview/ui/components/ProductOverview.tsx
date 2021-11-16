import { IProductOverviewViewModel } from "../store/view-models/IProductOverviewViewModel.1"

import { ProductCard } from "./ProductCard"

interface IProductOverviewProps {
  viewModel: IProductOverviewViewModel
}
export function ProductOverview({ viewModel }: IProductOverviewProps) {
  return (
    <section>
      <h2>{viewModel.title}</h2>
      {viewModel.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}
