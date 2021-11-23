import { createProductsRepository } from "./createProductsRepository"

export * from "./models"

export const getProducts = createProductsRepository()
