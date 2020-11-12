import Head from 'next/head';

export default function Home() {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-300">
      <Head>
        <title>Frontend Engineer - Rubén Guerrero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-5 bg-white rounded-lg md:flex md:items-center">
        <img
          className="w-24 h-24 mx-auto rounded-full md:mx-0"
          src="https://unavatar.now.sh/twitter/ruben_guerrero"
          alt=""
        />
        <div className="mt-5 text-center md:text-left md:mt-0 md:ml-5">
          <h2 className="text-lg font-bold text-gray-900">Rubén Guerrero</h2>
          <div className="text-purple-500">Frontend Engineer</div>
          <div className="text-gray-600">www.rubenguerrero.com</div>
        </div>
      </div>
    </div>
  );
}
