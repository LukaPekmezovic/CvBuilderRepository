import { Person } from 'lp-project-1/components/cv';

export const person: Person = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  title: 'Developer',
  summary: `summary.`,
  contactInformation: [
    {
      label: 'johndoe@gmail.com',
      href: 'johndoe@gmail.com',
    },
  ],
  education: [
    {
      institution: {
        label: 'School of Electrical Engineering, University of Belgrade',
        href: 'https://www.etf.bg.ac.rs/en',
      },

      description: 'Software and Data Engineering',
      dateRange: {
        from: new Date(),
        to: new Date(),
      },
    },
  ],
  skills: [
    {
      title: 'Node.js',
      description: 'Express APIs, Web Sockets, NestJS, TypeScript',
    },
  ],
  workExperience: [
    {
      company: {
        label: 'Company 1',
        href: '#',
      },

      location: 'Belgrade',
      title: 'Technical Manager & Lead Developer',
      dateRange: {
        from: new Date(),
        to: new Date(),
      },
      description: `I was the team leader for a group of developers and responsible for devising strategic plans and organizing workflow.
      One of my major achievements was leading the creation of a comprehensive safety management system that aimed to enhance driver
      safety in the trucking industry. Working independently, I designed and developed the system from scratch, resulting in a platform
      consisting of 40 intricately constructed modules that enable real-time data transmission seamlessly.`,
      skills: [
        {
          title:
            'Demonstrated skills: Node.js, NestJS, TypeORM, Microservices, Digital Ocean, TypeScript, Protocol Buffers (GRPC)',
          description: 'desc',
        },
      ],
    },
  ],
  custom: [
    {
      title: 'title',
      location: 'location',
      description: 'desc',
    },
  ],
};
