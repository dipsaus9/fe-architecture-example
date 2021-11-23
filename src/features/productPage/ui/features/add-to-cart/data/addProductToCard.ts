import { mapProductResponse } from "@/features/productPage/data/mappers/mapProductResponse"
import { fakeStoreService } from "@/features/shared/data/services/fake-store"

export function addProductToCard(id: string) {
  return fakeStoreService
    .addToCart({
      userId: 5,
      date: new Date().toISOString(),
      products: [{ productId: id, quantity: 1 }],
    })
    .then(mapProductResponse)
}
