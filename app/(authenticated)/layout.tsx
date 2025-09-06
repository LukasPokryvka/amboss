import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { LayoutSidebar } from "./components/LayoutSidebar"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { NuqsAdapter } from "nuqs/adapters/next/app"

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <LayoutSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator
              className='mr-2 data-[orientation=vertical]:h-4'
              orientation='vertical'
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className='hidden md:block'>
                  <BreadcrumbLink href='#'>
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='hidden md:block' />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <NuqsAdapter>
          <div className='flex flex-1 flex-col gap-4 bg-gradient-to-bl from-violet-50 via-white to-purple-50 p-4 pt-0'>
            {children}
          </div>
        </NuqsAdapter>
      </SidebarInset>
    </SidebarProvider>
  )
}
export default AuthenticatedLayout
