import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import Image from 'next/image'

import AboutContainer from '../../components/aboutContainer/aboutContainer'

import styles from '../../styles/page_styles/projects.module.scss'
import React from 'react'
import TimeLine from '../../components/aboutContainer/timeLine'
import ResponsiveComponent from '../../components/responsiveComponent/responsive';

//import ImageCarousel from "../components/carousel"
const title:string = "HealthCare Monitoring Malaysia";
export default function Home({
}) {
  return (

    <Layout home showNavbar={false}>

      <Head>
        <title>{title}</title>

      </Head>
      <div className={styles.mainContainer}>

        {AboutContainer({
          img_url: "/images/blog-1.jpg",
          position1: 50,
          position2: 70,
          children: [
            <div style={{ bottom: 0 }}>
              {ResponsiveComponent(
                  
                  <>
                <div className={styles.projectIntroTile}>
                  <h1>{title}</h1>
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
          <h2 style={{color:"#6fe9d5"}}>A chapter to defined</h2>
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
        unoptimized={false}
        src="/images/IMG_6882.jpg"
        alt="Picture of the author"
        layout="responsive"
   quality={50}
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
          title: "Team Contract",
          items: [{
            dateTime: "1. Regular team meetings organization", title: "",
            //etail:"improve UI and UX, adding more columns to the data table, menu to control the appearance of UI, data visualization"
            detail: <div>
              {buildRow('Weekly meetings will be set up prior to majority vote')}
              {buildRow('All team members will be punctual, meetings will start 5 minutes after the agreed start time')}
              {buildRow('All team members will remain in the meeting until all tasks for that meeting are completed unless there are emergency circumstances')}
              {buildRow('All team members will come to the meetings, read the minutes to be aware of the purpose of the meetings and come with ideas pertaining to the tasks and decisions to be made')}
             

            </div>
          },
          {
            dateTime: "2. What is important to us", title: "",
            //detail:"implement user interface of user login, data table of patients data, add and removal of the \patients to monitor, connection to server." 
            detail: <div>

{buildRow('All tasks need to be completed before due')}
{buildRow('Everyone would be responsible for their own task')}
{buildRow('Workloads will be distributed equally and seek agreement of all team members before assigning any task')}
{buildRow('Roles and responsibilities will be discussed and decided within the team')}
{buildRow('Always help each other out')}
{buildRow('Always keep up the team morale')}

            </div>
          },
          {
            dateTime: "3. How we treat each other", title: "",
            //detail:"implement user interface of user login, data table of patients data, add and removal of the \patients to monitor, connection to server." 
            detail: <div>

{buildRow('Everyone need to respect each other')}
{buildRow('Great team thrive on trust')}
{buildRow('Always listen first before pointing out each other viewpoint')}
{buildRow('Actively participate in solving problems or bring up ideas')}
{buildRow('Give positive feedback')}
{buildRow('Respect each other working habit')}

            </div>
          },
          ]
        }),
        <div>
        
          <h3>Team Members</h3>
          <table>
            <tr>
              <td style= {{paddingRight:"20px"}}>
              Muhammad Hakimi Aiman
              </td>
              <td>
              29275229
              </td>
            </tr>
            <tr><td >Demond Wong Qi Jun</td><td>29037859</td></tr>
            <tr><td>Tai Mun Hong</td><td>29037344</td></tr>
            <tr><td>Warit Hiranmateekul</td><td>30247640</td></tr>
            <tr><td>Yu Hang Ang</td><td>29561647</td></tr>
          </table>
         
          


        </div>]
        )}


      </div>








    </Layout>
  )
}


function buildRow(text:string){
 return <div><div style={{columns:"2",display:"flex",alignItems:"center"}}><div style={{fontWeight:"bold",fontSize:"24px"}}>-&nbsp;</div> <div>{text}</div></div><br/></div>;
}