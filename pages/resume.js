import { BaseLayout } from 'components/Layouts';
import { Header } from 'components/Header';

export default function Resume() {
  return (
    <BaseLayout>
      <Header />
      <div className="px-2 mx-auto max-w-screen-lg">
        <div className="flex mt-4 mb-5">
          <div>
            <img
              className="rounded-full"
              src="https://via.placeholder.com/250/250"
              alt="avatar"
              width="56"
              height="56"
            />
          </div>
          <div className="ml-2">
            <p className="pt-1 font-bold">Rubén Guerrero Sánchez</p>
            <p className="text-gray-600">Senior Software Engineer</p>
            <div className="text-sm">
              <p>yo@rubenguerrero.com</p>
              <p>+34 677 17 65 92</p>
            </div>
          </div>
        </div>

        <p className="text-m">
          Software Engineer with +9 years of experience in web development. Worked on multiple types
          of companies, multiple types of business, and use cases. Mostly working on
          product-oriented companies. A big field of knowledge in terms of web technologies, but
          mostly focused on Frontend and Backend related technologies.
        </p>

        <h2 className="mt-6 mb-3 text-xl font-bold">Key Skills</h2>
        <ul className="flex flex-wrap">
          <li className="p-2 mr-2 leading-none whitespace-no-wrap bg-gray-200 rounded-md">
            Open-mindedness
          </li>
          <li className="p-2 mr-2 leading-none whitespace-no-wrap bg-gray-200 rounded-md">
            Creativity
          </li>
          <li className="p-2 mr-2 leading-none whitespace-no-wrap bg-gray-200 rounded-md">
            Humbleness
          </li>
          <li className="p-2 mr-2 leading-none whitespace-no-wrap bg-gray-200 rounded-md">
            Accountability
          </li>
          <li className="p-2 mr-2 leading-none whitespace-no-wrap bg-gray-200 rounded-md">
            Hands-on
          </li>
          <li className="p-2 mr-2 leading-none whitespace-no-wrap bg-gray-200 rounded-md">
            Project management
          </li>
        </ul>
        <h2 className="mt-6 mb-3 text-xl font-bold">Work Experience</h2>
        <div>
          <div className="text-lg font-bold">Ontruck - Senior Staff Software Engineer</div>
          <div>Jun. 2016 - Now</div>
          <p className="pb-4">
            Working as a Senior Staff Software Engineer in one of the vertical teams. Always working
            close to product and business teams, understanding the business requirements, and
            applying technology to solve these problems.
          </p>

          <p className="pb-4">
            Also, I am leading the Frontend Guild, organizing the different initiatives and
            sessions, with the objective of empowering the quality and good practices inside the
            Guild.
          </p>

          <p className="pb-4">
            I am employee #5 of Ontruck, so I have been working since almost the beginning of the
            company. It is been a lot of changes in terms of the company structure, way of working,
            business requirements, etc. Always been opened and well adapted to these changes.
          </p>
        </div>
        <div>
          <div className="text-lg font-bold">idealista.com - Frontend Engineer</div>
          <div>Feb. 2014 - Dic. 2013</div>
        </div>
        <div>
          <div className="text-lg font-bold">Redbility - Frontend Engineer</div>
          <div>Dic. 2013 - Feb. 2014</div>
        </div>
        <div>
          <div className="text-lg font-bold">Peoplecall - Frontend Engineer</div>
          <div>Jul. 2012 - Dic. 2013</div>
        </div>
        <div>
          <div className="text-lg font-bold">Eternitic - Frontend Engineer</div>
          <div>Apr. 2012 - Jul. 2012</div>
        </div>
        <div>
          <div className="text-lg font-bold">Binocean - Frontend Engineer</div>
          <div>Nov. 2011 - Apr. 2012</div>
        </div>
        <div>
          <div className="text-lg font-bold">Freelance developer</div>
          <div>2008 - Now</div>
        </div>
      </div>
    </BaseLayout>
  );
}
