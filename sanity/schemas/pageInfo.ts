import {defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'backgroundInformation',
      title: 'BackgroundInformation',
      type: 'string',
    },
    {
      name: 'profilePic',
      title: 'ProfilePic',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'socials'}}],
    },
  ],
})

///////////////////////////////////////////////////////////////////////
// SCHEME FOR BLOG POSTS
// defineField({
//   name: 'title',
//   title: 'Title',
//   type: 'string',
// }),
// defineField({
//   name: 'slug',
//   title: 'Slug',
//   type: 'slug',
//   options: {
//     source: 'title',
//     maxLength: 96,
//   },
// }),
// defineField({
//   name: 'author',
//   title: 'Author',
//   type: 'reference',
//   to: {type: 'author'},
// }),
// defineField({
//   name: 'mainImage',
//   title: 'Main image',
//   type: 'image',
//   options: {
//     hotspot: true,
//   },
// }),
// defineField({
//   name: 'categories',
//   title: 'Categories',
//   type: 'array',
//   of: [{type: 'reference', to: {type: 'category'}}],
// }),
// defineField({
//   name: 'publishedAt',
//   title: 'Published at',
//   type: 'datetime',
// }),
// defineField({
//   name: 'body',
//   title: 'Body',
//   type: 'blockContent',
// }),

// preview: {
//   select: {
//     title: 'title',
//     author: 'author.name',
//     media: 'mainImage',
//   },
//   prepare(selection) {
//     const {author} = selection
//     return {...selection, subtitle: author && `by ${author}`}
//   },
// },
