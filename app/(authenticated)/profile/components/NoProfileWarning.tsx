"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"
import type { UserProfile } from "@/prisma/generated/prisma-client"

const ProfileFormModal = dynamic(
  () => import("./ProfileFormModal").then((mod) => mod.ProfileFormModal),
  {
    ssr: false,
  }
)

type NoProfileWarningProps = {
  profile: UserProfile | null
}

export const NoProfileWarning = ({ profile }: NoProfileWarningProps) => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

  return (
    <section className='flex grow flex-col justify-center items-center'>
      <Heading variant='h3'>You haven't set up your profile yet</Heading>
      <Text variant='mutedText'>
        To get started, please fill out your profile information.
      </Text>
      <Button className='mt-4' onClick={() => setIsProfileModalOpen(true)}>
        Create Profile
      </Button>
      {isProfileModalOpen && (
        <ProfileFormModal
          profile={profile}
          isOpen={isProfileModalOpen}
          onOpenChange={setIsProfileModalOpen}
        />
      )}
    </section>
  )
}
