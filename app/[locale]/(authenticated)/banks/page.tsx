import { getTranslations } from 'next-intl/server'
import { Suspense } from 'react'
import { getBanksAndAccountsCountsAndSum } from '@/app/actions/bank.action'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import { Skeleton } from '@/components/ui/skeleton'
import { AddBankButton } from './components/AddBankButton'
import { BanksAccordions } from './components/BanksAccordions'
import { BanksCount } from './components/BanksCount'
import { HeaderValue } from './components/HeaderValue'

const BanksPage = async () => {
  const t = await getTranslations('banks')
  const banks = getBanksAndAccountsCountsAndSum()

  return (
    <div className="container mx-auto flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Heading variant="h1" className="capitalize">
          {t('title')}
        </Heading>
        <AddBankButton />
      </div>
      <Card className="border-none shadow-lg @container/card">
        <CardHeader>
          <CardTitle className="text-muted-foreground">
            {t('header_title')}
          </CardTitle>
          <Suspense fallback={<Skeleton className="w-full h-12" />}>
            <HeaderValue data={banks} />
          </Suspense>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<Skeleton className="w-full h-12" />}>
            <BanksCount data={banks} />
          </Suspense>
        </CardContent>
      </Card>
      <Suspense fallback={<Skeleton className="w-full h-12" />}>
        <BanksAccordions banks={banks} />
      </Suspense>
    </div>
  )
}

export default BanksPage
