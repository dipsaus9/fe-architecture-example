import { useParams } from "react-router-dom"

import { MainProductPage } from "@/features/product/ui/MainProductPage"

export function ProductPage() {
  const { id } = useParams()

  if (!id) {
    return null
  }

  return <MainProductPage id={id} />
}
