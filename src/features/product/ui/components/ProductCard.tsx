import { Link } from "react-router-dom"

import { MainAddProductToCart } from "../features/add-to-cart/ui/MainAddProductToCart"
import { IProductViewModel } from "../store/view-models/IProductViewModel"

interface IProductCardProps {
  viewModel: IProductViewModel
}

export function ProductCard({ viewModel }: IProductCardProps) {
  return (
    <div style={{ border: "1px solid black" }}>
      <h2>{viewModel.title}</h2>
      <span>{viewModel.price}</span>
      <p>{viewModel.description}</p>
      <Link to={viewModel.url}>Naar product pagina</Link>
      <MainAddProductToCart id={viewModel.id} />
    </div>
  )
}
