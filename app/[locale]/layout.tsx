import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import '../globals.css'
import { enUS, skSK } from '@clerk/localizations'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { Suspense } from 'react'
import { TailwindIndicator } from '@/components/TailwindIndicator'
import { Toaster } from '@/components/ui/sonner'
import { routing } from '@/i18n/routing'

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

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

const RootLayout = async ({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) => {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <ClerkProvider localization={locale === 'sk' ? skSK : enUS}>
      <html lang={(await params).locale} suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Suspense>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <NextIntlClientProvider>{children}</NextIntlClientProvider>
              <Toaster />
              <TailwindIndicator />
            </ThemeProvider>
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout
