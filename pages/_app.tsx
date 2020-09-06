import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import React from 'react';
import '../styles/global.css';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="./nprogress.css" />
      </Head>
      <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />

    </AnimatePresence>
    </>
  )
}
