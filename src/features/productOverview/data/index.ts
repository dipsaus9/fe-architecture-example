import { createGetProductOverview } from "./createGetProductOverview"

import { createFakeStoreService } from "@/features/shared/data/api"

export const getProducts = createGetProductOverview(createFakeStoreService())

export * from "./models"
