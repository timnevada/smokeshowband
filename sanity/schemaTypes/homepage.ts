import { defineField, defineType } from 'sanity';

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
