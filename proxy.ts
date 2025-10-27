import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)
const isPublicRoute = createRouteMatcher(['/', '/(en|sk)', '/api/webhooks(.*)'])

export const proxy = clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl
  const isApi = pathname.startsWith('/api') || pathname.startsWith('/trpc')

  if (isPublicRoute(req)) {
    return isApi ? NextResponse.next() : intlMiddleware(req)
  }

  await auth.protect()
  return isApi ? NextResponse.next() : intlMiddleware(req)
})

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)', '/(api|trpc)(.*)']
}
