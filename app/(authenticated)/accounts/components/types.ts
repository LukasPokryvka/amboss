export type TotalNetWorth = {
  totalBankAccountsCount: number
  totalBankAccounts: number
  totalCryptoValue: number
  totalBondsValue: number
  totalTermDepositsValue: number
  totalAssets: number
  netWorth: number
  cryptoPrices: Record<string, number>
}
