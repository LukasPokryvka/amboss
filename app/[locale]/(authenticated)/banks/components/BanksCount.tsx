'use client'

import { useTranslations } from 'next-intl'
import { use } from 'react'
import { Text } from '@/components/ui/text'

type BanksCountProps = {
  data: Promise<{
    banksCount: number
    accountsCount: number
    accountsSum: number
  }>
}

export const BanksCount = ({ data }: BanksCountProps) => {
  const { banksCount, accountsCount } = use(data)
  const t = useTranslations('banks')

  return (
    <Text variant="muted">
      {`${banksCount} ${t('banks')} | ${accountsCount} ${t('products')}`}
    </Text>
  )
}
