import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from '@clerk/nextjs'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Button } from '@/components/ui/button'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Amboss',
  description: 'Amboss is a platform for managing your business'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="flex justify-end items-center p-4 gap-4 h-16">
              <SignedOut>
                <SignInButton>
                  <Button variant="outline">Sign In</Button>
                </SignInButton>
                <SignUpButton>
                  <Button>Sign Up</Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout
