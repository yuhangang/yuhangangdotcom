import { motion } from "framer-motion";
import React from "react";
import styles from "./timeLine.module.scss";

export default function Skills() {
  return (
    <div>
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
        <h3>Skills</h3>
        <br></br>
        Flutter, Go, Javascript/Typescript, Python, C, Kotlin, Swift, R<br></br>
        <br></br>
        <br></br>
        <h3>Software Tools</h3>
        <br></br>
        PostgreSQL, Oracle SQL Developer, Git, Tableau, Adobe PhotoShop, Adobe
        Premiere Pro
      </div>
    </div>
  );
}
