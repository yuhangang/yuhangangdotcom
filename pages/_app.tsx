
import Head from 'next/head';
import { Router } from 'next/router';

import React from 'react';
import '../styles/global.css';




export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="./nprogress.css" />
      </Head>
   
      <Component {...pageProps} />


    </>
  )
}
