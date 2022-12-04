import { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/globals.css';
import { RootProvider } from 'components/RootProvider';


const description =
  'Software Engineer with +9 years of experience in web development. Worked on multiple types of companies, multiple types of business, and use cases.';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Rubén Guerrero - Senior Software Engineer</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta property='og:title' content='Rubén Guerrero - Senior Software Engineer' />
      <meta property='og:description' content={description} />
      <meta name='description' content={description} />
    </Head>
    <RootProvider session={pageProps.session}>
      <Component {...pageProps} />
    </RootProvider>
  </>
);

export default App;
