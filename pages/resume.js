import { BaseLayout } from 'components/Layouts';
import { Header } from 'components/Header';

const whatsappHref = `https://wa.me/+34677176592?text=${encodeURIComponent(
  "Hello! I just seen your website and it's awesome!"
)}`;

export default function Resume() {
  return (
    <BaseLayout>
      <Header />
      <div className="px-3 mx-auto max-w-prose">
        <div className="mx-auto mt-4 mb-5 text-center">
          <div className="flex justify-center">
            <img
              className="w-24 rounded-full"
              src="https://via.placeholder.com/250/250"
              alt="avatar"
              width="96"
              height="96"
            />
          </div>
          <div className="ml-2">
            <p className="pt-1 font-bold">Rubén Guerrero Sánchez</p>
            <p className="mb-2 text-sm text-gray-600">Senior Software Engineer</p>
            <div className="text-sm">
              <a href="mailto:yo@rubenguerrero.com" className="block hover:underline">
                yo@rubenguerrero.com
              </a>
              <a href={whatsappHref} className="block hover:underline">
                +34 677 17 65 92
              </a>
            </div>
          </div>
        </div>

        <p className="mb-1 text-m">
          Software Engineer with +9 years of experience in web development. Worked on multiple types
          of companies, multiple types of business, and use cases. Mostly working on
          product-oriented companies.
        </p>
        <p>
          A big field of knowledge in terms of web technologies, but mostly focused on Frontend and
          Backend related technologies.
        </p>

        <h2 className="mt-6 mb-5 text-2xl font-bold">Key Skills</h2>
        <ul className="flex flex-wrap">
          <li className="p-2 mb-2 mr-2 leading-none bg-gray-200 whitespace-nowrap rounded-md">
            Open-mindedness
          </li>
          <li className="p-2 mb-2 mr-2 leading-none bg-gray-200 whitespace-nowrap rounded-md">
            Creativity
          </li>
          <li className="p-2 mb-2 mr-2 leading-none bg-gray-200 whitespace-nowrap rounded-md">
            Humbleness
          </li>
          <li className="p-2 mb-2 mr-2 leading-none bg-gray-200 whitespace-nowrap rounded-md">
            Accountability
          </li>
          <li className="p-2 mb-2 mr-2 leading-none bg-gray-200 whitespace-nowrap rounded-md">
            Hands-on
          </li>
          <li className="p-2 mb-2 mr-2 leading-none bg-gray-200 whitespace-nowrap rounded-md">
            Project management
          </li>
          <li className="p-2 mb-2 mr-2 leading-none bg-gray-200 whitespace-nowrap rounded-md">
            Attention to detail
          </li>
        </ul>

        <h2 className="mt-6 mb-5 text-2xl font-bold">Tech Skills</h2>
        <ul className="flex flex-wrap">
          <li className="p-2 mb-2 mr-2 leading-none bg-gray-200 whitespace-nowrap rounded-md">
            React
          </li>
          <li className="p-2 mb-2 mr-2 leading-none bg-gray-200 whitespace-nowrap rounded-md">
            NodeJS
          </li>
          <li className="p-2 mb-2 mr-2 leading-none bg-gray-200 whitespace-nowrap rounded-md">
            Javascript
          </li>
          <li className="p-2 mb-2 mr-2 leading-none bg-gray-200 whitespace-nowrap rounded-md">
            Frontend tooling
          </li>
          <li className="p-2 mb-2 mr-2 leading-none bg-gray-200 whitespace-nowrap rounded-md">
            UI/UX Skills
          </li>
          <li className="p-2 mb-2 mr-2 leading-none bg-gray-200 whitespace-nowrap rounded-md">
            Testing
          </li>
          <li className="p-2 mb-2 mr-2 leading-none bg-gray-200 whitespace-nowrap rounded-md">
            Software Architecture
          </li>
          <li className="p-2 mb-2 mr-2 leading-none bg-gray-200 whitespace-nowrap rounded-md">
            Django
          </li>
        </ul>
        <h2 className="mb-4 text-2xl font-bold mt-7">Work Experience</h2>
        <div className="mb-9">
          <div className="text-lg font-bold text-gray-600">
            Ontruck - Senior Staff Software Engineer
          </div>
          <div className="mb-2 text-sm text-gray-500">Jun. 2016 - Now</div>
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

          <p className="italic text-gray-500">Tech used: React, React Hooks, Redux, Python</p>
        </div>
        <div className="mb-9">
          <div className="text-lg font-bold text-gray-600">idealista.com - Frontend Engineer</div>
          <div className="mb-2 text-sm text-gray-500">Feb. 2014 - Jun. 2016</div>
          <p className="pb-4">
            idealista.com is the leading real estate portal in Spain. I worked on the revamp of
            almost all the public website, refactoring and recreating almost all the pages from
            scratch.
          </p>
          <p className="pb-4">
            Also, I worked on building the internal applications of the company. I was mainly
            focused on Frontend, but also entering on the Backend part if it was needed.
          </p>
          <p className="italic text-gray-500">
            Tech used: JSP, Java, Javascript, HTML5, CSS3, jQuery, Dojo...
          </p>
        </div>
        <div className="mb-9">
          <div className="text-lg font-bold text-gray-600">Redbility - Frontend Engineer</div>
          <div className="mb-2 text-sm text-gray-500">Dic. 2013 - Feb. 2014</div>
          <p className="pb-4">
            Redbility is a design agency. I was working on creating websites for big companies.
          </p>
          <p className="pb-4">
            The designs were very demanding in terms of interactions and user experience, with
            pixel-perfect adjustments.
          </p>
          <p className="italic text-gray-500">
            Tech used: Pixel-perfect, HTML5, CSS3, jQuery, Javascript...
          </p>
        </div>
        <div className="mb-9">
          <div className="text-lg font-bold text-gray-600">Peoplecall - Frontend Engineer</div>
          <div className="mb-2 text-sm text-gray-500">Jul. 2012 - Dic. 2013</div>
          <p className="pb-4">
            Peoplecall is a telco company. I was working on building the internal websites and
            applications of the company.
          </p>
          <p className="pb-4">
            I worked closely with the design team, defining and building the interactions on the
            different products.
          </p>
          <ul className="pl-2 mb-4 list-disc list-inside">
            <li>I built some landing pages to capture clients.</li>
            <li>I collaborated in a Phonegap application to make VoiceIP calls.</li>
            <li>I was in charge of measuring the conversions in the websites.</li>
            <li>I collaborated in the development of internal applications.</li>
          </ul>
          <p className="italic text-gray-500">
            Tech used: Responsive design, Jekyll, CSS, HTML5, Pure Javascript, Phonegap...
          </p>
        </div>
        <div className="mb-9">
          <div className="text-lg font-bold text-gray-600">Eternitic - Frontend Engineer</div>
          <div className="mb-2 text-sm text-gray-500">Apr. 2012 - Jul. 2012</div>
          <p className="pb-4">
            Eternitic was a pure marketing company. I learned a lot of marketing concepts during
            these months.
          </p>
          <p className="pb-4">I was the only person in charge of the tech part.</p>
          <p className="pb-4">
            I was mostly creating websites focused on marketing campaigns, also working on SEO
            optimizations, and applying improvements and modifications to old websites.
          </p>
          <p className="italic text-gray-500">
            Tech used: Joomla (yes, Joomla), jQuery, HTML5, CSS from the scratch...
          </p>
        </div>
        <div className="mb-9">
          <div className="text-lg font-bold text-gray-600">Binocean - Frontend Developer</div>
          <div className="mb-2 text-sm text-gray-500">Nov. 2011 - Apr. 2012</div>
          <p className="pb-4">
            This was my first contracted work. I was working as a Frontend Developer creating
            websites and applications for small and medium companies.
          </p>
          <p className="pb-4">
            Binocean was a small company of three employees. I was really focused on the Frontend
            part, also playing around with Backend at some points.
          </p>
          <p className="pb-4">
            Here I learned how to create WordPress templates and plugins.{' '}
            <span className="italic">Who knows what the future can hold...</span>
          </p>
          <p className="italic text-gray-500">
            Tech used: Wordpress, HTML5, jQuery, CSS from the scratch, Django...
          </p>
        </div>
        <div className="mb-9">
          <div className="text-lg font-bold text-gray-600">Freelance Developer</div>
          <div className="mb-2 text-sm text-gray-500">2008 - Now</div>
          <p className="pb-4">
            I have been working as a Freelance Developer for almost the beginning of my career. My
            mind is every time looking for new side projects and businesses. I sometimes work on
            websites for small companies, that I do in my free time.
          </p>
        </div>
      </div>
    </BaseLayout>
  );
}
