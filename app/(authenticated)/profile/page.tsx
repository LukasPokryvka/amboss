import { Suspense } from "react"
import { Heading } from "@/components/ui/heading"
import { fetchUserProfile } from "../actions/userProfile.action"
import { UserProfileView } from "./components/UserProfileView"

const ProfilePage = () => {
  const userProfile = fetchUserProfile()

  return (
    <>
      <Heading variant='h1'>Profile</Heading>
      <Suspense fallback={<div>Loading...</div>}>
        <UserProfileView profile={userProfile} />
      </Suspense>
    </>
  )
}

export default ProfilePage
