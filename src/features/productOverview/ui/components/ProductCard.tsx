import { IProductViewModel } from "../store/view-models/IProductOverviewViewModel"

interface IProductCard {
  product: IProductViewModel
}

export function ProductCard({ product }: IProductCard) {
  return (
    <div style={{ border: "1px solid black" }}>
      <h2>{product.title}</h2>
      <span>{product.price}</span>
      <p>{product.description}</p>
    </div>
  )
}
