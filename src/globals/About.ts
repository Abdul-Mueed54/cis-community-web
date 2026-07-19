import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true, // Publicly readable for the frontend
  },
  admin: {
    group: 'Pages', // Groups it neatly in the sidebar
  },
  fields: [
    // 1. THE HERO / MANIFESTO
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'manifesto',
          type: 'text',
          required: true,
          admin: { description: 'A short, punchy 1-2 sentence vision statement.' },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          admin: { description: 'Keep it to two short paragraphs max. No bloat!' },
        },
      ],
    },

    // 2. THE FOCAL PERSON
    {
      name: 'focalPerson',
      type: 'group',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'title', type: 'text', defaultValue: 'Focal Person', required: true },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        {
          name: 'quote',
          type: 'textarea',
          required: true,
          admin: { description: 'A short quote about the vision or impact of the community.' },
        },
      ],
    },

    // 3. THE VISIONARIES (Founders)
    {
      name: 'founders',
      type: 'array',
      label: 'Founders & Co-Founders',
      minRows: 1,
      fields: [
        { name: 'name', type: 'text', required: true },
        {
          name: 'role',
          type: 'select',
          required: true,
          options: [
            { label: 'Founder', value: 'founder' },
            { label: 'Co-Founder', value: 'co_founder' },
          ],
        },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'linkedin', type: 'text', admin: { description: 'Optional LinkedIn URL' } },
      ],
    },
  ],
}