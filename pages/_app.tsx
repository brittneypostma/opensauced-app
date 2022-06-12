//Idea came from this repo: https://github.com/brookslybrand/next-nested-layouts

import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType<any>;
  };
};

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <>
      <Head>
        <title>Hacktoberfest Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
  
}

export default MyApp