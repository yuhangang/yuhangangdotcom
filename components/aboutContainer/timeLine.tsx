import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import styles from "./timeLine.module.scss";
import tl from "./tl.module.scss";






interface TimeLineData{
  dateTime :string;
  title : string;
  detail?:string| JSX.Element;
  link? : string ; 
} 

function TimeLineItem(data:TimeLineData):JSX.Element {
  let detail :JSX.Element =data.link ?   <div className={styles.timeLineLink}><Link href={data.link}><div className={tl.timeLineLinkFont}>Explore</div></Link><br></br></div>:<div></div>;


  //let detail :JSX.Element =data.link ?   <div className={tl.timeLineLink}>{data.detail}</div>:<div className={tl.timeLineLink}></div>;
 

  return(
    <li className={tl.timeline_item}>
    <div className={tl.timeline_info}>
        <div style={{wordBreak: "break-word",overflowWrap:"break-word",whiteSpace:"pre-wrap",textOverflow:"ellipsis",maxWidth:"80vw",fontWeight:"lighter"}}>{data.dateTime}</div>
    </div>
    <div className={tl.timeline_marker}></div>
    <div className={tl.timeline_content}>
        <h3 className={tl.timeline_title}>{data.title}</h3>
        <p>{data.detail? data.detail:""}</p>
    {detail}
            
    </div>
</li>
  );
}

 
// export default function TimeLine(input:{title:string,items:TimeLineData[]}) {
export default function TimeLine({title, items}: {title: string, items: TimeLineData[]}) {


 

 // const timeLine = <Timeline align="left" className={styles.timeLine}>
//{timeLinesItems.map(timeLineItem)}</Timeline>;
  return (
<motion.div initial="pageInitial" animate="pageAnimate" variants={{
  pageInitial: {
    opacity: 0
  },
  pageAnimate: {
    opacity: 1
  },
  
}}>
<div className={styles.work}>
<h2 style={{maxWidth:"100vw",textOverflow:"clip",color:"#6fe9d5"}}>{title}</h2>
      
<ul className={`${tl.timeline}${styles.timeline}`}>

{items ? items.map(TimeLineItem):[]}


</ul>
     
      </div>
      

    
     
</motion.div>

  );
}

