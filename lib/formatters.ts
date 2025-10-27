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
