"use server"

import { auth } from "@clerk/nextjs/server"
import { DEFAULT_UNAUTHENTICATED_RESPONSE } from "@/constants/defaultUnauthenticatedResponse"
import prisma from "@/lib/prisma"
import { tryCatch } from "@/lib/tryCatch"
import type { AccountSchemaType } from "@/lib/validation/account.schema"

export const fetchAccounts = async () => {
  const { userId } = await auth()

  if (!userId) {
    return DEFAULT_UNAUTHENTICATED_RESPONSE
  }

  return await tryCatch(
    prisma.account.findMany({
      where: { clerkId: userId },
    })
  )
}

export const upsertAccount = async (
  account: AccountSchemaType & { id?: number }
) => {
  const { userId } = await auth()

  if (!userId) {
    return DEFAULT_UNAUTHENTICATED_RESPONSE
  }

  if (!account.id) {
    return await tryCatch(
      prisma.account.create({ data: { ...account, clerkId: userId } })
    )
  }

  return await tryCatch(
    prisma.account.update({
      where: { id: account.id },
      data: { ...account },
    })
  )
}

export const deleteAccount = async (id: number) => {
  const { userId } = await auth()

  if (!userId) {
    return DEFAULT_UNAUTHENTICATED_RESPONSE
  }

  return await tryCatch(
    prisma.account.delete({
      where: { id, clerkId: userId },
    })
  )
}
