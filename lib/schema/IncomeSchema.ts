import z from 'zod'
import { Frequency, IncomeType } from '@/prisma/lib/generated/prisma/enums'

export const IncomeSchema = z.object({
  title: z.string().min(1),
  type: z.enum(IncomeType),
  fixedNet: z.number().min(0).nullish(),
  hourlyRate: z.number().min(0).nullish(),
  hoursPerDay: z.number().min(0).nullish(),
  frequency: z.enum(Frequency).nullish()
})

export type IncomeSchemaType = z.infer<typeof IncomeSchema>
