import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { ROUTES } from '@/lib/routes'
import type { Locale } from '@/types/common'
import { IncomeBubble } from './components/IncomeBubble'
import { MonthHeader } from './components/MonthHeader'

const DashboardPage = async ({
  params
}: {
  params: Promise<{ locale: Locale }>
}) => {
  const { locale } = await params

  return (
    <>
      <MonthHeader locale={locale} />
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Suspense fallback={<Skeleton className="w-full h-24" />}>
          <DashboardContent />
        </Suspense>
      </section>
    </>
  )
}

const DashboardContent = async () => {
  const { userId } = await auth()

  if (!userId) {
    redirect(ROUTES.Landing())
  }

  return <IncomeBubble userId={userId} />
}

export default DashboardPage
