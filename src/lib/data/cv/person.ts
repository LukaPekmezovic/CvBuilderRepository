import { Person } from 'lp-project-1/components/cv';

export const person: Person = {
  id: '1',
  firstName: 'Jovan',
  lastName: 'Dovic',
  title: 'Developer',
  summary: `I'm amazing`,
  contactInformation: {
    links: [
      {
        label: 'jovandovic@yahoo.com',
        href: 'jovandovic@gmail.com',
      },
    ],
  },
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
    {
      title: 'React',
      description: 'Redux, Next.js, RxJs',
    },
    {
      title: 'GraphQL',
      description:
        'Apollo, Federation, Apollo React State Management, Apollo Server',
    },
    {
      title: 'REST APIs',
      description: '',
    },
    {
      title: 'Microservices',
      description: 'gRPC, Kafka, RabbitMQ, Redis Pub/Sub',
    },
    {
      title: 'Relational & Document-oriented Databases',
      description: 'MySQL, PostgreSQL, MongoDB',
    },
    {
      title: 'Virtualization & Containerization',
      description: 'Docker & Kubernetes',
    },
    {
      title: 'Software Architecture ',
      description:
        'SOLID, MVC, DDD and OOP Design Patterns, Event-Driven and Functional Paradigm',
    },
    {
      title: 'PHP & Frameworks',
      description:
        '(Laravel & Symfony)Debugging, Profiling & Performance Testing',
    },
    {
      title: 'Planning, Modeling & Documenting Software',
      description: '',
    },
    {
      title: 'Git',
      description: '',
    },
    {
      title: 'AWS & Google Cloud',
      description: '(EC2, RDS, DynamoDB, S3, SQS, ECR, SNS, CloudFront)',
    },
    {
      title: 'Scrum (Agile) and WaterfallMethodologies',
      description: '',
    },
    {
      title: 'Linux, Bash scripting & Deployments',
      description: '',
    },
    {
      title: 'HTML5 & CSS3',
      description: '',
    },
  ],
  workExperience: [
    {
      company: {
        label: 'Amazing Company',
        href: '#',
      },

      location: 'Belgrade',
      title: 'Technical Manager & Lead Developer',
      dateRange: {
        from: new Date(),
        to: new Date(),
      },
      description: `I served as a team leader for a group of developers, assuming responsibility for devising strategic plans and organizing
      workflow. Specifically, I spearheaded the creation of a comprehensive safety management system geared toward enhancing
      driver safety in the trucking industry. Acting autonomously, I designed and developed the system from scratch, ultimately
      producing a platform comprising 40 intricately constructed modules that seamlessly facilitate the real-time transmission of data.`,
      skills: [
        {
          title:
            'Demonstrated skills: Node.js, NestJS, TypeORM, Microservices, Digital Ocean, TypeScript, Protocol Buffers (GRPC)',
          description: 'desc',
        },
      ],
    },
  ],
};
