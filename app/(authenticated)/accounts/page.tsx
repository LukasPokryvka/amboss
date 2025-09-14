import { Suspense } from "react"
import { Heading } from "@/components/ui/heading"
import { fetchAccounts } from "../actions/accounts.action"
import { fetchCurrentNetWorth } from "../actions/netWorth.action"
import { Accounts } from "./components/Accounts"
import { AccountsHeader } from "./components/AccountsHeader"
import { NewAccountButton } from "./components/NewAccountButton"

const AccountsPage = () => {
  const totalNetWorth = fetchCurrentNetWorth()
  const accounts = fetchAccounts()

  return (
    <>
      <div className='flex items-baseline justify-between'>
        <Heading variant='h1'>Accounts</Heading>
        <NewAccountButton />
      </div>
      <section className='flex flex-col gap-4'>
        <Suspense fallback={<div>Loading...</div>}>
          <AccountsHeader totalNetWorth={totalNetWorth} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Accounts accounts={accounts} />
        </Suspense>
      </section>
    </>
  )
}

export default AccountsPage
