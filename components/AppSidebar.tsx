'use client'

import { Home, Plus } from 'lucide-react'
import type { ComponentProps } from 'react'
import { NavUser } from '@/components/NavUser'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar'
import type { Dictionary } from '@/dictionaries/dict'
import { ROUTES } from '@/lib/routes'
import { LogoLink } from './LogoLink'
import { NavMenu } from './NavMenu'
import { QuickMenu } from './QuickMenu'

const createMenuData = (dict: Dictionary) => ({
  quickMenuItems: [
    {
      title: dict.navigation.quick_menu.add,
      url: '#',
      icon: Plus,
      items: [
        {
          title: dict.navigation.quick_menu.expense,
          url: '#'
        },
        {
          title: dict.navigation.quick_menu.income,
          url: '#'
        }
      ]
    }
  ],
  menuItems: [
    {
      title: dict.navigation.menu.dashboard,
      url: ROUTES.Dashboard(),
      icon: Home
    }
  ]
})

export const AppSidebar = ({
  dict,
  ...props
}: ComponentProps<typeof Sidebar> & { dict: Dictionary }) => {
  const menuData = createMenuData(dict)

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <LogoLink />
      </SidebarHeader>
      <SidebarContent>
        <QuickMenu
          title={dict.navigation.quick_menu.title}
          items={menuData.quickMenuItems}
        />
        <NavMenu
          title={dict.navigation.menu.title}
          items={menuData.menuItems}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
