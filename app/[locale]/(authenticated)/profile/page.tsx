import { getTranslations } from 'next-intl/server'
import { Suspense } from 'react'
import { Heading } from '@/components/ui/heading'
import { routing } from '@/i18n/routing'
import type { Locale } from '@/types/common'
import { ProfileBubbles } from './components/ProfileBubbles'

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

const ProfilePage = async ({
  params
}: {
  params: Promise<{ locale: Locale }>
}) => {
  const { locale } = await params
  const t = await getTranslations('profile')

  return (
    <>
      <Heading variant="h1">{t('title')}</Heading>
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileBubbles locale={locale} />
      </Suspense>
    </>
  )
}

export default ProfilePage
