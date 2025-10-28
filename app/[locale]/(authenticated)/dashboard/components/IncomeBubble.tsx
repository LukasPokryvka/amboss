'use client'

import { type Income, IncomeType } from '@prisma/client'
import { useTranslations } from 'next-intl'
import { use, useMemo } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { Link } from '@/i18n/navigation'
import { calcMonthlySalary } from '@/lib/calculateMonthlySalary'
import { formatCurrency } from '@/lib/formatters'
import { IncomeTypeMap } from '@/lib/maps/IncomeMap'
import { ROUTES } from '@/lib/routes'
import { cn } from '@/lib/utils'
import type { Locale } from '@/types/common'

type IncomeBubbleProps = {
  income: Promise<Income | null>
  locale: Locale
}

export const IncomeBubble = ({ income, locale }: IncomeBubbleProps) => {
  const incomeData = use(income)
  const t = useTranslations('dashboard.income_bubble')

  const isContract =
    incomeData?.type === IncomeType.CONTRACT ||
    incomeData?.type === IncomeType.FREELANCE

  const calculatedIncome = useMemo(() => {
    if (!incomeData || !isContract) {
      return 0
    }

    const { total } = calcMonthlySalary({
      hourlyRate: incomeData.hourlyRate ?? 0,
      hoursPerDay: incomeData.hoursPerDay ?? 0
    })

    return total
  }, [incomeData, isContract])

  return (
    <Card className="border-none shadow-lg @container/card">
      <CardHeader className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <CardTitle className="text-muted-foreground">{t('title')}</CardTitle>
          {incomeData && !isContract && (
            <Text
              className={cn(
                'text-2xl tracking-tight font-semibold @[250px]/card:text-3xl',
                !income && 'text-destructive'
              )}
            >
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'EUR'
              }).format(incomeData.fixedNet ?? 0)}
            </Text>
          )}
          {incomeData && isContract && (
            <Text
              className={cn(
                'text-2xl tracking-tight font-semibold @[250px]/card:text-3xl',
                !income && 'text-destructive'
              )}
            >
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'EUR'
              }).format(calculatedIncome)}
            </Text>
          )}
        </div>

        {incomeData && (
          <Badge variant="outline">
            {IncomeTypeMap(locale)[incomeData.type]}
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        {!incomeData && (
          <Text variant="p" className="text-sm font-medium text-destructive">
            {t('not_set_income')}
          </Text>
        )}
        {!incomeData && (
          <Text variant="muted">
            {t('not_set_income_link')}{' '}
            <Link href={ROUTES.Profile()} className="text-primary underline">
              {t('not_set_income_link_text')}
            </Link>
          </Text>
        )}
        {incomeData && isContract && (
          <Text variant="p" className="text-muted-foreground text-sm">
            {t('calculated_income_description_1')} (
            {formatCurrency({ amount: incomeData?.hourlyRate })}){' '}
            {t('calculated_income_description_2')} ({incomeData?.hoursPerDay}).
          </Text>
        )}
      </CardContent>
    </Card>
  )
}
