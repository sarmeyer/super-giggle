import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
      icon: DocumentTextIcon,
    },
    {
      name: 'metadata',
      title: 'Metadata',
      icon: DocumentTextIcon,
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required().error('A title is required for the post'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required().error('A slug is required for the post'),
    }),
    defineField({
      name: 'author',
      type: 'array',
      of: [{type: 'reference', to: {type: 'person'}}],
      validation: Rule => Rule.required().error('At least one author is required'),
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'The main image for the post. Use the hotspot to control how the image is cropped.',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: Rule => Rule.required().error('At least one category is required'),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      validation: Rule => Rule.required().error('A publication date is required'),
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      validation: Rule => Rule.required().error('Post content is required'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.0.name',
      media: 'mainImage',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {author, publishedAt} = selection
      return {
        ...selection,
        subtitle: author && `by ${author}${publishedAt ? ` • ${new Date(publishedAt).toLocaleDateString()}` : ''}`,
      }
    },
  },
})
