import { ICurrency } from "../../data/helpers/mapCurrencyResponse"

export function formatCurrency(currency: ICurrency): string {
  return `${currency.symbol} ${currency.value}`
}
