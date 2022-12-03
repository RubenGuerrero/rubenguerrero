import { WorkExperience } from './WorkExperience.inteface';

const workExperiences: WorkExperience[] = [
  {
    company: 'Ontruck',
    imagePath: "/ontruck.png",
    imageColor: '#0040cc',
    position: 'Senior Staff Software Engineer',
    startDate: '2016-06-01',
    endDate: '2022-06-01',
    description: `Working as a Senior Staff Software Engineer in one of the vertical teams. Always working close to product and business teams, understanding the business requirements, and applying technology to solve these problems.
    
Also, I am leading the Frontend Guild, organizing the different initiatives and sessions, with the objective of empowering the quality and good practices inside the Guild.

I am employee #5 of Ontruck, so I have been working since almost the beginning of the company. It is been a lot of changes in terms of the company structure, way of working, business requirements, etc. Always been opened and well adapted to these changes.
`,
    stack: ['React', 'React Hooks', 'Redux', 'Python'],
  },
  {
    company: 'Idealista',
    position: 'Frontend Engineer',
    imageColor: '#e1f56f',
    imagePath: "/idealista.png",
    startDate: '2014-02-01',
    endDate: '2016-06-01',
    description: `idealista.com is the leading real estate portal in Spain. I worked on the revamp of almost all the public website, refactoring and recreating almost all the pages from scratch.

Also, I worked on building the internal applications of the company. I was mainly focused on Frontend, but also entering on the Backend part if it was needed.`,
    stack: ['JSP', 'Java', 'Javascript', 'HTML5', 'CSS3', 'jQuery', 'Dojo...'],
  },
  {
    company: 'Redbility',
    position: 'Frontend Engineer',
    imagePath: "/redbility.png",
    imageColor: '#fe014f',
    startDate: '2013-12-01',
    endDate: '2014-04-01',
    description: `Redbility is a design agency. I was working on creating websites for big companies.

The designs were very demanding in terms of interactions and user experience, with pixel-perfect adjustments.`,
    stack: ['Pixel-perfect, HTML5, CSS3, jQuery, Javascript'],
  },
  {
    company: 'Peoplecall',
    position: 'Frontend Engineer',
    imageColor: '#000000',
    imagePath: "/peoplecall.png",
    startDate: '2012-06-01',
    endDate: '2013-12-31',
    description: `Peoplecall is a telco company. I was working on building the internal websites and applications of the company.

I worked closely with the design team, defining and building the interactions on the different products.
- I built some landing pages to capture clients.
- I collaborated in a Phonegap application to make VoiceIP calls.
- I was in charge of measuring the conversions in the websites.
- I collaborated in the development of internal applications.
`,
    stack: ['Responsive design, Jekyll, CSS, HTML5, Pure Javascript, Phonegap'],
  },
  {
    company: 'Eternitic',
    position: 'Frontend Engineer',
    imageColor: '#ffd58e',
    startDate: '2008-01-01',
    endDate: null,
    description: `Eternitic was a pure marketing company. I learned a lot of marketing concepts during these months.
I was the only person in charge of the tech part.
I was mostly creating websites focused on marketing campaigns, also working on SEO optimizations, and applying improvements and modifications to old websites.
`,
    stack: ['Joomla (yes, Joomla), jQuery, HTML5, CSS from the scratch'],
  },
  {
    company: 'Binocean',
    startDate: '2007-01-01',
    endDate: '',
    position: 'Frontend Developer',
    imageColor: '#ff8ea0',
    description: `This was my first contracted work. I was working as a Frontend Developer creating websites and applications for small and medium companies.

Binocean was a small company of three employees. I was really focused on the Frontend part, also playing around with Backend at some points.
`,
  },
  {
    company: 'Freelance',
    imagePath: '/avatar.png',
    imageColor: '#c2ac88',
    position: 'Software Engineer',
    startDate: '2008-01-01',
    endDate: null,
    description: `I have been working as a Freelance Developer for almost the beginning of my career. My mind is every time looking for new side projects and businesses. I sometimes work on websites for small companies, that I do in my free time.`,
  },
];

export { workExperiences }