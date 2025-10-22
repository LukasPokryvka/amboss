import { MonthHeader } from './components/MonthHeader'

const DashboardPage = async ({
  params
}: {
  params: Promise<{ lang: 'en' | 'sk' }>
}) => {
  const { lang } = await params

  return (
    <>
      <MonthHeader lang={lang} />
    </>
  )
}

export default DashboardPage
