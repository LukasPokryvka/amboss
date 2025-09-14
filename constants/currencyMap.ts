import { Currency } from "@prisma/client"

export const CURRENCY_MAP = {
  [Currency.USD]: "$",
  [Currency.EUR]: "€",
  [Currency.GBP]: "£",
  [Currency.CAD]: "$",
  [Currency.AUD]: "$",
  [Currency.CZK]: "Kč",
  [Currency.HUF]: "Ft",
  [Currency.PLN]: "zł",
}
