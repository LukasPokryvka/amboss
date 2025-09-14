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
  AccountSchema,
  type AccountSchemaType,
} from "@/lib/validation/account.schema"
import { type Account, AccountType } from "@/prisma/generated/prisma-client"
import { upsertAccount } from "../../actions/accounts.action"
import { revalidateServerPath } from "../../actions/common.action"

const ResponsiveModal = dynamic(
  () =>
    import("@/components/client/ResponsiveModal").then(
      (mod) => mod.ResponsiveModal
    ),
  { ssr: false }
)

type UpsertAccountModalProps = {
  isOpen: boolean
  account?: Account | null
  onOpenChange: (open: boolean) => void
}

export const UpsertAccountModal = ({
  isOpen,
  account,
  onOpenChange,
}: UpsertAccountModalProps) => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<AccountSchemaType>({
    defaultValues: {
      name: account?.name ?? "",
      type: account?.type ?? AccountType.Checking,
      balance: account?.balance ?? 0,
      institution: account?.institution ?? "",
      accountNumber: account?.accountNumber ?? "",
    },
    resolver: zodResolver(AccountSchema),
  })

  const isChecking = form.watch("type") === AccountType.Checking

  const onSubmit = (formData: AccountSchemaType) => {
    startTransition(async () => {
      const { data, error } = await upsertAccount({
        ...formData,
        ...(account ? { id: account.id } : {}),
        institution: formData.institution ?? null,
        accountNumber: formData.accountNumber ?? null,
      })

      if (error) {
        toast.error(error.message)
      }

      if (data) {
        toast.success(`Account ${account ? "updated" : "created"} successfully`)
        revalidateServerPath(ROUTES.Accounts())
      }

      form.reset()
      onOpenChange(false)
    })
  }

  console.log(form.formState.errors)

  return (
    <ResponsiveModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title='New Account'
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
            isRequired
            isDisabled={isPending}
          />
          <FormSelectField
            isRequired
            control={form.control}
            name='type'
            label='Type'
            options={Object.values(AccountType).map((type) => ({
              label: type,
              value: type,
            }))}
            isDisabled={isPending}
          />
          <FormInputFieldNumber
            control={form.control}
            name='balance'
            label='Balance'
            isDisabled={isPending}
          />
          <FormInputField
            control={form.control}
            name='institution'
            label='Institution'
            isDisabled={isPending}
          />
          {isChecking && (
            <FormInputField
              control={form.control}
              name='accountNumber'
              label='Account Number'
              isDisabled={isPending}
            />
          )}
          <Button type='submit' disabled={isPending}>
            {account ? "Update Account" : "Create Account"}
          </Button>
        </form>
      </Form>
    </ResponsiveModal>
  )
}
