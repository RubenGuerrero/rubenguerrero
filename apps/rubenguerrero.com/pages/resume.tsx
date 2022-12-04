import { Bio, BioSummary } from 'components/Bio';
import { Header } from 'components/Header';
import { BaseLayout } from 'components/Layouts';
import { KeySkills, TechSkills } from 'components/Skills';
import { WorkExperiences } from 'components/WorkExperiences';
import { prisma } from 'database';
import type { WorkExperience } from 'database';
import Head from 'next/head';
import { FC } from 'react';
import superjson from 'superjson';

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
  const workExperiences = await prisma.workExperience.findMany({
    where: { published: true },
    orderBy: [{ showPlusDate: 'desc' }, { startDate: 'desc' }],
  });

  return {
    props: {
      workExperiences: superjson.serialize(workExperiences).json,
    },
  };
};
