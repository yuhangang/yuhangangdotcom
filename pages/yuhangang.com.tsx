import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'


import AboutContainer from '../components/aboutContainer/aboutContainer'

import styles from '../styles/page_styles/projects.module.scss'
import React from 'react'
import TimeLine from '../components/aboutContainer/timeLine'
import ResponsiveComponent from '../components/responsiveComponent/responsive';

import GithubLink from "../components/profile_link/github_link";

const title:string = siteTitle+" - About this Website";

export default function Home({
}) {
  return (

    <Layout home>

      <Head>
        <title>{title}</title>

      </Head>
      <div className={styles.mainContainer}>

        {AboutContainer({
          img_url: "/images/website.png",
          position1: 50,
          position2: 50,
          children: [
            <div style={{ bottom: 0 }}>
              {ResponsiveComponent(
                <div className={styles.projectIntroTile}>
                  <h1>About This Website</h1>
               My personal blog,
               the first website designed and developed by me. I choose Next.js as framework and wrote code in Typescript, all of the pages is static generated. The user interface is repsonsive which compatible with phones, tablet and PCs.
              
               
                </div>
              )

              }

            </div>




          ]
        })}
        {GithubLink("https://github.com/yuhangang/yuhangangdotcom")}
        {ResponsiveComponent([TimeLine({
          title: "Time Line",
          items: [{
            dateTime: "6/9/2020", title: "Publish of first version",
    
            detail: <div>
         
            </div>
          },
          {
            dateTime: "mid 7/2020 - early 9/2020", title: "Learning and Development",
           
            detail: <div>

              <ul>Learning... Building... Fixing... Refactoring...</ul>
            </div>
          },
          ]
        }),
        <div>
          <h2>Learning Outcome</h2>
          <h3>What did I learn?</h3>
          <ul>- Responsive UI/UX design</ul>
          <ul>- Familiar with HTML and CSS/SASS</ul>
          <ul>- build reusable components for React.js frameworks</ul>
          <ul></ul>
    


         
        </div>]
        )}


      </div>








    </Layout>
  )
}

