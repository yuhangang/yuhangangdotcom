import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.scss';
import Nav from './navBar/NavBar';
import Nav1 from './navBar/Nav';
import ProfileLink from './profile_link/profile_link';
import ScrollToTop from './scrollToTopButton/scrollToTopButton';
const name = 'Yuhangang'
export const siteTitle = 'yuhangang'
const EmailLinks =<div>contact : <a href="mailto: redrainhang@gmail.com" className={styles.email_link}>redrainhang@gmail.com</a></div>;

const postVariants = {
  initial: { scale: 1, y: 0, opacity: 0.5 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    scale: 1,
    y: 0,
    opacity: 0.5,
    transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
  >
   
    <div className={styles.background}>

      <Nav></Nav>

      
      <div className={styles.container}>


        <header className={styles.header}>

          {home ? (
            <>


            </>
          ) : (
              <>

                <h2 className={utilStyles.headingLg}>
                  <Link href="/">
                    <a className={utilStyles.colorInherit}>{name}</a>
                  </Link>
                </h2>
              </>
            )}
        </header>
        <motion.div variants={postVariants}>
        <main>
          
          {children}</main>
          </motion.div> 
      </div>
      
        <div className={styles.bottomLink}>
        <ProfileLink></ProfileLink>
    
        
        </div>
      <div className={styles.bottom}>
        <div className={styles.absoluteBottom}>
        Copyright © 2020 Yuhangang. All rights reserved.
    

        </div>
   
       
      </div>
      <ScrollToTop/>
    </div>
    </motion.div>
   
  )
}