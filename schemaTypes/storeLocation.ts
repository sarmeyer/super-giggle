import {defineField, defineType} from 'sanity'
import {PinIcon} from '@sanity/icons'

export const storeLocationType = defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  icon: PinIcon,
  groups: [
    {
      name: 'details',
      title: 'Details',
      default: true,
      icon: PinIcon,
    },
    {
      name: 'hours',
      title: 'Hours',
      icon: PinIcon,
    },
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required().error('A store name is required'),
    }),
    defineField({
      name: 'address',
      type: 'object',
      fields: [
        defineField({
          name: 'street',
          type: 'string',
          validation: Rule => Rule.required().error('Street address is required'),
        }),
        defineField({
          name: 'city',
          type: 'string',
          validation: Rule => Rule.required().error('City is required'),
        }),
        defineField({
          name: 'state',
          type: 'string',
          validation: Rule => Rule.required().error('State is required'),
        }),
        defineField({
          name: 'zipCode',
          type: 'string',
          validation: Rule => Rule.required().error('ZIP code is required'),
        }),
        defineField({
          name: 'country',
          type: 'string',
          validation: Rule => Rule.required().error('Country is required'),
        }),
      ],
    }),
    defineField({
      name: 'location',
      type: 'geopoint',
      description: 'Geographic coordinates of the store location',
      validation: Rule => Rule.required().error('Geographic location is required'),
    }),
    defineField({
      name: 'phone',
      type: 'string',
      validation: Rule => Rule.required().error('Phone number is required'),
    }),
    defineField({
      name: 'hours',
      type: 'array',
      group: 'hours',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'day',
              type: 'string',
              options: {
                list: [
                  {title: 'Monday', value: 'monday'},
                  {title: 'Tuesday', value: 'tuesday'},
                  {title: 'Wednesday', value: 'wednesday'},
                  {title: 'Thursday', value: 'thursday'},
                  {title: 'Friday', value: 'friday'},
                  {title: 'Saturday', value: 'saturday'},
                  {title: 'Sunday', value: 'sunday'},
                ],
                layout: 'radio',
              },
              validation: Rule => Rule.required().error('Day is required'),
            }),
            defineField({
              name: 'opening',
              type: 'string',
              validation: Rule => Rule.required().error('Opening time is required'),
            }),
            defineField({
              name: 'closing',
              type: 'string',
              validation: Rule => Rule.required().error('Closing time is required'),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Store image. Use the hotspot to control how the image is cropped.',
    }),
    defineField({
      name: 'amenities',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Parking', value: 'parking'},
          {title: 'Wi-Fi', value: 'wifi'},
          {title: 'Wheelchair Accessible', value: 'wheelchair'},
        ],
        layout: 'list',
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'address.city',
      media: 'image',
    },
  },
}) 