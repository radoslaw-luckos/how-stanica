import '../styles/globals.scss'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HOW Stanica</title>
        <meta name="description" content="Strona internetowa Harcerskiego Ośrodka Wodnego Stanica" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>nav</h1>
      <Component {...pageProps} />
      <footer>
        footer
      </footer>
    </>
    )
}

export default MyApp
