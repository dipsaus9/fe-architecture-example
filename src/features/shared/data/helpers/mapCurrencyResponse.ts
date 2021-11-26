export interface ICurrency {
  symbol: string
  value: number
}

export function mapCurrencyResponse(currency: number): ICurrency {
  return {
    symbol: "$",
    value: currency,
  }
}
