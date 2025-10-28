'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import type { Income } from '@prisma/client'
import { Frequency, IncomeType } from '@prisma/client'
import { useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { upsertIncome } from '@/app/actions/income.action'
import { FormFieldInput } from '@/components/FormFieldInput'
import { FormFieldSelect } from '@/components/FormFieldSelect'
import { ResponsiveModal } from '@/components/ReponsiveModal'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { IncomeFrequencyMap, IncomeTypeMap } from '@/lib/maps/IncomeMap'
import { IncomeSchema, type IncomeSchemaType } from '@/lib/schema/IncomeSchema'
import type { Locale } from '@/types/common'

type ProfileDialogProps = {
  open: boolean
  title: string
  income: Income | null
  locale: Locale
  onOpenChange: (open: boolean) => void
}

export const ProfileDialog = ({
  open,
  title,
  income,
  locale,
  onOpenChange
}: ProfileDialogProps) => {
  const t = useTranslations('income')
  const tButton = useTranslations('button')

  const [isPending, startTransition] = useTransition()

  const form = useForm<IncomeSchemaType>({
    resolver: zodResolver(IncomeSchema),
    values: {
      title: income?.title ?? '',
      type: income?.type ?? IncomeType.FULL_TIME,
      fixedNet: income?.fixedNet ?? 0,
      hourlyRate: income?.hourlyRate ?? 0,
      frequency: income?.frequency ?? Frequency.MONTHLY,
      hoursPerDay: income?.hoursPerDay ?? 8
    }
  })

  const incomeType = form.watch('type')
  const isFullTime =
    incomeType === IncomeType.FULL_TIME || incomeType === IncomeType.ONE_OFF
  const isContract =
    incomeType === IncomeType.CONTRACT || incomeType === IncomeType.FREELANCE

  const onSubmit = (data: IncomeSchemaType) => {
    startTransition(async () => {
      const { success } = await upsertIncome({
        ...data,
        incomeId: income?.id,
        fixedNet: isFullTime ? data.fixedNet : null,
        hourlyRate: isContract ? data.hourlyRate : null,
        hoursPerDay: isContract ? data.hoursPerDay : null,
        frequency: isFullTime ? data.frequency : null
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
          className="flex flex-col gap-4 p-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormFieldInput
            control={form.control}
            name="title"
            label={t('income_title')}
            disabled={isPending}
          />
          <FormFieldSelect
            isRequired
            control={form.control}
            name="type"
            label={t('income_type')}
            options={Object.entries(IncomeTypeMap(locale)).map(
              ([key, value]) => ({
                value: key,
                label: value
              })
            )}
            disabled={isPending}
          />
          {isFullTime && (
            <FormFieldInput
              isRequired
              control={form.control}
              name="fixedNet"
              label={t('income_fixed_net')}
              type="number"
              step="0.01"
              disabled={isPending}
            />
          )}
          {isContract && (
            <FormFieldInput
              isRequired
              control={form.control}
              name="hourlyRate"
              label={t('income_hourly_rate')}
              type="number"
              step="0.01"
              disabled={isPending}
            />
          )}
          {isContract && (
            <FormFieldInput
              isRequired
              control={form.control}
              name="hoursPerDay"
              label={t('income_hours_per_day')}
              type="number"
              step="1"
              max={24}
              min={1}
              disabled={isPending}
            />
          )}
          {isFullTime && (
            <FormFieldSelect
              isRequired
              control={form.control}
              name="frequency"
              label={t('income_frequency')}
              options={Object.entries(IncomeFrequencyMap(locale)).map(
                ([key, value]) => ({
                  value: key,
                  label: value
                })
              )}
              disabled={isPending}
            />
          )}
          <Button type="submit" className="w-full mt-4" disabled={isPending}>
            {tButton('save')}
          </Button>
        </form>
      </Form>
    </ResponsiveModal>
  )
}
