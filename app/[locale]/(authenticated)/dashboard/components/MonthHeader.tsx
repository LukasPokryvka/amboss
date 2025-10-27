import { Heading } from '@/components/ui/heading'
import type { Locale } from '@/types/common'

export const MonthHeader = async ({ locale }: { locale: Locale }) => {
  const now = new Date()
  const title = Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long'
  }).format(now)

  return (
    <Heading variant="h1" className="capitalize">
      {title}
    </Heading>
  )
}
