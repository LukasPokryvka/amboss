import en from '@/messages/en.json'
import sk from '@/messages/sk.json'
import { Frequency, IncomeType } from '@/prisma/lib/generated/prisma/enums'
import type { Locale } from '@/types/common'

export const IncomeTypeMap = (locale: Locale) => {
  return {
    [IncomeType.FULL_TIME]:
      locale === 'en'
        ? en.income.income_type_enum.FULL_TIME
        : sk.income.income_type_enum.FULL_TIME,
    [IncomeType.CONTRACT]:
      locale === 'en'
        ? en.income.income_type_enum.CONTRACT
        : sk.income.income_type_enum.CONTRACT,
    [IncomeType.FREELANCE]:
      locale === 'en'
        ? en.income.income_type_enum.FREELANCE
        : sk.income.income_type_enum.FREELANCE,
    [IncomeType.ONE_OFF]:
      locale === 'en'
        ? en.income.income_type_enum.ONE_OFF
        : sk.income.income_type_enum.ONE_OFF
  }
}

export const IncomeFrequencyMap = (locale: Locale) => {
  return {
    [Frequency.MONTHLY]:
      locale === 'en'
        ? en.income.income_frequency_enum.MONTHLY
        : sk.income.income_frequency_enum.MONTHLY,
    [Frequency.WEEKLY]:
      locale === 'en'
        ? en.income.income_frequency_enum.WEEKLY
        : sk.income.income_frequency_enum.WEEKLY,
    [Frequency.DAILY]:
      locale === 'en'
        ? en.income.income_frequency_enum.DAILY
        : sk.income.income_frequency_enum.DAILY,
    [Frequency.YEARLY]:
      locale === 'en'
        ? en.income.income_frequency_enum.YEARLY
        : sk.income.income_frequency_enum.YEARLY
  }
}
