import { motion } from "framer-motion";
import React from "react";
import styles from "./timeLine.module.scss";

export default function Skills() {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <div className={styles.skills}>
        <h2>Education and Skills</h2>
        <br></br>
        <h3>Education</h3>
        <div className={styles.eduItem}>
          - Bachelor of Computer Science Minor in Data Science, Monash
          University
        </div>
        <div className={styles.eduItem}>
          - UEC and SPM certificate, Chung Hwa High School, Muar
        </div>
        <div className={styles.eduLink}>
          <a
            target="_blank"
            href="https://www.udemy.com/certificate/UC-637348cb-4142-49e9-a440-26772b1ab72d/"
          >
            {" "}
            - The Complete 2020 Flutter Development Bootcamp with Dart, Udemy
          </a>
        </div>
        <br></br>
        <br></br>
        <h3>Programming Languages</h3>
        <h4>Dart, Go, Javascript/Typescript, Python, C, Java/Kotlin, R</h4>
        <br></br>
        <br></br>
        <h3>Industry Skills</h3>
        <div className={styles.skillsTable}>
          <div className={styles.skillsItem}>
            <img src={"./icons/flutter.svg"}></img>
            <h4>Flutter</h4>
          </div>
          <div className={styles.skillsItem}>
            <img src={"./icons/go.svg"}></img>
            <h4>Go</h4>
          </div>
          <div className={styles.skillsItem}>
            <img src={"./icons/next-js.svg"}></img>
            <h4>Next.js</h4>
          </div>

          <div className={styles.skillsItem}>
            <img src={"./icons/android.svg"}></img>
            <h4>Android</h4>
          </div>
        </div>
        <br></br>
        <br></br>
        <h3>Software Tools</h3>
        <h4>
          PostgreSQL, Oracle SQL Developer, Git, Tableau, Adobe PhotoShop, Adobe
          Premiere Pro
        </h4>
      </div>
    </motion.div>
  );
}

/*

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',  
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function TimeLine() {
  const classes = useStyles();

  return (
<motion.div className={styles.tlContainer} initial="pageInitial" animate="pageAnimate" variants={{
  pageInitial: {
    opacity: 0
  },
  pageAnimate: {
    opacity: 1
  },
  
}}>
<ul className={styles.timeline}>
  <li className={styles.work}>
    <input className={styles.radio} id='work1' name='works' type='radio'/>
    <div className={styles.relative}>
      <label>Lorem ipsum dolor sit amet</label>
      <span className={styles.date}>08 May 2013</span>
      <span className={styles.circle}></span>
    </div>
    <div className={styles.content}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus dicta qui est optio rerum.
      </p>
    </div>
  </li>
</ul>
</motion.div>

  );
}

*/

/*

function timeLineItem(data:TimeLineData):JSX.Element {
  let ss:string = '/';
  let detail :JSX.Element =data.link ?   <div className={styles.timeLineLink}><Link href="`${ss}`"><div className={tl.timeLineLinkFont}>Explore</div></Link></div>:<div className={styles.timeLineLink}></div>;
 

  return(
     <TimelineItem >
       
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
         
            <br></br>
          <TimelineContent className={styles.timeLineBG}>
          <div className={styles.dateColor}>
            {data.dateTime}
            </div>
  <div className={styles.timeLineTitle}>
  {data.title}
    </div>          

 <br></br>
  {detail}
          </TimelineContent>
          </TimelineItem>
  );
}
*/
/*
 function ss():JSX.Element{
  return (
            
  
      <ul className={`${tl.timeline} ${tl.timeline_centered}`}>

          <li className={tl.timeline_item}>
              <div className={tl.timeline_info}>
                  <span>April 02, 2016</span>
              </div>
              <div className={tl.timeline_marker}></div>
              <div className={tl.timeline_content}>
                  <h3 className={tl.timeline_title}>Event Title</h3>
                  <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                      eu pede mollis pretium. Pellentesque ut neque. </p>
              </div>
          </li>
          <li className={tl.timeline_item}>
              <div className={tl.timeline_info}>
                  <span>April 28, 2016</span>
              </div>
              <div className={tl.timeline_marker}></div>
              <div className={tl.timeline_content}>
                  <h3 className={tl.timeline_title}>Event Title</h3>
                  <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                      eu pede mollis pretium. Pellentesque ut neque. </p>
              </div>
          </li>
      </ul>
 );
}
*/
