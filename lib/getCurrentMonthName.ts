import type { Language } from "@prisma/client"
import { LANGUAGE_LOCALES } from "@/constants/locales"

export const getCurrentMonthName = (language: Language) => {
  const locale = LANGUAGE_LOCALES[language]
  const now = new Date()
  return new Intl.DateTimeFormat(locale, { month: "long" }).format(now)
}
