import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events', // This becomes your API endpoint (/api/events)
  admin: {
    useAsTitle: 'title', // What shows up in the admin panel list
  },
  access: {
    // We want the public to be able to read events on your website without logging in
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'tag',
      type: 'select',
      options: ['Seminar', 'Competition', 'Workshop', 'Meetup'],
      defaultValue: 'Workshop',
      required: true,
    },
  ],
}