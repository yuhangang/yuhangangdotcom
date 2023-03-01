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
        <br></br>
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
        <h3>Programming Languages</h3>
        <br></br>
        Dart, Go, Javascript/Typescript, Python, C, Java/Kotlin, R<br></br>
        <br></br>
        <h3>Industry Skills</h3>
        <br></br>
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
        <br></br>
        PostgreSQL, Oracle SQL Developer, Git, Tableau, Adobe PhotoShop, Adobe
        Premiere Pro
      </div>
    </motion.div>
  );
}
