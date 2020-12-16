import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import * as gtag from 'lib/gtag';

import 'styles/tailwind.css';

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
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
        <meta
          property="og:description"
          content="Software Engineer with +9 years of experience in web development. Worked on multiple
            types of companies, multiple types of business, and use cases."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
