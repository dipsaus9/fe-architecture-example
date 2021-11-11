import {
  IProductOverview,
  IProductOverviewResponse,
} from "../models/IProductOverview"

export function mapProductOverviewResponse(
  response: IProductOverviewResponse[]
): IProductOverview[] {
  return response.map((item) => ({
    ...item,
    price: {
      currency: "$",
      value: item.price,
    },
  }))
}
