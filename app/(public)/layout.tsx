import type { ReactNode } from "react"
import { PublicHeader } from "./components/PublicHeader"

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex min-h-dvh w-full flex-col bg-background relative overflow-hidden'>
      <div className='absolute inset-0 gradient-mesh-violet opacity-30' />
      <div className='absolute top-20 left-10 w-96 h-96 gradient-orb-violet opacity-20' />
      <div className='absolute bottom-20 right-10 w-80 h-80 gradient-orb-violet opacity-15' />
      <PublicHeader />
      {children}
    </main>
  )
}

export default PublicLayout
