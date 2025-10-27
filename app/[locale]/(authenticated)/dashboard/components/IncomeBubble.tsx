import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { Link } from '@/i18n/navigation'
import prisma from '@/lib/prisma'
import { ROUTES } from '@/lib/routes'
import { cn } from '@/lib/utils'

export const IncomeBubble = async ({ userId }: { userId: string }) => {
  const result = await prisma.income.findFirst({
    where: {
      clerkId: userId
    }
  })

  const income = result?.fixedNet ?? 0

  return (
    <Card className="border-none shadow-lg @container/card">
      <CardHeader className="flex flex-col gap-0 w-full">
        <CardTitle className="flex items-center justify-between w-full">
          <Text variant="p" className="text-muted-foreground text-sm">
            This month&apos;s income
          </Text>
          <Badge variant="outline">TPP</Badge>
        </CardTitle>
        <Text
          className={cn(
            'text-2xl tracking-tight font-semibold @[250px]/card:text-3xl',
            !income && 'text-destructive'
          )}
        >
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'EUR'
          }).format(income)}
        </Text>
      </CardHeader>
      <CardContent>
        {!result?.id && (
          <Text variant="p" className="text-sm font-medium text-destructive">
            You haven't set your monthly income yet.
          </Text>
        )}
        {!result?.id && (
          <Text variant="muted">
            You can setup your profile{' '}
            <Link href={ROUTES.Profile()} className="text-primary underline">
              here
            </Link>
          </Text>
        )}
      </CardContent>
    </Card>
  )
}
