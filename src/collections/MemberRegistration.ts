import type { CollectionConfig } from 'payload'

export const MemberRegistrations: CollectionConfig = {
  slug: 'member-registrations',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'department', 'createdAt'],
  },
  access: {
    read: () => true,
    create: () => true, // Allow public submissions
    update: () => false,
    delete: () => false,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'studentId',
      type: 'text',
      required: true,
    },
    {
      name: 'department',
      type: 'text',
      required: true,
    },
    {
      name: 'reason',
      type: 'textarea',
      required: false,
    },
  ],
}
