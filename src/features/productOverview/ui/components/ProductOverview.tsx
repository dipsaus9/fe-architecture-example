import { IProductOverviewViewModel } from "../store/view-models/IProductOverviewViewModel"

import { ProductCard } from "./ProductCard"

interface IProductOverviewProps {
  products: IProductOverviewViewModel[]
}
export function ProductOverview({ products }: IProductOverviewProps) {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  )
}
