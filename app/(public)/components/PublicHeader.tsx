import { ThemeToggle } from "@/components/client/ThemeToggle"
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/constants/routes"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs"
import Link from "next/link"

export const PublicHeader = () => {
  return (
    <header className='border-b glass-violet z-50'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 bg-gradient-to-br from-primary to-violet-600 rounded-full flex items-center justify-center shadow-lg'>
            <span className='text-primary-foreground font-bold text-lg'>
              🐶
            </span>
          </div>
          <div>
            <h1 className='text-xl font-bold text-foreground'>AmBoss</h1>
            <p className='text-xs text-muted-foreground'>with Ambo</p>
          </div>
        </div>
        <nav className='hidden md:flex items-center gap-6'>
          <Link
            href='#features'
            className='text-muted-foreground hover:text-foreground transition-colors'
          >
            Features
          </Link>
          <Link
            href='#pricing'
            className='text-muted-foreground hover:text-foreground transition-colors'
          >
            Pricing
          </Link>
          <Link
            href='#about'
            className='text-muted-foreground hover:text-foreground transition-colors'
          >
            About
          </Link>
        </nav>
        <div className='flex items-center gap-3'>
          <ThemeToggle />
          <SignedOut>
            <SignInButton>
              <Button variant='ghost'>Sign In</Button>
            </SignInButton>
            <SignUpButton>
              <Button>Get Started</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Button variant='ghost' asChild>
              <Link href={ROUTES.Dashboard()}>Dashboard</Link>
            </Button>
            <SignOutButton>
              <Button>Sign Out</Button>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </header>
  )
}
