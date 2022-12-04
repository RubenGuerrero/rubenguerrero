import { Bio, BioSummary } from 'components/Bio';
import { Header } from 'components/Header';
import { BaseLayout } from 'components/Layouts';
import { KeySkills, TechSkills } from 'components/Skills';
import { WorkExperiences } from 'components/WorkExperiences';
import Head from 'next/head';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Rubén Guerrero - Software Engineer</title>
      </Head>
      <BaseLayout>
        <Header />
        <div className="w-full md:grid grid-cols-11 max-w-6xl mx-auto gap-8 px-4 mt-4">
          <div className="col-span-3">
            <Bio />
          </div>
          <div className="col-span-8">
            <BioSummary />
            <KeySkills />
            <TechSkills />

            <WorkExperiences />
          </div>
        </div>
        <div className="p-8 text-sm text-gray-400 text-center">
          Made with ❤️ -{' '}
          <a href="https://github.com/RubenGuerrero/rubenguerrero" target="_blank" rel="noreferrer">
            See source code
          </a>
        </div>
      </BaseLayout>
    </>
  );
}
