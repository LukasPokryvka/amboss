'use client'

import { useClerk, useUser } from '@clerk/nextjs'
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
  User
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar'
import { Link } from '@/i18n/navigation'
import { ROUTES } from '@/lib/routes'
import { Skeleton } from './ui/skeleton'
import { Text } from './ui/text'

export const NavUser = () => {
  const { isMobile } = useSidebar()
  const { user, isLoaded } = useUser()
  const { openUserProfile, signOut } = useClerk()
  const t = useTranslations('user_menu')

  if (!isLoaded) return <Skeleton className="w-full h-12" />

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="size-8 rounded-full">
                <AvatarImage
                  src={user?.imageUrl}
                  alt={user?.primaryEmailAddress?.emailAddress}
                />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <Text variant="p" className="line-clamp-1 truncate">
                {user?.primaryEmailAddress?.emailAddress}
              </Text>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="size-8 rounded-full">
                  <AvatarImage
                    src={user?.imageUrl}
                    alt={user?.primaryEmailAddress?.emailAddress}
                  />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <Text variant="p" className="line-clamp-1 truncate">
                  {user?.primaryEmailAddress?.emailAddress}
                </Text>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                {t('upgrade_to_pro')}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={() => {
                  openUserProfile()
                }}
              >
                <BadgeCheck />
                {t('account')}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                {t('billing')}
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={ROUTES.Profile()}>
                  <User />
                  {t('profile')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                {t('notifications')}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={async () => {
                await signOut()
              }}
            >
              <LogOut />
              {t('sign_out')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
