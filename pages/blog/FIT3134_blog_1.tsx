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
                <div className={styles.projectIntroTile} style={{color:"rgba(255,255,255,0.7)",textAlign:'center'}}>
                  <h1 style={{textAlign:"center"}}>Blog 1 : {title}</h1>
                  Muhammad Hakimi Aiman, Demond Wong Qi Jun, Tai Mun Hong, Warit Hiranmateekul, Yu Hang Ang	
               
              
              
                </div>
              
                </>
              )

              }
 
            </div>




          ]
        })}
        {ResponsiveComponent([
        
        <>
          <h2 style={{color:"#6fe9d5"}}>Challenge Exploration</h2>
          <h3>What’s Happening + Intended Actions, Target Users and Intended Outcome</h3>
          First and foremost, our team would like to introduce a potential problem that is occurring around us in Malaysia.
                  According to a Contextual Analysis of the Malaysian Health System in 2016, Malaysia will become an ‘ageing’ society
                  by 2020, which is last year. This means that there will be around 7% of the population aged more than 65.
                  
                  <br/><br/>
                  Furthermore,
                   in just another mere 20 years, the estimated percentage of this population will be doubled. These changes will be accompanied
                    by a significant increase of Non-Communicable Diseases (NCD), which are chronic diseases like heart attack, cancer,
                     diabetes and more. This will greatly impact many parties (2021).
                     <br>
                     </br>

                     For now, our team will list out our intended actions, target users and also intended outcome. Our team intends to create a health
                      monitoring application accompanied by a few wearable monitoring tools that are able to monitor the vitals of the user. It is also
                       able to make an emergency call on behalf of the user if one of the vitals is seriously wrong. Furthermore, the application allows
                        communication between the doctor and his or her patients for a much easier consultation session, either by calling, messaging or
                         video calling. 
                         <br></br>
                         <br></br>
                         Otherwise, the patient can also use the application to make a reservation with the doctor if they prefer to meet
                          face-to-face. From the previous examples of use cases, it is clear that the target users, or customers for our solution are
                           mostly doctors and patients. As for the intended outcome for our solution, it is to make sure that patients can always keep
                            their health in check, especially patients who already have chronic diseases and the elderlies. 


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
      <h3>What are the views/ perspectives at this level?</h3>
      <h5>Country (Malaysia)</h5>
      {buildRowNarrow('More funds had to be put into the current healthcare system to keep up with the declining health')}
      {buildRowNarrow('Decreasing the price of  wearables and monitoring tools to a reasonable and affordable price for the user')}

      <h5>Hospital</h5>
      {buildRowNarrow('High occupancy rate of hospitals, increased pressure on the healthcare workers, costs more operating expenses and investment to expand the wards')}
   

      <h5>Community</h5>
      {buildRowNarrow('People may find it time consuming to help those people who are in need, even though they want to help')}
      {buildRowNarrow('People who suddenly collapse due to health issues may cause public disturbance')}

      <h5>Community</h5>
      {buildRowNarrow('Getting professional checkups on a weekly or monthly basis is too time consuming for some people')}
      {buildRowNarrow('Getting annual checkups might not be a very effective way, as some readings may suddenly be dangerous')}
      <br/>
      <br/>

      <h3>Who are the key players in this space?</h3>
      <h5>Healthcare Professionals</h5>
      {buildRowNarrow('Receive notification from the Hospital/ HealthCare centre')}
      {buildRowNarrow('Provides medical solution to the patient according to the patient’s health issue')}

      <h5>Patient</h5>
      {buildRowNarrow('Patients are required to wear some wearables monitoring tools')}
      {buildRowNarrow('Receive notification from the hospital or doctors if there’s any health issue')}
      {buildRowNarrow('RProvide feedbacks to hospital or doctors')}
      <h5>Hospital/HealthCare centre</h5>
      {buildRowNarrow('Allocate respective healthcare professionals if there’s an emergency call through the application')}
      <h5>Govt</h5>
      {buildRowNarrow('Provide funds for this project')}


        <br></br>
        <br></br>
        <h3>References</h3>
        <a href='https://www.moh.gov.my/moh/resources/Vol_1_MHSR_Contextual_Analysis_2016.pdf' style={{color:"lightskyblue"}}>[1] Moh.gov.my. 2021. [online] Available at: https://www.moh.gov.my/moh/resources/Vol_1_MHSR_Contextual_Analysis_2016.pdf [Accessed 18 March 2021].
        </a>
        <br></br>
        </>
    ])}

       
        {ResponsiveComponent(
          [TimeLine({
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

function buildRowNarrow(text:string){
  return <div style={{columns:"2",display:"flex",alignItems:"center"}}><div style={{fontWeight:"bold",fontSize:"24px"}}>-&nbsp;</div> <div>{text}</div></div>;
 }