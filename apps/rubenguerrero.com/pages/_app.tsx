import { Inter } from '@next/font/google';
import { RootProvider } from 'components/RootProvider';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--inter-font' });

const description =
  'Software Engineer with +9 years of experience in web development. Worked on multiple types of companies, multiple types of business, and use cases.';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Rubén Guerrero - Senior Software Engineer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="Rubén Guerrero - Senior Software Engineer" />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <script
        defer
        data-domain="rubenguerrero.com"
        src="https://plausible.io/js/script.js"
      ></script>
    </Head>
    <style jsx global>
      {`
        :root {
          --inter-font: ${inter.style.fontFamily};
        }
      `}
    </style>
    <RootProvider session={pageProps.session}>
      <Component {...pageProps} />
    </RootProvider>
  </>
);

export default App;
