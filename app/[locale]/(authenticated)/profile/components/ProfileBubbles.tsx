import { Suspense } from 'react'
import { getIncome } from '@/app/actions/income.action'
import { Skeleton } from '@/components/ui/skeleton'
import type { Locale } from '@/types/common'
import { Income } from './Income'
import { UserAccount } from './UserAccount'

type ProfileBubblesProps = {
  locale: Locale
}

export const ProfileBubbles = async ({ locale }: ProfileBubblesProps) => {
  const income = getIncome()

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
      <Suspense fallback={<Skeleton className="w-full h-24" />}>
        <Income income={income} locale={locale} />
      </Suspense>
      <UserAccount />
    </div>
  )
}
