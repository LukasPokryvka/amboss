import { Currency, Language } from "@/prisma/generated/prisma-client"

export const CURRENCY_LOCALES = {
  [Currency.USD]: "en-US",
  [Currency.EUR]: "de-DE",
  [Currency.GBP]: "en-GB",
  [Currency.CAD]: "en-CA",
  [Currency.AUD]: "en-AU",
  [Currency.CZK]: "cs-CZ",
  [Currency.HUF]: "hu-HU",
  [Currency.PLN]: "pl-PL",
} as const

export const LANGUAGE_LOCALES = {
  [Language.EN]: "en-US",
  [Language.SK]: "sk-SK",
} as const
