import { mapProductResponse } from "@/features/product/data/mappers/mapProductResponse"
import { fakeStoreService } from "@/features/shared/data/FakeStore"

export function addProductToCard(id: string) {
  return fakeStoreService
    .addToCart({
      userId: 5,
      date: new Date().toISOString(),
      products: [{ productId: id, quantity: 1 }],
    })
    .then(mapProductResponse)
}
