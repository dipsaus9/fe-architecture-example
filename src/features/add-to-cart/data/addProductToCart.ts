import { cartService } from "@/features/shared/data/services/cart-service"

export async function addProductToCart(productId: string): Promise<void> {
  await cartService.addToCart(productId)

  return undefined
}
