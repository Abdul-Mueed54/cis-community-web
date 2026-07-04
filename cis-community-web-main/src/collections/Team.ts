import type { CollectionConfig } from 'payload'

export const Team: CollectionConfig = {
  slug: 'team',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g., President, Tech Lead, Event Manager',
      }
    },
    {
      name: 'linkedin',
      type: 'text',
      required: false,
      admin: {
        description: 'LinkedIn Profile URL',
      }
    },
    {
      name: 'github',
      type: 'text',
      required: false,
      admin: {
        description: 'GitHub Profile URL',
      }
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}
