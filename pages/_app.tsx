import '../src/styles/globals.scss'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Navbar from '../src/components/Navigation/Navbar'
import Footer from '../src/components/Footer/Footer'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HOW Stanica</title>
        <meta name="description" content="Strona internetowa Harcerskiego Ośrodka Wodnego Stanica" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='outerWrapper'>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </div>
    </>
    )
}

export default MyApp
