import { Currency } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from '@/components/ui/empty'

type AccordionEmptyStateProps = {
  handleOpenChange: () => void
}

export const AccordionEmptyState = ({
  handleOpenChange
}: AccordionEmptyStateProps) => {
  const t = useTranslations('banks')

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Currency />
        </EmptyMedia>
        <EmptyTitle>{t('bank_account.no_accounts')}</EmptyTitle>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" onClick={handleOpenChange}>
          {t('bank_account.create_account')}
        </Button>
      </EmptyContent>
    </Empty>
  )
}
