import { Inter } from '@next/font/google';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/globals.css';
import { createClient, JitsuProvider, usePageView } from '@jitsu/nextjs';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const description =
  'Software Engineer with +9 years of experience in web development. Worked on multiple types of companies, multiple types of business, and use cases.';

const jitsuClient = createClient({
  tracking_host: 'https://t.rubenguerrero.com',
  key: 'js.qnlqzou74ajm68fb8gllll.a5cqu08bmsc1dpg69y4yar',
});

const App = ({ Component, pageProps }: AppProps) => {
  usePageView(jitsuClient);

  return (
    <>
      <Head>
        <title>Rubén Guerrero - Senior Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Rubén Guerrero - Senior Software Engineer" />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
      </Head>
      <JitsuProvider client={jitsuClient}>
        <main className={`${inter.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </JitsuProvider>
    </>
  );
};

export default App;
