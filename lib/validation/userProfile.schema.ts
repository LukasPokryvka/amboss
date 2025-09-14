import { Currency, IncomeFrequency, IncomeType, Language } from "@prisma/client"
import z from "zod"

export const UserProfileSchema = z.object({
  name: z.string().optional(),
  language: z.enum(Language),
  currency: z.enum(Currency),
  incomeType: z.enum(IncomeType),
  incomeFrequency: z.enum(IncomeFrequency),
  incomeAmount: z.number().nullable(),
  incomeHourlyRate: z.number().nullable(),
  workingHoursPerDay: z.number().nullable(),
})

export type UserProfileSchemaType = z.infer<typeof UserProfileSchema>
