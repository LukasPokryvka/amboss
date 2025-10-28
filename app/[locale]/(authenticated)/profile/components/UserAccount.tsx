'use client'

import { useClerk, useUser } from '@clerk/nextjs'
import { Pencil } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Text } from '@/components/ui/text'

export const UserAccount = () => {
  const t = useTranslations('user_account')
  const { user, isLoaded } = useUser()
  const { openUserProfile } = useClerk()

  if (!isLoaded) {
    return <Skeleton className="w-full h-12" />
  }

  if (!user) {
    throw new Error('User not found')
  }

  return (
    <Card>
      <CardHeader className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <CardTitle>{t('title')}</CardTitle>
          <CardDescription>{t('description')}</CardDescription>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            openUserProfile()
          }}
        >
          <Pencil className="size-4" />
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center gap-2 justify-between">
          <Text className="font-semibold">{t('avatar')}</Text>
          <Avatar className="size-8 rounded-full">
            <AvatarImage
              src={user?.imageUrl}
              alt={user?.primaryEmailAddress?.emailAddress}
            />
            <AvatarFallback className="rounded-lg">
              {user.fullName?.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-center gap-2 justify-between">
          <Text className="font-semibold">{t('name')}</Text>
          <Text className="line-clamp-1 truncate">{user.fullName}</Text>
        </div>
        <div className="flex items-center gap-2 justify-between">
          <Text className="font-semibold text-nowrap">{t('email')}</Text>
          <Text className="line-clamp-1 truncate">
            {user.emailAddresses[0].emailAddress}
          </Text>
        </div>
      </CardContent>
    </Card>
  )
}
