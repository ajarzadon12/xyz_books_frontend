import Head from 'next/head';

import Header from 'src/views/Header';

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
      </main>
    </>
  )
}
