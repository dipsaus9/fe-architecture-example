import { createProductRepository } from "./createProductRepository"

import { createFakeStoreService } from "@/features/shared/data/api"

export * from "./models"

export const getProductById = createProductRepository(createFakeStoreService())
