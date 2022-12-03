import { Bio, BioSummary } from 'components/Bio';
import { KeySkills, TechSkills } from 'components/Skills';
import { Header } from 'components/Header';
import { BaseLayout } from 'components/Layouts';
import { WorkExperiences } from 'components/WorkExperiences';
import Head from 'next/head';

export default function Resume() {
  return (
    <>
      <Head>
        <title>CV - Rubén Guerrero - Senior Software Engineer</title>
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
      </BaseLayout>
    </>
  );
}