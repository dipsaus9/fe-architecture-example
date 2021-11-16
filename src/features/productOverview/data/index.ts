import { createProductsRepository } from "./createProductsRepository"

import { createFakeStoreService } from "@/features/shared/data/api"

export * from "./models"

export const getProducts = createProductsRepository(createFakeStoreService())
