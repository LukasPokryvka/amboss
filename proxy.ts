import { clerkMiddleware } from '@clerk/nextjs/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { ROUTES } from './lib/routes'

const intlMiddleware = createMiddleware(routing)

const PUBLIC_ROUTES = [ROUTES.Landing(), /^\/api\/webhooks(.*)/]

export const proxy = clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl

  const response = intlMiddleware(req)

  const isPublic = PUBLIC_ROUTES.some(route =>
    route instanceof RegExp ? route.test(pathname) : route === pathname
  )

  if (isPublic) {
    return response
  }

  await auth.protect()

  return response
})

// 4️⃣ Matcher for both Clerk & next-intl
export const config = {
  matcher: [
    // Match all pathnames except for
    // - api, trpc, _next, _vercel, and files with extensions
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
    // Also match api/trpc routes (for Clerk)
    '/(api|trpc)(.*)'
  ]
}
