import type { ICart } from "../models/ICart"

import { mapCartProductResponse } from "./mapCartProductResponse"

import { ICartResponse } from "@/features/shared/data/services/cart-service/responses/ICartResponse"

export function mapCartResponse(cart: ICartResponse): ICart {
  return {
    products: cart.products.map((product) => mapCartProductResponse(product)),
  }
}
