"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import dynamic from "next/dynamic"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { FormInputField } from "@/components/client/FormInputField"
import { FormInputFieldNumber } from "@/components/client/FormInputFieldNumber"
import { FormSelectField } from "@/components/client/FormSelectField"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { ROUTES } from "@/constants/routes"
import {
  UserProfileSchema,
  type UserProfileSchemaType,
} from "@/lib/validation/userProfile.schema"
import {
  Currency,
  IncomeFrequency,
  IncomeType,
  Language,
  type UserProfile,
} from "@/prisma/generated/prisma-client"
import { revalidateServerPath } from "../../actions/common.action"
import { upsertUserProfile } from "../../actions/userProfile.action"

const ResponsiveModal = dynamic(
  () =>
    import("@/components/client/ResponsiveModal").then(
      (mod) => mod.ResponsiveModal
    ),
  {
    ssr: false,
  }
)

type ProfileFormModalProps = {
  isOpen: boolean
  profile: UserProfile | null
  onOpenChange: (open: boolean) => void
}
export const ProfileFormModal = ({
  isOpen,
  profile,
  onOpenChange,
}: ProfileFormModalProps) => {
  const [isPending, startTransition] = useTransition()
  const form = useForm<UserProfileSchemaType>({
    values: {
      name: profile?.name ?? "",
      language: profile?.language ?? Language.SK,
      currency: profile?.currency ?? Currency.EUR,
      incomeType: profile?.incomeType ?? IncomeType.FullTime,
      incomeFrequency: profile?.incomeFrequency ?? IncomeFrequency.Monthly,
      incomeAmount: profile?.incomeAmount ?? 0,
      incomeHourlyRate: profile?.incomeHourlyRate ?? 0,
      workingHoursPerDay: profile?.workingHoursPerDay ?? 0,
    },
    resolver: zodResolver(UserProfileSchema),
  })

  const onSubmit = (formData: UserProfileSchemaType) => {
    startTransition(async () => {
      const { data, error } = await upsertUserProfile({
        ...formData,
        incomeAmount:
          formData.incomeType === IncomeType.FullTime
            ? formData.incomeAmount
            : null,
        incomeHourlyRate:
          formData.incomeType === IncomeType.Contract
            ? formData.incomeHourlyRate
            : null,
        workingHoursPerDay:
          formData.incomeType === IncomeType.Contract
            ? formData.workingHoursPerDay
            : null,
      })

      if (error) {
        toast.error(error.message)
      }

      if (data) {
        toast.success("Profile updated successfully")
        revalidateServerPath(ROUTES.Profile())
      }

      onOpenChange(false)
      form.reset()
    })
  }

  return (
    <ResponsiveModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title='Create Profile'
    >
      <Form {...form}>
        <form
          className='flex flex-col gap-4'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormInputField
            control={form.control}
            name='name'
            label='Name'
            isDisabled={isPending}
          />
          <FormSelectField
            isRequired
            control={form.control}
            name='language'
            label='Language'
            options={Object.values(Language).map((language) => ({
              label: language,
              value: language,
            }))}
            isDisabled={isPending}
          />
          <FormSelectField
            isRequired
            control={form.control}
            name='currency'
            label='Currency'
            options={Object.values(Currency).map((currency) => ({
              label: currency,
              value: currency,
            }))}
            isDisabled={isPending}
          />
          <FormSelectField
            isRequired
            control={form.control}
            name='incomeType'
            label='Income Type'
            options={Object.values(IncomeType).map((incomeType) => ({
              label: incomeType,
              value: incomeType,
            }))}
            isDisabled={isPending}
          />
          <FormSelectField
            isRequired
            control={form.control}
            name='incomeFrequency'
            label='Income Frequency'
            options={Object.values(IncomeFrequency).map((incomeFrequency) => ({
              label: incomeFrequency,
              value: incomeFrequency,
            }))}
            isDisabled={isPending}
          />
          {form.watch("incomeType") === IncomeType.FullTime && (
            <FormInputFieldNumber
              isRequired
              control={form.control}
              name='incomeAmount'
              label='Net Income Amount'
              isDisabled={isPending}
            />
          )}
          {form.watch("incomeType") === IncomeType.Contract && (
            <>
              <FormInputFieldNumber
                isRequired
                control={form.control}
                name='incomeHourlyRate'
                label='Hourly Rate'
                isDisabled={isPending}
              />
              <FormInputFieldNumber
                isRequired
                control={form.control}
                name='workingHoursPerDay'
                label='Working Hours Per Day'
                isDisabled={isPending}
              />
            </>
          )}
          <Button type='submit' disabled={isPending}>
            Save
          </Button>
        </form>
      </Form>
    </ResponsiveModal>
  )
}
