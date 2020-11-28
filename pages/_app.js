import PropTypes from 'prop-types';
import Head from 'next/head';

import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
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

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
