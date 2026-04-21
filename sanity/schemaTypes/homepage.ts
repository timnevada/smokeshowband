import { defineArrayMember, defineField, defineType } from 'sanity';

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      initialValue: 'SmokeShow',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      initialValue: 'SmokeShow',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
      initialValue: 'A minimal home for the band. Music, announcements, and whatever comes next.',
    }),
    defineField({
      name: 'primaryLink',
      title: 'Primary link',
      type: 'object',
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'href', type: 'url' }),
      ],
    }),
    defineField({
      name: 'secondaryLink',
      title: 'Secondary link',
      type: 'object',
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'href', type: 'url' }),
      ],
    }),
    defineField({
      name: 'showsHeading',
      title: 'Shows heading',
      type: 'string',
      initialValue: 'Upcoming shows',
    }),
    defineField({
      name: 'shows',
      title: 'Shows',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'show',
          title: 'Show',
          type: 'object',
          fields: [
            defineField({
              name: 'venue',
              title: 'Venue',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'city',
              title: 'City',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'streetAddress',
              title: 'Street address',
              type: 'string',
            }),
            defineField({
              name: 'date',
              title: 'Date',
              type: 'date',
              options: { dateFormat: 'MMMM D, YYYY' },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'time',
              title: 'Time',
              type: 'string',
              description: 'Example: 8:00 PM',
            }),
            defineField({
              name: 'details',
              title: 'Details',
              type: 'string',
              description: 'Optional text like All Ages, Tickets On Sale, etc.',
            }),
            defineField({
              name: 'ticketLink',
              title: 'Ticket link',
              type: 'url',
            }),
          ],
          preview: {
            select: {
              title: 'venue',
              subtitle: 'city',
              date: 'date',
            },
            prepare({ title, subtitle, date }) {
              return {
                title: title || 'Untitled show',
                subtitle: [subtitle, date].filter(Boolean).join(' • '),
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'footerText',
      title: 'Footer text',
      type: 'string',
      initialValue: 'Site and CMS are now connected. Replace this with something real.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
  },
});
