'use server'

import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import { ROUTES } from '@/lib/routes'
import type { BankAccountSchemaType } from '@/lib/schema/BankAccount.schema'
import { tryCatch } from '@/lib/tryCatch'
import type { MutationReturnType } from '@/types/return'

export const upsertBankAccount = async (
  bankAccountData: BankAccountSchemaType & { bankAccountId?: number }
): Promise<MutationReturnType> => {
  const { userId } = await auth()

  if (!userId) {
    redirect(ROUTES.Landing())
  }

  console.log(JSON.stringify(bankAccountData, null, 2))

  if (bankAccountData.bankAccountId) {
    const { bankAccountId, ...data } = bankAccountData

    const { error } = await tryCatch(
      prisma.bankAccount.update({
        where: { id: bankAccountId },
        data
      })
    )

    if (error) {
      return { success: false, error }
    }

    revalidatePath(ROUTES.Banks())

    return { success: true, error: null }
  } else {
    const { bankId, ...data } = bankAccountData

    const { error } = await tryCatch(
      prisma.bankAccount.create({
        data: {
          ...data,
          bank: {
            connect: {
              id: bankId
            }
          },
          user: {
            connect: {
              clerkId: userId
            }
          }
        }
      })
    )

    if (error) {
      return { success: false, error }
    }

    revalidatePath(ROUTES.Banks())

    return { success: true, error: null }
  }
}
