import { AccountType, Currency } from "@prisma/client"
import z from "zod"

export const AccountSchema = z.object({
  name: z.string().min(1),
  type: z.enum(AccountType),
  currency: z.enum(Currency).optional(),
  balance: z.number().min(0),
  institution: z.string().nullable(),
  accountNumber: z.string().nullable(),
})

export type AccountSchemaType = z.infer<typeof AccountSchema>
