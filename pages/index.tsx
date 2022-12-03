import { Header } from 'components/Header';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rubén Guerrero - Senior Software Engineer</title>
      </Head>
      <Header />
      <div className="mx-auto max-w-screen-xl">
        <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
          <main className="mt-10 mx-auto px-4 max-w-screen-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-gray-900 text-4xl font-extrabold tracking-tight leading-10 sm:text-5xl sm:leading-none md:text-6xl">
                Rubén Guerrero <br className="xl:hidden" />
                <span className="text-emerald-600">Software Engineer</span>
              </h2>
              <p className="mt-3 text-gray-500 text-base sm:mt-5 sm:mx-auto sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Hello there, you can check my Resumè clicking on this awesome button!
              </p>
              <div className="mt-5 sm:flex sm:justify-center sm:mt-8 lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="resume"
                    className="focus:ring-emerald flex items-center justify-center px-8 py-3 w-full text-white text-base font-medium leading-6 hover:bg-emerald-500 bg-emerald-600 border focus:border-emerald-700 border-transparent rounded-md focus:outline-none transition duration-150 ease-in-out md:px-10 md:py-4 md:text-lg"
                  >
                    See Resume
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
