import z from 'zod'

export const BankSchema = z.object({
  name: z.string().min(1)
})

export type BankSchemaType = z.infer<typeof BankSchema>
