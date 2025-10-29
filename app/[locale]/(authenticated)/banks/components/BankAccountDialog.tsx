'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { type BankAccount, BankAccountType, Currency } from '@prisma/client'
import { useLocale, useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { upsertBankAccount } from '@/app/actions/bankAccount.action'
import { FormFieldCalendar } from '@/components/FormFieldCalendar'
import { FormFieldInput } from '@/components/FormFieldInput'
import { FormFieldSelect } from '@/components/FormFieldSelect'
import { ResponsiveModal } from '@/components/ReponsiveModal'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { BankAccountMap } from '@/lib/maps/BankAccountMap'
import {
  BankAccountSchema,
  type BankAccountSchemaType
} from '@/lib/schema/BankAccount.schema'

type BankAccountDialogProps = {
  open: boolean
  title: string
  bankAccount: BankAccount | null
  bankId: number
  onOpenChange: (bankId: number | null) => void
}

export const BankAccountDialog = ({
  open,
  title,
  bankAccount,
  bankId,
  onOpenChange
}: BankAccountDialogProps) => {
  const t = useTranslations('banks.bank_account.dialog')
  const tButton = useTranslations('button')
  const locale = useLocale()

  const [isPending, startTransition] = useTransition()

  const form = useForm<BankAccountSchemaType>({
    resolver: zodResolver(BankAccountSchema),
    values: {
      name: bankAccount?.name ?? '',
      bankId: bankAccount?.bankId ?? bankId,
      type: bankAccount?.type ?? BankAccountType.CHECKING,
      currency: bankAccount?.currency ?? Currency.EUR,
      balance: bankAccount?.balance ?? 0,
      interestRate: bankAccount?.interestRate ?? null,
      startDate: bankAccount?.startDate ?? null,
      endDate: bankAccount?.endDate ?? null
    }
  })

  const isChecking = form.watch('type') === BankAccountType.CHECKING
  const isDateNeeded =
    form.watch('type') === BankAccountType.TERM_DEPOSIT ||
    form.watch('type') === BankAccountType.BOND

  const onSubmit = (data: BankAccountSchemaType) => {
    startTransition(async () => {
      const { success } = await upsertBankAccount({
        ...data,
        endDate: isDateNeeded ? data.endDate : null,
        startDate: isDateNeeded ? data.startDate : null,
        interestRate: !isChecking ? data.interestRate : null,
        bankAccountId: bankAccount?.id
      })

      if (success) {
        toast.success(t('success_message'))
      } else {
        toast.error(t('error_message'))
      }
    })

    form.reset()
    onOpenChange(null)
  }

  return (
    <ResponsiveModal
      open={open}
      handleOpenChange={open => onOpenChange(open ? bankId : null)}
      title={title}
    >
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
          <FormFieldSelect
            control={form.control}
            name="type"
            label={t('type')}
            disabled={isPending}
            options={Object.entries(BankAccountMap(locale)).map(
              ([key, value]) => ({
                value: key,
                label: value
              })
            )}
          />
          <FormFieldSelect
            control={form.control}
            name="currency"
            label={t('currency')}
            disabled={isPending}
            options={Object.entries(Currency).map(([key, value]) => ({
              value: key,
              label: value
            }))}
          />
          <FormFieldInput
            control={form.control}
            name="balance"
            label={t('balance')}
            disabled={isPending}
            type="number"
            step="0.01"
          />
          {!isChecking && (
            <FormFieldInput
              control={form.control}
              name="interestRate"
              label={t('interestRate')}
              disabled={isPending}
              type="number"
              step="0.01"
            />
          )}
          {isDateNeeded && (
            <>
              <FormFieldCalendar
                control={form.control}
                name="startDate"
                label={t('startDate')}
                disabled={isPending}
              />
              <FormFieldCalendar
                control={form.control}
                name="endDate"
                label={t('endDate')}
                disabled={isPending}
              />
            </>
          )}
          <Button type="submit" className="w-full mt-4" disabled={isPending}>
            {tButton('save')}
          </Button>
        </form>
      </Form>
    </ResponsiveModal>
  )
}
