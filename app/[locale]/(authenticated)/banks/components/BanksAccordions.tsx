'use client'

import type { Bank, BankAccount } from '@prisma/client'
import { Building2, PlusIcon, Wallet } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useLocale, useTranslations } from 'next-intl'
import { use, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Text } from '@/components/ui/text'
import { formatCurrency, formatDate, formatPercentage } from '@/lib/formatters'
import { BankAccountMap } from '@/lib/maps/BankAccountMap'

const BankAccountDialog = dynamic(
  () => import('./BankAccountDialog').then(mod => mod.BankAccountDialog),
  { ssr: false }
)

const AccordionEmptyState = dynamic(
  () => import('./AccordionEmptyState').then(mod => mod.AccordionEmptyState),
  { ssr: false }
)

type BanksAccordionsProps = {
  banks: Promise<{
    banksCount: number
    accountsCount: number
    accountsSum: number
    banks: ({
      accounts: BankAccount[]
    } & Bank)[]
  }>
}

export const BanksAccordions = ({ banks }: BanksAccordionsProps) => {
  const banksData = use(banks)
  const t = useTranslations('banks')
  const locale = useLocale()
  const [bankId, setBankId] = useState<number | null>(null)

  return (
    <>
      <Accordion type="multiple" className="w-full gap-4 flex flex-col">
        {banksData.banks.map(bank => {
          const bankTotalBalance = bank.accounts.reduce(
            (acc, account) => acc + account.balance,
            0
          )
          const areAccountsEmpty = bank.accounts.length === 0

          return (
            <AccordionItem
              key={bank.id}
              value={bank.id.toString()}
              className="bg-card border-none shadow-md rounded-xl p-4"
            >
              <AccordionTrigger className="flex items-center p-0 cursor-pointer sm:flex-row flex-col gap-2">
                <div className="size-10 rounded-full bg-accent flex items-center justify-center sm:block hidden">
                  <Building2 className="size-6" />
                </div>
                <div className="flex flex-col grow max-w-full">
                  <Text
                    variant="large"
                    className="line-clamp-1 truncate text-center sm:text-left"
                  >
                    {bank.name}
                  </Text>
                  <Text variant="muted" className="text-center sm:text-left">
                    {bank.accounts.length} {t('products')}
                  </Text>
                </div>
                <Separator className="sm:hidden block" />
                <Text className="text-xl tracking-tight font-semibold">
                  {formatCurrency({ amount: bankTotalBalance })}
                </Text>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 pt-4 pb-0">
                {areAccountsEmpty ? (
                  <AccordionEmptyState
                    handleOpenChange={() => {
                      setBankId(bank.id)
                    }}
                  />
                ) : (
                  bank.accounts.map(account => {
                    const hasInterestRate = account.interestRate !== null

                    return (
                      <Card key={account.id} className="py-4">
                        <CardContent className="flex items-center gap-4">
                          <div className="size-10 rounded-full bg-secondary sm:flex items-center justify-center shrink-0 hidden">
                            <Wallet className="size-5" />
                          </div>
                          <div className="flex flex-col grow max-w-full">
                            <div className="flex sm:items-center gap-2 sm:flex-row flex-col">
                              <Text>{account.name}</Text>
                              <Badge variant="secondary">
                                {BankAccountMap(locale)[account.type]}
                              </Badge>
                            </div>
                            {hasInterestRate && (
                              <div className="flex sm:items-center gap-0 sm:flex-row flex-col sm:gap-2 mt-1 sm:mt-0">
                                <Text className="text-green-700">
                                  {formatPercentage({
                                    percentage: account.interestRate
                                  })}{' '}
                                  {t('apy')}
                                </Text>
                                {account.endDate && (
                                  <Text className="text-muted-foreground">
                                    {t('bank_account.matures_on')}
                                    {': '}
                                    {formatDate({
                                      date: account.endDate,
                                      locale
                                    })}
                                  </Text>
                                )}
                              </div>
                            )}
                          </div>
                          <Text className="text-lg tracking-tight font-semibold">
                            {formatCurrency({ amount: account.balance })}
                          </Text>
                        </CardContent>
                      </Card>
                    )
                  })
                )}
                {!areAccountsEmpty && (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setBankId(bank.id)
                    }}
                  >
                    <PlusIcon className="size-4" />
                    {t('bank_account.create_account')}
                  </Button>
                )}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
      {bankId && (
        <BankAccountDialog
          open={Boolean(bankId)}
          title={t('bank_account.dialog.title')}
          bankId={bankId}
          onOpenChange={() => setBankId(null)}
          bankAccount={null}
        />
      )}
    </>
  )
}
