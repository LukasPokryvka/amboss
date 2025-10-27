import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton
} from '@clerk/nextjs'
import { getTranslations } from 'next-intl/server'
import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { ROUTES } from '@/lib/routes'

const HomePage = async () => {
  const t = await getTranslations('auth')
  const tNavigation = await getTranslations('navigation')

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <Suspense>
          <SignedOut>
            <SignInButton>
              <Button variant="outline">{t('sign_in')}</Button>
            </SignInButton>
            <SignUpButton>
              <Button>{t('sign_up')}</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Button asChild>
              <Link href={ROUTES.Dashboard()}>
                {tNavigation('menu.dashboard')}
              </Link>
            </Button>
            <SignOutButton>
              <Button variant="outline">{t('sign_out')}</Button>
            </SignOutButton>
          </SignedIn>
        </Suspense>
      </header>
      <div className="flex-1 flex items-center justify-center">
        <Button>test</Button>
      </div>
    </div>
  )
}

export default HomePage
