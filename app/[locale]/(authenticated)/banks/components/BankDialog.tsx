'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import type { Bank } from '@prisma/client'
import { useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { upsertBank } from '@/app/actions/bank.action'
import { FormFieldInput } from '@/components/FormFieldInput'
import { ResponsiveModal } from '@/components/ResponsiveModal'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { BankSchema, type BankSchemaType } from '@/lib/schema/Bank.schema'

type BankDialogProps = {
  open: boolean
  title: string
  bank: Bank | null
  onOpenChange: (open: boolean) => void
}

export const BankDialog = ({
  open,
  title,
  bank,
  onOpenChange
}: BankDialogProps) => {
  const t = useTranslations('banks.dialog')
  const tButton = useTranslations('button')

  const [isPending, startTransition] = useTransition()

  const form = useForm<BankSchemaType>({
    resolver: zodResolver(BankSchema),
    values: {
      name: bank?.name ?? ''
    }
  })

  const onSubmit = (data: BankSchemaType) => {
    startTransition(async () => {
      const { success } = await upsertBank({
        ...data,
        bankId: bank?.id
      })

      if (success) {
        toast.success(t('success_message'))
      } else {
        toast.error(t('error_message'))
      }
    })

    form.reset()
    onOpenChange(false)
  }

  return (
    <ResponsiveModal open={open} handleOpenChange={onOpenChange} title={title}>
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormFieldInput
            control={form.control}
            name="name"
            label={t('name')}
            disabled={isPending}
            placeholder="Fio Bank, a.s."
          />
          <Button type="submit" className="w-full mt-4" disabled={isPending}>
            {tButton('save')}
          </Button>
        </form>
      </Form>
    </ResponsiveModal>
  )
}
