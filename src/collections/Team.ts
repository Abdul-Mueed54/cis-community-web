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
      name: 'department',
      type: 'select',
      required: true,
      defaultValue: 'executive_board',
      options: [
        { label: 'Executive Board', value: 'executive_board' },
        { label: 'Co-operation & Marketing', value: 'cooperation_marketing' },
        { label: 'Coding & Innovation', value: 'coding_innovation' },
        { label: 'Media', value: 'media' },
        { label: 'Publisher', value: 'publisher' },
      ],
      admin: {
        description: 'Select the department for this team member',
      }
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
