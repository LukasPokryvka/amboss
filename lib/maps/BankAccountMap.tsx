import { BankAccountType } from '@prisma/client'
import en from '@/messages/en.json'
import sk from '@/messages/sk.json'
import type { Locale } from '@/types/common'

export const BankAccountMap = (locale: Locale) => {
  return {
    [BankAccountType.CHECKING]:
      locale === 'en'
        ? en.banks.bank_account.bank_account_type.CHECKING
        : sk.banks.bank_account.bank_account_type.CHECKING,
    [BankAccountType.SAVINGS]:
      locale === 'en'
        ? en.banks.bank_account.bank_account_type.SAVINGS
        : sk.banks.bank_account.bank_account_type.SAVINGS,
    [BankAccountType.TERM_DEPOSIT]:
      locale === 'en'
        ? en.banks.bank_account.bank_account_type.TERM_DEPOSIT
        : sk.banks.bank_account.bank_account_type.TERM_DEPOSIT,
    [BankAccountType.BOND]:
      locale === 'en'
        ? en.banks.bank_account.bank_account_type.BOND
        : sk.banks.bank_account.bank_account_type.BOND
  }
}
