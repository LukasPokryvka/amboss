'use server'

import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import { ROUTES } from '@/lib/routes'
import type { IncomeSchemaType } from '@/lib/schema/IncomeSchema'
import { tryCatch } from '@/lib/tryCatch'
import type { MutationReturnType } from '@/types/return'

export const getIncome = async () => {
  const { userId } = await auth()

  if (!userId) {
    redirect(ROUTES.Landing())
  }

  const { error, data: income } = await tryCatch(
    prisma.income.findFirst({
      where: {
        clerkId: userId
      }
    })
  )

  if (error) {
    throw error
  }

  return income
}

export const upsertIncome = async (
  incomeData: IncomeSchemaType & { incomeId?: number }
): Promise<MutationReturnType> => {
  const { userId } = await auth()

  if (!userId) {
    redirect(ROUTES.Landing())
  }

  if (incomeData.incomeId) {
    const { incomeId, ...data } = incomeData

    const { error } = await tryCatch(
      prisma.income.update({
        where: { id: incomeId },
        data
      })
    )

    if (error) {
      return { success: false, error }
    }

    revalidatePath(ROUTES.Profile())

    return { success: true, error: null }
  } else {
    const { error } = await tryCatch(
      prisma.income.create({
        data: {
          ...incomeData,
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

    revalidatePath(ROUTES.Profile())

    return { success: true, error: null }
  }
}
