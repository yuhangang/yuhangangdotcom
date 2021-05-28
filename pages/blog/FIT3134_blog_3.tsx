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
          img_url: "/images/blog1/blog-1.jpg",
          position1: 50,
          position2: 70,
          children: [
            <div style={{ bottom: 0 }}>
              {ResponsiveComponent(
                  
                  <>
                <div className={styles.projectIntroTile} style={{color:"rgba(255,255,255,0.7)",textAlign:'center'}}>
                  <h1 style={{textAlign:"center"}}>{title}</h1>
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
          <h2 style={{color:"#6fe9d5"}}>Possible IP for ReMonitoring</h2>
         
      <h3>Design</h3>
      {buildRowNarrow('Low cost and effective IP to consider, especially where it can be obtained quickly')}
      {buildRowNarrow('Aesthetics can be used as an extra point for our product to attract more customers')}
      {buildRowNarrow('High value due to its low cost and fast approval')}
      {buildRowNarrow('Besides the aesthetics of the wearables, the design of the user interface of the app can also be protected under this.')}
      {buildRowNarrow('As a conclusion, it is best that both the design of the wearables and GUI of the app can be protected under this IP, due to its low cost and fast application.')}

<br/>
<br/>
      <h3>Patent</h3>
      {buildRowNarrow('Focuses utility patent')}
      {buildRowNarrow('Design patent is unlikely to be used since the wearable device has a common design')}
      {buildRowNarrow('Covers electrical inventions')}
      <div style={{height:5}}></div>
      <div style={{marginLeft:50}}> {buildRowNarrow('the components of the wearable used to detect certain health signs')}</div>
      <div style={{marginLeft:50}}> {buildRowNarrow('the wearable device itself')}</div>
      <div style={{height:15}}></div>
      {buildRowNarrow('Used to License the Software')}
      <div style={{height:5}}></div>
      <div style={{marginLeft:50}}> {buildRowNarrow('the methods used by the application')}</div>
      <div style={{marginLeft:50}}> {buildRowNarrow('the application itself')}</div>
      <div style={{height:15}}></div>
      {buildRowNarrow('patent will be filed internationally to protect against the competitors in different countries')}
      {buildRowNarrow('business method patent could be used for "Doctor consultation through an application"')}
   
<br/>
<br/>
      <h3>Trademark</h3>

      {buildRowNarrow('Provides recognition to the quality of the product')}
      <div style={{height:5}}></div>
      <div style={{marginLeft:50}}> {buildRowNarrow('Create an unique image towards customers')}</div>
      <div style={{marginLeft:50}}> {buildRowNarrow('Build trust towards permanent customers')}</div>
      <div style={{marginLeft:50}}> {buildRowNarrow('Attract new customers')}</div>
      <div style={{height:15}}></div>
      {buildRowNarrow('Differentiate product with other competitor')}
      <div style={{height:5}}></div>
      <div style={{marginLeft:50}}> {buildRowNarrow('Different logo')}</div>
      <div style={{height:15}}></div>
      {buildRowNarrow('Protect our product at low cost')}
      <div style={{height:5}}></div>
      <div style={{marginLeft:50}}> {buildRowNarrow('No other people can steal our product')}</div>
      <div style={{marginLeft:50}}> {buildRowNarrow('Cost effective')}</div>
      <div style={{height:15}}></div>
      {buildRowNarrow('Therefore, protecting our wearables and REMONITOR application with a trademark is one of the simplest and cost effective solutions.')}
     
<br/>
<br/>

      <h3>Copyright</h3>
      {buildRowNarrow('Cover most of the contents created by our company, including books, advertisements, brochures, spec sheets, catalogs, manuals, parts lists, promotional materials, packaging and decorative graphics, fabric designs, photographs, pictures, video presentations, audio recordings, and software.')}
      <div style={{height:5}}></div>
      {buildRowNarrow("Avoid the infringement of the contents, such as  unauthorized reusing and spreading of content,tampering or distortion of information by other companies, leakage on company’s trade secrets. These infringements will damage our company's benefit and reputation.")}
<br/>
<br/>    
      
      <h3>Confidentiality/trade secret</h3>
      {buildRowNarrow("Use of Non Disclosure Agreement to protect company's confidentiality")}
     
      {buildRowNarrow("Could be used to protect the algorithm used to detect health signs")}
      {buildRowNarrow("Could also be used to protect the data collected from users")}
      {buildRowNarrow("Strategic plans, marketing programs and financial plans could also be protected")}
    
      



     

      <hr className="rounded" style={{marginTop:'10vw',marginBottom:"10vw"}}></hr>
       
        <h2 style={{color:"#6fe9d5"}}>Reflective Analysis Part 2 (Group reflection)
</h2>
<h5>What did we learn and experience and why does it matter?</h5>

<br/>
Continuing on the previous reflective analysis, as for the past few weeks,
there are a few more useful things that we have learnt relating to entrepreneurship.
First, we have been exposed to how to be a good leader and the type of leader that can make
someone possible to be such as leader by position or personality and many more. We also learnt
about traits and skills for a leader to have or adapted to become a good leader. Furthermore,
there are also strategies or styles to be used when becoming a leader such as 5 leader strategies
and Goleman’s 6 leadership styles. These strategies help to grow more value for the leader. Apart
from that, we were also taught about types of possible risks that can harm a startup. To counter
such issues, a risk management plan and the process to do so have been explained to us. This process
will help a lot in order to recognize such risks and have a proper process to mitigate them to avoid
bigger issues in future. Next thing that we learnt is that, the proper communication skills to
communicate with the stakeholders. The pitch canvas will serve as a proper guide to think about
the content that these people would be mostly interested to listen to regarding our business and 
what we are doing. 
<br/>
<br/>
<br/>
Not to mention, we also have been demonstrating the importance of the basics of startup finances
such as managing the possible costs that will take part when running a startup or business and
how we can make money from our product.  For instance, we can identify the elements that will
represent a cost to our startup from BMC and service blueprint. There are also some fundamental
calculations that we are going to need as we go for the finance planning such as cost to acquire,
customer retention rate, etc. Other than that, practicing to think the same way of an investor to
help when presenting our business idea and what will they be interested in to hear.
<br/>
<br/>
<br/>
We were also introduced to the common mistakes that people always make when doing a venture pitch
such as the value proposition of the solution is poorly defined or becomes unclear on what the product
is at some point. Finally, we have been taught about the intellectual property (IP) of our startup that
involves patenting,trade marks, designs, copyright and confidential information together with IP rights
and the importance of securing them. 
<br/>
<br/>
<br/>
How this knowledge influences our thinking and actions are pretty much similar to what have been stated
before in the last sections of the blog of the previous reflective analysis and to add more, there are so
many things that need to be taken into account when running a startup and this will help to reduce the
risk that can harm our startup. For instance, now we need to think about all those possible costs that
can be financially harmful to our business if not properly managed. Additionally, a good mitigation plan
will reduce the time to counter such issues as these are already properly planned to handle it. Finally,
now we have the general ideas on how we can attract the stakeholders as well as the investors to be
interested in our product and business idea. Finally, when doing a pitch we will focus directly on the
main points that we want to voice out and reduce the time when talking about it but emphasize on it and
make it very clear. This helps us to attract people that are interested in our business ideas.
        </>
    ])}

       
        {ResponsiveComponent(
          [<hr className="rounded" style={{marginTop:'10vw',marginBottom:"10vw"}}></hr>,TimeLine({
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
{buildRow("Respect each other's working habits.")}

            </div>
          },
          {
            dateTime: "4. What we should not do", title: "",
            //detail:"implement user interface of user login, data table of patients data, add and removal of the \patients to monitor, connection to server." 
            detail: <div>

{buildRow('Do not treat this assignment as an individual assignment')}
{buildRow('Do not expect our teammate to do our part of the work for you')}
{buildRow('Do not work on this assignment on your own')}
{buildRow('Trying to rush other team members to finish tasks earlier than agreed due time')}
{buildRow('Do not include any extra tasks or documentation without majority approval')}


            </div>
          },
          {
            dateTime: "5. How we should work", title: "",
            //detail:"implement user interface of user login, data table of patients data, add and removal of the \patients to monitor, connection to server." 
            detail: <div>

{buildRow('Respect our team members’ ideas and give everyone chances to voice their opinions')}
{buildRow('Be aware of the deadlines set by the team and the teaching team and make sure to complete the given tasks before the deadlines not expect our teammate to do our part of the work for you')}
{buildRow('Do not work on this Work professionally as if we are working in a workplace on your own')}
{buildRow('Trying to rush other team Make sure that nobody has too much workload while others have less workload when distributing the tasks to finish tasks earlier than agreed due time')}
{buildRow("Always ask first before adjusting any other teammates' tasks")}


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
         
          <br></br>
        <br></br>
        <br></br>
        <br></br>


        </div>]
        )}


      </div>








    </Layout>
  )
}


function buildRow(text:string){
 return <div><div style={{columns:"2",display:"flex"}}><div style={{fontWeight:"bold",fontSize:"24px"}}>-&nbsp;</div> <div>{text}</div></div><br/></div>;
}

function buildRowNarrow(text:string){
  return <div style={{columns:"2",display:"flex"}}><div style={{fontWeight:"bold",fontSize:"24px"}}>-&nbsp;</div> <div>{text}</div></div>;
 }