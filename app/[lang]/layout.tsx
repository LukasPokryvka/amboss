import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import '../globals.css'

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

export const generateStaticParams = async () => [{ lang: 'en' }, { lang: 'sk' }]

const RootLayout = async ({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) => (
  <ClerkProvider>
    <html lang={(await params).lang} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  </ClerkProvider>
)

export default RootLayout
