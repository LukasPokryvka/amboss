import { getTranslations } from 'next-intl/server'
import { Suspense } from 'react'
import { Heading } from '@/components/ui/heading'
import type { Locale } from '@/types/common'
import { ProfileBubbles } from './components/ProfileBubbles'

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
