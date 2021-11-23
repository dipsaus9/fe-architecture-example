import { createProductRepository } from "./createProductRepository"

export * from "./models"

export const getProductById = createProductRepository()
