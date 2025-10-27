import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

const isPublicRoute = createRouteMatcher(['/', '/(en|sk)', '/api/webhooks(.*)'])

export const proxy = clerkMiddleware(async (auth, req) => {
  const response = intlMiddleware(req)
  if (isPublicRoute(req)) return response
  await auth.protect()
  return response
})

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)', '/(api|trpc)(.*)']
}
