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

const createMenuData = (dict: Dictionary['navigation']) => ({
  quickMenuItems: [
    {
      title: dict.quick_menu.add,
      url: '#',
      icon: Plus,
      items: [
        {
          title: dict.quick_menu.expense,
          url: '#'
        },
        {
          title: dict.quick_menu.income,
          url: '#'
        }
      ]
    }
  ],
  menuItems: [
    {
      title: dict.menu.dashboard,
      url: ROUTES.Dashboard(),
      icon: Home
    }
  ]
})

export const AppSidebar = ({
  dict,
  ...props
}: ComponentProps<typeof Sidebar> & { dict: Dictionary }) => {
  const menuData = createMenuData(dict.navigation)

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
        <NavUser dict={dict.user_menu} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
