import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'date', 'tag'],
  },
  access: {
    read: () => true, // Publicly readable for the frontend
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // ==========================================
        // TAB 1: CORE DETAILS
        // ==========================================
        {
          label: 'Core Details',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'slug',
              type: 'text',
              required: true,
              unique: true,
              admin: {
                description: 'Used for the URL (e.g., annual-cis-hackathon-2026). Use lowercase and hyphens.',
              },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'status',
                  type: 'select',
                  required: true,
                  defaultValue: 'upcoming',
                  options: [
                    { label: 'Upcoming / Registration Live', value: 'upcoming' },
                    { label: 'Completed / Archived', value: 'completed' },
                  ],
                },
                {
                  name: 'tag',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'Hackathon', value: 'Hackathon' },
                    { label: 'Workshop', value: 'Workshop' },
                    { label: 'Seminar', value: 'Seminar' },
                    { label: 'Meetup', value: 'Meetup' },
                    { label: 'Competition', value: 'Competition' },
                  ],
                },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'date', type: 'date', required: true },
                { name: 'time', type: 'text', required: true, admin: { placeholder: 'e.g., 09:00 AM - 05:00 PM' } },
              ],
            },
            {
              name: 'venue',
              type: 'text',
              required: true,
              admin: { placeholder: 'e.g., CIS Department Lab 1 & 2' },
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              admin: {
                description: 'Short summary for the main events listing card (1-2 sentences max).',
              },
            },
          ],
        },
        // ==========================================
        // TAB 2: PRE-EVENT CONTENT
        // ==========================================
        {
          label: 'Pre-Event (Publicity)',
          fields: [
            {
              name: 'about',
              type: 'textarea',
              admin: {
                description: 'Detailed description of the event for the dedicated event page.',
              },
            },
            {
              name: 'registrationLink',
              type: 'text',
              admin: {
                description: 'External link to Google Form, Typeform, etc.',
              },
            },
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Main promotional banner for the event.',
              },
            },
          ],
        },
        // ==========================================
        // TAB 3: POST-EVENT ARCHIVE
        // ==========================================
        {
          label: 'Post-Event (Archive)',
          description: 'These fields are only relevant after the event has concluded.',
          fields: [
            {
              name: 'insights',
              type: 'textarea',
              admin: {
                description: 'The story/recap of how the event went.',
              },
            },
            {
              name: 'winners',
              type: 'text',
              admin: {
                description: 'Optional: Name of the winning team/individuals.',
              },
            },
            {
              name: 'videoLink',
              type: 'text',
              admin: {
                description: 'YouTube link for the event recording.',
              },
            },
            {
              name: 'insightsImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'The massive hero image used for the recap section.',
              },
            },
            {
              name: 'gallery',
              type: 'array',
              label: 'Photo Gallery',
              minRows: 0,
              maxRows: 15,
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}