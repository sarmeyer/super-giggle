import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const personType = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: UserIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
      icon: UserIcon,
    },
    {
      name: 'contact',
      title: 'Contact',
      icon: UserIcon,
    },
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required().error('A name is required for the person'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required().error('A slug is required for the person'),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Profile image. Use the hotspot to control how the image is cropped.',
    }),
    defineField({
      name: 'role',
      type: 'string',
      description: 'The person\'s role or title (e.g., Author, Store Manager, etc.)',
      validation: Rule => Rule.required().error('A role is required for the person'),
    }),
    defineField({
      name: 'bio',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
      description: 'Biography or description of the person',
    }),
    defineField({
      name: 'contact',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({
          name: 'email',
          type: 'string',
          validation: Rule => Rule.email().error('Please enter a valid email address'),
        }),
        defineField({
          name: 'phone',
          type: 'string',
        }),
        defineField({
          name: 'website',
          type: 'url',
          validation: (Rule: any) => Rule.uri().error('Please enter a valid URL'),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})
