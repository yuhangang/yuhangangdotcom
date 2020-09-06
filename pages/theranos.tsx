import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'


import AboutContainer from '../components/aboutContainer/aboutContainer'

import styles from '../styles/page_styles/projects.module.scss'
import React from 'react'
import TimeLine from '../components/aboutContainer/timeLine'
import ResponsiveComponent from '../components/responsiveComponent/responsive';

import GithubLink from "../components/profile_link/github_link";
//import ImageCarousel from "../components/carousel"
const title:string = siteTitle+" - Theranos";
export default function Home({
}) {
  return (

    <Layout home>

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
                <div className={styles.projectIntroTile}>
                  <h1>Theranos, a Flutter HealthCare app</h1>
               An Flutter App connecting FHIR server which stores electronic medical records, to implement login functionality.. The users able to select which patients
               he/she wants to monitor, and the app should show the latest total cholesterol and blood pressure values of the selected patients in both table and chart format.
               
               {GithubLink("https://github.com/angyuhang98/fhir-theranos")}
              
                </div>
              )

              }

            </div>




          ]
        })}
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

