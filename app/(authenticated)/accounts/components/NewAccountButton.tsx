"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const UpsertAccountModal = dynamic(
  () => import("./UpsertAccountModal").then((mod) => mod.UpsertAccountModal),
  { ssr: false }
)

export const NewAccountButton = () => {
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsNewAccountModalOpen(true)}>
        New Account
      </Button>
      {isNewAccountModalOpen && (
        <UpsertAccountModal
          isOpen={isNewAccountModalOpen}
          onOpenChange={setIsNewAccountModalOpen}
        />
      )}
    </>
  )
}
