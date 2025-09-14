-- CreateEnum
CREATE TYPE "public"."AccountType" AS ENUM ('Checking', 'Savings', 'CreditCard', 'Loan', 'Investment', 'Mortgage', 'Crypto', 'Other');

-- CreateEnum
CREATE TYPE "public"."InvestmentType" AS ENUM ('Stock', 'ETF', 'Bond', 'TermDeposit', 'Crypto', 'MutualFund', 'Commodity', 'RealEstate', 'Other');

-- CreateEnum
CREATE TYPE "public"."BondFrequencyOfInterestPayments" AS ENUM ('HalfYearly', 'Annually');

-- CreateEnum
CREATE TYPE "public"."CryptoCurrency" AS ENUM ('BTC', 'ETH');

-- CreateTable
CREATE TABLE "public"."Account" (
    "id" SERIAL NOT NULL,
    "clerkId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "public"."AccountType" NOT NULL,
    "currency" "public"."Currency",
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "institution" TEXT,
    "accountNumber" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TermDeposit" (
    "id" SERIAL NOT NULL,
    "clerkId" TEXT NOT NULL,
    "accountId" INTEGER,
    "name" TEXT NOT NULL,
    "type" "public"."InvestmentType" NOT NULL,
    "currency" "public"."Currency" NOT NULL,
    "institution" TEXT,
    "amountInvested" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "interestRate" DOUBLE PRECISION NOT NULL,
    "termInMonths" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "taxRate" DOUBLE PRECISION,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TermDeposit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Bond" (
    "id" SERIAL NOT NULL,
    "clerkId" TEXT NOT NULL,
    "accountId" INTEGER,
    "name" TEXT NOT NULL,
    "type" "public"."InvestmentType" NOT NULL,
    "currency" "public"."Currency" NOT NULL,
    "institution" TEXT,
    "numberOfUnits" INTEGER NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "interestRate" DOUBLE PRECISION NOT NULL,
    "initialFee" DOUBLE PRECISION,
    "taxRate" DOUBLE PRECISION,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "frequencyOfInterestPayments" "public"."BondFrequencyOfInterestPayments" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bond_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Crypto" (
    "id" SERIAL NOT NULL,
    "clerkId" TEXT NOT NULL,
    "accountId" INTEGER,
    "name" TEXT NOT NULL,
    "type" "public"."InvestmentType" NOT NULL,
    "currency" "public"."CryptoCurrency" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Crypto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MonthlySnapshot" (
    "id" SERIAL NOT NULL,
    "clerkId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "totalBankAccounts" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalCryptoValue" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalBondsValue" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalTermDepositsValue" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalAssets" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalLiabilities" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "netWorth" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "snapshotDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MonthlySnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Account_clerkId_idx" ON "public"."Account"("clerkId");

-- CreateIndex
CREATE INDEX "Bond_clerkId_idx" ON "public"."Bond"("clerkId");

-- CreateIndex
CREATE INDEX "Crypto_clerkId_idx" ON "public"."Crypto"("clerkId");

-- CreateIndex
CREATE INDEX "MonthlySnapshot_clerkId_idx" ON "public"."MonthlySnapshot"("clerkId");

-- CreateIndex
CREATE INDEX "MonthlySnapshot_year_month_idx" ON "public"."MonthlySnapshot"("year", "month");

-- CreateIndex
CREATE UNIQUE INDEX "MonthlySnapshot_clerkId_year_month_key" ON "public"."MonthlySnapshot"("clerkId", "year", "month");

-- AddForeignKey
ALTER TABLE "public"."TermDeposit" ADD CONSTRAINT "TermDeposit_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "public"."Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Bond" ADD CONSTRAINT "Bond_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "public"."Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Crypto" ADD CONSTRAINT "Crypto_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "public"."Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
