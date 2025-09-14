/*
  Warnings:

  - Added the required column `language` to the `UserProfile` table without a default value. This is not possible if the table is not empty.
  - Made the column `currency` on table `UserProfile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `incomeType` on table `UserProfile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `incomeFrequency` on table `UserProfile` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "public"."Language" AS ENUM ('EN', 'SK');

-- AlterEnum
ALTER TYPE "public"."IncomeFrequency" ADD VALUE 'Invoice';

-- AlterTable
ALTER TABLE "public"."UserProfile" DROP COLUMN "language",
ADD COLUMN     "language" "public"."Language" NOT NULL,
ALTER COLUMN "currency" SET NOT NULL,
ALTER COLUMN "incomeType" SET NOT NULL,
ALTER COLUMN "incomeFrequency" SET NOT NULL;
