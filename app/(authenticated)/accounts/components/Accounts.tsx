"use client"

import { Landmark, Pencil, PiggyBank, Trash } from "lucide-react"
import dynamic from "next/dynamic"
import { use, useState } from "react"
import { toast } from "sonner"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Text } from "@/components/ui/text"
import { ROUTES } from "@/constants/routes"
import { formatCurrency } from "@/lib/formatters"
import type { Result } from "@/lib/tryCatch"
import { type Account, AccountType } from "@/prisma/generated/prisma-client"
import { deleteAccount } from "../../actions/accounts.action"
import { revalidateServerPath } from "../../actions/common.action"

const UpsertAccountModal = dynamic(
  () => import("./UpsertAccountModal").then((mod) => mod.UpsertAccountModal),
  { ssr: false }
)

type AccountsProps = {
  accounts: Promise<Result<Account[] | null>>
}

export const Accounts = ({ accounts }: AccountsProps) => {
  const { data } = use(accounts)
  const [accountToUpdate, setAccountToUpdate] = useState<Account | null>(null)

  return (
    <section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {data?.map((account) => (
        <Card key={account.id}>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Avatar className='bg-primary/20 items-center justify-center size-12'>
                {account.type === AccountType.Checking && (
                  <Landmark className='text-primary size-5' />
                )}
                {account.type === AccountType.Savings && (
                  <PiggyBank className='text-primary size-5' />
                )}
              </Avatar>
              <div className='flex flex-col gap-1'>
                {account.name}
                {account.institution && (
                  <Text variant='mutedText'>{account.institution}</Text>
                )}
              </div>
              <Badge variant='secondary' className='ml-auto'>
                {account.type}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between items-end'>
            <div className='flex flex-col'>
              <Text variant='mutedText'>Balance</Text>
              <Text variant='largeText' className='font-bold text-xl'>
                {formatCurrency({
                  amount: account.balance,
                  currency: "EUR",
                })}
              </Text>
            </div>
            <div className='flex gap-2'>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setAccountToUpdate(account)}
              >
                <Pencil />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                onClick={async () => {
                  const { error } = await deleteAccount(account.id)

                  if (error) {
                    toast.error(error.message)
                    return
                  }

                  toast.success("Account deleted successfully")
                  revalidateServerPath(ROUTES.Accounts())
                }}
              >
                <Trash />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
      {accountToUpdate && (
        <UpsertAccountModal
          isOpen={Boolean(accountToUpdate)}
          onOpenChange={() => setAccountToUpdate(null)}
          account={accountToUpdate}
        />
      )}
    </section>
  )
}
