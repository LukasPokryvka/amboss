import { cacheLife } from 'next/cache'
import { Heading } from '@/components/ui/heading'

export const MonthHeader = async ({ lang }: { lang: 'en' | 'sk' }) => {
  'use cache'

  const now = new Date()
  const title = Intl.DateTimeFormat(lang, {
    year: 'numeric',
    month: 'long'
  }).format(now)

  // Calculate seconds until next month for precise revalidation
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1)
  const secondsUntilNextMonth = Math.floor(
    (nextMonth.getTime() - now.getTime()) / 1000
  )

  cacheLife({ revalidate: secondsUntilNextMonth })

  return (
    <Heading variant="h1" className="capitalize">
      {title}
    </Heading>
  )
}
