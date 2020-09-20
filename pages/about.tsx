import Head from 'next/head'
import React from 'react'
import AboutContainer from '../components/aboutContainer/aboutContainer'
import Skills from '../components/aboutContainer/skills'
import TimeLine from '../components/aboutContainer/timeLine'
import Layout, { siteTitle } from '../components/layout'
import ResponsiveComponent from '../components/responsiveComponent/responsive'
import styles from '../styles/page_styles/about.module.scss'



const title:string = siteTitle+" - About Me";


export default function About({
 
}) {
  return (

    <Layout home>

      <Head>
  <title>{title}</title>

      </Head>
      <div className={styles.mainContainer}>

        {AboutContainer({
          img_url: "/images/IMG_2112.jpg",
          position1: 50,
          position2: 70,
          children: [
            <div style={{paddingTop:"25vh"}}>
            
            {ResponsiveComponent([
              <div className={styles.profileContainer}>
              <a target="_blank" className={styles.profilebox}>
              
              <img src="/images/profile.jpg" className={styles.profile_picture}></img>
                        </a>
                        <div className={styles.intro}>
                Yu Hang Ang, 22, an final year computer science student from Monash University Malaysia. 
                I'm currently working on my own projects in web app and mobiles app and looking forward to opportunities in software development and data science fields.
                  
                </div>
                  </div>
              
            ]
              )

          }
</div>

          ]
        })}
        {ResponsiveComponent([
          <TimeLine
            title="Experiences"
            items={[
              {
                dateTime: "7/2020 - 8/2020", title: "Website Development", link: '/yuhangang.com',
                detail:"built my first personal website from scratch."
              },
              { dateTime: "4/2019 - 6/2020", title: "Flutter Application Development", link: '/theranos' ,
              detail:"In an Software development unit, collaborated with group mate to designed and developed an mobile application to tracking latest patients' data using flutter based on requirement."},
              { dateTime: "11/2019 - 2/2020", title: "Summer Internship", detail:
                "Worked as a Javascript Developer in SmartB Solutions Sdn Bhd, a cloud-based ERP systems provider.\
                Collaborated with fellows to developing and maintaining customized features for clients."
              },
              { dateTime: "1/12/2018 - 29/2/2020", title: 'Part Time jobs',
              detail:"Had a part time jobs as a photographer, videographer and graphic designer in QMO Academy Sdn Bhd, Melaka."},
              { dateTime: "1/3/2018", title: '"Hello World!"',detail:"Started to study for computer science degree"}
              ]}
          />
        ,
        <Skills/>
      ])}
      </div>
    </Layout>
  )
}

