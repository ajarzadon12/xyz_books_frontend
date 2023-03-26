import Head from 'next/head';

import Mask from 'src/views/Mask';
import Header from 'src/views/Header';
import Banner1 from 'src/views/Banner1';
import Banner2 from 'src/views/Banner2';
import Banner3 from 'src/views/Banner3';
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
        <Banner1 />
        <Banner2 />
        <Banner3 />
        <Footer />
      </main>
    </>
  )
}
