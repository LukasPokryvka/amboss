import { cacheLife } from 'next/cache'
import { Heading } from '@/components/ui/heading'
import type { Locale } from '@/types/common'

export const MonthHeader = async ({ locale }: { locale: Locale }) => {
  'use cache'

  const now = new Date()
  const title = Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long'
  }).format(now)

  cacheLife('hours')

  return (
    <Heading variant="h1" className="capitalize">
      {title}
    </Heading>
  )
}
