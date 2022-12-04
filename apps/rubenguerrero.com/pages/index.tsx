import { Header } from 'components/Header';
import Head from 'next/head';
import Link from 'next/link';
import BaseLayout from '../components/Layouts/BaseLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rubén Guerrero - Senior Software Engineer</title>
      </Head>
      <BaseLayout>
        <Header />
        <div className='mx-auto max-w-screen-xl'>
          <div className='relative pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32'>
            <main className='mx-auto mt-10 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div className='sm:text-center lg:text-left'>
                <h2
                  className='text-4xl font-extrabold leading-10 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-none md:text-6xl'>
                  Rubén Guerrero <br className='xl:hidden' />
                  <span className='text-emerald-600'>Software Engineer</span>
                </h2>
                <p
                  className='mt-3 text-base text-gray-500 dark:text-gray-400 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0'>
                  Hello there, you can check my Resumè clicking on this awesome button!
                </p>
                <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                  <div className='rounded-md shadow'>
                    <Link
                      href='resume'
                      className='focus:ring-emerald flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-600 px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-emerald-500 focus:border-emerald-700 focus:outline-none md:px-10 md:py-4 md:text-lg'
                    >
                      See Resume
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </BaseLayout>
    </>
  );
}
