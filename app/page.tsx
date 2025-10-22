import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton
} from '@clerk/nextjs'
import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import './globals.css'

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <Suspense>
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
            <SignUpButton>
              <Button>Sign Up</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <SignOutButton>
              <Button variant="outline">Sign Out</Button>
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
