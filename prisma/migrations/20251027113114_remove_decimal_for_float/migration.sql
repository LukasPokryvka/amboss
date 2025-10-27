/*
  Warnings:

  - You are about to alter the column `balance` on the `Account` table. The data in that column could be lost. The data in that column will be cast from `Decimal(20,2)` to `DoublePrecision`.
  - You are about to alter the column `interestRate` on the `Account` table. The data in that column could be lost. The data in that column will be cast from `Decimal(6,4)` to `DoublePrecision`.
  - You are about to alter the column `fixedNet` on the `Income` table. The data in that column could be lost. The data in that column will be cast from `Decimal(20,2)` to `DoublePrecision`.
  - You are about to alter the column `hourlyRate` on the `Income` table. The data in that column could be lost. The data in that column will be cast from `Decimal(20,4)` to `DoublePrecision`.
  - You are about to alter the column `hoursPerDay` on the `Income` table. The data in that column could be lost. The data in that column will be cast from `Decimal(4,2)` to `DoublePrecision`.
  - You are about to alter the column `amount` on the `IncomeEvent` table. The data in that column could be lost. The data in that column will be cast from `Decimal(20,2)` to `DoublePrecision`.
  - You are about to alter the column `netAmount` on the `IncomeEvent` table. The data in that column could be lost. The data in that column will be cast from `Decimal(20,2)` to `DoublePrecision`.
  - You are about to alter the column `amount` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `Decimal(20,2)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "balance" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "interestRate" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "fixedNet" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "hourlyRate" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "hoursPerDay" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "IncomeEvent" ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "netAmount" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION;
