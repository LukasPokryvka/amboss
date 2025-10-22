'use client'

import { Home, Plus } from 'lucide-react'
import type * as React from 'react'

import { NavUser } from '@/components/NavUser'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar'
import { ROUTES } from '@/lib/routes'
import { LogoLink } from './LogoLink'
import { NavMenu } from './NavMenu'
import { QuickMenu } from './QuickMenu'

// This is sample data.
const data = {
  quickMenuItems: [
    {
      title: 'Add',
      url: '#',
      icon: Plus,
      items: [
        {
          title: 'Expense',
          url: '#'
        },
        {
          title: 'Income',
          url: '#'
        }
      ]
    }
  ],
  menuItems: [
    {
      title: 'Dashboard',
      url: ROUTES.Dashboard(),
      icon: Home
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <LogoLink />
      </SidebarHeader>
      <SidebarContent>
        <QuickMenu items={data.quickMenuItems} />
        <NavMenu items={data.menuItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
