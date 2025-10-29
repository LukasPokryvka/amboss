import type { Locale } from '@/types/common'

export const formatCurrency = ({
  amount,
  locale = 'en'
}: {
  amount?: number | null
  locale?: Locale
}) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR'
  }).format(amount ?? 0)
}

export const formatPercentage = ({
  percentage,
  locale = 'en'
}: {
  percentage?: number | null
  locale?: Locale
}) => {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    maximumFractionDigits: 2
  }).format((percentage ?? 0) / 100)
}

export const formatDate = ({
  date,
  locale = 'en'
}: {
  date: Date
  locale?: Locale
}) => {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium'
  }).format(date)
}
