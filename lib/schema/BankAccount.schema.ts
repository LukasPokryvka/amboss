import { BankAccountType, Currency } from '@prisma/client'
import z from 'zod'

export const BankAccountSchema = z.object({
  name: z.string().min(1),
  bankId: z.number(),
  type: z.enum(BankAccountType),
  currency: z.enum(Currency),
  balance: z.number(),
  interestRate: z.number().nullable(),
  startDate: z.date().nullable(),
  endDate: z.date().nullable()
})

export type BankAccountSchemaType = z.infer<typeof BankAccountSchema>
