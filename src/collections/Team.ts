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
      name: 'roleTier',
      type: 'select',
      required: true,
      defaultValue: '5',
      options: [
        { label: 'Tier 1 (President)', value: '1' },
        { label: 'Tier 2 (Vice President / Director)', value: '2' },
        { label: 'Tier 3 (Department Head)', value: '3' },
        { label: 'Tier 4 (Department Co-Head)', value: '4' },
        { label: 'Tier 5 (Regular Member)', value: '5' },
      ],
      admin: {
        description: 'Determines card size and placement on the website.',
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
    },
    {
      name: 'github',
      type: 'text',
      required: false,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}