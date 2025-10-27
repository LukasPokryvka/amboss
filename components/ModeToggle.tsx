'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { startTransition, useCallback } from 'react'
import { Button } from '@/components/ui/button'

export const ModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()

  const toggleTheme = useCallback(() => {
    startTransition(() => {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    })
  }, [resolvedTheme, setTheme])

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <SunIcon className="hidden [html.dark_&]:block" />
      <MoonIcon className="hidden [html.light_&]:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
