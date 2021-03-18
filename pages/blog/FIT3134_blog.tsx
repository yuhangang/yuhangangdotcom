import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import Image from 'next/image'

import AboutContainer from '../../components/aboutContainer/aboutContainer'

import styles from '../../styles/page_styles/projects.module.scss'
import React from 'react'
import TimeLine from '../../components/aboutContainer/timeLine'
import ResponsiveComponent from '../../components/responsiveComponent/responsive';

//import ImageCarousel from "../components/carousel"
const title:string = siteTitle+" - Theranos";
export default function Home({
}) {
  return (

    <Layout home showNavbar={false}>

      <Head>
        <title>{title}</title>

      </Head>
      <div className={styles.mainContainer}>

        {AboutContainer({
          img_url: "/images/theranos.png",
          position1: 50,
          position2: 70,
          children: [
            <div style={{ bottom: 0 }}>
              {ResponsiveComponent(
                  
                  <>
                <div className={styles.projectIntroTile}>
                  <h1>Our Entrepuneurship title</h1>
               An Flutter App connecting FHIR server which stores electronic medical records, to implement login functionality. The users able to select which patients
               he/she wants to monitor, and the app should show the latest total cholesterol and blood pressure values of the selected patients in both table and chart format.
               
              
              
                </div>
              
                </>
              )

              }
 
            </div>




          ]
        })}
        {ResponsiveComponent([
        
        <>
          <h2>A chapter to defined</h2>
          <h3>A sub topic</h3>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum."

        <div style={{alignItems:"center",margin:"auto",width:"100%",justifyContent:"center"}}>
            <br/>
        <Image
        src="/images/IMG_6882.jpg"
        alt="Picture of the author"
   
        width={1280}
        height={720}
        
      />
      
      <div style={{color:"lightgrey",fontSize:"12px"}}>
      "An Image Description"
      </div>
        <br></br>
        </div>
        <br/>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum."
        </>
    ])}
       
        {ResponsiveComponent([TimeLine({
          title: "Time Line",
          items: [{
            dateTime: "6/2020", title: "Version 2 Update",
            //etail:"improve UI and UX, adding more columns to the data table, menu to control the appearance of UI, data visualization"
            detail: <div>
              <ul>- UI, UX improvements</ul>
              <ul>- More columns in data table</ul>

              <ul>- Data visualization</ul>

              <ul>- User can hide unwanted features and columns</ul>

            </div>
          },
          {
            dateTime: "4/2020", title: "Version 1",
            //detail:"implement user interface of user login, data table of patients data, add and removal of the \patients to monitor, connection to server." 
            detail: <div>

              <ul>- Interface of user login</ul>
              <ul>- Data table of patients data</ul>

              <ul>- Add and removal of the patients to monitor</ul>

              <ul> - Connection to server</ul>

            </div>
          },
          ]
        }),
        <div>
          <h2>Learning Outcomes</h2>
          <h3>What did I learn?</h3>
          <ul>- Cross Platform Application Development</ul>
          <ul>- Experience of teamwork in software development </ul>
          <ul>- building reusable widgets for applications</ul>
          


        </div>]
        )}


      </div>








    </Layout>
  )
}

