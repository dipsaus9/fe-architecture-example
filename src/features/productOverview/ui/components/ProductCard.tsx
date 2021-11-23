import { Link } from "react-router-dom"

import { IProductOverviewProductViewModel } from "../store/view-models/IProductOverviewProductViewModel"

import { MainAddProductToCart } from "@/features/productPage/ui/features/add-to-cart/ui/MainAddProductToCart"

interface IProductCard {
  product: IProductOverviewProductViewModel
}

export function ProductCard({ product }: IProductCard) {
  return (
    <div style={{ border: "1px solid black" }}>
      <h2>{product.title}</h2>
      <span>{product.price}</span>
      <p>{product.description}</p>
      <Link to={product.link}>{product.linkTitle}</Link>
      <MainAddProductToCart id={product.id} />
    </div>
  )
}
