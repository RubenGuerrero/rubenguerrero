import Link from 'next/link';

import { Header } from 'components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl">
        <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="px-4 mx-auto mt-10 max-w-screen-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-10 sm:text-5xl sm:leading-none md:text-6xl">
                Rubén Guerrero <br className="xl:hidden" />
                <span className="text-emerald-600">Software Engineer</span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Hello there, you can check my Resumè clicking on this awesome button!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="shadow rounded-md">
                  <Link href="resume">
                    <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent bg-emerald-600 leading-6 rounded-md hover:bg-emerald-500 focus:outline-none focus:border-emerald-700 focus:ring-emerald transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                      See Resume
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
