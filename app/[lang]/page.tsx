import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton
} from '@clerk/nextjs'
import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { getDictionary } from './dictionaries'

const HomePage = async ({
  params
}: {
  params: Promise<{ lang: 'en' | 'sk' }>
}) => {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <Suspense>
          <SignedOut>
            <SignInButton>
              <Button variant="outline">{dict.auth.sign_in}</Button>
            </SignInButton>
            <SignUpButton>
              <Button>{dict.auth.sign_up}</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <SignOutButton>
              <Button variant="outline">{dict.auth.sign_out}</Button>
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
