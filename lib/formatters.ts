import type { Currency } from "@prisma/client"
import { CURRENCY_LOCALES } from "@/constants/locales"

export const getCurrencyFormatter = (currency: Currency) => {
  const locale = CURRENCY_LOCALES[currency] || "en-US"

  return Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  })
}

export const formatCurrency = ({
  amount,
  currency,
}: {
  amount: number
  currency: Currency
}) => {
  const formatter = getCurrencyFormatter(currency)
  return formatter.format(amount)
}
