'use client'

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'
import { Link } from '@/i18n/navigation'
import { ROUTES } from '@/lib/routes'
import { Text } from './ui/text'

export const LogoLink = () => (
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton
        size="lg"
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        asChild
      >
        <Link href={ROUTES.Dashboard()}>
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            🐶
          </div>
          <Text variant="large">AmBoss</Text>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
)
