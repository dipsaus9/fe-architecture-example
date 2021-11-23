import { useParams } from "react-router-dom"

import { MainProductPage } from "@/features/productPage/ui/MainProductPage"

export function ProductPage() {
  const { id } = useParams()

  if (!id) {
    return null
  }

  return <MainProductPage id={id} />
}
