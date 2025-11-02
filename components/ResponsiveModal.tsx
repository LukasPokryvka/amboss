'use client'

import { useTranslations } from 'next-intl'
import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from '@/components/ui/drawer'
import { useMediaQuery } from '@/hooks/use-media-query'

type DrawerDialogDemoProps = {
  open: boolean
  children: ReactNode
  title: string
  description?: string
  submitButton?: ReactNode
  handleOpenChange: (open: boolean) => void
}

export const ResponsiveModal = ({
  open,
  children,
  title,
  description,
  submitButton,
  handleOpenChange
}: DrawerDialogDemoProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const t = useTranslations('button')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          {children}
          {submitButton && <DialogFooter>{submitButton}</DialogFooter>}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={handleOpenChange}>
      <DrawerContent className="px-4">
        <DrawerHeader className="text-left shrink-0">
          <DrawerTitle>{title}</DrawerTitle>
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto">{children}</div>
        <DrawerFooter className="pt-2 px-0 shrink-0">
          {submitButton && submitButton}
          <DrawerClose asChild>
            <Button variant="outline">{t('cancel')}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
