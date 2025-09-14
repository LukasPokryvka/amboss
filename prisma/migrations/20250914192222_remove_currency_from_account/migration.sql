/*
  Warnings:

  - You are about to drop the column `currency` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Account" DROP COLUMN "currency";

-- CreateIndex
CREATE INDEX "UserProfile_clerkId_idx" ON "public"."UserProfile"("clerkId");
