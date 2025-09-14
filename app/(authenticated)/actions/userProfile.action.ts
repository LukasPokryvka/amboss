"use server"

import { auth } from "@clerk/nextjs/server"
import { DEFAULT_UNAUTHENTICATED_RESPONSE } from "@/constants/defaultUnauthenticatedResponse"
import prisma from "@/lib/prisma"
import { tryCatch } from "@/lib/tryCatch"
import type { UserProfileSchemaType } from "@/lib/validation/userProfile.schema"

export const fetchUserProfile = async () => {
  const { userId } = await auth()

  if (!userId) {
    return DEFAULT_UNAUTHENTICATED_RESPONSE
  }

  return await tryCatch(
    prisma.userProfile.findUnique({
      where: { clerkId: userId },
    })
  )
}

export const upsertUserProfile = async (formData: UserProfileSchemaType) => {
  const { userId } = await auth()

  if (!userId) {
    return DEFAULT_UNAUTHENTICATED_RESPONSE
  }

  return await tryCatch(
    prisma.userProfile.upsert({
      where: { clerkId: userId },
      create: {
        clerkId: userId,
        ...formData,
      },
      update: {
        ...formData,
      },
    })
  )
}
