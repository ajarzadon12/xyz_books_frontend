import Head from 'next/head';

import Header from 'src/views/Header';
import Banner1 from 'src/views/Banner1';
import Banner2 from 'src/views/Banner2';

export default function Home() {
  return (
    <>
      <Head>
        <title>XYZ Books</title>
        <meta name="description" content="XYZ Books" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Header />
          <Banner1 />
          <Banner2 />
      </main>
    </>
  )
}
