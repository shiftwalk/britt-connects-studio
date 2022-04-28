export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'defaultImage',
      description: 'The main hero image',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Text',
      name: 'heroText',
      type: 'text',
      rows: 6,
      description: 'The short intro paragraph that appears in the hero',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Roles',
      name: 'heroServices',
      type: 'array', 
      description: 'The list of roles in the hero, eg: "Creative Directors", "Motion Designers" etc.',
      of: [{
        type: 'string',
        validation: Rule => Rule.required()
      }],
      validation: Rule => Rule.required()
    },
    {
      title: 'Bio Image',
      name: 'bioImage',
      type: 'defaultImage',
      description: 'The image used in the "Bio" overlay',
      validation: Rule => Rule.required()
    },
    {
      title: 'Bio Heading',
      name: 'bioHeading',
      type: 'text',
      rows: 3,
      description: 'The heading used in the "Bio" overlay',
      validation: Rule => Rule.required()
    },
    {
      title: 'Bio Text',
      name: 'bioText',
      type: 'text',
      rows: 4,
      description: 'The text used in the "Bio" overlay',
      validation: Rule => Rule.required()
    },
    {
      title: 'We Work With',
      name: 'weWorkWith',
      type: 'array', 
      description: 'The list of people we work with',
      of: [{
        title: 'Person',
        name: 'person',
        type: 'object',
        fields: [
          {
            title: 'Title',
            name: 'title',
            type: 'string',
            description: 'eg: "Agencies"',
            validation: Rule => Rule.required()
          },
          {
            title: 'Text',
            name: 'text',
            type: 'string',
            description: 'eg: "The biggest players in Search, Social, and Commerce..."',
            validation: Rule => Rule.required()
          }
        ],
        preview: {
          select: {
            title: 'title',
            text: 'text'
          },
          prepare(selection) {
            const {title, text} = selection
            return {
              title: title,
              subtitle: text
            }
          }
        }
      }],
      validation: Rule => Rule.required()
    },
    {
      title: 'Ethos & Clients Text',
      name: 'ethosAndClientsText',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Clients',
      name: 'clients',
      type: 'array', 
      description: 'The list of clients, eg: "Google", "MediaMonks" etc.',
      of: [{
        type: 'string',
        validation: Rule => Rule.required()
      }],
      validation: Rule => Rule.required()
    },
    {
      title: 'Image Carousel',
      name: 'imageCarousel',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'defaultImage',
          title: 'Image',
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      title: 'Roles Filled',
      name: 'rolesFilled',
      type: 'array', 
      description: 'The list of roles filled',
      of: [{
        title: 'Person',
        name: 'person',
        type: 'object',
        fields: [
          {
            title: 'Title',
            name: 'title',
            type: 'string',
            description: 'eg: "Managing Director"',
            validation: Rule => Rule.required()
          },
          {
            title: 'Type',
            name: 'type',
            type: 'string',
            description: 'eg: "Leadership"',
            validation: Rule => Rule.required()
          },
          {
            title: 'Client',
            name: 'client',
            type: 'string',
            description: 'eg: "MediaMonks"',
            validation: Rule => Rule.required()
          },
          {
            title: 'Year',
            name: 'year',
            type: 'string',
            description: 'eg: "2022"',
            validation: Rule => Rule.required()
          }
        ],
        preview: {
          select: {
            title: 'title',
            type: 'type',
            client: 'client',
            year: 'year'
          },
          prepare(selection) {
            const {title, type, client, year} = selection
            return {
              title: title,
              subtitle: `${type} - ${client} - ${year}`
            }
          }
        }
      }],
      validation: Rule => Rule.required()
    },
    {
      title: 'Quote',
      name: 'quote',
      type: 'object',
      description: 'Quote details for the "Kind Words" section',
      fields: [
        {
          title: 'Text',
          name: 'text',
          type: 'text',
          rows: 3,
          description: 'eg: "Britt has an incredible knack of reading between..."',
          validation: Rule => Rule.required()
        },
        {
          title: 'Author',
          name: 'author',
          type: 'string',
          description: 'eg: "Kelly Wu"',
          validation: Rule => Rule.required()
        },
        {
          title: 'Role',
          name: 'role',
          type: 'string',
          description: 'eg: "Recruitment Lead, Google"',
          validation: Rule => Rule.required()
        }
      ],
      preview: {
        select: {
          text: 'text',
          author: 'author',
          role: 'role',
        },
        prepare(selection) {
          const {text, author, role} = selection
          return {
            title: text,
            subtitle: `${author} - ${role}`
          }
        }
      }
    },
    {
      title: 'Get Started Clients Text',
      name: 'getStartedClientsText',
      type: 'text',
      rows: 4,
      description: 'The text for the "Clients" section of "Get Started" area',
      validation: Rule => Rule.required()
    },
    {
      title: 'Get Started Talent Text',
      name: 'getStartedTalentText',
      type: 'text',
      rows: 4,
      description: 'The text for the "Talent" section of "Get Started" area',
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}