import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/page_styles/home.module.scss';






const MobileMain =()=>{
  return(

<div className={styles.mainContainerItems}>

<div className={styles.mainContainerTitle}>Journey<br></br>Starts Here</div>
<div className={styles.homeButton}>
<Link href='/about' >about me</Link>
</div>
<div className={styles.homeButton}>
<Link href='/projects'>my works</Link>
</div>




    </div>
    
  )
}



export default function Home() {
  return (

    <Layout home>

      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.mainContainer}>
      <MobileMain/>
      
      </div>
   
    
    </Layout>
  )
}

