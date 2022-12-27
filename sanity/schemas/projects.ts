import {defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    },
    {
      name: 'projectImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'projectImageDark',
      title: 'DarkImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skills'}}],
    },
    {
      name: 'linkToDemo',
      title: 'LinkToDemo',
      type: 'url',
    },
    {
      name: 'linkToGithub',
      title: 'LinkToGithub',
      type: 'url',
    },
    {
      name: 'linkToBlog',
      title: 'LinkToBlog',
      type: 'url',
    },
  ],
})
