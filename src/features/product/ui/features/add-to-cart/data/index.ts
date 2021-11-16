import { createProductAddToCartRepository } from "./createProductAddToCartRepository"

import { createFakeStoreService } from "@/features/shared/data/api"

export const addProductToCard = createProductAddToCartRepository(
  createFakeStoreService()
)
