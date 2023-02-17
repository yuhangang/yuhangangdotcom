import Head from "next/head";
import React from "react";
import AboutContainer from "../components/aboutContainer/aboutContainer";
import Skills from "../components/aboutContainer/skills";
import TimeLine from "../components/aboutContainer/timeLine";
import Layout, { siteTitle } from "../components/layout";
import ResponsiveComponent from "../components/responsiveComponent/responsive";
import styles from "../styles/page_styles/about.module.scss";

const title: string = siteTitle + " - About Me";

export default function About({}) {
  let age: number = new Date().getFullYear() - 1998;
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
            <div style={{ paddingTop: "25vh" }}>
              {ResponsiveComponent([
                <div className={styles.profileContainer}>
                  <a target="_blank" className={styles.profilebox}>
                    <img
                      src="/images/profile.jpg"
                      className={styles.profile_picture}
                    ></img>
                  </a>
                  <div className={styles.intro}>
                    Yu Hang Ang ,{age}, an software engineer based in Kuala
                    Lumpur, Malaysia.
                  </div>
                </div>,
              ])}
            </div>,
          ],
        })}
        {ResponsiveComponent([
          <TimeLine
            title="Experiences"
            items={[
              {
                dateTime: "Feb 2022 - now",
                title: "Software Engineer, Snappymob Sdn Bhd",
                detail: (
                  <>
                    Working as vendor developer in My Astro application,
                    digitalise user managements of Astro products, collaborating
                    with different stakeholders, Participated in development and
                    maintenance of new reward modules; integrated CMS, remote
                    configuration internal and third party APIs.
                    <br />
                    <br /> I also worked on user notifications, data caching,
                    deep linking and debugging and refactoring of existing
                    product flows.
                  </>
                ),
              },
              {
                dateTime: "Jan 2021 - Feb 2022",
                title: "Mobile Developer, Artisan IT Solutions",
                detail: (
                  <>
                    Worked on an internal applications for idsMED, an
                    international medical equipment provider, for their
                    engineers outstations works. The applications stored all
                    data in relation database (Sqlite), to make sure engineer
                    able to access inventory, clients, team data and updates the
                    data during offline. <br /> <br /> Developed and maintained
                    fews other mobile applications for clients.
                  </>
                ),
              },
              {
                dateTime: "Nov 2020 - Feb 2021",
                title: "Mobile Application Intern, Fehux",
                detail:
                  "Developing and testing user interfaces and module using Flutter and React Native. \
              Refactoring and improving existing features and module.",
              },

              {
                dateTime: "Nov 2019 - Feb 2020",
                title: "Javascript Developer Intern, SmartB Solutions",
                detail:
                  "Collaborated with fellows to developing and maintaining customized features for clients.",
              },
              {
                dateTime: "Dec 2018 - Feb 2020",
                title: "Part Time jobs, QMO Academy",
                detail:
                  "Had a part time jobs as a photographer, videographer and graphic designer",
              },
              {
                dateTime: "Jan 2018",
                title: '"Hello World!"',
                detail: "Started to study for computer science degree",
              },
            ]}
          />,
          <Skills />,
        ])}
      </div>
    </Layout>
  );
}
