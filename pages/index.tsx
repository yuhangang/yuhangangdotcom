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
          img_url: "/images/IMG_6812.jpg",
          position1: 0,
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
              { dateTime: "7/2021 -", title: "Flutter Developer, Artisan IT Solutions", detail:
              ""
            },
              { dateTime: "11/2020 - 2/2021", title: "Mobile Application Intern, Fehux", detail:
              "Developing and testing user interfaces and module using Flutter and React Native. \
              Refactoring and improving existing features and module."
            },
             
              { dateTime: "11/2019 - 2/2020", title: "Javascript Developer Intern, SmartB Solutions", detail:
                "Collaborated with fellows to developing and maintaining customized features for clients."
              },
              { dateTime: "1/12/2018 - 29/2/2020", title: 'Part Time jobs, QMO Academy',
              detail:"Had a part time jobs as a photographer, videographer and graphic designer"},
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

