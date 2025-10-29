'use client'

import { use } from 'react'
import { Text } from '@/components/ui/text'
import { formatCurrency } from '@/lib/formatters'

type HeaderValueProps = {
  data: Promise<{
    banksCount: number
    accountsCount: number
    accountsSum: number
  }>
}

export const HeaderValue = ({ data }: HeaderValueProps) => {
  const { accountsSum } = use(data)

  return (
    <Text className="text-2xl tracking-tight font-semibold @[250px]/card:text-3xl">
      {formatCurrency({ amount: accountsSum })}
    </Text>
  )
}
