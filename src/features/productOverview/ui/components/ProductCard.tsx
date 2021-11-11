import { IProductOverviewViewModel } from "../store/view-models/IProductOverviewViewModel"

interface IProductCard {
  product: IProductOverviewViewModel
}

export function ProductCard({ product }: IProductCard) {
  return (
    <div>
      <h2>{product.title}</h2>
    </div>
  )
}
