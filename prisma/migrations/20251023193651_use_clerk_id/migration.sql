/*
  Warnings:

  - You are about to drop the column `userId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Income` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `IncomeEvent` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `clerkId` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clerkId` to the `Income` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clerkId` to the `IncomeEvent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clerkId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Income" DROP CONSTRAINT "Income_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."IncomeEvent" DROP CONSTRAINT "IncomeEvent_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Transaction" DROP CONSTRAINT "Transaction_userId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "userId",
ADD COLUMN     "clerkId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Income" DROP COLUMN "userId",
ADD COLUMN     "clerkId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "IncomeEvent" DROP COLUMN "userId",
ADD COLUMN     "clerkId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "userId",
ADD COLUMN     "clerkId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Income" ADD CONSTRAINT "Income_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "User"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "User"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "User"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IncomeEvent" ADD CONSTRAINT "IncomeEvent_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "User"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;
