'use server'

import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import { ROUTES } from '@/lib/routes'
import type { BankSchemaType } from '@/lib/schema/Bank.schema'
import { tryCatch } from '@/lib/tryCatch'
import type { MutationReturnType } from '@/types/return'

export const getBanks = async () => {
  const { userId } = await auth()

  if (!userId) {
    redirect(ROUTES.Landing())
  }

  const { error, data } = await tryCatch(
    prisma.bank.findMany({
      where: {
        clerkId: userId,
        deletedAt: null
      }
    })
  )

  if (error) {
    throw error
  }

  return data ?? []
}

export const getBanksAndAccountsCountsAndSum = async () => {
  const { userId } = await auth()

  if (!userId) {
    redirect(ROUTES.Landing())
  }

  const { error, data } = await tryCatch(
    prisma.bank.findMany({
      where: {
        clerkId: userId,
        deletedAt: null
      },
      include: {
        accounts: {
          where: {
            deletedAt: null
          }
        }
      }
    })
  )

  if (error) {
    throw error
  }

  return {
    banksCount: data?.length ?? 0,
    accountsCount:
      data?.reduce((acc, bank) => acc + bank.accounts.length, 0) ?? 0,
    accountsSum:
      data?.reduce(
        (acc, bank) =>
          acc +
          bank.accounts.reduce((acc, account) => acc + account.balance, 0),
        0
      ) ?? 0,
    banks: data ?? []
  }
}

export const upsertBank = async (
  bankData: BankSchemaType & { bankId?: number }
): Promise<MutationReturnType> => {
  const { userId } = await auth()

  if (!userId) {
    redirect(ROUTES.Landing())
  }

  if (bankData.bankId) {
    const { bankId, ...data } = bankData

    const { error } = await tryCatch(
      prisma.bank.update({
        where: { id: bankId },
        data
      })
    )

    if (error) {
      return { success: false, error }
    }

    revalidatePath(ROUTES.Banks())

    return { success: true, error: null }
  } else {
    const { error } = await tryCatch(
      prisma.bank.create({
        data: {
          ...bankData,
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

export const deleteBank = async (
  bankId: number
): Promise<MutationReturnType> => {
  const { userId } = await auth()

  if (!userId) {
    redirect(ROUTES.Landing())
  }

  const now = new Date()

  const { error } = await tryCatch(
    prisma.$transaction([
      prisma.bankAccount.updateMany({
        where: { bankId, deletedAt: null },
        data: { deletedAt: now }
      }),
      prisma.bank.update({
        where: { id: bankId },
        data: { deletedAt: now }
      })
    ])
  )

  if (error) {
    return { success: false, error }
  }

  revalidatePath(ROUTES.Banks())

  return { success: true, error: null }
}
