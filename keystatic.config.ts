import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    hero: singleton({
      label: 'Hero Section',
      path: 'src/content/hero/data',
      schema: {
        headline: fields.text({ label: 'Headline' }),
        subheadline: fields.text({ label: 'Subheadline' }),
        description: fields.text({ label: 'Description', multiline: true }),
        avatar: fields.image({
          label: 'Avatar Image',
          directory: 'public/images/avatar',
          publicPath: '/images/avatar/',
        }),
        primaryCtaText: fields.text({ label: 'Primary CTA Text' }),
        primaryCtaLink: fields.text({ label: 'Primary CTA Link' }),
        secondaryCtaText: fields.text({ label: 'Secondary CTA Text' }),
        secondaryCtaLink: fields.text({ label: 'Secondary CTA Link' }),
        availableForHire: fields.checkbox({ label: 'Available for Hire', defaultValue: true }),
      },
    }),
    about: singleton({
      label: 'About Section',
      path: 'src/content/about/data',
      schema: {
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Short Description', multiline: true }),
        longDescription1: fields.text({ label: 'Long Description Paragraph 1', multiline: true }),
        longDescription2: fields.text({ label: 'Long Description Paragraph 2', multiline: true }),
        yearsExperience: fields.text({ label: 'Years Experience' }),
        projectsCompleted: fields.text({ label: 'Projects Completed' }),
        commitment: fields.text({ label: 'Commitment' }),
        support: fields.text({ label: 'Support' }),
      },
    }),
    contact: singleton({
      label: 'Contact Section',
      path: 'src/content/contact/data',
      schema: {
        title: fields.text({ label: 'Title' }),
        subtitle: fields.text({ label: 'Subtitle' }),
        email: fields.text({ label: 'Email' }),
        phone: fields.text({ label: 'WhatsApp/Phone' }),
        github: fields.text({ label: 'GitHub Link' }),
        website: fields.text({ label: 'Website Link' }),
        instagram: fields.text({ label: 'Instagram Link' }),
      },
    }),
  },
  collections: {
    skills: collection({
      label: 'Skills',
      slugField: 'name',
      path: 'src/content/skills/*',
      schema: {
        name: fields.slug({ name: { label: 'Skill Name' } }),
        icon: fields.text({ label: 'Icon Name (Simple Icons/Phosphor)' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Device', value: 'Device' },
            { label: 'Connectivity', value: 'Connectivity' },
            { label: 'Backend', value: 'Backend' },
            { label: 'Frontend', value: 'Frontend' },
            { label: 'Other', value: 'Other' },
          ],
          defaultValue: 'Other',
        }),
        color: fields.text({ label: 'Color Class (Tailwind)' }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      schema: {
        title: fields.slug({ name: { label: 'Project Title' } }),
        image: fields.image({
          label: 'Project Image',
          directory: 'public/images/projects',
          publicPath: '/images/projects/',
        }),
        description: fields.text({ label: 'Description', multiline: true }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tech Stack Tags' }),
        github: fields.text({ label: 'GitHub Link' }),
        demo: fields.text({ label: 'Live Demo Link' }),
        imageClass: fields.text({ label: 'Image Gradient Class' }),
      },
    }),
    experience: collection({
      label: 'Experience',
      slugField: 'role',
      path: 'src/content/experience/*',
      schema: {
        role: fields.slug({ name: { label: 'Role' } }),
        company: fields.text({ label: 'Company' }),
        period: fields.text({ label: 'Period' }),
        description: fields.text({ label: 'Description', multiline: true }),
      },
    }),
    articles: collection({
      label: 'Articles',
      slugField: 'title',
      path: 'src/content/articles/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.date({ label: 'Published Date' }),
        description: fields.text({ label: 'Short Description', multiline: true }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/articles',
          publicPath: '/images/articles/',
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/articles/content',
            publicPath: '/images/articles/content/',
          },
        }),
      },
    }),
  },
});
