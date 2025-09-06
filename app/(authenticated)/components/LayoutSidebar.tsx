import Link from "next/link"
import { type ComponentProps, Suspense } from "react"
import { NavUser } from "@/components/client/NavUser"
import { Heading } from "@/components/ui/heading"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { LayoutNav } from "./LayoutNav"
import { ROUTES } from "@/constants/routes"

export const LayoutSidebar = ({
  role,
  ...props
}: ComponentProps<typeof Sidebar>) => (
  <Sidebar collapsible='icon' {...props}>
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            size='lg'
          >
            <Link href={ROUTES.Dashboard()}>
              <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                🐶
              </div>
              <Heading
                className='text-muted-foreground tracking-wide'
                variant='h3'
              >
                AmBoss
              </Heading>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <LayoutNav />
    </SidebarContent>
    <SidebarFooter>
      <Suspense fallback={<div>Loading...</div>}>
        <NavUser />
      </Suspense>
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
)
