'use client'

import { Pencil } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { use, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { formatCurrency } from '@/lib/formatters'
import { IncomeFrequencyMap, IncomeTypeMap } from '@/lib/maps/IncomeMap'
import type {
  Frequency,
  Income as IncomeType
} from '@/prisma/lib/generated/prisma/client'
import { IncomeType as IncomeTypeEnum } from '@/prisma/lib/generated/prisma/enums'
import type { Locale } from '@/types/common'
import { ProfileDialog } from './ProfileDialog'

// const ProfileDialog = dynamic(
//   () => import('./ProfileDialog').then(mod => mod.ProfileDialog),
//   { ssr: false }
// )

type IncomeProps = {
  income: Promise<IncomeType | null>
  locale: Locale
}

export const Income = ({ income, locale }: IncomeProps) => {
  const incomeData = use(income)
  const [open, setOpen] = useState(false)
  const t = useTranslations('profile')

  const isContract =
    incomeData?.type === IncomeTypeEnum.CONTRACT ||
    incomeData?.type === IncomeTypeEnum.FREELANCE

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <Text className="font-semibold text-xl">{t('income.title')}</Text>
            <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
              <Pencil className="size-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!incomeData?.id ? (
            <Text className="font-medium text-destructive">
              {t('no_income')}
            </Text>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Text className="font-semibold">{t('income.title_label')}</Text>
                <Text>{incomeData.title}</Text>
              </div>
              <div className="flex items-center justify-between">
                <Text className="font-semibold">{t('income.type_label')}</Text>
                <Badge variant="outline">
                  {IncomeTypeMap(locale)[incomeData.type]}
                </Badge>
              </div>
              {isContract && (
                <div className="flex items-center justify-between">
                  <Text className="font-semibold">
                    {t('income.hourly_rate_label')}
                  </Text>
                  <Text>
                    {formatCurrency({ amount: incomeData.hourlyRate, locale })}
                  </Text>
                </div>
              )}
              {isContract && (
                <div className="flex items-center justify-between">
                  <Text className="font-semibold">
                    {t('income.hours_per_day_label')}
                  </Text>
                  <Text>{incomeData.hoursPerDay}</Text>
                </div>
              )}
              {!isContract && (
                <div className="flex items-center justify-between">
                  <Text className="font-semibold">
                    {t('income.fixed_net_label')}
                  </Text>
                  <Text>
                    {formatCurrency({ amount: incomeData.fixedNet, locale })}
                  </Text>
                </div>
              )}
              {!isContract && (
                <div className="flex items-center justify-between">
                  <Text className="font-semibold">
                    {t('income.frequency_label')}
                  </Text>
                  <Badge variant="outline">
                    {
                      IncomeFrequencyMap(locale)[
                        incomeData.frequency as Frequency
                      ]
                    }
                  </Badge>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
      <ProfileDialog
        open={open}
        title={t('title')}
        locale={locale}
        income={incomeData}
        onOpenChange={setOpen}
      />
    </>
  )
}
