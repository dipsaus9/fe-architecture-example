import { mapProductResponse } from "@/features/product/data/mappers/mapProductResponse"
import { IProduct } from "@/features/product/data/models"
import { createFakeStoreService } from "@/features/shared/data/api/FakeStore"
import type { ICancellablePromise } from "@/features/shared/data/api/withCancelToken"
import { withCancelToken } from "@/features/shared/data/api/withCancelToken"

export function createProductAddToCartRepository(
  service = createFakeStoreService()
) {
  return (id: string): ICancellablePromise<IProduct> => {
    const request = service
      .addToCart({
        userId: 5,
        date: new Date().toISOString(),
        products: [{ productId: id, quantity: 1 }],
      })
      .then(mapProductResponse)

    return withCancelToken(request, service.cancel)
  }
}
