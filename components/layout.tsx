
import Link from 'next/link';
import React from 'react';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.scss';
import Nav from './navBar/NavBar';
import ProfileLink from './profile_link/profile_link';
import ScrollToTop from './scrollToTopButton/scrollToTopButton';
const name = 'Yuhangang'
export const siteTitle = 'yuhangang'


export default function Layout({
  children,
  home,
  showNavbar
}: {
  children: React.ReactNode
  home?: boolean
  showNavbar?:boolean
}) {
  return (
   
   
    <div className={styles.background}>

      {(showNavbar !== false) ? <Nav></Nav>: null}

      
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
      
        <main>
          
          {children}</main>
         
      </div>
      
        
     {(showNavbar !== false)? <> 
      <div className={styles.bottomLink}>
        <ProfileLink></ProfileLink>
    
        
        </div>
       <div className={styles.bottom}>
        <div className={styles.absoluteBottom}>
        Copyright © 2020 Yuhangang. All rights reserved.
    

        </div>
   
       
      </div>
      <ScrollToTop/></>:null}
    </div>
   
   
  )
}