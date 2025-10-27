'use client'

import { useParams } from 'next/navigation'
import { useLocale } from 'next-intl'
import { startTransition, useCallback } from 'react'
import { usePathname, useRouter } from '@/i18n/navigation'
import { Button } from './ui/button'

export const LocaleToggle = () => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const locale = useLocale()

  const toggleLocale = useCallback(() => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: locale === 'sk' ? 'en' : 'sk' }
      )
    })
  }, [locale, pathname, params, router])

  return (
    <Button variant="ghost" size="icon" onClick={toggleLocale}>
      {locale === 'sk' ? '🇸🇰' : '🇺🇸'}
      <span className="sr-only">Toggle locale</span>
    </Button>
  )
}
