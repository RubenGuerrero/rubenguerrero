import { Bio, BioSummary } from 'components/Bio';
import { Header } from 'components/Header';
import { BaseLayout } from 'components/Layouts';
import { KeySkills, TechSkills } from 'components/Skills';
import { WorkExperiences } from 'components/WorkExperiences';
import Head from 'next/head';
import { FC } from 'react';
import superjson from 'superjson';
import type { WorkExperience } from 'types';

const workExperiences: WorkExperience[] = [
  {
    id: 'freelance',
    company: 'Freelance',
    imagePath: 'avatar.png',
    imageColor: '#306a55',
    position: 'Software Engineer',
    startDate: '2008-01-01',
    endDate: null,
    description: `I have been working as a Freelance Software Engineer for almost the beginning of my career. My mind is every time looking for new side projects and businesses. I sometimes work on websites for small companies, that I do in my free time.`,
    showPlusDate: true,
  },
  {
    id: 'boopos',
    company: 'Boopos',
    imagePath: 'boopos.png',
    imageColor: '#000',
    position: 'Tech Lead',
    startDate: '2022-05',
    endDate: '2024-08',
    description: `As the first frontend engineer on the team, I took on the responsibility of defining, building, and maintaining the entire frontend ecosystem for the company, while also stepping in to support the backend as needed.

As our frontend team expanded to four members, I assumed a leadership role, guiding team dynamics and ensuring that we upheld high standards and code quality.

Additionally, I played an active role in the triad teams (Product Management, Product Design, and Tech Lead), where I contributed to defining objectives, setting outcomes, and focusing the direction of each development cycle.
`,
    stack: [
      'React',
      'Jest',
      'Typescript',
      'Node',
      'AWS',
      'MongoDB',
      'Segment',
      'Customer.io',
      'Hubspot CRM',
      'LaunchDarkly',
      'Heap.io',
      'Sentry',
      'Docker',
    ],
  },
  {
    id: 'clinpify',
    company: 'Clinpify',
    imagePath: 'clinpify.png',
    imageColor: '#1d00fd',
    position: 'CPO & Co-Founder',
    startDate: '2021-01',
    endDate: '2022-08',
    description: `Clinpify transformed the way people washed their cars, giving everyone the opportunity to keep their vehicles clean without lifting a finger.

I was part of a three-person team that built Clinpify from the ground up. Together, we established the company's vision, mission, and objectives.

My specific role involved defining and developing two React Native apps—one designed for end users and the other tailored for our internal employees.
`,
    stack: [
      'React',
      'Typescript',
      'Jest',
      'React Native',
      'Stripe',
      'Nestjs',
      'Nodejs',
      'Heroku',
      'Customer.io',
      'Segment',
      'Stripe',
      'Sentry',
      'Docker',
    ],
  },
  {
    id: 'ontruck',
    company: 'Ontruck',
    imagePath: 'ontruck.png',
    imageColor: '#0040cc',
    position: 'Senior Staff Software Engineer',
    startDate: '2016-06',
    endDate: '2022-04',
    description: `I worked as a Senior Staff Software Engineer in one of the vertical teams, closely collaborating with product and business teams. My focus was on understanding business requirements and applying technology to solve these problems.

I also led the Frontend Guild, organizing various initiatives and sessions with the goal of enhancing quality and promoting good practices within the Guild.

As employee #5 at Ontruck, I had been with the company since nearly the beginning. Over time, the company underwent many changes in terms of structure, ways of working, and business requirements. I remained open and well-adapted to these changes.
`,
    stack: ['React', 'Redux', 'Python', 'Django', 'Flask', 'Segment', 'Sentry', 'Datadog'],
  },
  {
    id: 'idealista',
    company: 'Idealista',
    position: 'Frontend Engineer',
    imageColor: '#e1f56f',
    imagePath: 'idealista.png',
    startDate: '2014-02',
    endDate: '2016-06',
    description: `idealista.com is the leading real estate portal in Spain. I worked on the revamp of almost all the public website, refactoring and recreating almost all the pages from scratch.

Also, I worked on building the internal applications of the company. I was mainly focused on Frontend, but also entering on the Backend part if it was needed.`,
    stack: ['JSP', 'Java', 'Javascript', 'HTML5', 'CSS3', 'jQuery', 'Dojo...'],
  },
  {
    id: 'redbility',
    company: 'Redbility',
    position: 'Frontend Engineer',
    imagePath: 'redbility.png',
    imageColor: '#fe014f',
    startDate: '2013-12',
    endDate: '2014-02',
    description: `Redbility is a design agency. I was working on creating websites for big companies.

The designs were very demanding in terms of interactions and user experience, with pixel-perfect adjustments.`,
    stack: ['Pixel-perfect, HTML5, CSS3, jQuery, Javascript'],
  },
  {
    id: 'peoplecall',
    company: 'Peoplecall',
    position: 'Frontend Engineer',
    imageColor: '#de5332',
    startDate: '2012-07',
    endDate: '2013-12',
    description: `Peoplecall is a telco company. I was working on building the internal websites and applications of the company.

I worked closely with the design team, defining and building the interactions on the different products.
- I built some landing pages to capture clients.
- I collaborated in a Phonegap application to make VoiceIP calls.
- I was in charge of measuring the conversions in the websites.
- I collaborated in the development of internal applications.
`,
    stack: ['Responsive design', 'Jekyll', 'CSS', 'HTML5', 'Javascript', 'Phonegap'],
  },
  {
    id: 'eternitic',
    company: 'Eternitic',
    startDate: '2012-04',
    endDate: '2012-07',
    position: 'Frontend Engineer',
    imageColor: '#ffd58e',
    description: `Eternitic was a pure marketing company. I learned a lot of marketing concepts during these months.
I was the only person in charge of the tech part.
I was mostly creating websites focused on marketing campaigns, also working on SEO optimizations, and applying improvements and modifications to old websites.
`,
    stack: ['Joomla (yes, Joomla)', 'jQuery', 'HTML5', 'CSS from the scratch'],
  },
  {
    id: 'binocean',
    company: 'Binocean',
    startDate: '2011-11',
    endDate: '2012-04',
    position: 'Frontend Developer',
    imageColor: '#ff8ea0',
    description: `This was my first contracted work. I was working as a Frontend Developer creating websites and applications for small and medium companies.

Binocean was a small company of three employees. I was really focused on the Frontend part, also playing around with Backend at some points.
`,
    stack: ['HTML5', 'CSS3', 'Javascript', 'jQuery', 'PHP', 'Wordpress', 'Django'],
  },
];

interface Props {
  workExperiences: WorkExperience[];
}

const Resume: FC<Props> = ({ workExperiences }) => {
  return (
    <>
      <Head>
        <title>Rubén Guerrero - Software Engineer</title>
      </Head>
      <BaseLayout>
        <Header />
        <div className="mx-auto mt-4 w-full max-w-6xl grid-cols-11 gap-8 px-4 md:grid">
          <div className="col-span-3">
            <Bio />
          </div>
          <div className="col-span-8">
            <BioSummary />
            <KeySkills />
            <TechSkills />
            <WorkExperiences workExperiences={workExperiences} />
          </div>
        </div>
        <div className="p-8 text-center text-sm text-gray-400">
          Made with ❤️ -{' '}
          <a href="https://github.com/RubenGuerrero/rubenguerrero" target="_blank" rel="noreferrer">
            See source code
          </a>
        </div>
      </BaseLayout>
    </>
  );
};

export default Resume;

export const getStaticProps = async () => {
  return {
    props: {
      workExperiences: superjson.serialize(workExperiences).json,
    },
  };
};
