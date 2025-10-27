'use client'

import { Home, Plus } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { getTranslations } from 'next-intl/server'
import type { ComponentProps } from 'react'
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

const createMenuData = (t: Awaited<ReturnType<typeof getTranslations>>) => ({
  quickMenuItems: [
    {
      title: t('quick_menu.add'),
      url: '#',
      icon: Plus,
      items: [
        {
          title: t('quick_menu.expense'),
          url: '#'
        },
        {
          title: t('quick_menu.income'),
          url: '#'
        }
      ]
    }
  ],
  menuItems: [
    {
      title: t('menu.dashboard'),
      url: ROUTES.Dashboard(),
      icon: Home
    }
  ]
})

export const AppSidebar = ({ ...props }: ComponentProps<typeof Sidebar>) => {
  const t = useTranslations('navigation')
  const menuData = createMenuData(t)

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <LogoLink />
      </SidebarHeader>
      <SidebarContent>
        <QuickMenu
          title={t('quick_menu.title')}
          items={menuData.quickMenuItems}
        />
        <NavMenu title={t('menu.title')} items={menuData.menuItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
