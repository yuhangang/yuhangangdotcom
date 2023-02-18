import Head from "next/head";
import Link from "next/link";
import React from "react";
//import ImageCarousel from "../components/carousel"
import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from "../styles/page_styles/styles.module.scss";
import { siteTitle } from "../components/layout";
import DesNav from "../components/navBar/NavBar";
import styles from "../styles/page_styles/project.module.scss";

const postVariants = {
  initial: { scale: 1, y: 0, opacity: 0.5 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 1,
    y: 0,
    opacity: 0.5,
    transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

const pageTitle: string = siteTitle + " - projects";

export default function Projects({}) {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <DesNav />

      <div className={styles.projectContainer}>
        {slider}
        <div className={styles.bottomFixed}></div>
      </div>
    </div>
  );
}

const SliderItem = function (input: {
  char: string;
  url: string;
  imageUrl: string;
}): JSX.Element {
  return (
    <div className={styles.sliderItem}>
      <img src={input.imageUrl}></img>
      <div className={styles.homeButton}>
        <Link href={input.url}>EXPLORE</Link>
      </div>
    </div>
  );
};

const slider = (
  <>
    <AwesomeSlider
      cssModule={AwsSliderStyles}
      className={styles.aws_btn}
      fillParent={true}
      selected={0}
      infinite={false}
      bullets={false}
    >
      {SliderItem({
        char: "1",
        url: "/yuhangang.com",
        imageUrl: "/images/website.png",
      })}
      {SliderItem({
        char: "1",
        url: "/theranos",
        imageUrl: "/images/theranos.png",
      })}
    </AwesomeSlider>
  </>
);
