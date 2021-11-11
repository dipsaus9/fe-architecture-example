import { createGetProducts } from "./createGetProducts"

import { createFakeStoreService } from "@/features/shared/data/api"

export * from "./models"

export const getProducts = createGetProducts(createFakeStoreService())
