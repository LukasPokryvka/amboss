import { useTranslations } from 'next-intl'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from './ui/alert-dialog'
import { buttonVariants } from './ui/button'

type ActionDialogProps = {
  open: boolean
  title: string
  description?: string
  isDelete?: boolean
  confirmButtonText?: string
  onConfirm: () => void
  onCancel: () => void
  handleOpenChange: (open: boolean) => void
}

export const ActionDialog = ({
  open,
  title,
  description,
  isDelete,
  confirmButtonText,
  onConfirm,
  onCancel,
  handleOpenChange
}: ActionDialogProps) => {
  const t = useTranslations('button')

  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>
            {t('cancel')}
          </AlertDialogCancel>
          <AlertDialogAction
            type="button"
            onClick={onConfirm}
            className={buttonVariants({
              variant: isDelete ? 'destructive' : 'default'
            })}
          >
            {confirmButtonText ?? t('confirm')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
