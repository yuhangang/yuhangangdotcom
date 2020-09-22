import Head from 'next/head';
import React from 'react';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/page_styles/home.module.scss';






const MobileMain =()=>{
  return(

<div className={styles.mainContainerItems} 
style={{
  backgroundImage:"url("+`$require("./images/IMG_6812.jpg")`+")"
}}>

<div className={styles.mainContainerTitle}>Journey<br></br>Starts Here</div>
<a href='/about' className={styles.homeButton}>about me</a>
<a href='/projects' className={styles.homeButton}>my works</a>


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

