import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import * as gtag from 'lib/gtag';

import 'styles/tailwind.css';
import { AppProps } from 'next/app';

const description =
  'Software Engineer with +9 years of experience in web development. Worked on multiple types of companies, multiple types of business, and use cases.';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Rubén Guerrero - Senior Software Engineer" />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
