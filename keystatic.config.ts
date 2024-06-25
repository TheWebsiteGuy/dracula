import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        featuredImage: fields.image({
          label: 'Featured Image',
          directory: 'src/assets/images/portfolio',
          publicPath: 'src/assets/images/portfolio/', 
        }),
        title: fields.slug({ name: { label: 'Title' } }),
        pubDate: fields.date({ label: 'Published date' }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '@assets/images/posts/'
            },
          },
        }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      schema: {
        featuredImage: fields.image({
          label: 'Featured Image',
          directory: 'src/assets/images/portfolio',
          publicPath: 'src/assets/images/portfolio/', 
        }),
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '@assets/images/posts/'
            },
          },
        }),
      },
    }),
  },
});
