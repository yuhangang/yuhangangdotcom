import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import Image from 'next/image'

import AboutContainer from '../../components/aboutContainer/aboutContainer'

import styles from '../../styles/page_styles/projects.module.scss'
import React from 'react'
import TimeLine from '../../components/aboutContainer/timeLine'
import ResponsiveComponent from '../../components/responsiveComponent/responsive';
import AwesomeSlider from 'react-awesome-slider'
import AwsSliderStyles from '../../styles/page_styles/styles.module.scss'
import sliderStyles from "../../styles/page_styles/FIT3134_blog_2.module.scss"

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
          img_url: "/images/blog2/blog-2.jpg",
          position1: 50,
          position2: 50,
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
         <h2 style={{color:"#6fe9d5"}}>Competitive Analysis</h2>
          <h3>Foreign Startups</h3>
          We consider the foreign healthcare startups, especially <a href="https://www.healthrecoverysolutions.com/" style={{color:"rgba(255,255,255,0.7)"}}>Health Recovery Solutions</a> from the United States,
          as our primary opponents in the market. The remote healthcare monitoring startup found and operates in developed
          countries which has advantages in R&D and funding. Healthcare Recovery Solutions already launched their products
          and have <a href="https://www.doc2us.com/vision-mission-core-values" style={{color:"rgba(255,255,255,0.7)"}}>secured 70 millions USD series C funding.</a>
<br/>
<br/>
While our advantages are lower cost of operation and product development, for example average annual salary of software
engineers in the United States is around<a href ="https://www.indeed.com/career/software-engineer/salaries"  style={{color:"rgba(255,255,255,0.7)"}}>110,000 USD</a>, while Malaysia is <a href ="https://www.payscale.com/research/MY/Job=Software_Engineer/Salary"  style={{color:"rgba(255,255,255,0.7)"}}>11,800 USD</a>, so we can offer more affordable products. Besides
that, Asia has more than half of the global population and has a lot of emerging economies. As the startup raised in Asia,
due to geographical and cultural familiarity, so we can develop product and business strategy more suitable for Asia geography,
cultural and economic status.
<br/>
<br/>
<br/>
          <h3>Local Startups</h3>
          Compared to other local startups like Doc2us and Speedoc.
          
          <br/>
          <br/>
          <a href="https://www.doc2us.com/vision-mission-core-values" style={{color:"rgba(255,255,255,0.7)"}}>Doc2us</a>  is a online healthcare consulting and drug delivery platform. Since it doesn't have either door to door services or remote monitoring. The healthcare professionals
          can only diagnosis the patient based on video cam or oral description by patients. So the use case of Doc2us products may not suit the certain situation which required to lot more
          information. But the advantages of their solutions is it can fully operated remotely and avoiding the completivity of using healthcare monitoring devices.
          <br/>
          <br/>
          <a href="https://speedoc.com/my/about-us" style={{color:"rgba(255,255,255,0.7)"}}> Speedoc</a> not only offer consulation, but they also provider healthcare services door to door,
          like doctoring, nursing, ambulances and healthcare screening. In terms of services quality, door to door healthcare monitoring avoid the need of patient to leave home
          for hospital or clinic, it's also have better services quality compared to remote monitoring because patient able to meet with healthcare professional face-to-face.  
          <br/>
          <br/>
          Although they entered the market earlier compared to us.
          Their products are still  doesn’t have functionality to provide healthcare monitoring remotely, which make healthcare more afforable, efficient and accessible. 



  
         <br/>
         <br/>
         It’s possible for them to launch a similar product with us by developing in house or collaborating with foreign
         startup.

         Although they can promote the products to existing customers, at times it may be too late as our products
         already start entering the market and attracting the users.
          <br/>
<br/>
<br/>
<br/>
         
          <h2 style={{color:"#6fe9d5"}}>Prototype Design</h2>
    

          <br/>

         <AwesomeSlider cssModule={AwsSliderStyles} className={sliderStyles.awsBtn} fillParent={false}
    selected={0}
    infinite={false}
    bullets

  >

<div style={{background:"rgba(255,255,255,0.2)",width:"75%",right:"0",left:"0",margin:"auto"}}>
 
  <Image
      
      src="/images/blog2/Monitoring.png"
      alt="Picture of the author"
      layout="fill"

      
    />



</div>
<div style={{width:"70%",margin:"auto",right:"0",left:"0"}}>
<Image
      
        src="/images/blog2/Emergency_Contact.png"
        alt="Picture of the author"
        layout="fill"

        
      />
</div>
<div style={{width:"38%",margin:"auto",right:"0",left:"0"}}>
  <Image
      
        src="/images/blog2/Getting_Started.png"
        alt="Picture of the author"
        layout="fill"

        
      />
    
    <br/>
     
</div>

<div style={{height:"85%",margin:"auto",top:"0",bottom:"0"}}><Image
      
      src="/images/blog2/Doctor_Subbed.png"
      alt="Picture of the author"
      layout="fill"

      
    />
    </div>

<div style={{width:"90%",margin:"auto",right:"0",left:"0"}}><Image
      
      src="/images/blog2/Assign_Doctor.png"
      alt="Picture of the author"
      layout="fill"

      
    />
</div>


  </AwesomeSlider>
<br/>
<br/>
<br/>
<br/>

          <h2 style={{color:"#6fe9d5"}}>Reflective Analysis</h2>
          <h3>What did we learn and/or experience? Why does it matter?</h3>
          Throughout the last 6 weeks of this unit, a lot has already been going on workshops
          and listening to experienced guest speakers from various fields and companies and
          there will be more to be learned as there is still more going on in later weeks.
          However below will briefly explain what we have learned and experience and why it
           is important and matters to us.

                  
                  <br/><br/>

                  At the start of the unit, we have been introduced and exposed to different
                  types of startup and startup companies in Malaysia. We also were taught the
                  reasons behind the failure of some of the startup companies. Other than that,
                   we also learnt the correlations between entrepreneurship and  innovation on
                  how learning entrepreneurship can help to create more innovative solutions to
                   solve various problems through different ways of design thinking. In addition
                    to this, we also have been opened up to a system thinking where we need to
                    think on the design challenge for a specific situation that involves our
                    intended action, the target user or customer and intended outcome. Making it
                    too broad or too narrow would be troublesome when digging deeper into the
                    problem for inventing a solution. This helps us to properly understand the
                      problems that exactly need to be solved and who we are developing the solution for.
                      <br/>
                      <br/>
            As the unit goes on, we have been brought about the Human-Centered design, and why
            it is important. It helps us in understanding where and how we should initiate to
            create a solution and introduces a well more proper process model that can be adapted
            for more efficiency and quality when doing the design thinking. It also helps to further
            understand the behaviours and needs of the end user, their motivations, thoughts and
            feelings. So that, we can focus on the target customers that will get the most benefits
            from the solutions that will be invented. Furthermore, we learnt on the alternative way
            to further knowing about the customers problems and intended solutions that would solve
            the problem and adapting to 5 stages of design thinking which are Empathise , Define,
            Ideate, Prototype and Test.  This is important because this framework helps in inspiring
            creative thinking and strategies that will lead the inventors to create more user-friendly
            products and solutions that  will help in solving the particular problem. It is important
            to highlight that these design thinking phases are not necessarily on a single or linear
            path. Different stages might help to spark on different new ideas or show new findings in
            the user journey that will lead to new iterations of phases that have already been completed.
            It is also worth to mention that, when using the 5 stages of design thinking, inventors
            will constantly examine new and untested angles.
            <br/>
            <br/>
            Finally, for the last two weeks, we have been taught on how to build up a service blueprint
            as well as Business Model Canvas (BMC). As for service blueprint, we found out that this
            blueprint is useful when managing a service in several different ways. For instance, it can
            be used to improve the design for an existing service or to design a new service.  When the
            current service operation is explicit, we know how it will be operated in the future. Other
            than that, it also serves as a guide for implementing the services plan by indicating the
            sequence of steps needed to deliver the experience. It also helps businesses to identify the
            weaknesses, for instance poor user experiences are often due to an internal organizational
            shortcoming. In the same way, it also helps in identifying opportunities for better optimization
            and continuous quality improvement. As for the Business Model Canvas, we learnt that, when a
            business needs a definition of how to get their solutions or products to reach the customers, BMC
            would help in defining them.  When a BMC is clear and concise, it helps in documenting the startup
            journey, so that it can be easily modified as it goes along. It is useful for easier communication
            among the team, stakeholders, partners and as well as employees to come on board with the vision.
            Finally, it helps in reducing the risk of failure. This is because BMC helps in executing steps
            required to take the idea to market. Connecting the links between value propositions, customer
            segments and revenue streams, would be a good input to the marketing strategy, positioning
            statement as well as the sales strategy. It would have the advantages over the competitors who
            are immersed in the lengthy pages of the business plan.

                      <br/>
        

                  Furthermore,
                   in just another mere 20 years, the estimated percentage of this population will be doubled. These changes will be accompanied
                    by a significant increase of Non-Communicable Diseases (NCD), which are chronic diseases like heart attack, cancer,
                     diabetes and more. This will greatly impact many parties (2021).
                     <br/>
        <br/>
        <br/>
        <br/>

                
       
        <h3>How has this influenced our thinking/actions?</h3>
    
      
      
      Commonly we as a team or in fact personally, when bombing with ideas to create or develop something,
      we will straightaway jump into the development phase. If there is a problem with the products or
      solution that have been completed and ready, going back to square one to fix the problem would be
      very costly and time consuming. After a while being comfortably adapting to some design thinking
      method or process model, as it goes on we found out that using these methodologies have so many
      benefits. Therefore, whenever we start a project or build a product, we try to properly plan the
      process management and use this process model to strive for efficiencies and quality of our work.
      For instance, we make use of 5 stages of design thinking to generate ideas or solutions and maximise
      the needs of the customer or the end user. Besides that, before, when in a team, there is no role
      signed to the team members. Each of the teammates would work on the portions of the work that the
      type can be considered similar to what other teammates are doing. This results in increases in the
      dependencies with each other work. Because of this, now, each of the team members would have a role
      and responsibility so that they can focus on their own responsibility and produce better quality of
      their work. Furthermore, creating a team contract and having everyone agree with the ground rules
      results in better teamwork. For example, each of the team members would need to stick to the procedures
      when doing their work so that the risk of failure can be lessened. Unconsciously, this also helps in
      building a trust between each other.
      <br/>
        <br/>
        <br/>
        <br/>
       
        <h3>How have you and your group made decisions regarding your enterprise?</h3>
        Multiple factors were taken into consideration when making decisions regarding the enterprise. When exploring
        the ideas for a startup, we looked into how each of the potential ideas could solve the existing real-world
        problems. With this in mind, we looked into the existing problems and tried to come up with possible solutions.
        After numbers of ideas, we decided which idea would be the most viable to implement. To do this, we needed to
        research the market. We first researched the existing solutions to understand the likeliness of our solution being
        successful. We then compared our solution with the existing ones and decided on what is needed to be done to make
        sure that our product will be better than the existing ones. Furthermore, the ideas are also decided based on the
        customers’ needs to ensure that the solution is useful and is going to improve the quality of life for them. This
        includes the decision on how the solution would be implemented and how suitable it is for the target customer. For
        example, how difficult it is for an elder to operate an application on a smartphone. Besides, the cost for implementing
        the solutions is also taken into consideration when deciding on the business plan since it is crucial to be realistic
        on how much fund we would need and have. Likewise, the profit that the company would make also played a role in the
        decision making process. Another factor that affected the decision making process is the opportunities that may arise
        in the future. Since opportunities could mean the growth of the company and the increase in the company’s value, it is
        one of the most important aspects which we considered when making the decision regarding the enterprise.

   
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