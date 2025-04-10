import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required().error('A title is required for the category'),
    }),
    defineField({
      name: 'description',
      type: 'text',
      description: 'A brief description of what this category represents',
      validation: Rule => Rule.max(200).warning('Longer descriptions may not display well in the UI'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
