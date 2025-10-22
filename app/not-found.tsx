import Link from 'next/link'
import { ROUTES } from '@/lib/routes'

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={ROUTES.Landing()}>Return Home</Link>
    </div>
  )
}
