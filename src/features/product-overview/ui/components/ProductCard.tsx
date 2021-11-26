import { Link } from "react-router-dom"
import styled from "styled-components"

import type { IProductOverviewProductViewModel } from "../store/view-models/IProductOverviewProductViewModel"

interface IProductCard {
  product: IProductOverviewProductViewModel
}

export function ProductCard({ product }: IProductCard) {
  return (
    <StyledProductCard>
      <h2>{product.title}</h2>
      <span>{product.price}</span>
      <p>{product.description}</p>
      <Link to={product.link}>{product.linkTitle}</Link>
    </StyledProductCard>
  )
}

const StyledProductCard = styled.div`
  border: 1px solid black;
`
