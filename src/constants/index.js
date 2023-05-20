import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Developer',
    icon: web,
  },
  {
    title: 'Sales',
    icon: mobile,
  },
  {
    title: 'Comedian wannabe',
    icon: backend,
  },
  {
    title: 'Content Creator-ish',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'kinda obsessed about bikes',
    company_name: 'Me',
    icon: 'https://media.licdn.com/dms/image/C5603AQHW9cNHxYp2mQ/profile-displayphoto-shrink_800_800/0/1654723613432?e=1689811200&v=beta&t=P7ctVSXUKD3Xgv8gZNqw8A5O-5MNY_9EEX-hatoMXXI',
    iconBg: '#E6DEDD',
    date: '2010 - Present',
    points: [
      'Had 7+ jobs/sideHustles in high school to pay for this expensive hobby...',
      'Raced road/xc for UCSB Cycling team',
      'Worked as a bike mechanic at 4 different bike shops (mainly for the employee discount)',
      'Worked as a bike messenger in SF one summer (got lots of base miles but did punched a car once) ',
      'Got involved with alternative transportation stuffs on campus, and convinced a group of people to let me lead a committee that manages a $1M+ annual budget to build bike infrastructures on campus',
      ,
      "Currently have 6.5 bikes (2 road, 1 cyclocross, 1 full sus xc, 1 enduro, 1 emtb, and a unicycle that I still haven't learned how to ride)",
    ],
  },
  {
    title: 'Accountant',
    company_name: 'B-Stock Solutions',
    icon: 'https://media.licdn.com/dms/image/C4E0BAQGniaetWq-qjg/company-logo_200_200/0/1519912242751?e=1692835200&v=beta&t=HDwb69WjtMf-8RDG8Cs2xuL8a9duHz7qf1oDeTViK3s',
    iconBg: '#383E56',
    date: '2018ish, Right after graduating from a place where you paid a lot of money and spend 4 years just to get a piece of paper',
    points: [
      'Quit after a week of staring at Excel spreadsheets and doing arithmetics (the boring kind)',
      'would not recommend learning accounting in high school and then spend 4 more years trying to memorize arbitrary rules just to pass the CPA exam so you can help rich people avoid paying taxes',
    ],
  },
  {
    title: 'Sales',
    company_name: 'bunch of tech startups',
    icon: 'https://media.licdn.com/dms/image/C4E0BAQG6SXlwd6twZQ/company-logo_200_200/0/1618931926436?e=1692835200&v=beta&t=fyG-Y3AuRBUksMikC4n-t26m9JZkMa_0KFkjg4Ho4D0',
    iconBg: '#E6DEDD',
    date: '2019 - 2023',
    points: [
      'The usual cold calling, email spamming, linkedin/myspace connecting.',
      'Quit the first 2 jobs, seasonal depression sucks. But got laid off with decent severance from the last one :)',
      'Accidentally learned how to code on CodeAcademy.com',
      'Automated a lot of things, which made me realized that I need something else that is more challenging/fun',
    ],
  },
  {
    title: 'Relearning how to code',
    company_name: 'Me',
    icon: 'https://media.licdn.com/dms/image/C560BAQFmuLSyL1nlPA/company-logo_200_200/0/1678231358774?e=1692835200&v=beta&t=NXHtcszbgIKV57945CJC9nUuThlHzla7a4YIjfc4rY8',
    iconBg: '#383E56',
    date: 'early 2023',
    points: [
      'Learned the MERN stack and best practices to build a full feature shooping™ ecommerce website',
      "Started to interview, but realized that I don't like to do low level coding and/or work for someone else",
    ],
  },
  {
    title: 'Solopreneur',
    company_name: 'SideQuest',
    icon: 'https://media.licdn.com/dms/image/D560BAQEM3gNnqNqk5w/company-logo_100_100/0/1681605993055?e=1692835200&v=beta&t=-xeFLLEsigK-RA8i3Fxydrd5ctZjOTu49Y_2UAcm-70',
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Built Cockblock, gmail addon that detects and filter out incoming sales emails, not yet in production',
      'Started SideQuest podcast because I was really bored and needed an excuse to talk to cool people, first episode coming out soon',
      'kinda ran out of money...',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Kevin was, without question, the leader of our group. He ensured everyone was progressing on their parts of the project well before their deadlines and took on a significant workload himself. His piece on the Economic Outlook and Climate of the Entertainment Industry drew high praise from our professor, indicating his incredible work ethic and dedication',
    name: 'Trevor Puccini',
    designation: 'Software Engineer',
    company: 'Shopify',
    image:
      'https://media.licdn.com/dms/image/C5603AQFqKi9Z54Whtw/profile-displayphoto-shrink_800_800/0/1607471272443?e=1689811200&v=beta&t=ovkHda-7glYUeT7co2UvvboCxaeLpqt7a0sN0K35F8c',
  },
  {
    testimonial:
      "Kevin is one of the most passionate student I've encountered in my 30 years at UCSB. He went beyond his responsibility as the Chair of A.S. Bike Committee and advocated for bicycle infrastructure and represent student's voice on many committees and organizations both within the University and at local governmental agencies. He is resourceful, prepared, and always of a puckish good humor.",
    name: 'Dennis Whelan',
    designation: 'Campus Architect',
    company: 'UCSB',
    image:
      'https://media.licdn.com/dms/image/C4E03AQGssdKX5A7rjA/profile-displayphoto-shrink_800_800/0/1516333122271?e=1689811200&v=beta&t=RipgbDt4lKbs0ANk1X1ulbYD5I7mpxxINEt4y8th2nM',
  },
  {
    testimonial:
      'Kevin is constantly striving to improve process, and remarkably thorough in documenting his process. He is exactly the type of person you need when needing someone to come in and solve big challenges with little resources. He broke company records and a quick learner to learn and iterate what is working and build upon.',
    name: 'Taylor Scotto',
    designation: 'Sales Strategy',
    company: 'Cloudinary',
    image:
      'https://media.licdn.com/dms/image/C4E03AQE32usLcfz_DA/profile-displayphoto-shrink_800_800/0/1619844451989?e=1689811200&v=beta&t=YNzI-OJAvl2DYSO3soS5Vg8QMhGtVFN4ZJcMfEChZqk',
  },
];

const projects = [
  {
    name: 'Shoop',
    description:
      'Full featured ecommerce site that let users search and buy bikes.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'redux',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://i.imgur.com/pG7VTuU.png',
    source_code_link:
      'https://github.com/Kevjinx/MERN-Project-Ecommerce-Shoop/',
  },
  {
    name: 'SideQuest Podcast',
    description:
      'Got really bored and lonely so I made a podcast just so I can talk to really cool humans. From CMOs of a meme startup, founder of ai sales startup, to cancer saving PhD who is one hell of a triathlete. First episode will be out soon!',
    tags: [],
    image:
      'https://media.licdn.com/dms/image/D560BAQEM3gNnqNqk5w/company-logo_100_100/0/1681605993055?e=1692835200&v=beta&t=-xeFLLEsigK-RA8i3Fxydrd5ctZjOTu49Y_2UAcm-70',
    source_code_link: 'https://www.linkedin.com/company/91171569/',
  },
  {
    name: 'CockBlock',
    description:
      'Gmail Addon that detects unwanted cold sales emails by cross referencing data with b2b data provider. Future features would use openai to create a chatbot that helps users automate their conversations with sales people',
    tags: [
      {
        name: 'Gmail API',
        color: 'green-text-gradient',
      },
      {
        name: 'openai',
        color: 'pink-text-gradient',
      },
      {
        name: 'notPublicYet',
      },
    ],
    image:
      'https://media.licdn.com/dms/image/C560BAQH03e0VowA5sQ/company-logo_200_200/0/1523260171056?e=1692835200&v=beta&t=8Q-nQZGtZaXTIODhhIaF5x5EcDUk8A1Do9YZqUnn8bc',
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
