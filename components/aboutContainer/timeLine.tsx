import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import styles from "./timeLine.module.scss";
import tl from "./tl.module.scss";

interface TimeLineData {
  dateTime: string;
  title: string;
  detail?: string | JSX.Element;
  link?: string;
}

function TimeLineItem(props: TimeLineData): JSX.Element {
  let detail: JSX.Element = props.link ? (
    <div className={styles.timeLineLink} key={props.title}>
      <Link href={props.link}>
        <div className={tl.timeLineLinkFont}>Explore</div>
      </Link>
      <br></br>
    </div>
  ) : (
    <div></div>
  );

  return (
    <li className={tl.timeline_item}>
      <div className={tl.timeline_info}>
        <div
          style={{
            wordBreak: "break-word",
            overflowWrap: "break-word",
            whiteSpace: "pre-wrap",
            textOverflow: "ellipsis",
            maxWidth: "80vw",
            fontWeight: 300,
          }}
        >
          {props.dateTime}
        </div>
      </div>
      <div className={tl.timeline_marker}></div>
      <div className={tl.timeline_content}>
        <h3 className={tl.timeline_title}>{props.title}</h3>
        <p>{props.detail ? props.detail : ""}</p>
        {detail}
      </div>
    </li>
  );
}

export default function TimeLine({
  title,
  items,
}: {
  title: string;
  items: TimeLineData[];
}) {
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
      <div className={styles.work}>
        <h2>{title}</h2>

        <ul className={`${tl.timeline}${styles.timeline}`}>
          {items ? items.map(TimeLineItem) : []}
        </ul>
      </div>
    </motion.div>
  );
}
