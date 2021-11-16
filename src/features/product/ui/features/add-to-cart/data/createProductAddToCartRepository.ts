import { IProduct } from "@/features/product/data/models"
import { ICancellablePromise } from "@/features/shared/data/api/ICancellablePromise"
import { IService } from "@/features/shared/data/api/IService"
import { withCancelToken } from "@/features/shared/data/api/withCancelToken"

export function createProductAddToCartRepository(service: IService) {
  return (id: string): ICancellablePromise<IProduct> => {
    const request = service.post<IProduct>({
      endPoint: "/carts",
      body: {
        userId: 5,
        date: new Date().toISOString(),
        products: [{ productId: id, quantity: 1 }],
      },
    })

    return withCancelToken(request, service.cancel)
  }
}
