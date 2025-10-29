'use client'

import { PlusIcon } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const BankDialog = dynamic(
  () => import('./BankDialog').then(mod => mod.BankDialog),
  { ssr: false }
)

export const AddBankButton = () => {
  const t = useTranslations('banks')
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        <PlusIcon className="size-4" />
        {t('add_bank')}
      </Button>
      {open && (
        <BankDialog
          open={open}
          title={t('add_bank')}
          onOpenChange={setOpen}
          bank={null}
        />
      )}
    </>
  )
}
