import { useParams } from "react-router-dom"

export function ProductPage() {
  const { id } = useParams()

  if (!id) {
    return null
  }

  return <h1>Hi {id}</h1>
}
