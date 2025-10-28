import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'
import { getIncome } from '@/app/actions/income.action'
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
  const { userId } = await auth()

  if (!userId) {
    redirect(ROUTES.Landing())
  }

  const income = getIncome()

  return (
    <>
      <MonthHeader locale={locale} />
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Suspense fallback={<Skeleton className="w-full h-24" />}>
          <IncomeBubble income={income} locale={locale} />
        </Suspense>
      </section>
    </>
  )
}

export default DashboardPage
