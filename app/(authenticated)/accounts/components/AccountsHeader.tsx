"use client"

import { use } from "react"
import { Text } from "@/components/ui/text"
import { formatCurrency } from "@/lib/formatters"
import type { Result } from "@/lib/tryCatch"
import { HeaderCard } from "./HeaderCard"
import type { TotalNetWorth } from "./types"

type AccountsHeaderProps = {
  totalNetWorth: Promise<Result<TotalNetWorth | null>>
}

export const AccountsHeader = ({ totalNetWorth }: AccountsHeaderProps) => {
  const { data } = use(totalNetWorth)

  const numberOfActiveAccounts = data?.totalBankAccountsCount || 0

  return (
    <section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      <HeaderCard title='Total Net Worth'>
        <Text variant='largeText' className='font-bold text-xl'>
          {formatCurrency({ amount: data?.netWorth || 0, currency: "EUR" })}
        </Text>
        <Text variant='mutedText'>Across all accounts</Text>
      </HeaderCard>
      <HeaderCard title='Active Accounts'>
        <Text variant='largeText' className='font-bold text-xl'>
          {numberOfActiveAccounts}
        </Text>
        {numberOfActiveAccounts > 0 && (
          <Text variant='mutedText'>Connected and tracking</Text>
        )}
      </HeaderCard>
      <HeaderCard title='Credit Utilization'>
        <Text variant='largeText' className='font-bold text-xl'>
          12.5 %
        </Text>
        <Text variant='mutedText'>Healthy credit usage</Text>
      </HeaderCard>
    </section>
  )
}
