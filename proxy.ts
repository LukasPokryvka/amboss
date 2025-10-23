// proxy.ts
import { clerkMiddleware } from '@clerk/nextjs/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { type NextRequest, NextResponse } from 'next/server'
import { ROUTES } from './lib/routes'

const locales = ['en', 'sk'] as const
const defaultLocale = 'en'
const LOCALE_RE = /^\/(en|sk)(?=\/|$)/

const getLocale = (request: NextRequest) => {
  // 1) Cookie preference
  const cookieLocale = request.cookies.get('locale')?.value
  if ((locales as readonly string[]).includes(cookieLocale ?? '')) {
    return cookieLocale as (typeof locales)[number]
  }

  // 2) Accept-Language
  const headers = Object.fromEntries(request.headers) as Record<string, string>
  const languages = new Negotiator({ headers }).languages()
  return match(languages, locales, defaultLocale)
}

const isApi = (pathname: string) =>
  pathname.startsWith('/api') || pathname.startsWith('/trpc')

const hasLocale = (pathname: string) => LOCALE_RE.test(pathname)

const stripLocale = (pathname: string) => pathname.replace(LOCALE_RE, '') || '/'

const isPublicPath = (pathname: string) => {
  const withoutLocale = stripLocale(pathname)

  // extend this if you add more public routes
  return (
    withoutLocale === ROUTES.Landing() || withoutLocale === '/api/webhooks(.*)'
  )
}

export const proxy = clerkMiddleware(async (auth, req) => {
  const { pathname, searchParams } = req.nextUrl

  if (isApi(pathname)) {
    return NextResponse.next()
  }

  // Override via query (?lang=en|sk) -> set cookie and redirect once
  const override = searchParams.get('lang')
  const validOverride = (locales as readonly string[]).includes(override ?? '')
    ? (override as (typeof locales)[number])
    : undefined

  if (!hasLocale(pathname)) {
    const locale = validOverride ?? getLocale(req)
    const url = req.nextUrl.clone()
    url.searchParams.delete('lang') // clean up
    url.pathname = `/${locale}${pathname}`
    const res = NextResponse.redirect(url)
    res.cookies.set('locale', locale, { path: '/', maxAge: 60 * 60 * 24 * 365 })
    return res
  }

  // Locale present: sync cookie to current prefix
  const currentPrefix = pathname.match(
    LOCALE_RE
  )?.[1] as (typeof locales)[number]
  const res = NextResponse.next()

  // Keep cookie aligned with URL prefix
  if (req.cookies.get('locale')?.value !== currentPrefix) {
    res.cookies.set('locale', currentPrefix, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365
    })
  }

  // Allow public routes
  if (isPublicPath(pathname)) {
    return res
  }

  // Protect everything else
  await auth.protect()
  return res
})

export const config = {
  matcher: [
    // Skip Next internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Run for API/TRPC (we early-return above)
    '/(api|trpc)(.*)'
  ]
}
