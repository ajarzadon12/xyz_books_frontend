import Head from 'next/head';

import Mask from 'src/views/Mask';
import Header from 'src/views/Header';
import ShowBook from 'src/views/ShowBook';
import Footer from 'src/views/Footer';

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
        <Mask />
        <Header />
        <ShowBook />
        <Footer />
      </main>
    </>
  )
}
