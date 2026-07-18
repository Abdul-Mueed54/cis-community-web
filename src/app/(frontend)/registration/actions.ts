'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function submitRegistration(formData: FormData) {
  try {
    const payload = await getPayload({ config: configPromise })

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const studentId = formData.get('studentId') as string
    const department = formData.get('department') as string
    const reason = formData.get('reason') as string

    if (!name || !email || !studentId || !department) {
      return { success: false, error: 'Please fill in all required fields.' }
    }

    // @ts-ignore
    await payload.create({
      // @ts-ignore
      collection: 'member-registrations',
      data: {
        name,
        email,
        studentId,
        department,
        reason,
      } as any,
    })

    return { success: true }
  } catch (error) {
    console.error('Registration submission error:', error)
    return { success: false, error: 'Failed to submit registration. Please try again later.' }
  }
}
