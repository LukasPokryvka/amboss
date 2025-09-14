"use server"

import { auth } from "@clerk/nextjs/server"
import { unstable_cache } from "next/cache"
import { DEFAULT_UNAUTHENTICATED_RESPONSE } from "@/constants/defaultUnauthenticatedResponse"
import prisma from "@/lib/prisma"
import { tryCatch } from "@/lib/tryCatch"
import type { CryptoCurrency, Currency } from "@/prisma/generated/prisma-client"

const getCryptoPrices = unstable_cache(
  async ({
    cryptoCurrencies,
    currency,
  }: {
    cryptoCurrencies: CryptoCurrency[]
    currency: Currency
  }) => {
    const ids = cryptoCurrencies.map((cc) => cc.toLowerCase()).join(",")

    if (!ids || !ids.length) {
      return {
        data: null,
        error: null,
      }
    }

    const { data, error } = await tryCatch(
      fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${currency.toLowerCase()}`,
        { next: { revalidate: 300 } } // 5 minutes
      )
    )

    if (error) {
      console.error("Failed to fetch crypto prices:", error)
      return {
        data: null,
        error,
      }
    }

    return {
      data: await data.json(),
      error: null,
    }
  },
  ["crypto-prices"],
  {
    revalidate: 60 * 5, // 5 minutes
    tags: ["crypto-prices"],
  }
)

export const getCurrentTotalNetWorth = unstable_cache(
  async (userId: string) => {
    const [bankAccounts, cryptos, bonds, termDeposits, userProfile] =
      await Promise.all([
        prisma.account.aggregate({
          where: { clerkId: userId, isActive: true },
          _sum: { balance: true },
          _count: { isActive: true },
        }),
        prisma.crypto.findMany({
          where: { clerkId: userId, isActive: true },
        }),
        prisma.bond.findMany({
          where: { clerkId: userId, isActive: true },
        }),
        prisma.termDeposit.findMany({
          where: { clerkId: userId, isActive: true },
        }),
        prisma.userProfile.findUnique({
          where: { clerkId: userId },
        }),
      ])

    if (!userProfile) {
      throw new Error("User profile not found")
    }

    // Get crypto prices
    const cryptoCurrencies = [...new Set(cryptos.map((c) => c.currency))]
    const { data: prices, error: pricesError } = await getCryptoPrices({
      cryptoCurrencies,
      currency: userProfile.currency,
    })

    if (pricesError) {
      console.error("Failed to fetch crypto prices:", pricesError)
      throw new Error("Failed to fetch crypto prices")
    }

    const totalBankAccounts = bankAccounts._sum.balance || 0
    let totalCryptoValue = 0

    if (prices) {
      totalCryptoValue = cryptos.reduce((sum, crypto) => {
        const priceData = prices[crypto.currency.toLowerCase()]
        const currentPrice = priceData?.eur || 0
        return sum + crypto.amount * currentPrice
      }, 0)
    }

    const totalBondsValue = bonds.reduce(
      (sum, bond) => sum + bond.numberOfUnits * bond.unitPrice,
      0
    )

    const totalTermDepositsValue = termDeposits.reduce((sum, td) => {
      const monthsElapsed = Math.floor(
        (Date.now() - td.startDate.getTime()) / (1000 * 60 * 60 * 24 * 30)
      )
      const accruedInterest =
        ((td.amountInvested * td.interestRate) / 100 / 12) * monthsElapsed
      return sum + td.amountInvested + accruedInterest
    }, 0)

    const totalAssets =
      totalBankAccounts +
      totalCryptoValue +
      totalBondsValue +
      totalTermDepositsValue
    const netWorth = totalAssets

    return {
      totalBankAccountsCount: bankAccounts._count.isActive || 0,
      totalBankAccounts,
      totalCryptoValue,
      totalBondsValue,
      totalTermDepositsValue,
      totalAssets,
      netWorth,
      cryptoPrices: prices,
    }
  },
  ["net-worth"],
  {
    revalidate: 60 * 5, // 5 minutes
    tags: ["net-worth"],
  }
)

// Wrapper that handles auth
export const fetchCurrentNetWorth = async () => {
  const { userId } = await auth()

  if (!userId) {
    return DEFAULT_UNAUTHENTICATED_RESPONSE
  }

  return await tryCatch(getCurrentTotalNetWorth(userId))
}

// Force refresh cache when user makes changes
export const invalidateNetWorthCache = async () => {
  const { revalidateTag } = await import("next/cache")
  revalidateTag("net-worth")
  revalidateTag("crypto-prices")
}
