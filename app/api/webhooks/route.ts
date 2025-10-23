import { verifyWebhook } from '@clerk/nextjs/webhooks'
import type { NextRequest } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)

    switch (evt.type) {
      case 'user.created':
        await prisma.user.create({
          data: {
            clerkId: evt.data.id,
            email: evt.data.email_addresses[0].email_address,
            firstName: evt.data.first_name,
            lastName: evt.data.last_name
          }
        })
        break
      case 'user.updated':
        await prisma.user.update({
          where: { clerkId: evt.data.id },
          data: {
            email: evt.data.email_addresses[0].email_address,
            firstName: evt.data.first_name,
            lastName: evt.data.last_name
          }
        })
        break
      case 'user.deleted':
        await prisma.user.delete({
          where: { clerkId: evt.data.id }
        })
        break
      default:
        return new Response('Unhandled event type', { status: 400 })
    }

    return new Response('Webhook received', { status: 200 })
  } catch {
    return new Response('Error verifying webhook', { status: 400 })
  }
}
