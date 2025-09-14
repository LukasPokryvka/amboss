"use server"

import { revalidatePath } from "next/cache"

export const revalidateServerPath = async (path: string) => {
  revalidatePath(path)
}
