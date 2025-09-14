"use client"

import { IncomeType, type UserProfile } from "@prisma/client"
import { ChartBar, Pencil, TrendingUp, User } from "lucide-react"
import dynamic from "next/dynamic"
import { use, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Text } from "@/components/ui/text"
import { formatCurrency } from "@/lib/formatters"
import { getCurrentMonthName } from "@/lib/getCurrentMonthName"
import {
  getWorkingDaysInCurrentMonth,
  getWorkingHoursInCurrentMonth,
} from "@/lib/getNumberOfWorkingDaysInCurrentMonth"
import type { Result } from "@/lib/tryCatch"
import { NoProfileWarning } from "./NoProfileWarning"

const ProfileFormModal = dynamic(
  () => import("./ProfileFormModal").then((mod) => mod.ProfileFormModal),
  {
    ssr: false,
  }
)

type UserProfileViewProps = {
  profile: Promise<Result<UserProfile | null>>
}

export const UserProfileView = ({ profile }: UserProfileViewProps) => {
  const { data } = use(profile)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

  if (!data) {
    return <NoProfileWarning profile={data} />
  }

  return (
    <>
      <section className='w-full h-auto grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-4 items-start'>
        <Card>
          <CardHeader className='flex flex-row items-center gap-2 font-medium justify-between'>
            <div className='flex items-center gap-2'>
              <User className='text-primary' /> Profile Summary
            </div>
            <Button
              variant='outline'
              size='icon'
              onClick={() => setIsProfileModalOpen(true)}
            >
              <Pencil />
            </Button>
          </CardHeader>
          <CardContent className='flex flex-col gap-2'>
            {data.name && (
              <div className='flex justify-between items-center'>
                <Text>Name</Text>
                <Text className='font-medium'>{data.name}</Text>
              </div>
            )}
            <div className='flex justify-between items-center'>
              <Text>Employment Type</Text>
              <Badge>{data.incomeType}</Badge>
            </div>
            <div className='flex justify-between items-center'>
              <Text>Language</Text>
              <Badge>{data.language}</Badge>
            </div>
            <div className='flex justify-between items-center'>
              <Text>Currency</Text>
              <Badge>{data.currency}</Badge>
            </div>
            <div className='flex justify-between items-center'>
              <Text>Income Frequency</Text>
              <Badge>{data.incomeFrequency}</Badge>
            </div>
            {data.incomeType === IncomeType.FullTime && (
              <div className='flex justify-between items-center'>
                <Text>Income Amount</Text>
                <Text className='font-medium'>
                  {formatCurrency({
                    amount: data.incomeAmount!,
                    currency: data.currency,
                  })}
                </Text>
              </div>
            )}
            {data.incomeType === IncomeType.Contract && (
              <>
                <div className='flex justify-between items-center'>
                  <Text>Income Hourly Rate</Text>
                  <Text className='font-medium'>
                    {formatCurrency({
                      amount: data.incomeHourlyRate!,
                      currency: data.currency,
                    })}
                  </Text>
                </div>
                <div className='flex justify-between items-center'>
                  <Text>Working Hours Per Day</Text>
                  <Text className='font-medium'>
                    {data.workingHoursPerDay!}
                  </Text>
                </div>
              </>
            )}
          </CardContent>
        </Card>
        <div className='flex flex-col gap-4'>
          <Card className='bg-primary/5 border-primary/20'>
            <CardHeader className='flex flex-row items-center gap-2 font-medium'>
              <TrendingUp className='text-primary' /> Income Summary
            </CardHeader>
            <CardContent className='flex flex-col gap-2'>
              <div className='flex justify-between items-center'>
                <Text>Employment Type</Text>
                <Badge>{data.incomeType}</Badge>
              </div>
              <Separator className='bg-primary/20' />
              {data.incomeType === IncomeType.FullTime && (
                <>
                  <div className='flex justify-between items-center'>
                    <Text>Monthly Income</Text>
                    <Text className='font-semibold flex items-center gap-2'>
                      {formatCurrency({
                        amount: data.incomeAmount!,
                        currency: data.currency,
                      })}
                    </Text>
                  </div>
                  <div className='flex justify-between items-center'>
                    <Text>Yearly Income</Text>
                    <Text className='font-semibold flex items-center gap-2'>
                      {formatCurrency({
                        amount: data.incomeAmount! * 12,
                        currency: data.currency,
                      })}
                    </Text>
                  </div>
                </>
              )}
              {data.incomeType === IncomeType.Contract && (
                <>
                  <div className='flex justify-between items-center'>
                    <Text>Hourly Rate</Text>
                    <Text className='font-semibold flex items-center gap-2'>
                      {formatCurrency({
                        amount: data.incomeHourlyRate!,
                        currency: data.currency,
                      })}
                    </Text>
                  </div>
                  <div className='flex justify-between items-center'>
                    <Text>
                      Monthly Income{" "}
                      <span className='text-primary capitalize font-medium'>
                        ({getCurrentMonthName(data.language)})
                      </span>
                    </Text>
                    <Text className='font-semibold flex items-center gap-2'>
                      {formatCurrency({
                        amount:
                          getWorkingHoursInCurrentMonth(
                            data.workingHoursPerDay!
                          ) * data.incomeHourlyRate!,
                        currency: data.currency,
                      })}
                    </Text>
                  </div>
                </>
              )}
              {data.incomeType === IncomeType.Business && (
                <div>TODO: Business income summary</div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center gap-2 font-medium'>
              <ChartBar className='text-primary' /> Quick Stats
            </CardHeader>
            <CardContent className='flex flex-col gap-2'>
              {data.incomeType === IncomeType.FullTime && (
                <>
                  <div className='flex justify-between items-center'>
                    <Text>Daily Income</Text>
                    <Text>
                      {formatCurrency({
                        amount:
                          data.incomeAmount! / getWorkingDaysInCurrentMonth(),
                        currency: data.currency,
                      })}
                    </Text>
                  </div>
                  <div className='flex justify-between items-center'>
                    <Text>Weekly Income</Text>
                    <Text>
                      {formatCurrency({
                        amount: data.incomeAmount! / 5,
                        currency: data.currency,
                      })}
                    </Text>
                  </div>
                </>
              )}
              {data.incomeType === IncomeType.Contract && (
                <>
                  <div className='flex justify-between items-center'>
                    <Text>Daily Income</Text>
                    <Text className='font-medium'>
                      {formatCurrency({
                        amount:
                          data.workingHoursPerDay! * data.incomeHourlyRate!,
                        currency: data.currency,
                      })}
                    </Text>
                  </div>
                  <div className='flex justify-between items-center'>
                    <Text>Weekly Income</Text>
                    <Text className='font-medium'>
                      {formatCurrency({
                        amount:
                          data.workingHoursPerDay! * data.incomeHourlyRate! * 5,
                        currency: data.currency,
                      })}
                    </Text>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
      {isProfileModalOpen && (
        <ProfileFormModal
          profile={data}
          isOpen={isProfileModalOpen}
          onOpenChange={setIsProfileModalOpen}
        />
      )}
    </>
  )
}
