import { Header } from 'components/Header';
import { BaseLayout } from 'components/Layouts';
import Head from 'next/head';
import Image from 'next/image';

const whatsappHref = `https://wa.me/+34677176592?text=${encodeURIComponent(
  "Hello! I just seen your website and it's awesome!"
)}`;

import { WorkExperiences } from 'components/WorkExperiences';


const KeySkills = () => (
  <>
    <h2 className="mb-5 mt-6 text-2xl font-bold">Key Skills</h2>
    <ul className="flex flex-wrap">
      <li className="mb-2 mr-2 p-2 whitespace-nowrap leading-none bg-gray-200 rounded-md">
        Open-mindedness
      </li>
      <li className="mb-2 mr-2 p-2 whitespace-nowrap leading-none bg-gray-200 rounded-md">
        Creativity
      </li>
      <li className="mb-2 mr-2 p-2 whitespace-nowrap leading-none bg-gray-200 rounded-md">
        Humbleness
      </li>
      <li className="mb-2 mr-2 p-2 whitespace-nowrap leading-none bg-gray-200 rounded-md">
        Accountability
      </li>
      <li className="mb-2 mr-2 p-2 whitespace-nowrap leading-none bg-gray-200 rounded-md">
        Hands-on
      </li>
      <li className="mb-2 mr-2 p-2 whitespace-nowrap leading-none bg-gray-200 rounded-md">
        Project management
      </li>
      <li className="mb-2 mr-2 p-2 whitespace-nowrap leading-none bg-gray-200 rounded-md">
        Attention to detail
      </li>
    </ul>
  </>
);

const TechSkills = () => (
  <>
    <h2 className="mb-5 mt-6 text-2xl font-bold">Tech Skills</h2>
    <ul className="flex flex-wrap">
      <li className="mb-2 mr-2 p-2 whitespace-nowrap leading-none bg-gray-200 rounded-md">React</li>
      <li className="mb-2 mr-2 p-2 whitespace-nowrap leading-none bg-gray-200 rounded-md">
        NodeJS
      </li>
      <li className="mb-2 mr-2 p-2 whitespace-nowrap leading-none bg-gray-200 rounded-md">
        Javascript
      </li>
      <li className="mb-2 mr-2 p-2 whitespace-nowrap leading-none bg-gray-200 rounded-md">
        Frontend tooling
      </li>
      <li className="mb-2 mr-2 p-2 whitespace-nowrap leading-none bg-gray-200 rounded-md">
        UI/UX Skills
      </li>
      <li className="mb-2 mr-2 p-2 whitespace-nowrap leading-none bg-gray-200 rounded-md">
        Testing
      </li>
      <li className="mb-2 mr-2 p-2 whitespace-nowrap leading-none bg-gray-200 rounded-md">
        Software Architecture
      </li>
      <li className="mb-2 mr-2 p-2 whitespace-nowrap leading-none bg-gray-200 rounded-md">
        Django
      </li>
    </ul>
  </>
);

const Bio = () => (
  <div className="mb-5 mt-4 mx-auto text-center sticky top-5">
    <div className="flex justify-center">
      <div>
        <Image
          src="/avatar.png"
          className="w-24 rounded-full"
          alt="Rubén Guerrero"
          width={96}
          height={96}
        />
      </div>
    </div>
    <div className="ml-2">
      <p className="pt-1 font-bold">Rubén Guerrero Sánchez</p>
      <p className="mb-2 text-gray-600 text-sm">Senior Software Engineer</p>
      <div className="text-center text-sm">
        <div>
          <a
            href="mailto:yo@rubenguerrero.com"
            className="inline-block align-middle h-8 hover:underline leading-none"
          >
            yo@rubenguerrero.com
          </a>
        </div>
        <a href={whatsappHref} className="inline-block hover:underline">
          +34 677 17 65 92
        </a>
      </div>
    </div>
    <p className="text-m mb-1 mt-2">
      Software Engineer with +9 years of experience in web development. Worked on multiple types of
      companies, multiple types of business, and use cases. Mostly working on product-oriented
      companies.
    </p>
    <p>
      A big field of knowledge in terms of web technologies, but mostly focused on Frontend and
      Backend related technologies.
    </p>
  </div>
);

export default function Resume() {
  return (
    <>
      <Head>
        <title>CV - Rubén Guerrero - Senior Software Engineer</title>
      </Head>
      <BaseLayout>
        <Header />
        <div className="w-full grid grid-cols-11 max-w-6xl mx-auto gap-4">
          <div className="col-span-3 sticky">
            <Bio />
          </div>
          <div className="col-span-8">
            <KeySkills />
            <TechSkills />

            <WorkExperiences />
          </div>
        </div>
      </BaseLayout>
    </>
  );
}
